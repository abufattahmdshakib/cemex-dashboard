import React, { useEffect, useRef, useState } from 'react';
import Efficiency from './Efficiency';
import { MdOutlineDateRange } from "react-icons/md";
import { FaCheck, FaChevronDown } from "react-icons/fa"; // check + dropdown icon
import documenticon from "../../../src/assets/document-download.svg";
import dayPicker from "../../../src/assets/Day Picker.svg";

const Reports = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const calendarRef = useRef(null);

    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Report options
    const reportOptions = [
        "Highest Selling Product Report",
        "Divisional Sales and Growth Potential Report",
        "Revenue Share Report",
        "Orders by Customer Segment Report",
        "Revenue Growth Forecast Report",
        "Operational Efficiency Metrics",
        "Profit Margin by Segment Report",
    ];

    // default selected
    const [selectedReport, setSelectedReport] = useState(
        "Divisional Sales and Growth Potential Report"
    );

    // Close calendar & dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setOpenCalendar(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='my-5'>
            <div>
                {/* Welcome */}
                <div>
                    <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">
                        Reports
                    </h1>
                    <p className="montserrat-fontsfamily text-[#757575] text-[14px] font-[500]">
                        Select a report and date to view the results
                    </p>
                </div>

                {/* Dropdown + Calendar + Export */}
                <div  className='flex justify-between items-center mt-8'>

                    {/* Report Dropdown */}
                    <div className="relative w-[450px]" ref={dropdownRef}>
                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="montserrat-fontsfamily cursor-pointer border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center justify-between gap-2 text-[#121417] text-[14px] font-[500] w-full"
                        >
                            {selectedReport}
                            <FaChevronDown
                                className={`text-[#121417] text-[14px] transform transition-transform duration-300 ${openDropdown ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {openDropdown && (
                            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-[8px] shadow-lg z-50">
                                {reportOptions.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => {
                                            setSelectedReport(option);
                                            setOpenDropdown(false);
                                        }}
                                        className={`px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-[14px] font-[500] ${selectedReport === option
                                                ? "text-[#121417] text-[14px] font-[700]"
                                                : "text-[#121417] font-[400]"
                                            }`}
                                    >
                                        {option}
                                        {selectedReport === option && (
                                            <FaCheck className="text-[#121417]" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Export & Calendar Button */}
                    <div className="flex items-center gap-4">
                        {/* Calendar Dropdown */}
                        <div className="relative" ref={calendarRef}>
                            <button
                                onClick={() => setOpenCalendar(!openCalendar)}
                                className="cursor-pointer montserrat-fontsfamily border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500]"
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

                        {/* Export CSV */}
                        <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-38 flex items-center justify-center gap-2 py-2 px-4 cursor-pointer">
                            Export CSV{" "}
                            <span>
                                <img src={documenticon} alt="download" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <Efficiency />
            </div>
        </div>
    );
};

export default Reports;
