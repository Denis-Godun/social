import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU"
          alt=""
        />
      </div>
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/800px-Circle-icons-image.svg.png"
          alt="ava"
        />{" "}
        description
      </div>
      <div className="">
        my posts
        <div className="">new post</div>
      </div>
      <div className="">
        <div className={s.item}>post 1</div>
        <div className="">post 2</div>
        <div className="">post 3</div>
      </div>
    </div>
  );
};

export default Profile;
