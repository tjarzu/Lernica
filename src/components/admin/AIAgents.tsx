import React, { useState } from 'react';
import { Brain, Calendar, Users, BookOpen, BarChart2, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'learning';
  type: 'scheduling' | 'analytics' | 'resource' | 'prediction';
  lastAction: string;
  accuracy: number;
  insights: string[];
}

const AIAgents: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents: AIAgent[] = [
    {
      id: '1',
      name: 'Schedule Optimizer',
      description: 'Optimizes class schedules and resource allocation',
      status: 'active',
      type: 'scheduling',
      lastAction: 'Optimized next semester\'s timetable',
      accuracy: 95,
      insights: [
        'Reduced scheduling conflicts by 45%',
        'Improved resource utilization by 30%',
        'Suggested 3 room reassignments for better capacity usage'
      ]
    },
    {
      id: '2',
      name: 'Resource Allocator',
      description: 'Manages and predicts resource requirements',
      status: 'active',
      type: 'resource',
      lastAction: 'Updated staff allocation predictions',
      accuracy: 92,
      insights: [
        'Predicted 15% increase in STEM resource needs',
        'Identified 3 understaffed departments',
        'Suggested optimal budget allocation'
      ]
    },
    {
      id: '3',
      name: 'Performance Predictor',
      description: 'Analyzes and predicts academic trends',
      status: 'learning',
      type: 'prediction',
      lastAction: 'Generated Q2 performance forecast',
      accuracy: 88,
      insights: [
        'Identified 5 classes needing additional support',
        'Predicted 12% improvement in math scores',
        'Flagged 3 areas for curriculum adjustment'
      ]
    }
  ];

  const getAgentIcon = (type: AIAgent['type']) => {
    switch (type) {
      case 'scheduling':
        return <Calendar className="w-5 h-5" />;
      case 'analytics':
        return <BarChart2 className="w-5 h-5" />;
      case 'resource':
        return <Users className="w-5 h-5" />;
      case 'prediction':
        return <Brain className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: AIAgent['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-600';
      case 'inactive':
        return 'bg-red-100 text-red-600';
      case 'learning':
        return 'bg-yellow-100 text-yellow-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl text-white">
              <Brain className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">AI Agents</h2>
          </div>
          <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm">
            3 Active Agents
          </span>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className={`bg-gray-50 rounded-xl p-4 border-2 transition-all cursor-pointer ${
              selectedAgent === agent.id
                ? 'border-cyan-500 shadow-lg'
                : 'border-transparent hover:border-cyan-200'
            }`}
            onClick={() => setSelectedAgent(agent.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {getAgentIcon(agent.type)}
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(agent.status)}`}>
                {agent.status}
              </span>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">{agent.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Accuracy</span>
              <span className="font-medium text-gray-900">{agent.accuracy}%</span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-600 rounded-full"
                style={{ width: `${agent.accuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {selectedAgent && (
        <div className="p-6 border-t border-gray-200">
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white">
            <h3 className="font-medium mb-4">Latest Insights</h3>
            <div className="space-y-3">
              {agents
                .find(a => a.id === selectedAgent)
                ?.insights.map((insight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{insight}</span>
                  </div>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-white/80">
              <span>Last action: {agents.find(a => a.id === selectedAgent)?.lastAction}</span>
              <Zap className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAgents;