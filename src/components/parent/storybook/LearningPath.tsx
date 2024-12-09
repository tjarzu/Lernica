import React from 'react';
import { Star, Trophy, Target, Book, Heart } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  icon: React.ReactNode;
  unlocked: boolean;
}

const LearningPath: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Begin your parenting journey',
      points: 50,
      completed: true,
      unlocked: true,
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: '2',
      title: 'Learning Explorer',
      description: 'Complete 5 family activities',
      points: 100,
      completed: true,
      unlocked: true,
      icon: <Book className="w-5 h-5" />
    },
    {
      id: '3',
      title: 'Super Parent',
      description: '7-day engagement streak',
      points: 150,
      completed: false,
      unlocked: true,
      icon: <Trophy className="w-5 h-5" />
    },
    {
      id: '4',
      title: 'Family Champion',
      description: 'Unlock special rewards',
      points: 200,
      completed: false,
      unlocked: false,
      icon: <Star className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Learning Path</h2>
              <p className="text-sm text-gray-500">Level 5 • 450 XP</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 text-green-600 px-3 py-1 rounded-full">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">2/4 Completed</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`relative group ${
                !achievement.unlocked && 'opacity-50'
              }`}
            >
              {/* Achievement Card */}
              <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                achievement.completed
                  ? 'border-green-500 bg-green-50'
                  : achievement.unlocked
                  ? 'border-gray-200 hover:border-green-200 hover:bg-green-50/50'
                  : 'border-gray-200 bg-gray-50'
              }`}>
                {/* Achievement Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    achievement.completed
                      ? 'bg-gradient-to-br from-green-400 to-green-500'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    <div className="text-white">{achievement.icon}</div>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Star className="w-4 h-4" />
                    <span>+{achievement.points}</span>
                  </div>
                </div>

                {/* Achievement Content */}
                <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>

                {/* Progress Indicator */}
                {achievement.completed ? (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <svg className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Completed!
                  </div>
                ) : achievement.unlocked ? (
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Start Challenge
                  </button>
                ) : (
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Complete previous challenges to unlock
                  </div>
                )}
              </div>

              {/* Connection Line */}
              {index < achievements.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;