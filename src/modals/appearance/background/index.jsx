import { setBackgroundColor } from "../../../store/appearance/action";
import { setBoxShadow } from "../../../store/appearance/action";
import { setColor } from "../../../store/appearance/action";

export default function Background() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[13px] font-bold leading-5 text-[var(--color-baseSecondary)]">
        Background
      </span>
      <div className="w-full h-[80px] bg-[var(--background-secondary)] rounded-2xl mb-3 flex justify-around">
        <button
          onClick={() => {
            setBackgroundColor({
              primary: "#ffffff",
              secondary: "#f7f9f9",
              third: "#eff3f4",
            });
            setColor({
              primary: "#1a8cd8",
              secondary: "#8ecdf8",
              base: "#0f1419",
              baseSecondary: "#536471",
            });
            setBoxShadow({
              shadow:
                "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
            });
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setBackgroundColor({
              primary: "#15202b",
              secondary: "#1e2732",
              third: "#273340",
            });
            setColor({
              primary: "#1a8cd8",
              secondary: "#8ecdf8",
              base: "#f7f9f9",
              baseSecondary: "#8b98a5",
            });
            setBoxShadow({
              shadow:
                "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
            });
          }}
        >
          SoftDark
        </button>
        <button
          onClick={() => {
            setBackgroundColor({
              primary: "#000",
              secondary: "#16181c",
              third: "#202327",
            });
            setColor({
              primary: "#1a8cd8",
              secondary: "#8ecdf8",
              base: "#e7e9ea",
              baseSecondary: "#71767b",
            });
            setBoxShadow({
              shadow:
                "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
            });
          }}
        >
          Dark
        </button>
      </div>
    </div>
  );
}
