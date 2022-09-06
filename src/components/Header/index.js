import React from "react";

import './style.css';
import logo from '../../media/logo.png';
import search from '../../media/search.svg';
import earth from '../../media/earth.svg';


const Header = () => {

    return (
        <div className="header">
            <div className="header_container">
                <div className="header__inner">
                    <img src={logo} className="logo" />
                    <div className="navbar">
                        <ul>
                            <li>
                                <a href="/">home</a>
                            </li>
                            <li>
                                <a href="/movie">movie</a>
                            </li>
                            <li>
                                <a href="/tvShow">tv show</a>
                            </li>
                            <li>
                                <a href="/pricing">pricing</a>
                            </li>
                            <li>
                                <a href="/blog">blog</a>
                            </li>
                            <li>
                                <a href="/contacts">contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="search language auth">
                        <img src={search}/>   
                        <span className="search_before">|</span>      
                        <img src={earth}/>   

                        <div className="signInBox">
                            <a className="signInText">
                                sign in
                            </a>
                        </div>
                    </div>
                </div>  
            </div>    
        </div>
    )
}

export default Header