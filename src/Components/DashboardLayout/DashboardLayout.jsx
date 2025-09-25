import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import FlashEffect from "../FlashEffect/FlashEffect";
import ChatAssistant from "../ChatAssistant/ChatAssistant";

const DashboardLayout = () => {
    return (
        <div className="flex flex-col h-screen">
              {/* Global flash system */}
                  <FlashEffect />
            {/* Navbar always at top full width */}
            <div className="montserrat-fontsfamily fixed top-0 left-0 right-0 z-50 h-20">
                <Navbar />
            </div>

            {/* Main Section */}
            <div className="montserrat-fontsfamily flex flex-1 pt-20">
                {/* Sidebar starts just below Navbar */}
                <div className="hide-scrollbar w-64 mx-auto fixed top-20 left-0 h-[calc(100%-90px)] bg-white overflow-y-auto">
                    <Sidebar />
                </div>

                {/* Main content (scrollable) */}
                <div className="montserrat-fontsfamily hide-scrollbar flex-1 ml-64 overflow-y-auto p-6 bg-[#FFFFFF] scrollbar-none">
                    <Outlet />
                </div>
                <div>
                    <ChatAssistant /> 
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;
