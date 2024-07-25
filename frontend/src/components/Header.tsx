import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

import logoIcon from "../assets/svg/logo.svg";
import { PAGES } from "../constants/pages.ts";
import { userName } from "../recoils/user.ts";

export const Header: FC = () => {
  const navigate = useNavigate();

  const [username] = useRecoilState(userName);

  return (
    <header className="root-header flex justify-content:space-between align-items:center bg:#566F9E padding:15|45 rb:12">
      <img
        src={logoIcon}
        alt="logo"
        className="w:45 h:45 cursor:pointer"
        onClick={() => navigate(PAGES.DASHBOARD.INDEX)}
      />

      <div className="flex align-items:center gap:25">
        <div className="notifications-button flex justify-content:center align-items:center bg:#ffffff w:45 h:45 round cursor:pointer">
          <i className="pi pi-bell f:#566F9E f:18 p-overlay-badge">
            <Badge
              value="5"
              severity="danger"
              className="top:-3px right:-3px"
            />
          </i>
        </div>

        <div className="username cursor:pointer">
          <Avatar
            icon="pi pi-user"
            shape="circle"
            className="w:45 h:45 f:#566F9E f:18 mr:10"
          />
          <span className="f:#ffffff f:bold">{username}</span>
        </div>
      </div>
    </header>
  );
};
