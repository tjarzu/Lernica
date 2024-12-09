import React from 'react';
import { Heart, TrendingUp, Brain, Sun } from 'lucide-react';

const EmotionalInsights: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Emotional Well-being</h2>
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Weekly Overview
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Emotional Trends */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Weekly Emotional Trends</h3>
            {[
              { emotion: 'Happy', value: 45, color: 'bg-yellow-600' },
              { emotion: 'Focused', value: 30, color: 'bg-blue-600' },
              { emotion: 'Anxious', value: 15, color: 'bg-red-600' },
              { emotion: 'Tired', value: 10, color: 'bg-purple-600' }
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.emotion}</span>
                  <span className="text-gray-900 font-medium">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Support Suggestions */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Support Suggestions</h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Morning Check-in',
                  description: 'Start the day with a positive conversation',
                  icon: <Sun className="w-5 h-5 text-yellow-600" />
                },
                {
                  title: 'Mindful Break',
                  description: 'Take a 5-minute breathing exercise together',
                  icon: <Brain className="w-5 h-5 text-purple-600" />
                },
                {
                  title: 'Appreciation Time',
                  description: 'Share three things you\'re grateful for',
                  icon: <Heart className="w-5 h-5 text-red-600" />
                }
              ].map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-white rounded-lg">
                    {suggestion.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                    <p className="text-sm text-gray-600">{suggestion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Behavioral Insights */}
      <div className="p-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Recent Behavioral Insights</h3>
        <div className="space-y-4">
          {[
            {
              insight: 'Increased focus during morning classes',
              trend: 'up',
              impact: 'positive',
              suggestion: 'Consider scheduling important activities in the morning'
            },
            {
              insight: 'Shows signs of test anxiety',
              trend: 'down',
              impact: 'concerning',
              suggestion: 'Try practicing relaxation techniques before tests'
            },
            {
              insight: 'Strong participation in group activities',
              trend: 'up',
              impact: 'positive',
              suggestion: 'Encourage more collaborative learning opportunities'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{item.insight}</h4>
                    <TrendingUp className={`w-4 h-4 ${
                      item.impact === 'positive' ? 'text-green-500' : 'text-red-500'
                    }`} />
                  </div>
                  <p className="text-sm text-gray-600">{item.suggestion}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.impact === 'positive'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}>
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionalInsights;