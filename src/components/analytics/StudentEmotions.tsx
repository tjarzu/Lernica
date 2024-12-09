import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StudentEmotions: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Student Emotional Trends</h2>
        <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">🌟</span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">78%</div>
          <div className="text-sm text-gray-600">Positive Emotions</div>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">😔</span>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">12%</div>
          <div className="text-sm text-gray-600">Negative Emotions</div>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { emotion: 'Happy', value: 45, color: 'bg-yellow-600' },
          { emotion: 'Excited', value: 33, color: 'bg-green-600' },
          { emotion: 'Stressed', value: 15, color: 'bg-orange-600' },
          { emotion: 'Burnout', value: 5, color: 'bg-red-600' },
          { emotion: 'Depressed', value: 2, color: 'bg-blue-600' },
        ].map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 font-medium">{item.emotion}</span>
              <span className="text-gray-700">{item.value}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentEmotions;