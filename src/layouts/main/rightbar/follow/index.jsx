import Profile from "./profile";
import { Profiles } from "../../../../utils/consts";
import { Link } from "react-router-dom";

export default function Follow() {
  return (
    <div className="flex flex-col bg-[#16181c] rounded-2xl border border-[#16181c] mb-4">
      <div className="px-4 py-3 flex text-[#e7e9ea]">
        <span className="leading-6 text-[20px] font-extrabold">
          Who to follow
        </span>
      </div>
      <div>
        {Profiles.map((profile, index) => {
          return (
            <Profile
              name={profile.name}
              longName={profile.longName}
              avatar={profile.avatar}
              premium={profile.premium}
              key={index}
            />
          );
        })}
      </div>
      <Link to="to" className="p-4 transition-colors hover:bg-[#ffffff08] flex">
        <div className="flex">
          <span className="text-[#1d9bf0] text-[15px] leading-5">
            Show more
          </span>
        </div>
      </Link>
    </div>
  );
}
