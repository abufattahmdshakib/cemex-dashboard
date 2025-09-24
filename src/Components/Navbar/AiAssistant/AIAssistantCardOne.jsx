import React from "react";
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

const AIAssistantCardOne = () => {
  return (
    <div>
      <div className="montserrat-fontsfamily grid grid-cols-5 gap-6 p-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col items-start gap-4 border border-[#DBE0E5]"
          >
            {/* Image */}
            <img src={card.img} alt={card.title} className="w-9 h-9" />

            {/* Title */}
            <h3 className="text-[#121417] text-[14px] font-semibold leading-[150%] font-sans">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-[#757575] text-[12px] font-medium leading-[150%] font-sans">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIAssistantCardOne;
