import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Focus from "../../../../src/assets/graph.svg";
import Upsell from "../../../../src/assets/health.svg";
import Growth from "../../../../src/assets/chart.svg";
import Churn from "../../../../src/assets/trend-up.svg";
import Retention from "../../../../src/assets/trend-down.svg";

const cardData = [
  {
    img: Focus,
    title: "Focus o high-growth segments",
    description:
      "Invest in expanding to new market & customer segment.",
  },
  {
    img: Upsell,
    title: "Upsell opportunities",
    description:
      "Invest in expanding to new market & customer segment.",
  },
  {
    img: Growth,
    title: "MRR growth rate",
    description:
      "Monthly Recurring Revenue (MRR) is growing at a rate of 3% per month.",
  },
  {
    img: Churn,
    title: "Churn rate",
    description:
      "Churn rate is 2.5%, which is higher than the industry average.",
  },
  {
    img: Retention,
    title: "Net retention rate",
    description:
      "Net Retention Rate (NRR) is 110%, indicating that existing customers are spending 10% more than last year.",
  },
];

const actionsData = [
  {
    title: "Upsell to customers with high LTV",
    description:
      "Customers with high Lifetime Value (LTV) are 20% more likely to purchase an upsell.",
  },
  {
    title: "Expand to new markets",
    description:
      "New markets have a 15% higher growth potential compared to existing ones.",
  },
  {
    title: "Reduce churn by improving product adoption",
    description:
      "Improving product adoption can reduce churn by 30%.",
  },
  {
    title: "Increase prices for high-value features",
    description:
      "High-value features have a 25% price elasticity, allowing for a 10% increase.",
  },
  {
    title: "Invest in customer success programs",
    description:
      "Investing in customer success programs can lead to a 20% reduction in churn.",
  },
];

const AIAssistantCardOne = () => {
  return (
    <div>
      {/* section one */}
      <div className="montserrat-fontsfamily grid grid-cols-5 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col items-start gap-4 border border-[#DBE0E5]"
          >
            <img src={card.img} alt={card.title} className="w-9 h-9" />
            <h3 className="text-[#121417] text-[14px] font-semibold leading-[150%] font-sans">
              {card.title}
            </h3>
            <p className="text-[#757575] text-[12px] font-medium leading-[150%] font-sans">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* section two */}
      <div className=" montserrat-fontsfamily">
        <h1 className="text-[#1D3557] text-[22px] font-[700] my-6">
          AI-Driven Actions
        </h1>

        <div className="flex flex-col gap-2">
          {actionsData.map((action, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 py-4 border-t border-[#DBE0E5]"
            >
              {/* Left: title + description inline */}
              <div className="flex items-center ">
                <div className="flex justify-between items-center gap-15">
                  <h3 className="text-[#121417] text-[14px] font-[500]  border-b border-[#121417] w-52 mx-auto text-left">
                    {action.title}
                  </h3>
                  <p className="text-[#757575] text-[14px] font-[500] text-right">
                    {action.description}
                  </p>
                </div>
              </div>

              {/* Right: icon */}
              <BsArrowUpRight className="text-[#121417] font-[800] text-[18px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAssistantCardOne;
