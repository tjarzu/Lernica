import React from 'react';
import { Users, Brain, AlertTriangle, TrendingUp, Heart, MessageSquare } from 'lucide-react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import AIAgents from '../../components/admin/AIAgents';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AdminDashboard: React.FC = () => {
  const teacherBurnoutData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Burnout Risk Level',
      data: [25, 30, 35, 32, 28, 35],
      fill: true,
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      tension: 0.4
    }]
  };

  const emotionalWellbeingData = {
    labels: ['Happy', 'Neutral', 'Stressed', 'Tired', 'Anxious'],
    datasets: [{
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        '#22c55e',
        '#3b82f6',
        '#f59e0b',
        '#8b5cf6',
        '#ef4444'
      ]
    }]
  };

  const studentBehaviorData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Positive Behaviors',
        data: [85, 88, 82, 90, 85],
        backgroundColor: '#22c55e'
      },
      {
        label: 'Concerns',
        data: [15, 12, 18, 10, 15],
        backgroundColor: '#ef4444'
      }
    ]
  };

  const parentalEngagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Engagement Rate',
      data: [65, 70, 75, 82, 85, 85],
      fill: true,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    }]
  };
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Real-time analytics and predictions</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">85%</div>
            <div className="text-white/80">Parent Engagement</div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+15% this month</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">35%</div>
            <div className="text-white/80">Teacher Burnout Risk</div>
            <div className="mt-4 text-sm text-red-200">Requires attention</div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-white/80">At-Risk Students</div>
            <div className="mt-4 text-sm">Early intervention needed</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">78%</div>
            <div className="text-white/80">Emotional Well-being</div>
            <div className="mt-4 text-sm">School average</div>
          </div>
        </div>
        
        {/* Teacher Burnout Prediction */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Teacher Burnout Prediction</h2>
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">6-month trend</span>
            </div>
          </div>
          <div className="h-64">
            <Line
              data={teacherBurnoutData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                      display: true,
                      text: 'Risk Level (%)'
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>
        
        {/* Emotional Well-being Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Emotional Well-being</h2>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">Current distribution</span>
            </div>
          </div>
          <div className="h-64">
            <Doughnut
              data={emotionalWellbeingData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right'
                  }
                }
              }}
            />
          </div>
        </div>
        
        {/* Student Behavior Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Student Behavior Analysis</h2>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">Weekly breakdown</span>
            </div>
          </div>
          <div className="h-64">
            <Bar
              data={studentBehaviorData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    stacked: true
                  },
                  y: {
                    stacked: true,
                    beginAtZero: true,
                    max: 100
                  }
                }
              }}
            />
          </div>
        </div>
        
        {/* Parental Engagement Trends */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Parental Engagement</h2>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">6-month trend</span>
            </div>
          </div>
          <div className="h-64">
            <Line
              data={parentalEngagementData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                      display: true,
                      text: 'Engagement Rate (%)'
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>
        
      </div>
      
      <div className="mt-8">
        <AIAgents />
      </div>
      
    </div>
  );
};
export default AdminDashboard;