import "@fontsource/ubuntu/700.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import FacebookPixel from "../components/FacebookPixel";
import HubSpotTracking from "../components/HubSpotTracking";
import "../styles/globals.css";

function _App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        titleTemplate="%s • Σκέψη - Λέξη"
        description="Online Λογοθεραπεία • Σκέψη - Λέξη"
        openGraph={{
          type: "website",
          url: "https://skepsileksi.gr",
          title: "Online Λογοθεραπεία • Σκέψη - Λέξη",
          description:
            "Βοηθώντας τα παιδιά να βρουν τις λέξεις τους ώστε στο μέλλον οι σκέψεις τους να πάρουν μορφή μέσω της τηλεθεραπείας",
          images: [
            {
              url: "https://skepsileksi.gr/images/og-image.jpeg",
              width: 1200,
              height: 630,
              alt: "Online Λογοθεραπεία • Σκέψη - Λέξη",
              type: "image/jpeg",
            },
          ],
          locale: "el_GR",
        }}
        canonical
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FacebookPixel />
      <HubSpotTracking />
      <Component {...pageProps} />
    </>
  );
}

export default _App;
