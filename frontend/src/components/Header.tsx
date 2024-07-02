import { FC } from "react";
import { useNavigate } from "react-router-dom";

import logoIcon from "../assets/svg/logo.svg";
import { PAGES } from "../constants/pages.ts";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header
      className="root-header bg:#566F9E padding:15|45 rb:18"
      onClick={() => navigate(PAGES.DASHBOARD.INDEX)}
    >
      <img
        src={logoIcon}
        alt="logo"
        className="w:47 h:47 cursor:pointer"
      />
    </header>
  );
};
