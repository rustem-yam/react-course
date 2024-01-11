import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  GAME_ROUTE,
  USERS_ROUTE,
} from "./configs";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Game from "../pages/Game/Game";
import Users from "../pages/Users/Users";

const MainRouter = () => {
  const { isAuth } = useAuth();

  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPath: RouteObject[] = [
    { path: GAME_ROUTE, element: <Game /> },
    { path: USERS_ROUTE, element: <Users /> },
  ];

  const resultPaths: RouteObject[] = basedPath;

  if (isAuth) {
    resultPaths.push(...authPath);
  }

  return useRoutes(resultPaths);
};

export default MainRouter;
