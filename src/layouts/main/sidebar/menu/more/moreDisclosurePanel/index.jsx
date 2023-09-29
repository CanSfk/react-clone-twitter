import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function MoreDisclosurePanel({ to, path, title }) {
  return (
    <Disclosure.Panel className="flex-1 w-full p-3 transition-colors hover:bg-[#16181c]">
      <Link to={to} className="flex items-center flex-1">
        <div className="mr-3">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="icon"
            width={18.75}
            height={18.75}
            fill="#e7e9ea"
          >
            <path d={path} />
          </svg>
        </div>
        <span className="text-[15px] font-medium">{title}</span>
      </Link>
    </Disclosure.Panel>
  );
}
