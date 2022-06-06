import Link from "next/link";
import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import CTALink from "../../components/CTALink";
import H from "../../components/H";
import TextSection from "../../components/TextSection";
import links from "../../config/links";

export default function Logotherapia() {
  return (
    <BaseLayout title="Λογοθεραπεία">
      <TextSection>
        <H size={2}>Λογοθεραπεία</H>
        <p>
          Είναι η επιστήμη η οποία ασχολείται με την πρόληψη, την διάγνωση και
          την αντιμετώπιση των διαταραχών του λόγου, της ομιλίας και της φωνής
          που μπορεί να εμφανίζουν παιδιά ή ενήλικες.
        </p>
        <p>
          Μέσα από τις συνεδρίες λογοθεραπείας, μας δίνεται η δυνατότητα να
          παρέμβουμε στις εξής διαταραχές:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <Link href={links.FonologikiDiatarachi}>Φωνολογική διαταραχή</Link>
          </li>
          <li>
            <Link href={links.DiatarachesArthrosis}>Διαταραχές άρθρωσης</Link>
          </li>
          <li>
            <Link
              href={links.EidikiGlwsikiDiatarachiAntiliptouKaiEkfrastikouTupou}
            >
              Ειδική γλωσσική διαταραχή αντιληπτικού ή/και εκφραστικού τύπου
              (ΕΓΔ)
            </Link>
          </li>
          <li>
            <Link href={links.Autismos}>
              Διάχυτη αναπτυξιακή διαταραχή (αυτισμός)
            </Link>
          </li>
          <li>
            <Link href={links.Traulismos}>Τραυλισμός</Link>
          </li>
          <li>
            <Link href={links.EidikesMathisiakesDiskolies}>
              Ειδικές μαθησιακές δυσκολίες
            </Link>
          </li>
        </ul>
      </TextSection>
      <CTALink title="Τηλεθεραπεία" link={links.Tiletherapia}>
        Η θεραπεία γίνεται εξ αποστάσεως μέσω του διαδικτύου
      </CTALink>
      <TextSection>
        <H size={3}>Πότε πρέπει να συμβουλευτείτε έναν λογοθεραπευτή</H>
        <p>
          Οι γονείς θα πρέπει να συμβουλευτούν έναν λογοθεραπευτή οταν το παιδί
          τους στην ηλικία των
        </p>
        <H size={4}>0 - 6 μηνών:</H>
        <ul className="list-disc list-inside">
          <li>δεν αντιδρά σε ήχους</li>
          <li>δεν έχει βλεμματική επαφή</li>
        </ul>
        <H size={4}>6 - 12 μηνών:</H>
        <ul className="list-disc list-inside">
          <li>
            δεν εξελίσσονται οι επικοινωνιακές δεξιότητες (αντίδραση σε ήχους
            και βλεμματική επαφή)
          </li>
        </ul>
        <H size={4}>12 – 18 μηνών:</H>
        <ul className="list-disc list-inside">
          <li>σταματήσει να μιλάει</li>
          <li>η ομιλία του παραμένει στάσιμη</li>
          <li>η ομιλία του χειροτερεύει</li>
        </ul>
        <H size={4}>18 – 24 μηνών:</H>
        <ul className="list-disc list-inside">
          <li>έχει περιορισμένο λεξιλόγιο</li>
          <li>έχει δυσκατάληπτο ομιλία ( μη κατανοητός)</li>
          <li>δεν μπορεί να σχηματίσει σύντομη πρόταση 2 λέξεων</li>
        </ul>
        <H size={4}>2 – 3 χρονών:</H>
        <ul className="list-disc list-inside">
          <li>η ομιλία παραμένει δυσκατάληπτη</li>
          <li>δεν χρησιμοποιεί άρθρα</li>
          <li>δεν σχηματίζει απλές προτάσεις</li>
        </ul>
        <H size={4}>Επίσης, ανησυχητικό είναι όταν:</H>
        <ul className="list-disc list-inside">
          <li>
            παρουσιάζεται μειωμένη ικανότητα να παίρνει μέρος σε μια συζήτηση
          </li>
          <li>
            αδυνατεί να εκφραστεί με ευκολία και ανάλογα με τις περιστάσεις
          </li>
        </ul>
      </TextSection>
      <TextSection>
        <H size={2}>Χρήσιμες πληροφορίες</H>
        <ul className="list-disc list-inside">
          <li>
            <Link href={links.FysiologikiAnaptiksiTouLogou}>
              Φυσιολογική ανάπτυξη του λόγου και της ομιλίας
            </Link>
          </li>
          <li>
            <Link href={links.ProtiSinantisi}>Πρώτη συνάντηση</Link>
          </li>
          <li>
            <Link href={links.SichnotitaSinedrion}>Συχνότητα συνεδριών</Link>
          </li>
          <li>
            <Link href={links.SichnesErotisis}>Συχνές ερωτήσεις</Link>
          </li>
        </ul>
      </TextSection>
      <ContactSection />
    </BaseLayout>
  );
}
