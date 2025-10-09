import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const revenueData = [
  { segment: "High Value", revenue: 16709000, avgOrderValue: 16709000, orderFrequency: 10, customer: 100, lifetimeValue: 97320 },
  { segment: "At Risk", revenue: 6345000, avgOrderValue: 6345000, orderFrequency: 8, customer: 79, lifetimeValue: 45000 },
  { segment: "New", revenue: 9597320, avgOrderValue: 9597320, orderFrequency: 5, customer: 50, lifetimeValue: 6000597 },
  { segment: "Low Value", revenue: 6000597, avgOrderValue: 6000597, orderFrequency: 7, customer: 80, lifetimeValue: 550000 },
  { segment: "Potential", revenue: 4500000, avgOrderValue: 4500000, orderFrequency: 6, customer: 63, lifetimeValue: 950000 },
];

// All columns for dropdown
const allColumns = [
  { label: "Segment", key: "segment" },
  { label: "Revenue", key: "revenue" },
  { label: "Avg. Order Value", key: "avgOrderValue" },
  { label: "Order Frequency", key: "orderFrequency" },
  { label: "Customer", key: "customer" },
  { label: "Lifetime Value", key: "lifetimeValue" },
];

const RevenueShare = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState(allColumns.map(() => true)); // all true initially
  const dropdownRef = useRef(null);

  const toggleCheckbox = (index) => {
    const newBoxes = [...checkboxes];
    newBoxes[index] = !newBoxes[index];
    setCheckboxes(newBoxes);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Fixed visible columns logic
  const visibleColumns = allColumns.filter((_, index) => checkboxes[index]);

  return (
    <div className="montserrat-fontsfamily">
      {/* Header */}
      <div className="flex justify-between items-center mt-12 mb-6">
        <h1 className="text-[22px] text-[#1D3557] font-[700]">Revenue Share</h1>

        {/* Manage Row Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center shadow-md gap-2 border-1 border-[#DBE0E5] bg-[#FFFFFF] text-[14px] text-[#121417] px-5 py-3 rounded-[8px]"
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
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px] font-[600]"
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

      {/* Table */}
      {visibleColumns.length === 0 ? (
        <div className="text-center py-10 text-[#757575] text-[15px] font-medium border border-[#E5E8EB] rounded-[12px] bg-white mb-8">
          ⚠ No columns selected. Please enable at least one column from
          <span className="font-semibold text-[#1D3557]"> Manage Row</span>.
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white text-left">
                {allColumns.map((col, index) =>
                  checkboxes[index] && (
                    <th
                      key={col.key}
                      className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[14px] font-[600]"
                    >
                      {col.label}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {revenueData.map((row) => (
                <tr key={row.segment} className="hover:bg-gray-50">
                  {allColumns.map((col, index) =>
                    checkboxes[index] && (
                      <td
                        key={col.key}
                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[14px] font-[500] ${
                          col.key === "segment" ? "text-[#121417]" : "text-[#757575]"
                        }`}
                      >
                        {col.key === "revenue" ||
                        col.key === "avgOrderValue" ||
                        col.key === "lifetimeValue"
                          ? `৳${row[col.key].toLocaleString()}`
                          : row[col.key]}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RevenueShare;
