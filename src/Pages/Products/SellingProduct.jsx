import React, { useRef, useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
// import DayPicker from "../../../src/Components/DayPicker/DayPicker";
import DayPicker from "../../../src/Components/DayPicker/DayPicker";



const cities = [
  "All", "Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna"
];


const dataByCity = {
  All: [
    { name: 'Cemex Builder A1', value: 20000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 8000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 15000000, color: '#E8DEEE' },
  ],
  Dhaka: [
    { name: 'Cemex Builder A1', value: 18000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 7000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 14000000, color: '#E8DEEE' },
  ],
  Sylhet: [
    { name: 'Cemex Builder A1', value: 15000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 5000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 13000000, color: '#E8DEEE' },
  ],
  Chattogram: [
    { name: 'Cemex Builder A1', value: 17000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 9000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 12000000, color: '#E8DEEE' },
  ],
  Barisal: [
    { name: 'Cemex Builder A1', value: 16000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 8000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 11000000, color: '#E8DEEE' },
  ],
  Mymensingh: [
    { name: 'Cemex Builder A1', value: 14000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 6000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 10000000, color: '#E8DEEE' },
  ],
  Rajshahi: [
    { name: 'Cemex Builder A1', value: 13000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 5000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 9000000, color: '#E8DEEE' },
  ],
  Rangpur: [
    { name: 'Cemex Builder A1', value: 12000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 4000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 8000000, color: '#E8DEEE' },
  ],
  Khulna: [
    { name: 'Cemex Builder A1', value: 11000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 3000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 7000000, color: '#E8DEEE' },
  ],
};

const SellingProduct = () => {
  // dayPicker
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([]);
  const calendarRef = useRef(null);
  // dayPicker



  const [selectedCity, setSelectedCity] = useState("All");
  const [hovered, setHovered] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });


  // dayPicker
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getDisplayDate = () => {
    if (dateRange.length === 2) {
      return `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`;
    } else if (dateRange.length === 1) {
      return formatDate(dateRange[0]);
    } else {
      return "Select Date Range";
    }
  };

  // dayPicker



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
          Highest Selling Product
        </h1>

        <div className="relative" ref={calendarRef}>
          <button
            onClick={() => setOpenCalendar(!openCalendar)}
            className="montserrat-fontsfamily border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500] cursor-pointer"
          >
            {getDisplayDate()}{" "}
            <span className="text-[#757575] text-[20px]">
              <MdOutlineDateRange />
            </span>
          </button>

          {openCalendar && (
            <div className="absolute right-0 mt-2 shadow-2xl border-[#DBE0E5] border-[1px] bg-white rounded-2xl z-40">
              <div className="w-[700px] max-w-full h-[350px] p-4">
                <DayPicker dateRange={dateRange} setDateRange={setDateRange} />
              </div>
            </div>
          )}
        </div>
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

export default SellingProduct;
