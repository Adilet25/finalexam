import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProfileMySettingsPage from "./pages/MyProfileMySettingsPage";
import MyProfileFavouritesVacancyPage from "./pages/MyProfileFavouritesVacancyPage";
import MyProfileOtclickPage from "./pages/MyProfileOtclickPage";
import MyProfileSubsPage from "./pages/MyProfileSubsPage";

const PROFILE_ROUTES = [
  {
    element: <MyProfileMySettingsPage />,
    path: "/myProfile/",
    id: 1,
  },
  {
    element: <MyProfileFavouritesVacancyPage />,
    path: "/myprofile/favourites",
    id: 2,
  },
  {
    element: <MyProfileOtclickPage />,
    path: "/myprofile/otclick",
    id: 3,
  },
  {
    element: <MyProfileSubsPage />,
    path: "/myprofile/subs",
    id: 4,
  },
];

const ProfileRoutes = () => {
  return (
    <Routes>
      {PROFILE_ROUTES.map((item) => (
        <Route path={item.path} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default ProfileRoutes;
