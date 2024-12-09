import React from 'react';
import { TrendingUp, Award, Star, Target } from 'lucide-react';

const XPProgress: React.FC = () => {
  const currentXP = 450;
  const nextLevel = 500;
  const progress = (currentXP / nextLevel) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        {/* Level Progress */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Level 5</div>
              <div className="text-sm text-gray-500">Super Parent</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">+50 today</span>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-900">{currentXP} XP</span>
            <span className="text-gray-500">{nextLevel} XP needed</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center">
            <span className="text-sm text-gray-500">
              {Math.round(nextLevel - currentXP)} XP until next level
            </span>
          </div>
        </div>

        {/* Daily & Weekly Goals */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Daily Goal</span>
              </div>
              <div className="text-sm text-green-600">75/100 XP</div>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-green-600 rounded-full" style={{ width: '75%' }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-600">25 XP to go</span>
              <div className="flex items-center text-green-600">
                <Star className="w-4 h-4 mr-1" />
                <span>+20 bonus</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">Weekly Goal</span>
              </div>
              <div className="text-sm text-blue-600">450/500 XP</div>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-600">50 XP to go</span>
              <div className="flex items-center text-blue-600">
                <Star className="w-4 h-4 mr-1" />
                <span>+50 bonus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPProgress;