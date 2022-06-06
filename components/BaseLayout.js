import { NextSeo } from "next-seo";
import Head from "next/head";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function BaseLayout({
  title = "Λογοθεραπεία",
  children,
  className = "",
}) {
  return (
    <Body>
      <NextSeo
        title={title}
        titleTemplate="%s • Σκέψη - Λέξη"
        openGraph={{
          type: "website",
          url: "https://skepsileksi.gr",
          title: "Online Τηλεθεραπεία • Σκέψη - Λέξη",
          description:
            "Βοηθώντας τα παιδιά να βρουν τις λέξεις τους ώστε στο μέλλον οι σκέψεις τους να πάρουν μορφή… μέσω της τηλεθεραπείας",
          images: [
            {
              url: "https://skepsileksi.gr/images/og-image.jpeg",
              width: 1200,
              height: 630,
              alt: "Online Τηλεθεραπεία • Σκέψη - Λέξη",
            },
          ],
        }}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Online Τηλεθεραπεία • Σκέψη - Λέξη" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`flex-grow w-full mx-auto ${className}`}>{children}</div>
      <Footer />
    </Body>
  );
}
