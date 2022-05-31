export default function Button({ className = "", pink, link, children }) {
  let color = pink ? "bg-color-1" : "bg-color-2";
  return (
    <a
      className={`px-4 py-2 text-center text-white whitespace-nowrap ${color} ${className}`}
      href={link}
    >
      {children}
    </a>
  );
}
