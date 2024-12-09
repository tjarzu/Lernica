import React, { useState } from 'react';
import ParentEngagement from '../components/analytics/ParentEngagement';
import TeacherWellbeing from '../components/analytics/TeacherWellbeing';
import BehavioralTrends from '../components/analytics/BehavioralTrends';
import RiskAssessment from '../components/analytics/RiskAssessment';
import AIPredictions from '../components/analytics/AIPredictions';
import { Download, MessageSquare } from 'lucide-react';
import Papa from 'papaparse';
import { generateAnalyticsReport } from '../utils/pdfExport';

const Analytics: React.FC = () => {
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      const doc = await generateAnalyticsReport();
      if (doc) {
        doc.save('analytics-report.pdf');
      }
    } catch (error) {
      console.error('Error exporting PDF:', error);
    }
    setIsExporting(false);
  };

  const exportToCSV = () => {
    const data = [
      ['Category', 'Value', 'Trend'],
      ['Parent Engagement', '85%', 'Increasing'],
      ['Student Behavior', '92%', 'Stable'],
      ['Teacher Wellbeing', '78%', 'Decreasing'],
      ['At-Risk Students', '8', 'Stable'],
      ['Parent Messages', '432', 'Increasing'],
      ['Parent Meetings', '24', 'Increasing'],
      ['Burnout Rate', '35%', 'Decreasing'],
      ['Workload Score', '75%', 'Stable']
    ];

    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'analytics-data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 analytics-content">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive overview of class performance and engagement metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAIChat(!showAIChat)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat with AI</span>
            </button>
            <div className="relative">
              <button
                onClick={() => document.getElementById('exportDropdown')?.classList.toggle('hidden')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Export</span>
              </button>
              <div
                id="exportDropdown"
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 hidden z-10"
              >
                <button
                  onClick={exportToPDF}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                  disabled={isExporting}
                >
                  {isExporting ? 'Generating PDF...' : 'Export as PDF'}
                </button>
                <button
                  onClick={exportToCSV}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                >
                  Export as CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAIChat && (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">AI Analytics Assistant</h3>
            <button
              onClick={() => setShowAIChat(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-800">
                  Hello! I can help you analyze your data. What would you like to know?
                </p>
              </div>
              {aiMessage && (
                <div className="bg-blue-100 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm text-gray-800">{aiMessage}</p>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem('message') as HTMLInputElement;
                setAiMessage(input.value);
                input.value = '';
              }}
              className="flex space-x-2"
            >
              <input
                type="text"
                name="message"
                placeholder="Ask about your data..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ParentEngagement />
        <TeacherWellbeing />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BehavioralTrends />
        <RiskAssessment />
      </div>

      <div className="mt-6">
        <AIPredictions />
      </div>
    </div>
  );
};

export default Analytics;