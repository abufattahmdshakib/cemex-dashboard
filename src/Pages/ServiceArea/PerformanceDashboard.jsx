import React from 'react';

const sectionOneData = [
    { id: 1, title: "Average Processing Time", value: "3.4 hours", change: "+10%" },
    { id: 2, title: "Average Delivery Time", value: "1.2 days", change: "+10%" },
    { id: 3, title: "Avg. Customer Satisfaction", value: "4.8", change: "+10%" },
];

const PerformanceDashboard = () => {
    return (
        <div className='montserrat-fontsfamily'>
            {/* Section One */}
            <div className="grid grid-cols-3 gap-6 my-8">
                {sectionOneData.map((card) => (
                    <div
                        key={card.id}
                        className="p-6 rounded-lg shadow-sm border border-[#DBE0E5] flex flex-col justify-between"
                    >
                        <h3 className="text-[#121417] font-[500] text-[16px]">{card.title}</h3>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-[24px] font-[700] text-[#1D3557]">{card.value}</p>
                            <p className="bg-[#EAFAF1] rounded-full text-[#2ECC71] text-[16px] py-1 px-3">
                                {card.change}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceDashboard;