import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";
import userPhoto from "../../../assets/images/userIcon.svg";
import postIcon from "../../../assets/images/postIcon.svg";

const MyPosts = (props) => {
  let state = props.profilePage;
  let postsElements = 
    state.posts.map (p => <Post message={p.message} likesCount={p.likes} commentsCount={p.comments} profile={state.profile}/>);
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={s.myPostsContainer}>
    <div className={s.inputWrapper}>
      <div className={s.avatar}><img className={s.avatarIcon} src={props.avatar_url || userPhoto}/></div>
      <textarea className={s.postInput} onChange={onPostChange} ref={newPostElement} placeholder={state.newPostText} autoFocus/>
      <button className={s.postButton} onClick={onAddPost}><img src={postIcon}/> <span className={s.buttonText}>Post</span></button>
    </div>
    <div>
     { postsElements }
    </div>
</div>
}

export default MyPosts;