import React, { useState } from 'react';
import { Send, Image, FileText, PieChart, Plus, Users, MessageSquare, Calendar, PlusCircle } from 'lucide-react';
import PostComment from '../../components/posts/PostComment';
import PermissionSlip from '../../components/posts/PermissionSlip';
import PollResponseModal from '../../components/posts/PollResponseModal';
import { useLocation } from 'react-router-dom';

const Posts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'stories' | 'polls' | 'permissions' | 'announcements' | 'quizzes'>('all');
  const [showNewPost, setShowNewPost] = useState(false);
  const [postType, setPostType] = useState<'story' | 'poll' | 'permission' | 'announcement' | 'quiz'>('story');
  const [audience, setAudience] = useState<'parents' | 'students' | 'both'>('parents');
  const [postContent, setPostContent] = useState('');
  const [showMediaUpload, setShowMediaUpload] = useState(false);
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [showAdminPosts, setShowAdminPosts] = useState(false);
  const [showPollResponses, setShowPollResponses] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState<any>(null);
  const location = useLocation();
  const isParentView = location.pathname.startsWith('/parent');

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
          <p className="text-gray-600">Stay informed with class updates and announcements</p>
        </div>
        {!isParentView && (
          <button
            onClick={() => setShowNewPost(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Create Post</span>
          </button>
        )}
      </div>

      {!isParentView && showNewPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Create New Post</h3>
                <button
                  onClick={() => setShowNewPost(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Post Type</label>
                  <select
                    value={postType}
                    onChange={(e) => setPostType(e.target.value as typeof postType)}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="story">Story</option>
                    <option value="poll">Poll</option>
                    <option value="permission">Permission Slip</option>
                    <option value="announcement">Announcement</option>
                    <option value="quiz">Quiz</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Audience</label>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value as typeof audience)}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="parents">Parents Only</option>
                    <option value="students">Students Only</option>
                    <option value="both">Both Parents & Students</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Content</label>
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    rows={4}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your post content..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowMediaUpload(true)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <Image className="w-5 h-5" />
                    <span>Add Media</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      if (postType === 'poll') {
                        setShowCreatePoll(true);
                      }
                    }}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <PieChart className="w-5 h-5" />
                    <span>Add Poll</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowNewPost(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle post creation
                  setShowNewPost(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {(['all', 'stories', 'polls', 'permissions', 'announcements', 'quizzes'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === tab
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Admin & District Updates */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Admin & District Updates</h2>
          <button
            onClick={() => setShowAdminPosts(!showAdminPosts)}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            {showAdminPosts ? 'Show less' : 'View all'}
          </button>
        </div>
        {/* Add admin posts content */}
      </div>

      {/* Class Posts */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Class Posts</h2>
        {/* Add posts content */}
      </div>

      <PollResponseModal
        isOpen={showPollResponses}
        onClose={() => setShowPollResponses(false)}
        poll={selectedPoll}
      />
    </div>
  );
};

export default Posts;