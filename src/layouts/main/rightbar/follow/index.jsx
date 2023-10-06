import Profile from "./profile";
import { Profiles } from "../../../../utils/consts";
import { Link } from "react-router-dom";

export default function Follow() {
  return (
    <div className="flex flex-col bg-[var(--background-secondary)] rounded-2xl border border-[var(--background-secondary)] mb-4">
      <div className="px-4 py-3 flex ">
        <span className=" text-xl font-extrabold">
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
          <span className="text-[var(--color-primary)] text-base ">
            Show more
          </span>
        </div>
      </Link>
    </div>
  );
}
