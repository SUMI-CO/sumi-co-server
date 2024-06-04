import { FC } from "react";

import logoIcon from "../assets/svg/logo.svg";

export const Header: FC = () => {
  return (
    <header className="root-header bg:#566F9E padding:10|45">
      <img
        src={logoIcon}
        alt="logo"
        className="w:50 h:50"
      />
    </header>
  );
};
