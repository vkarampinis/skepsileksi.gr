import CheckIcon from "./Icons/CheckIcon";

export default function Card({ children }) {
  return (
    <div className="m-4 bg-color-2 -rotate-3">
      <div className="px-8 py-4 pb-8 bg-color-1 rotate-3 ">{children}</div>
    </div>
  );
}

export function CardItem({ children }) {
  return (
    <div className="py-4 text-color-white">
      <CheckIcon className="inline-block" />
      <span className="pl-4 font-bold">{children}</span>
    </div>
  );
}
