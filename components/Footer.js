import MyTelephone from "./MyTelephone";

export default function Footer() {
  return (
    <footer className="p-6 mt-10 bg-color-1">
      <div className="max-w-6xl mx-auto text-lg text-color-white ">
        <p>
          Σκέψη - Λέξη © 2022 • Καλέστε μας για δωρεάν αξιολόγηση •{" "}
          <MyTelephone />
        </p>
      </div>
    </footer>
  );
}
