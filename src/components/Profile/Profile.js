import React from 'react';
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={s.main}>
            <div className={s.wideImage}>
                <img
                    src="https://superultrawidewallpaper.com/wp-content/uploads/2019/07/sand-storm-3840x1080-1200x338.jpg"
                    alt=""/>
            </div>
            <div className={s.photo}>
                <img
                    src="https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"
                    alt=""/>
                <div className={s.description}>Name: Ruslan</div>
            </div>
            <div>my post</div>
            <div className={s.newPost}>
                <textarea> New</textarea>
                <button>Add</button>
            </div>
            <Posts/>
        </div>
    )
};
export default Profile;