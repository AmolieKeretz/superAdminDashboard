import React from 'react';
import "./extra.css";
import { Link } from "react-router-dom";
let smallerStyle ={};
smallerStyle = {
    marginTop: "20px",
    fontSize: "0.8rem"
}
let spanSize = {};
spanSize = {
    fontSize: "0.8rem"
}
const Extra = ({icon1, icon2, icon3, title, compare, value, smaller}) => {
    return(
        <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <span>{icon1} {title}</span>
                <span style={spanSize}>{icon2} {compare}</span>
                <h1>{value}<span style={smallerStyle}>{smaller}</span>
                    <Link to="/">
                        <div className="arrow">
                            {icon3}
                        </div>
                    </Link>
                </h1>
            </div>
        </div>
    </div>
    ) 
};
export default Extra;