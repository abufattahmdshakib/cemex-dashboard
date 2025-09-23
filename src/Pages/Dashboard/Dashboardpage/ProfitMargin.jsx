// src/components/ProfitMargin.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const profitData = [
  { segment: "Small Customers", revenue: 5000000, costs: 3050000, profit: 1950000, margin: 30, growth: "5%" },
  { segment: "Big Retailers", revenue: 15000000, costs: 10000000, profit: 5000000, margin: 33, growth: "7%" },
  { segment: "Logistics-Supported", revenue: 8000000, costs: 6000000, profit: 2000000, margin: 25, growth: "4%" },
  { segment: "Medium Retailers", revenue: 7000000, costs: 4500000, profit: 2500000, margin: 36, growth: "6%" },
  { segment: "Others", revenue: 3000000, costs: 2500000, profit: 500000, margin: 17, growth: "3%" },
];

const cities = [
  "All", "Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna",
];

// All columns for dropdown (6 columns)
const allColumns = [
  { label: "Customer Segment", key: "segment" },
  { label: "Revenue", key: "revenue" },
  { label: "Total Costs", key: "costs" },
  { label: "Profit", key: "profit" },
  { label: "Profit Margin", key: "margin" },
  { label: "Avg. Growth", key: "growth" },
];

// Columns to display in table (unchanged)
const tableColumns = allColumns.filter(col => col.key !== "growth");

const ProfitMargin = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // First 5 true, last one false
  const [checkboxes, setCheckboxes] = useState([true, true, true, true, true, false]);

  const dropdownRef = useRef(null);

  const toggleCheckbox = (index) => {
    const newBoxes = [...checkboxes];
    newBoxes[index] = !newBoxes[index];
    setCheckboxes(newBoxes);
  };

  // Close dropdown when clicking outside
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
    <div className="montserrat-fontsfamily">
      {/* Header */}
      <div className="flex justify-between items-center mt-12 mb-6">
        <h1 className="text-[22px] text-[#1D3557] font-[700]">Profit Margin by Segment</h1>

        {/* Manage Row Button with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            data-flash
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center shadow-md  gap-2 border-1 border-[#DBE0E5] bg-[#FFFFFF] text-[14px] text-[#121417] px-5 py-3 rounded-[8px]"
          >
            Manage Row ({checkboxes.filter(c => c).length})
            <FaChevronDown
              className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-62 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10">
              {allColumns.map((col, index) => (
                <label
                  key={col.key}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px]"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checkboxes[index]}
                      onChange={() => toggleCheckbox(index)}
                      className="checkbox-pulse"
                    />
                    {col.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* City Buttons */}
      <div className="flex justify-start gap-5 py-7 border-y-1 border-[#DBE0E5] my-10">
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

      {/* Table Card */}
      <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white text-left">
              {tableColumns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[14px] font-[600]"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {profitData.map((row) => (
              <tr key={row.segment} className="hover:bg-gray-50">
                {tableColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 border-b border-[#E5E8EB] text-[14px] font-[500] ${col.key === "segment"
                      ? "text-[#121417]"
                      : "text-[#757575]"
                      }`}
                  >
                    {col.key === "revenue" || col.key === "costs" || col.key === "profit"
                      ? `৳${row[col.key].toLocaleString()}`
                      : col.key === "margin"
                        ? `${row[col.key]}%`
                        : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfitMargin;
