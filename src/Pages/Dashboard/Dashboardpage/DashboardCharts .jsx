// src/components/DashboardCharts.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const chartOneData = [
  { name: "Small Customers", value: 4000 },
  { name: "Big Retailers", value: 3000 },
  { name: "Logistics", value: 2000 },
  { name: "Medium Retailers", value: 2780 },
  { name: "Other", value: 1890 },
];

const chartTwoData = [
  { name: "৳1-10,000", value: 2400 },
  { name: "৳10,000-50,000", value: 1398 },
  { name: "৳50,000-100,000", value: 9800 },
  { name: "৳100,000+", value: 3908 },
];

// Custom tick to break text into multiple lines with Montserrat font
const CustomTick = ({ x, y, payload }) => {
  const words = payload.value.split(" ");
  return (
    <text
      x={x}
      y={y + 10}
      textAnchor="middle"
      fill="#757575"
      fontSize={12}
      fontFamily="montserrat-fontsfamily"
    >
      {words.map((word, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : 14}>
          {word}
        </tspan>
      ))}
    </text>
  );
};

// Custom Bar Shape with only top border (uniform)
const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  if (height <= 0) return null; // prevent negative or zero height bars
  return (
    <g>
      {/* Main Bar */}
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      {/* Top Border */}
      <line
        x1={x}
        y1={y + 1} // uniform top border
        x2={x + width}
        y2={y + 1}
        stroke="#6A0DAD"
        strokeWidth={2}
      />
    </g>
  );
};

const DashboardCharts = () => {
  return (
    <div className="flex justify-between gap-4">
      {/* Chart One */}
      <div className="w-full bg-white shadow-md rounded-[12px] p-4 border-1 border-[#DBE0E5]">
        <h2 className="montserrat-fontsfamily text-[16px] font-[700] text-[#121417] mb-4">
          Orders by Customer Segment
        </h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartOneData} margin={{ bottom: 5 }}>
            <XAxis
              dataKey="name"
              interval={0}
              height={40}
              tick={<CustomTick />}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="value"
              fill="#E8DEEE"
              barSize={50}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Two */}
      <div className="w-full bg-white shadow-md rounded-[12px] p-4 border-1 border-[#DBE0E5]">
        <h2 className="montserrat-fontsfamily text-[16px] font-[700] text-[#121417] mb-4">
          Orders revenue by size
        </h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartTwoData} margin={{ bottom: 5 }}>
            <XAxis
              dataKey="name"
              interval={0}
              height={40}
              tick={<CustomTick />}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="value"
              fill="#E8DEEE"
              barSize={50}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
