import React from "react";

const cities = [
  "Dhaka", "Sylhet", "Chattogram", "Barisal", "Mymensingh", "Rajshahi", "Rangpur", "Khulna",
];

const DashboardCards = ({ cardData = [], selectedCity, setSelectedCity }) => {
  return (
    <div>
      {/* City Buttons */}
      <div className="flex justify-start gap-4 py-7 border-y-1 border-[#DBE0E5] my-5">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-4 py-2 rounded text-[12px] font-[500] cursor-pointer ${
              selectedCity === city
                ? "bg-[#1D3557] text-white border-[#1D3557]"
                : "bg-[#F0F2F5] text-[#121417] border-[#F0F2F5]"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-4 gap-6 my-8">
        {cardData && cardData.length > 0 ? (
          cardData.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-lg shadow-md border-[#DBE0E5] border flex flex-col justify-between"
            >
              <h3 className="montserrat-fontsfamily text-[#121417] font-[500] text-[16px]">
                {card.title}
              </h3>
              <div className="flex justify-between items-center">
                <p className="montserrat-fontsfamily text-[24px] font-[700] text-[#1D3557]">
                  {card.value}
                </p>
                <p className="montserrat-fontsfamily bg-[#EAFAF1] rounded-full text-[#2ECC71] text-[16px] py-1 px-3">
                  {card.change}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            No data available for {selectedCity}
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardCards;
