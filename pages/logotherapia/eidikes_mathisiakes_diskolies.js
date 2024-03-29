import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import RedText from "../../components/RedText";
import TextSection from "../../components/TextSection";

export default function EidikesMathisiakesDiskolies() {
  return (
    <BaseLayout title="Ειδικές μαθησιακές δυσκολίες">
      <TextSection>
        <H size={2}>Ειδικές μαθησιακές δυσκολίες</H>
        <H size={3}>Εικόνα παιδιού</H>
        <p>
          Σύμφωνα με το Διαγνωστικό και Στατιστικό Εγχειρίδιο Ψυχικών Διαταραχών
          της Αμερικανικής Ψυχιατρικής Εταιρείας, με τον όρο Ειδικές Μαθησιακές
          Δυσκολίες (ΕΜΔ), αναφερόμαστε στις δυσκολίες που εμφανίζονται στην
          ανάγνωση, στην γραφή και στα μαθηματικά. Αντίστοιχα, λοιπόν, έχουμε
          τις εξής ΕΜΔ: δυσλεξία, δυσγραφία, δυσαριθμησία. Όμως, για να είμαστε
          σε θέση να χρησιμοποιήσουμε αυτούς τους όρους, θα πρέπει να
          αποκλείσουμε την συνύπαρξη των παρακάτω:
        </p>
        <ul className="list-disc list-outside">
          <li>οπτικές, ακουστικές ή κινητικές αναπηρίες</li>
          <li>νοητική υστέρηση </li>
          <li>συναισθηματικές διαταραχές</li>
          <li>
            περιορισμένο οικογενειακό, πολιτιστικό και οικονομικό περιβάλλον
          </li>
        </ul>
        <H size={4}>Aνάγνωση</H>
        <ul className="list-disc list-outside">
          <li>αργός, συλλαβιστός ρυθμός ανάγνωσης</li>
          <li>
            παράλειψεις, αντικαταστάσεις, αντιμεταθέσεις, προσθήκες γραμμάτων,
            συλλαβών, λέξεων. Για παράδειγμα, νεό αντί για νερό (παράλειψη),
            μπιστότο αντί για μπισκότο (αντικατάσταση), καλέπο αντί για καπέλο
            (αντιμετάθεση), σαλαλόνι αντι για σαλόνι (προσθήκη).
          </li>
          <li>δυσκολία στην κατανόηση του κειμένου</li>
          <li>παράλειψη ή επαναληψη μιας σειράς</li>
          <li>δυσκολία στην ανάγνωση μη οικείων λέξεων</li>
          <li>δεν σταματάει κατάλληλα στο κόμμα και τις τελείες</li>
          <li>
            δυσκολία στην διάκριση της σημαντικής και ασήμαντης πληροφορίας
          </li>
        </ul>
        <H size={4}>Γραπτός λόγος</H>
        <ul className="list-disc list-outside">
          <li>δυσνόητος γραφικός χαρακτήρας</li>
          <li>
            λανθασμένα όρια των λέξεων, π.χ. Θέ λω ναφάω μακαρόνια μετυρί αντί
            για θέλω να φάω μακαρόνια με τυρί
          </li>
          <li>δυσκολία στην αντιγραφή</li>
          <li>
            δυσκολία κατάκτησης βασικών κανόνων ορθογραφίας τόσο στην κατάληξη
            της λέξης π.χ. χρωματ - <RedText>ίζω</RedText>, όσο και στο θέμα
            π.χ. <RedText>ζωγράφ</RedText> - ος
          </li>
          <li>
            παράλειψεις, αντικαταστάσεις, αντιμεταθέσεις, προσθήκες γραμμάτων,
            συλλαβών
          </li>
          <li>καθρεπτική γραφή π.χ. όρεν αντί για νερό.</li>
          <li>δυσκολία στην οργάνωση και στην δομή γραπτού λόγου</li>
        </ul>
        <H size={4}>Μαθηματικά</H>
        <ul className="list-disc list-outside">
          <li>
            δυσκολία στην κατάκτηση μαθηματικών εννοιών π.χ. ποσότητα, χρόνος,
            χρονική ακολουθία
          </li>
          <li>δυσκολία στην χρήση μαθηματικών συμβόλων</li>
          <li>δυσκολία επίλυσης μαθηματικών προβλημάτων</li>
          <li>δυσκολία στην μέτρηση</li>
          <li>δυσκολία στον υπολογισμό μαθηματικών πράξεων</li>
        </ul>
      </TextSection>
      <TextSection>
        <H size={2}>Θεραπευτική παρέμβαση</H>
        <p>
          Ο θεραπευτής, αρχικά, προχωράει στην λήψη ενός λεπτομερούς ιστορικού.
          Στην συνέχεια, γίνεται η αξιολόγηση του παιδιού μέσα από έγκυρα τεστς
          τα οποία μας βοηθούν να εντοπίσουμε σε ποιους από τους παραπάνω τομείς
          εμφανίζει το παιδί δυσκολίες. Στην συνέχεια αναπτύσσουμε το
          θεραπευτικό μας πλάνο.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}

function Red({ children }) {
  return <span className="font-bold text-red-500">{children}</span>;
}
