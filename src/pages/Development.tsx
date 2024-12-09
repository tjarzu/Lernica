import React, { useState } from 'react';
import { Book, Target, Award, Clock, ChevronRight, Users, Star, Calendar, Bell, GraduationCap, Lightbulb, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  enrolled: number;
  progress?: number;
  instructor: string;
  description: string;
  tags: string[];
  recommended?: boolean;
  deadline?: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: number;
  duration: string;
  level: string;
  category: string;
  progress?: number;
  enrolled: number;
}

const Development: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paths' | 'courses'>('paths');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const learningPaths: LearningPath[] = [
    {
      id: '1',
      title: 'Digital Teaching Excellence',
      description: 'Master modern teaching technologies and digital pedagogical methods',
      courses: 5,
      duration: '12 weeks',
      level: 'Intermediate',
      category: 'Technology',
      progress: 45,
      enrolled: 128
    },
    {
      id: '2',
      title: 'Student Engagement Specialist',
      description: 'Learn advanced techniques for increasing student participation and motivation',
      courses: 4,
      duration: '8 weeks',
      level: 'Advanced',
      category: 'Pedagogy',
      enrolled: 95
    },
    {
      id: '3',
      title: 'Inclusive Education Practices',
      description: 'Develop skills for creating inclusive and accessible learning environments',
      courses: 6,
      duration: '16 weeks',
      level: 'Intermediate',
      category: 'Special Education',
      progress: 20,
      enrolled: 156
    }
  ];

  const courses: Course[] = [
    {
      id: '1',
      title: 'Advanced Classroom Management',
      category: 'Pedagogy',
      duration: '4 weeks',
      level: 'Advanced',
      enrolled: 245,
      progress: 60,
      instructor: 'Dr. Sarah Johnson',
      description: 'Master advanced techniques for maintaining a productive learning environment',
      tags: ['Classroom Management', 'Behavior', 'Student Engagement']
    },
    {
      id: '2',
      title: 'Educational Technology Integration',
      category: 'Technology',
      duration: '6 weeks',
      level: 'Intermediate',
      enrolled: 189,
      instructor: 'Prof. Michael Chen',
      description: 'Learn to effectively integrate technology tools into your teaching practice',
      tags: ['EdTech', 'Digital Learning', 'Innovation']
    },
    {
      id: '3',
      title: 'Data-Driven Instruction',
      category: 'Assessment',
      duration: '5 weeks',
      level: 'Advanced',
      enrolled: 156,
      progress: 30,
      instructor: 'Dr. Emma Davis',
      description: 'Use student data to inform and improve instructional strategies',
      tags: ['Data Analysis', 'Assessment', 'Personalized Learning']
    }
  ];

  const categories = ['all', 'Technology', 'Pedagogy', 'Assessment', 'Special Education'];

  const filteredPaths = learningPaths.filter(path => 
    selectedCategory === 'all' || path.category === selectedCategory
  );

  const filteredCourses = courses.filter(course =>
    selectedCategory === 'all' || course.category === selectedCategory
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">Professional Development</h1>
          <p className="text-gray-600">Personalized learning paths and certifications to advance your career</p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">2 Certifications Due</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">3 Recommended Courses</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-100 text-green-600 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">25 hours completed</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">5 certificates earned</span>
          </div>
        </div>
      </div>

      {/* Certification Reminders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Due in 30 days</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Teaching License Renewal</h3>
          <p className="text-sm text-white/80 mb-4">Complete required professional development hours for license renewal</p>
          <div className="flex items-center justify-between text-sm">
            <span>15/30 hours completed</span>
            <button className="px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">View Requirements</button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Recommended</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Technology Integration</h3>
          <p className="text-sm text-white/80 mb-4">Based on your classroom data, enhance your tech integration skills</p>
          <div className="flex items-center justify-between text-sm">
            <span>3 micro-courses available</span>
            <button className="px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">Start Learning</button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Quick Skills</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Microlearning Modules</h3>
          <p className="text-sm text-white/80 mb-4">Short, focused lessons on teaching techniques and tools</p>
          <div className="flex items-center justify-between text-sm">
            <span>5-15 minute lessons</span>
            <button className="px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">Browse Modules</button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('paths')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'paths'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Learning Paths
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'courses'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Individual Courses
        </button>
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category === 'all' ? 'All Categories' : category}
          </button>
        ))}
      </div>

      {activeTab === 'paths' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredPaths.map((path) => (
            <div key={path.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  {path.progress === undefined && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{path.enrolled} enrolled</span>
                </div>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">{path.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{path.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <span>{path.courses} courses</span>
                  <span>•</span>
                  <span>{path.duration}</span>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {path.level}
                </span>
              </div>

              {path.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900 font-medium">{path.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <span>{path.progress !== undefined ? 'Continue Path' : 'Start Path'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <Book className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  {course.recommended && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Recommended for you
                    </span>
                  )}
                  {course.deadline && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      Due {course.deadline}
                    </span>
                  )}
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-500">4.8</span>
                </div>
              </div>

              <h3 className="font-medium text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.level}</span>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {course.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {course.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900 font-medium">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="text-gray-900 font-medium">{course.instructor}</p>
                  <p className="text-gray-500">Instructor</p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <span>{course.progress !== undefined ? 'Continue' : 'Enroll'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Development;