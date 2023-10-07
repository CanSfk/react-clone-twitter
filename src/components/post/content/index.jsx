export default function Content({ post }) {
  return (
    <div className="text-base text-[var(--color-base)]">
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.replace(/\n/g, "<br/><br/>"),
        }}
      />
    </div>
  );
}
