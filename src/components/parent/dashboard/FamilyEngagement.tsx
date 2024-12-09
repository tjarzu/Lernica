import React, { useState, useContext } from 'react';
import { Target, Trophy, Star, Heart, Calendar, BookOpen } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  sharedWithChild: boolean;
  sharedWithCoParent: boolean;
  type: 'daily' | 'weekly' | 'monthly';
  status: 'active' | 'completed';
}

const FamilyEngagement: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Weekly Progress Check',
      description: 'Review academic progress and complete one activity together',
      progress: 75,
      dueDate: '2024-03-15',
      sharedWithChild: true,
      sharedWithCoParent: true,
      type: 'weekly',
      status: 'active'
    },
    {
      id: '2',
      title: 'Family Learning Quest',
      description: 'Complete the "Math Mystery Challenge" together',
      progress: 30,
      dueDate: '2024-03-20',
      sharedWithChild: true,
      sharedWithCoParent: false,
      type: 'monthly',
      status: 'active'
    }
  ]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Family Engagement</h2>
          <button
            onClick={() => {
              // Find and click the floating action button's goal option
              const fabButton = document.querySelector('.floating-action-button');
              if (fabButton) {
                (fabButton as HTMLElement).click();
                // Small delay to ensure menu opens
                setTimeout(() => {
                  const goalButton = document.querySelector('.goal-button');
                  if (goalButton) {
                    (goalButton as HTMLElement).click();
                  }
                }, 100);
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Set New Goal
          </button>
        </div>

        {/* Family Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-6 h-6" />
              <Star className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">450</div>
            <div className="text-sm opacity-90">Family Points</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm bg-white/20 px-2 py-1 rounded-full">This Week</span>
            </div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-90">Activities Completed</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-6 h-6" />
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm opacity-90">Day Streak</div>
          </div>
        </div>

        {/* Active Goals */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">Active Goals</h3>
          {goals.map((goal) => (
            <div key={goal.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      {goal.sharedWithChild && (
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                          Shared with child
                        </span>
                      )}
                      {goal.sharedWithCoParent && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          Shared with co-parent
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Due {new Date(goal.dueDate).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{goal.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Activities */}
      <div className="p-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Suggested Activities</h3>
        <div className="space-y-3">
          {[
            {
              title: 'Math Mystery Challenge',
              description: 'Solve real-world math problems together',
              points: 50,
              duration: '30 mins'
            },
            {
              title: 'Reading Adventure',
              description: 'Read and discuss a story together',
              points: 30,
              duration: '20 mins'
            },
            {
              title: 'Science Experiment',
              description: 'Conduct a simple experiment at home',
              points: 75,
              duration: '45 mins'
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500">{activity.duration}</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    +{activity.points} points
                  </span>
                </div>
              </div>
              <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700">
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyEngagement;