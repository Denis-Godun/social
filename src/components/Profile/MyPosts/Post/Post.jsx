import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      {" "}
      <div className={s.item}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/55px-Circle-icons-image.svg.png"
          alt=""
        />
        {props.message}
        <p>like {props.likes}</p>
      </div>
    </div>
  );
};

export default Post;
