import "@fontsource/ubuntu/700.css";
import FacebookPixel from "../components/FacebookPixel";
import "../styles/globals.css";

function _App({ Component, pageProps }) {
  return (
    <>
      <FacebookPixel />
      <Component {...pageProps} />
    </>
  );
}

export default _App;
