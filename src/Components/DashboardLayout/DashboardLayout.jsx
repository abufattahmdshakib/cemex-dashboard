import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Navbar/Sidebar';

const DashboardLayout = () => {
    return (
       <div className="flex flex-col h-screen">
            {/* Top Navbar */}
            <Navbar />

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Right Main Content */}
                <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;