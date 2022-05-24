export default function Button({ className, pink, link, children }) {
  let color = pink ? "bg-color-1" : "bg-color-2";
  return (
    <a
      className={`block px-4 py-2 text-center text-white ${color} ${className}`}
      href={link}
    >
      {children}
    </a>
  );
}
