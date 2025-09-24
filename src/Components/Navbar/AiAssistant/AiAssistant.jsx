import React from 'react';
import documenticon from "../../../../src/assets/document-download.svg";
import AIAssistantCardOne from './AIAssistantCardOne';
import UnusualCost from './UnusualCost';
import CustomerClusters from './CustomerClusters';
import MarketingInsights from './MarketingInsights';
import NewCampaign from './NewCampaign';

const AiAssistant = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center mt-5'>
                    <h1 className="montserrat-fontsfamily text-[32px] font-[700] bg-gradient-to-r from-[#6A0DAD] to-[#FF5C93] bg-clip-text text-transparent">
                        AI Assistant
                    </h1>
                    {/* Export CSV */}
                    <p className="montserrat-fontsfamily text-white font-semibold text-[14px] rounded-[8px] bg-[#1D3557] w-38 flex items-center justify-center gap-2 py-2 px-4 cursor-pointer">
                        Export CSV{" "}
                        <span>
                            <img src={documenticon} alt="download" />
                        </span>
                    </p>
                </div>
                <p
                    className="text-[14px] font-medium italic leading-[150%] text-[#1D3557] montserrat-fontsfamily p-5 text-left bg-[#F0F2F5] rounded-[12px] my-8"
                >
                    Hello, Mr. Rahman. I’m your AI Assistant, and I’ve prepared a quick overview of your current business performance. I’ve also put together some helpful insights and recommendations to support your business growth and optimize your strategy. Let’s dive in and see how we can take things to the next level!
                </p>
            </div>
            <div className='mt-8'>
                <AIAssistantCardOne />
            </div>
            <div className='mt-8'>
                <UnusualCost />
            </div>
            <div className='mt-8'>
                <CustomerClusters />
            </div>
            <div className='mt-8'>
                <MarketingInsights />
            </div>
            <div className='my-8'>
                <NewCampaign />
            </div>

        </div>
    );
};

export default AiAssistant;