import React, { useState } from "react";
import ManageRowDropdownTwo from "./ManageRowDropdownTwo";

const tableColumns = [
  { label: "Name", key: "name" },
  { label: "Total Stock Capacity", key: "totalStock" },
  { label: "Current Stock", key: "currentStock" },
  { label: "Available Space", key: "availableSpace" },
  { label: "Price", key: "price" },
  { label: "Total", key: "total" },
  { label: "Order", key: "order" },
];

const stockData = [
  {
    name: "Cemex Builder A1",
    totalStock: 200000,
    currentStock: 23567,
    availableSpace: 176433,
    price: 450,
    total: 79394850,
    order: "Order",
  },
  {
    name: "Cemex Classic C1",
    totalStock: 120000,
    currentStock: 56987,
    availableSpace: 63013,
    price: 345,
    total: 21739485,
    order: "Order",
  },
  {
    name: "Cemex Supreme S1",
    totalStock: 160000,
    currentStock: 12345,
    availableSpace: 147655,
    price: 317,
    total: 46806635,
    order: "Order",
  },
];

const StockManagementTable = () => {
  const [currentData, setCurrentData] = useState(stockData);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[22px] text-[#1D3557] font-[700]">Stock Management</h1>
        <ManageRowDropdownTwo />
      </div>

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
            {currentData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {tableColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${
                      col.key === "name" ? "text-[#121417]" : "text-[#757575]"
                    }`}
                  >
                    {col.key === "price" || col.key === "total"
                      ? `৳${row[col.key].toLocaleString()}`
                      : col.key === "order"
                      ? (
                        <div className="bg-[#1D3557] text-white rounded-[8px] p-1 text-center cursor-pointer">
                          {row[col.key]}
                        </div>
                      )
                      : row[col.key].toLocaleString()}
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

export default StockManagementTable;
