import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import TextSection from "../../components/TextSection";

export default function SichnotitaSinedrion() {
  return (
    <BaseLayout title="Συχνότητα συνεδριών">
      <TextSection>
        <H size={2}>Συχνότητα συνεδριών</H>
        <p>
          Η συχνότητα των συνεδριών εξαρτάται από την διάγνωση και τις ανάγκες
          του κάθε παιδιού. Συνήθως, γίνονται δύο συνεδρίες την εβδομάδα, τις
          μέρες και τις ώρες που έχουν συμφωνηθεί. Η διάρκεια κάθε συνεδρίας
          είναι 45’. Μετά το τέλος κάθε συνεδρίας ακολουθεί ενημέρωση για την
          πρόοδο του παιδιού. Επιπλέον δίνονται οι απαραίτητες οδηγίες οι οποίες
          σε βοηθούν να δουλέψεις σωστά το παιδί σου τις επόμενες μέρες.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}

function Red({ children }) {
  return <span className="font-bold text-red-500">{children}</span>;
}
