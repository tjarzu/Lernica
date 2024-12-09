import React from 'react';
import { Book, Star, Calendar, Award, ChevronRight, Trophy } from 'lucide-react';
import LearningPath from '../../components/parent/storybook/LearningPath';
import XPProgress from '../../components/parent/storybook/XPProgress';

interface StoryEntry {
  id: string;
  date: string;
  title: string;
  type: 'activity' | 'achievement' | 'milestone';
  description: string;
  points: number;
  media?: string;
  tags: string[];
}

const Storybook: React.FC = () => {
  const stories: StoryEntry[] = [
    {
      id: '1',
      date: '2024-03-12',
      title: 'First Math Challenge Completed',
      type: 'milestone',
      description: 'Successfully completed the family math mystery challenge together. Alex showed great problem-solving skills!',
      points: 50,
      media: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['Mathematics', 'Problem Solving', 'Family Activity']
    },
    {
      id: '2',
      date: '2024-03-10',
      title: 'Science Experiment Day',
      type: 'activity',
      description: 'Conducted a home science experiment about plant growth. Great engagement and curiosity shown!',
      points: 30,
      media: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['Science', 'Hands-on Learning']
    },
    {
      id: '3',
      date: '2024-03-08',
      title: 'Reading Milestone Reached',
      type: 'milestone',
      description: 'Completed 10 books together this month! Celebrated with a special family discussion.',
      points: 100,
      tags: ['Reading', 'Milestone', 'Family Discussion']
    }
  ];

  const getTypeIcon = (type: StoryEntry['type']) => {
    switch (type) {
      case 'achievement':
        return <Award className="w-6 h-6 text-yellow-600" />;
      case 'activity':
        return <Book className="w-6 h-6 text-blue-600" />;
      case 'milestone':
        return <Star className="w-6 h-6 text-purple-600" />;
    }
  };

  const getTypeColor = (type: StoryEntry['type']) => {
    switch (type) {
      case 'achievement':
        return 'bg-yellow-100 text-yellow-800';
      case 'activity':
        return 'bg-blue-100 text-blue-800';
      case 'milestone':
        return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learning Journey</h1>
          <p className="text-gray-600">A storybook of your family's learning adventures</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-100 text-green-600 px-3 py-1 rounded-full">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">180 points earned</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">March 2024</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 overflow-hidden">
          <LearningPath />
        </div>
        <div className="overflow-hidden">
          <XPProgress />
        </div>
      </div>

      <div className="space-y-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden break-words">
            <div className="p-6 relative">
              {story.type === 'milestone' && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl"></div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className={`p-3 rounded-xl ${getTypeColor(story.type)} bg-opacity-20 shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    {getTypeIcon(story.type)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{story.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(story.type)}`}>
                        {story.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{story.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {story.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-100 text-green-600 rounded-full">
                    <Star className="w-4 h-4" />
                    <span className="font-medium">+{story.points}</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-1">
                    {new Date(story.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              {story.media && (
                <div className="mt-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                  <img
                    src={story.media}
                    alt={story.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              )}
              {story.type === 'milestone' && (
                <div className="mt-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">Achievement Unlocked!</h4>
                      <p className="text-sm text-gray-600">First family math challenge completed successfully</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storybook;