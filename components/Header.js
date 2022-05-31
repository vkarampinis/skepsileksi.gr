import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const [menuIsHidden, setMenuIsHidden] = useState(true);
  const onHamburgerClick = () => setMenuIsHidden(!menuIsHidden);

  return (
    <div className="bg-color-1">
      <div className="flex items-center max-w-6xl mx-auto">
        <div className="flex-none px-2 py-2 xl:px-0">
          <Logo />
        </div>
        <div className="flex-1 flex-grow hi1dden s1m:block i1nvisible s1m:visible">
          <div className="flex justify-end">
            <Nav className="hidden sm:block" />
            <Hamburger className="block sm:hidden" onClick={onHamburgerClick} />
          </div>
        </div>
      </div>
      <MobileMenu isHidden={menuIsHidden} />
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" passHref>
      <a>
        <img src="images/logo.png" className="w-24 lg:w-44" alt="Logo" />
      </a>
    </Link>
  );
}

function Nav({ className }) {
  return (
    <nav className={` ${className}`}>
      <NavItem href="/teletherapy">Τηλεθεραπεία</NavItem>
      <NavItem href="/kathodigisi">Καθοδήγηση</NavItem>
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
      <span className="block sm:inline-block sm:mx-2">
        <a
          className={clsx(
            "whitespace-nowrap px-4 py-2 border-b sm:border-0 border-color-2 w-full block sm:px-2 sm:text-xs text-lg md:text-base lg:text-xl text-color-white hover:cursor-pointer hover:bg-color-2 font-header",
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

function Hamburger({ className, onClick }) {
  return (
    <div className={`${className}`}>
      <button
        type="button"
        className="p-4 space-y-2 cursor-pointer"
        onClick={onClick}
      >
        <div className="w-8 bg-white h-0.5"></div>
        <div className="w-8 bg-white h-0.5"></div>
        <div className="w-8 bg-white h-0.5"></div>
      </button>
    </div>
  );
}
function MobileMenu({ isHidden }) {
  return (
    <div
      className={clsx("w-full sm:hidden", {
        hidden: isHidden,
      })}
    >
      <Nav />
    </div>
  );
}
