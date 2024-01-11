import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  GAME_ROUTE,
  USERS_ROUTE,
} from "../routes/configs";

const NavBar: React.FC = () => {
  const { isAuth, setIsAuth } = useAuth();

  const handleAuthClick = () => {
    setIsAuth((prevIsAuth) => !prevIsAuth);
  };

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to={GAME_ROUTE}>Game</Link>
        </li>
        <li className="navbar__item">
          <Link to={USERS_ROUTE}>Users</Link>
        </li>
        <li className="navbar__item">
          <Link to={ABOUT_ROUTE}>About</Link>
        </li>
        <li className="navbar__item">
          <Link to={CONTACTS_ROUTE}>Contacts</Link>
        </li>
      </ul>
      <button onClick={handleAuthClick} className="navbar__button">
        {isAuth ? "Выйти" : "Войти"}
      </button>
    </div>
  );
};

export default NavBar;
