import React, { useState, useRef, useEffect } from 'react';
import documenticon from '../../../../src/assets/document-download.svg';
import dayPicker from '../../../../src/assets/Day Picker.svg'
import { MdOutlineDateRange } from "react-icons/md";
import DashboardCards from '../Dashboardpage/DashboardCards ';
import DashboardCharts from '../Dashboardpage/DashboardCharts ';
import ProfitMargin from '../Dashboardpage/ProfitMargin';
import PerformanceDashboard from '../Dashboardpage/PerformanceDashboard';
import DivisionalSales from '../Dashboardpage/DivisionalSales';
import Insights from '../../../Components/Insights/Insights';

const Home = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const calendarRef = useRef(null);

    // Click outside close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (calendarRef.current && !calendarRef.current.contains(e.target)) {
                setOpenCalendar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div>
            <div className="mt-5 flex justify-between ">
                {/* Welcome */}
                <div className="">
                    <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">Welcome back, Cemex!</h1>
                    <p className="montserrat-fontsfamily text-[#757575] text-[14px] font-[500]">Here's a summary of your business</p>
                </div>

                {/* Export & Calendar Button */}
                <div className="flex items-center gap-4">
                    {/* Export CSV */}
                    <p className='montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-38 flex items-center justify-center gap-2 py-3 px-4 cursor-pointer'>
                        Export CSV <span><img src={documenticon} alt="download" /></span>
                    </p>

                    {/* Calendar Dropdown */}
                    <div data-flash className="relative" ref={calendarRef}>
                        <button
                            onClick={() => setOpenCalendar(!openCalendar)}
                            className="montserrat-fontsfamily bg-[#DBE0E5] px-4 py-3 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500]"
                        >
                            Nov 25, 2023 - Oct 31, 2024 <span className='text-[#757575] text-[20px]'><MdOutlineDateRange /></span>
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
                <DashboardCards />
            </div>
            <div className='my-6'>
                <DashboardCharts />
            </div>
            <div className='my-6'>
                <ProfitMargin />
            </div>
            <div className='my-6'>
                <PerformanceDashboard />
            </div>
            <div className='my-6'>
                <DivisionalSales />
            </div>
            <div className='my-6'>
                <Insights />
            </div>
        </div>
    );
};

export default Home;
