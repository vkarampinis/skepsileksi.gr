import clsx from "clsx";
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
      <div className={`relative p-6 md:p-16 ${fgColor}`}>
        <div className={`flex max-w-6xl mx-auto ${order}`}>
          <div
            className={clsx(
              "hidden align-top sm:items-start sm:flex sm:basis-1/5",
              {
                "sm:justify-end": left,
              }
            )}
          >
            {icon}
          </div>
          <div className="prose prose-xl basis-full sm:basis-4/5">
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
