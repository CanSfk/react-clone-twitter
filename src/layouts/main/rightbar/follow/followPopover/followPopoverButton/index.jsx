import { useContext } from "react";
import { FollowPopoverContext } from "..";
import Button from "../../../../../../components/button";

export default function FollowPopoverButton() {
  const {
    handleButtonStyle,
    handleMouseLeave,
    handleMouseEnter,
    followState,
    styleState,
    handleText,
    setShow,
    text,
  } = useContext(FollowPopoverContext);

  return (
    <Button
      size="small"
      color={styleState ? "redDefault" : "white"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        handleButtonStyle();
        handleMouseLeave();
      }}
      onClick={() => {
        handleText();
        if (followState) setShow(true);
      }}
    >
      <span>{text}</span>
    </Button>
  );
}
