import { FC } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useNavigate } from "react-router-dom";

import logoIcon from "../../../assets/svg/logo.svg";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { PAGES } from "../../../constants/pages.ts";

export const StudentAuthRegistrationPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="student-auth-registration-page">
      <div className="h:100vh flex jc:center ai:center">
        <div className="form p:20 w:400 bg:#fff r:6">
          <div className="flex flex:col jc:center ai:center mb:20">
            <img
              src={logoIcon}
              alt="logo"
              className="w:60 h:60 cursor:pointer mb:10"
            />

            <h3>Запрос на вход в SUMI-CO</h3>
          </div>

          <IconField
            className="rel mb:20 w:full"
            iconPosition="left"
          >
            <InputIcon className="pi pi-whatsapp" />
            <InputMask
              id="phone"
              mask="+7 (999) 999-9999"
              placeholder="+7 (999) 999-9999"
              className="w:full"
            ></InputMask>
          </IconField>

          <InputTextarea
            autoResize={true}
            rows={5}
            cols={30}
            className="w:full"
            placeholder="Расскажите о себе и о том что вы ожидаете от нас за условно 100 символов..."
          />

          <Button
            label="Отправить"
            className="mt:10 w:full"
            onClick={() => navigate(PAGES.AUTH.STUDENT_THANKS)}
          />
        </div>
      </div>
    </div>
  );
};
