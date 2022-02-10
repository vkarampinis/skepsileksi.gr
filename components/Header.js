import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  return (
    <div className="pt-4 mb-4">
      <div className="flex max-w-6xl mx-auto">
        <div className="flex-none w-72">
          <Logo />
        </div>
        <div className="flex-1 flex-grow">
          <Nav />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" passHref>
      <a>
        <img src="images/logo.png" alt="Logo" />
      </a>
    </Link>
  );
}

function Nav() {
  return (
    <nav className="flex justify-end mt-4">
      <NavItem href="/">Αρχική</NavItem>
      <NavItem href="/teletherapy">Τηλεθεραπεία</NavItem>
      <NavItem href="/logotherapy">Λογοθεραπεία</NavItem>
      <NavItem href="/about">Μαρία</NavItem>
      <NavItem href="/plirofories">Χρήσ. Πληροφορίες</NavItem>
      <NavItem href="/arthra">Άρθρα</NavItem>
      <NavItem href="/contact">Επικοινωνία</NavItem>
    </nav>
  );
}

function NavItem({ href = "#", children }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          "px-4 py-2 mx-2 rounded-lg  hover:text-white hover:bg-my-blue font-header",
          {
            "text-grey-700": !isActive,
            "text-pink-600": isActive,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}
