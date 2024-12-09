import React from 'react';
import { Users } from 'lucide-react';

interface TimeSlotProps {
  time: string;
  event?: {
    title: string;
    type: 'class' | 'webinar' | 'workshop';
    participants?: string[];
    startTime: string;
    duration: string;
    platform?: string;
  };
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, event }) => {
  if (!event) {
    return (
      <div className="flex items-start">
        <span className="w-20 text-gray-500">{time}</span>
        <div className="flex-1 h-16 border-l border-dashed border-gray-200 ml-4"></div>
      </div>
    );
  }

  const getEventStyles = () => {
    switch (event.type) {
      case 'webinar':
        return 'bg-teal-100 text-teal-800';
      case 'workshop':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="flex items-start">
      <span className="w-20 text-gray-500">{time}</span>
      <div className={`flex-1 ml-4 p-4 rounded-lg ${getEventStyles()}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{event.title}</h3>
          {event.participants && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-sm">{event.participants.length}</span>
            </div>
          )}
        </div>
        <p className="text-sm mt-1">
          {event.startTime} • {event.duration}
        </p>
        {event.platform && (
          <div className="mt-2 text-sm">
            via {event.platform}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSlot;