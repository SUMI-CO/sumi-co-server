import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import moment from "moment";
import "moment/dist/locale/ru";

import "@master/css";

import "./assets/scss/index.scss";

import { PAGES } from "./constants/pages.ts";

import { AppLayout } from "./layouts/AppLayout.tsx";

import { IndexPage } from "./pages/IndexPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { StudentSingleCoursesPage } from "./pages/students/StudentSingleCoursesPage.tsx";
import { StudentMentorCoursesPage } from "./pages/students/StudentMentorCoursesPage.tsx";
import { StudentSchedulesPage } from "./pages/students/StudentSchedulesPage.tsx";
import { StudentSubjectGradesPage } from "./pages/students/StudentSubjectGradesPage.tsx";
import { StudentProgressPage } from "./pages/students/StudentProgressPage.tsx";
import { StudentCoursesPage } from "./pages/students/StudentCoursesPage.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { StudentCompetitionsPage } from "./pages/students/StudentCompetitionsPage.tsx";
import { StudentCourseLessons } from "./pages/students/StudentCourseLessons.tsx";

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

            <Route
              path="*"
              element={<NotFoundPage />}
            />

            <Route
              path={PAGES.DASHBOARD.PROFILE}
              element={<ProfilePage />}
            />

            <Route path={PAGES.DASHBOARD.STUDENTS.INDEX}>
              <Route
                path={PAGES.DASHBOARD.STUDENTS.COURSES}
                element={<StudentCoursesPage />}
              />
              <Route
                path={PAGES.DASHBOARD.STUDENTS.COURSE_LESSONS}
                element={<StudentCourseLessons />}
              />
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
              <Route
                path={PAGES.DASHBOARD.STUDENTS.COMPETITIONS}
                element={<StudentCompetitionsPage />}
              />
            </Route>

            <Route path={PAGES.DASHBOARD.COURSES.INDEX}>
              <Route
                path={PAGES.DASHBOARD.COURSES.MENTOR}
                element={<StudentMentorCoursesPage />}
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
