import React, { useState } from 'react';
import { Brain, Send, BarChart2, Download, Filter } from 'lucide-react';

const DataChat: React.FC = () => {
  const [messages, setMessages] = useState<Array<{
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: string;
    data?: any;
  }>>([
    {
      id: '1',
      text: "Hello! I'm your data analysis assistant. How can I help you understand your school's metrics today?",
      sender: 'ai',
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user' as const,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: "I'm analyzing the data related to your query. Here's what I found...",
        sender: 'ai' as const,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Data Chat</h1>
        <p className="text-gray-600">Chat with AI to analyze school metrics and gain insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col h-[calc(100vh-12rem)]">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl text-white">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">AI Data Assistant</h2>
                <p className="text-sm text-gray-500">Ask questions about your school's data</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] rounded-xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  {message.data && (
                    <div className="mt-2 p-2 bg-white/10 rounded-lg">
                      <pre className="text-xs overflow-x-auto">
                        {JSON.stringify(message.data, null, 2)}
                      </pre>
                    </div>
                  )}
                  <div className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSend} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your school's data..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Queries</h3>
            <div className="space-y-2">
              {[
                "Show me teacher burnout trends",
                "Compare parent engagement across grades",
                "Analyze student behavior patterns",
                "Identify at-risk students",
                "Show satisfaction metrics"
              ].map((query, index) => (
                <button
                  key={index}
                  onClick={() => setInput(query)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-cyan-50 rounded-lg">
                <div className="flex items-center space-x-2 text-cyan-600 mb-2">
                  <BarChart2 className="w-5 h-5" />
                  <h4 className="font-medium">Latest Analysis</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Parent engagement has increased by 15% this month, correlating with improved student performance.
                </p>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export Analysis</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sources</h3>
            <div className="space-y-2">
              {[
                { name: 'Teacher Records', status: 'Synced' },
                { name: 'Student Data', status: 'Synced' },
                { name: 'Parent Feedback', status: 'Synced' },
                { name: 'Behavioral Reports', status: 'Syncing...' }
              ].map((source, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 text-sm"
                >
                  <span className="text-gray-700">{source.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    source.status === 'Synced'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {source.status}
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

export default DataChat;