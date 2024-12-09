import React from 'react';
import { Activity, Users, TrendingUp, TrendingDown } from 'lucide-react';

const BehavioralTrends: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Behavioral Patterns</h2>
        <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-teal-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-teal-600" />
            <TrendingUp className="w-5 h-5 text-teal-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">82%</div>
          <div className="text-sm text-gray-600">Positive Behaviors</div>
        </div>

        <div className="bg-rose-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-rose-600" />
            <TrendingDown className="w-5 h-5 text-rose-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">18%</div>
          <div className="text-sm text-gray-600">Behavioral Concerns</div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Behavior Categories</h3>
          <div className="space-y-3">
            {[
              { category: 'Active Participation', value: 45, status: 'High Risk' },
              { category: 'Peer Collaboration', value: 65, status: 'Medium Risk' },
              { category: 'Task Completion', value: 78, status: 'Low Risk' },
              { category: 'Off-Task Behavior', value: 22, status: 'Medium Risk' },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.category}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    item.status === 'High Risk' ? 'bg-red-100 text-red-700' :
                    item.status === 'Medium Risk' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className={`h-full rounded-full ${
                      item.status === 'High Risk' ? 'bg-red-600' :
                      item.status === 'Medium Risk' ? 'bg-yellow-600' :
                      'bg-green-600'
                    }`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Incidents</h3>
          <div className="space-y-3">
            {[
              {
                student: 'Alex Johnson',
                behavior: 'Disruptive behavior during class',
                time: '2 hours ago',
                severity: 'High'
              },
              {
                student: 'Emma Wilson',
                behavior: 'Incomplete homework submission',
                time: '1 day ago',
                severity: 'Medium'
              },
              {
                student: 'Michael Chen',
                behavior: 'Outstanding group presentation',
                time: '2 days ago',
                severity: 'Positive'
              },
            ].map((incident, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${incident.student}`}
                    alt={incident.student}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{incident.student}</div>
                    <div className="text-xs text-gray-500">{incident.behavior}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{incident.time}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    incident.severity === 'High' ? 'bg-red-100 text-red-700' :
                    incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {incident.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehavioralTrends;