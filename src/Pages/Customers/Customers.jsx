import React, { useRef, useState } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import dayPicker from "../../../src/assets/Day Picker.svg";
import CustomersChart from './CustomersChart';
import CustomerList from './CustomerList';
import RevenueShare from './RevenueShare';

const Customers = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const calendarRef = useRef(null);
    return (
        <div>
            <div className="mt-5 flex justify-between">
                {/* Welcome */}
                <div>
                    <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">
                        Customers
                    </h1>
                </div>

                {/* Export & Calendar Button */}
                <div className="flex items-center gap-4">
                    {/* New Order */}
                    <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-44 flex items-center justify-center gap-2 py-2 px-4 cursor-pointer">
                        <FaPlus className="w-3 h-3" /> Create Customer
                    </p>

                    {/* Calendar Dropdown */}
                    <div data-flash className="relative" ref={calendarRef}>
                        <button
                            onClick={() => setOpenCalendar(!openCalendar)}
                            className="montserrat-fontsfamily bg-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500]"
                        >
                            Nov 25, 2023 - Oct 31, 2024{" "}
                            <span className="text-[#757575] text-[20px]">
                                <MdOutlineDateRange />
                            </span>
                        </button>

                        {openCalendar && (
                            <div className="absolute right-5 mt-8 shadow-xl rounded-2xl z-50">
                                <div className="w-[650px] max-w-full h-[300px]">
                                    <img
                                        src={dayPicker}
                                        alt="Day Picker"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <CustomersChart />
            </div>
            <div className='my-8'>
                <CustomerList />
            </div>
            <div className='my-8'>
                <RevenueShare />
            </div>
        </div>
    );
};

export default Customers;