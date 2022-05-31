import Button from "./Button";
import H from "./H";

export default function CTALink({
  title,
  link,
  linkText = "μάθετε περισσότερα",
  children,
}) {
  return (
    <div className="px-4 py-6 bg-color-1">
      <div className="flex flex-col items-center max-w-6xl mx-auto sm:flex-row">
        <div className="prose prose-xl sm:basis-4/5">
          <H size={3} className="text-color-white">
            {title}
          </H>
          <p className="pb-4 text-base sm:pb-0 text-color-white">{children}</p>
        </div>
        <div className="items-center sm:basis-1/5">
          <Button link={link} className="block">
            {linkText}
          </Button>
        </div>
      </div>
    </div>
  );
}
