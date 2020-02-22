import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);
let App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='innerWrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='Wrapper-content'>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
