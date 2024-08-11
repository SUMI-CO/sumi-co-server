import { atom } from "recoil";

import { IUser, UserRole } from "../types/user.ts";

export const userRecoilState = atom<IUser>({
  key: "user",
  default: {
    id: 1,
    ssoUserId: 123,
    lastName: "Қантаев",
    firstName: "Шерхан",
    surname: "Еркінұлы",
    role: UserRole.Student,
    telegramUsername: "kansherhan",
    discordUsername: "kansherhan#0500",
    commandId: 4560,
    commandName: "Fen1x",
    direction: 1,
    raining: 75,
  },
});
