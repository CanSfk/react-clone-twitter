export default function Avatar({ post }) {
  return (
    <div className="w-10 h-10 max-h-[40px] max-w-[40px] relative rounded-full overflow-hidden img-shadow">
      <img
        src={post.account.avatar}
        alt={post.account.name}
        className="w-full h-full absolute object-cover"
      />
    </div>
  );
}
