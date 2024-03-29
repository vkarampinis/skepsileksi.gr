import BaseLayout from "../components/BaseLayout";
import ContactSection from "../components/ContactSection";
import CTALink from "../components/CTALink";
import H from "../components/H";
import TextSection from "../components/TextSection";
import links from "../config/links";

export default function About() {
  return (
    <BaseLayout title="Ας συστηθούμε">
      <TextSection>
        <H size={2}>Ας συστηθούμε</H>
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="sm:pr-6">
            <p>Γεια σας,</p>
            <p>
              Ονομάζομαι Μαρία Αποστολάκη, είμαι λογοθεραπεύτρια και αποφοίτησα
              από το τμήμα λογοθεραπείας του Α.Τ.Ε.Ι. Ηπείρου το 2006. Μετά την
              αποφοίτησή μου ξεκίνησα άμεσα να εργάζομαι ως εξωτερικός
              συνεργάτης σε ιδιωτικό κέντρο λογοθεραπείας στην Θεσσαλονίκη στο
              οποίο μου δόθηκε η ευκαιρία να ασχοληθώ με την αποκατάσταση
              πληθώρα περιστατικών. Παράλληλα, στα πλαίσια της συνεχιζόμενης
              εκπαίδευσης, πήρα πιστοποιήσεις σε διάφορες μεθόδους παρέμβασης
              όπως είναι το πρόγραμμα Μάκατον, Pecs, εντατικής αλληλεπίδρασης,
              Lidcombe Program, στην μέθοδο του αποτελεσματικού δασκάλου/γονέα
              κ. α.
            </p>

            <p>
              Από το 2009 - 2017 λειτούργησα το δικό μου κέντρο λογοθεραπείας
              και εργοθεραπείας “Σκέψη - Λέξη” στον Λαγκαδά Θεσσαλονίκης. Έπειτα
              συνέχισα την επαγγελματική μου δραστηριότητα ως εξωτερικός
              συνεργάτης σε ιδιωτικά κέντρα λογοθεραπείας ενώ παράλληλα
              χρησιμοποίησα την τηλεθεραπεία ως θεραπευτικό μοντέλο προσέγγισης.
            </p>
            <p>
              Σήμερα, ασχολούμαι κατά κύριο λόγο με την τηλεθεραπεία όπου με την
              βοήθεια μιας διαδραστικής πλατφόρμας και την εφευρετικότητά μου
              κάνω την κάθε συνεδρία να μοιάζει με παιχνίδι!
            </p>
          </div>
          <img
            className="h-full rounded-3xl "
            src="/images/apostolaki_maria.jpeg"
            alt=""
          />
        </div>
      </TextSection>
      <CTALink title="Καθοδήγηση γονέα" link={links.Kathodigisi}>
        Η θεραπεία από μόνη της δεν είναι αρκετή
      </CTALink>
      <ContactSection />
    </BaseLayout>
  );
}
