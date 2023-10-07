import PropTypes from "prop-types";
import { useTab } from "../context";
import classNames from "classnames";

export default function Item({ children, id }) {
  const { active, setActive } = useTab();

  return (
    <button
      onClick={() => setActive(id)}
      className="px-4 h-[3.313rem] text-base text-center flex-auto inline-flex items-center justify-center transition-colors hover:bg-[var(--background-secondary)]"
    >
      <div className="relative h-full grid place-items-center px-[1.5px]">
        <span
          className={classNames("", {
            "font-medium text-[var(--color-baseSecondary)]": active != id,
            "font-bold text-[var(--color-base)]": active == id,
          })}
        >
          {children}
        </span>
        {active === id && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-primary)] rounded-full"></div>
        )}
      </div>
    </button>
  );
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
};
