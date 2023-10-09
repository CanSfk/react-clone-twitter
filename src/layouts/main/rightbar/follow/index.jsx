import Profile from "./profile";
import { Profiles } from "../../../../utils/consts";
import { Link } from "react-router-dom";
import Section from "../../../../components/section";

export default function Follow() {
  return (
    <Section title="Who to follow">
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
      <Link to="to" className="p-4 transition-colors hover:bg-[#ffffff08] flex">
        <div className="flex">
          <span className="text-[var(--color-primary)] text-base ">
            Show more
          </span>
        </div>
      </Link>
    </Section>
  );
}
