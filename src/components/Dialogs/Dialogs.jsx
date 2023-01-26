import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>Nastya</div>
        <div className={s.dialog}>Denis</div>
        <div className={s.dialog}>Anton</div>
        <div className={s.dialog}>Eugeny</div>
        <div className={s.dialog}>Yura</div>
        <div className={s.dialog}>Masha</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Chiao</div>
      </div>
    </div>
  );
};

export default Dialogs;
