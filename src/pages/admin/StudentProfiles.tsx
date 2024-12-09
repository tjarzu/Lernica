import React, { useState } from 'react';
import { Search, Filter, Brain, Heart, Users, TrendingUp, AlertTriangle } from 'lucide-react';
import { Line } from 'react-chartjs-2';

interface Student {
  id: string;
  name: string;
  avatar: string;
  grade: string;
  class: string;
  behavioralStatus: 'good' | 'warning' | 'alert';
  emotionalStatus: 'positive' | 'neutral' | 'concerning';
  parentEngagement: number;
  academicProgress: number;
  trends: {
    behavior: number[];
    emotional: number[];
    academic: number[];
  };
  parentEmotionalData: {
    status: 'positive' | 'neutral' | 'concerning';
    lastCheckIn: string;
    trend: 'up' | 'down' | 'stable';
  };
}

const StudentProfiles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const students: Student[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      grade: 'Grade 9',
      class: '9A',
      behavioralStatus: 'good',
      emotionalStatus: 'positive',
      parentEngagement: 85,
      academicProgress: 92,
      trends: {
        behavior: [85, 88, 90, 92, 90, 92],
        emotional: [75, 78, 82, 85, 88, 90],
        academic: [88, 90, 92, 91, 92, 92]
      },
      parentEmotionalData: {
        status: 'positive',
        lastCheckIn: '2 hours ago',
        trend: 'up'
      }
    }
    // Add more students...
  ];

  const getStatusColor = (status: 'good' | 'warning' | 'alert' | 'positive' | 'neutral' | 'concerning') => {
    switch (status) {
      case 'good':
      case 'positive':
        return 'bg-green-100 text-green-700';
      case 'warning':
      case 'neutral':
        return 'bg-yellow-100 text-yellow-700';
      case 'alert':
      case 'concerning':
        return 'bg-red-100 text-red-700';
    }
  };

  const filteredStudents = students.filter(student => {
    if (selectedGrade !== 'all' && student.grade !== selectedGrade) return false;
    if (selectedClass !== 'all' && student.class !== selectedClass) return false;
    if (selectedStatus !== 'all') {
      if (selectedStatus === 'concerning' && student.emotionalStatus !== 'concerning') return false;
      if (selectedStatus === 'warning' && student.behavioralStatus !== 'warning') return false;
    }
    if (searchQuery && !student.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Student Profiles</h1>
        <p className="text-gray-600">Monitor student progress and well-being metrics</p>
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
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
          </select>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Classes</option>
            <option value="9A">9A</option>
            <option value="9B">9B</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="concerning">Emotional Concerns</option>
            <option value="warning">Behavioral Concerns</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-4">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{student.name}</h3>
                    <div className="text-sm text-gray-500">{student.grade} - {student.class}</div>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(student.behavioralStatus)}`}>
                        Behavior: {student.behavioralStatus}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(student.emotionalStatus)}`}>
                        Emotional: {student.emotionalStatus}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Parent Engagement</span>
                      <span className="text-blue-600">{student.parentEngagement}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${student.parentEngagement}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Academic Progress</span>
                      <span className="text-purple-600">{student.academicProgress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${student.academicProgress}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Parent Emotional Data</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Status</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(student.parentEmotionalData.status)}`}>
                          {student.parentEmotionalData.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Last Check-in</span>
                        <span className="text-gray-700">{student.parentEmotionalData.lastCheckIn}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Trend</span>
                        <span className={`flex items-center ${
                          student.parentEmotionalData.trend === 'up' ? 'text-green-600' :
                          student.parentEmotionalData.trend === 'down' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {student.parentEmotionalData.trend === 'up' ? <TrendingUp className="w-4 h-4" /> :
                           student.parentEmotionalData.trend === 'down' ? <AlertTriangle className="w-4 h-4" /> :
                           '→'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">Behavioral Trend</h4>
                    <Brain className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Behavior',
                          data: student.trends.behavior,
                          borderColor: '#22c55e',
                          backgroundColor: 'rgba(34, 197, 94, 0.1)',
                          tension: 0.4,
                          fill: true
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">Emotional Trend</h4>
                    <Heart className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Emotional',
                          data: student.trends.emotional,
                          borderColor: '#ec4899',
                          backgroundColor: 'rgba(236, 72, 153, 0.1)',
                          tension: 0.4,
                          fill: true
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">Academic Trend</h4>
                    <TrendingUp className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Academic',
                          data: student.trends.academic,
                          borderColor: '#8b5cf6',
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          tension: 0.4,
                          fill: true
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100
                          }
                        }
                      }}
                    />
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

export default StudentProfiles;