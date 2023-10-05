import Content from "./content";
import Example from "./example";
import FontSize from "./fontSize";
import Color from "./color";
import Background from "./background";
import Button from "../../components/button";

export default function AppearanceModal({ close }) {
  return (
    <div className="flex flex-col w-[600px] bg-[var(--background-primary)] rounded-2xl p-8 z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Content />
      <Example />
      <FontSize />
      <Color />
      <Background />
      <div className="mt-4 mx-auto">
        <Button onClick={close} size="normal">
          Done
        </Button>
      </div>
    </div>
  );
}
