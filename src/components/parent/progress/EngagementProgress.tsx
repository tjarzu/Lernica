import React from 'react';
import { Target, Users, Clock, Award } from 'lucide-react';

interface EngagementMetric {
  title: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

const EngagementProgress: React.FC = () => {
  const metrics: EngagementMetric[] = [
    {
      title: 'Weekly Check-ins',
      value: 5,
      target: 7,
      trend: 'up',
      period: 'This Week'
    },
    {
      title: 'Family Activities',
      value: 3,
      target: 4,
      trend: 'stable',
      period: 'This Week'
    },
    {
      title: 'Parent-Teacher Chats',
      value: 2,
      target: 2,
      trend: 'up',
      period: 'This Week'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Engagement Progress</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{metric.title}</h3>
                <span className="text-sm text-gray-500">{metric.period}</span>
              </div>
              
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                <span className="text-sm text-gray-500">/ {metric.target}</span>
              </div>
              
              <div className="h-2 bg-gray-200 rounded-full mb-2">
                <div 
                  className="h-full bg-green-600 rounded-full transition-all duration-300"
                  style={{ width: `${(metric.value / metric.target) * 100}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">
                  {Math.round((metric.value / metric.target) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Engagement Milestones</h3>
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">March 2024</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-5 h-5" />
                <span className="text-sm opacity-80">15/20</span>
              </div>
              <h4 className="font-medium mb-1">Check-in Streak</h4>
              <p className="text-sm opacity-80">Daily emotional check-ins</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5" />
                <span className="text-sm opacity-80">8/10</span>
              </div>
              <h4 className="font-medium mb-1">Family Activities</h4>
              <p className="text-sm opacity-80">Learning quests completed</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm opacity-80">5 hrs</span>
              </div>
              <h4 className="font-medium mb-1">Quality Time</h4>
              <p className="text-sm opacity-80">Time spent learning together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementProgress;