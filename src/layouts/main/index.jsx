import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex min-h-[200vh]">
      <Sidebar />
      <div className="flex-1 flex justify-between">
        <main className="flex-1 border border-[#2f3336] max-w-[600px]">
          <Outlet />
        </main>
        <Rightbar />
      </div>
    </div>
  );
}
