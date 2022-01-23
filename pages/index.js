import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Welcome />
    </BaseLayout>
  );
}

function Welcome() {
  return (
    <div className="md:flex">
      <div className="md:flex-initial">
        <img
          className="mb-6 lg:pt-5"
          src="images/kid-playing.png"
          alt="kid playing"
        />
      </div>
      <div className="px-10 py-4 prose lg:flex-1 lg:prose-xl">
        <h2>Καλώς ήρθατε</h2>
        <p>
          Ο χώρος "Σκέψη - Λέξη", δημιουργήθηκε με σκοπό την παροχή υπηρεσιών
          λογοθεραπείας που απευθύνεται αποκλειστικά σε παιδιά. Υπεύθυνη του
          χώρου, είναι η λογοθεραπεύτρια Αποστολάκη Μαρία, η οποία μέσα από την
          αγάπη της για τα παιδιά και γι’ αυτό που κάνει, στοχεύει στην βελτίωση
          της ποιότητας της ζωής τόσο των παιδιών που παρουσιάζουν διαταραχές
          λόγου και ομιλίας όσο και τις οικογένειες αυτών.
        </p>
      </div>
    </div>
  );
}
