// src/components/RevenueShare.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const revenueData = [
    { segment: "High Value", revenue: 16709000, avgOrderValue: 16709000, orderFrequency: 10, customer: 100, lifetimeValue: 97320 },
    { segment: "At Risk", revenue: 6345000, avgOrderValue: 6345000, orderFrequency: 8, customer: 79, lifetimeValue: 45000 },
    { segment: "New", revenue: 9597320, avgOrderValue: 9597320, orderFrequency: 5, customer: 50, lifetimeValue: 6000597 },
    { segment: "Low Value", revenue: 6000597, avgOrderValue: 6000597, orderFrequency: 7, customer: 80, lifetimeValue: 550000 },
    { segment: "Potential", revenue: 4500000, avgOrderValue: 4500000, orderFrequency: 6, customer: 63, lifetimeValue: 950000 },
];

const cities = [
    "All", "Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna",
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

// Columns to display in table (all true)
const tableColumns = allColumns;

const RevenueShare = () => {
    const [selectedCity, setSelectedCity] = useState("All");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // All checkboxes true initially
    const [checkboxes, setCheckboxes] = useState([true, true, true, true, true, true]);

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
                <h1 className="text-[22px] text-[#1D3557] font-[700]">Revenue Share</h1>

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
            <div className="flex justify-start gap-6 py-7 border-y-1 border-[#DBE0E5] my-5">
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
            <div className="bg-white shadow-md  rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
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
                        {revenueData.map((row) => (
                            <tr key={row.segment} className="hover:bg-gray-50">
                                {tableColumns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[14px] font-[500] ${col.key === "segment"
                                            ? "text-[#121417]"
                                            : "text-[#757575]"
                                            }`}
                                    >
                                        {col.key === "revenue" || col.key === "avgOrderValue" || col.key === "lifetimeValue"
                                            ? `৳${row[col.key].toLocaleString()}`
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

export default RevenueShare;
