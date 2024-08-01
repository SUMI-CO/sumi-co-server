import { atom } from "recoil";

import { UserRole } from "../types/user.ts";

export const userName = atom<string>({
  key: "userName",
  default: "Қантаев Ш.Е.",
});

export const userIsAdmin = atom<boolean>({
  key: "userIsAdmin",
  default: false,
});

export const userRoleID = atom<UserRole>({
  key: "userRoleID",
  default: UserRole.Student,
});
