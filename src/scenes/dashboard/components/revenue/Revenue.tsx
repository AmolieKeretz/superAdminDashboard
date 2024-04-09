import React from 'react';
import "./revenue.css";
//icon
import { FcMoneyTransfer } from "react-icons/fc";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

import { Link } from "react-router-dom";

let spanSize = {};
spanSize = {
    fontSize: "0.8rem"
}
const Revenue = () => {
    return(
        <div className="chartBox">
        <div className="boxInfo">
            <div className="title">
                <span><FcMoneyTransfer size={30} color="#000000"/> Today's Revenue</span>
                <span  style={spanSize}><FaArrowTrendUp size={15}/> 2.7% compared with last day</span>
                <h1>$100K 
                    <Link to="/">
                        <div className="arrow">
                            <IoArrowForwardCircleOutline color="#000000"/>
                        </div>
                    </Link>
                    </h1>
            </div>
        </div>
    </div>
    )
};
export default Revenue;
