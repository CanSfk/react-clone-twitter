import { Link } from "react-router-dom";

export default function FooterMoreLink({ title, to }) {
  return (
    <Link
      to={to}
      className="px-4 py-3 text-[#e7e9ea] font-bold leading-5 text-[15px] transition-colors hover:bg-[#16181c]"
    >
      <span className="whitespace-nowrap">{title}</span>
    </Link>
  );
}
