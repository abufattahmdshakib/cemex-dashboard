import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import edit from '../../../src/assets/edit-2.svg';
import Swal from "sweetalert2";

// ---------------- DATA ----------------
export const orderStatuses = [
    "All", "New", "Active", "Loyal", "Select Area"
];

export const tableColumns = [
    { label: "ID Number", key: "orderId" },
    { label: "Customer", key: "customer" },
    { label: "Division", key: "division" },
    { label: "Contact Number", key: "contact" },
    { label: "Address", key: "address" },
    { label: "Order Frequency", key: "orderFrequency" },
    { label: "Lifetime Value", key: "lifetimeValue" },
    { label: "Avg. Value", key: "avgValue" },
    { label: "Avg. Satisfaction", key: "avgSatisfaction" },
    { label: "Product Return", key: "productReturn" },
    { label: "Update", key: "update" }
];

const divisions = ["Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna"];
const customerNames = [
    "Abu Fattah Shakib", "Labonno", "Marjia Khondokar", "Tanvir Hasan", "Mehedi Rahman",
    "Shaila Parveen", "Rafiul Islam", "Priya Saha", "Imran Hossain", "Mitu Chowdhury",
    "Fahim Ahmed", "Sharmin Akter", "Abdullah Al Noman", "Sadia Yasmin", "Omar Faruk",
    "Tanjila Khatun", "Zahid Hasan", "Farhana Rahman", "Sakib Al Mahmud", "Jannat Ara"
];

export const orderData = Array.from({ length: 250 }).map((_, i) => {
    const lifetime = Math.floor(Math.random() * 800000) + 5000;
    const avg = Math.floor(lifetime / (Math.floor(Math.random() * 50) + 1));
    return {
        orderId: `#ER${654 + i}`,
        customer: customerNames[i % customerNames.length],
        division: divisions[i % divisions.length],
        contact: `01${Math.floor(100000000 + Math.random() * 900000000)}`,
        address: `House ${i + 1}, Road ${i + 2}`,
        orderFrequency: Math.floor(Math.random() * 50) + 1,
        lifetimeValue: `৳${lifetime.toLocaleString()}`,
        avgValue: `৳${avg.toLocaleString()}`,
        avgSatisfaction: `${Math.floor(Math.random() * 100)}%`,
        productReturn: `${Math.floor(Math.random() * 10)}`,
        update: edit,
        status: orderStatuses[i % orderStatuses.length]
    };
});

