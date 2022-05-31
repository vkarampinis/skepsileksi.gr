import CheckIcon from "./Icons/CheckIcon";

export default function Card({ className, children }) {
  return (
    <div className="p-4">
      <div className={`m-4 bg-color-2 -rotate-3 ${className}`}>
        <div className="px-8 py-4 pb-8 bg-color-1 rotate-3 ">{children}</div>
      </div>
    </div>
  );
}

export function CardItem({ children }) {
  return (
    <div className="py-4 text-color-white">
      <CheckIcon className="inline-block w-8 lg:w-10" />
      <span className="pl-2 font-bold leading-8 lg:pl-4">{children}</span>
    </div>
  );
}
