import Logo from "./logo";
import Menu from "./menu";
import Button from "../../../components/button";
import AccountList from "./accountList";

export default function Sidebar() {
  return (
    <div className="w-[275px] flex flex-col relative z-40">
      <div className="px-2 min-h-screen fixed w-[275px] flex flex-col justify-between">
        <aside className="flex flex-col ">
          <Logo />
          <Menu />
          <div className="my-4 flex items-stretch h-[52px] w-[90%]">
            <Button size="large">Post</Button>
          </div>
        </aside>

        <AccountList />
      </div>
    </div>
  );
}
