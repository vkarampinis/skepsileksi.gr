export default function Highlight({ className, children }) {
  return (
    <span className={`relative ${className}`}>
      <span
        className="absolute block -skew-y-2 -inset-1 bg-color-2"
        aria-hidden="true"
      ></span>
      <span className="relative text-white">{children}</span>
    </span>
  );
}
