import FooterLink from "./footerLink";
import { Footers } from "../../../../utils/consts";
import FooterMore from "./footerMore";

export default function Footer() {
  return (
    <footer className="px-4 flex flex-wrap text-[var(--color-baseSecondary)] mb-4 text-[13px] leading-4">
      {Footers.map((footer, index) => {
        return <FooterLink title={footer.title} to={footer.to} key={index} />;
      })}
      <FooterMore />
      <span className="my-0.5">© 2023 codeneon</span>
    </footer>
  );
}
