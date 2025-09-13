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
  { range: "Small Customers", value: 20000000 },
  { range: "Big Retailers", value: 6000000 },
  { range: "Logistics", value: 15000000 },
  { range: "Medium Retailers", value: 10000000 },
  { range: "Other", value: 5000000 },
];

// Custom YAxis Tick
const CustomTick = ({ x, y, payload }) => (
  <text
    x={0}
    y={y + 5}
    textAnchor="start"
    fill="#121417"
    fontSize={12}
    fontFamily="Montserrat"
  >
    {payload.value}
  </text>
);

// Custom XAxis Tick with currency formatting
const CustomXTick = ({ x, y, payload }) => {
  const labels = {
    10000: "৳10,000",
    50000: "৳50,000",
    500000: "৳500,000",
    1000000: "৳1,000,000",
    10000000: "৳10,000,000",
    20000000: "৳20,000,000",
  };

  // Force string labels for all defined ticks
  const text = labels[payload.value] || payload.value;

  return (
    <text
      x={x}
      y={y + 15}
      textAnchor="middle"
      fill="#757575"
      fontSize={12}
      fontWeight={600}
      fontFamily="Montserrat"
    >
      {text}
    </text>
  );
};

const ProfitMargin = () => {
  const [selectedCity, setSelectedCity] = useState("All");

  // Explicitly define all 6 ticks
  const xTicks = [10000, 50000, 500000, 1000000, 10000000, 20000000];

  return (
    <div className="montserrat-fontsfamily border p-5 border-[#DBE0E5] shadow-sm rounded-[12px]">
      {/* Header */}
      <h1 className="text-[22px] text-[#1D3557] text-left font-[700] mt-5">
        Orders by Customer Segment with Revenue
      </h1>

      {/* City buttons */}
      <div className="flex justify-around gap-2 py-7 border-y border-[#DBE0E5] mt-5">
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
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={orderFrequencyData}
            layout="vertical"
            margin={{ top: 20, right: 40, left: 10, bottom: 20 }}
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

            {/* XAxis – show all 6 ticks */}
            <XAxis
              type="number"
              domain={[0, 20000000]} // start from 0 to avoid skipping first tick
              ticks={xTicks}
              tick={<CustomXTick />}
              axisLine={false}
              tickLine={false}
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
              formatter={(value) => [`৳${value.toLocaleString()}`, "Revenue"]}
            />

            {/* Custom Bar */}
            <Bar
              dataKey="value"
              fill="#E8DEEE"
              barSize={25}
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
