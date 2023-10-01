import { Link } from "react-router-dom";

export default function FooterLink({ title, to }) {
  return (
    <Link to={to} className="transition-all hover:underline my-0.5 pr-3">
      <span>{title}</span>
    </Link>
  );
}
