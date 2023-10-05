import { Colors } from "../../../utils/consts";
import ColorButton from "./colorButton";

export default function Color() {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <span className="text-[13px] font-bold leading-5 text-[var(--color-baseSecondary)]">
        Color
      </span>
      <div className="w-full h-[61px] bg-[var(--background-secondary)] rounded-2xl flex items-center justify-around">
        {Colors.map((c, index) => {
          return (
            <ColorButton
              optionBackground={c.optionBackground}
              optionBackgroundHover={c.optionBackgroundHover}
              primary={c.primary}
              secondary={c.secondary}
              name={c.name}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
