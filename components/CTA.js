import Button from "./Button";

export default function CTA({ link, pink, linkText, children }) {
  let color = pink ? "bg-color-3" : "bg-color-1";
  return (
    <section className={`py-8 ${color}`}>
      <div className="flex flex-row max-w-6xl mx-auto">
        <div className="block px-4 py-2 font-bold text-center md:text-left basis-full text-color-white lg:basis-5/6 ">
          <span className="block lg:inline-block">{children}</span>
          <div className="m-auto mt-8 lg:inline-block lg:mt-0 lg:ml-10">
            <Button link={link} pink={pink} className="">
              {linkText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
