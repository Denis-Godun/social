import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className="">
      my posts
      <div className="">new post</div>
      <Post likes = '15' message = 'Hi, how are you'/>
      <Post likes = '25' message = 'Hi, normalno' />
      
    </div>
  );
};

export default MyPosts;
