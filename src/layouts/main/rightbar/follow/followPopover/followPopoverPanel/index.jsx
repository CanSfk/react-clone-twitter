import { useContext } from "react";
import { FollowPopoverContext } from "..";
import Button from "../../../../../../components/button";

export default function FollowPopoverButton() {
  const { setShow, setText, setStyleState, setFollowState, longName } =
    useContext(FollowPopoverContext);

  const handleUnfollowClick = () => {
    setText("Follow");
    setStyleState(false);
    setFollowState(false);
    setShow(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#5b708366] z-40 grid place-items-center cursor-default">
      <div className="w-[320px] p-8 flex flex-col gap-6 bg-[var(--background-primary)] rounded-2xl z-50">
        <div className="flex flex-col">
          <div className="mb-2 flex">
            <h1 className="font-bold text-xl">Unfollow @{longName}?</h1>
          </div>
          <div className="flex">
            <span className="text-[var(--color-baseSecondary)] text-base">
              Their posts will no longer show up in your For You timeline. You
              can still view their profile, unless their posts are protected.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-base font-bold">
          <div className="flex">
            <Button
              size="large"
              color="white"
              onClick={() => handleUnfollowClick()}
            >
              Unfollow
            </Button>
          </div>
          <div className="flex">
            <Button size="large" color="default" onClick={() => setShow(false)}>
              Cencel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
