import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => clsx(s.link, { [s.linkActive]: isActive })}
        to="/register"
      >
        Sign up
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, { [s.linkActive]: isActive })}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
