import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./ManageRowDropdown.css"; // animation CSS

const allColumns = [
  { key: "id", label: "ID Number" },
  { key: "customer", label: "Customer" },
  { key: "division", label: "Division" },
  { key: "contact", label: "Contact Number" },
  { key: "address", label: "Address" },
  { key: "frequency", label: "Order Frequency" },
  { key: "lifetime", label: "Lifetime Value" },
  { key: "avgValue", label: "Avg. Value" },
  { key: "avgSatisfaction", label: "Avg. Satisfaction" },
  { key: "productReturn", label: "Product Return" },
  { key: "update", label: "Update" },
];

const ManageRowDropdown = ({ checkboxes, setCheckboxes }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const dropdownRef = useRef(null);

  const flashIndexes = [5, 9, 10];

  const toggleCheckbox = (index) => {
    const newBoxes = [...checkboxes];
    newBoxes[index] = !newBoxes[index];
    setCheckboxes(newBoxes);
  };

  useEffect(() => {
    if (dropdownOpen) {
      setFlashing(true);
      const timer = setTimeout(() => setFlashing(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [dropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center shadow-md gap-2 border border-[#DBE0E5] bg-white text-[14px] text-[#121417] px-5 py-3 rounded-[8px]"
      >
        Manage Row ({checkboxes.filter(Boolean).length})
        <FaChevronDown
          className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10 max-h-80 overflow-y-auto">
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
                  className={`w-4 h-4 rounded border border-gray-300 accent-blue-500 cursor-pointer ${
                    flashing && flashIndexes.includes(index) ? "animate-flash" : ""
                  }`}
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

export default ManageRowDropdown;
