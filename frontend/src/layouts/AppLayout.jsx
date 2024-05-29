import { Outlet } from "react-router-dom";

import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

export function AppLayout() {
  return (
    <div className="page">
      <div className="container">
        <Header />

        <main className="root-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
