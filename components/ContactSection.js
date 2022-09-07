import ContactForm from "./ContactForm";
import H from "./H";
import Highlight from "./Highlight";
import MyTelephone from "./MyTelephone";

export default function ContactSection() {
  return (
    <section>
      <div className="max-w-6xl p-4 mx-auto mt-10 prose prose-xl md:mt-24 ">
        <H size={2}>Δωρεάν αξιολόγηση</H>
        <p>
          Ανεξάρτητα από το που μένεις, η βοήθεια είναι πάντα{" "}
          <Highlight>δίπλα σου!</Highlight>
        </p>

        <p>
          Kαλέστε με στο <MyTelephone /> ή συμπληρώστε την φόρμα και θα
          επικοινωνήσω σύντομα μαζί σας.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
