import Button from "../../../../components/button";
import Section from "../../../../components/section";

export default function Premium() {
  return (
    <Section>
      <div className="flex flex-col gap-[10px] px-4 py-3">
        <h3 className="text-xl font-extrabold">Subscribe to Premium</h3>
        <div className="text-base font-bold">
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
        </div>
        <div className="">
          <Button size="normal">
            <span>Subscribe</span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
