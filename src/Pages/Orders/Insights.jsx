import React from 'react';
import icon1 from '../../../src/assets/chart.svg';
import icon3 from '../../../src/assets/status-up.svg';
import icon4 from '../../../src/assets/diagram.svg';

const insightsData = [
    {
        icon: icon1,
        title: "Order Size (৳1-10,000)",
        description: "Mid- and high-volume customers account for 90% of these shipments.",
        value: "90%"
    },
    {
        icon: icon3,
        title: "Average Order Size",
        description: "For new customers, orders typically range between 1-10 items. Loyal customers, however, place larger orders of 31-40 items on average.",
        value: "1-10 items"
    },
    {
        icon: icon4,
        title: "Revenue Comparison",
        description: "New customers have contributed ৳250,000 in revenue, while loyal customers have generated ৳500,000.",
        value: "৳250,000"
    },
];

const Insights = () => {
    return (
        <div className='montserrat-fontsfamily'>
            <h1 className='text-[#1D3557] text-[20px] font-[700] mt-8 mb-8'>Insights</h1>
            <div className="flex flex-col gap-6">
                {insightsData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F0F2F5] rounded-[8px]">
                            <img src={item.icon} alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="flex-1 px-4">
                            <h2 className="text-[13px] font-[600] text-[#121417]">{item.title}</h2>
                            <p className="text-[12px] text-left w-9/10 font-[500] text-[#757575] mt-1">{item.description}</p>
                        </div>
                        <div>
                            <p className="text-[13px] font-[600] text-[#121417]">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insights;
