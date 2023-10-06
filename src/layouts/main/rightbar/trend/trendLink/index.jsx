import { Link } from "react-router-dom";
import TrendLinkPopover from "./trendLinkPopover";

export default function TrendLink({ to, title, userName, posts }) {
  return (
    <Link to={to} className="hover:bg-[#ffffff08] transition-colors">
      <div className="flex px-4 py-3 flex-col items-stretch">
        <div className="flex relative justify-between">
            <span className="text-sm text-[var(--color-baseSecondary)]  inline">
              {title}
            </span>
          <TrendLinkPopover />
        </div>
        <div className="flex mt-[2px] ">
          <span className=" text-base font-bold">
            {userName}
          </span>
        </div>
        <div className="flex mt-1">
          <span className="text-sm text-[var(--color-baseSecondary)] ">
            {posts} posts
          </span>
        </div>
      </div>
    </Link>
  );
}
