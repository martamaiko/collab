import React from "react";
import s from "./Post.module.css";
import userPhoto from "../../../../assets/images/userIcon.svg"
import { ReactComponent as LikeIcon } from "../../../../assets/images/heart-alt.svg";
import { ReactComponent as CommentIcon } from "../../../../assets/images/comment.svg";

const Post = (props) => {
  return <div className={s.postContainer}>
    <div className={s.item}>
      <div className={s.userdata}>
        <div className={s.avatar}><img className={s.avatarIcon} src={props.avatar_url || userPhoto}/></div>
        <div className={s.userdatatext}>
          <p className={s.name}>{props.profile?.username}</p>
          <p className={s.email}>{props.profile?.email}</p>
        </div>
      </div>
      <div className={s.message}>{ props.message }</div>
      <div className={s.reactions}>
        <div className={s.likes}><LikeIcon className={s.likeIcon} /><span>{ props.likesCount }</span></div>
        <div className={s.comments}><CommentIcon className={s.commentIcon} /><span>{ props.commentsCount }</span></div>
      </div>
    </div>
  </div>
}
export default Post;