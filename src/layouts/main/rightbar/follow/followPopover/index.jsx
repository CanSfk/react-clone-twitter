import { createContext, useState } from "react";
import FollowPopoverButton from "./followPopoverButton";
import FollowPopoverPanel from "./followPopoverPanel";

export const FollowPopoverContext = createContext();

export default function FollowPopover({ longName }) {
  const [styleState, setStyleState] = useState(false);
  const [followState, setFollowState] = useState(false);
  const [text, setText] = useState("Follow");
  const [show, setShow] = useState(false);

  const handleText = () => {
    if (!followState) {
      setText("Following");
      setFollowState(true);
    }
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

  const data = {
    text,
    setText,
    setShow,
    longName,
    handleText,
    styleState,
    followState,
    setStyleState,
    setFollowState,
    handleMouseEnter,
    handleMouseLeave,
    handleButtonStyle,
  };

  return (
    <>
      <FollowPopoverContext.Provider value={data}>
        <FollowPopoverButton />
        {show && <FollowPopoverPanel />}
        {show && <div className="min-h-full w-4" />}
      </FollowPopoverContext.Provider>
      {/* {show && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#5b708366] z-40" />
      )} */}
    </>
  );
}
