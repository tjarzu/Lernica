import React from 'react';
import { Trophy, TrendingUp, Star, Crown, Target, Award } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const currentTeacherId = '3'; // This would come from auth context
  
  const teachers = [
    { id: '1', name: 'Sarah Johnson', points: 2450, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', trend: 'up', streak: 15 },
    { id: '2', name: 'Michael Chen', points: 2300, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', trend: 'up', streak: 12 },
    { id: '3', name: 'Abubakar', points: 2100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abubakar', trend: 'down', streak: 8 },
    { id: '4', name: 'Emma Davis', points: 1950, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', trend: 'up', streak: 10 },
    { id: '5', name: 'James Wilson', points: 1800, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', trend: 'stable', streak: 5 },
  ];

  const improvementTips = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      title: 'Engage More with Parents',
      description: 'Regular parent communications can earn you up to 50 points per week.',
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      title: 'Complete Daily Check-ins',
      description: 'Emotional check-ins award 50 points daily when done on time.',
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Create Detailed Lesson Plans',
      description: 'Each lesson plan review earns you points based on completeness.',
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: 'Maintain Your Streak',
      description: 'Login daily to build your streak and earn bonus points.',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Teacher Leaderboard</h1>
        <p className="text-gray-600">Compete with your colleagues and track your progress</p>
      </div>

      {/* Top 3 Teachers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {teachers.slice(0, 3).map((teacher, index) => (
          <div
            key={teacher.id}
            className={`${
              index === 0
                ? 'bg-gradient-to-br from-yellow-500 to-yellow-600'
                : index === 1
                ? 'bg-gradient-to-br from-slate-400 to-slate-500'
                : 'bg-gradient-to-br from-amber-600 to-amber-700'
            } rounded-xl p-6 text-white relative overflow-hidden`}
          >
            <div className="absolute top-2 right-2">
              {index === 0 && <Crown className="w-6 h-6 text-yellow-300" />}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full border-2 border-white/50"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-lg">
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                </div>
              </div>
              <div>
                <h3 className="font-bold">{teacher.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">{teacher.points}</span>
                  <span className="text-sm opacity-75">points</span>
                </div>
                <div className="flex items-center mt-1 text-sm">
                  <span className="opacity-75">🔥 {teacher.streak} day streak</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Rankings */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Current Rankings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`p-4 flex items-center justify-between ${
                teacher.id === currentTeacherId ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-gray-500 w-8">#{index + 1}</span>
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{teacher.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>🔥 {teacher.streak} day streak</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="font-bold text-gray-900">{teacher.points}</div>
                  <div className="text-sm text-gray-500">points</div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  teacher.trend === 'up'
                    ? 'bg-green-100 text-green-600'
                    : teacher.trend === 'down'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Improvement Tips */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Tips to Improve Your Ranking</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {improvementTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                {tip.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;