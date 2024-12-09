import React from 'react';
import { format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

interface CalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange }) => {
  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDate),
    end: endOfWeek(selectedDate)
  });

  return (
    <div className="flex items-center space-x-4">
      {weekDays.map((day) => (
        <button
          key={day.toString()}
          onClick={() => onDateChange(day)}
          className={`flex flex-col items-center p-2 rounded-lg ${
            format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          <span className="text-sm font-medium">{format(day, 'EEE')}</span>
          <span className="text-2xl font-semibold">{format(day, 'd')}</span>
        </button>
      ))}
    </div>
  );
};

export default Calendar;