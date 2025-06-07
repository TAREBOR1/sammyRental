import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const statusColors = {
  available: "bg-green-200 text-green-800",
  booked: "bg-red-200 text-red-800",
};

const Calendar = ({ availability }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const paddingDays = getDay(monthStart); // Sunday = 0

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  return (
   <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6 overflow-x-auto">

      {/* Header with month and nav */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPrevMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Weekday Labels */}
  
<div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm">

        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array(paddingDays)
          .fill(null)
          .map((_, i) => <div key={`pad-${i}`} />)}

        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const status = availability[dateStr];

          return (
            <div
              key={dateStr}
              className={clsx(
                "p-2 rounded-md border text-sm",
                status
                  ? statusColors[status]
                  : "bg-gray-100 text-gray-500"
              )}
            >
              <div>{format(day, "d")}</div>
              <div className="text-xs">{status || "n/a"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
