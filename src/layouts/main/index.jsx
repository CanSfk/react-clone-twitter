import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useAppearance } from "../../store/appearance/hooks";
import { useEffect } from "react";

export default function MainLayout() {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColor.third
    );

    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );
    document.documentElement.style.setProperty(
      "--color-base",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-baseSecondary",
      appearance.color.baseSecondary
    );

    document.documentElement.style.setProperty(
      "--boxShadow-shadow",
      appearance.boxShadow.shadow
    );

    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize
    );

    console.log(appearance.backgroundColor.primary);
  }, [appearance]);

  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modal]);

  return (
    <>
      <div
        className={`w-[1265px] text-[var(--color-base)] mx-auto flex hiddenScroll`}
      >
        {modal && <Modal />}
        <Sidebar />
        <div className="flex-1 flex justify-between">
          <main className="flex-1 border border-[var(--background-third)] max-w-[600px]">
            <Outlet />
          </main>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
