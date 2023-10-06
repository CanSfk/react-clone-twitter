import { Popover } from "@headlessui/react";

export default function TrendLinkPopover() {
  return (
    <Popover className="flex">
      <Popover.Button className="relative bg-white">
        <div className="absolute top-[2px] right-0 transition-colors text-[var(--color-baseSecondary)] hover:text-[#209aeb] group">
          <div className="w-[37.75px] h-[37.75px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors group-hover:bg-[#1d9bf0]/10"></div>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            width={18.75}
            height={18.75}
          >
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </div>
      </Popover.Button>
      <Popover.Panel>
        <div className=" flex flex-col bg-[var(--background-primary)] shadow-box rounded-xl w-max absolute right-0 top-[1px] z-20">
          <div className="flex flex-1 px-4 py-3 items-center hover:bg-[#ffffff08]">
            <div className="pr-3 flex">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
                width={18.75}
                height={18.75}
              >
                <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
              </svg>
            </div>
            <div className="flex">
              <span className="text-base font-bold ">
                Not interested in this
              </span>
            </div>
          </div>
          <div className="flex flex-1 px-4 py-3 items-center  hover:bg-[#ffffff08]">
            <div className="pr-3">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
                width={18.75}
                height={18.75}
              >
                <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
              </svg>
            </div>
            <div className="flex">
              <span className="text-base font-bold ">
                This trend is harmful or spammy
              </span>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
