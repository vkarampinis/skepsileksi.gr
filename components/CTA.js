import Button from "./Button";

export default function CTA({ link, pink, linkText, children }) {
  let color = pink ? "bg-color-3" : "bg-color-1";
  return (
    <div className={`py-8 ${color}`}>
      <div className="flex flex-row max-w-6xl mx-auto">
        <p
          className="z-10 block px-4 py-2 font-bold text-center basis-full text-color-white sm:basis-5/6 "
          href={link}
        >
          <span className="">{children}</span>
          <Button
            link={link}
            pink={pink}
            className="inline-block mt-4 sm:mt-0 sm:ml-10"
          >
            {linkText}
          </Button>
        </p>
        <div className="sm:basis-1/6"></div>
      </div>
    </div>
  );
}
