import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faNewspaper,faUser,faEnvelope,faMusic,faTools } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <ul>
                    <li className={s.item}>
                        <span className={s.icon}><FontAwesomeIcon icon={faUser} color='white' /></span>
                        <NavLink to="/profile" activeClassName='s.active'>Profile</NavLink></li>
                    <li className={s.item}>
                        <span className={s.icon}><FontAwesomeIcon icon={faEnvelope} color='white' /></span>
                        <NavLink to="/dialogs">Messages</NavLink></li>
                    <li className={s.item}>
      <span className={s.icon}><FontAwesomeIcon icon={faNewspaper} color='white' /></span>
                        <NavLink to="/news">News</NavLink></li>
                    <li className={s.item}>
                         <span className={s.icon}><FontAwesomeIcon icon={faMusic} color='white' /></span>
                        <NavLink to="/music">Music</NavLink></li>
                    <li className={s.item}>
                         <span className={s.icon}><FontAwesomeIcon icon={faTools} color='white' /></span>
                        <NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};
export default Navbar;