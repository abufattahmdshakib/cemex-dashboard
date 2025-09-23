import React from 'react';
import Insights from '../../Components/Insights/Insights';
import OrderList from '../../Pages/Orders/OrderList';
import CustomerList from '../Customers/CustomerList';
import CustomerSegment from './CustomerSegment';
import PerformanceDashboard from './PerformanceDashboard';
import RevenueShare from './RevenueShare';
import DashboardCards from '../Dashboard/Dashboardpage/DashboardCards ';
import ServiceAreaCharts from './ServiceAreaCharts';

const ServiceArea = () => {
    return (
        <div>
            ServiceArea
            <div className='my-8'>
                <DashboardCards />
            </div>
            <div className='my-8'>
                <ServiceAreaCharts />
            </div>
            <div className="my-8">
                <RevenueShare />
            </div>
            <div className="my-8">
                <PerformanceDashboard />
            </div>
            <div className="my-8">
                <CustomerSegment />
            </div>
            <div className="my-8">
                <CustomerList />
            </div>
            <div className="my-8">
                <OrderList />
            </div>
            <div className='my-6'>
                <Insights />
            </div>
        </div>
    );
};

export default ServiceArea;
