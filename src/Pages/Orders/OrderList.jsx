import React, { useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaChevronDown, FaList } from "react-icons/fa";
import { tableColumns, orderData, orderStatuses } from "./OrderTableData";
import ManageRowDropdown from "./ManageRowDropdown";

const OrderList = () => {
    const [resultsDropdownOpen, setResultsDropdownOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [selectedDivision, setSelectedDivision] = useState(""); 
    const [divisionDropdownOpen, setDivisionDropdownOpen] = useState(false); 
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const divisions = ["Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna"];

    // Filtered & searched data
    const filteredData = orderData
        .filter(order => selectedStatus === "All" || order.status === selectedStatus)
        .filter(order => selectedDivision ? order.division === selectedDivision : true)
        .filter(order => order.orderId.toLowerCase().includes(searchTerm.toLowerCase()));

    // Pagination
    const totalPages = Math.ceil(filteredData.length / resultsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    // Dynamic pagination buttons
    const maxVisiblePages = 8;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) visiblePages.push(i);

    return (
        <div className="montserrat-fontsfamily p-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[22px] text-[#1D3557] font-[700]">Order List</h1>
                <ManageRowDropdown />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-5 items-center">
                {orderStatuses.map((status) => {
                    if (status === "Select Division") {
                        return (
                            <div key={status} className="relative">
                                <button
                                    data-flash
                                    onClick={() => setDivisionDropdownOpen(prev => !prev)}
                                    className="flex items-center gap-2 px-4 py-2 rounded text-[12px] font-[500] bg-[#F0F2F5] text-[#121417] hover:bg-gray-200"
                                >
                                    {selectedDivision || "Select Division"}
                                    <FaChevronDown
                                        className={`ml-1 transition-transform duration-300 ${divisionDropdownOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {divisionDropdownOpen && (
                                    <ul className="absolute mt-2 w-40 bg-white border border-[#DBE0E5] rounded-[8px] shadow-lg z-10">
                                        {divisions.map((div) => (
                                            <li
                                                key={div}
                                                onClick={() => {
                                                    setSelectedDivision(div);
                                                    setDivisionDropdownOpen(false);
                                                    setCurrentPage(1);
                                                }}
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1D3557] hover:text-white"
                                            >
                                                {div}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    }

                    return (
                        <button
                            data-flash
                            key={status}
                            onClick={() => { setSelectedStatus(status); setCurrentPage(1); }}
                            className={`px-4 py-2 rounded text-[12px] font-[500] ${selectedStatus === status ? "bg-[#1D3557] text-white" : "bg-[#F0F2F5] text-[#121417]"}`}
                        >
                            {status}
                        </button>
                    );
                })}

                {/* Search input */}
                <div data-flash className="relative ml-auto">
                    <input
                        type="text"
                        placeholder="Search Order ID"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="pl-10 pr-4 py-2 border rounded-[8px] border-[#1D3557] text-[14px]"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#757575]" />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white text-left">
                            {tableColumns.map((col) => (
                                <th key={col.key} className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[12px] font-[600]">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row) => (
                            <tr key={row.orderId} className="hover:bg-gray-50">
                                {tableColumns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "orderId" ? "text-[#121417]" : "text-[#757575]"
                                            }`}
                                    >
                                        {col.key === "amount" ? (
                                            `৳${row[col.key].toLocaleString()}`
                                        ) : col.key === "report" ? (
                                            <div className="bg-[#F0F2F5] rounded-[8px] p-2 flex items-center justify-center w-8 h-8">
                                                <img src={row[col.key]} alt="report" className="w-8 h-8" />
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
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-[14px]">
                <div className="flex items-center gap-1">
                    <button
                        data-flash
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 flex items-center text-[#626262] border rounded-l-[6px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        <FaChevronLeft className="text-[#757575]" />
                        Back
                    </button>

                    {visiblePages.map((page) => (
                        <button
                            data-flash
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`py-1 px-2 text-[14px] text-[#121417] border rounded-[8px] border-[#DBE0E5] hover:bg-gray-100 ${page === currentPage ? "bg-[#1D3557] text-white" : "bg-[#FFFFFF] text-[#121417]"}`}
                        >
                            {page}
                        </button>
                    ))}

                    {endPage < totalPages && <span className="px-2">…</span>}

                    {endPage < totalPages && (
                        <button
                            data-flash
                            onClick={() => setCurrentPage(totalPages)}
                            className="px-2 py-1 border border-[#DBE0E5] rounded-[8px] hover:bg-gray-100"
                        >
                            {totalPages}
                        </button>
                    )}

                    <button
                        data-flash
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 flex items-center gap-2 border rounded-r-[8px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Next
                        <FaChevronRight className="text-[#626262]" />
                    </button>
                </div>

                {/* Results per page dropdown */}
                <div className="relative flex items-center gap-2">
                    <span className="text-[#121417] text-[14px] ">Result per page:</span>
                    <div className="relative w-16">
                        <button
                            data-flash
                            className="w-full text-left px-2 py-1 border rounded-[6px] border-[#DBE0E5] bg-white flex justify-between items-center"
                            onClick={() => setResultsDropdownOpen(!resultsDropdownOpen)}
                        >
                            {resultsPerPage}
                            <FaChevronDown className={`ml-1 transition-transform duration-300 ${resultsDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {resultsDropdownOpen && (
                            <ul className="absolute w-full mt-1 bg-white border border-[#DBE0E5] rounded-[6px] shadow-lg z-10">
                                {[10, 15, 20].map((num) => (
                                    <li
                                        key={num}
                                        data-flash
                                        onClick={() => {
                                            setResultsPerPage(num);
                                            setCurrentPage(1);
                                            setResultsDropdownOpen(false);
                                        }}
                                        className="px-2 py-1 cursor-pointer hover:bg-[#1D3557] hover:text-white"
                                    >
                                        {num}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
