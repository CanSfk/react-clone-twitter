import { useAppearance } from "../../../../store/appearance/hooks";
import { setColor } from "../../../../store/appearance/action";

export default function ColorButton({
  optionBackgroundHover,
  optionBackground,
  secondary,
  primary,
  name,
}) {
  const appearance = useAppearance();
  const baseColor = appearance.color;

  return (
    <button
      className={`w-[45px] h-[45px] ${optionBackgroundHover} rounded-full overflow-hidden grid place-items-center`}
      onClick={() =>
        setColor({
          ...baseColor,
          name: name,
          primary: primary,
          secondary: secondary,
        })
      }
    >
      <div
        className={`${optionBackground} grid place-items-center h-[39px] w-[39px] rounded-full`}
      >
        {appearance.color.name === name && (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            width={25}
            height={25}
            fill="#ffffff"
          >
            <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
          </svg>
        )}
      </div>
    </button>
  );
}
