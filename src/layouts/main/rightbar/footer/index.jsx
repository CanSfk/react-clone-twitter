import FooterLink from "./footerLink";
import { Footers } from "../../../../utils/consts";
import FooterMore from "./footerMore";

export default function Footer() {
  return (
    <footer className="px-4 flex flex-wrap text-[var(--color-baseSecondary)] mb-4 text-sm ">
      {Footers.map((ft, index) => {
        return <FooterLink title={ft.title} to={ft.to} key={index} />;
      })}
      <FooterMore />
      <span className="my-0.5">© 2023 codeneon</span>
    </footer>
  );
}
