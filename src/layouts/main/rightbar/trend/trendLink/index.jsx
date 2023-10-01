import { Link } from "react-router-dom";
import TrendLinkPopover from "./trendLinkPopover";

export default function TrendLink({ to, title, userName, posts }) {
  return (
    <Link to={to} className="hover:bg-[#ffffff08] transition-colors">
      <div className="flex px-4 py-3 flex-col items-stretch">
        <div className="flex relative justify-between">
            <span className="text-[13px] text-[#71767b] leading-4 inline">
              {title}
            </span>
          <TrendLinkPopover />
        </div>
        <div className="flex mt-[2px] leading-5">
          <span className="text-[#e7e9ea] text-[15px] font-bold">
            {userName}
          </span>
        </div>
        <div className="flex mt-1">
          <span className="text-[13px] text-[#71767b] leading-4">
            {posts} posts
          </span>
        </div>
      </div>
    </Link>
  );
}
