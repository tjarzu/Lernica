import React, { useState } from 'react';
import { Copy, Users2, Bell, Lock, Globe, School, Plus, X } from 'lucide-react';

interface Child {
  id: string;
  name: string;
  grade: string;
  code: string;
  avatar: string;
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'children' | 'coparent' | 'notifications'>('general');
  const [showAddChildModal, setShowAddChildModal] = useState(false);
  const [showCopied, setShowCopied] = useState<string | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Smith',
    email: 'john@example.com',
    language: 'English'
  });

  const [children, setChildren] = useState<Child[]>([
    {
      id: '1',
      name: 'Alex Johnson',
      grade: 'Grade 9',
      code: 'AJ2024XYZ',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    }
  ]);

  const generateChildCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setShowCopied(code);
    setTimeout(() => setShowCopied(null), 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {[
          { id: 'general', label: 'General', icon: <Globe className="w-4 h-4" /> },
          { id: 'children', label: 'Children', icon: <School className="w-4 h-4" /> },
          { id: 'coparent', label: 'Co-Parent', icon: <Users2 className="w-4 h-4" /> },
          { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-green-100 text-green-600'
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
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Language</label>
                  <select 
                    name="language"
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
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
                  <Users2 className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Two-Factor Authentication</span>
                </div>
                <span className="text-sm text-green-500">Enabled</span>
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Delete Account</h3>
                <p className="text-sm text-red-600 mb-4">
                  Once you delete your account, all your data will be permanently removed. This action cannot be undone.
                </p>
                <button
                  onClick={() => setShowDeleteConfirmation(true)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'children' && (
        <div className="space-y-6">
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Children</h2>
                <button 
                  onClick={() => setShowAddChildModal(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Child</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {children.map((child) => (
                  <div key={child.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={child.avatar}
                        alt={child.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{child.name}</h3>
                        <p className="text-sm text-gray-500">{child.grade}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm">
                        {child.code}
                      </div>
                      <button
                        onClick={() => copyToClipboard(child.code)}
                        className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors relative"
                      >
                        <Copy className="w-5 h-5" />
                        {showCopied === child.code && (
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
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Delete Account</h3>
              <p className="text-sm text-red-600 mb-4">
                Deleting your account will remove all child data and access codes. This action cannot be undone.
              </p>
              <button
                onClick={() => setShowDeleteConfirmation(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'coparent' && (
        <div className="space-y-6">
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Co-Parent Settings</h2>
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users2 className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">Co-Parent Access</h3>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Share this code with your co-parent to grant access:</p>
                  <div className="flex items-center space-x-3">
                    <div className="px-4 py-2 bg-white rounded-lg font-mono text-sm flex-1">
                      CP2024XYZ789
                    </div>
                    <button
                      onClick={() => copyToClipboard('CP2024XYZ789')}
                      className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Sharing Preferences</h3>
                  {[
                    'Share goal updates automatically',
                    'Allow co-parent to set goals',
                    'Share emotional check-ins',
                    'Share academic progress'
                  ].map((pref, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{pref}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Delete Account</h3>
              <p className="text-sm text-red-600 mb-4">
                Deleting your account will remove all co-parenting settings and shared data. This action cannot be undone.
              </p>
              <button
                onClick={() => setShowDeleteConfirmation(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { title: 'Child Activity Updates', description: 'Get notified about your child\'s progress and activities' },
                  { title: 'Teacher Messages', description: 'Receive notifications for new messages from teachers' },
                  { title: 'Goal Reminders', description: 'Get reminders about upcoming learning goals' },
                  { title: 'Co-Parent Updates', description: 'Notifications about co-parent activities and changes' }
                ].map((pref, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{pref.title}</h3>
                      <p className="text-sm text-gray-500">{pref.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Delete Account</h3>
              <p className="text-sm text-red-600 mb-4">
                Deleting your account will remove all notification preferences and account data. This action cannot be undone.
              </p>
              <button
                onClick={() => setShowDeleteConfirmation(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddChildModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Add Child</h3>
                <button
                  onClick={() => setShowAddChildModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Child's Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter child's name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Grade</label>
                <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option value="">Select grade</option>
                  {['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <div className="pt-4 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddChildModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add Child
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Confirm Account Deletion</h3>
                <button
                  onClick={() => setShowDeleteConfirmation(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-red-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-600">
                  This action will permanently delete your account and all associated data. This includes:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-red-600 list-disc list-inside">
                  <li>All personal information</li>
                  <li>Child data and access codes</li>
                  <li>Co-parenting settings</li>
                  <li>Learning goals and notes</li>
                  <li>Engagement history</li>
                </ul>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">Type "DELETE" to confirm</label>
                <input
                  type="text"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Type DELETE in all caps"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteConfirmation(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Permanently Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;