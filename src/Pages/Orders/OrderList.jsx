import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import ManageRowDropdown from "./ManageRowDropdown";
import { tableColumns, orderData, orderStatuses } from "./OrderTableData";

const OrderList = () => {
    const [resultsDropdownOpen, setResultsDropdownOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [selectedDivision, setSelectedDivision] = useState("");
    const [divisionDropdownOpen, setDivisionDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(13);

    // Default checkboxes for visible columns
    const [checkboxes, setCheckboxes] = useState([
        true, true, true, true, false, true, true, true, false, false, false, false, true
    ]);

    const divisions = ["Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna"];

    const filteredData = orderData
        .filter(order => selectedStatus === "All" || order.status === selectedStatus)
        .filter(order => selectedDivision ? order.division === selectedDivision : true)
        .filter(order =>
            String(order.id || "").toLowerCase().includes(searchTerm.toLowerCase())
        );

    const totalPages = Math.ceil(filteredData.length / resultsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    const maxVisiblePages = 8;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) visiblePages.push(i);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDivisionDropdownOpen(false);
                setResultsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="montserrat-fontsfamily" ref={wrapperRef}>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[22px] text-[#1D3557] font-[700]">Order List</h1>
                <ManageRowDropdown checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-5 items-center border-y border-[#DBE0E5] py-6">
                {orderStatuses.map((status) => {
                    if (status === "Select Division") {
                        return (
                            <div key={status} className="relative">
                                <button
                                    onClick={() => setDivisionDropdownOpen(prev => !prev)}
                                    className="flex items-center gap-2 px-4 py-2 rounded text-[12px] font-[500] bg-[#F0F2F5] text-[#121417] hover:bg-gray-200 cursor-pointer"
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
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1D3557] hover:text-white text-[#121417]"
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
                            key={status}
                            onClick={() => { setSelectedStatus(status); setCurrentPage(1); }}
                            className={`px-4 py-2 rounded text-[12px] font-[500] cursor-pointer ${selectedStatus === status ? "bg-[#1D3557] text-white" : "bg-[#F0F2F5] text-[#121417]"}`}
                        >
                            {status}
                        </button>
                    );
                })}

                {/* Search input */}
                <div className="relative ml-auto">
                    <input
                        type="text"
                        placeholder="Search Order ID"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="pl-10 pr-4 py-2 border rounded-[8px] border-[#1D3557] text-[14px] text-[#121417] placeholder-[#6B7280]"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#757575] cursor-pointer" />
                </div>
            </div>

            {/* Table */}
            {currentData.length === 0 ? (
                <div className="text-center py-10 text-[#757575] text-[16px] font-medium">
                    No orders found matching your criteria.
                </div>
            ) : (
                <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto mb-8">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-white text-left">
                                {tableColumns.map((col, index) =>
                                    checkboxes[index] && (
                                        <th key={col.key} className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[12px] font-[600]">
                                            {col.label}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                    {tableColumns.map((col, index) =>
                                        checkboxes[index] && (
                                            <td
                                                key={col.key}
                                                className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "id" ? "text-[#121417]" : "text-[#757575] cursor-pointer"}`}
                                            >
                                                {col.key === "amount" ? (
                                                    `৳${row[col.key].toLocaleString()}`
                                                ) : col.key === "report" ? (
                                                    <div className="bg-[#F0F2F5] rounded-[8px] p-2 flex items-center justify-center w-8 h-8">
                                                        <img src={row[col.key]} alt="report" className="w-6 h-6 object-contain" />
                                                    </div>
                                                ) : (
                                                    <span>{row[col.key]}</span>
                                                )}
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            {currentData.length > 0 && (
                <div className="flex justify-between items-center mt-4 text-[14px]">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 flex items-center text-[#626262] border rounded-l-[6px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            <FaChevronLeft className="text-[#757575]" />
                            Back
                        </button>

                        {visiblePages.map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`py-1 px-2 text-[14px] border rounded-[8px] border-[#DBE0E5] hover:bg-gray-100 cursor-pointer ${page === currentPage ? "bg-[#1D3557] text-white" : "bg-[#FFFFFF] text-[#121417]"}`}
                            >
                                {page}
                            </button>
                        ))}

                        {endPage < totalPages && <span className="px-2 text-[#121417]">…</span>}

                        {endPage < totalPages && (
                            <button
                                onClick={() => setCurrentPage(totalPages)}
                                className="px-2 py-1 border border-[#DBE0E5] rounded-[8px] hover:bg-gray-100 cursor-pointer text-[#121417]"
                            >
                                {totalPages}
                            </button>
                        )}

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 flex items-center gap-2 border rounded-r-[8px] border-[#DBE0E5] hover:bg-gray-100 text-[#121417] ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            Next
                            <FaChevronRight className="text-[#626262]" />
                        </button>

                    </div>

                    {/* Results per page dropdown */}
                    <div className="relative flex items-center gap-2">
                        <span className="text-[#121417] text-[14px]">Result per page:</span>
                        <div className="relative w-16">
                            <button
                                className="w-full text-left px-2 py-1 border rounded-[6px] border-[#DBE0E5] bg-white flex justify-between items-center cursor-pointer text-[#121417]"
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
                                            onClick={() => {
                                                setResultsPerPage(num);
                                                setCurrentPage(1);
                                                setResultsDropdownOpen(false);
                                            }}
                                            className="px-2 py-1 cursor-pointer hover:bg-[#1D3557] hover:text-white text-[#121417]"
                                        >
                                            {num}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderList;
