import Link from "next/link";

export default function Header() {
  return (
    <div className="pt-4">
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
      <img src="images/logo.png" alt="Logo" />
    </Link>
  );
}

function Nav() {
  return (
    <nav className="flex justify-end mt-4">
      <NavItem href="/">Αρχική</NavItem>
    </nav>
  );
}

function NavItem({ href = "#", children }) {
  return (
    <Link href={href} passHref>
      <a className="px-4 py-2 mx-2 rounded-lg text-grey-700 hover:text-white hover:bg-my-blue font-header">
        {children}
      </a>
    </Link>
  );
}
