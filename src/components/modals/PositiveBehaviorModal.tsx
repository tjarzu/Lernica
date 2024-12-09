import React, { useState } from 'react';
import { X, Award } from 'lucide-react';

interface PositiveBehaviorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PositiveBehaviorModal: React.FC<PositiveBehaviorModalProps> = ({ isOpen, onClose }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [behaviorType, setBehaviorType] = useState('');
  const [points, setPoints] = useState(10);
  const [feedback, setFeedback] = useState('');
  const [showReward, setShowReward] = useState(false);

  if (!isOpen) return null;

  const students = [
    { id: '1', name: 'Alex Johnson', grade: '9A' },
    { id: '2', name: 'Sarah Chen', grade: '9B' },
    { id: '3', name: 'Mike Davis', grade: '9A' },
    { id: '4', name: 'Emma Wilson', grade: '9C' },
  ];

  const behaviorTypes = [
    { id: 'academic', label: 'Academic Excellence' },
    { id: 'leadership', label: 'Leadership Skills' },
    { id: 'helpfulness', label: 'Helping Others' },
    { id: 'participation', label: 'Active Participation' },
    { id: 'improvement', label: 'Significant Improvement' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowReward(true);
    setTimeout(() => {
      setShowReward(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Positive Behavior Recognition</h2>
              <p className="text-sm text-gray-500">Award points for positive behavior</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Student</label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select a student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.grade})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Achievement Type</label>
            <select
              value={behaviorType}
              onChange={(e) => setBehaviorType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select achievement type</option>
              {behaviorTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Points to Award</label>
            <div className="flex items-center space-x-4">
              {[5, 10, 15, 20].map((value) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="points"
                    value={value}
                    checked={points === value}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">+{value}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Add a positive comment..."
              required
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Award Points
            </button>
          </div>
        </form>
      </div>

      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-xl p-6 shadow-2xl transform animate-bounce">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Points Awarded!</h3>
              <p className="text-gray-600">You awarded <span className="font-bold text-green-600">+{points}</span> points for positive behavior.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PositiveBehaviorModal;