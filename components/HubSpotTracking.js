import Script from "next/script";

export default function HubSpotTracking() {
  return (
    <Script
      src="//js-eu1.hs-scripts.com/25929327.js"
      async
      defer
      id="hs-script-loader"
    />
  );
}
