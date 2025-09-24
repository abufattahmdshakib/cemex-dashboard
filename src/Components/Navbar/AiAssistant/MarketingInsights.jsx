import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Focus from "../../../../src/assets/graph.svg";
import Growth from "../../../../src/assets/chart.svg";
import Churn from "../../../../src/assets/trend-up.svg";

// Stats Data (5 Cards)
const statsData = [
    {
        img: Churn,
        title: "Revenue per email camping",
        distitle: "Highest: $12.50, Lowest: $2.00",
    },
    {
        img: Churn,
        title: "Revenue per SMS campaign",
        distitle: "Highest: $10.00, Lowest: $2.50",
    },
    {
        img: Growth,
        title: "Repeat purchase rate",
        distitle: "Highest: 45%, Lowest: 20%",
    },
    {
        img: Focus,
        title: "Average order value (AOV)",
        distitle: "Highest: $80, Lowest: $30",
    },
    {
        img: Growth,
        title: "Conversion rate",
        distitle: "Highest: 4%, Lowest: 1.5%",
    },
];

const MarketingInsights = () => {
    return (
        <div className="montserrat-fontsfamily">
            <h1 className="text-[#1D3557] text-[22px] font-[700] my-6">
                Marketing insights
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-5 gap-6">
                {statsData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-[12px] shadow-md flex flex-col items-start gap-3 border border-[#DBE0E5]"
                    >
                        {/* Image */}
                        <img src={item.img} alt={item.title} className="w-7 h-7" />

                        {/* Title */}
                        <h3 className="text-[#121417] text-[14px] font-[600]">
                            {item.title}
                        </h3>

                        {/* Distitle */}
                        <p className="text-[#757575] w-30 text-[12px] font-[500]">
                            {item.distitle}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketingInsights;
