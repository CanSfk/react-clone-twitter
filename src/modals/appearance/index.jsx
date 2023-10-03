import Content from "./content";
import Example from "./example";
import FontSize from "./fontSize";
import Color from "./color";
import Background from "./background";
import Button from "../../components/button";

export default function AppearanceModal() {
  return (
    <div className="flex flex-col w-[600px] bg-black rounded-2xl p-8">
      <Content />
      <Example />
      <FontSize />
      <Color />
      <Background />
      <div className="mt-4 mx-auto">
        <Button size="normal">Done</Button>
      </div>
    </div>
  );
}
