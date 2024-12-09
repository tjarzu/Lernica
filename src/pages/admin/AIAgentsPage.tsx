import React from 'react';
import { Brain, Calendar, Users, BookOpen, BarChart2, Zap, AlertTriangle, CheckCircle, Settings, Target } from 'lucide-react';
import AIAgents from '../../components/admin/AIAgents';

const AIAgentsPage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI Agents</h1>
        <p className="text-gray-600">Automated scheduling, resource allocation, and data-driven insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold">Automated Scheduling</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Next Semester Planning</h3>
                <span className="px-2 py-1 bg-green-400/20 text-green-100 rounded-full text-xs">In Progress</span>
              </div>
              <p className="text-sm opacity-90">AI is optimizing class schedules based on teacher availability and room capacity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Resource Distribution</h3>
                <span className="px-2 py-1 bg-blue-400/20 text-blue-100 rounded-full text-xs">Analyzing</span>
              </div>
              <p className="text-sm opacity-90">Predicting resource needs and suggesting optimal allocations</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold">Predictive Analytics</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Enrollment Forecasting</h3>
                <span className="px-2 py-1 bg-yellow-400/20 text-yellow-100 rounded-full text-xs">Learning</span>
              </div>
              <p className="text-sm opacity-90">Analyzing historical data to predict future enrollment trends</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Department Analysis</h3>
                <span className="px-2 py-1 bg-green-400/20 text-green-100 rounded-full text-xs">Active</span>
              </div>
              <p className="text-sm opacity-90">Identifying performance patterns and resource requirements</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <AIAgents />
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl text-white">
              <Settings className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">AI Workflow Configuration</h2>
          </div>
          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
            Save Configuration
          </button>
        </div>
        
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-gray-50 rounded-xl p-4 min-h-[200px] border-2 border-dashed border-gray-300">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Available Modules</h3>
              <div className="space-y-2">
                {[
                  { name: 'Data Collection', icon: <Brain className="w-4 h-4" /> },
                  { name: 'Analysis', icon: <BarChart2 className="w-4 h-4" /> },
                  { name: 'Prediction', icon: <Target className="w-4 h-4" /> },
                  { name: 'Action', icon: <Zap className="w-4 h-4" /> }
                ].map((module, index) => (
                  <div
                    key={index}
                    draggable
                    className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-shadow"
                  >
                    {module.icon}
                    <span className="text-sm font-medium text-gray-700">{module.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-[2] bg-gray-50 rounded-xl p-4 min-h-[200px] border-2 border-dashed border-gray-300">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Workflow Canvas</h3>
              <div className="grid grid-cols-4 gap-4 h-full">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-24 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                  >
                    <span className="text-sm text-gray-400">Drop module here</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-cyan-600" />
              <h3 className="font-medium text-gray-900">Workflow Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Drag modules from the left panel to the workflow canvas</li>
              <li>• Connect modules by drawing lines between them</li>
              <li>• Double-click a module to configure its parameters</li>
              <li>• Right-click to delete a module or connection</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl text-white">
              <Settings className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">AI Configuration</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Learning Parameters</h3>
            <div className="space-y-2">
              {[
                { label: 'Data Collection Rate', value: 85 },
                { label: 'Analysis Frequency', value: 92 },
                { label: 'Prediction Confidence', value: 78 }
              ].map((param, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{param.label}</span>
                    <span className="font-medium text-gray-900">{param.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${param.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">System Status</h3>
            <div className="space-y-3">
              {[
                { label: 'Model Training', status: 'Active', color: 'green' },
                { label: 'Data Synchronization', status: 'Running', color: 'blue' },
                { label: 'Error Rate', status: '0.05%', color: 'yellow' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{item.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs bg-${item.color}-100 text-${item.color}-600`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;