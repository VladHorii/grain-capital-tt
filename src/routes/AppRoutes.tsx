import { UserLayout } from "@/layout";
import { HomePage, LandingPage, UserPage } from "@/pages";
import { ROUTES } from "@/types";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<LandingPage />} />
        <Route path={"/"} element={<UserLayout />}>
          <Route path={`/${ROUTES.home}`} element={<HomePage />} />
          <Route path={`/${ROUTES.user}/:userId`} element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
