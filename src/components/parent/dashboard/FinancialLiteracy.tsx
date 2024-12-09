import React from 'react';
import { DollarSign, PiggyBank, TrendingUp, ArrowRight, Plus, X } from 'lucide-react';
import { useState } from 'react';

const FinancialLiteracy: React.FC = () => {
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [suggestion, setSuggestion] = useState({
    amount: '',
    action: 'save',
    description: ''
  });

  const availableLDBalance = 1250;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Financial Education</h2>
        <div className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-gray-900">{availableLDBalance} LD</span>
          <button
            onClick={() => setShowSuggestionModal(true)}
            className="ml-2 p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <PiggyBank className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Savings</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">750 LD</div>
          <div className="text-sm text-green-600 mt-1">+150 this week</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Investments</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">350 LD</div>
          <div className="text-sm text-blue-600 mt-1">12% return</div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">150 LD</div>
          <div className="text-sm text-purple-600 mt-1">Ready to use</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Recent Learning Activities</h3>
        {[
          { title: 'Completed Budgeting Module', points: 50, date: '2 days ago' },
          { title: 'Investment Quiz Score: 95%', points: 75, date: '1 week ago' },
          { title: 'Savings Goal Achieved', points: 100, date: '2 weeks ago' }
        ].map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm font-medium text-gray-900">{activity.title}</div>
              <div className="text-xs text-gray-500">{activity.date}</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-green-600">+{activity.points} LD</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {showSuggestionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Suggest LD Usage</h3>
                  <p className="text-sm text-gray-500">Available Balance: {availableLDBalance} LD</p>
                </div>
                <button
                  onClick={() => setShowSuggestionModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Amount (LD)</label>
                <input
                  type="number"
                  value={suggestion.amount}
                  onChange={(e) => setSuggestion({ ...suggestion, amount: e.target.value })}
                  max={availableLDBalance}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Action</label>
                <select
                  value={suggestion.action}
                  onChange={(e) => setSuggestion({ ...suggestion, action: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="save">Save</option>
                  <option value="invest">Invest</option>
                  <option value="donate">Donate</option>
                  <option value="spend">Spend Wisely</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={suggestion.description}
                  onChange={(e) => setSuggestion({ ...suggestion, description: e.target.value })}
                  rows={3}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Explain why and how to use the LD..."
                />
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Suggested Actions:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {suggestion.action === 'save' && [
                    'Create an emergency fund',
                    'Save for future education expenses',
                    'Build a rainy day fund'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {suggestion.action === 'invest' && [
                    'Research safe investment options',
                    'Consider long-term growth potential',
                    'Diversify investment portfolio'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {suggestion.action === 'donate' && [
                    'Support educational causes',
                    'Contribute to community projects',
                    'Help other students in need'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {suggestion.action === 'spend' && [
                    'Purchase educational materials',
                    'Invest in skill development',
                    'Buy tools for learning'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSuggestionModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add Suggestion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialLiteracy;