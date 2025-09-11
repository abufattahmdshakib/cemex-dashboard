import React from 'react';
import { FaUserPlus, FaBoxes, FaMoneyBillWave } from 'react-icons/fa';
import { BiBarChartAlt2 } from "react-icons/bi";

const insightsData = [
    {
        icon: <BiBarChartAlt2 className="text-[#121417] w-6 h-6" />,
        title: "Order Size (৳1-10,000)",
        description: "Mid- and high-volume customers account for 90% of these shipments.",
        value: "90%"
    },
    {
        icon: <FaUserPlus className="text-[#121417] w-6 h-6" />,
        title: "New Customer Usage",
        description: "New customers utilize 50% of their shipment capacity, whereas loyal customers fully utilize 100%.",
        value: "50%"
    },
    {
        icon: <FaBoxes className="text-[#121417] w-6 h-6" />,
        title: "Average Order Size",
        description: "For new customers, orders typically range between 1-10 items. Loyal customers, however, place larger orders of 31-40 items on average.",
        value: "1-10 items"
    },
    {
        icon: <FaMoneyBillWave className="text-[#121417] w-6 h-6" />,
        title: "Revenue Comparison",
        description: "New customers have contributed ৳250,000 in revenue, while loyal customers have generated ৳500,000.",
        value: "৳250,000"
    },
];

const Insights = () => {
    return (
        <div className='montserrat-fontsfamily'>
            <h1 className='text-[#1D3557] text-[22px] font-[700] mt-12 mb-8'>Insights</h1>
            <div className="flex flex-col gap-6">
                {insightsData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white ">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F0F2F5] rounded-[8px]">
                            {item.icon}
                        </div>
                        <div className="flex-1 px-4">
                            <h2 className="text-[14px] font-[600] text-[#121417]">{item.title}</h2>
                            <p className="text-[14px] text-left w-9/10 font-[500] text-[#757575] mt-1">{item.description}</p>
                        </div>
                        <div>
                            <p className="text-[14px] font-[600] text-[#121417]">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insights;
