export default function Image({ post }) {
  return (
    post?.image && (
      <div className="max-h-[512px] max-w-[514px] relative">
        <img
          src={post.image}
          alt={post.image}
          className="rounded-2xl object-cover max-w-full max-h-full border border-[var(--background-third)]"
        />
      </div>
    )
  );
}
