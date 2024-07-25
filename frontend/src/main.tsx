import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import moment from "moment";
import "moment/dist/locale/ru";

import "@master/css";

import "./assets/scss/index.scss";

import { AppLayout } from "./layouts/AppLayout.tsx";
import { PAGES } from "./constants/pages.ts";

import { IndexPage } from "./pages/IndexPage.tsx";
import { StudentSingleCoursesPage } from "./pages/students/StudentSingleCoursesPage.tsx";
import { StudentCoursesPage } from "./pages/students/StudentCoursesPage.tsx";
import { StudentSchedulesPage } from "./pages/students/StudentSchedulesPage.tsx";
import { StudentSubjectGradesPage } from "./pages/students/StudentSubjectGradesPage.tsx";
import { StudentProgressPage } from "./pages/students/StudentProgressPage.tsx";

moment.locale("ru");

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

            <Route path={PAGES.DASHBOARD.STUDENTS.INDEX}>
              <Route
                path={PAGES.DASHBOARD.STUDENTS.SCHEDULES}
                element={<StudentSchedulesPage />}
              />
              <Route
                path={PAGES.DASHBOARD.STUDENTS.SUBJECT_GRADES}
                element={<StudentSubjectGradesPage />}
              />
              <Route
                path={PAGES.DASHBOARD.STUDENTS.PROGRESS}
                element={<StudentProgressPage />}
              />
            </Route>

            <Route path={PAGES.DASHBOARD.COURSES.INDEX}>
              <Route
                index={true}
                element={<StudentCoursesPage />}
              />
              <Route
                path={PAGES.DASHBOARD.COURSES.SINGLE_COURSES}
                element={<StudentSingleCoursesPage />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
