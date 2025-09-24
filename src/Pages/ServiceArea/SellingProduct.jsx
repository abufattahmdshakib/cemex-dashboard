import React, { useState } from "react";

const SellingProduct = () => {
    const [hovered, setHovered] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const data = [
        { name: "Cemex Builder A1", value: 20000000, color: "#E8DEEE" },
        { name: "Cemex Classic C1", value: 8000000, color: "#E8DEEE" },
        { name: "Cemex Supreme S1", value: 15000000, color: "#E8DEEE" },
    ];

    const maxValue = 20000000;
    const ticks = [10000, 50000, 500000, 1000000, 10000000, 20000000];

    const formatValue = (value) => {
        if (value >= 1000000) {
            return `৳${(value / 1000000).toFixed(0)},000,000`;
        } else if (value >= 1000) {
            return `৳${(value / 1000).toFixed(0)},000`;
        } else {
            return `৳${value}`;
        }
    };

    const CustomTooltip = ({ name, value }) => (
        <div
            style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                padding: "8px 16px",
                fontWeight: 600,
                color: "#6A0DAD",
                fontSize: "16px",
                whiteSpace: "nowrap",
            }}
        >
            <div style={{ color: "#333", fontWeight: 500 }}>{name}</div>
            <div style={{ color: "#6A0DAD", fontWeight: 600 }}>
                value:{value}
            </div>
        </div>
    );

    return (
        <div className="w-full p-5 bg-white border shadow-md border-[#DBE0E5] rounded-[12px]">
            <h1 className="text-[16px] text-[#121417] text-left font-[700] mb-8">
                Highest Selling Product
            </h1>

            <div className="space-y-6">
                {data.map((item, index) => {
                    const barWidthPercent = (item.value / maxValue) * 100;
                    return (
                        <div key={index} className="flex items-center space-x-4 relative">
                            {/* Left label */}
                            <div className="w-40 text-[12px] text-[#757575] font-[500] pl-6">
                                {item.name}
                            </div>

                            {/* Right bar */}
                            <div className="flex-1 relative">
                                <div className="w-full h-9"></div>

                                {/* Filled bar */}
                                <div
                                    className="absolute top-0 left-0 h-8 transition-all duration-500 ease-out cursor-pointer"
                                    style={{
                                        width: `${barWidthPercent}%`,
                                        backgroundColor: item.color,
                                    }}
                                    onMouseEnter={(e) => {
                                        setHovered(index);
                                        setTooltipPos({ x: e.clientX, y: e.clientY });
                                    }}
                                    onMouseMove={(e) => {
                                        setTooltipPos({ x: e.clientX, y: e.clientY });
                                    }}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    {/* Tooltip */}
                                    {hovered === index && (
                                        <div
                                            style={{
                                                position: "fixed",
                                                top: tooltipPos.y - 20 + "px",
                                                left: tooltipPos.x + 30 + "px",
                                                zIndex: 1000,
                                            }}
                                        >
                                            <CustomTooltip name={item.name} value={item.value} />
                                        </div>
                                    )}
                                </div>

                                {/* End marker */}
                                <div
                                    className="absolute top-0 w-[2px] h-8 bg-[#6A0DAD]"
                                    style={{ left: `${barWidthPercent}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* X-axis labels */}
            <div className="relative mt-6 h-6">
                <div className="absolute inset-0 flex justify-between left-44 text-[12px] text-[#757575] font-[600]">
                    {ticks.map((tick, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-center">{formatValue(tick)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SellingProduct;
