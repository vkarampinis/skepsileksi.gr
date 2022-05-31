import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import RedText from "../../components/RedText";
import TextSection from "../../components/TextSection";

export default function FonologikiDiatarachi() {
  return (
    <BaseLayout>
      <TextSection>
        <H size={2}>Φωνολογική διαταραχή</H>
        <H size={3}>Εικόνα παιδιού</H>
        <p>
          Το παιδί που παρουσιάζει φωνολογική διαταραχή, παρουσιάζει ελλείμματα
          στο φωνολογικό σύστημα της μητρικής του γλώσσας. Το επίπεδο αυτών των
          ελλειμμάτων αντιστοιχεί σε παιδί μικρότερης χρονολογικής ηλικίας απ’
          ότι είναι ήδη το παιδί. Πιο απλά, το παιδί ενδέχεται να παρουσιάζει
          την εξής εικόνα:
        </p>
        <ul className="list-disc list-outside">
          <li>
            αντικατάσταση φωνημάτων που μοιάζουν ακουστικά ή στον τρόπο που
            παράγονται, π.χ. <RedText>φ</RedText>άλασσα αντί για{" "}
            <RedText>θ</RedText>άλασσα
          </li>
          <li>
            μεταθέσεις φωνημάτων, π.χ.: <RedText>βλ</RedText>ιβίο αντί για βι
            <RedText>βλ</RedText>ίο
          </li>
          <li>
            αναδιπλασιασμός ήχων, π.χ.: <RedText>τατά</RedText>λι αντί για{" "}
            <RedText>κου</RedText>τάλι
          </li>
          <li>
            απλοποιήσεις συμπλεγμάτων, π.χ. καρέ<RedText>κ</RedText>α αντί για
            καρέ
            <RedText>κλ</RedText>α
          </li>
          <li>
            πτώση φωνήματος ή συλλαβής, πχ.: χαίρι αντι για{" "}
            <RedText>μα</RedText>χαίρι.
          </li>
        </ul>
      </TextSection>
      <TextSection>
        <H size={2}>Θεραπευτική παρέμβαση</H>
        <p>
          Ο θεραπευτής αρχικά λαμβάνει το ιστορικό του παιδιού και στην συνέχεια
          αξιολογεί την εικόνα του προκειμένου να εντοπιστούν οι ελλείψεις που
          παρουσιάζονται. Η αξιολόγηση αυτή, γίνεται με την παρατήρηση της
          ομιλίας και την χρήση συγκεκριμένων τεστς που μας βοηθούν στην
          καταγραφή των ελλειμμάτων. Στην συνέχεια, ο θεραπευτής δημιουργεί ένα
          πρόγραμμα αποκατάστασης το οποίο είναι προσαρμοσμένο στις ανάγκες του
          κάθε παιδιού.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}
