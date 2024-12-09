import React, { useState } from 'react';
import { Search, Filter, ChevronRight, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  parentEngagement: number;
  emotionalStatus: 'positive' | 'neutral' | 'concerning';
  behaviorStatus: 'good' | 'warning' | 'alert';
  lastActive: string;
  academicProgress: {
    currentGrade: string;
    previousGrade: string;
    improvement: number;
  };
  trends: {
    academic: 'up' | 'down' | 'stable';
    engagement: 'up' | 'down' | 'stable';
    behavior: 'up' | 'down' | 'stable';
  };
}

const Students: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const students: Student[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      grade: 'Grade 9A',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      parentEngagement: 85,
      emotionalStatus: 'positive',
      behaviorStatus: 'good',
      academicProgress: {
        currentGrade: 'A-',
        previousGrade: 'B+',
        improvement: 15
      },
      lastActive: '2 hours ago',
      trends: {
        academic: 'up',
        engagement: 'up',
        behavior: 'stable'
      }
    },
    {
      id: '2',
      name: 'Emma Wilson',
      grade: 'Grade 9B',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      parentEngagement: 45,
      emotionalStatus: 'concerning',
      behaviorStatus: 'warning',
      academicProgress: {
        currentGrade: 'C+',
        previousGrade: 'C',
        improvement: 5
      },
      lastActive: '1 day ago',
      trends: {
        academic: 'down',
        engagement: 'down',
        behavior: 'down'
      }
    }
  ];

  const getStatusColor = (status: Student['emotionalStatus'] | Student['behaviorStatus']) => {
    switch (status) {
      case 'positive':
      case 'good':
        return 'bg-green-100 text-green-700';
      case 'neutral':
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'concerning':
      case 'alert':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <span className="w-4 h-4 text-gray-500">→</span>;
    }
  };

  const filteredStudents = students.filter(student => {
    if (selectedGrade !== 'all' && student.grade !== selectedGrade) return false;
    if (selectedStatus !== 'all') {
      if (selectedStatus === 'concerning' && student.emotionalStatus !== 'concerning') return false;
      if (selectedStatus === 'warning' && student.behaviorStatus !== 'warning') return false;
    }
    if (searchQuery && !student.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
        <p className="text-gray-600">Monitor student progress and well-being</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex space-x-4">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Grades</option>
            <option value="Grade 9A">Grade 9A</option>
            <option value="Grade 9B">Grade 9B</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="concerning">Emotional Concerns</option>
            <option value="warning">Behavior Concerns</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{student.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500">{student.grade}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">Last active {student.lastActive}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(student.emotionalStatus)}`}>
                  Emotional: {student.emotionalStatus}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(student.behaviorStatus)}`}>
                  Behavior: {student.behaviorStatus}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Parent Engagement</span>
                  {getTrendIcon(student.trends.engagement)}
                </div>
                <div className="text-2xl font-bold text-gray-900">{student.parentEngagement}%</div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${student.parentEngagement}%` }}
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Academic Progress</span>
                  {getTrendIcon(student.trends.academic)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Grade: {student.academicProgress.currentGrade}</span>
                    <button 
                      className="text-blue-600 hover:text-blue-700 font-medium"
                      onClick={() => {
                        // Open grade update modal
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Previous: {student.academicProgress.previousGrade}</span>
                    <span className="text-green-600">
                      +{student.academicProgress.improvement}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Behavior Trends</span>
                  {getTrendIcon(student.trends.behavior)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Positive Actions</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Areas of Concern</span>
                    <span className="font-medium">2</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Recent Activity</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    Completed homework assignment
                  </div>
                  <div className="text-sm text-gray-600">
                    Participated in group discussion
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;