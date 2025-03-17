import React from "react";
import s from "./Header.module.css";
import Logo from "../../assets/images/Logo.svg"

const Header = (props) => {
  if (props.isAuth) return null;
  
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img src={Logo} alt="Logo"/>
      </div>
    </header>
  );
};

export default Header;
