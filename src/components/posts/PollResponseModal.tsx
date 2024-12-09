import React from 'react';
import { X, PieChart, Users, Clock } from 'lucide-react';

interface Response {
  option: string;
  count: number;
  percentage: number;
  voters?: Array<{
    name: string;
    avatar: string;
    timestamp: string;
  }>;
}

interface PollResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  poll: {
    question: string;
    totalVotes: number;
    responses: Response[];
    anonymous: boolean;
    expiryDate?: string;
  };
}

const PollResponseModal: React.FC<PollResponseModalProps> = ({ isOpen, onClose, poll }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Poll Results</h2>
            <p className="text-sm text-gray-500">{poll.totalVotes} total votes</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{poll.question}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{poll.anonymous ? 'Anonymous voting' : 'Public voting'}</span>
              </div>
              {poll.expiryDate && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Expires {new Date(poll.expiryDate).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {poll.responses.map((response, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-900">{response.option}</span>
                  <span className="text-gray-500">{response.count} votes ({response.percentage}%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${response.percentage}%` }}
                  />
                </div>
                {!poll.anonymous && response.voters && response.voters.length > 0 && (
                  <div className="pt-2">
                    <div className="flex -space-x-2">
                      {response.voters.slice(0, 5).map((voter, voterIndex) => (
                        <img
                          key={voterIndex}
                          src={voter.avatar}
                          alt={voter.name}
                          className="w-6 h-6 rounded-full border-2 border-white"
                          title={`${voter.name} - ${voter.timestamp}`}
                        />
                      ))}
                      {response.voters.length > 5 && (
                        <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                          +{response.voters.length - 5}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-500">
                <PieChart className="w-5 h-5" />
                <span className="text-sm">Results update in real-time</span>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollResponseModal;