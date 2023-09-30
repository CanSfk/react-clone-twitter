import { Popover } from "@headlessui/react";
import AccountPopoverButton from "./accountPopoverButton";
import AccountPopoverPanel from "./accountPopoverPanel";

export default function AccountList() {
  return (
    <div className="py-3 text-[15px] leading-5 text-[#e7e9ea]">
      <Popover className="relative">
        <AccountPopoverButton />
        <AccountPopoverPanel />
      </Popover>
    </div>
  );
}