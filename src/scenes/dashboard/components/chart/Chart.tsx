import React from 'react';
import "./chart.css";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
const rangeData = [
    {
      name: "Sun",
      sold: 1000,
    },
    {
      name: "Mon",
      sold: 500,
    },
    {
      name: "Tue",
      sold: 3000,
    },
    {
      name: "Wed",
      sold: 700,
    },
    {
      name: "Thu",
      sold: 1890,
    },
    {
      name: "Fri",
      sold: 2390,
    },
    {
      name: "Sat",
      sold: 3490,
    },
  ];


const Chart = () => {
    return (
        <div className="bigChartBox">
            <h1>Item sold</h1>
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                    data={rangeData}
                    margin={{
                        top: 10, right: 30, bottom: 0, left: 0,
                    }}
                    >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                        type="monotone"
                        dataKey="sold" 
                        stroke="#8884d8" fill="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
            
        </div>
    );
};
export default Chart;