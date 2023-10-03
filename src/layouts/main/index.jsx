import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import classNames from "classnames";

export default function MainLayout() {
  const modal = useModal();

  return (
    <>
      {modal && <Modal />}
      <div
        className={`w-[1265px] mx-auto flex h-[200vh]${
          modal && "!max-h-[100vh] !h-[100vh] !overflow-hidden"
        }`}
      >
        <Sidebar />
        <div className="flex-1 flex justify-between">
          <main className="flex-1 border border-[#2f3336] max-w-[600px]">
            <Outlet />
          </main>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
