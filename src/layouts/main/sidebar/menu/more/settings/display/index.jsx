import { Disclosure } from "@headlessui/react";
import { setModal } from "../../../../../../../store/modal/actions";

export default function Display() {
  return (
    <>
      <Disclosure.Panel className="flex-1 w-full transition-colors hover:bg-[#16181c]">
        <button
          onClick={() => setModal("appearance")}
          className="flex items-center flex-1 w-full p-3 transition-colors hover:bg-[#16181c]"
        >
          <div className="mr-3">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="icon"
              width={18.75}
              height={18.75}
              fill="#e7e9ea"
            >
              <path d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z" />
            </svg>
          </div>
          <span className="text-[15px] font-medium">Display</span>
        </button>
      </Disclosure.Panel>
    </>
  );
}
