import React, { useState } from "react";
import ManageRowDropdown from "./ManageRowDropdown";
import edit from "../../../src/assets/edit-2.svg";
import Swal from "sweetalert2";

const tableColumns = [
  { label: "ID No.", key: "orderId" },
  { label: "Product Name", key: "productName" },
  { label: "Series", key: "series" },
  { label: "Stock", key: "stock" },
  { label: "Selling Price", key: "sellingPrice" },
  { label: "Buying Price", key: "buyingPrice" },
  { label: "Profit", key: "profit" },
  { label: "Offer", key: "offer" },
  { label: "Update", key: "update" },
];

const orderData = [
  {
    orderId: "#ER654",
    productName: "Cemex Builder A1",
    series: "A",
    stock: 23567,
    sellingPrice: 534,
    buyingPrice: 450,
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
    buyingPrice: 400,
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
    buyingPrice: 390,
    profit: "28.9%",
    offer: "N/A",
    update: edit,
  },
];

const ProductList = () => {
  const [columnVisibility, setColumnVisibility] = useState({
    orderId: true,
    productName: true,
    series: true,
    stock: true,
    sellingPrice: true,
    buyingPrice: false,
    profit: true,
    offer: true,
    update: true,
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const visibleColumns = tableColumns.filter((col) => columnVisibility[col.key]);

  const openPopup = (row) => {
    setSelectedRow(row);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedRow(null);
  };

  return (
    <div className="montserrat-fontsfamily">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[22px] text-[#1D3557] font-[700]">Product List</h1>
        <ManageRowDropdown
          columnVisibility={columnVisibility}
          setColumnVisibility={setColumnVisibility}
        />
      </div>

      <div className="bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white text-left">
              {visibleColumns.map((col) => (
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
            {orderData.map((row) => (
              <tr key={row.orderId} className="hover:bg-gray-50">
                {visibleColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "orderId" ? "text-[#121417]" : "text-[#757575]"
                      } ${col.key === "update" ? "cursor-pointer" : ""}`}
                    onClick={() => col.key === "update" && openPopup(row)}
                  >
                    {col.key === "sellingPrice" || col.key === "buyingPrice"
                      ? `৳${row[col.key]?.toLocaleString()}`
                      : col.key === "update" ? (
                        <div className="bg-[#F0F2F5] rounded-[8px] p-2 flex items-center justify-center w-8 h-8 cursor-pointer">
                          <img src={row[col.key]} alt="update" className="w-6 h-6" />
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

      {/* Popup Modal */}
      {popupVisible && selectedRow && (
        <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
          <div
            className="bg-white rounded-lg p-6 w-96 relative montserrat-fontsfamily border-2 border-gray-400 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-[#1D3557] montserrat-fontsfamily">
              Product Details
            </h2>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Name:</strong>{" "}
              {selectedRow?.productName}
            </p>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Series:</strong>{" "}
              {selectedRow?.series}
            </p>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Stock:</strong>{" "}
              {selectedRow?.stock.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Selling Price:</strong> ৳
              {selectedRow?.sellingPrice.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Buying Price:</strong> ৳
              {selectedRow?.buyingPrice.toLocaleString()}
            </p>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Profit:</strong>{" "}
              {selectedRow?.profit}
            </p>
            <p className="text-[#121417] text-[14px]">
              <strong className="text-[#121417]">Offer:</strong>{" "}
              {selectedRow?.offer}
            </p>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closePopup}
                className="px-3 py-1 bg-white text-black rounded text-sm font-semibold cursor-pointer"
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
                className="px-3 py-1 bg-white text-black rounded text-sm font-semibold cursor-pointer"
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

export default ProductList;
