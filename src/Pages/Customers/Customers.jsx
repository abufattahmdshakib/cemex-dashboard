import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import CustomersChart from './CustomersChart';
import CustomerList from './CustomerList';
import RevenueShare from './RevenueShare';
import Insights from './Insights';
import DayPicker from '../../Components/DayPicker/DayPicker';

const Customers = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [dateRange, setDateRange] = useState([]);
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setOpenCalendar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    const getDisplayDate = () => {
        if (dateRange.length === 2) {
            return `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`;
        } else if (dateRange.length === 1) {
            return formatDate(dateRange[0]);
        } else {
            return "Select Date Range";
        }
    };

    return (
        <div>
            <div className="mt-5 flex justify-between ">
                {/* Customers */}
                <div>
                    <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">
                        Customers
                    </h1>
                </div>

                {/* Export & Calendar Button */}
                <div className="flex items-center gap-4">
                    {/* New Order */}
                    <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-44 flex items-center justify-center gap-2 py-2 px-4">
                        <FaPlus className="w-3 h-3" /> Create Customer
                    </p>

                    {/* Calendar Dropdown */}
                    <div className="relative" ref={calendarRef}>
                        <button
                            onClick={() => setOpenCalendar(!openCalendar)}
                            className="montserrat-fontsfamily border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500] cursor-pointer"
                        >
                            {getDisplayDate()}{" "}
                            <span className="text-[#757575] text-[20px]">
                                <MdOutlineDateRange />
                            </span>
                        </button>

                        {openCalendar && (
                            <div className="absolute right-0 mt-2 shadow-2xl border-[#DBE0E5] border-[1px] bg-white rounded-2xl z-40">
                                <div className="w-[700px] max-w-full h-[350px] p-4">
                                    <DayPicker dateRange={dateRange} setDateRange={setDateRange} />
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
            <div className='my-6'>
                <Insights />
            </div>
        </div>
    );
};

export default Customers;
