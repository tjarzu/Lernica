import React from 'react';
import { Users2, MessageSquare, Calendar, Target, TrendingUp } from 'lucide-react';

const Collaboration: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Collaboration Hub</h1>
        <p className="text-gray-600">Work together to support your child's learning journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Co-Parent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Co-Parent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                {
                  action: 'Set new learning goal',
                  parent: 'Sarah',
                  time: '2 hours ago',
                  type: 'goal',
                  details: 'Complete Math Chapter 3 by Friday'
                },
                {
                  action: 'Added study note',
                  parent: 'John',
                  time: '1 day ago',
                  type: 'note',
                  details: 'Alex needs help with fractions'
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{activity.action}</h3>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">By {activity.parent}</p>
                    <p className="text-sm text-gray-700 mt-2">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Engagement Stats</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Users2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">Co-Parent Sync</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
                <p className="text-sm text-gray-600">Collaboration rate this week</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900">Recent Activity</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">Shared Notes</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-600">Goals Set</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">5</div>
                    <div className="text-sm text-gray-600">Meetings</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;