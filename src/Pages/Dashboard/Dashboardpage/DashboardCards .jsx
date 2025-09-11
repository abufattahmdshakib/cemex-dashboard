// src/components/DashboardCards.jsx
import React from "react";

const cardData = [
  {
    id: 1,
    title: "Total Orders",
    value: "32,500",
    change: "+2,000",
  },
  {
    id: 2,
    title: "Total Revenue",
    value: "৳75.2M",
    change: "+10%",
  },
  {
    id: 3,
    title: "Growth M/M",
    value: "35.7%",
    change: "+10%",
  },
  {
    id: 4,
    title: "Average Order Value",
    value: "৳78,500",
    change: "+26%",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 my-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`p-6 rounded-lg shadow-md border-[#DBE0E5] border-1 flex flex-col justify-between ${card.bgColor}`}
        >
          <h3 className="montserrat-fontsfamily text-[#121417] font-[500] text-[16px]">{card.title}</h3>
          <div className="flex justify-between items-center">
            <p className="montserrat-fontsfamily text-[24px] font-[700] text-[#1D3557]">{card.value}</p>
          <p className="montserrat-fontsfamily bg-[#EAFAF1] rounded-full text-[#2ECC71] text-[16px] py-1 px-3">{card.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
