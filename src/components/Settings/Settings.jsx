import React from "react";
import s from "./Settings.module.css";
import { ReactComponent as Icon } from "../../assets/images/inDevelopment.svg";

const Settings = (props) => {


  return (
    <div className={s.settingsContainer}>
      <div className={s.settingsWrapper}>
        <h1 className={s.header + " " + s.mainText}>Settings</h1>
        <div className={s.frame}>
          <Icon className={s.icon} />
          <p className={s.mainText}>This page is in development</p>
          <p className={s.text}>I do my best, it will be updated soon :)</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
