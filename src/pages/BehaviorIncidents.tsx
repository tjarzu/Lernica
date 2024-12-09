import React from 'react';
import { AlertTriangle, TrendingUp, TrendingDown, Users, Brain, Clock } from 'lucide-react';

const BehaviorIncidents: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Behavior Incidents</h1>
        <p className="text-gray-600">Monitor and track student behavioral patterns for early intervention</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Today</span>
          </div>
          <div className="text-3xl font-bold mb-1">8</div>
          <div className="text-white/80">Active Incidents</div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+2 from yesterday</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">This Week</span>
          </div>
          <div className="text-3xl font-bold mb-1">5</div>
          <div className="text-white/80">High-Risk Students</div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span>-2 from last week</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Intervention</span>
          </div>
          <div className="text-3xl font-bold mb-1">85%</div>
          <div className="text-white/80">Success Rate</div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+5% this month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Incidents */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Incidents</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {
                student: 'Alex Johnson',
                grade: '9A',
                type: 'Disruptive Behavior',
                time: '2 hours ago',
                severity: 'High',
                description: 'Repeatedly interrupting class discussion'
              },
              {
                student: 'Emma Wilson',
                grade: '9B',
                type: 'Academic Dishonesty',
                time: '1 day ago',
                severity: 'Medium',
                description: 'Suspected copying during quiz'
              },
              {
                student: 'Michael Chen',
                grade: '9A',
                type: 'Attendance',
                time: '2 days ago',
                severity: 'Low',
                description: 'Late to class for third time this week'
              }
            ].map((incident, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${incident.student}`}
                  alt={incident.student}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{incident.student}</h3>
                      <p className="text-sm text-gray-500">{incident.grade}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      incident.severity === 'High' 
                        ? 'bg-red-100 text-red-700'
                        : incident.severity === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {incident.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{incident.description}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {incident.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behavior Patterns */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Behavior Patterns</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[
                { category: 'Class Participation', value: 65, trend: 'up' },
                { category: 'Peer Interaction', value: 78, trend: 'up' },
                { category: 'Task Completion', value: 45, trend: 'down' },
                { category: 'Following Rules', value: 82, trend: 'stable' },
                { category: 'Emotional Control', value: 58, trend: 'down' }
              ].map((pattern, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{pattern.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{pattern.value}%</span>
                      {pattern.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : pattern.trend === 'down' ? (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        pattern.value >= 70 ? 'bg-green-500' :
                        pattern.value >= 50 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${pattern.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Behavior Predictions & Insights</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <h4 className="font-medium mb-2">High-Risk Students</h4>
            <p className="text-sm opacity-90">5 students showing increased behavioral risks. Immediate intervention recommended.</p>
            <div className="mt-3 flex items-center text-xs">
              <div className="bg-red-400/10 text-red-100 px-2 py-1 rounded-full border border-red-400/20">
                Priority: High
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <h4 className="font-medium mb-2">Class Dynamics</h4>
            <p className="text-sm opacity-90">Social interactions have improved by 15% this week. Group activities showing positive results.</p>
            <div className="mt-3 flex items-center text-xs">
              <div className="bg-green-400/10 text-green-100 px-2 py-1 rounded-full border border-green-400/20">
                Trending Up
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <h4 className="font-medium mb-2">Intervention Success</h4>
            <p className="text-sm opacity-90">Previous interventions show 85% success rate. Continue current strategies.</p>
            <div className="mt-3 flex items-center text-xs">
              <div className="bg-blue-400/10 text-blue-100 px-2 py-1 rounded-full border border-blue-400/20">
                Data Insight
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorIncidents;