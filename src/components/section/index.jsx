import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <div className="bg-[var(--background-secondary)] border border-[var(--background-secondary)] mb-4 rounded-2xl flex flex-col">
      {title && (
        <div className="text-xl font-extrabold px-4 py-3">
          <h3>{title}</h3>
        </div>
      )}

      {children}
    </div>
  );
}

Section.protoTypes = {
  children: PropTypes.node,
};
