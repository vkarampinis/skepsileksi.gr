import Link from "next/link";
import BaseLayout from "../../components/BaseLayout";
import ContactSection from "../../components/ContactSection";
import H from "../../components/H";
import TextSection from "../../components/TextSection";
import links from "../../config/links";

export default function Logotherapia() {
  return (
    <BaseLayout>
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
      <ContactSection />
    </BaseLayout>
  );
}
