import { CustomNavLink } from "../customNavLink";
import { MainMenu } from "../../../../utils/consts";
import More from "./more";

export default function Menu() {
  return (
    <div className="flex flex-col items-stretch mt-0.5 mb-1">
      <nav className="flex flex-col items-start">
        {MainMenu.map((menu, index) => {
          return (
            <CustomNavLink
              to={menu.path}
              key={index}
              fill="#e7e9ea"
              text={menu.title}
              pasifPath={menu.icon.pasive}
              activePath={menu.icon.active}
              customCircle={menu?.customCircle}
              notification={menu?.notification}
            />
          );
        })}
        <More></More>
      </nav>
    </div>
  );
}
