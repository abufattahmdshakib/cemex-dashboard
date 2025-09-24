import React, { useRef, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import dayPicker from "../../../src/assets/Day Picker.svg";


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

const SellingProduct = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [openCalendar, setOpenCalendar] = useState(false);
  const calendarRef = useRef(null);

  const data = [
    { name: 'Cemex Builder A1', value: 20000000, color: '#E8DEEE' },
    { name: 'Cemex Classic C1', value: 8000000, color: '#E8DEEE' },
    { name: 'Cemex Supreme S1', value: 15000000, color: '#E8DEEE' },
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



  return (
    <div className="montserrat-fontsfamily border p-5 border-[#DBE0E5] shadow-sm rounded-[12px]">
      <div className="flex justify-between items-center">
        {/* Header */}
        <h1 className="text-[16px] text-[#121417] text-left font-[700]">
          Highest Selling Product
        </h1>
        {/* Calendar Dropdown */}
        <div data-flash className="relative" ref={calendarRef}>
          <button
            onClick={() => setOpenCalendar(!openCalendar)}
            className="montserrat-fontsfamily border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500]"
          >
            Nov 25, 2023 - Oct 31, 2024{" "}
            <span className="text-[#757575] text-[20px]">
              <MdOutlineDateRange />
            </span>
          </button>

          {openCalendar && (
            <div className="absolute right-5 mt-8 shadow-xl rounded-2xl z-50">
              <div className="w-[650px] max-w-full h-[300px]">
                <img
                  src={dayPicker}
                  alt="Day Picker"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

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

      {/* chart */}
      <div className="w-full mt-8 bg-white">
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Left side label */}
              <div className="w-40 text-[12px] text-[#757575] font-[500] pl-6">
                {item.name}
              </div>

              {/* Right side bar */}
              <div className="flex-1 relative">
                {/* Background track */}
                <div className="w-full h-9"></div>

                {/* Filled bar */}
                <div
                  className="absolute top-0 left-0 h-8 transition-all duration-500 ease-out"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.color,
                  }}
                ></div>

                {/* End marker */}
                <div
                  className="absolute top-0 w-[2px] h-8 bg-[#6A0DAD] "
                  style={{ left: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
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


