import PropTypes from "prop-types";

export default function StickyHeader({ title, children }) {
  return (
    <header className="sticky top-0 z-20 bg-[var(--background-primary-soft)] backdrop-blur-md border-b border-[var(--background-third)]">
      <div className="h-[3.313rem] px-4 flex items-center">
        <h3 className="font-bold text-xl py-0.5 text-[var(--color-base)]">
          {title}
        </h3>
      </div>
      {children}
    </header>
  );
}

StickyHeader.prototype = {
  title: PropTypes.string.isRequired,
};
