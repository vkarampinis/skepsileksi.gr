export default function Footer() {
  return (
    <>
      <svg
        className="fill-current stroke-current text-my-blue"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="120"
        viewBox="0 0 85 100"
        preserveAspectRatio="none"
      >
        <path d="M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z"></path>
      </svg>
      <footer className="text-white bg-my-blue">
        <img src="images/footer.png" className="-mt-24" alt="" />
        <div className="grid max-w-6xl grid-cols-3 gap-4 mx-auto my-6">
          <div>
            <a className="block py-1" href="/">
              Link 1
            </a>
          </div>
          <div>
            <a className="block py-1" href="/">
              Link 2
            </a>
          </div>

          <div>
            <p className="mb-2">Τηλέφωνo επικοινωνίας</p>
            <p className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:6942414511">6942414511</a>
            </p>
            <p className="mb-1">Social media</p>
            <a
              className="inline-block p-2 mr-1 rounded-full hover:text-my-blue hover:bg-white"
              href="https://www.facebook.com/skepsileksi"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              className="inline-block p-2 rounded-full hover:text-my-blue hover:bg-white"
              href="https://twitter.com/skepsileksi"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="py-4 text-center bg-my-green">
          <p className="text-sm text-gray-100">
            "Σκέψη & Λέξη" - Υπηρεσίες Λογοθεραπείας © 2009-2021 • hosted by
            <a
              href="https://github.com/vkarampinis/skepsileksi.gr"
              target="_blank"
            >
              Netlify
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}