import React from 'react';
import "./totalDelivered.css";
//icon
import { FaFirstOrder } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

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
const TotalDelivered = () => {
    return(
        <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <span><FaFirstOrder size={30}/> Total Canceled</span>
                <span  style={spanSize}><FaArrowTrendUp size={15}/> 15% compared with last day</span>
                <h1>50 <span style={smallerStyle}>orders</span>
                    <Link to="/">
                        <div className="arrow">
                            <IoArrowForwardCircleOutline/>
                        </div>
                    </Link>
                    </h1>
            </div>
        </div>
    </div>
    )
};
export default TotalDelivered;