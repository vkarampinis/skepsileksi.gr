import "@fontsource/ubuntu/700.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";
import FacebookPixel from "../components/FacebookPixel";
import GTagManager from "../components/GTagManager";
import HubSpotTracking from "../components/HubSpotTracking";
import Microanalytics from "../components/Microanalytics";
import "../styles/globals.css";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    person_profiles: "always",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
    session_recording: {
      maskAllInputs: false,
    },
  });
}

function _App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <PostHogProvider client={posthog}>
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
      </PostHogProvider>
    </>
  );
}

export default _App;
