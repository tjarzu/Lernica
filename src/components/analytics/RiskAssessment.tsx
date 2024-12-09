import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const RiskAssessment: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">At-Risk Students</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded-full">8 students</span>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { 
            name: 'Alex Johnson',
            grade: '9A',
            risk: 'High',
            indicators: ['Declining grades', 'Emotional stress', 'Low participation'],
            trend: 'negative'
          },
          { 
            name: 'Emma Wilson',
            grade: '9B',
            risk: 'Medium',
            indicators: ['Attendance issues', 'Incomplete assignments'],
            trend: 'stable'
          },
          { 
            name: 'Michael Chen',
            grade: '9A',
            risk: 'High',
            indicators: ['Behavioral concerns', 'Social withdrawal'],
            trend: 'negative'
          },
        ].map((student, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                  alt={student.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-500">{student.grade}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                student.risk === 'High' 
                  ? 'bg-red-100 text-red-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {student.risk} Risk
              </span>
            </div>
            <div className="ml-13">
              <div className="flex flex-wrap gap-2 mb-2">
                {student.indicators.map((indicator, i) => (
                  <span key={i} className="text-xs bg-white px-2 py-1 rounded-full border border-gray-200">
                    {indicator}
                  </span>
                ))}
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                <span>View detailed report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskAssessment;