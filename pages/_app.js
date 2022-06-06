import "@fontsource/ubuntu/700.css";
import FacebookPixel from "../components/FacebookPixel";
import HubSpotTracking from "../components/HubSpotTracking";
import "../styles/globals.css";

function _App({ Component, pageProps }) {
  return (
    <>
      <FacebookPixel />
      <HubSpotTracking />
      <Component {...pageProps} />
    </>
  );
}

export default _App;
