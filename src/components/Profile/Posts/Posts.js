import React from 'react';
import s from "./Posts.module.css"
import Post from "./Post/Post";
const Posts = () => {
    return (
        <div>
          <Post likeCount='10'/>
          <Post likeCount='13'/>
          <Post likeCount='15'/>
        </div>
    )
};
export default Posts;