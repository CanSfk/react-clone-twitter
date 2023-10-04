import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-[52px] h-[56px] grid place-items-center py-0.5">
      <Link
        to="/"
        className="grid place-items-center w-[52px] h-[52px] rounded-full transition-colors outline-none hover:bg-[var(--color-base)]/10"
      >
        <div className="w-[50px] h-[50px] grid place-items-center ">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            width="50"
            height="30"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
