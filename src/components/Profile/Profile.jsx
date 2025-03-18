import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MypostContainer";

const Profile = (props) => {
  return <div className={s.profileContainer}>

  <ProfileInfo profile={props.profile}/> 
  <MyPostsContainer profile={props.profile}/>
  </div> 
}

export default Profile;