import { Link } from "react-router-dom";

export default function FooterMoreLink({ title, to }) {
  return (
    <Link
      to={to}
      className="px-4 py-3 font-bold leading-5 text-[15px] text-[var(--color-base)] transition-colors hover:bg-[var(--background-secondary)]"
    >
      <span className="whitespace-nowrap">{title}</span>
    </Link>
  );
}
