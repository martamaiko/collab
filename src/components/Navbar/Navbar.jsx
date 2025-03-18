import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {ReactComponent as ProfileIcon } from "../../assets/images/profileIcon.svg";
import {ReactComponent as UsersIcon } from "../../assets/images/usersIcon.svg";
import {ReactComponent as ChatsIcon } from "../../assets/images/chatsIcon.svg";
import {ReactComponent as SettingIcon } from "../../assets/images/settingIcon.svg";
import { ReactComponent as ExitIcon} from "../../assets/images/exit.svg";
import Logo from "../../assets/images/Logo.svg";


const Navbar = (props) => {

  return  <div className={s.navContainer}>
    <nav className={s.nav}>
      <div className={s.logo}><img src={Logo} alt="Logo"/></div>
      <div className={s.item}>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
        <ProfileIcon className={s.icon} /> My profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
        <ChatsIcon className={s.icon}/> Chats
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
        <UsersIcon className={s.icon}/> Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
        <SettingIcon className={s.icon}/> Settings
        </NavLink>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth && (
          <button className={s.button} onClick={props.logout}>
            <ExitIcon className={s.exitIcon}/> 
            <span className={s.buttonText}>Log out</span></button>
        )}
      </div>
    </nav>
  </div>;
}

export default Navbar;