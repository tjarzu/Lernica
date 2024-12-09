import React, { useState } from 'react';
import { Target, TrendingUp, Users, Brain, BarChart2, Plus } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';

interface SchoolGoal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  category: 'engagement' | 'behavior' | 'burnout' | 'satisfaction';
}

interface SchoolComparison {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large';
  area: string;
  metrics: {
    parentalEngagement: number;
    behaviorScore: number;
    teacherBurnout: number;
    satisfaction: number;
  };
}

const SchoolMetrics: React.FC = () => {
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [newGoal, setNewGoal] = useState<Partial<SchoolGoal>>({});

  const goals: SchoolGoal[] = [
    {
      id: '1',
      title: 'Increase Parent Engagement',
      target: 90,
      current: 85,
      deadline: '2024-06-30',
      category: 'engagement'
    },
    {
      id: '2',
      title: 'Reduce Teacher Burnout',
      target: 20,
      current: 35,
      deadline: '2024-12-31',
      category: 'burnout'
    }
  ];

  const similarSchools: SchoolComparison[] = [
    {
      id: '1',
      name: 'School A',
      size: 'medium',
      area: 'Urban',
      metrics: {
        parentalEngagement: 82,
        behaviorScore: 88,
        teacherBurnout: 32,
        satisfaction: 85
      }
    },
    {
      id: '2',
      name: 'School B',
      size: 'medium',
      area: 'Urban',
      metrics: {
        parentalEngagement: 78,
        behaviorScore: 85,
        teacherBurnout: 38,
        satisfaction: 82
      }
    }
  ];

  const comparisonData = {
    labels: ['Parental Engagement', 'Behavior Score', 'Teacher Burnout', 'Satisfaction'],
    datasets: [
      {
        label: 'Your School',
        data: [85, 90, 35, 88],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: '#3b82f6',
        borderWidth: 2
      },
      {
        label: 'Similar Schools Average',
        data: [80, 86.5, 35, 83.5],
        backgroundColor: 'rgba(147, 197, 253, 0.5)',
        borderColor: '#93c5fd',
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">School Metrics</h1>
          <p className="text-gray-600">Compare performance and set improvement goals</p>
        </div>
        <button
          onClick={() => setShowGoalModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Goal</span>
        </button>
      </div>

      {/* School Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900">{goal.title}</h3>
              </div>
              <span className="text-sm text-gray-500">
                Due {new Date(goal.deadline).toLocaleDateString()}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">
                  {Math.min(goal.current, goal.target)}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
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
          </div>
        ))}
      </div>

      {/* School Comparison */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Performance Comparison</h2>
          <div className="flex space-x-4">
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Areas</option>
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Sizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <div className="h-96">
          <Bar
            data={comparisonData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                    callback: (value) => `${value}%`
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'top',
                  labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                      size: 12
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Parent Engagement</h2>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64">
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    label: 'Your School',
                    data: [75, 78, 82, 85, 85, 85],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                  },
                  {
                    label: 'Similar Schools',
                    data: [72, 75, 78, 80, 82, 80],
                    borderColor: 'rgb(147, 197, 253)',
                    backgroundColor: 'rgba(147, 197, 253, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      usePointStyle: true,
                      padding: 20,
                      font: {
                        size: 12
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: (value) => `${value}%`
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Teacher Burnout</h2>
            <Brain className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64">
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    label: 'Your School',
                    data: [35, 32, 30, 28, 35, 32],
                    borderColor: 'rgb(239, 68, 68)',
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                  },
                  {
                    label: 'Similar Schools',
                    data: [38, 35, 33, 35, 32, 35],
                    borderColor: 'rgb(252, 165, 165)',
                    backgroundColor: 'rgba(252, 165, 165, 0.2)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      usePointStyle: true,
                      padding: 20,
                      font: {
                        size: 12
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: (value) => `${value}%`
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Add Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add School Goal</h3>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Goal Title</label>
                <input
                  type="text"
                  value={newGoal.title || ''}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Increase Parent Engagement"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newGoal.category || ''}
                  onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value as SchoolGoal['category'] })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="engagement">Parent Engagement</option>
                  <option value="behavior">Student Behavior</option>
                  <option value="burnout">Teacher Burnout</option>
                  <option value="satisfaction">Overall Satisfaction</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Target (%)</label>
                  <input
                    type="number"
                    value={newGoal.target || ''}
                    onChange={(e) => setNewGoal({ ...newGoal, target: parseInt(e.target.value) })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Deadline</label>
                  <input
                    type="date"
                    value={newGoal.deadline || ''}
                    onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
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
    </div>
  );
};

export default SchoolMetrics;