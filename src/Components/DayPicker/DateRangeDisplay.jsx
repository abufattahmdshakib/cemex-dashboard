import React from "react";

const DateRangeDisplay = ({ dateRange }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="montserrat-fontsfamily border-[1.5px] border-[#DBE0E5] px-4 py-2 rounded-[8px] flex items-center gap-2 text-[#121417] text-[14px] font-[500] cursor-pointer">
      {dateRange.length === 2
        ? `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`
        : dateRange.length === 1
        ? formatDate(dateRange[0])
        : "Select Date Range"}
    </div>
  );
};

export default DateRangeDisplay;
