import Logo from "./logo";
import Menu from "./menu";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[275px] flex flex-col relative">
      <div className="px-2 min-h-screen fixed w-[275px]">
        <aside className="flex flex-col ">
          <Logo />
          <Menu />
          <div className="my-4 flex items-stretch h-[52px] w-[90%]">
            <Link className="flex-1 rounded-full px-8 bg-[#1d9bf0] flex items-center justify-center transition-colors hover:bg-[#1a8cd8]">
              <div className="flex flex-1 items-center justify-center h-full">
                <span className="text-white font-bold text-[17px] leading-5">
                  Post
                </span>
              </div>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
