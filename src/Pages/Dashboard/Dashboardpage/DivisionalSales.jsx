import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

// Table data
const divisionalData = [
    { area: "Dhaka", orders: 15215, profit: 16709000, margin: 30, delivery: "1.4 days", processing: "35 mins", avg: "92%", growth: "+87.6%" },
    { area: "Sylhet", orders: 15215, profit: 6345000, margin: 33, delivery: "1.2 days", processing: "28 mins", avg: "88%", growth: "+62%" },
    { area: "Chattogram", orders: 15215, profit: 9597320, margin: 25, delivery: "1.0 days", processing: "40 mins", avg: "85%", growth: "+59.9%" },
    { area: "Barisal", orders: 15215, profit: 7545000, margin: 23, delivery: "1.8 days", processing: "50 mins", avg: "80%", growth: "+50%" },
    { area: "Mymensingh", orders: 15215, profit: 6000597, margin: 18, delivery: "1.2 days", processing: "45 mins", avg: "77%", growth: "+47%" },
    { area: "Rajshahi", orders: 15215, profit: 4500000, margin: 16, delivery: "1.0 days", processing: "30 mins", avg: "74%", growth: "+12.4%" },
    { area: "Rangpur", orders: 15215, profit: 1550000, margin: 3, delivery: "1.6 days", processing: "55 mins", avg: "65%", growth: "-17.9%" },
    { area: "Khulna", orders: 15215, profit: 950000, margin: 2.7, delivery: "1.0 days", processing: "60 mins", avg: "61%", growth: "-26.3%" },
];

// Columns to display in dropdown (all 8)
const dropdownColumns = [
    { label: "Area Coverage", key: "area" },
    { label: "Orders", key: "orders" },
    { label: "Profit", key: "profit" },
    { label: "Profit Margin", key: "margin" },
    { label: "Delivery Time", key: "delivery" },
    { label: "Processing Time", key: "processing" },
    { label: "Avg. Satisfaction", key: "avg" },
    { label: "Avg. Growth", key: "growth" },
];

const DivisionalSales = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [checkboxes, setCheckboxes] = useState([true, true, true, true, true, false, false, true]);
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

    // ✅ Visible Columns = checked ones only
    const visibleColumns = dropdownColumns.filter((_, idx) => checkboxes[idx]);

    return (
        <div className="montserrat-fontsfamily">
            {/* Header */}
            <div className="flex justify-between items-center mt-12 mb-8">
                <h1 className="text-[22px] text-[#1D3557] font-[700]">
                    Divisional Sales and Growth Potential
                </h1>

                {/* Manage Row Button */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center shadow-md gap-2 border-1 border-[#DBE0E5] bg-[#FFFFFF] text-[14px] text-[#121417] px-5 py-3 rounded-[8px]"
                    >
                        Manage Row ({checkboxes.filter(c => c).length})
                        <FaChevronDown
                            className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10">
                            {dropdownColumns.map((col, index) => (
                                <label
                                    key={col.key}
                                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px] font-[600]"
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

            {/* table */}
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
                                {visibleColumns.map((col) => (
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
                                    {visibleColumns.map((col) => (
                                        <td
                                            key={col.key}
                                            className={`px-4 py-3 border-b border-[#E5E8EB] text-[14px] font-[500] ${col.key === "area"
                                                ? "text-[#121417] underline"
                                                : "text-[#757575]"
                                                }`}
                                        >
                                            {col.key === "profit"
                                                ? `৳${row[col.key]?.toLocaleString() || "-"}`
                                                : col.key === "margin"
                                                    ? `${row[col.key] || "-"}%`
                                                    : col.key === "growth"
                                                        ? row[col.key]
                                                            ? row[col.key].startsWith("+") ? (
                                                                <p className="montserrat-fontsfamily bg-[#EAFAF1] rounded-full text-[#2ECC71] text-[16px] py-1 px-3 text-center inline-block">
                                                                    {row[col.key]}
                                                                </p>
                                                            ) : (
                                                                <p className="bg-[#FDEDEB] rounded-full text-[#E74C3C] text-[16px] py-1 px-3 text-center inline-block">
                                                                    {row[col.key]}
                                                                </p>
                                                            )
                                                            : "-"
                                                        : row[col.key] || "-"}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default DivisionalSales;
