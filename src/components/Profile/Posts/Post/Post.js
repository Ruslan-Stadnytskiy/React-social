import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div  className={s.item}>
            <div>post-1</div>
            <span>Like  { props.likeCount }</span>

        </div>
    )
};
export default Post;