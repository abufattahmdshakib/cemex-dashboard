import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const allColumns = [
    { key: "id", label: "ID Number" },
    { key: "customer", label: "Customer" },
    { key: "division", label: "Division" },
    { key: "orderDate", label: "Order Date" },
    { key: "orderTime", label: "Order Time" },
    { key: "quantity", label: "Quantity" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "deliveryAddress", label: "Delivery Address" },
    { key: "processingTime", label: "Processing Time" },
    { key: "deliveryTime", label: "Delivery Time" },
    { key: "avgSatisfaction", label: "Avg. Satisfaction" },
    { key: "report", label: "Report" },
];

const ManageRowDropdown = ({ checkboxes, setCheckboxes }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex text-black items-center gap-2 px-4 py-2 text-[14px] font-[500] bg-[#FFFFFF] border border-[#DBE0E5] rounded-[8px] shadow-md cursor-pointer"
            >
                Manage Row ({checkboxes.filter(Boolean).length})
                <FaChevronDown
                    className={`ml-1 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-[#DBE0E5] rounded-[8px] p-3 shadow-lg z-10">
                    {allColumns.map((col, index) => (
                        <label
                            key={col.key}
                            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px] font-[500]"
                        >
                            <span className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checkboxes[index]}
                                    onChange={() => toggleCheckbox(index)}
                                    className="checkbox-pulse cursor-pointer"
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