// ---------------- ManageRowDropdown ----------------
const ManageRowDropdown = ({ checkboxes, setCheckboxes }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [flashIndexes, setFlashIndexes] = useState([]);
    const dropdownRef = useRef(null);

    const toggleCheckbox = (index) => {
        const newBoxes = [...checkboxes];
        newBoxes[index] = !newBoxes[index];
        setCheckboxes(newBoxes);

        // Trigger flash animation
        setFlashIndexes([index]);
        setTimeout(() => setFlashIndexes([]), 1000);
    };

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
                <FaChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-[#DBE0E5] rounded-[12px] p-4 shadow-lg z-10">
                    {tableColumns.map((col, index) => (
                        <label
                            key={col.key}
                            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#121417] text-[14px] font-[600]"
                        >
                            <span className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={checkboxes[index]}
                                    onChange={() => toggleCheckbox(index)}
                                    className={`checkbox-pulse cursor-pointer`}
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

// ---------------- CustomerList ----------------
const CustomerList = () => {
    const [checkboxes, setCheckboxes] = useState([true, true, true, true, false, true, true, true, false, false, true]);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [selectedDivision, setSelectedDivision] = useState("");
    const [divisionDropdownOpen, setDivisionDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(8);
    const [resultsDropdownOpen, setResultsDropdownOpen] = useState(false);

    const filteredData = orderData
        .filter(o => selectedStatus === "All" || o.status === selectedStatus)
        .filter(o => selectedDivision ? o.division === selectedDivision : true)
        .filter(o => o.orderId.toLowerCase().includes(searchTerm.toLowerCase()));

    const totalPages = Math.ceil(filteredData.length / resultsPerPage);
    const currentData = filteredData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const maxVisiblePages = 8;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    if (endPage > totalPages) { endPage = totalPages; startPage = Math.max(1, endPage - maxVisiblePages + 1); }
    const visiblePages = []; for (let i = startPage; i <= endPage; i++) visiblePages.push(i);

    return (
        <div className="montserrat-fontsfamily">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[22px] text-[#1D3557] font-[700]">Customer List</h1>
                <ManageRowDropdown checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 py-6 mb-5 items-center border-y border-[#DBE0E5]">
                {orderStatuses.map(status => {
                    if (status === "Select Area") {
                        return (
                            <div key={status} className="relative cursor-pointer">
                                <button
                                    onClick={() => setDivisionDropdownOpen(p => !p)}
                                    className="flex items-center gap-2 px-4 py-2 rounded text-[12px] font-[500] bg-[#F0F2F5] text-[#121417] hover:bg-gray-200 cursor-pointer"
                                >
                                    {selectedDivision || "Select Area"}
                                    <FaChevronDown
                                        className={`ml-1 transition-transform duration-300 ${divisionDropdownOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {divisionDropdownOpen && (
                                    <ul className="absolute mt-2 w-40 bg-white border border-[#DBE0E5] rounded-[8px] shadow-lg z-10 cursor-pointer ">
                                        {divisions.map(d => (
                                            <li
                                                key={d}
                                                onClick={() => {
                                                    setSelectedDivision(d);
                                                    setDivisionDropdownOpen(false);
                                                    setCurrentPage(1);
                                                }}
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1D3557] hover:text-white text-[#121417]"
                                            >
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    }
                    return (
                        <button
                            key={status}
                            onClick={() => {
                                setSelectedStatus(status);
                                setCurrentPage(1);
                                if (status !== "Select Area") setSelectedDivision("");
                            }}
                            className={`px-4 py-2 rounded text-[12px] font-[500] cursor-pointer ${selectedStatus === status ? "bg-[#1D3557] text-white" : "bg-[#F0F2F5] text-[#121417]"}`}
                        >
                            {status}
                        </button>
                    );
                })}

                {/* Search */}
                <div className="relative ml-auto cursor-pointer">
                    <input
                        type="text"
                        placeholder="Search Order ID"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="pl-10 pr-4 py-2 border rounded-[8px] border-[#1D3557] text-[14px] text-[#121417] placeholder-[#757575]"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#757575]" />
                </div>
            </div>

            {/* Table */}
            {!checkboxes.some(Boolean) ? (
                <div className="text-center py-10 text-[#757575] text-[15px] font-medium border border-[#E5E8EB] rounded-[12px] bg-white mb-8">
                    ⚠ No columns selected. Please enable at least one column from
                    <span className="font-semibold text-[#1D3557]"> Manage Row</span>.
                </div>
            ) : currentData.length === 0 ? (
                <div className="text-center py-10 text-[#757575] text-[16px] font-medium">
                    No orders found matching your criteria.
                </div>
            ) : (<div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white text-left">
                            {tableColumns.map((col, index) => checkboxes[index] && (
                                <th key={col.key} className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[12px] font-[600]">{col.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map(row => (
                            <tr key={row.orderId} className="hover:bg-gray-50">
                                {tableColumns.map((col, index) => checkboxes[index] && (
                                    <td
                                        key={col.key}
                                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "orderId" ? "text-[#121417]" : "text-[#757575]"}`}
                                    >
                                        {col.key === "update" ? (
                                            <div
                                                className="bg-[#F0F2F5] rounded-[8px] p-2 flex items-center justify-center w-8 h-8 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    Swal.fire({
                                                        title: "Update Details",
                                                        text: "No update available",
                                                        icon: "info",
                                                        confirmButtonColor: "#1D3557",
                                                    });
                                                }}
                                            >
                                                <img src={row[col.key]} alt="edit" className="w-5 h-5" />
                                            </div>
                                        ) : (
                                            row[col.key]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)}
            
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-[14px]">
                <div className="flex items-center gap-1">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
                        className={`px-3 py-1 flex items-center text-[#626262] border rounded-l-[6px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                        <FaChevronLeft className="text-[#757575]" /> Back
                    </button>

                    {visiblePages.map(page => (
                        <button key={page} onClick={() => setCurrentPage(page)}
                            className={`py-1 px-2 text-[14px] text-[#121417] border rounded-[8px] border-[#DBE0E5] hover:bg-gray-100 ${page === currentPage ? "bg-[#1D3557] text-white" : "bg-[#FFFFFF] text-[#121417]"}`}>
                            {page}
                        </button>
                    ))}

                    {endPage < totalPages && <span className="px-2 text-[#121417]">…</span>}
                    {endPage < totalPages && <button onClick={() => setCurrentPage(totalPages)} className="px-2 py-1 border text-[#121417] border-[#DBE0E5] rounded-[8px] hover:bg-gray-100">{totalPages}</button>}

                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                        className={`px-3 py-1 flex items-center text-black gap-2 border rounded-r-[8px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}>
                        Next <FaChevronRight className="text-[#626262]" />
                    </button>
                </div>

                {/* Results dropdown */}
                <div className="relative flex items-center gap-2">
                    <span className="text-[#121417] text-[14px] ">Result per page:</span>
                    <div className="relative w-16">
                        <button className="w-full text-left px-2 py-1 text-[#121417] border rounded-[6px] border-[#DBE0E5] bg-white flex justify-between items-center"
                            onClick={() => setResultsDropdownOpen(!resultsDropdownOpen)}>
                            {resultsPerPage} <FaChevronDown className={`ml-1 transition-transform duration-300 ${resultsDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        {resultsDropdownOpen && (
                            <ul className="absolute w-full mt-1 bg-white text-[#626262] border border-[#DBE0E5] rounded-[6px] shadow-lg z-10">
                                {[10, 15, 20].map(num => (
                                    <li key={num} onClick={() => { setResultsPerPage(num); setCurrentPage(1); setResultsDropdownOpen(false); }}
                                        className="px-2 py-1 cursor-pointer hover:bg-[#1D3557] hover:text-white">{num}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerList;
