import React from 'react';
import "./totalCanceled.css";
//icon
import { TbDevicesCancel } from "react-icons/tb";
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
const TotalCanceled = () => {
    return(
        <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <span><TbDevicesCancel size={30}/><b>Total Delivered</b> </span>
                <span style={spanSize}><FaArrowTrendUp size={15}/> 15% compared with last day</span>
                <h1>200 <span style={smallerStyle}>orders</span>
                    <Link to="/">
                        <div className="arrow">
                            <IoArrowForwardCircleOutline />
                        </div>
                    </Link>
                    </h1>
            </div>
        </div>
    </div>
    )
};
export default TotalCanceled;