import React, { useRef, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import documenticon from "../../../src/assets/document-download.svg";
import dayPicker from "../../../src/assets/Day Picker.svg";
import ManagePageDataRow from "./ManagePageDataRow";

const ServiceAreaManage = ({ visiblePages, setVisiblePages }) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const calendarRef = useRef(null);

    return (
        <div>
            {/* Top Bar */}
            <div className="flex justify-between items-center">
                <h1 className="montserrat-fontsfamily text-[32px] text-[#1D3557] font-[700]">
                    Service Area
                </h1>

                <div className="flex items-center gap-4">
                    {/* Manage Page Data Dropdown Button */}
                    <ManagePageDataRow
                        visiblePages={visiblePages}
                        setVisiblePages={setVisiblePages}
                    />

                    {/* Export CSV */}
                    <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-38 flex items-center justify-center gap-2 py-2 px-4">
                        Export CSV <img src={documenticon} alt="download" />
                    </p>

                    {/* Date Picker */}
                    <div className="relative" ref={calendarRef}>
                        <button
                            onClick={() => setOpenCalendar(!openCalendar)}
                            className="montserrat-fontsfamily border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500] cursor-pointer"
                        >
                            Nov 25, 2023 - Oct 31, 2024
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
    );
};

export default ServiceAreaManage;
