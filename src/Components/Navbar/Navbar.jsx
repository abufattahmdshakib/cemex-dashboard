import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineInboxIn } from "react-icons/hi";
import iconlogo from "../../../src/assets/Vector.svg"

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full h-20 bg-[#FFFFFF] flex items-center justify-between px-6 shadow-md">
      {/* Left side */}
      <div className="flex items-center gap-2">
        <img className="w-6" src={iconlogo} alt="" />
        <h1 className="montserrat-fontsfamily text-[30px] font-[700] text-[#1D3557]">
          Cemex
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 relative">
        {/* Search */}
        <div className="relative overflow-visible">
          <div
          onClick={() => setShowSearch((prev) => !prev)}
            className={`flex items-center bg-[#F0F2F5] rounded-md transition-all duration-500 overflow-hidden
              ${showSearch ? "w-60 px-2" : "w-[48px]"}`}
          >
            {/* Search Icon (moves position) */}
            <button
              className={`text-[22px] font-[800] text-[#121417] transition-all duration-500
                ${showSearch ? "ml-2 mr-2" : "mx-auto"}`}
            >
              <RiSearch2Line />
            </button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search here"
              className={`montserrat-fontsfamily bg-[#F0F2F5] text-[#121417] py-3 outline-none transition-all duration-500
                ${showSearch ? "flex-1 text-left pr-2" : "w-0 opacity-0"}`}
              autoFocus={showSearch}
            />
          </div>
        </div>

        {/* Notification */}
        <button className="text-[22px] font-[800] bg-[#F0F2F5] p-3 rounded-md text-[#121417]">
       <MdNotificationsNone />
        </button>

        {/* Inbox */}
        <button className="text-[22px] bg-[#F0F2F5] p-3 rounded-md text-[#121417]">
          <HiOutlineInboxIn />
        </button>

        {/* Action Button */}
        <button className="montserrat-fontsfamily flex items-center gap-2 bg-gradient-to-r from-[#6A0DAD] to-[#FF5C93] hover:opacity-90 px-4 py-[6px] rounded-md text-[22px] font-medium text-[#FFFFFF]">
          <span>
            <BsStars />
          </span>
          AI Assistant
        </button>

        {/* User */}
        <button className="montserrat-fontsfamily text-[24px] font-[700] bg-[#F0F2F5] py-[5px] px-4 rounded-md text-[#1D3557]">
          R
        </button>
      </div>
    </div>
  );
};

export default Navbar;
