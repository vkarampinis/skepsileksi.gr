import BaseLayout from "../components/BaseLayout";
import Card, { CardItem } from "../components/Card";
import ColoredSection from "../components/ColoredSection";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";
import H from "../components/H";
import Highlight from "../components/Highlight";
import CheckIcon from "../components/Icons/CheckIcon";
import KidImage from "../components/images/KidImage";
import ManQuestioningImage from "../components/images/ManQuestioningImage";
import PuzzleImage from "../components/images/PuzzleImage";
import TargetImage from "../components/images/TargetImage";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <CTA link={"#contact-form"} linkText="κλείσε ραντεβού" pink>
        Ανεξάρτητα από το που μένεις, η βοήθεια είναι πάντα δίπλα σου!
      </CTA>
      <Benefits />
      <Target />
      <Advantages />
      <Together />
      <CTA link={"#contact-form"} linkText="κλείσε ραντεβού">
        Η θεραπεία γίνεται εξ αποστάσεως μέσω του διαδικτύου
      </CTA>
      <WhatYouNeed />
      <ContactSection />
    </BaseLayout>
  );
}

function Hero() {
  return (
    <section className="px-4 py-20 sm:px-4 bg-color-1">
      <div className="relative flex flex-row max-w-6xl mx-auto">
        <div className="basis-full sm:basis-3/5">
          <h1 className="px-4 mb-16 text-4xl font-bold uppercase md:text-5xl lg:text-6xl font-header text-color-white">
            <span>Online </span>
            <span className="block mt-4">
              <Highlight>Λογοθεραπεια</Highlight>
            </span>
          </h1>
          <p className="max-w-md px-4 leading-10 text-color-white">
            Βοηθώντας τα παιδιά να βρουν τις{" "}
            <span className="italic font-bold">λέξεις</span> τους ώστε στο
            μέλλον οι <span className="italic font-bold ">σκέψεις</span> τους να
            πάρουν μορφή μέσω της <Highlight>τηλεθεραπείας</Highlight>
          </p>
        </div>
        <div className="sm:basis-2/5">
          <KidImage className="absolute w-1/4 -top-12 right-8 sm:top-0 sm:right-0 sm:w-full sm:relative" />
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto py-14 md:flex-row">
      <div className="md:basis-4/6 basis-full">
        <div className="flex">
          <div className="prose prose-xl basis-10/12">
            <H size={3} className="px-4">
              Έχεις παρατηρήσει κάποια δυσκολία
            </H>
            <ul className="list-disc list-outside">
              <li>στην άρθρωση των ήχων ή των γραμμάτων;</li>
              <li>στη παραγωγή ολοκληρωμένης και σωστά δομημένης πρότασης;</li>
              <li>στη κατανόηση του λόγου του από τρίτους;</li>
              <li>στη κατανόηση απλών οδηγιών;</li>
              <li>στον εμπλουτίσμό του λεξιλόγιό του;</li>
              <li>
                στο να εκφραστεί με ευκολία και ανάλογα με τις περιστάσεις;
              </li>
            </ul>
          </div>
          <div className="basis-2/12">
            <ManQuestioningImage className="w-full sm:w-24 fill-color-1 right-10 top-4" />
          </div>
        </div>
      </div>
      <div className="sm:px-28 md:px-0 md:basis-2/6 basis-full">
        <Services />
      </div>
    </section>
  );
}

function Services() {
  return (
    <Card>
      <H size={3} className="py-4 text-white">
        Υπηρεσίες
      </H>
      <CardItem>Αξιολόγηση</CardItem>
      <CardItem>Τηλεθεραπεία σε παιδιά</CardItem>
      <CardItem>Καθοδήγηση γονέων</CardItem>
    </Card>
  );
}

function Target() {
  return (
    <ColoredSection
      className="lg:mt-12"
      icon={<TargetImage className={"w-3/5 "} />}
      title={"Στόχος μου"}
    >
      Να προσφέρω σε σένα και στο παιδί σου την καθοδήγηση και την υποστήριξη
      που χρειάζεστε, παρέχοντας υπηρεσίες λογοθεραπείας μέσω της τηλεθεραπείας.
      Από την αρχή της επαγγελματικής μου πορείας διαπίστωσα πόσο σημαντική
      είναι η επίδραση του γονιού στην γλωσσική ανάπτυξη του παιδιού του. Ο
      ρόλος μου ως μητέρα δύο αξιαγάπητων παιδιών, μου το επιβεβαίωσε και με
      βοήθησε να το κατανοήσω σε βάθος. Αποστολή μου, λοιπόν, είναι να βοηθήσω
      το παιδί σου αλλά και να σου δείξω το δρόμο για το πώς θα γίνεις
      ουσιαστικό μέρος της θεραπείας του.
    </ColoredSection>
  );
}

