import { Box, Button } from "@mui/material";
import isMobile from 'is-mobile'
import { useLanguage } from "./language";


interface LogProps {
  title: string;
  text: string;
  logs: string[];
  onClear: () => void;
}
export default function Log({ title, text, logs, onClear }: LogProps) {
  // @ts-ignore
  const { texts, updateLanguage } = useLanguage();

  return (
    <div className=" mt-5 flex flex-col gap-2">
      <div className=" flex items-center gap-4">
        {
          isMobile() ?
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="main-item-txt main-item-txt-1" style={{ maxHeight: 40 }}>
                <p></p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>{title}</div>:
                  <Button
                    className="clearBtn"
                    variant="contained"
                    color="secondary"
                    onClick={onClear}
                  >
                    {texts.Clear}
                  </Button>
                </div>
              </div>
              <div className="main-item-txt"><span>{text}</span></div>
            </div>
            :
            <div className="main-item-txt"><p></p><div>{title}</div>&nbsp;<span>{text}</span>&nbsp;:</div>
        }
        {
          !isMobile() &&
          <Button
            className="clearBtn"
            variant="contained"
            color="secondary"
            onClick={onClear}
          >
            {texts.Clear}
          </Button>
        }

      </div>
      <Box
        className="log-main flex h-[600px] flex-col gap-1 overflow-auto rounded-lg px-4 py-2"
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
          boxShadow: theme.shadows[1],
        })}
      >
        {logs.map((log, index) => (
          <div
            key={log + index}
            className=" flex items-center"
          >
            {log}
          </div>
        ))}
      </Box>
    </div>
  );
}
