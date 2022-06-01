import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import TextSection from "../../components/TextSection";

export default function FysiologikiAnaptiksiTouLogou() {
  return (
    <BaseLayout>
      <TextSection>
        <H size={2}>Φυσιολογική ανάπτυξη του λόγου και της ομιλίας</H>
        <p>
          Γνωρίζουμε πως σε κάθε παιδί υπάρχει κάποια διακύμανση του χρόνου που
          χρειάζεται ώστε να κατακτήσει κάποιες δεξιότητες. Ωστόσο, υπάρχουν
          συγκεκριμένα στάδια της φυσιολογικής ανάπτυξης του λόγου που
          ακολουθούν τα παιδιά. Τα αναπτυξιακά αυτά ορόσημα είναι τα παρακάτω:
        </p>
        <H size={4}>Ο – 6 μηνών:</H>
        <ul className="list-disc list-outside">
          <li>
            το μωρό αντιδρά στους ήχους και στρέφεται προς την πηγή του
            ερεθίσματος
          </li>
          <li>παράγει ήχους</li>
        </ul>
        <H size={4}>Συμβουλές</H>
        <ul className="list-disc list-outside">
          <li>να μιλάτε στο παιδί ήρεμα</li>
          <li>να τραγουδάτε μαζί του</li>
          <li>να ονομάζεται οικεία άτομα και αντικείμενα</li>
        </ul>
        <H size={4}>Έως 12 μηνών:</H>
        <ul className="list-disc list-outside">
          <li>παράγει τις πρώτες του λέξεις (συνήθως «μαμά» και «μπαμπά»)</li>
          <li>κατανοεί απλές οδηγίες</li>
          <li> ανταποκρίνεται στο όνομά του</li>
        </ul>
        <H size={4}>Συμβουλές</H>
        <ul className="list-disc list-outside">
          <li>
            του αρέσει να παίζεται με την φωνή σας, να υπάρχει δηλαδή αλλαγή
            στην μελωδία της ομιλία σας
          </li>
          <li>
            δώστε του να καταλάβει την χαρά της επικοινωνίας αλληλεπιδρόντας
            μαζί του μέσω του γέλιου, της έκφρασης του προσώπου και του
            κοιτάγματος.
          </li>
        </ul>
        <H size={4}> Έως 18 μηνών:</H>
        <ul className="list-disc list-outside">
          <li>είναι σε θέση να ονομάζει οικεία αντικείμενα</li>
          <li>αυξάνεται το λεξιλόγιό του</li>
        </ul>
        <H size={4}>Συμβουλές</H>
        <ul className="list-disc list-outside">
          <li>
            χρησιμοποιήστε σωστά γραμματικές προτάσεις και αποφύγετε τις
            «μωρουδίστικες» λέξεις
          </li>
          <li>
            ξεφυλλίστε και σχολιάστε μαζί του βιβλία που είναι για την ηλικία
            του
          </li>
        </ul>
        <H size={4}>Έως 2 χρονών:</H>
        <ul className="list-disc list-outside">
          <li>κατανοεί σύνθετες οδηγίες</li>
          <li>χρησιμοποιεί προτάσεις με 2 – 3 λέξεις</li>
          <li>λέει το όνομά του</li>
          <li>ακούει ιστορίες από βιβλίο</li>
        </ul>
        <H size={4}>Συμβουλή</H>
        <ul className="list-disc list-outside">
          <li>βοηθήστε το να αυξήσει το λεξιλόγιό του</li>
        </ul>

        <H size={4}>Έως 3 χρονών:</H>
        <ul className="list-disc list-outside">
          <li>χρησιμοποιεί προτάσεις</li>
          <li>κάνει ερωτήσεις</li>
          <li>χρησιμοποιεί άρθρα, ρήματα, πληθυντικό αριθμό και προθέσεις</li>
        </ul>
        <H size={4}>Συμβουλή</H>
        <ul className="list-disc list-outside">
          <li>
            μάθετε στο παιδί να λέει ιστορίες βοηθώντας το στην οργάνωση της
            σκέψης του
          </li>
        </ul>
        <H size={4}>έως 4 χρονών:</H>
        <ul className="list-disc list-outside">
          <li>
            ο λόγος του μοιάζει με αυτόν των ενηλίκων (γραμματικά και
            συντακτικά)
          </li>
          <li>περιγράφει πρόσφατες εμπειρίες του</li>
          <li>διηγείται δύο γεγονότα στην σωστή σειρά</li>
        </ul>
        <H size={4}>Συμβουλή</H>
        <ul className="list-disc list-outside">
          <li>Διαβάστε μαζί ιστορίες και ενθαρρύνεται την αφήγησή τους.</li>
        </ul>
      </TextSection>
      <TextSection>
        <H size={2}>Θεραπευτική παρέμβαση</H>
        <p>
          Ο θεραπευτής, μετά την λήψη ενός λεπτομερούς ιστορικού προχωράει στην
          χορήγηση κάποιων τεστς μέσα από τα οποία μπορεί να εντοπίσει τα
          ελλείμματα που υπάρχουν στα παραπάνω επίπεδα. Στην συνέχεια θέτει τους
          θεραπευτικούς στόχους για την αντιμετώπιση αυτών.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}

function Red({ children }) {
  return <span className="font-bold text-red-500">{children}</span>;
}