import React, { useState } from "react";
import ServiceAreaManage from "./ServiceAreaManage";
import DashboardCards from "./DashboardCards";
import ServiceAreaCharts from "./ServiceAreaCharts";
import SellingProduct from "./SellingProduct";
import RevenueShare from "./RevenueShare";
import PerformanceDashboard from "./PerformanceDashboard";
import CustomerSegment from "./CustomerSegment";
import CustomerList from "../Customers/CustomerList";
import OrderList from "../Orders/OrderList";
import Insights from "../../Components/Insights/Insights";
import ManagePageData from "./ManagePageData";

const ServiceArea = () => {
    const [visiblePages, setVisiblePages] = useState({
        serviceAreaManage: true,
        dashboardCards: true,
        serviceAreaCharts: true,
        sellingProduct: true,
        revenueShare: true,
        performanceDashboard: true,
        customerSegment: true,
        customerList: true,
        orderList: true,
        insights: true,
    });

    const [selectedCity, setSelectedCity] = useState("Dhaka");

    return (
        <div className="p-6 space-y-8">
            {/* Manage Section */}
            {visiblePages.serviceAreaManage && (
                <ServiceAreaManage
                    visiblePages={visiblePages}
                    setVisiblePages={setVisiblePages}
                />
            )}

            {/* Dashboard Cards */}
            {visiblePages.dashboardCards && (
                <DashboardCards
                    cardData={ManagePageData[selectedCity]}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                />
            )}

            {/* Conditional Sections */}
            {visiblePages.serviceAreaCharts && <ServiceAreaCharts />}
            {visiblePages.sellingProduct && <SellingProduct />}
            {visiblePages.revenueShare && <RevenueShare />}
            {visiblePages.performanceDashboard && <PerformanceDashboard />}
            {visiblePages.customerSegment && <CustomerSegment />}
            {visiblePages.customerList && <CustomerList />}
            {visiblePages.orderList && <OrderList />}
            {visiblePages.insights && <Insights />}
        </div>
    );
};

export default ServiceArea;
