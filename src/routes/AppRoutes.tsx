import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LandingPage } from "../pages/LandingPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<LandingPage />} />
        <Route path={"/home"} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
