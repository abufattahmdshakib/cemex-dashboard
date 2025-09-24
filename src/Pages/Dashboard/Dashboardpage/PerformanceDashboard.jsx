import React from "react";
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";




const sectionOneData = [
    { id: 1, title: "Average Processing Time", value: "3.4 hours", change: "+10%" },
    { id: 2, title: "Average Delivery Time", value: "1.2 days", change: "+10%" },
    { id: 3, title: "Avg. Customer Satisfaction", value: "4.8", change: "+10%" },
];

const orderForecastData = [
    { year: "2019", value: 1500 },
    { year: "2020", value: 1000 },
    { year: "2021", value: 1700 },
    { year: "2022", value: 1000 },
    { year: "2023", value: 1600 },
    { year: "2024", value: 800 },
];

const orderFrequencyData = [
    { range: "1-10", value: 500 },
    { range: "11-20", value: 800 },
    { range: "21-30", value: 1200 },
    { range: "31-40", value: 600 },
    { range: "40+", value: 300 },
];

// Custom Tick for Montserrat font
const CustomTick = ({ x, y, payload }) => {
    return (
        <text
            x={x}
            y={y + 10}
            textAnchor="middle"
            fill="#757575"
            fontSize={12}
            fontFamily="montserrat-fontsfamily"
        >
            {payload.value}
        </text>
    );
};

// Custom Bar Shape
const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;
    if (height <= 0) return null;
    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill={fill} />
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

const PerformanceDashboard = () => {
    return (
        <div className="montserrat-fontsfamily">
            {/* Section One */}
            <div className="grid grid-cols-3 gap-6 my-8">
                {sectionOneData.map((card) => (
                    <div
                        key={card.id}
                        className="p-6 rounded-lg shadow-md border border-[#DBE0E5] flex flex-col justify-between"
                    >
                        <h3 className="text-[#121417] font-[500] text-[16px]">{card.title}</h3>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-[24px] font-[700] text-[#1D3557]">{card.value}</p>
                            <p className="bg-[#EAFAF1] rounded-full text-[#2ECC71] text-[16px] py-1 px-3">
                                {card.change}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section Two: Charts */}
            <div className="flex justify-between gap-4 my-8">
                {/* Chart One */}
                <div className="w-full bg-white shadow-md rounded-[12px] p-4 border-1 border-[#DBE0E5]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="montserrat-fontsfamily text-[16px] font-[700] text-[#121417]">
                            Order Forecast
                        </h3>
                        <p className="bg-[#FDEDEB] rounded-full text-[#E74C3C] text-[16px] py-1 px-3">
                            -2.56%
                        </p>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                            data={orderForecastData}
                            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                        >
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6A0DAD" stopOpacity={0.2} />
                                    <stop offset="100%" stopColor="#F0F2F5" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            {/* X Axis with custom tick style */}
                            <XAxis
                                dataKey="year"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#757575", fontSize: 12 }}
                            />

                            <YAxis hide />
                            {/* Tooltip add  */}
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

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#6A0DAD"
                                strokeWidth={2}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                {/* Chart two */}
                <div className="w-full mx-auto bg-white shadow-md rounded-[12px] border p-5 border-[#DBE0E5] ">
                    <h3 className="montserrat-fontsfamily  text-[16px] font-[700] text-[#121417] mb-6">
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
        </div>
    );
};

export default PerformanceDashboard;
