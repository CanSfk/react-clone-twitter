import { Link } from "react-router-dom";
import TrendLink from "./trendLink";
import { Trends } from "../../../../utils/consts";

export default function Trend() {
  return (
    <div className="flex border border-transparent bg-[var(--background-secondary)] rounded-2xl mb-4">
      <section className="flex flex-1 flex-col">
        <div className="py-3 px-4 ">
          <h2 className="text-[20px] font-extrabold leading-6 ">
            Trends for you
          </h2>
        </div>

        {Trends.map((trend,index) => {
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
            <span className="text-[#1d9bf0] text-[15px] leading-5">
              Show more
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
