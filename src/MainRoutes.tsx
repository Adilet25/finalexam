import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import VacanPage from "./pages/VacanPage";

type Props = {};

const PUBLIC_ROUTES = [
  {
    element: <HomePage />,
    path: "/",
    id: 1,
  },
];

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.path} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
