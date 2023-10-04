export default function FontSize() {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <span className="text-[13px] font-bold leading-5 text-[var(--color-baseSecondary)]">
        Font size
      </span>
      <div className="w-full h-[56px] bg-[var(--background-secondary)] rounded-2xl grid place-items-center">
        fontSize
      </div>
    </div>
  );
}
