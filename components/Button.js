import Link from "next/link";

export default function Button({ className = "", pink, link, children }) {
  let color = pink ? "bg-color-1" : "bg-color-2";
  return (
    (<Link
      href={link}
      passHref
      title={children}
      className={`px-4 py-2 text-center text-white no-underline hover:text-color-white whitespace-nowrap ${color} ${className}`}>

      {children}

    </Link>)
  );
}
