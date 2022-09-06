import React from "react";

import EmailSection from '../EmailSection';
import './style.css';
import logo from '../../media/logo.png';


const Footer = () => {
    
    return (
        <>
            <EmailSection/>
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="footer-menu-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="foorer-logo">
                                    <a href="">
                                        <img src={logo} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="footer-menu">
                                    <nav>
                                        <ul className="navigation">
                                            <li>
                                                <a href="/">
                                                    HOME
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/movie">
                                                    MOVIE
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/tvShow">
                                                    TV SHOW
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/contacts">
                                                    CONTACTS
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/pricing">
                                                    PRICING
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-quick-link-wrap">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="quick-link-list">
                                    <ul>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Help Center</a>
                                        </li>
                                        <li>
                                            <a href="#">Therms of Use</a>
                                        </li>
                                        <li>
                                            <a href="#">privacy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                {/* <div className="footer-social">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer