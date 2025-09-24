import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import iconlogo from "../../../src/assets/Vector.svg";
import search from "../../../src/assets/search-normal.svg";
import notification from "../../../src/assets/notification-bing.svg";
import Inbox from "../../../src/assets/direct-inbox.svg";
import { BsStars } from "react-icons/bs";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [aiHidden, setAiHidden] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/AiAssistant") {
      setAiHidden(true);
    } else {
      setAiHidden(false);
    }
  }, [location]);

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
            <div className="relative overflow-visible">
              <div
                data-flash
                className={`flex items-center bg-[#F0F2F5] rounded-md transition-all duration-500 overflow-hidden
          ${showSearch ? "w-60 px-2" : "w-[48px]"}`}
              >
                <button
                  onClick={() => setShowSearch((prev) => !prev)}
                  className={`text-[22px] font-[800] text-[#121417] transition-all duration-500
            ${showSearch ? "ml-2 mr-2" : "mx-auto"}`}
                >
                  <img className="w-[24px]" src={search} alt="" />
                </button>
                <input
                  type="text"
                  placeholder="Search here"
                  className={`montserrat-fontsfamily bg-[#F0F2F5] text-[#121417] py-3 outline-none transition-all duration-500
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
            <div data-flash
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

          {/* User */}
          <button
            data-flash
            className="montserrat-fontsfamily text-[24px] font-[700] bg-[#F0F2F5] py-[5px] px-4 rounded-md text-[#1D3557]"
          >
            R
          </button>
        </div>

      </div>
    </div >
  );
};

export default Navbar;
