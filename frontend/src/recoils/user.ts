import { atom } from "recoil";

export const userName = atom<string>({
  key: "userName",
  default: "Қантаев Ш.Е.",
});

export const userIsAdmin = atom<boolean>({
  key: "userIsAdmin",
  default: false,
});
