import React from "react";

import "./style.css"


const EmailSection = () => {

    return (
        <div className="newsletter-background">
            <div className="container">
                <div className="newsletter-inner-wrap">
                    <div className="newslatter-content">
                        <h4>TRIAL START FIRST 30 DAYS.</h4>
                        <p>Enter your email to create or restart your membership.</p>
                    </div>

                    <div className="newslatter-content">
                        <form action="#" className="newslatter-form">
                            <input type="text" placeholder="Enter your email" />
                            <button className="btn">get started</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailSection