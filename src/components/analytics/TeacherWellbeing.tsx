import React from 'react';
import { Battery, Brain, Clock, AlertTriangle } from 'lucide-react';

const TeacherWellbeing: React.FC = () => {
  const burnoutRate = 35; // This would come from your data
  const workloadScore = 75;
  
  const getBurnoutStatus = (rate: number) => {
    if (rate < 40) return { text: 'Low Risk', color: 'text-green-600 bg-green-100' };
    if (rate < 65) return { text: 'Medium Risk', color: 'text-yellow-600 bg-yellow-100' };
    return { text: 'High Risk', color: 'text-red-600 bg-red-100' };
  };

  const status = getBurnoutStatus(burnoutRate);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Teacher Wellbeing Analysis</h2>
        <span className={`px-3 py-1 rounded-full text-sm ${status.color}`}>
          {status.text}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Battery className="w-5 h-5 text-indigo-600" />
            <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
              {burnoutRate < 40 ? 'Healthy' : burnoutRate < 65 ? 'Monitor' : 'Action Needed'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{burnoutRate}%</div>
          <div className="text-sm text-gray-600">Current Burnout Rate</div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full">
            <div
              className={`h-full rounded-full ${
                burnoutRate < 40 ? 'bg-green-600' :
                burnoutRate < 65 ? 'bg-yellow-600' : 'bg-red-600'
              }`}
              style={{ width: `${burnoutRate}%` }}
            />
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
              {workloadScore}% Capacity
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">High</div>
          <div className="text-sm text-gray-600">Current Workload</div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-purple-600 rounded-full"
              style={{ width: `${workloadScore}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">Contributing Factors</div>
          <AlertTriangle className="w-4 h-4 text-yellow-500" />
        </div>

        <div className="space-y-3">
          {[
            { factor: 'Class Size', impact: 85, trend: 'increasing' },
            { factor: 'Administrative Tasks', impact: 72, trend: 'stable' },
            { factor: 'Parent Communications', impact: 65, trend: 'decreasing' },
            { factor: 'Student Support', impact: 58, trend: 'increasing' },
          ].map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{item.factor}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">{item.impact}%</span>
                  <span className={`text-xs ${
                    item.trend === 'increasing' ? 'text-red-500' :
                    item.trend === 'decreasing' ? 'text-green-500' :
                    'text-gray-500'
                  }`}>
                    {item.trend === 'increasing' ? '↑' :
                     item.trend === 'decreasing' ? '↓' : '→'}
                  </span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${item.impact}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Recommended Action</h4>
            <p className="text-sm text-gray-600 mt-1">
              Consider scheduling a break in the next 2 weeks to prevent burnout.
              Your current workload pattern suggests increasing stress levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherWellbeing;