import { setBackgroundColor } from "../../../store/appearance/action";
import { setBoxShadow } from "../../../store/appearance/action";
import { setColor } from "../../../store/appearance/action";
import { useAppearance } from "../../../store/appearance/hooks";

export default function Background() {
  const appearance = useAppearance();
  const color = appearance.color;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-[13px] font-bold leading-5 text-[var(--color-baseSecondary)]">
        Background
      </span>
      <div className="w-full bg-[var(--background-secondary)] rounded-2xl mb-3 flex px-3 py-1 font-bold text-[15px] leading-5">
        <button
          onClick={() => {
            setBackgroundColor({
              name: "Default",
              primary: "#ffffff",
              secondary: "#f7f9f9",
              third: "#eff3f4",
            });
            setColor({
              ...color,
              base: "#0f1419",
              baseSecondary: "#536471",
            });
            setBoxShadow({
              shadow:
                "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
            });
          }}
          className={`px-5 m-1 flex-1 bg-[#ffffff] rounded-[4px] group ${
            appearance.backgroundColor.name === "Default"
              ? "border-[var(--color-primary)] border-[2px]"
              : "border-[#333639] border"
          }`}
        >
          <div className="flex items-center flex-1 h-[60px]">
            <div
              className={`w-5 h-5 border-[2px] rounded-full text-[#ffffff] relative ${
                appearance.backgroundColor.name === "Default"
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                  : "bg-transparent border-[#b9cad3]"
              }`}
            >
              {appearance.backgroundColor.name === "Default" && (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  width={16}
                  height={16}
                >
                  <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                </svg>
              )}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full group-hover:bg-[#71767b]/10 transition-colors"></div>
            </div>
            <span className="flex-1 ml-[5px] text-[#0f1419]">Default</span>
          </div>
        </button>

        <button
          onClick={() => {
            setBackgroundColor({
              name: "Dim",
              primary: "#15202b",
              secondary: "#1e2732",
              third: "#273340",
            });
            setColor({
              ...color,
              base: "#f7f9f9",
              baseSecondary: "#8b98a5",
            });
            setBoxShadow({
              shadow:
                "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
            });
          }}
          className={`px-5 m-1 flex-1 bg-[#15202b] rounded-[4px] group ${
            appearance.backgroundColor.name === "Dim"
              ? "border-[var(--color-primary)] border-[2px]"
              : "border-[#333639] border"
          }`}
        >
          <div className="flex items-center flex-1 h-[60px]">
            <div
              className={`w-5 h-5 border-[2px] rounded-full text-[#ffffff] relative ${
                appearance.backgroundColor.name === "Dim"
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                  : "bg-transparent border-[#5c6e7e]"
              }`}
            >
              {appearance.backgroundColor.name === "Dim" && (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  width={16}
                  height={16}
                >
                  <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                </svg>
              )}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full group-hover:bg-[#71767b]/10 transition-colors"></div>
            </div>
            <span className="flex-1 ml-[5px] text-[#f7f9f9]">Dim</span>
          </div>
        </button>

        <button
          onClick={() => {
            setBackgroundColor({
              name: "Lights out",
              primary: "#000",
              secondary: "#16181c",
              third: "#202327",
            });
            setColor({
              ...color,
              base: "#e7e9ea",
              baseSecondary: "#71767b",
            });
            setBoxShadow({
              shadow:
                "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
            });
          }}
          className={`px-5 m-1 flex-1 bg-[#000] rounded-[4px] group ${
            appearance.backgroundColor.name === "Lights out"
              ? "border-[var(--color-primary)] border-[2px]"
              : "border-[#5c6e7e] border"
          }`}
        >
          <div className="flex items-center flex-1 h-[60px] justify-center">
            <div
              className={`w-5 h-5 border-[2px] rounded-full text-[#ffffff] relative ${
                appearance.backgroundColor.name === "Lights out"
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                  : "bg-transparent border-[#3e4144]"
              }`}
            >
              {appearance.backgroundColor.name === "Lights out" && (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  width={16}
                  height={16}
                >
                  <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                </svg>
              )}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full group-hover:bg-[#71767b]/10 transition-colors"></div>
            </div>
            <span className="flex-1 ml-[5px] text-[#e7e9ea] ">Lights out</span>
          </div>
        </button>
      </div>
    </div>
  );
}
