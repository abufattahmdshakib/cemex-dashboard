import React from "react";
import { FaPlus } from "react-icons/fa";
import SellingProduct from "./SellingProduct";
import ProductList from "./ProductList";
import StockManagementTable from "./StockManagementTable";

const Products = () => {

    return (
        <div>
            <div className="mt-5 flex justify-between">
                {/* Products */}
                <div>
                    <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">
                        Products
                    </h1>
                </div>

                {/* Export & Calendar Button */}
                <div className="flex items-center gap-4">
                    {/* New Order */}
                    <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-44 flex items-center justify-center gap-2 py-2 px-4">
                        <FaPlus className="w-3 h-3" /> Add Product
                    </p>
                </div>
            </div>
            <div className="my-8">
                <SellingProduct />
            </div>
            <div className="my-8">
                <ProductList />
            </div>
            <div className="my-8">
                <StockManagementTable />
            </div>
        </div>
    );
};

export default Products;
