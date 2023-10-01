import FooterLink from "./footerLink";
import { Footers } from "../../../../utils/consts";
import FooterMore from "./footerMore";

export default function Footer() {
  return (
    <nav className="px-4 flex flex-wrap text-[#71767b] text-[13px] leading-4">
      {Footers.map((footer, index) => {
        return <FooterLink title={footer.title} to={footer.to} key={index} />;
      })}
      <FooterMore />
      <span>© 2023 codeneon</span>
    </nav>
  );
}