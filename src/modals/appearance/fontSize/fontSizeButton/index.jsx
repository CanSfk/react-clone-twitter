import { useAppearance } from "../../../../store/appearance/hooks";
import { setFontSize } from "../../../../store/appearance/action";
import classNames from "classnames";

export default function FontSizeButton({ data, setValue }) {
  const { fontSize } = useAppearance();

  return (
    <button
      onClick={() => {
        setFontSize({
          name: data.name,

          sm: data.sm,
          smLineHeight: data.smLineHeight,

          base: data.base,
          baseLineHeight: data.baseLineHeight,

          xl: data.xl,
          xlLineHeight: data.xlLineHeight,

          xxl: data.xxl,
          xxlLineHeight: data.xxlLineHeight,
        });

        setValue();
      }}
      className={classNames(
        `rounded-full relative bg-[var(--color-primary)] transition-colors h-3 w-3 shadow-box`,
        {
          "w-4 h-4": fontSize.name === data.name,
          "opacity-50": fontSize.xl < data.xl,
        }
      )}
    >
      <div className="w-8 h-8 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-[var(--color-primary)] opacity-10"></div>
    </button>
  );
}
