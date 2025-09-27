import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconlogo from "../../../src/assets/Vector.svg";
import search from "../../../src/assets/search-normal.svg";
import notification from "../../../src/assets/notification-bing.svg";
import Logout from "../../../src/assets/logout.svg";
import Settings from "../../../src/assets/setting-2.svg";
import user from "../../../src/assets/dropuser.svg";
import Inbox from "../../../src/assets/direct-inbox.svg";
import { BsStars } from "react-icons/bs";
import { FaUserEdit, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [aiHidden, setAiHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/AiAssistant") {
      setAiHidden(true);
    } else {
      setAiHidden(false);
    }
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b-2 border-[#DBE0E5]">
      <div className="w-full h-20 bg-[#FFFFFF] flex items-center justify-between px-6 shadow-md">
        {/* Left */}
        <div className="flex items-center gap-2">
          <img className="w-[24px]" src={iconlogo} alt="" />
          <h1 className="montserrat-fontsfamily text-[30px] font-[700] text-[#1D3557]">
            Cemex
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 relative">
          {/* Icon group */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ease-in-out
      ${aiHidden ? "translate-x-52" : "translate-x-0"}`}
          >
            {/* Search */}
            <div className="relative overflow-visible cursor-pointer">
              <div
                className={`flex items-center bg-[#F0F2F5] rounded-md transition-all duration-500 overflow-hidden
          ${showSearch ? "w-60 px-2" : "w-[48px]"}`}
              >
                <button
                  onClick={() => setShowSearch((prev) => !prev)}
                  className={`text-[22px] cursor-pointer font-[800] text-[#121417] transition-all duration-500
            ${showSearch ? "ml-2 mr-2" : "mx-auto"}`}
                >
                  <img className="w-[24px] cursor-pointer" src={search} alt="" />
                </button>
                <input
                  type="text"
                  placeholder="Search here"
                  className={`montserrat-fontsfamily cursor-pointer bg-[#F0F2F5] text-[#121417] py-3 outline-none transition-all duration-500
            ${showSearch ? "flex-1 text-left pr-2 w-[24px]" : "w-0 opacity-0"}`}
                  autoFocus={showSearch}
                />
              </div>
            </div>

            {/* Notification */}
            <button className="text-[22px] font-[800] bg-[#F0F2F5] p-3 rounded-md text-[#121417]">
              <img className="w-[24px]" src={notification} alt="" />
            </button>

            {/* Inbox */}
            <button className="text-[22px] bg-[#F0F2F5] p-3 rounded-md text-[#121417]">
              <img className="w-[24px]" src={Inbox} alt="" />
            </button>

            {/* AI Assistant */}
            <div
              onClick={() => navigate("/AiAssistant")}
              className={`montserrat-fontsfamily flex items-center gap-2 bg-gradient-to-r from-[#6A0DAD] to-[#FF5C93] 
        px-4 py-[6px] rounded-md text-[22px] font-medium text-[#FFFFFF] transform 
        transition-all duration-700 ease-in-out cursor-pointer
        ${aiHidden ? "translate-x-20 opacity-0 pointer-events-none" : "translate-x-0 opacity-100"}`}
            >
              <BsStars />
              AI Assistant
            </div>
          </div>

          {/* User with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="montserrat-fontsfamily cursor-pointer text-[24px] font-[700] bg-[#F0F2F5] py-[5px] px-4 rounded-md text-[#1D3557]"
            >
              R
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-[8px] shadow-lg p-6 z-50 animate-fade-in">
                <div className="mb-3 border-b border-gray-200 pb-3">
                  <h2 className="text-[18px] font-[600] text-[#1D3557]">Mr. Rahman</h2>
                  <p className="text-[12px] font-[500] text-[#757575]">CEO of Cemex</p>
                  <p className="text-[14px] font-[500] text-[#121417]">rahman@cemex.com</p>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-center gap-4 text-[#121417]  text-[14px] font-[500] transition border-t border-[#DBE0E5] pt-2">
                    <span><img src={user} alt="" /></span> Profile Edit
                  </li>
                  <li className="flex items-center gap-4 text-[#121417]  text-[14px] font-[500] transition border-t border-[#DBE0E5] pt-2">
                    <span><img src={Settings} alt="" /></span> Settings
                  </li>
                  <li className="flex items-center gap-4 text-[#E74C3C] text-[14px] font-[500] transition border-t border-[#DBE0E5] pt-2">
                    <span><img src={Logout} alt="" /></span> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
