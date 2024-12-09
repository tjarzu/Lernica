import React from 'react';
import { Trophy, Star, Target, Award, TrendingUp, MessageSquare, Heart } from 'lucide-react';

const Recognition: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Recognition & Achievements</h1>
        <p className="text-gray-600">Track your progress and celebrate your teaching milestones</p>
      </div>

      {/* Level Progress */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Trophy className="w-8 h-8 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Level 32</h2>
              <p className="text-white/80">Master Educator</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/80 mb-1">Next Level in</div>
            <div className="text-2xl font-bold">2,450 XP</div>
          </div>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full" style={{ width: '65%' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Teaching Impact */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Teaching Impact</h2>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-purple-600">Lifetime Stats</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Students Impacted', value: '500+', icon: '👥' },
              { label: 'Lessons Created', value: '250', icon: '📚' },
              { label: 'Parent Meetings', value: '180', icon: '🤝' },
              { label: 'Positive Reviews', value: '95%', icon: '⭐' },
              { label: 'Goals Achieved', value: '120', icon: '🎯' },
              { label: 'Teaching Hours', value: '2,500', icon: '⏰' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Achievements</h2>
            <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Last 30 days
            </span>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Parent Communication Expert',
                description: 'Engaged with 50+ parents this month',
                icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
                date: '2 days ago',
                points: 100
              },
              {
                title: 'Student Progress Champion',
                description: 'Improved class average by 15%',
                icon: <TrendingUp className="w-5 h-5 text-green-600" />,
                date: '1 week ago',
                points: 150
              },
              {
                title: 'Emotional Support Guru',
                description: 'Helped 5 students overcome challenges',
                icon: <Heart className="w-5 h-5 text-red-600" />,
                date: '2 weeks ago',
                points: 75
              }
            ].map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-gray-500">{achievement.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-yellow-600">+{achievement.points} XP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Earned Badges</h2>
            <span className="text-sm text-blue-600">12 of 24</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Tech Innovator', icon: '🚀', color: 'from-blue-400 to-blue-500' },
              { name: 'Student Mentor', icon: '🌟', color: 'from-yellow-400 to-yellow-500' },
              { name: 'Team Player', icon: '🤝', color: 'from-green-400 to-green-500' },
              { name: 'Problem Solver', icon: '💡', color: 'from-purple-400 to-purple-500' },
              { name: 'Parent Partner', icon: '❤️', color: 'from-red-400 to-red-500' },
              { name: 'Data Master', icon: '📊', color: 'from-indigo-400 to-indigo-500' }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-2xl shadow-lg mb-2`}>
                  {badge.icon}
                </div>
                <span className="text-sm text-gray-700 text-center">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;