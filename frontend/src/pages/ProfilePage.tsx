import { FC } from "react";
import { useRecoilState } from "recoil";
import { userRecoilState } from "../recoils/user.ts";
import { roleNames } from "../constants/role.ts";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Chip } from "primereact/chip";
import { Dropdown } from "primereact/dropdown";

export const ProfilePage: FC = () => {
  const [user, setUser] = useRecoilState(userRecoilState);

  const allDirectionNames = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "UI/UX Design" },
  ];

  return (
    <div className="profile-page w:full p:30">
      <div className="w:full bg:#fff beautiful-shadow p:35 r:6">
        <div className="flex mb:50">
          <img
            src="https://placehold.co/175"
            alt="avatar"
            className="round w:175px h:175px"
          />

          <div className="info ml:45 flex flex:column justify-content:center">
            <p className="f:36 f:bold mb:15">
              {user.lastName} {user.firstName}
            </p>
            <p className="f:18">{roleNames[user.role]}</p>
          </div>
        </div>

        <div className="details">
          <div className="flex align-items:center border-top:1|solid|#E0E0E0 border-bottom:1|solid|#E0E0E0 p:15">
            <p className="w:20% f:#9E9E9E f:semibold">Telegram</p>

            <InputText
              value={user.telegramUsername}
              onChange={(e) =>
                setUser({ ...user, telegramUsername: e.target.value })
              }
              className="w:80%"
            />
          </div>

          <div className="flex align-items:center border-bottom:1|solid|#E0E0E0 p:15">
            <p className="w:20% f:#9E9E9E f:semibold">Discord</p>

            <InputText
              value={user.discordUsername}
              onChange={(e) =>
                setUser({ ...user, discordUsername: e.target.value })
              }
              className="w:80%"
            />
          </div>

          <div className="flex align-items:center border-bottom:1|solid|#E0E0E0 p:15">
            <p className="w:20% f:#9E9E9E f:semibold">Команды</p>

            <div className="w:80%">
              <Chip label={user.commandName} />
            </div>
          </div>

          <div className="flex align-items:center border-bottom:1|solid|#E0E0E0 p:15">
            <p className="w:20% f:#9E9E9E f:semibold">Направления</p>

            <Dropdown
              value={allDirectionNames.find(
                (item) => item.id === user.direction,
              )}
              onChange={(e) => setUser({ ...user, direction: e.value.id })}
              options={allDirectionNames}
              optionLabel="name"
              placeholder="Выберите направления"
              className="w:80%"
            />
          </div>

          <div className="flex align-items:center border-bottom:1|solid|#E0E0E0 p:28|15">
            <p className="w:20% f:#9E9E9E f:semibold">Рейтинг</p>

            <p className="f:semibold f:#566f9e">
              {user.raining} / 100 <i className="pi pi-star-fill" />
            </p>
          </div>
        </div>

        <div className="w:full flex justify-content:flex-end mt:30">
          <Button
            label="Сохранить изменения"
            icon="pi pi-save"
          />
        </div>
      </div>
    </div>
  );
};
