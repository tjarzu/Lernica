import React from 'react';
import { MessageSquare, Users, Clock, Bell } from 'lucide-react';

const EngagementMetrics: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Engagement Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Parent-Teacher Interaction</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Messages</div>
                  <div className="text-xs text-gray-500">Last message: 2 hours ago</div>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">24 total</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Meetings</div>
                  <div className="text-xs text-gray-500">Next meeting: March 15</div>
                </div>
              </div>
              <span className="text-sm font-medium text-purple-600">5 scheduled</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { title: 'Math Assignment Submitted', time: '1 hour ago', type: 'assignment' },
              { title: 'Joined Study Group', time: '3 hours ago', type: 'group' },
              { title: 'Completed Quiz', time: '5 hours ago', type: 'quiz' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'assignment' ? 'bg-green-100' :
                  activity.type === 'group' ? 'bg-blue-100' :
                  'bg-yellow-100'
                }`}>
                  {activity.type === 'assignment' ? (
                    <Clock className={`w-5 h-5 ${
                      activity.type === 'assignment' ? 'text-green-600' :
                      activity.type === 'group' ? 'text-blue-600' :
                      'text-yellow-600'
                    }`} />
                  ) : activity.type === 'group' ? (
                    <Users className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Bell className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementMetrics;