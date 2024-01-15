import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import icon1 from "./img/logo.webp";
import './style.css'
import { useLanguage } from "./language";
import isMobile from 'is-mobile'


export default function Media() {
  const pathname = usePathname();

  // @ts-ignore
  const { texts, updateLanguage } = useLanguage();

  const nav = [
    {
      title: texts.Inscription,
      link: "/",
    },
    {
      title: texts.IercPow,
      link: "/ierc",
    },
  ];


  return (
    <div className="inscription">
      <div className="inscription-tit">
        AUTOInscription
      </div>
      <div className="inscription-txt">
        <Image src={icon1} alt="" />
        <div>{texts.itsanonline} <span>{texts.inscription}</span> {texts.toolbox}</div>
        {
          isMobile() ?
            <>
              <div className="open-main">
                <div>代码:<a href="https://github.com/AUTOInscription/Inscription-mint" target="_blank">Github</a></div>
                <div>开发者:<a href="https://twitter.com/AutoinscriptDev" target="_blank">@AutoinscriptDev</a></div>
              </div>
              <div className="open-main open-main2">
                <div><p>打赏地址:</p><a>0xBd2eb79C47Ee11670dFaae963a13c7aE5d922AD9</a></div>
              </div>
            </>
            :
            <div className="open-main">
              <div>代码:<a href="https://github.com/AUTOInscription/Inscription-mint" target="_blank">Github</a></div>
              <div>开发者:<a href="https://twitter.com/AutoinscriptDev" target="_blank">@AutoinscriptDev</a></div>
              <div>打赏地址:<a>0xBd2eb79C47Ee11670dFaae963a13c7aE5d922AD9</a></div>
            </div>
        }
      </div>

      <div className="navBox flex h-full items-center gap-4 text-xl font-semibold">
        {nav.map(({ title, link }) => (
          <Box
            component={Link}
            key={link}
            href={link}
            className="navItem flex h-full items-center"
            sx={(theme) => ({
              background:
                link === pathname
                  ? 'linear-gradient(90deg, #36bff1 0%, #125bbd 100%)'
                  : '#14151b',
              // "&:hover": {
              //   color: theme.palette.primary.main,
              // },
            })}
          >
            {title}
          </Box>
        ))}
      </div>
    </div>
  );
}
