import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message =(props)=>{
  return(
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem id="1" name="Nastya" />
        <DialogItem id="2" name="Denis" />
        <DialogItem id="3" name="Anton" />
        <DialogItem id="4" name="Eugeny" />
        <DialogItem id="5" name="Yura" />
        <DialogItem id="6" name="Masha" />
      </div>
      <div className={s.messages}>
        <Message message ="hi" />
        <Message message ="aloha" />
        <Message message ="hello" />
      </div>
    </div>
  );
};

export default Dialogs;
