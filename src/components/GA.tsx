/* cspell:disable */

import Script from "next/script";

export function GA() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FLGFDKLSRY" />
      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FLGFDKLSRY');
        `}
      </Script>
    </>
  );
}
