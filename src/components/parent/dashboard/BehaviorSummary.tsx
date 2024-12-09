import React from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';

const BehaviorSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Behavioral Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Positive Streak</span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-2xl font-bold text-gray-900">15</span>
            <span className="text-sm text-gray-500">days</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Weekly Participation</span>
            <span className="text-sm text-green-600">+12%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">85%</div>
          <div className="h-2 bg-blue-100 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Behavioral Score</span>
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">A+</div>
          <div className="text-sm text-gray-600 mt-1">Top 5% of class</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Weekly Trends</h3>
        {[
          { category: 'Class Participation', value: 92, trend: 'up' },
          { category: 'Assignment Completion', value: 88, trend: 'up' },
          { category: 'Peer Collaboration', value: 78, trend: 'stable' }
        ].map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{item.category}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                {item.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehaviorSummary;