import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

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

const ManageRowDropdown = () => {
    // First  true,  false
    const [checkboxes, setCheckboxes] = useState([
        true, true, true, true, false, true, true, true, false, false, true
    ]);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleCheckbox = (index) => {
        const newBoxes = [...checkboxes];
        newBoxes[index] = !newBoxes[index];
        setCheckboxes(newBoxes);
    };

    // Indexes to flash
    const flashIndexes = [5, 9, 10];
    const [flashing, setFlashing] = useState(false);

    // Trigger flash when dropdown opens
    useEffect(() => {
        if (dropdownOpen) {
            setFlashing(true);
            const timer = setTimeout(() => setFlashing(false), 1000); 
            return () => clearTimeout(timer);
        }
    }, [dropdownOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                data-flash
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center shadow-md  gap-2 border border-[#DBE0E5] bg-white text-[14px] text-[#121417] px-5 py-3 rounded-[8px]"
            >
                Manage Row ({checkboxes.filter(Boolean).length})
                <FaChevronDown
                    className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                        }`}
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
                                    className={`checkbox-pulse ${flashing && flashIndexes.includes(index) ? "animate-flash" : ""
                                        }`}
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

export default ManageRowDropdown;
