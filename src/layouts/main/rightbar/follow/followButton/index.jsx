import { useState, createContext } from "react";
import { setModal } from "../../../../../store/modal/actions";

export default function FollowButton({ longName }) {
  const [styleState, setStyleState] = useState(false);
  const [followState, setFollowState] = useState(false);
  const [text, setText] = useState("Follow");

  const buttonClasses = [
    "px-4 h-8 rounded-full text-[14px] border font-bold  transition-colors group",
    styleState
      ? "border-[#536471] bg-transparent hover:!border-[#67070f] hover:!bg-[#f4212e1a] hover:!text-[#F4212E] text-[#eff3f4]"
      : "text-black bg-[#eff3f4] border-transparent hover:bg-[#D7DBDC]",
  ].join(" ");

  const handleText = () => {
    if (!followState) {
      setText("Following");
      setFollowState(true);
    } else
      setModal("unfollow", {
        longName: longName,
      });
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          handleButtonStyle();
          handleMouseLeave();
        }}
        onClick={() => handleText()}
      >
        <span>{text}</span>
      </button>
      {/* <UnfollowModal /> */}
    </>
  );
}
