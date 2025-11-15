import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaPlus } from "react-icons/fa";
import { tableColumns, orderData } from "./CustomersTableData";
import Swal from "sweetalert2";

const AdminPanel = () => {
    const [activeRowId, setActiveRowId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [resultsDropdownOpen, setResultsDropdownOpen] = useState(false);

    const totalPages = Math.ceil(orderData.length / resultsPerPage);
    const currentData = orderData.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    // Pagination buttons
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
        <div className="montserrat-fontsfamily mt-8 mb-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[22px] text-[#1D3557] font-[700]">Admin Panel</h1>
                {/* New Order */}
                <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-38 flex items-center justify-center gap-2 py-2 px-4">
                    <FaPlus className="w-3 h-3" /> Add Admin
                </p>
            </div>

            {/* Table */}
            <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white text-left">
                            {tableColumns.map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[12px] font-[600]"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row, rowIdx) => {
                            const isActive = row.id === activeRowId;
                            return (
                                <tr
                                    key={row.id}
                                    className={`${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`}
                                    onClick={() => setActiveRowId(row.id)}
                                >
                                    {tableColumns.map((col, colIdx) => (
                                        <td
                                            key={col.key}
                                            className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] 
              ${isActive ? "text-[#121417] font-[600]" : colIdx === 0 ? "text-[#121417]" : "text-[#757575]"}
              ${col.key === "email" ? "underline" : ""}`}
                                        >
                                            {col.key === "update" ? (
                                                rowIdx === 0 ? null : (
                                                    <div
                                                        className={`flex items-center justify-center w-10 h-10 p-2 rounded-[12px] ${isActive ? "bg-white" : "bg-[#E5E8EB]"
                                                            } cursor-pointer`}
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // prevents triggering row click
                                                            Swal.fire({
                                                                title: "Update Details",
                                                                text: "No update available",
                                                                icon: "info",
                                                                confirmButtonColor: "#1D3557",
                                                            });
                                                        }}
                                                    >
                                                        <img
                                                            src={row[col.key]}
                                                            alt="edit"
                                                            className="w-5 h-5 cursor-pointer"
                                                        />
                                                    </div>
                                                )
                                            ) : (
                                                row[col.key]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination & Results per page */}
            <div className="flex justify-between items-center mt-4 text-[14px]">
                {/* Pagination */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 flex items-center text-[#626262] border rounded-l-[6px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        <FaChevronLeft className="text-[#757575]" />
                        Back
                    </button>

                    {visiblePages.map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`py-1 px-2 text-[14px] text-[#121417] border rounded-[8px] border-[#DBE0E5] hover:bg-gray-100 ${page === currentPage ? "bg-[#1D3557] text-white" : "bg-[#FFFFFF] text-[#121417]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {endPage < totalPages && <span className="px-2 text-[#121417]">…</span>}

                    {endPage < totalPages && (
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className="px-2 py-1 border text-[#121417] border-[#DBE0E5] rounded-[8px] hover:bg-gray-100"
                        >
                            {totalPages}
                        </button>
                    )}

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 flex items-center text-[#626262] gap-2 border rounded-r-[8px] border-[#DBE0E5] hover:bg-gray-100 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                            }`}
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
                            className="w-full text-left px-2 py-1 text-[#626262] border rounded-[6px] border-[#DBE0E5]  flex justify-between items-center"
                            onClick={() => setResultsDropdownOpen(!resultsDropdownOpen)}
                        >
                            {resultsPerPage}
                            <FaChevronDown className={`ml-1 transition-transform duration-300 ${resultsDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {resultsDropdownOpen && (
                            <ul className="absolute w-full mt-1 border border-[#DBE0E5] rounded-[6px] shadow-lg z-10">
                                {[10, 15, 20].map((num) => (
                                    <li
                                        key={num}
                                        onClick={() => {
                                            setResultsPerPage(num);
                                            setCurrentPage(1);
                                            setResultsDropdownOpen(false);
                                        }}
                                        className="px-2 py-1 cursor-pointer text-[#626262] hover:bg-[#1D3557] hover:text-white"
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

export default AdminPanel;
