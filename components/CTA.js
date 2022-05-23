import Button from "./Button";

export default function CTA({ link, linkText, children }) {
  return (
    <div className="bg-color-2">
      <p
        className="z-10 block px-4 py-2 text-center text-white rounded-md"
        href={link}
      >
        {children}
        <Button link={link}>{linkText}</Button>
      </p>
    </div>
  );
}
