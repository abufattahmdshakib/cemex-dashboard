import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

// Table data
const divisionalData = [
    { area: "Dhaka", orders: 15215, Processing: "1.5 hours", Satisfaction: 5.0, delivery: "1.4 days", growth: "+87.6%" },
    { area: "Sylhet", orders: 15215, Processing: "1.3 hours", Satisfaction: 4.9, delivery: "1.2 days", growth: "+62%" },
    { area: "Chattogram", orders: 15215, Processing: "2.4 hours", Satisfaction: 4.7, delivery: "1.0 days", growth: "+59.9%" },
    { area: "Barisal", orders: 15215, Processing: "2.6 hours", Satisfaction: 4.3, delivery: "1.8 days", growth: "+50%" },
    { area: "Mymensingh", orders: 15215, Processing: "1.5 hours", Satisfaction: 4.3, delivery: "1.2 days", growth: "+47%" },
    { area: "Rajshahi", orders: 15215, Processing: "3.2 hours", Satisfaction: 4.0, delivery: "1.0 days", growth: "+12.4%" },
    { area: "Rangpur", orders: 15215, Processing: "2.8 hours", Satisfaction: 3.7, delivery: "1.6 days", growth: "-17.9%" },
    { area: "Khulna", orders: 15215, Processing: "3.6 hours", Satisfaction: 3.4, delivery: "1.0 days", growth: "-26.3%" },
];

// Columns to display in the **table**
const tableColumns = [
    { label: "Area Coverage", key: "area" },
    { label: "Orders", key: "orders" },
    { label: "Processing Time", key: "Processing" },
    { label: "Delivery Time", key: "delivery" },
    { label: "Avg. Satisfaction", key: "Satisfaction" },
    { label: "Avg. Growth", key: "growth" },
];

// Columns to display in the **dropdown** (all 8)
const dropdownColumns = [
    { label: "Area Coverage", key: "area" },
    { label: "Orders", key: "orders" },
    { label: "Processing Time", key: "Processing" },
    { label: "Delivery Time", key: "Delivery" },
    { label: "Avg. Satisfaction", key: "Satisfaction" },
    { label: "Avg. Growth", key: "Growth" },
    { label: "Product Return", key: "Product" },
];

const Efficiency = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [checkboxes, setCheckboxes] = useState([true, true, true, true, true, true, false]);
    const dropdownRef = useRef(null);

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
            <div className="flex justify-between items-center mt-12 mb-8">
                <h1 className="text-[22px] text-[#1D3557] font-[700]">Divisional Sales and Growth Potential</h1>

                {/* Manage Row Button */}
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
                        <div className="absolute right-0 mt-2 w-64 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10">
                            {dropdownColumns.map((col, index) => (
                                <label
                                    key={col.key}
                                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px]"
                                >
                                    <span className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={checkboxes[index]}
                                            onChange={() => {
                                                const newBoxes = [...checkboxes];
                                                newBoxes[index] = !newBoxes[index];
                                                setCheckboxes(newBoxes);
                                            }}
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
                        {divisionalData.map((row) => (
                            <tr key={row.area} className="hover:bg-gray-50">
                                {tableColumns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[14px] font-[500] ${col.key === "area"
                                            ? "text-[#121417] underline"
                                            : "text-[#757575]"
                                            }`}
                                    >
                                        {col.key === "profit"
                                            ? `৳${row[col.key].toLocaleString()}`
                                            : col.key === "margin"
                                                ? `${row[col.key]}%`
                                                : col.key === "growth"
                                                    ? row[col.key].startsWith("+")
                                                        ? (
                                                            <p className="montserrat-fontsfamily bg-[#EAFAF1] rounded-full text-[#2ECC71] text-[16px] py-1 px-3 text-center inline-block">
                                                                {row[col.key]}
                                                            </p>
                                                        )
                                                        : (
                                                            <p className="bg-[#FDEDEB] rounded-full text-[#E74C3C] text-[16px] py-1 px-3 text-center inline-block">
                                                                {row[col.key]}
                                                            </p>
                                                        )
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

export default Efficiency;
