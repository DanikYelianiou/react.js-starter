import React from "react";

import "./style.css";


const BreadCrump = ({category, title}) => {

    return (
        <div className="breadcrump-bg">
            <div className="center-wrap">
                <h2 className="title">{title} <span>{category}</span></h2>
                <div className="breadcrumb-nav">
                    <a href="/">home</a><a> | {category}</a>
                </div>
            </div>
        </div>
    )
}

export default BreadCrump