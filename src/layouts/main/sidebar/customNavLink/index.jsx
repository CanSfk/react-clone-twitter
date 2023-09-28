import { NavLink } from "react-router-dom";
import classNames from "classnames";

export const CustomNavLink = ({
  to,
  text,
  activePath,
  pasifPath,
  fill,
  customCircle,
  notification,
}) => {
  return (
    <NavLink
      className="py-1 flex items-start flex-1 flex-col w-full group"
      to={to}
    >
      {({ isActive }) => (
        <div className="flex p-3 rounded-full items-center justify-center group-hover:bg-[#e7e9ea]/10 transition-colors">
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="26.25"
              height="26.25"
              fill={fill}
            >
              {!isActive && <path d={pasifPath} />}
              {isActive && <path d={activePath} />}
            </svg>
            {customCircle && (
              <div className="absolute -top-1 right-[1px] rounded-full h-[7px] w-[7px] bg-[#1d9bf0]"></div>
            )}
            {notification && <span className="absolute w-[18px] h-[18px] -top-[6px] -right-1 rounded-full bg-[#1d9bf0] text-[11px] text-center">{notification}</span>}
          </div>
          <div className="mr-4 ml-5 text-ellipsis h-[24px] break-words flex items-center ">
            <span
              className={classNames("text-xl text-[#e7e9ea] inline ", {
                "font-bold": isActive,
              })}
            >
              {text}
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
};
