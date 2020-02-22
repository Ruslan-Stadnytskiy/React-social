import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
const Dialogs = (props) =>{
    return(
        <div className={s.main}>
            <div className={s.dialogItem}>
                <div className={s.item}>
                    <NavLink to="/">Masha</NavLink>
                </div>
                <div className={s.item}>
                     <NavLink to="/">Roman</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/">Dasha</NavLink>
                </div>
                <div className={s.item}>
                <NavLink to="/">Arsen</NavLink>
            </div>
                 <div className={s.item}>
                  <NavLink to="/">Giorno</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>hi bro!</div>
                <div className={s.messageItem}>Whats wrong man??? </div>
                <div className={s.messageItem}>how are u?</div>
                <div className={s.messageItem}>whats up? </div>
                <div className={s.messageItem}>sound good!</div>
            </div>
        </div>
    )
};
export default Dialogs;