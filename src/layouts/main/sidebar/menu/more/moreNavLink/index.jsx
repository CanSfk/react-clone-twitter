import { Link } from "react-router-dom";

export default function MoreNavLink({ to, path, text }) {
  return (
    <Link
      to={to}
      className="p-4 flex items-center transition-colors hover:bg-[#16181c]"
    >
      <div className="mr-6">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          data-testid="icon"
          width="24"
          height="24"
          fill="#e7e9ea"
        >
          <path d={path} />
        </svg>
      </div>
      <div className="flex-1 h-6 flex items-center">
        <span className="font-bold text-[20px] text-[#e7e9ea]">{text}</span>
      </div>
    </Link>
  );
}
