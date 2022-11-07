import Script from "next/script";
import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          target: "#contact-form",
          region: "eu1",
          portalId: "25929327",
          formId: "9dc0023a-6b5b-4fc5-be28-297c32c7c5ca",
        });
      }
    });
  }, []);

  return (
    <>
      <div id="contact-form" className="mt-10"></div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src="//js-eu1.hsforms.net/forms/v2.js"
      />
    </>
  );
}
