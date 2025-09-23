import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import documenticon from "../../../src/assets/document-download.svg";
import dayPicker from "../../../src/assets/Day Picker.svg";
import ManagePageData from './ManagePageData';

const cities = [
    "All", "Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna",
];

const ServiceAreaManage = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [selectedCity, setSelectedCity] = useState("All"); // <-- top-level state
    const calendarRef = useRef(null);

    // Close dropdown if clicked outside
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

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">
                    Service Area
                </h1>
                <div>
                    {/* Export & Calendar Button */}
                    <div className="flex items-center gap-2">
                        {/* Export CSV */}
                        <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-38 flex items-center justify-center gap-2 py-2 px-4 cursor-pointer">
                            Export CSV{" "}
                            <span>
                                <img src={documenticon} alt="download" />
                            </span>
                        </p>
                        <div>
                            <ManagePageData />
                        </div>
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
            </div>

            {/* City Buttons */}
            <div className="flex justify-start gap-4 py-7 border-y-1 border-[#DBE0E5] my-5">
                {cities.map((city) => (
                    <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`px-4 py-2 rounded text-[12px] font-[500] ${selectedCity === city
                            ? "bg-[#1D3557] text-white border-[#1D3557]"
                            : "bg-[#F0F2F5] text-[#121417] border-[#F0F2F5]"
                            }`}
                    >
                        {city}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default ServiceAreaManage;
