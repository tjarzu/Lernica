import React, { useState } from 'react';
import { Users, Award, Brain, Target } from 'lucide-react';
import EmotionalProgress from '../../components/parent/progress/EmotionalProgress';
import EngagementProgress from '../../components/parent/progress/EngagementProgress';

interface Child {
  id: string;
  name: string;
  grade: string;
  avatar: string;
}

const Progress: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<string>('1');

  const children: Child[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      grade: 'Grade 9',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    {
      id: '2',
      name: 'Emma Johnson',
      grade: 'Grade 7',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    }
  ];

  return (
    <div className="p-8">
      {/* Child Selector */}
      <div className="flex items-center space-x-4 mb-8">
        {children.map((child) => (
          <button
            key={child.id}
            onClick={() => setSelectedChild(child.id)}
            className={`flex items-center space-x-3 p-4 rounded-xl transition-all min-w-[200px] ${
              selectedChild === child.id
                ? 'bg-green-50 border-2 border-green-500'
                : 'bg-white border-2 border-transparent hover:border-green-200'
            }`}
          >
            <img
              src={child.avatar}
              alt={child.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left min-w-0">
              <h3 className="font-medium text-gray-900 truncate">{child.name}</h3>
              <p className="text-sm text-gray-500">{child.grade}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8" />
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Parent Score</span>
          </div>
          <div className="text-3xl font-bold mb-2">450</div>
          <p className="text-sm opacity-90">Engagement Points</p>
          <div className="mt-4 text-sm">
            <span className="text-white/80">Level 5</span>
            <div className="h-1.5 bg-white/20 rounded-full mt-2">
              <div className="h-full bg-white rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8" />
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Engagement</span>
          </div>
          <div className="text-3xl font-bold mb-2">85%</div>
          <p className="text-sm opacity-90">Weekly Participation</p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {[1, 1, 1, 1, 0].map((day, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full ${
                  day ? 'bg-white' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Brain className="w-8 h-8" />
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Behavioral</span>
          </div>
          <div className="text-3xl font-bold mb-2">Good</div>
          <p className="text-sm opacity-90">Overall Status</p>
          <div className="mt-4 flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span className="text-sm">3 areas of improvement identified</span>
          </div>
        </div>
      </div>

      {/* Emotional Progress */}
      <EmotionalProgress />

      {/* Engagement Progress */}
      <EngagementProgress />
    </div>
  );
};

export default Progress;