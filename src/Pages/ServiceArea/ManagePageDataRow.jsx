import React, { useRef, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const allColumns = [
    { key: "dashboardCards", label: "Business Performance" },
    { key: "serviceAreaCharts", label: "Order Segment Analysis" },
    { key: "sellingProduct", label: "Customer Segment Analysist" },
    { key: "revenueShare", label: "Revenue Share" },
    { key: "performanceDashboard", label: "Performance Dashboard" },
    { key: "stockManagement", label: "Stock Management" },
    { key: "customerSegment", label: "Customer Segment" },
    { key: "customerList", label: "Customer List" },
    { key: "orderList", label: "Order List" },
    { key: "insights", label: "Insights" },
    { key: "operationalEfficiencyMetrics", label: "Operational Efficiency Metrics" },
];


const ManagePageDataRow = ({ visiblePages, setVisiblePages }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const togglePage = (key) => {
        setVisiblePages({
            ...visiblePages,
            [key]: !visiblePages[key],
        });
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
        <div className="relative montserrat-fontsfamily" ref={dropdownRef}>
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex cursor-pointer items-center gap-2 border border-gray-300 font-medium bg-white text-[14px] text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-200"
            >
                Manage Page Data
                <FaChevronDown
                    className={`transition-transform duration-300 text-gray-600 ${
                        dropdownOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="max-h-[600px] p-5 overflow-y-hidden">
                        {allColumns.map((col) => (
                            <label
                                key={col.key}
                                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-black font-[600] text-[14px]"
                            >
                                <span className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={visiblePages[col.key] || false}
                                        onChange={() => togglePage(col.key)}
                                        className="checkbox-pulse cursor-pointer"
                                    />
                                    {col.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagePageDataRow;
