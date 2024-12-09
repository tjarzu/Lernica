import React from 'react';
import { Heart, Brain, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface EmotionalData {
  date: string;
  mood: 'happy' | 'neutral' | 'stressed' | 'tired';
  engagement: number;
  notes?: string;
}

const EmotionalProgress: React.FC = () => {
  const weeklyData: EmotionalData[] = [
    { date: 'Mon', mood: 'happy', engagement: 85 },
    { date: 'Tue', mood: 'happy', engagement: 90 },
    { date: 'Wed', mood: 'stressed', engagement: 65, notes: 'Test anxiety observed' },
    { date: 'Thu', mood: 'neutral', engagement: 75 },
    { date: 'Fri', mood: 'happy', engagement: 88 }
  ];

  const getMoodEmoji = (mood: EmotionalData['mood']) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'stressed': return '😰';
      case 'tired': return '😴';
    }
  };

  const getMoodColor = (mood: EmotionalData['mood']) => {
    switch (mood) {
      case 'happy': return 'bg-green-100 text-green-700';
      case 'neutral': return 'bg-blue-100 text-blue-700';
      case 'stressed': return 'bg-red-100 text-red-700';
      case 'tired': return 'bg-purple-100 text-purple-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Emotional Well-being</h2>
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">Weekly Overview</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Weekly Mood Timeline */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Weekly Mood Timeline</h3>
          <div className="flex justify-between items-center">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-full ${getMoodColor(day.mood)} flex items-center justify-center text-xl`}>
                  {getMoodEmoji(day.mood)}
                </div>
                <span className="text-sm font-medium text-gray-700">{day.date}</span>
                <div className="text-xs text-gray-500">{day.engagement}%</div>
                {day.notes && (
                  <div className="absolute mt-20 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    {day.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Behavioral Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Key Observations</h3>
            {[
              {
                title: 'Social Interaction',
                trend: 'up',
                description: 'Increased participation in group activities'
              },
              {
                title: 'Academic Engagement',
                trend: 'down',
                description: 'Showing signs of test anxiety'
              },
              {
                title: 'Emotional Regulation',
                trend: 'up',
                description: 'Better handling of challenging situations'
              }
            ].map((observation, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{observation.title}</h4>
                  {observation.trend === 'up' ? (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{observation.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Support Recommendations</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Test Preparation Support',
                  description: 'Help reduce anxiety by creating a structured study plan',
                  priority: 'high'
                },
                {
                  title: 'Positive Reinforcement',
                  description: 'Acknowledge and celebrate small achievements',
                  priority: 'medium'
                },
                {
                  title: 'Regular Check-ins',
                  description: 'Schedule brief daily emotional check-ins',
                  priority: 'medium'
                }
              ].map((recommendation, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-purple-600" />
                      <h4 className="font-medium text-gray-900">{recommendation.title}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      recommendation.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {recommendation.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{recommendation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionalProgress;