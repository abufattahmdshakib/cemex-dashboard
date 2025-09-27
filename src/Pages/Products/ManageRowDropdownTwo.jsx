import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const allColumns = [
  { key: "name", label: "Name" },
  { key: "totalStock", label: "Total Stock Capacity" },
  { key: "currentStock", label: "Current Stock" },
  { key: "availableSpace", label: "Available Space" },
  { key: "buyingPrice", label: "Buying Price" },
  { key: "expiredProduct", label: "Expired Product" },
  { key: "total", label: "Total" },
  { key: "order", label: "Order" },
];

const ManageRowDropdownTwo = ({ columnVisibility, setColumnVisibility }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleCheckbox = (key) => {
    setColumnVisibility({
      ...columnVisibility,
      [key]: !columnVisibility[key],
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative montserrat-fontsfamily" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center shadow-md gap-2 border border-[#DBE0E5] bg-white text-[14px] text-[#121417] px-5 py-3 rounded-[8px]"
      >
        Manage Row ({Object.values(columnVisibility).filter(Boolean).length})
        <FaChevronDown
          className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10">
          {allColumns.map((col) => (
            <label
              key={col.key}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px] font-[600]"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={columnVisibility[col.key]}
                  onChange={() => toggleCheckbox(col.key)}
                  className="checkbox-pulse"
                />
                {col.label}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageRowDropdownTwo;
