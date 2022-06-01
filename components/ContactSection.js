import H from "./H";
import Highlight from "./Highlight";

export default function ContactSection() {
  return (
    <section>
      <div className="max-w-6xl p-4 mx-auto mt-24 prose prose-xl ">
        <H size={2}>Δωρεάν αξιολόγηση</H>
        <p>
          Ανεξάρτητα από το πού μένεις, η βοήθεια είναι πάντα{" "}
          <Highlight>δίπλα σου!</Highlight>
        </p>
      </div>
    </section>
  );
}
