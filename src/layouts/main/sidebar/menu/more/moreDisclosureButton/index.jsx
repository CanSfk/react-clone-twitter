import { Disclosure } from "@headlessui/react";
import classNames from "classnames";

export default function MoreDisclosureButton({ title, path }) {
  return (
    <Disclosure.Button className="p-4 flex items-center justify-between flex-1 w-full transition-colors hover:bg-[var(--background-secondary)]">
      {({ open }) => (
        <>
          <span className="font-bold">{title}</span>
          <div
            className={classNames(
              "ml-3 transition-transform ",
              {
                "rotate-180 text-[var(--color-primary)]": open,
              }
            )}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="accordion-chevron"
              width={18.75}
              height={18.75}
              fill="currentColor"
            >
              <path d={path} />
            </svg>
          </div>
        </>
      )}
    </Disclosure.Button>
  );
}
