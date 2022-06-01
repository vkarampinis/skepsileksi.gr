import Link from "next/link";
import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import TextSection from "../../components/TextSection";

const FAQTitles = [
  "Το 2 ετών παιδί μου εμφανίζει καθυστέρηση στην εξέλιξη της ομιλίας του. Ο παιδίατρός μου συνιστά να περιμένω ακόμα 1 χρόνο πριν κάνω κάποια ενέργεια. Θα έπρεπε να κάνω κάτι τώρα, ή να περιμένω;",
  "Το παιδί μου έχει ιστορικό συχνών μολύνσεων στα αυτάκια του(ωτίτιδα). Θα μπορούσε αυτό να έχει επιπτώσεις στην ομιλία ή τη γλωσσική ανάπτυξή του;",
  "Το παιδί μου είναι 3 χρονών και όταν μιλάει χρησιμοποιεί προτάσεις αλλά η ομιλία του δεν είναι καθαρή. Υπάρχει κάτι που πρέπει να κάνω;",
  "Γιατί είναι σημαντικό ν΄αντιμετωπιστούν άμεσα οι δυσκολίες στο λόγο και στην ομιλία ;",
];

export default function Sichnes_erotisis() {
  return (
    <BaseLayout>
      <TextSection>
        <H size={2}>Συχνές ερωτήσεις</H>
        <ul className="list-disc list-outside">
          {FAQTitles.map((text, index) => (
            <li key={index}>
              <Link href={"#faq-" + (index + 1)}>{text}</Link>
            </li>
          ))}
        </ul>
      </TextSection>
      <TextSection>
        <H size={4} id="faq-1">
          {FAQTitles[0]}
        </H>
        <p>
          Είναι αλήθεια ότι η εξέλιξη της ανάπτυξης των παιδιών διαφέρει, οπότε
          υπάρχουν διαφορές και στην ανάπτυξη της ομιλίας τους. Είναι επίσης
          αλήθεια ότι ένας ειδικός λογοθεραπευτής μπορεί συνήθως να προσδιορίσει
          αν η γλωσσική ανάπτυξη του παιδιού παρεκκλίνει από τη φυσιολογική.
          Είναι σκόπιμο να διαγνωστούν έγκαιρα αυτές οι δυσκολίες και να
          εκμεταλλευτούν τα πρόωρα προγράμματα παρέμβασης ώστε το παιδί να
          καταφέρει να προλάβει αναπτυξιακά την χρονολογική του ηλικία.
        </p>
      </TextSection>
      <TextSection>
        <H size={4} id="faq-2">
          {FAQTitles[1]}
        </H>
        <p>
          Ενδεχομένως. Τα παιδιά με αυτό το ιστορικό έχουν μεγαλύτερο κίνδυνο να
          αναπτύξουν κάποια φωνολογική διαταραχή, και πρέπει να ελέγχονται με
          προσοχή.
        </p>
      </TextSection>
      <TextSection>
        <H size={4} id="faq-3">
          {FAQTitles[2]}
        </H>
        <p>
          Σύμφωνα με έρευνα του Πανελλήνιου Συλλόγου Λογοπεδικών, ένα παιδί στην
          ηλικία αυτή είναι φυσιολογικό να μην έχει κατακτήσει αρκετούς ήχους
          της ομιλίας ακόμα. Εφόσον το παιδί σας επικοινωνεί λεκτικά,
          χρησιμοποιεί προτάσεις και γίνεται κατανοητό όχι μόνο από το άμεσο
          οικογενειακό περιβάλλον αλλά και από ανθρώπους που δεν γνωρίζουν καλά
          το παιδί, δεν υπάρχει λόγος ανησυχίας. Για παν ενδεχόμενο όμως,
          ελέγξτε την πορεία εξέλιξης της ομιλίας του για τους επόμενους 6 μήνες
          και αν παρατηρήσετε στασιμότητα στον τρόπο ομιλίας του παιδιού, καλό
          θα ήταν να επισκεφτείτε ένα λογοθεραπευτή.
        </p>
      </TextSection>
      <TextSection>
        <H size={4} id="faq-4">
          {FAQTitles[3]}
        </H>
        <p>
          Εάν το παιδί σας παρουσιάζει δυσκολίες λόγου και ομιλίας, τότε είναι
          σημαντικό το παιδί να βοηθηθεί άμεσα, ώστε να αποφευχθούν επιπρόσθετα
          προβλήματα στο γνωστικό, μαθησιακό αλλά και στο συναισθηματικό τομέα.
          Δυστυχώς, μερικοί γονείς αδρανούν ελπίζοντας ότι το παιδί τους θα
          ξεπεράσει μόνο του τις δυσκολίες του, καθώς μεγαλώνει και ωριμάζει.
          Άλλοι πάλι, πιέζουν το παιδί τους να μιλήσει καλύτερα, γιατί νομίζουν
          πώς μπορούν μόνοι τους, χωρίς βοήθεια, να αντιμετωπίσουν αυτή τη
          δυσκολία. Ωστόσο, είναι πολύ πιθανό τα παιδιά αλλά και οι ενήλικες,
          που δυσκολεύονται στην επικοινωνία τους με το άμεσο ή έμμεσο
          περιβάλλον τους, να αισθανθούν μειονεκτικά και ενδεχομένως να
          απομονωθούν από τους άλλους επειδή δυσκολεύονται να εκφράσουν ή και να
          μοιραστούν τις σκέψεις, τις ιδέες και τα συναισθήματά τους.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}

function Red({ children }) {
  return <span className="font-bold text-red-500">{children}</span>;
}
