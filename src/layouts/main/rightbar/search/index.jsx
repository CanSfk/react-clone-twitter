import { useState, useRef, useEffect } from "react";
import SearchPopup from "./searchPopup";

export default function Search() {
  const container = useRef();

  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    function handlePopupMenuVisible(event) {
      if (
        showPopup &&
        container.current &&
        !container.current.contains(event.target)
      )
        setShowPopup(false);
    }
    document.addEventListener("mousedown", handlePopupMenuVisible);

    return () => {
      document.removeEventListener("mousedown", handlePopupMenuVisible);
    };
  }, [showPopup]);

  return (
    <div
      className="w-full h-[53px] mb-3 flex items-center sticky top-0 bg-[var(--background-primary)] z-10"
      ref={container}
    >
      <div className="relative w-full" onClick={() => setShowPopup(true)}>
        <label className="text-[var(--color-baseSecondary)] w-full rounded-full border border-[var(--background-third)] bg-[var(--background-third)] flex items-center text-base  group focus-within:border-[#1d9bf0] focus-within:text-[var(--color-primary)] focus-within:bg-[var(--background-primary)]">
          <div className="pointer-events-none">
            <svg
              className="pl-3"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width={44}
              height={18.75}
              fill="currentColor"
            >
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
            </svg>
          </div>
          <input
            type="text"
            className="p-3 bg-transparent placeholder:text-[var(--color-baseSecondary)] text-[var(--color-base)] w-full border-none outline-none "
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <div className=" mr-3 flex items-center">
              <button
                className="w-[22px] h-[22px] rounded-full bg-[var(--color-primary)] flex justify-center items-center text-[var(--background-primary)] transition-colors hover:bg-[#1a8cd8] invisible group-focus-within:visible"
                onClick={() => setQuery("")}
              >
                <svg
                  viewBox="0 0 15 15"
                  fill="currentColor"
                  aria-hidden="true"
                  width={10}
                  height={10}
                >
                  <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z" />
                </svg>
              </button>
            </div>
          )}
        </label>
        {showPopup && <SearchPopup />}
      </div>
    </div>
  );
}
