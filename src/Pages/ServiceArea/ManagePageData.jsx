import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const allColumns = [
  { key: "businessPerformance", label: "Business Performance" },
  { key: "orderSegmentAnalysis", label: "Order Segment Analysis" },
  { key: "customerSegmentAnalysis", label: "Customer Segment Analysis" },
  { key: "orderForecast", label: "Order Forecast" },
  { key: "highestSellingProduct", label: "Highest Selling Product" },
  { key: "revenueShare", label: "Revenue Share" },
  { key: "profitMarginBySegment", label: "Profit Margin by Segment" },
  { key: "operationalEfficiencyMetrics", label: "Operational Efficiency Metrics" },
  { key: "customerList", label: "Customer List" },
  { key: "orderList", label: "Order List" },
  { key: "stockManagement", label: "Stock Management" },
  { key: "insights", label: "Insights" },
];

const ManagePageData = () => {
  // Set first 5 visible, rest false by default
  const [checkboxes, setCheckboxes] = useState([true, true, false, false, true, true, false, true, true, true, false, true]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleCheckbox = (index) => {
    const newBoxes = [...checkboxes];
    newBoxes[index] = !newBoxes[index];
    setCheckboxes(newBoxes);
  };

  // Flash animation indexes
  const flashIndexes = [6];
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    if (dropdownOpen) {
      setFlashing(true);
      const timer = setTimeout(() => setFlashing(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [dropdownOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative montserrat-fontsfamily" ref={dropdownRef}>
      <button
        data-flash
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 border border-[#DBE0E5] font-[500] bg-white text-[14px] text-[#121417] px-5 py-2 rounded-[8px]"
      >
        Manage Page Data
        <FaChevronDown
          className={`transition-transform duration-300 text-[#626262] ${dropdownOpen ? "rotate-180" : ""}`}
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10">
          {allColumns.map((col, index) => (
            <label
              key={col.key}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px] font-[600]"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checkboxes[index]}
                  onChange={() => toggleCheckbox(index)}
                  className={`checkbox-pulse ${flashing && flashIndexes.includes(index) ? "animate-flash" : ""}`}
                />
                {col.label}
              </span>
            </label>
          ))}
        </div>
      )}

      {/* Flash animation */}
      <style>
        {`
          @keyframes flash {
            0%, 100% { background-color: #dbe0e5; }
            50% { background-color: #f0f8ff; }
          }
          .animate-flash {
            animation: flash 1s ease-in-out 1;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default ManagePageData;
