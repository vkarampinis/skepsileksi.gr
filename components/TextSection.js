export default function TextSection({ children }) {
  return (
    <section className="max-w-6xl p-4 mx-auto prose prose-xl">
      {children}
    </section>
  );
}
