import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import TextSection from "../../components/TextSection";

export default function EidikiGlwsikiDiatarachiAntiliptouKaiEkfrastikouTupou() {
  return (
    <BaseLayout title="Ειδική γλωσσική διαταραχή αντιληπτικού ή και εκφραστικού τύπου (ΕΓΔ)">
      <TextSection>
        <H size={2}>
          Ειδική γλωσσική διαταραχή αντιληπτικού ή και εκφραστικού τύπου (ΕΓΔ)
        </H>
        <H size={3}>Εικόνα παιδιού</H>
        <p>
          Το παιδί που έχει διαγνωστεί με ΕΓΔ, παρουσιάζει σημαντική δυσκολία
          στην κατανόηση ή/και στην έκφραση του λόγου. Τα κύρια συμπτώματα που
          παρουσιάζει το παιδί είναι τα ακόλουθα:
        </p>
        <ul className="list-disc list-outside">
          <li>καθυστέρηση στο λόγο και στην ομιλία</li>
          <li>δυσκολία στην κατανόηση εντολών</li>
          <li>φωνολογική διαταραχή</li>
          <li>
            δυσκολία στην ορθή σύνταξη μιας πρότασης, επικρατεί απλοποιημένη
            δομή πρότασης
          </li>
          <li>μειωμένη αφηγηματική ικανότητα</li>
          <li>φτωχό λεξιλόγιο</li>
          <li>δυσκολία στην ανάκληση λέξεων</li>
        </ul>
      </TextSection>
      <TextSection>
        <H size={2}>Θεραπευτική παρέμβαση</H>
        <p>
          Ο θεραπευτής, αρχικά λαμβάνει το ιστορικό του παιδιού. Έπειτα, με την
          χρήση σταθμισμένων τεστς, αξιολογεί την εικόνα του εντοπίζοντας τα
          ελλείμματα που παρουσιάζονται στους παραπάνω τομείς. Στην συνέχεια
          οργανώνει το θεραπευτικό πλάνο σύμφωνα με τις ανάγκες του.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}

function Red({ children }) {
  return <span className="font-bold text-red-500">{children}</span>;
}
