import H from "./H";

export default function ColoredSection({
  pink,
  icon,
  left,
  title,
  className,
  children,
}) {
  const fgColor = pink ? "bg-color-3" : "bg-color-1";
  const bgColor = pink ? "bg-color-4" : "bg-color-2";
  const order = left ? "flex-row-reverse" : "flex-row";

  return (
    <section
      className={`relative before:block before:absolute before:inset-0 before:bottom-12 before:-skew-y-3 before:${bgColor} ${className}`}
    >
      <div className={`relative p-20 ${fgColor}`}>
        <div className={`flex max-w-6xl mx-auto ${order}`}>
          <div className="flex items-center justify-center basis-1/3">
            {icon}
          </div>
          <div className="basis-2/3">
            <H size={2} className="text-color-white">
              {title}
            </H>
            <p className="leading-8 text-color-white">{children}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
