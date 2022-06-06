import { NextSeo } from "next-seo";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function BaseLayout({ title, children, className = "" }) {
  return (
    <Body>
      <NextSeo title={title} />
      <Header />
      <div className={`flex-grow w-full mx-auto ${className}`}>{children}</div>
      <Footer />
    </Body>
  );
}
