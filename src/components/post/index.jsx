import Avatar from "./avatar";
import Content from "./content";
import Header from "./header";
import Image from "./image";
import Stats from "./stats";

export default function Post({ post }) {
  return (
    <div className="relative before:w-full before:h-full before:transition-colors before:absolute before:hover:bg-[var(--background-third)] before:opacity-20 before:top-0 before:left-0 before:z-[-1]">
      <a
        href="#"
        className="flex gap-3 px-4 py-3 border-b border-[var(--background-third)]"
      >
        <Avatar post={post} />
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex flex-col gap-0.5">
            <Header post={post} />
            <Content post={post} />
          </div>
          <Image post={post} />
          <div>
            <Stats post={post} />
          </div>
        </div>
      </a>
    </div>
  );
}
