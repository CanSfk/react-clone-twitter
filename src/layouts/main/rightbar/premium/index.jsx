import Button from "../../../../components/button";

export default function Premium() {
  return (
    <div className="bg-[var(--background-secondary)] border border-[var(--background-secondary)] mb-4  rounded-2xl">
      <div className=" flex gap-[10px] flex-col px-4 py-3">
        <div className="text-[20px] font-extrabold leading-6">
          <h3>Subscribe to Premium</h3>
        </div>
        <div className="text-[15px] font-bold leading-5">
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
        </div>
        <div>
          <Button size="normal">
            <span className="text-white">Subscribe</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
