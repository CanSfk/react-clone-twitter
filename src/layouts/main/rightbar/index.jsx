import Premium from "./premium";
import Search from "./search";

export default function Rightbar() {
  return (
    <div className="w-[350px] mr-2.5">
      <Search />
      <Premium />
    </div>
  );
}
