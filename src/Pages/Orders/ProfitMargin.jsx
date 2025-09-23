import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// List of cities
const cities = [
  "All",
  "Dhaka",
  "Sylhet",
  "Chattogram",
  "Barisal",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Khulna",
];

// Chart data
const orderFrequencyData = [
  { range: "Small Customers", value: 10000 },
  { range: "Big Retailers", value: 50000 },
  { range: "Logistics", value: 500000 },
  { range: "Medium Retailers", value: 1000000 },
  { range: "Other", value: 10000000 },
  { value: 20000000 },
];

// Custom YAxis Tick
const CustomTick = ({ x, y, payload }) => (
  <text
    x={x -130}
    y={y}
    textAnchor="start"
    fill="#121417"
    fontSize={12}
    fontFamily="Montserrat"
  >
    {payload.value}
  </text>
);

// Custom XAxis Tick – horizontal (no rotation)
const CustomXTick = ({ x, y, payload }) => {
  const formatCurrency = (num) =>
    "৳" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <text
      x={x -15}
      y={y}
      textAnchor="end"
      fill="#757575"
      fontSize={12}
      fontWeight={600}
      fontFamily="Montserrat"
    >
      {formatCurrency(payload.value)}
    </text>
  );
};

const ProfitMargin = () => {
  const [selectedCity, setSelectedCity] = useState("All");

  // Define manual ticks (no auto)
  const xTicks = [10000, 50000, 500000, 1000000, 10000000, 20000000];

  return (
    <div className="montserrat-fontsfamily border p-5 border-[#DBE0E5] shadow-md  rounded-[12px]">
      {/* Header */}
      <h1 className="text-[22px] text-[#1D3557] text-left font-[700] mt-5">
        Orders by Customer Segment with Revenue
      </h1>

      {/* City buttons */}
      <div className="flex justify-start gap-5 py-7 border-y border-[#DBE0E5] mt-5">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded text-[12px] font-[500] ${selectedCity === city
              ? "bg-[#1D3557] text-white border-[#1D3557]"
              : "bg-[#F0F2F5] text-[#121417] border-[#F0F2F5]"
              }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full mx-auto bg-white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={orderFrequencyData}
            layout="vertical"
            margin={{ top: 20}}
          >
            {/* YAxis */}
            <YAxis
              dataKey="range"
              type="category"
              tick={<CustomTick />}
              axisLine={false}
              tickLine={false}
              width={150}
            />

            {/* XAxis – FULL manual control */}
            <XAxis
              type="category"
              ticks={xTicks}
              tick={<CustomXTick />}
              axisLine={false}
              tickLine={false}
              interval={0}
              allowDecimals={false}
              tickMargin={20}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #DBE0E5",
                borderRadius: "2px",
              }}
              labelStyle={{ color: "#121417", fontWeight: 600 }}
              itemStyle={{ color: "#6A0DAD", fontWeight: 500 }}
              formatter={(value) => [`৳${value.toLocaleString()}`, "value"]}
            />

            {/* Custom Bar */}
            <Bar
              dataKey="value"
              fill="#E8DEEE"
              barSize={30}
              minPointSize={5}
              shape={(props) => {
                const { fill, x, y, width, height } = props;
                if (height <= 0) return null;
                return (
                  <g>
                    <rect x={x} y={y} width={width} height={height} fill={fill} />
                    <line
                      x1={x + width}
                      y1={y}
                      x2={x + width}
                      y2={y + height}
                      stroke="#6A0DAD"
                      strokeWidth={2}
                    />
                  </g>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitMargin;
