import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "@master/css";

import "./assets/scss/index.scss";

import { AppLayout } from "./layouts/AppLayout.jsx";

import { IndexPage } from "./pages/IndexPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              path={"/"}
              element={<IndexPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>,
);
