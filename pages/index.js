import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container flex flex-col h-screen max-w-full text-xl bg-my-white text-my-base font-body">
      <Head>
        <title>Λογοθεραπεία</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex-grow">content</div>
      <Footer />
    </div>
  );
}
