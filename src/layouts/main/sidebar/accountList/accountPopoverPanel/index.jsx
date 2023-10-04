import { useAccount } from "../../../../../store/auth/hook";
import { Popover, Transition } from "@headlessui/react";

export default function AccountPopoverPanel() {
  const account = useAccount();

  return (
    <Transition
      enter="transition duration-300 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Popover.Panel className="w-[300px] bottom-full font-bold left-1/2 -translate-x-1/2 absolute flex flex-col">
        <div className="py-3 flex flex-col rounded-2xl shadow-box  bg-[var(--background-primary)]">
          <button className="px-4 py-3 flex hover:bg-[var(--color-base)]/10 w-full transition-colors">
            <span>Add an existing account</span>
          </button>
          <button className="px-4 py-3 flex hover:bg-[var(--color-base)]/10 w-full transition-colors">
            <span>Log out @s_can_50</span>
          </button>
        </div>

        <div className="relative w-max h-[10px] mx-auto bg-transparent">
          <div className="rotate-180 w-max h-max absolute -bottom-[20%] left-1/2 -translate-x-1/2 text-[var(--background-primary)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="dropShadow"
              width={24}
              height={16.25}
              fill="currentColor"
            >
              <path d="M22 17H2L12 6l10 11z" />
            </svg>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
