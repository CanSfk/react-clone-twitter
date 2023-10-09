import classNames from "classnames";

export default function MoreContent({ path, title }) {
  return (
    <div
      className={classNames(
        "flex-1 px-4 py-3 items-center hover:bg-[#ffffff08]",
        {
          "flex gap-3": path != null,
        }
      )}
    >
      {path && (
        <div className="flex">
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
      )}
      <div className="flex">
        <span className="text-base font-bold ">{title}</span>
      </div>
    </div>
  );
}
