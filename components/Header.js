import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  return (
    <div className="bg-color-1">
      <div className="flex items-center max-w-6xl mx-auto">
        <div className="flex-none h-32 py-2">
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
      <a className="align-middle ">
        <img src="images/logo.png" width={180} alt="Logo" />
      </a>
    </Link>
  );
}

function Nav() {
  return (
    <nav className="flex justify-end mt-4 mb-4">
      <NavItem href="/teletherapy">Τηλεθεραπεία</NavItem>
      <NavItem href="/logotherapy">Καθοδήγηση</NavItem>
      <NavItem href="/logotherapy">Λογοθεραπεία</NavItem>
      <NavItem href="/about">Ας συστηθούμε</NavItem>
      <NavItem href="/arthra">Άρθρα</NavItem>
    </nav>
  );
}

function NavItem({ href = "#", children }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} passHref>
      <span className="mx-2">
        <a
          className={clsx(
            "whitespace-nowrap px-2 py-2 text-color-white hover:cursor-pointer  hover:bg-color-2 font-header",
            {
              "bg-color-2": isActive,
            }
          )}
        >
          {children}
        </a>
      </span>
    </Link>
  );
}
