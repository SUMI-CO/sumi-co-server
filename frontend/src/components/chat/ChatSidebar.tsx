import { FC } from "react";
import { Sidebar } from "primereact/sidebar";
import { useRecoilState } from "recoil";

import { chatSidebarIsShow } from "../../recoils/chat.ts";

export const ChatSidebar: FC = () => {
  const [isShow, setIsShow] = useRecoilState(chatSidebarIsShow);

  return (
    <Sidebar
      visible={isShow}
      position="right"
      onHide={() => setIsShow(false)}
      className="w:full w:20rem@md w:30rem@lg"
    >
      <h2>Right Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Sidebar>
  );
};
