import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';

const ImprovementMetrics: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Improvement Metrics</h2>
        <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm">
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">+15%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
          <div className="text-sm text-gray-600">Academic Progress</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">+8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
          <div className="text-sm text-gray-600">Goals Achieved</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-900">Most Improved Areas</div>
            <div className="text-xs text-gray-500">Compared to last quarter</div>
          </div>
          <TrendingUp className="w-4 h-4 text-green-500" />
        </div>

        <div className="space-y-3">
          {[
            { area: 'Class Participation', improvement: 35 },
            { area: 'Assignment Completion', improvement: 28 },
            { area: 'Test Scores', improvement: 22 },
            { area: 'Behavioral Conduct', improvement: 18 },
          ].map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{metric.area}</span>
                <span className="text-gray-700">+{metric.improvement}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: `${metric.improvement}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImprovementMetrics;