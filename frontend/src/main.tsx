import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "@master/css";

import "./assets/scss/index.scss";

import { AppLayout } from "./layouts/AppLayout.tsx";
import { IndexPage } from "./pages/IndexPage.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import { SingleCoursesPage } from "./pages/SingleCoursesPage.tsx";
import { PAGES } from "./constants/pages.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index={true}
              path={PAGES.DASHBOARD.INDEX}
              element={<IndexPage />}
            />

            <Route path={PAGES.DASHBOARD.COURSES.INDEX}>
              <Route
                index={true}
                element={<CoursesPage />}
              />

              <Route
                path={PAGES.DASHBOARD.COURSES.SINGLE_COURSES}
                element={<SingleCoursesPage />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
