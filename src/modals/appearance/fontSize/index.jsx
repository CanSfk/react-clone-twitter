export default function FontSize() {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <span className="text-[13px] font-bold leading-5 text-[var(--color-baseSecondary)]">
        Font size
      </span>
      <div className="w-full h-[56px] bg-[var(--background-secondary)] rounded-2xl p-4 text-[var(--color-base)] flex items-center gap-5">
        <span className="leading-4 text-[13px]">Aa</span>
        <div></div>
        <span>Aa</span>
      </div>
    </div>
  );
}
