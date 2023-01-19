import React from "react";
import s from "./Post.module.css"

const Post = () => {
  return (
    <div>
      {" "}
      <div className={s.item}>
        <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt=""  />
        post 1</div>
    </div>
  );
};

export default Post;
