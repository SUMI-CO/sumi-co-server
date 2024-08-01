import { FC } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { UserRole } from "../types/user.ts";
import { userRoleID } from "../recoils/user.ts";
import { PAGES } from "../constants/pages.ts";

export const IndexPage: FC = () => {
  const navigate = useNavigate();

  const [roleID] = useRecoilState<UserRole>(userRoleID);

  if (roleID === UserRole.Student) {
    navigate(PAGES.DASHBOARD.STUDENTS.INDEX, { replace: true });
  }

  return <div>Если вы видите это, то прозошло какая то ошибка!</div>;
};
