export default function Body({ children }) {
  return (
    <div className="flex flex-col h-screen max-w-full text-xl  bg-my-white text-my-base font-body">
      {children}
    </div>
  );
}
