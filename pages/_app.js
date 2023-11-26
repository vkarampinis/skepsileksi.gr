import "@fontsource/ubuntu/700.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import FacebookPixel from "../components/FacebookPixel";
import GTagManager from "../components/GTagManager";
import HubSpotTracking from "../components/HubSpotTracking";
import Microanalytics from "../components/Microanalytics";
import "../styles/globals.css";

function _App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        defaultTitle="Λογοθεραπεία"
        titleTemplate="%s • Σκέψη - Λέξη"
        description="Λογοθεραπεία εξ αποστάσεως μέσω skype, zoom, σε παιδιά Ελλήνων εσωτερικού και εξωτερικού με αυτισμό, τραυλισμό, διαταραχές άρθρωσης, μαθησιακές δυσκολίες. Καθοδήγηση γονέων και εκπαιδευτικό υλικό. Ανεξάρτητα από το που μένεις, η βοήθεια είναι πάντα δίπλα σου!"
        openGraph={{
          type: "website",
          url: "https://skepsileksi.gr",
          title: "Online Λογοθεραπεία μέσω Skype, Zoom • Σκέψη - Λέξη",
          description:
            "Λογοθεραπεία εξ αποστάσεως μέσω skype, zoom, σε παιδιά Ελλήνων εσωτερικού και εξωτερικού με αυτισμό, τραυλισμό, διαταραχές άρθρωσης, μαθησιακές δυσκολίες. Καθοδήγηση γονέων και εκπαιδευτικό υλικό. Ανεξάρτητα από το που μένεις, η βοήθεια είναι πάντα δίπλα σου!",
          images: [
            {
              url: "https://skepsileksi.gr/images/og-image.jpeg",
              width: 1200,
              height: 630,
              alt: "Online Λογοθεραπεία μέσω Skype, Zoom • Σκέψη - Λέξη",
              type: "image/jpeg",
            },
          ],
          locale: "el_GR",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FacebookPixel />
      <HubSpotTracking />
      <Microanalytics />
      <GTagManager />
      <Component {...pageProps} />
    </>
  );
}

export default _App;
