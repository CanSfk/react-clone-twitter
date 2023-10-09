import { Popover } from "@headlessui/react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function More({ path, children, color, title }) {
  return (
    <Popover className="relative flex">
      <Popover.Button
        className={classNames(
          `transition-colors text-[var(--color-baseSecondary)] group outline-none`,
          {
            "hover:text-[#209aeb]": color === "blue",
            "hover:text-[rgb(0,186,124)]": color === "green",
            "flex items-center gap-2": title !== null,
          }
        )}
      >
        <div className="relative">
          <div
            className={classNames(
              "w-[37.75px] h-[37.75px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors",
              {
                "group-hover:bg-[#1d9bf0]/10": color === "blue",
                "group-hover:bg-[rgba(0,186,124,0.1)]": color === "green",
              }
            )}
          />
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            width={18.75}
            height={18.75}
          >
            <path d={path} />
          </svg>
        </div>

        {title && <span>{title}</span>}
      </Popover.Button>

      <Popover.Panel className="flex flex-col bg-[var(--background-primary)] shadow-box rounded-xl w-max absolute right-0 top-[1px] z-10 overflow-hidden">
        {children}
      </Popover.Panel>
    </Popover>
  );
}

More.propTypes = {
  color: PropTypes.oneOf(["blue", "green"]),
};

More.defaultProps = {
  color: "blue",
};
