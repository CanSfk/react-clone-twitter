import { useAccount } from "../../../../../store/auth/hook";
import { Popover } from "@headlessui/react";

export default function AccountPopoverButton() {
  const account = useAccount();

  return (
    <Popover.Button className="p-3 rounded-full flex items-center  hover:bg-[#e7e9ea]/10 w-full transition-colors outline-none">
      <div className="w-10 h-10 bg-slate-400 rounded-full overflow-hidden">
        <img
          alt="Can"
          draggable="true"
          src="https://pbs.twimg.com/profile_images/1707066425385291776/sb3otbu8_normal.jpg"
        />
      </div>
      <div className="flex flex-col mx-3 justify-between text-left">
        <span className="font-bold h-[22.5px]">{account.userName}</span>
        <span className="text-[#71767b]">@{account.fullName}</span>
      </div>
      <div className="flex flex-col items-end flex-1 pt-px">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          height={18.75}
          width={18.75}
        >
          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </svg>
      </div>
    </Popover.Button>
  );
}
