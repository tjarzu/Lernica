import React, { useState } from 'react';
import { Users, MessageSquare, Target, Book, Calendar, Search, Plus, Filter, BookOpen, FileText, Download } from 'lucide-react';
import ResourceCard from '../components/collaboration/ResourceCard';
import AIRecommendations from '../components/collaboration/AIRecommendations';

interface Room {
  id: string;
  name: string;
  type: 'teacher' | 'parent' | 'admin';
  description: string;
  members: number;
  lastActive: string;
  tags: string[];
}

interface Forum {
  id: string;
  title: string;
  category: string;
  posts: number;
  lastPost: {
    author: string;
    timestamp: string;
  };
}

const Collaboration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'forums'>('rooms');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'teacher' | 'parent' | 'admin'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedResourceType, setSelectedResourceType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const rooms: Room[] = [
    {
      id: '1',
      name: 'Science Curriculum Planning',
      type: 'teacher',
      description: 'Collaborate on science curriculum development and share resources',
      members: 12,
      lastActive: '5 mins ago',
      tags: ['Science', 'Curriculum', 'Resources']
    },
    {
      id: '2',
      name: 'Grade 9 Parent Committee',
      type: 'parent',
      description: 'Discuss student progress and upcoming events with parents',
      members: 25,
      lastActive: '1 hour ago',
      tags: ['Grade 9', 'Parents', 'Events']
    },
    {
      id: '3',
      name: 'School Event Planning',
      type: 'admin',
      description: 'Coordinate with administration on upcoming school events',
      members: 8,
      lastActive: '30 mins ago',
      tags: ['Events', 'Planning', 'Admin']
    }
  ];

  const forums: Forum[] = [
    {
      id: '1',
      title: 'Teaching Best Practices',
      category: 'Professional Development',
      posts: 156,
      lastPost: {
        author: 'Sarah Johnson',
        timestamp: '10 mins ago'
      }
    },
    {
      id: '2',
      title: 'Technology in Education',
      category: 'Resources',
      posts: 89,
      lastPost: {
        author: 'Michael Chen',
        timestamp: '1 hour ago'
      }
    },
    {
      id: '3',
      title: 'Parent Communication Strategies',
      category: 'Parent Engagement',
      posts: 45,
      lastPost: {
        author: 'Emma Davis',
        timestamp: '2 hours ago'
      }
    }
  ];

  const resources = [
    {
      title: 'Algebra Fundamentals Worksheet',
      description: 'Comprehensive worksheet covering basic algebraic concepts with practice problems and solutions.',
      type: 'Worksheet',
      subject: 'Mathematics',
      grade: 'Grade 9',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
      },
      rating: 4.8,
      downloads: 234,
      tags: ['Algebra', 'Practice Problems', 'Common Core'],
      fileUrl: '#'
    },
    {
      title: 'Scientific Method Lab Guide',
      description: 'Step-by-step guide for teaching the scientific method through hands-on experiments.',
      type: 'Lab Guide',
      subject: 'Science',
      grade: 'Grade 10',
      author: {
        name: 'Michael Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
      },
      rating: 4.9,
      downloads: 156,
      tags: ['Scientific Method', 'Experiments', 'Hands-on'],
      fileUrl: '#'
    }
  ];

  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography'];
  const grades = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
  const resourceTypes = ['Worksheet', 'Lesson Plan', 'Activity', 'Assessment', 'Lab Guide'];

  const filteredRooms = rooms.filter(room => {
    if (selectedCategory !== 'all' && room.type !== selectedCategory) return false;
    if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Collaboration Hub</h1>
          <p className="text-gray-600">Connect, share, and grow with your educational community</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create Room</span>
        </button>
      </div>

      {/* Resource Library Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Resource Library</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Grade Level</label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Grades</option>
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Resource Type</label>
              <select
                value={selectedResourceType}
                onChange={(e) => setSelectedResourceType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Types</option>
                {resourceTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 mb-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="mb-8">
        <AIRecommendations />
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search rooms and forums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'rooms'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Rooms
          </button>
          <button
            onClick={() => setActiveTab('forums')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'forums'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Forums
          </button>
        </div>
      </div>

      {activeTab === 'rooms' && (
        <>
          <div className="flex space-x-2 mb-6">
            {(['all', 'teacher', 'parent', 'admin'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${
                    room.type === 'teacher' ? 'bg-green-100 text-green-600' :
                    room.type === 'parent' ? 'bg-purple-100 text-purple-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {room.type === 'teacher' ? <Book className="w-5 h-5" /> :
                     room.type === 'parent' ? <Users className="w-5 h-5" /> :
                     <Target className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{room.members}</span>
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{room.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Active {room.lastActive}</span>
                  <button className="text-blue-600 hover:text-blue-700">Join Room</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'forums' && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Discussion Forums</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {forums.map((forum) => (
              <div key={forum.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{forum.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-500">{forum.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{forum.posts} posts</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-900">Last post by {forum.lastPost.author}</div>
                    <div className="text-xs text-gray-500">{forum.lastPost.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collaboration;