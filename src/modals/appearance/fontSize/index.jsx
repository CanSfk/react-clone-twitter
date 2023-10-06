import FontSizeButton from "./fontSizeButton";
import { FontSizes } from "../../../utils/consts";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function FontSize() {
  const [count, setCount] = useState();
  const [width, setWidth] = useState("0%");

  const setValue = (index) => {
    setCount(index);
  };

  useEffect(() => {
    const newWidth = `${25 * count}%`;
    setWidth(newWidth);
  }, [count]);

  return (
    <div className="flex flex-col gap-1 mb-3">
      <span className="text-sm font-bold py-0.5 text-[var(--color-baseSecondary)]">
        Font size
      </span>
      <div className="w-full h-[56px] bg-[var(--background-secondary)] rounded-2xl p-4 text-[var(--color-base)] flex items-center gap-5">
        <span className="text-sm">Aa</span>
        <div className="h-1 flex-1 rounded-full flex items-center justify-between px-0.5 relative before:absolute before:w-full before:h-full before:bg-[--color-primary] before:opacity-50 before:top-0 before:left-0">
          <div
            style={{ width: width }}
            className={`h-1 rounded-full absolute top-1/2 left-0 -translate-y-1/2 bg-[var(--color-primary)]`}
          ></div>
          {FontSizes.map((data, index) => {
            return (
              <FontSizeButton
                data={data}
                key={index}
                setValue={() => setValue(index)}
              />
            );
          })}
        </div>
        <span className="text-xl">Aa</span>
      </div>
    </div>
  );
}
