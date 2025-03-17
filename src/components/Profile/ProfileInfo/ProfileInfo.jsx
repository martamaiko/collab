import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/components/Preloader/Preloader";
import userPhoto from "../../../assets/images/userIcon.svg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return <div>
    <div className={s.profileInfoContainer}>
      <div className={s.avatar}><img className={s.avatarIcon} src={props.profile.avatar_url || userPhoto}/></div>
      <p className={s.name}>{props.profile.username}</p>
      <p className={s.email}>{props.profile.email}</p>
    </div>
  </div> 
}

export default ProfileInfo;