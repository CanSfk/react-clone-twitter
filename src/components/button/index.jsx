import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size,children }) {
  return React.createElement(
    "button",
    {
      className: classNames(
        "flex items-center justify-center transition-colors hover:bg-[#1a8cd8] flex-1 rounded-full text-white bg-[#1d9bf0] leading-5 font-bold",
        {
          "px-4 text-[15px]": size === "normal",
          "px-8 h-[52px] text-[17px]": size === "large",
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
