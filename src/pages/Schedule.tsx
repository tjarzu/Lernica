import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Bell } from 'lucide-react';
import Calendar from '../components/schedule/Calendar';
import TimeSlot from '../components/schedule/TimeSlot';

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const scheduleEvents = [
    {
      time: '10:00',
      event: {
        title: 'UX Research Class',
        type: 'class',
        participants: ['user1', 'user2', 'user3'],
        startTime: '10:00 am',
        duration: '1h 30m'
      }
    },
    {
      time: '12:00',
      event: {
        title: 'App Development Course',
        type: 'class',
        participants: ['user1', 'user2'],
        startTime: '12:00 pm',
        duration: '2h'
      }
    },
    {
      time: '14:00',
      event: {
        title: 'Figma UI/UX Workshop',
        type: 'workshop',
        participants: ['user1', 'user2'],
        startTime: '2:00 pm',
        duration: '1h 30m'
      }
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">My Schedule</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + New Upload
            </button>
            <button className="p-2 relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-medium">02 - 08 March</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <select className="px-4 py-2 border rounded-lg">
              <option>(GMT +06:00) Public Time</option>
            </select>
          </div>

          <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>

        <div className="space-y-6">
          {scheduleEvents.map((slot) => (
            <TimeSlot key={slot.time} {...slot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;