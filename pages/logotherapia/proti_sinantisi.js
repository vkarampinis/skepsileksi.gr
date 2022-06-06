import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import TextSection from "../../components/TextSection";

export default function ProtiSinantisi() {
  return (
    <BaseLayout title="Πρώτη συνάντηση">
      <TextSection>
        <H size={2}>Πρώτη συνάντηση</H>
        <p>
          Κατά την διάρκεια της πρώτης επαφής μας, γίνεται λήψη του ιστορικού
          και η πρώτη επαφή με το παιδί η οποία συνήθως γίνεται παίζοντας μαζί
          του. Στην συνέχεια, ακολουθεί η αξιολόγηση του παιδιού η οποία γίνεται
          μέσα από την παρατήρηση και την χρήση αξιόπιστων τεστς. Πρέπει να
          σημειωθεί πως αν υπάρχει οποιαδήποτε δυσανασχέτηση ή κούραση από την
          πλευρά του παιδιού, τότε η αξιολόγηση σταματάει και συνεχίζεται στην
          επόμενη συνάντηση. Ο λόγος που γίνεται αυτό, οφείλεται στο γεγονός πως
          θεωρώ πολύ σημαντικές τις πρώτες επαφές που θα έχω με το παιδί. Αυτές
          είναι που θα με βοηθήσουν να αναπτύξω σταδιακά σχέση μαζί του.
          Συνεπώς, στις πρώτες συναντήσεις στόχος μου είναι το παιδί να
          αποκτήσει μια θετική εμπειρία με εμένα. Μόλις ολοκληρωθεί η
          αξιολόγηση, ακολουθεί η ενημέρωση των αποτελεσμάτων και μια πρώτη
          εκτίμηση για το θεραπευτικό πρόγραμμα που θα εφαρμοστεί. Τέλος,
          ορίζονται οι μέρες και οι ώρες που θα διεξάγονται οι θεραπείες.
        </p>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}

function Red({ children }) {
  return <span className="font-bold text-red-500">{children}</span>;
}
