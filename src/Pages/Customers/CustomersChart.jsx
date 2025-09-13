import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const chartOneData = [
    { name: "৳10,000", value: 10000 },
    { name: "৳50,000", value: 50000 },
    { name: "৳100,000", value: 100000 },
    { name: "৳500,000", value: 500000 },
    { name: "৳500,000+", value: 500000 },
];

const orderFrequencyData = [
    { range: "1-10", value: 500 },
    { range: "11-20", value: 800 },
    { range: "21-30", value: 1200 },
    { range: "31-40", value: 600 },
    { range: "40+", value: 300 },
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
                y1={y + 1} 
                x2={x + width}
                y2={y + 1}
                stroke="#6A0DAD"
                strokeWidth={2}
            />
        </g>
    );
};
const CustomersChart = () => {
    return (
        <div className='flex justify-between gap-6 items-center'>
            {/* Chart One */}
            <div className="w-full bg-white shadow-md rounded-[12px] p-5 border-1 border-[#DBE0E5]">
                <h2 className="montserrat-fontsfamily text-[16px] font-[700] text-[#121417] mb-4">
                    Average Order Value
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
                        {/* Tooltip add korlam */}
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{
                                backgroundColor: "transparent",
                                border: "none",
                                boxShadow: "none",
                                background: "white"
                            }}
                            labelStyle={{ color: "#333", fontWeight: 500 }}
                            itemStyle={{ color: "#6A0DAD", fontWeight: 600 }}
                            formatter={(value) => [`value:${value}`]}
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
            {/* Chart two */}
            <div className="w-full mx-auto bg-white shadow-md rounded-[12px] border p-5 border-[#DBE0E5] ">
                <h3 className="montserrat-fontsfamily  text-[16px] font-[700] text-[#121417] mb-4">
                    Order Frequency (OF.)
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={orderFrequencyData} layout="vertical">
                        <YAxis
                            dataKey="range"
                            type="category"
                            tick={<CustomTick />}
                            axisLine={false}
                            tickLine={false}
                        />
                        <XAxis type="number" axisLine={false} tickLine={false} hide={true} />

                        {/* Tooltip add korlam */}
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{
                                backgroundColor: "transparent",
                                border: "none",
                                boxShadow: "none",
                                background: "white"
                            }}
                            labelStyle={{ color: "#333", fontWeight: 500 }}
                            itemStyle={{ color: "#6A0DAD", fontWeight: 600 }}
                            formatter={(value) => [`value:${value}`]}
                        />
                        <Bar
                            dataKey="value"
                            fill="#E8DEEE"
                            barSize={30}
                            minPointSize={1}
                            shape={(props) => {
                                const { fill, x, y, width, height } = props;
                                if (height <= 0) return null;
                                const leftPadding = 25;
                                return (
                                    <g>
                                        <rect
                                            x={x + leftPadding}
                                            y={y}
                                            width={width - leftPadding}
                                            height={height}
                                            fill={fill}
                                        />
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

export default CustomersChart;