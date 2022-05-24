import Button from "./Button";

export default function CTA({ link, pink, linkText, children }) {
  let color = pink ? "bg-color-3" : "bg-color-1";
  return (
    <div className={`py-8 ${color}`}>
      <div className="flex flex-row max-w-6xl mx-auto">
        <p
          className="z-10 block px-4 py-2 font-bold text-center text-color-white basis-5/6 "
          href={link}
        >
          <span className="">{children}</span>
          <Button link={link} pink={pink} className="inline-block ml-10">
            {linkText}
          </Button>
        </p>
        <div className="basis-1/6"></div>
      </div>
    </div>
  );
}
