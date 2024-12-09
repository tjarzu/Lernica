import React, { useState } from 'react';
import { Target, Award, Users, TrendingUp, Plus, Star } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  deadline: string;
  assignedTo: string[];
  status: 'active' | 'completed';
}

interface Recognition {
  id: string;
  teacherName: string;
  teacherAvatar: string;
  achievement: string;
  date: string;
  metrics: {
    label: string;
    value: number;
    target: number;
  }[];
}

const Collaboration: React.FC = () => {
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showRecognitionModal, setShowRecognitionModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    target: 0,
    assignedTo: [] as string[]
  });
  const [newRecognition, setNewRecognition] = useState({
    teacherName: '',
    achievement: '',
    metrics: [] as { label: string; value: number; target: number }[]
  });

  const goals: Goal[] = [
    {
      id: '1',
      title: 'Increase Parent Engagement',
      description: 'Improve parent participation in school activities and communication',
      target: 90,
      current: 75,
      deadline: '2024-06-30',
      assignedTo: ['Grade 9 Teachers', 'Grade 10 Teachers'],
      status: 'active'
    },
    {
      id: '2',
      title: 'Reduce Teacher Burnout',
      description: 'Implement strategies to improve teacher well-being',
      target: 20,
      current: 35,
      deadline: '2024-12-31',
      assignedTo: ['All Teachers'],
      status: 'active'
    }
  ];

  const recognitions: Recognition[] = [
    {
      id: '1',
      teacherName: 'Sarah Johnson',
      teacherAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      achievement: 'Outstanding Parent Engagement',
      date: '2024-03-12',
      metrics: [
        { label: 'Parent Engagement', value: 95, target: 85 },
        { label: 'Student Performance', value: 92, target: 80 },
        { label: 'Communication Rate', value: 88, target: 75 }
      ]
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Collaboration</h1>
        <p className="text-gray-600">Set goals and recognize teacher achievements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* School Goals */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">School Goals</h2>
            </div>
            <button
              onClick={() => setShowGoalModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Goal</span>
            </button>
          </div>

          <div className="space-y-6">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{goal.title}</h3>
                  <span className="text-sm text-gray-500">
                    Due {new Date(goal.deadline).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{goal.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">
                      {Math.min(goal.current, goal.target)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Target: {goal.target}%</span>
                    <span className="text-blue-600">
                      {Math.min(Math.round((goal.current / goal.target) * 100), 100)}% Complete
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {goal.assignedTo.map((team, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                    >
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Recognition */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl text-white">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Teacher Recognition</h2>
            </div>
            <button
              onClick={() => setShowRecognitionModal(true)}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center space-x-2"
            >
              <Star className="w-5 h-5" />
              <span>Recognize Achievement</span>
            </button>
          </div>

          <div className="space-y-6">
            {recognitions.map((recognition) => (
              <div key={recognition.id} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={recognition.teacherAvatar}
                    alt={recognition.teacherName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{recognition.teacherName}</h3>
                    <p className="text-sm text-gray-500">{recognition.achievement}</p>
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(recognition.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {recognition.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="text-gray-900">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-yellow-600 rounded-full"
                          style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-end text-xs text-gray-500 mt-1">
                        Target: {metric.target}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Leaderboard */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Teacher Metrics Leaderboard</h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="pb-3 text-sm font-medium text-gray-500">Teacher</th>
                <th className="pb-3 text-sm font-medium text-gray-500">Parent Engagement</th>
                <th className="pb-3 text-sm font-medium text-gray-500">Student Performance</th>
                <th className="pb-3 text-sm font-medium text-gray-500">Well-being Score</th>
                <th className="pb-3 text-sm font-medium text-gray-500">Overall Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  name: 'Sarah Johnson',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                  engagement: 95,
                  performance: 92,
                  wellbeing: 88,
                  rating: 92
                },
                {
                  name: 'Michael Chen',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
                  engagement: 88,
                  performance: 90,
                  wellbeing: 85,
                  rating: 88
                }
              ].map((teacher, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-medium text-gray-900">{teacher.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-600 rounded-full"
                          style={{ width: `${teacher.engagement}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{teacher.engagement}%</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${teacher.performance}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{teacher.performance}%</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: `${teacher.wellbeing}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{teacher.wellbeing}%</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium text-gray-900">{teacher.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Add Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add School Goal</h3>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // Handle goal creation
              setShowGoalModal(false);
            }}>
              <div>
                <label className="text-sm font-medium text-gray-700">Goal Title</label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                  rows={3}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Target (%)</label>
                <input
                  type="number"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({ ...newGoal, target: parseInt(e.target.value) })}
                  min="0"
                  max="100"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Assign Teachers</label>
                <select
                  multiple
                  value={newGoal.assignedTo}
                  onChange={(e) => setNewGoal({
                    ...newGoal,
                    assignedTo: Array.from(e.target.selectedOptions, option => option.value)
                  })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  size={4}
                >
                  <option value="all">All Teachers</option>
                  <option value="math">Math Department</option>
                  <option value="science">Science Department</option>
                  <option value="english">English Department</option>
                  <option value="grade9">Grade 9 Teachers</option>
                  <option value="grade10">Grade 10 Teachers</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">Hold Ctrl/Cmd to select multiple</p>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowGoalModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Recognition Modal */}
      {showRecognitionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recognize Achievement</h3>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // Handle recognition creation
              setShowRecognitionModal(false);
            }}>
              <div>
                <label className="text-sm font-medium text-gray-700">Teacher Name</label>
                <input
                  type="text"
                  value={newRecognition.teacherName}
                  onChange={(e) => setNewRecognition({ ...newRecognition, teacherName: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Achievement</label>
                <textarea
                  value={newRecognition.achievement}
                  onChange={(e) => setNewRecognition({ ...newRecognition, achievement: e.target.value })}
                  rows={3}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRecognitionModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                >
                  Recognize Achievement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collaboration;