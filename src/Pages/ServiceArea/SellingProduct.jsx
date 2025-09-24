import React from 'react';
const SellingProduct = () => {


    const data = [
        { name: 'Cemex Builder A1', value: 20000000, color: '#E8DEEE' },
        { name: 'Cemex Classic C1', value: 10000000, color: '#E8DEEE' },
        { name: 'Cemex Supreme S1', value: 1000000, color: '#E8DEEE' },
    ];

    const maxValue = 20000000;
    const ticks = [10000, 50000, 500000, 1000000, 10000000, 20000000];

    const formatValue = (value) => {
        if (value >= 1000000) {
            return `৳${(value / 1000000).toFixed(0)},000,000`;
        } else if (value >= 1000) {
            return `৳${(value / 1000).toFixed(0)},000`;
        } else {
            return `৳${value}`;
        }
    };

    return (
        <div className="w-full p-5 bg-white border shadow-md border-[#DBE0E5] rounded-[12px]">
            <h1 className="text-[16px] text-[#121417] text-left font-[700] mb-8">
                Highest Selling Product
            </h1>
            <div className="space-y-6">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        {/* Left side label */}
                        <div className="w-40 text-[12px] text-[#757575] font-[500] pl-6">
                            {item.name}
                        </div>

                        {/* Right side bar */}
                        <div className="flex-1 relative">
                            {/* Background track */}
                            <div className="w-full h-9"></div>

                            {/* Filled bar */}
                            <div
                                className="absolute top-0 left-0 h-8 transition-all duration-500 ease-out"
                                style={{
                                    width: `${(item.value / maxValue) * 100}%`,
                                    backgroundColor: item.color,
                                }}
                            ></div>

                            {/* End marker */}
                            <div
                                className="absolute top-0 w-[2px] h-8 bg-[#6A0DAD] "
                                style={{ left: `${(item.value / maxValue) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* X-axis labels */}
            <div className="relative mt-6 h-6">
                <div className="absolute inset-0 flex justify-between left-44 text-[12px] text-[#757575] font-[600]">
                    {ticks.map((tick, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-center">{formatValue(tick)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SellingProduct;