import Body from "../components/Body";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BalloonsIcon from "../components/Icons/BalloonsIcon";

export default function Home() {
  return (
    <Body>
      <Header />
      <Hero />
      <Footer />
    </Body>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img
        src="/images/hero-splash-1.jpeg"
        class="object-cover w-full h-full"
        alt="Image alt text"
      />
      <div className="absolute left-16 top-48">
        <div className="p-10 mb-8 bg-white shadow-lg rounded-xl">
          <span className="block mb-2 text-2xl font-bold ">Τηλεθεραπεία</span>
          <span className="block mb-12 text-2xl">
            Η λογοθεραπεία σήμερα είναι απλά ένα κλικ μακριά
          </span>
          <div className="text-center">
            <a href="#" className="p-4 text-white bg-pink-600 rounded-lg">
              Δωρεάν αξιολόγηση
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

      </div>
    </div>
  );
}
