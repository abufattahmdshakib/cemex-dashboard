import React, { useState } from "react";
import ManageRowDropdownTwo from "./ManageRowDropdownTwo";
import Swal from "sweetalert2";

const tableColumns = [
  { label: "Name", key: "name" },
  { label: "Total Stock Capacity", key: "totalStock" },
  { label: "Current Stock", key: "currentStock" },
  { label: "Available Space", key: "availableSpace" },
  { label: "Buying Price", key: "buyingPrice" },
  { label: "Expired Product", key: "expiredProduct" },
  { label: "Total", key: "total" },
  { label: "Order", key: "order" },
];

const stockData = [
  {
    name: "Cemex Builder A1",
    totalStock: 200000,
    currentStock: 23567,
    availableSpace: 176433,
    buyingPrice: 450,
    expiredProduct: "No",
    total: 79394850,
    order: "Order",
  },
  {
    name: "Cemex Classic C1",
    totalStock: 120000,
    currentStock: 56987,
    availableSpace: 63013,
    buyingPrice: 345,
    expiredProduct: "Yes",
    total: 21739485,
    order: "Order",
  },
  {
    name: "Cemex Supreme S1",
    totalStock: 160000,
    currentStock: 12345,
    availableSpace: 147655,
    buyingPrice: 317,
    expiredProduct: "No",
    total: 46806635,
    order: "Order",
  },
];

const StockManagementTable = () => {
  const [currentData] = useState(stockData);

  const [columnVisibility, setColumnVisibility] = useState({
    name: true,
    totalStock: true,
    currentStock: true,
    availableSpace: true,
    buyingPrice: true,
    expiredProduct: false,
    total: true,
    order: true,
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openPopup = (row) => {
    setSelectedRow(row);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedRow(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[22px] text-[#1D3557] font-[700]">Stock Management</h1>
        <ManageRowDropdownTwo
          columnVisibility={columnVisibility}
          setColumnVisibility={setColumnVisibility}
        />
      </div>

      <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white text-left">
              {tableColumns.map(
                (col) =>
                  columnVisibility[col.key] && (
                    <th
                      key={col.key}
                      className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[12px] font-[600]"
                    >
                      {col.label}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {tableColumns.map(
                  (col) =>
                    columnVisibility[col.key] && (
                      <td
                        key={col.key}
                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "name" ? "text-[#121417]" : "text-[#757575]"
                          }`}
                        onClick={() => col.key === "order" && openPopup(row)}
                        style={{ cursor: col.key === "order" ? "pointer" : "default" }}
                      >
                        {col.key === "buyingPrice" || col.key === "total"
                          ? `৳${row[col.key].toLocaleString()}`
                          : col.key === "order" ? (
                            <div className="bg-[#1D3557] text-white rounded-[8px] p-1 text-center cursor-pointer">
                              {row[col.key]}
                            </div>
                          ) : (
                            row[col.key].toLocaleString()
                          )}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
      {popupVisible && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none"
        >
          <div
            className="bg-white rounded-lg p-6 w-96 relative montserrat-fontsfamily border-2 border-gray-400 pointer-events-auto"
            onClick={(e) => e.stopPropagation()} // popup ক্লিক বন্ধ না করার জন্য
          >
            <h2 className="text-xl font-bold mb-4 text-[#1D3557] montserrat-fontsfamily">
              Order Details
            </h2>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Name:</strong> {selectedRow?.name}
            </p>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Total Stock:</strong> {selectedRow?.totalStock.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Current Stock:</strong> {selectedRow?.currentStock.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Available Space:</strong> {selectedRow?.availableSpace.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Buying Price:</strong> ৳{selectedRow?.buyingPrice.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Expired Product:</strong> {selectedRow?.expiredProduct}
            </p>
            <p className="text-[#121417] text-[14px] montserrat-fontsfamily">
              <strong className="text-[#121417]">Total:</strong> ৳{selectedRow?.total.toLocaleString()}
            </p>

            {/* Buttons aligned right and smaller */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closePopup}
                className="px-3 py-1 bg-white text-black rounded text-sm font-semibold montserrat-fontsfamily"
              >
                Close
              </button>

              <button
                onClick={() => {
                  Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Order confirmed successfully!",
                    confirmButtonColor: "#1D3557",
                  });
                  closePopup();
                }}
                className="px-3 py-1 bg-white text-black rounded text-sm font-semibold montserrat-fontsfamily"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StockManagementTable;
