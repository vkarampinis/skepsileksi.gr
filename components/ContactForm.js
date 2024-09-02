import Script from "next/script";
import { usePostHog } from "posthog-js/react";
import { useEffect, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef(null);
  const typingTracked = useRef(false);
  const posthog = usePostHog();

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
          onFormReady: ($form) => {
            // Track form visibility
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  posthog.capture("form_visible");
                }
              },
              {
                threshold: 0.1, // Trigger when 10% of the form is visible
              }
            );
            if (formRef.current) {
              observer.observe(formRef.current);
            }

            // Track typing
            $form.addEventListener("input", () => {
              if (!typingTracked.current) {
                posthog.capture("form_typing_started");
                typingTracked.current = true;
              }
            });
          },
        });
      }
    });
  }, []);

  return (
    <>
      <div id="contact-form" ref={formRef} className="mt-10"></div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src="//js-eu1.hsforms.net/forms/v2.js"
      />
    </>
  );
}
