import { useContext, useEffect, useRef, useState } from "react";
import { AppBar, Box, IconButton, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "./img/logo.webp";
import iconX from "./img/X.svg";
import iconTg from "./img/telegram.svg";
import iconLan from "./img/language.svg";
import iconDropdown from "./img/dropdown.svg";
import ColorModeContext from "@/contexts/colorModeContext";
import { useLanguage } from "./language";
import isMobile from 'is-mobile'



export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  // const pathname = usePathname();

  const lanItem = [
    {
      txt: "EN",
      code: "en",
    },
    {
      txt: "繁体中文",
      code: "zhtw",

    },
    {
      txt: "简体中文",
      code: "zh",
    },
    {
      txt: "Pусский",
      code: "ru",

    },
    {
      txt: "한국어",
      code: "ko",
    },
    {
      txt: "日本語",
      code: "ja",

    },
  ];

  // const { currentLanguage, setLanguage } = useContext(LanguageContext);

  const [show, setShow] = useState(false)
  const handleClick = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  // @ts-ignore
  const { lan, updateLanguage } = useLanguage();
  // @ts-ignore
  const setLanguage = (newLanguage) => {
    updateLanguage(newLanguage);
    setShow(false)

  };
  // const setLanguage = (lan) => {
  //   localStorage.setItem('language', lan)
  //   window.location.reload()
  // }
  // const language = localStorage.getItem('language')
  // console.log(lan) 

  const itemsRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const handleClickOutside = (event) => {
      // @ts-ignore
      if (itemsRef.current && !itemsRef.current.contains(event.target) && show) {
        setShow(false)
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [show]);
  return (
    <div
      className="header"
    >
      <h1 className={show ? "m-h-r flex items-center gap-2 text-3xl font-bold" : "flex items-center gap-2 text-3xl font-bold"}>
        <Image
          className='logo'
          src={logo}
          alt="logo"
        />
        <Link className="logo-tit" href="/">AUTOInscription</Link>
        {isMobile() && show &&
          <Image className="m-show-icon-r" src={iconDropdown} alt='' />
        }
      </h1>
      <div className="header-r">
        <div className="icons">
          <a href="https://twitter.com/autoinscription" target="blank" className="item"><Image src={iconX} alt="" /></a>
          <a href="https://t.me/autoinscription" target="blank" className="item"><Image src={iconTg} alt="" /></a>
        </div>
        <div className="language">
          <div className="item-fir">
            <Image onClick={handleClick} className="lanIcon" src={iconLan} alt='' />
            <div onClick={handleClick} className="lanContent">
              {lanItem.find(item => item.code === lan)?.txt || 'EN'}
              <Image className={show ? "iconDropdown iconDropdown-r" : "iconDropdown"} src={iconDropdown} alt='' />
              <div ref={itemsRef} className="items" style={show ? { display: 'flex' } : { display: 'none' }}>
                {
                  lanItem.map((item, index) => {
                    return (
                      // @ts-ignore
                      <div key={index} onClick={() => { setLanguage(item.code) }} className={lan === item.code ? 'lan-active' : ''}>{item.txt}</div>
                    )
                  })
                }
              </div>
            </div>
            {
              isMobile() &&
              <div ref={itemsRef} className="m-lan-main" style={show ? { display: 'flex' } : { display: 'none' }}>
                {
                  lanItem.map((item, index) => {
                    return (
                      // @ts-ignore
                      <div key={index} onClick={() => { setLanguage(item.code) }} className={lan === item.code ? 'lan-active' : ''}>{item.txt}</div>
                    )
                  })
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
