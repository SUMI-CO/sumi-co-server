import { FC } from "react";
import { useRecoilState } from "recoil";

import { UserRole } from "../types/user.ts";
import { userRoleID } from "../recoils/user.ts";

import { StudentIndexPage } from "./students/StudentIndexPage.tsx";

export const IndexPage: FC = () => {
  const [roleID] = useRecoilState<UserRole>(userRoleID);

  if (roleID === UserRole.Student) {
    return <StudentIndexPage />;
  }

  return <div>Если вы видите это, то прозошло какая то ошибка!</div>;
};
