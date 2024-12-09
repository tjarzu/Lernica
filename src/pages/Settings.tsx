import React, { useState } from 'react';
import { Copy, Users, Bell, Lock, Globe, School } from 'lucide-react';

interface ClassCode {
  id: string;
  code: string;
  grade: string;
  students: number;
  created: string;
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'classes' | 'notifications'>('general');
  const [showCopied, setShowCopied] = useState<string | null>(null);
  const [showNewClassModal, setShowNewClassModal] = useState(false);
  const [newClassData, setNewClassData] = useState({
    grade: '',
    section: ''
  });
  const [formData, setFormData] = useState({
    name: 'Abubakar',
    email: 'abubakar@example.com',
    language: 'English'
  });

  const classCodes: ClassCode[] = [
    {
      id: '1',
      code: 'MATH9A2024',
      grade: 'Grade 9A',
      students: 25,
      created: '2024-01-15'
    },
    {
      id: '2',
      code: 'MATH9B2024',
      grade: 'Grade 9B',
      students: 22,
      created: '2024-01-15'
    }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setShowCopied(code);
    setTimeout(() => setShowCopied(null), 2000);
  };

  const generateClassCode = (grade: string, section: string) => {
    const year = new Date().getFullYear();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${grade}${section}${year}${random}`;
  };

  const handleAddClass = () => {
    const newCode = generateClassCode(
      newClassData.grade,
      newClassData.section
    );
    // Add new class code logic here
    setShowNewClassModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and class settings</p>
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {[
          { id: 'general', label: 'General', icon: <Globe className="w-4 h-4" /> },
          { id: 'classes', label: 'Classes', icon: <School className="w-4 h-4" /> },
          { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Language</label>
                <select 
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Change Password</span>
                </div>
                <span className="text-sm text-gray-500">Last changed 30 days ago</span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Two-Factor Authentication</span>
                </div>
                <span className="text-sm text-green-500">Enabled</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'classes' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Class Codes</h2>
              <button 
                onClick={() => setShowNewClassModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Generate New Code
              </button>
            </div>
            <div className="space-y-4">
              {classCodes.map((classCode) => (
                <div key={classCode.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{classCode.grade}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>{classCode.students} students</span>
                      <span>Created {new Date(classCode.created).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm">
                      {classCode.code}
                    </div>
                    <button
                      onClick={() => copyToClipboard(classCode.code)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors relative"
                    >
                      <Copy className="w-5 h-5" />
                      {showCopied === classCode.code && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { title: 'Parent Messages', description: 'Get notified when parents send you messages' },
              { title: 'Student Updates', description: 'Receive updates about student progress and behavior' },
              { title: 'Admin Announcements', description: 'Important announcements from administration' },
              { title: 'Class Reminders', description: 'Reminders about upcoming classes and events' }
            ].map((pref, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{pref.title}</h3>
                  <p className="text-sm text-gray-500">{pref.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {showNewClassModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Generate New Class Code</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Grade</label>
                <select
                  value={newClassData.grade}
                  onChange={(e) => setNewClassData(prev => ({ ...prev, grade: e.target.value }))}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Grade</option>
                  {['7', '8', '9', '10'].map(grade => (
                    <option key={grade} value={grade}>Grade {grade}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Section</label>
                <select
                  value={newClassData.section}
                  onChange={(e) => setNewClassData(prev => ({ ...prev, section: e.target.value }))}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Section</option>
                  {['A', 'B', 'C'].map(section => (
                    <option key={section} value={section}>Section {section}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowNewClassModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleAddClass}
                disabled={!newClassData.grade || !newClassData.section}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;