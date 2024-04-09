import React from 'react';
import "./pieChartBox.css";
import { ResponsiveContainer, Pie, PieChart } from 'recharts';

const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    }
  ];

const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <h1>Amolie</h1>
            <div className="chart">
              <ResponsiveContainer width="99%" height={300}>
                <PieChart width={730} height={250}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
              </ResponsiveContainer>
            </div>
        </div>
    )
}
export default PieChartBox;    