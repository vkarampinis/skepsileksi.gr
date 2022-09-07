import Button from "./Button";
import H from "./H";

export default function CTALink({
  title,
  link,
  linkText = "μάθετε περισσότερα",
  children,
}) {
  return (
    <section className="py-6 my-8 bg-color-1">
      <div className="flex flex-col items-center max-w-6xl px-4 mx-auto sm:flex-row">
        <div className="prose prose-xl sm:basis-4/5">
          <H size={3} className="text-color-white">
            {title}
          </H>
          <p className="pb-4 text-lg sm:pb-0 text-color-white">{children}</p>
        </div>
        <div className="items-center sm:basis-1/5">
          <Button link={link} className="block">
            {linkText}
          </Button>
        </div>
      </div>
    </section>
  );
}
