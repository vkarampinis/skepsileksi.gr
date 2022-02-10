export default function Button({ link, children }) {
  return (
    <a
      className="block px-4 py-2 text-center text-white bg-pink-600 rounded-md"
      href={link}
    >
      {children}
    </a>
  );
}
