import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import FlashEffect from "../FlashEffect/FlashEffect";

const DashboardLayout = () => {
    return (
        <div className="flex flex-col h-screen">
              {/* Global flash system */}
                  <FlashEffect />
            {/* Navbar always at top full width */}
            <div className="fixed top-0 left-0 right-0 z-50 h-20">
                <Navbar />
            </div>

            {/* Main Section */}
            <div className="flex flex-1 pt-20">
                {/* Sidebar starts just below Navbar */}
                <div className="w-64 mx-auto fixed top-20 left-0 h-[calc(100%-90px)] border-r border-gray-200 bg-white overflow-y-auto">
                    <Sidebar />
                </div>

                {/* Main content (scrollable) */}
                <div className="flex-1 ml-64 overflow-y-auto p-6 bg-[#FFFFFF] scrollbar-none">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;
