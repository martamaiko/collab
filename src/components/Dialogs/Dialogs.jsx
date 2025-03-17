import React from "react";
import s from "./Dialogs.module.css";
import userPhoto from "../../assets/images/userIcon.svg";
import postIcon from "../../assets/images/postIcon.svg"

const DialogItem = (props) => {
  
  return <div className={s.dialog}>
  <div className={s.link}>
    <div className={s.avatar}><img className={s.avatarIcon} src={props.avatar_url || userPhoto}/></div>
    <div className={s.dialogsItemText}>
      <span className={s.name}>{props.name}</span>
      <div className={s.messagePreview}><p>Message text will be here...</p></div>
    </div>
    </div>
  </div>
}
const Message = (props) => {
  
  return <p className={s.message}>{props.message}</p>
}
const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map (d => <DialogItem name={d.name} id={d.id} avatar_url={d.avatar_url}/>);
  let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message} />);
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }
  
  return <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <h1 className={s.headerChatsList}>All chats</h1>
        { dialogsElements }
    </div>
      <div>
        <div className={s.chatWindowContainer}>
          <div className={s.headerChat}>
            <div className={s.avatar}><img className={s.avatarIcon} src={props.avatar_url || userPhoto}/></div>
            <div className={s.headerChatText}>
              <p className={s.openUserName}>Sophia Martinez</p>
              <p className={s.openUserEmail}>sophia.martinez@mymail.com</p>
            </div>
          </div>
          <div className={s.messages}>{messagesElements}</div>
          <div className={s.inputWrapper}>
            <textarea placeholder="Write a message..." className={s.input} onChange={onMessageChange} ref={newMessageElement} value={state.newMessageText} autoFocus/>
            <button className={s.postButton} onClick={addMessage}><img src={postIcon}/> <span className={s.buttonText}>Send</span></button>
          </div>
        </div>
    </div>
</div>;
}

export default Dialogs;