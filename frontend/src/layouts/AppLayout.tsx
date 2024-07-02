import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export const AppLayout: FC = () => {
  return (
    <div className="container min-h-window-full flex flex:col bg:#f2f4fa">
      <Header />

      <main className="root-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
