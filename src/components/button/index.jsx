import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({
  size,
  children,
  onClick,
  color,
  onMouseLeave,
  onMouseEnter,
}) {
  return React.createElement(
    "button",
    {
      onClick: onClick,
      onMouseLeave: onMouseLeave,
      onMouseEnter: onMouseEnter,
      className: classNames(
        "flex items-center justify-center transition-colors border flex-1 rounded-full font-bold",
        {
          "h-[32px] px-4 text-[14px]": size === "small",
          "h-[36px] px-4 text-base": size === "normal",
          "h-[44px] text-base": size === "large",
          "h-[52px] text-[17px] leading-5": size === "extraLarge",
          "text-white bg-[var(--color-primary)] border-transparent hover:bg-[var(--color-secondary)] ": color === "blue",
          "text-[#0f1419] bg-[#eff3f4] border-transparent hover:bg-[#D7DBDC]": color === "white",
          "border-[#536471] bg-transparent hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#F4212E] text-[#eff3f4]]": color == "redDefault",
          "border-[#536471] bg-transparent text-[#eff3f4] hover:bg-[#181919]": color === "default",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large", "extraLarge"]),
  color: PropTypes.oneOf(["blue", "white", "redDefault", "default"]),
};

Button.defaultProps = {
  size: "normal",
  color: "blue",
};
