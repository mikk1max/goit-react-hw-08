import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { MdLogout } from "react-icons/md";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.menuContainer}>
      <p className={s.welcomeText}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        <MdLogout size={32} className={s.logoutIcon}/>
      </button>
    </div>
  );
};

export default UserMenu;