function Advantages() {
  const icon = <CheckIcon className="w-12 sm:w-20 fill-color-black " />;
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto my-12 sm:my-24 ">
        <H size={2}>Πλεονεκτήματα τηλεθεραπείας</H>
        <AdvantageItem title={"Αποτελεσματική"} icon={icon}>
          Έρευνες έχουν δείξει ότι η τηλεθεραπεία είναι μία αποτελεσματική
          μέθοδος λογοθεραπευτικής παρέμβασης.
        </AdvantageItem>
        <AdvantageItem title={"Προσβάσιμη"} icon={icon}>
          Η απόσταση δεν αποτελεί πλέον πρόβλημα. Συνδέεσαι από το σπίτι ή
          οπουδήποτε και αν βρίσκεσαι.
        </AdvantageItem>
        <AdvantageItem title={"Λιγότερο άγχος"} icon={icon}>
          Η θεραπεία στο σπίτι σας απαλλάσσει από τις μετακινήσεις και το άγχος
          να διαφυλάξετε την υγεία σας.
        </AdvantageItem>
        <AdvantageItem title={"Οικείο περιβάλλον"} icon={icon}>
          Η μάθηση σε αυτό, ενισχύει την γενίκευση δεξιοτήτων και το αίσθημα
          ασφάλειας που νιώθει το παιδί.
        </AdvantageItem>
        <AdvantageItem title={"Ομαδική δουλειά"} icon={icon}>
          Η τηλεθεραπεία σε περιλαμβάνει στην συνεδρία ώστε να γίνεσαι ενεργό
          μέλος αυτής.
        </AdvantageItem>
        <AdvantageItem title={"Τεχνολογία"} icon={icon}>
          Η χρήση της, κάνει την συνεδρία να είναι μια διαδραστική και ευχάριστη
          εμπειρία.
        </AdvantageItem>
      </div>
    </section>
  );
}

function AdvantageItem({ title, icon, children }) {
  return (
    <div className="flex py-6">
      <div className="flex-none px-2 py-6 sm:p-6 ">{icon}</div>
      <div className="prose prose-xl grow">
        <H size={3}>
          <Highlight className="py-1" textClass="text-color-white px-4">
            {title}
          </Highlight>
        </H>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Together() {
  return (
    <ColoredSection
      icon={<PuzzleImage className={"w-4/5 h-4/5 "} />}
      left
      pink
      title={"Μαζί μπορούμε"}
    >
      Τα παιδιά είναι ικανά για σπουδαία πράγματα. Είμαι εδώ λοιπόν, για να τα
      βοηθήσουμε μαζί να εξερευνήσουν τις δυνατότητες τους, έτσι ώστε οι λέξεις
      τους να γίνουν πρόταση και η σκέψη τους να πάρει μορφή. Ως γονιός, έχεις
      τον πρωταγωνιστικό ρόλο στην ζωή του και κανείς άλλος δεν μπορεί να το
      επηρεάσει όσο εσύ! Στόχος μου είναι να ενισχύσω τον ρόλο σου παρέχοντας
      όλη την γνώση και την υποστήριξη που χρειάζεσαι στην καθημερινότητά σου.
    </ColoredSection>
  );
}

function WhatYouNeed() {
  return (
    <section>
      <div className="flex flex-col max-w-6xl mx-auto mt-12 md:flex-row">
        <div className="sm:px-28 md:px-0 md:basis-1/2 lg:basis-6/12">
          <Card className="max-w-md">
            <H size={3} className="text-white">
              Τι χρειάζεσαι;
            </H>
            <CardItem>υπολογιστή ή tablet με μικρόφωνο και κάμερα</CardItem>
            <CardItem>σύνδεση στο internet</CardItem>
            <CardItem>ήσυχο περιβάλλον</CardItem>
          </Card>
        </div>
        <div className="max-w-md sm:px-28 md:px-0 md:basis-1/2 lg:basis-6/12">
          <Card className="max-w-md">
            <H size={3} className="text-white">
              Σε ποιους απευθύνεται;
            </H>
            <CardItem>
              σε παιδιά που μπορούν να διατηρήσουν έστω και λίγο την προσοχή
              τους μπροστά στην οθόνη
            </CardItem>
            <CardItem>
              σε γονείς που χρειάζονται καθοδήγηση ώστε να γίνουν ενεργό μέλος
              της θεραπείας
            </CardItem>
          </Card>
        </div>
      </div>
    </section>
  );
}
