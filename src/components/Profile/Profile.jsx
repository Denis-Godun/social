import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.profile_img}
          src="http://cameralabs.org/media/camera/may/23may2/33_4caaf6d27a395dc6b511eb570f701c60.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/55px-Circle-icons-image.svg.png"
          alt="ava"
        />{" "}
        description
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
