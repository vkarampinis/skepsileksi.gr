import Script from "next/script";

export default function GTagManager() {
  return (
    <>
      <Script
        id="gtag-src"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J0REX41KBJ"
        strategy="afterInteractive"
      ></Script>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-J0REX41KBJ');
        `}
      </Script>
    </>
  );
}
