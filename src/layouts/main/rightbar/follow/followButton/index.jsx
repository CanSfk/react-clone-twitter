import { useState } from "react";

export default function FollowButton({ longName }) {
  const [styleState, setStyleState] = useState(false);
  const [followState, setFollowState] = useState(false);
  const [text, setText] = useState("Follow");
  const [popup, setPopop] = useState(false);

  const buttonClasses = [
    "px-4 h-8 rounded-full text-[14px] border font-bold leading-4 transition-colors group",
    styleState
      ? "border-[#536471] bg-transparent hover:!border-[#67070f] hover:!bg-[#f4212e1a] hover:!text-[#F4212E] text-[#eff3f4]"
      : "text-black bg-[#eff3f4] border-transparent hover:bg-[#D7DBDC]",
  ].join(" ");

  const handleText = () => {
    if (!followState) {
      setText("Following");
      setFollowState(true);
    } else setPopop(true);
  };

  const handleButtonStyle = () => {
    if (followState && !styleState) setStyleState(true);
  };

  const handleMouseEnter = () => {
    if (followState) setText("Unfollow");
  };

  const handleMouseLeave = () => {
    if (followState) setText("Following");
  };

  return (
    <>
      <button
        className={buttonClasses}
        onClick={() => handleText()}
        onMouseLeave={() => {
          handleButtonStyle();
          handleMouseLeave();
        }}
        onMouseEnter={handleMouseEnter}
      >
        <span>{text}</span>
      </button>
      {popup && (
        <div className="fixed top-0 left-0 bottom-0 right-0 grid place-items-center bg-[#5b708366]">
          <div className="w-[320px] p-8 flex flex-col gap-6 bg-black rounded-2xl">
            <div className="flex flex-col">
              <div className="mb-2 flex">
                <h1 className="font-bold text-[20px] text-[#e7e9ea] leading-6">
                  Unfollow @{longName}?
                </h1>
              </div>
              <div className="flex">
                <span className="text-[#71767b] text-[15px] leading-5">
                  Their posts will no longer show up in your For You timeline.
                  You can still view their profile, unless their posts are
                  protected.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-[15px] font-bold leading-5">
              <div className="flex">
                <button
                  onClick={() => {
                    setFollowState(false);
                    setStyleState(false);
                    setText("Follow");
                    setPopop(false);
                  }}
                  className="w-full px-4 h-11 rounded-full border transition-colors text-[#0f1419] bg-[#eff3f4] border-transparent hover:bg-[#D7DBDC]"
                >
                  Unfollow
                </button>
              </div>
              <div className="flex">
                <button
                  onClick={() => setPopop(false)}
                  className="w-full px-4 h-11 rounded-full border transition-colors border-[#536471] bg-transparent text-[#eff3f4] hover:bg-[#181919]"
                >
                  Cencel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
