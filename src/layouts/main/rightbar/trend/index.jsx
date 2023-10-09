import { Link } from "react-router-dom";
import TrendLink from "./trendLink";
import { Trends } from "../../../../utils/consts";
import Section from "../../../../components/section";

export default function Trend() {
  return (
    <Section title="Trends for you">
      {Trends.map((trend, index) => {
        return (
          <TrendLink
            to="/"
            title={trend.title}
            userName={trend.name}
            posts={trend.post}
            key={index}
          />
        );
      })}
      <Link to="to" className="p-4 transition-colors hover:bg-[#ffffff08]">
        <div className="flex">
          <span className="text-[var(--color-primary)] text-base ">
            Show more
          </span>
        </div>
      </Link>
    </Section>
  );
}
