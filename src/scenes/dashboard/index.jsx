import React from "react";
import "./index.css";
import Revenue from "../dashboard/components/revenue/Revenue";
import Extra from "../dashboard/components/extra/Extra";
import TotalDelivered from "../dashboard/components/totalDelivery/TotalDelivered";
import TotalCanceled from "../dashboard/components/totalCancel/TotalCanceled";
import Chart from "../dashboard/components/chart/Chart";
import PieChartBox from "../dashboard/components/pieCartBox/PieChartBox";
//icon
import { RxBorderWidth } from "react-icons/rx";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Dashboard = () =>{
  return (
    <div className="home">
      <div className="box box1">
        <Chart />
      </div>
      <div className="box box2">
        <PieChartBox />
      </div>
      <div className="box box3">
        <Revenue/>
      </div>
      <div className="box box3">
        <Extra icon1={
        <RxBorderWidth size={30}/>}
        title={"Total Orders"}
        icon2={<FaArrowTrendDown size={15}/>}
        compare={"-1.4% compared with last day"}
        value={"90"}
        smaller={"orders"}
        icon3={<IoArrowForwardCircleOutline color="#000000"/>}
        />
      </div>
      <div className="box box3">
        <TotalDelivered/>
      </div>
      <div className="box box3">
        <TotalCanceled/>
    </div> 
  </div>
  );  
};

export default Dashboard;