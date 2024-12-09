import React from 'react';
import { Target, CheckCircle, ChevronRight } from 'lucide-react';

const CareerGoals: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Career Goals</h2>
        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          Engineering Track
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Completed Milestones</h3>
          <div className="space-y-3">
            {[
              'Completed Python Programming Basics',
              'Attended Engineering Workshop',
              'Joined Robotics Club'
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">{milestone}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Next Steps</h3>
          <div className="space-y-3">
            {[
              'Register for Advanced Mathematics',
              'Complete Science Fair Project',
              'Schedule College Counseling'
            ].map((step, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">{step}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Parent Support Tips</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">• Encourage participation in STEM activities</li>
            <li className="text-sm text-gray-600">• Help research summer internship opportunities</li>
            <li className="text-sm text-gray-600">• Discuss college engineering programs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerGoals;