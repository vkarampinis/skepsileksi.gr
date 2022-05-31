import Button from "./Button";

export default function CTA({ link, pink, linkText, children }) {
  let color = pink ? "bg-color-3" : "bg-color-1";
  return (
    <div className={`py-8 ${color}`}>
      <div className="flex flex-row max-w-6xl mx-auto">
        <p
          className="z-10 block px-4 py-2 font-bold text-center basis-full text-color-white lg:basis-5/6 "
          href={link}
        >
          <span className="block lg:inline-block">{children}</span>
          <div className="m-auto mt-8 lg:inline-block lg:mt-0 lg:ml-10">
            <Button link={link} pink={pink} className="">
              {linkText}
            </Button>
          </div>
        </p>
      </div>
    </div>
  );
}
