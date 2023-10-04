export default function Color() {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <span className="text-[13px] font-bold leading-5 text-[var(--color-baseSecondary)]">
        Color
      </span>
      <div className="w-full h-[61px] bg-[var(--background-secondary)] rounded-2xl flex items-center justify-around">
        <div className="w-[45px] h-[45px] rounded-full bg-[#1d9bf0]">
          <label>
            <div></div>
            <input type="radio" />
          </label>
        </div>
      </div>
    </div>
  );
}
