import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import trenddown from '../../../../src/assets/trend-down.svg';
import trendup from '../../../../src/assets/trend-up.svg';
const unusualData = [
    {
        img: trenddown,
        title: "Order drop",
        sub: "View division",
        description: "Order are down 12% in the last 30 days.",
    },
    {
        img: trendup,
        title: "Cost spike",
        sub: "View division",
        description: "Cost are up 10% in the last 30 days.",
    },
    {
        img: trenddown,
        title: "Margin erosion",
        sub: "View division",
        description: "Margin is down 8% in the last 30 days.",
    },
];
const spikesData = [
    {
        img: trenddown,
        title: "Order volume drop",
        sub: "View division",
        description: "Total orders have decreased by 12% over the last 30 days.",
    },
    {
        img: trendup,
        title: "Operational cost spike",
        sub: "View division",
        description: "Overall costs have increased by 10% in the last 30 days.",
    },
    {
        img: trenddown,
        title: "Profit margin erosion",
        sub: "View division",
        description: "Profit margins declined by 8% during the last 30 days.",
    },
];

const UnusualCost = () => {
    return (
        <div className="montserrat-fontsfamily">
            {/* section one */}
            <div>
                <h1 className="montserrat-fontsfamily text-[#1D3557] text-[22px] font-[700] my-6">
                    Unusual activity
                </h1>
                <p className="underline text-[#757575] text-[12px] font-[500] montserrat-fontsfamily mb-4">
                    Last 30 days
                </p>

                <div className="flex flex-col gap-4 mt-5">
                    {unusualData.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start gap-5"
                        >
                            {/* Left side: image + texts */}
                            <div className="flex justify-between items-start gap-7">
                                <div className="bg-[#F0F2F5] p-2 rounded-[8px]">
                                    <img src={item.img} alt={item.title} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-[#121417] text-[14px] font-[600]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#757575] text-[12px] font-[500] underline my-[2px]">
                                        {item.sub}
                                    </p>
                                    <p className="text-[#757575] text-[12px] font-[500]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right side: arrow icon */}
                            <BsArrowUpRight className="text-[#121417] font-bold text-[20px]" />
                        </div>
                    ))}
                </div>
            </div>
            {/* section Two */}
            <div>
                <h1 className="montserrat-fontsfamily text-[#1D3557] text-[22px] font-[700] mt-10 mb-6">
                    Cost spikes
                </h1>
                <p className="underline text-[#757575] text-[12px] font-[500] montserrat-fontsfamily mb-4">
                    Last 30 days
                </p>

                <div className="flex flex-col gap-4 mt-5">
                    {spikesData.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start gap-5"
                        >
                            {/* Left side: image + texts */}
                            <div className="flex justify-between items-start gap-7">
                                <div className="bg-[#F0F2F5] p-2 rounded-[8px]">
                                    <img src={item.img} alt={item.title} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-[#121417] text-[14px] font-[600]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#757575] text-[12px] font-[500] underline my-[2px]">
                                        {item.sub}
                                    </p>
                                    <p className="text-[#757575] text-[12px] font-[500]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right side: arrow icon */}
                            <BsArrowUpRight className="text-[#121417] font-bold text-[20px]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UnusualCost;
