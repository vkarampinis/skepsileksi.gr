import BaseLayout from "../components/BaseLayout";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";
import H from "../components/H";
import TextSection from "../components/TextSection";
import links from "../config/links";

export default function Kathodigisi() {
  return (
    <BaseLayout title="Καθοδήγηση γονέων">
      <TextSection>
        <H size={2}>Καθοδήγηση γονέων</H>
        <p>
          Η καθοδήγηση γονέων είναι ένα μοντέλο παρέμβαση που χρησιμοποιείται σε
          περιπτώσεις που το παιδί αδυνατεί να διατηρήσει την προσοχή του
          μπροστά στην οθόνη. Αυτό όμως δεν χρειάζεται να σε αποτρέψει από την
          χρήση της τηλεθεραπείας. Με την αναλυτική καθοδήγηση μου, σου δίνεται
          η δυνατότητα να γίνεις ο ίδιος θεραπευτής του παιδιού σου. Το μόνο που
          χρειάζεται να κάνεις είναι να μου “δανείσεις” τα χέρια και την φωνή
          σου και κάτω από τις δικές μου εντολές χρησιμοποιείς τα παιχνίδια σας,
          διάφορα υλικά που υπάρχουν στο σπίτι και εκπαιδευτικό υλικό που σου
          αποστέλλεται προκειμένου να πετύχουμε τους εκάστοτε στόχους που έχουμε
          θέσει. Αν στα παραπάνω προσθέσεις την αγάπη, την υπομονή, την επιμονή
          και την καλή διάθεση, να είσαι σίγουρος πως το θεραπευτικό αποτέλεσμα
          δεν θα διαφέρει από μία κλασική συνάντηση του παιδιού στο γραφείο
          κάποιου θεραπευτή.
        </p>
        <p>
          Παίρνοντας λοιπόν έναν ενεργό ρόλο στην θεραπεία, γίνεσαι αυτόματα η
          κινητήρια δύναμη της προόδου του αντί να είσαι ένας απλός συνεπιβάτης
          στην διαδρομή. Όλο αυτό έχει ως αποτέλεσμα να αποκτήσεις δεξιότητες οι
          οποίες σε κάνουν ικανό να διαχειριστείς και να κατανοήσεις σε βάθος
          τις ανάγκες του παιδιού σου.
        </p>
      </TextSection>
      <CTA link={links.Contact} linkText={"κλείσε ραντεβού"}>
        Η κάθε μέρα είναι ευκαιρία για να μάθεις κάτι καινούριο.
      </CTA>
      <TextSection>
        <H size={2}>Η θεραπεία από μόνη της δεν είναι αρκετή</H>
        <p>
          Οι εβδομαδιαίες συνεδρίες λογοθεραπείας που παρακολουθεί το παιδί,
          δυστυχώς δεν έχουν την δυναμική ώστε να αλλάξουν ριζικά την πορεία
          του. Εκείνο που παίζει όμως καθοριστικό ρόλο, είναι η συνεχιζόμενη
          εκπαίδευση του παιδιού σου μετά το πέρας της συνεδρίας. Έτσι
          γνωρίζοντας τον τρόπο με τον οποίο μπορείς να καλύψεις τις ανάγκες του
          σε καθημερινή βάση, αυτόματα σε καθιστά το σημαντικότερο κομμάτι του
          παζλ που αποτελεί την θεραπεία του.
        </p>
      </TextSection>
      <TextSection>
        <H size={2}>Έχεις ήδη τα “εργαλεία” που χρειάζεσαι </H>
        <p>
          Πρώτα απ’ όλα πρέπει να πιστέψεις στον εαυτό σου! Γνωρίζεις το παιδί
          σου καλύτερα από τον καθένα. Ξέρεις τα ενδιαφέροντά του, τις
          προτιμήσεις του και είσαι πάντα δίπλα του. Κατέχεις τον σημαντικότερο
          ρόλο στην ζωή του και αυτό δεν αλλάζει επειδή χρειάζεσαι μια πιο
          εξειδικευμένη υποστήριξη. Δεύτερον, δεν υπάρχει πιο ασφαλές μέρος για
          το παιδί από το ίδιο του το σπίτι. Μέσα από αυτήν την ασφάλεια το
          παιδί επαναλαμβάνει και ενισχύει τις δεξιότητες που έχει μάθει κατά
          την συνεδρία. Και στο τέλος, αυτή είναι που θα το βοηθήσει να
          διατηρήσει, να κατακτήσει και στην συνέχεια να βελτιώσει αυτές τις
          δεξιότητες με την πάροδο του χρόνου. Ο δικός μου ρόλος σε όλη αυτήν
          την διαδικασία είναι να σου παρέχω τις γνώσεις, την εμπειρία και την
          υποστήριξη που χρειάζεσαι προκειμένου να βοηθήσεις στην προώθηση της
          ανάπτυξης του λόγου και της ομιλίας του.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}
