import Premium from "./premium";
import Search from "./search";
import Trend from "./trend";
import Follow from "./follow";
import Footer from "./footer";

export default function Rightbar() {
  return (
    <div className="w-[350px] mr-2.5 pb-[65px]">
      <Search />
      <div>
        <Premium />
        <Trend />
        <Follow />
        <Footer />
      </div>
    </div>
  );
}
