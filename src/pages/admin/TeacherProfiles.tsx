import React, { useState } from 'react';
import { Search, Filter, Brain, Heart, Users, TrendingUp, AlertTriangle } from 'lucide-react';
import { Line } from 'react-chartjs-2';

interface Teacher {
  id: string;
  name: string;
  avatar: string;
  subject: string;
  grade: string;
  burnoutRisk: number;
  emotionalStatus: 'positive' | 'neutral' | 'concerning';
  parentEngagement: number;
  studentPerformance: number;
  trends: {
    burnout: number[];
    engagement: number[];
    performance: number[];
  };
}

const TeacherProfiles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');

  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      subject: 'Mathematics',
      grade: 'Grade 9',
      burnoutRisk: 35,
      emotionalStatus: 'positive',
      parentEngagement: 85,
      studentPerformance: 92,
      trends: {
        burnout: [25, 30, 35, 32, 28, 35],
        engagement: [75, 78, 82, 85, 85, 85],
        performance: [88, 90, 92, 91, 92, 92]
      }
    }
    // Add more teachers...
  ];

  const getStatusColor = (status: Teacher['emotionalStatus']) => {
    switch (status) {
      case 'positive': return 'bg-green-100 text-green-700';
      case 'neutral': return 'bg-yellow-100 text-yellow-700';
      case 'concerning': return 'bg-red-100 text-red-700';
    }
  };

  const filteredTeachers = teachers.filter(teacher => {
    if (selectedSubject !== 'all' && teacher.subject !== selectedSubject) return false;
    if (selectedGrade !== 'all' && teacher.grade !== selectedGrade) return false;
    if (searchQuery && !teacher.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Teacher Profiles</h1>
        <p className="text-gray-600">Monitor teacher well-being and performance metrics</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex space-x-4">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Grades</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-4">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{teacher.name}</h3>
                    <div className="text-sm text-gray-500">{teacher.subject}</div>
                    <div className="text-sm text-gray-500">{teacher.grade}</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Burnout Risk</span>
                      <span className={teacher.burnoutRisk > 50 ? 'text-red-600' : 'text-green-600'}>
                        {teacher.burnoutRisk}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className={`h-full rounded-full ${
                          teacher.burnoutRisk > 50 ? 'bg-red-600' : 'bg-green-600'
                        }`}
                        style={{ width: `${teacher.burnoutRisk}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Parent Engagement</span>
                      <span className="text-blue-600">{teacher.parentEngagement}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${teacher.parentEngagement}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Student Performance</span>
                      <span className="text-purple-600">{teacher.studentPerformance}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${teacher.studentPerformance}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">Burnout Trend</h4>
                    <Brain className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Burnout Risk',
                          data: teacher.trends.burnout,
                          borderColor: '#ef4444',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                    <h4 className="font-medium text-gray-900">Parent Engagement</h4>
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Engagement',
                          data: teacher.trends.engagement,
                          borderColor: '#3b82f6',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
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
                    <h4 className="font-medium text-gray-900">Student Performance</h4>
                    <TrendingUp className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Performance',
                          data: teacher.trends.performance,
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

export default TeacherProfiles;