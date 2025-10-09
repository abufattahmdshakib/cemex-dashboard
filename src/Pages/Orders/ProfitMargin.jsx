import React, { useState } from "react";


const cities = [
  "All", "Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna"
];


const dataByCity = {
  All: [
    { name: 'Small Customers', value: 19800000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 8200000, color: '#E8DEEE' },
    { name: 'Logistics', value: 1530000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 14800000, color: '#E8DEEE' },
    { name: 'Other', value: 14500000, color: '#E8DEEE' },
  ],
  Dhaka: [
    { name: 'Small Customers', value: 18800000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 8500000, color: '#E8DEEE' },
    { name: 'Logistics', value: 1400000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 15000000, color: '#E8DEEE' },
    { name: 'Other', value: 12500000, color: '#E8DEEE' },
  ],
  Sylhet: [
    { name: 'Small Customers', value: 15200000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 5400000, color: '#E8DEEE' },
    { name: 'Logistics', value: 13500000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 1200000, color: '#E8DEEE' },
    { name: 'Other', value: 11700000, color: '#E8DEEE' },
  ],
  Chattogram: [
    { name: 'Small Customers', value: 17200000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 8800000, color: '#E8DEEE' },
    { name: 'Logistics', value: 11800000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 12500000, color: '#E8DEEE' },
    { name: 'Other', value: 1080000, color: '#E8DEEE' },
  ],
  Barisal: [
    { name: 'Small Customers', value: 16500000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 8000000, color: '#E8DEEE' },
    { name: 'Logistics', value: 1130000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 10100000, color: '#E8DEEE' },
    { name: 'Other', value: 9500000, color: '#E8DEEE' },
  ],
  Mymensingh: [
    { name: 'Small Customers', value: 1440000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 6300000, color: '#E8DEEE' },
    { name: 'Logistics', value: 10500000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 9400000, color: '#E8DEEE' },
    { name: 'Other', value: 8800000, color: '#E8DEEE' },
  ],
  Rajshahi: [
    { name: 'Small Customers', value: 13500000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 4900000, color: '#E8DEEE' },
    { name: 'Logistics', value: 9500000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 8400000, color: '#E8DEEE' },
    { name: 'Other', value: 7700000, color: '#E8DEEE' },
  ],
  Rangpur: [
    { name: 'Small Customers', value: 12200000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 4500000, color: '#E8DEEE' },
    { name: 'Logistics', value: 11000000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 7400000, color: '#E8DEEE' },
    { name: 'Other', value: 6800000, color: '#E8DEEE' },
  ],
  Khulna: [
    { name: 'Small Customers', value: 11000000, color: '#E8DEEE' },
    { name: 'Big Retailers', value: 3400000, color: '#E8DEEE' },
    { name: 'Logistics', value: 7200000, color: '#E8DEEE' },
    { name: 'Medium Retailers', value: 6300000, color: '#E8DEEE' },
    { name: 'Other', value: 5600000, color: '#E8DEEE' },
  ],
};

const ProfitMargin = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [hovered, setHovered] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const data = dataByCity[selectedCity] || dataByCity["All"];
  const maxValue = 20000000;
  const ticks = [10000, 50000, 500000, 1000000, 10000000, 20000000];

  const formatValue = (value) => {
    if (value >= 1000000) return `৳${(value / 1000000).toFixed(0)},000,000`;
    if (value >= 1000) return `৳${(value / 1000).toFixed(0)},000`;
    return `৳${value}`;
  };

  const CustomTooltip = ({ name, value }) => (
    <div
      style={{
        backgroundColor: "white",
        border: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        padding: "8px 12px",
        fontWeight: 600,
        color: "#6A0DAD",
        fontSize: "16px",
        whiteSpace: "nowrap"
      }}
    >
      <div style={{ color: "#333", fontWeight: 500 }}>{name}</div>
      <div style={{ color: "#6A0DAD", fontWeight: 600 }}>
        value:{value}
      </div>
    </div>
  );

  return (
    <div className="montserrat-fontsfamily border p-5 border-[#DBE0E5] shadow-sm rounded-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[16px] text-[#121417] text-left font-[700]">
          Orders by Customer Segment with Revenue
        </h1>
      </div>

      {/* City Buttons */}
      <div className="flex justify-start gap-2 py-7 border-y border-[#DBE0E5] mt-5 ">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded text-[12px] font-[500] cursor-pointer ${selectedCity === city
              ? "bg-[#1D3557] text-white border-[#1D3557]"
              : "bg-[#F0F2F5] text-[#121417] border-[#F0F2F5]"
              }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full mt-8 bg-white">
        <div className="space-y-2">
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
                      backgroundColor: item.color
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
                    {hovered === index && (
                      <div
                        style={{
                          position: "fixed",
                          top: tooltipPos.y - 30 + "px",
                          left: tooltipPos.x + 20 + "px",
                          zIndex: 1000
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
    </div>
  );
};

export default ProfitMargin;
