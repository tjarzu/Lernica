import React from 'react';
import { Users, ArrowUp, MessageSquare, Calendar } from 'lucide-react';

const ParentEngagement: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Parent Engagement</h2>
        <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">+12%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
          <div className="text-sm text-gray-600 break-words">Parent Participation</div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">+8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">432</div>
          <div className="text-sm text-gray-600 break-words">Messages Exchanged</div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">+15%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
          <div className="text-sm text-gray-600 break-words">Meetings Conducted</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-900">Most Engaged Parents</div>
            <div className="text-xs text-gray-500">Based on interaction frequency</div>
          </div>
          <ArrowUp className="w-4 h-4 text-green-500" />
        </div>

        <div className="space-y-3">
          {[
            { name: 'Sarah Johnson', engagement: 95 },
            { name: 'Michael Chen', engagement: 88 },
            { name: 'Emma Davis', engagement: 82 },
            { name: 'James Wilson', engagement: 78 },
          ].map((parent, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${parent.name}`}
                  alt={parent.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-900">{parent.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${parent.engagement}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{parent.engagement}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentEngagement;