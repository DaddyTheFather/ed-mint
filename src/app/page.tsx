"use client";
import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  Chain,
  createWalletClient,
  Hex,
  http,
  isAddress,
  parseEther,
  SendTransactionErrorType,
  stringToHex,
  webSocket,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";
import Log from "@/components/Log";
import { ChainKey, inscriptionChains } from "@/config/chains";
import useInterval from "@/hooks/useInterval";
import { handleAddress, handleLog } from "@/utils/helper";
// @ts-ignore
import { useLanguage } from "@/components/language";
import isMobile from 'is-mobile'

const example =
  'Data:,{"p":"asc-20","op":"mint","tick":"aval","amt":"100000000"}';

type RadioType = "meToMe" | "manyToOne";

type GasRadio = "all" | "tip";



export default function Home() {
  const [chain, setChain] = useState<Chain>(mainnet);
  const [privateKeys, setPrivateKeys] = useState<Hex[]>([]);
  const [radio, setRadio] = useState<RadioType>("meToMe");
  const [toAddress, setToAddress] = useState<Hex>();
  const [rpc, setRpc] = useState<string>();
  const [inscription, setInscription] = useState<string>("");
  const [gas, setGas] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [successCount, setSuccessCount] = useState<number>(0);
  const [gasRadio, setGasRadio] = useState<GasRadio>("tip");

  const pushLog = useCallback((log: string, state?: string) => {
    setLogs((logs) => [
      handleLog(log, state),
      ...(logs.length >= 1000 ? logs.slice(0, 1000) : logs),
    ]);
  }, []);

  const client = createWalletClient({
    chain,
    transport: rpc && rpc.startsWith("wss") ? webSocket(rpc) : http(rpc),
  });
  const accounts = privateKeys.map((key) => privateKeyToAccount(key));

  useInterval(
    async () => {
      const results = await Promise.allSettled(
        accounts.map((account) => {
          return client.sendTransaction({
            account,
            to: radio === "meToMe" ? account.address : toAddress,
            value: 0n,
            ...(inscription
              ? {
                data: stringToHex(inscription),
              }
              : {}),
            ...(gas > 0
              ? gasRadio === "all"
                ? {
                  gasPrice: parseEther(gas.toString(), "gwei"),
                }
                : {
                  maxPriorityFeePerGas: parseEther(gas.toString(), "gwei"),
                }
              : {}),
          });
        }),
      );
      results.forEach((result, index) => {
        const address = handleAddress(accounts[index].address);
        if (result.status === "fulfilled") {
          pushLog(`${address} ${result.value}`, "success");
          setSuccessCount((count) => count + 1);
        }
        if (result.status === "rejected") {
          const e = result.reason as SendTransactionErrorType;
          let msg = `${e.name as string}: `;
          if (e.name === "TransactionExecutionError") {
            msg = msg + e.details;
          }
          if (e.name == "Error") {
            msg = msg + e.message;
          }
          pushLog(`${address} ${msg}`, "error");
        }
      });
    },
    running ? delay : null,
  );

  const run = useCallback(() => {
    if (privateKeys.length === 0) {
      pushLog("No private key", "error");
      setRunning(false);
      return;
    }

    if (radio === "manyToOne" && !toAddress) {
      pushLog("No address", "error");
      setRunning(false);
      return;
    }

    // if (!inscription) {
    //   setLogs((logs) => [handleLog("没有铭文", "error"), ...logs]);
    //   setRunning(false);
    //   return;
    // }

    setRunning(true);
  }, [privateKeys.length, pushLog, radio, toAddress]);

 
  // @ts-ignore
  const { texts, updateLanguage } = useLanguage();

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-col">
        {
          isMobile() ?
            <>
              <div className="main-item-txt main-item-txt-1"><p></p>{texts.chain}:</div>
              <div className="main-item-txt"><span>{texts.selectTheChian}</span></div>
            </>
            :
            <div className="main-item-txt"><p></p>{texts.chain}&nbsp;<span>{texts.selectTheChian}</span>&nbsp;:</div>
        }
        <TextField
          className="TextField TextField-item"
          select
          defaultValue="eth"
          size="small"
          disabled={running}
          onChange={(e) => {
            const text = e.target.value as ChainKey;
            setChain(inscriptionChains[text]);
          }}
        >
          {Object.entries(inscriptionChains).map(([key, chain]) => (
            <MenuItem
              key={chain.id}
              value={key}
            >
              {chain.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className=" flex flex-col">
        {
          isMobile() ?
            <>
              <div className="main-item-txt main-item-txt-1"><p></p>{texts.PrivateKey}:</div>
              <div className="main-item-txt"><span>{texts.oneperline}</span></div>
            </>
            :
            <div className="main-item-txt"><p></p>{texts.PrivateKey}&nbsp;<span>{texts.oneperline}</span>&nbsp;:</div>
        }
        <TextField
          className="TextField-item"

          multiline
          minRows={2}
          size="small"
          placeholder={texts.Privatekeywithor}
          disabled={running}
          onChange={(e) => {
            const text = e.target.value;
            const lines = text.split("\n");
            const keys = lines
              .map((line) => {
                const key = line.trim();
                if (/^[a-fA-F0-9]{64}$/.test(key)) {
                  return `0x${key}`;
                }
                if (/^0x[a-fA-F0-9]{64}$/.test(key)) {
                  return key as Hex;
                }
              })
              .filter((x) => x) as Hex[];
            setPrivateKeys(keys);
          }}
        />
      </div>

      <RadioGroup
        row
        defaultValue="meToMe"
        onChange={(e) => {
          const value = e.target.value as RadioType;
          setRadio(value);
        }}
      >
        <FormControlLabel
          value="meToMe"
          control={<Radio />}
          label={texts.Rotation}
          disabled={running}
        />
        <FormControlLabel
          value="manyToOne"
          control={<Radio />}
          label={texts.TurnOneMore}
          disabled={running}
        />
      </RadioGroup>

      {radio === "manyToOne" && (
        <div className=" flex flex-col">
          {
            isMobile() ?
              <>
                <div className="main-item-txt main-item-txt-1"><p></p>{texts.Addressto}:</div>
                <div className="main-item-txt"><span> {texts.req}</span></div>
              </>
              :
              <div className="main-item-txt"><p></p>{texts.Addressto}&nbsp;<span> {texts.req}</span>&nbsp;:</div>
          }

          <TextField
            className="TextField-item"

            size="small"
            placeholder="Address"
            disabled={running}
            onChange={(e) => {
              const text = e.target.value;
              isAddress(text) && setToAddress(text);
            }}
          />
        </div>
      )}

      <div className=" flex flex-col">
        {
          isMobile() ?
            <>
              <div className="main-item-txt main-item-txt-1"><p></p>{texts.Inscription}:</div>
              <div className="main-item-txt"><span>{texts.originalInscription}</span></div>
            </>
            :
            <div className="main-item-txt"><p></p>{texts.Inscription} &nbsp;<span>{texts.originalInscription}</span>&nbsp;:</div>
        }
        <TextField
          className="TextField-item"

          size="small"
          placeholder={`${example}`}
          disabled={running}
          onChange={(e) => {
            const text = e.target.value;
            setInscription(text.trim());
          }}
        />
      </div>

      <div className=" flex flex-col">
        {
          isMobile() ?
            <>
              <div className="main-item-txt main-item-txt-1"><p></p>{texts.RPC}:</div>
              <div className="main-item-txt"><span>{texts.theDefault} </span></div>
            </>
            :
            <div className="main-item-txt"><p></p>{texts.RPC} &nbsp;<span>{texts.theDefault} </span>&nbsp;:</div>
        }
        <TextField
          className="TextField-item"

          size="small"
          placeholder="RPC"
          disabled={running}
          onChange={(e) => {
            const text = e.target.value;
            setRpc(text);
          }}
        />
      </div>

      <RadioGroup
        row
        defaultValue="tip"
        onChange={(e) => {
          const value = e.target.value as GasRadio;
          setGasRadio(value);
        }}
      >
        <FormControlLabel
          value="tip"
          control={<Radio />}
          label={texts.ExtraMinerTip}
          disabled={running}
        />
        <FormControlLabel
          value="all"
          control={<Radio />}
          label={texts.Totalgas}
          disabled={running}
        />
      </RadioGroup>

      <div className=" flex flex-col">
        {
          isMobile() ?
            <>
              <div className="main-item-txt main-item-txt-1"><p></p>{gasRadio === "tip" ? texts.AdditionalMinerTip : texts.Totalgas}:</div>
              <div className="main-item-txt"><span>{texts.optional}</span></div>
            </>
            :
            <div className="main-item-txt"><p></p>{gasRadio === "tip" ? texts.AdditionalMinerTip : texts.Totalgas}&nbsp;<span>{texts.optional}</span>&nbsp;:</div>
        }
        <TextField
          className="TextField-item"

          type="number"
          size="small"
          placeholder={`${gasRadio === "tip" ? texts.Default0 : texts.DefaultLatest
            }, ${texts.Unitgwei}, ${texts.example}`}
          disabled={running}
          onChange={(e) => {
            const num = Number(e.target.value);
            !Number.isNaN(num) && num >= 0 && setGas(num);
          }}
        />
      </div>

      <div className=" flex flex-col">
        {
          isMobile() ?
            <>
              <div className="main-item-txt main-item-txt-1"><p></p>{texts.IntervalTime}:</div>
              <div className="main-item-txt"><span>{texts.minimum}</span></div>
            </>
            :
            <div className="main-item-txt"><p></p>{texts.IntervalTime} &nbsp;<span>{texts.minimum}</span>&nbsp;:</div>

        }
        <TextField
          className="TextField-item"

          type="number"
          size="small"
          placeholder={texts.Default0ms}
          disabled={running}
          onChange={(e) => {
            const num = Number(e.target.value);
            !Number.isNaN(num) && num >= 0 && setDelay(num);
          }}
        />
      </div>

      <Button
        className="runBtn"
        variant="contained"
        color={running ? "error" : "success"}
        onClick={() => {
          if (!running) {
            run();
          } else {
            setRunning(false);
          }
        }}
      >
        {running ? texts.running : texts.run}
      </Button>

      <Log
        title={texts.Log}
        text={`(${texts.numberOfSuccesses} => ${successCount})`}
        logs={logs}
        onClear={() => {
          setLogs([]);
        }}
      />

    </div>
  );
}
