import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children, onClick }) {
  return React.createElement(
    "button",
    {
      onClick: onClick,
      className: classNames(
        "flex items-center justify-center transition-colors border border-transparent hover:bg-[var(--color-secondary)] flex-1 rounded-full text-white bg-[var(--color-primary)] min-h-[36px] font-bold  font-bold",
        {
          "px-4 text-base": size === "normal",
          "px-8 h-[52px] text-[17px] leading-5": size === "large",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
  size: "normal",
};
