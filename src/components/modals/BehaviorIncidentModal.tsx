import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  grade: string;
  parent: {
    name: string;
    email: string;
  };
}

interface BehaviorIncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BehaviorIncidentModal: React.FC<BehaviorIncidentModalProps> = ({ isOpen, onClose }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [severity, setSeverity] = useState('low');
  const [description, setDescription] = useState('');
  const [shareWithParent, setShareWithParent] = useState(true);
  const [notifyImmediately, setNotifyImmediately] = useState(false);

  if (!isOpen) return null;

  const classes = [
    { id: '9A', name: 'Grade 9A' },
    { id: '9B', name: 'Grade 9B' },
    { id: '9C', name: 'Grade 9C' },
  ];

  const students: Student[] = [
    { 
      id: '1', 
      name: 'Alex Johnson', 
      grade: '9A',
      parent: { name: 'Sarah Johnson', email: 'sarah@example.com' }
    },
    { 
      id: '2', 
      name: 'Sarah Chen', 
      grade: '9B',
      parent: { name: 'David Chen', email: 'david@example.com' }
    },
    { 
      id: '3', 
      name: 'Mike Davis', 
      grade: '9A',
      parent: { name: 'Lisa Davis', email: 'lisa@example.com' }
    },
    { 
      id: '4', 
      name: 'Emma Wilson', 
      grade: '9C',
      parent: { name: 'John Wilson', email: 'john@example.com' }
    },
  ];

  const incidentTypes = [
    { id: 'disruptive', label: 'Disruptive Behavior' },
    { id: 'academic', label: 'Academic Dishonesty' },
    { id: 'attendance', label: 'Attendance Issues' },
    { id: 'bullying', label: 'Bullying' },
    { id: 'inappropriate', label: 'Inappropriate Language' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the incident submission here
    console.log({
      class: selectedClass,
      student: selectedStudent,
      incidentType,
      severity,
      description,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Log Behavior Incident</h2>
              <p className="text-sm text-gray-500">Record student behavioral concerns</p>
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
            <label className="text-sm font-medium text-gray-700">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedStudent('');
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a class</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Student</label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a student</option>
              {students
                .filter(student => !selectedClass || student.grade === selectedClass)
                .map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.grade})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Incident Type</label>
            <select
              value={incidentType}
              onChange={(e) => setIncidentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select incident type</option>
              {incidentTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Severity Level</label>
            <div className="flex space-x-4">
              {['low', 'medium', 'high'].map((level) => (
                <label key={level} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="severity"
                    value={level}
                    checked={severity === level}
                    onChange={(e) => setSeverity(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Provide details about the incident..."
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="shareWithParent"
                checked={shareWithParent}
                onChange={(e) => setShareWithParent(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="shareWithParent" className="text-sm text-gray-700">
                Share with parent
              </label>
            </div>

            {shareWithParent && selectedStudent && (
              <div className="ml-6">
                <div className="text-sm text-gray-600 mb-2">
                  Parent: {students.find(s => s.id === selectedStudent)?.parent.name}
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notifyImmediately"
                    checked={notifyImmediately}
                    onChange={(e) => setNotifyImmediately(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="notifyImmediately" className="text-sm text-gray-700">
                    Notify parent immediately
                  </label>
                </div>
              </div>
            )}
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
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Log Incident
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BehaviorIncidentModal;