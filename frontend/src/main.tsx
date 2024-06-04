import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@master/css";

import "./assets/scss/index.scss";

import { AppLayout } from "./layouts/AppLayout.tsx";
import { IndexPage } from "./pages/IndexPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index={true}
            path={"/"}
            element={<IndexPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
