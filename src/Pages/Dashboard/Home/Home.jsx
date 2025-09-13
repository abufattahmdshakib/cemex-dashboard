import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import DashboardCards from '../Dashboardpage/DashboardCards ';
import DashboardCharts from '../Dashboardpage/DashboardCharts ';
import ProfitMargin from '../Dashboardpage/ProfitMargin';
import PerformanceDashboard from '../Dashboardpage/PerformanceDashboard';
import DivisionalSales from '../Dashboardpage/DivisionalSales';
import Insights from '../../../Components/Insights/Insights';
import WelcomeSection from './WelcomeSection';

const Home = () => {
    return (
        <div>
            <div className='my-8'>
                <WelcomeSection />
            </div>
            <div className='my-8'>
                <DashboardCards />
            </div>
            <div className='my-6'>
                <DashboardCharts />
            </div>
            <div className='my-6'>
                <ProfitMargin />
            </div>
            <div className='my-6'>
                <PerformanceDashboard />
            </div>
            <div className='my-6'>
                <DivisionalSales />
            </div>
            <div className='my-6'>
                <Insights />
            </div>
        </div>
    );
};

export default Home;
