import { FC } from "react";
import { FaInstagram } from "react-icons/fa";

import logoIcon from "../../../assets/svg/logo.svg";
import { SUMICO_INSTAGRAM_LINK } from "../../../constants/links.ts";

export const StudentAuthRegistrationThanks: FC = () => {
  return (
    <div className="student-auth-registration-thanks">
      <div className="student-auth-registration-page">
        <div className="h:100vh flex jc:center ai:center">
          <div className="form p:20 w:400 bg:#fff r:6">
            <div className="flex flex:col jc:center ai:center">
              <img
                src={logoIcon}
                alt="logo"
                className="w:60 h:60 cursor:pointer mb:10"
              />

              <h3>На расмотрений</h3>

              <p className="px:15 text:center mt:15 mb:15 f:#333 f:14px">
                Спасибо за запрос, рассмотрим в течений 8-12 часов. Пока
                ожидаете можете ознакомится с нами.
              </p>

              <div
                className="flex jc:center ai:center p:7 b:2|solid|blue-40 r:5 cursor:pointer"
                onClick={() => window.location.replace(SUMICO_INSTAGRAM_LINK)}
              >
                <FaInstagram
                  className="f:blue-40 w:16px h:16px"
                  size={16}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
