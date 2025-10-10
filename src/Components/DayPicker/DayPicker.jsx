import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

const DayPicker = ({ dateRange, setDateRange }) => {
  const [baseDate] = useState(new Date());
  const [monthOffsets, setMonthOffsets] = useState([0, 1]);
  const [yearState, setYearState] = useState([
    baseDate.getFullYear(),
    baseDate.getFullYear(),
  ]);
  const [openYearSelector, setOpenYearSelector] = useState(null);

  const toLocalDateString = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).toLocaleDateString("en-CA");

  const handleDateClick = (date) => {
    const dateStr = toLocalDateString(date);

    if (dateRange.length === 2) return setDateRange([dateStr]);
    if (dateRange.length === 0) return setDateRange([dateStr]);

    const firstDate = new Date(dateRange[0]);
    const secondDate = date;

    if (secondDate >= firstDate) {
      setDateRange([dateRange[0], dateStr]);
    } else {
      setDateRange([dateStr, dateRange[0]]);
    }
  };

  const generateCalendar = (offset, year, calendarIndex) => {
    const current = new Date(year, baseDate.getMonth() + offset, 1);
    const weeks = [];
    const firstDay = current.getDay();
    const daysInMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();

    let day = 1;
    for (let week = 0; week < 6; week++) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        if ((week === 0 && i < firstDay) || day > daysInMonth) {
          days.push(
            <td key={`empty-${week}-${i}`} className="p-2 text-[#121417]"></td>
          );
        } else {
          const dateObj = new Date(current.getFullYear(), current.getMonth(), day);
          const dateStr = toLocalDateString(dateObj);

          const isStart = dateRange.length > 0 && dateStr === dateRange[0];
          const isEnd = dateRange.length > 1 && dateStr === dateRange[1];
          const isInRange =
            dateRange.length === 2 &&
            new Date(dateRange[0]) < dateObj &&
            dateObj < new Date(dateRange[1]);

          let cellClass = "cursor-pointer text-[14px] font-[500] px-3 py-1 text-center transition-colors ";

          if (isStart) {
            cellClass += "bg-[#6A0DAD] text-white font-[600] rounded-l-2xl";
          } else if (isEnd) {
            cellClass += "bg-[#6A0DAD] text-white font-[600] rounded-r-2xl";
          } else if (isInRange) {
            cellClass += "bg-[#E8DEEE] text-[#121417]";
            if (i === 0) {
              cellClass += " rounded-l-full";
            }
            if (i === 6 || day === daysInMonth) {
              cellClass += " rounded-r-full";
            }
          } else {
            cellClass += "text-[#121417]";
          }

          days.push(
            <td
              key={`${week}-${i}`}
              onClick={(e) => {
                e.stopPropagation();
                handleDateClick(dateObj);
              }}
              className={cellClass}
            >
              {day}
            </td>
          );

          day++;
          if (day > daysInMonth) break;
        }
      }
      weeks.push(
        <tr key={`week-${week}`} className="bg-transparent">
          {days}
        </tr>
      );
    }
    return { weeks, current };
  };

  const renderMonth = (index) => {
    const { weeks, current } = generateCalendar(monthOffsets[index], yearState[index], index);
    const years = Array.from({ length: 26 }, (_, i) => 2000 + i);
    const isDropdownOpen = openYearSelector === index;

    return (
      <div className="montserrat-fontsfamily relative px-3 py-2 w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 relative">
          <div
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => setOpenYearSelector(isDropdownOpen ? null : index)}
          >
            <h3 className="text-[16px] text-[#121417] font-[600]">
              {current.toLocaleString("default", { month: "short" })} {yearState[index]}
            </h3>
            <FaChevronDown
              className={`transition-transform duration-200 text-[#757575] ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </div>

          <div className="flex gap-1">
            <button
              onClick={() =>
                setMonthOffsets((prev) =>
                  prev.map((off, i) => (i === index ? off - 1 : off))
                )
              }
              className="p-2 cursor-pointer rounded text-[#757575] hover:bg-gray-200"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() =>
                setMonthOffsets((prev) =>
                  prev.map((off, i) => (i === index ? off + 1 : off))
                )
              }
              className="p-2 cursor-pointer rounded text-[#757575] hover:bg-gray-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Year Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-14 left-4 bg-white border-gray-300 border rounded shadow-md z-10 w-32 max-h-48 overflow-y-auto">
            {years.map((year) => (
              <div
                key={year}
                onClick={() => {
                  const newYears = [...yearState];
                  newYears[index] = year;
                  setYearState(newYears);
                  setOpenYearSelector(null);
                }}
                className={`p-2 text-center text-black cursor-pointer hover:bg-purple-100 ${year === yearState[index] ? "bg-purple-200 font-semibold" : ""
                  }`}
              >
                {year}
              </div>
            ))}
          </div>
        )}

        {/* Calendar */}
        <table className="border-separate border-spacing-y-2 w-full text-center">
          <thead>
            <tr className="text-[14px] font-[600] text-[#757575]">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <th key={day} className="p-1">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{weeks}</tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="montserrat-fontsfamily flex gap-4 relative">
      <div className="flex-1">
        {renderMonth(0)}
      </div>

      {/* Divider for first calendar only */}
      <div className="border-r-[1px] border-[#DBE0E5]"></div>

      <div className="flex-1">
        {renderMonth(1)}
      </div>
    </div>
  );
};

export default DayPicker;
