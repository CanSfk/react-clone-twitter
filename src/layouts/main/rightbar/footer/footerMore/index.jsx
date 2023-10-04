import { useEffect, useRef, useState } from "react";
import { FooterMoreLinks } from "../../../../../utils/consts";
import FooterMoreLink from "./footerMoreLink";

export default function FooterMore() {
  const [visible, setVisible] = useState(false);

  const moreContainer = useRef();

  useEffect(() => {
    function handleMoreMenu(event) {
      if (visible && moreContainer.current) {
        setVisible(false);
      }
    }

    document.addEventListener("mousedown", handleMoreMenu);

    return () => {
      document.removeEventListener("mousedown", handleMoreMenu);
    };
  }, [visible]);

  return (
    <div className="relative">
      <button
        onClick={() => setVisible(true)}
        className="flex my-0.5 transition-all hover:underline pr-3"
      >
        <div>
          <span>More</span>
        </div>
        <div className="text-[var(--color-baseSecondary)] px-0.5 items-end mt-auto">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            width={13}
            height={13}
          >
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </div>
      </button>

      {visible && (
        <div
          className="absolute bottom-0 right-0 shadow-box bg-[var(--background-primary)] flex flex-col z-20 rounded-xl overflow-hidden"
          ref={moreContainer}
        >
          {FooterMoreLinks.map((footer, index) => {
            return (
              <FooterMoreLink title={footer.title} to={footer.to} key={index} />
            );
          })}
        </div>
      )}
    </div>
  );
}
