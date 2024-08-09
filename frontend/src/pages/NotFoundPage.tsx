import { FC } from "react";
import { Navigate } from "react-router-dom";

import { PAGES } from "../constants/pages.ts";

export const NotFoundPage: FC = () => {
  return <Navigate to={PAGES.DASHBOARD.INDEX} />;
};
