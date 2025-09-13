// src/components/OrdersCards.jsx
import React from "react";

const ordersData = [
    {
        id: 1,
        title: "Total Revenue",
        value: "৳38,000,000",
    },
    {
        id: 2,
        title: "Total Costs",
        value: "৳26,050,000",
    },
    {
        id: 3,
        title: "Total Profit",
        value: "৳11,950,000",
    },
    {
        id: 4,
        title: "Profit Margin",
        value: "28.2%",
        change: "+26%",
    },
];

const OrdersCards = () => {
    return (
        <div className="grid grid-cols-4 gap-4 my-8">
            {ordersData.map((card) => (
                <div
                    key={card.id}
                    className="p-6 rounded-[12px] shadow-md border-[#DBE0E5] border-1 flex flex-col justify-between"
                >
                    <h3 className="montserrat-fontsfamily text-[#121417] font-[500] text-[16px]">
                        {card.title}
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="montserrat-fontsfamily text-[24px] font-[700] text-[#1D3557]">
                            {card.value}
                        </p>
                        {card.change && (
                            <p
                                className={`montserrat-fontsfamily rounded-full text-[16px] py-1 px-3 ${card.change.startsWith("-")
                                        ? "bg-[#FDEDEB] text-[#E74C3C]"
                                        : "bg-[#EAFAF1] text-[#2ECC71]"
                                    }`}
                            >
                                {card.change}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrdersCards;
