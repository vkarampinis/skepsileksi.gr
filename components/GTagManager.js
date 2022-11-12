import Script from "next/script";

const pageview = () => {
  window.fbq("track", "PageView");
};

export default function GTagManager() {
  return (
    <>
      <Script
        id="gtag-src"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J0REX41KBJ"
      ></Script>
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J0REX41KBJ');
  `,
        }}
      ></Script>
    </>
  );
}
