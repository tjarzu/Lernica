import React from 'react';
import { BookOpen, Link as LinkIcon, Video, Award, Star } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'course' | 'video' | 'article' | 'scholarship';
  provider: string;
  description: string;
  link: string;
  rating: number;
  cost?: string;
  duration?: string;
  deadline?: string;
  tags: string[];
}

interface ResourceMatchingProps {
  careerTitle?: string;
  collegeMajor?: string;
  skills: string[];
}

const ResourceMatching: React.FC<ResourceMatchingProps> = ({ careerTitle, collegeMajor, skills }) => {
  const resources: Resource[] = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      type: 'course',
      provider: 'Coursera',
      description: 'A comprehensive introduction to computer science fundamentals.',
      link: 'https://coursera.org/cs101',
      rating: 4.8,
      duration: '8 weeks',
      cost: 'Free',
      tags: ['Computer Science', 'Programming', 'Beginner']
    },
    {
      id: '2',
      title: 'STEM Excellence Scholarship',
      type: 'scholarship',
      provider: 'National Science Foundation',
      description: 'Merit-based scholarship for students pursuing STEM degrees.',
      link: 'https://nsf.gov/scholarships',
      rating: 4.9,
      deadline: '2024-12-31',
      cost: '$10,000',
      tags: ['Scholarship', 'STEM', 'Merit-based']
    }
  ];

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'course':
        return <BookOpen className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'article':
        return <LinkIcon className="w-5 h-5" />;
      case 'scholarship':
        return <Award className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Resource['type']) => {
    switch (type) {
      case 'course':
        return 'bg-blue-100 text-blue-600';
      case 'video':
        return 'bg-red-100 text-red-600';
      case 'article':
        return 'bg-green-100 text-green-600';
      case 'scholarship':
        return 'bg-purple-100 text-purple-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Resources</h2>
        <p className="text-sm text-gray-600 mt-1">
          Curated resources to help achieve {careerTitle || collegeMajor} goals
        </p>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                <div className={`p-3 rounded-xl ${getTypeColor(resource.type)}`}>
                  {getTypeIcon(resource.type)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                    <div>
                      <h3 className="font-medium text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.provider}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-3 overflow-hidden">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 space-y-3 sm:space-y-0">
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      {resource.cost && (
                        <span className="text-gray-600">
                          Cost: <span className="font-medium">{resource.cost}</span>
                        </span>
                      )}
                      {resource.duration && (
                        <span className="text-gray-600">
                          Duration: <span className="font-medium">{resource.duration}</span>
                        </span>
                      )}
                      {resource.deadline && (
                        <span className="text-gray-600">
                          Deadline: <span className="font-medium">{new Date(resource.deadline).toLocaleDateString()}</span>
                        </span>
                      )}
                    </div>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Resource
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceMatching;