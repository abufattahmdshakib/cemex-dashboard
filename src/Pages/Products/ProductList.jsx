import React, { useState } from 'react';
import ManageRowDropdown from './ManageRowDropdown';
import edit from '../../../src/assets/edit-2.svg';


// Columns
const tableColumns = [
    { label: "ID No.", key: "orderId" },
    { label: "Product Name", key: "productName" },
    { label: "Series", key: "series" },
    { label: "Stock", key: "stock" },
    { label: "Selling Price", key: "sellingPrice" },
    { label: "Profit", key: "profit" },
    { label: "Offer", key: "offer" },
    { label: "Update", key: "update" },
];

// Sample data
const orderData = [
    {
        orderId: "#ER654",
        productName: "Cemex Builder A1",
        series: "A",
        stock: 23567,
        sellingPrice: 534,
        profit: "12.34%",
        offer: "Buy 10 get 1",
        update: edit,
    },
    {
        orderId: "#ER655",
        productName: "Cemex Classic C1",
        series: "C",
        stock: 56987,
        sellingPrice: 496,
        profit: "20%",
        offer: "N/A",
        update: edit,
    },
    {
        orderId: "#ER656",
        productName: "Cemex Supreme S1",
        series: "S",
        stock: 12345,
        sellingPrice: 450,
        profit: "28.9%",
        offer: "N/A",
        update: edit,
    },
];

const ProductList = () => {
    const [currentData, setCurrentData] = useState(orderData);

    return (
        <div className='montserrat-fontsfamily'>
            <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[22px] text-[#1D3557] font-[700]">Product List</h1>
                    <ManageRowDropdown />
                </div>

                {/* Table */}
                <div className="bg-white shadow-md  rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
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
                            {currentData.map((row) => (
                                <tr key={row.orderId} className="hover:bg-gray-50">
                                    {tableColumns.map((col) => (
                                        <td
                                            key={col.key}
                                            className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "orderId" ? "text-[#121417]" : "text-[#757575]"
                                                }`}
                                        >
                                            {col.key === "sellingPrice"
                                                ? `৳${row[col.key].toLocaleString()}`
                                                : col.key === "update"
                                                    ? (
                                                        <div className="bg-[#F0F2F5] rounded-[8px] p-2 flex items-center justify-center w-8 h-8">
                                                            <img src={row[col.key]} alt="update" className="w-8 h-8" />
                                                        </div>
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
        </div>
    );
};

export default ProductList;
