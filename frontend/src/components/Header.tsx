import { FC, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { OverlayPanel } from "primereact/overlaypanel";
import { MenuItem } from "primereact/menuitem";
import { Menu } from "primereact/menu";

import logoIcon from "../assets/svg/logo.svg";
import { PAGES } from "../constants/pages.ts";
import { userRecoilState } from "../recoils/user.ts";
import { SSO_PORTAL_LINK } from "../constants/links.ts";

export const Header: FC = () => {
  const notificationsOverlayPanel = useRef<OverlayPanel>();
  const navigate = useNavigate();

  const [user] = useRecoilState(userRecoilState);

  const avatarMenuRef = useRef<Menu>(null);

  const avatarMenuItems: MenuItem[] = [
    {
      label: "Личный кабинет",
      icon: "pi pi-user",
      command: () => navigate(PAGES.DASHBOARD.PROFILE),
    },
    {
      label: "Перейти в SSO",
      icon: "pi pi-sign-out",
      command: () => window.location.replace(SSO_PORTAL_LINK),
    },
  ];

  return (
    <header className="root-header beautiful-shadow flex justify-content:space-between align-items:center bg:#566F9E padding:15|40">
      <img
        src={logoIcon}
        alt="logo"
        className="w:45 h:45 cursor:pointer"
        onClick={() => navigate(PAGES.DASHBOARD.INDEX)}
      />

      <OverlayPanel ref={notificationsOverlayPanel}>
        <div className="value">
          <p className="f:18 f:bold">Уведомление</p>
        </div>
      </OverlayPanel>

      <div className="flex align-items:center gap:25">
        <div
          className="notifications-button flex justify-content:center align-items:center bg:#ffffff w:45 h:45 round cursor:pointer"
          onClick={(e) => notificationsOverlayPanel.current.toggle(e)}
        >
          <i className="pi pi-bell f:#566F9E f:18 p-overlay-badge">
            <Badge
              value="5"
              severity="danger"
              className="top:-3px right:-3px"
            />
          </i>
        </div>

        <Menu
          id="popup_avatar_menu"
          model={avatarMenuItems}
          ref={avatarMenuRef}
          popup
          className="f:14"
        />

        <div
          className="username cursor:pointer"
          aria-controls="popup_avatar_menu"
          aria-haspopup
          onClick={(event) => avatarMenuRef.current.toggle(event)}
        >
          <Avatar
            icon="pi pi-user"
            shape="circle"
            className="w:45 h:45 f:#566F9E bg:#fff f:18 mr:10"
          />

          <span className="f:#ffffff f:bold">
            {user.lastName} {user.firstName[0]}.{user.surname[0]}
          </span>
        </div>
      </div>
    </header>
  );
};
