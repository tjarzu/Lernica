import React from 'react';

interface LessonPlan {
  title: string;
  time: string;
  duration: string;
  description: string;
  grade: string;
}

const ProfileCard: React.FC = () => {
  const lessonPlans: LessonPlan[] = [
    {
      title: 'Financial Literacy',
      time: '10:30 AM',
      duration: '45 mins',
      description: 'Introduction to budgeting and saving strategies',
      grade: 'Grade 9-10'
    },
    {
      title: 'Digital Citizenship',
      time: '1:15 PM',
      duration: '40 mins',
      description: 'Online safety and responsible social media usage',
      grade: 'Grade 7-8'
    },
    {
      title: 'Career Development',
      time: '2:30 PM',
      duration: '50 mins',
      description: 'Exploring future career paths and opportunities',
      grade: 'Grade 11-12'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 w-1/4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jason"
                alt="Profile"
                className="w-12 h-12"
              />
            </div>
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs rounded-full px-2 py-1">
              32%
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Good Morning Jason<span className="ml-1">🔥</span>
            </h3>
            <p className="text-sm text-gray-500">
              Continue your learning to achieve your target!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Today's Lessons</h4>
        {lessonPlans.map((lesson, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-medium text-gray-900">{lesson.title}</h5>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{lesson.duration}</span>
                <span>•</span>
                <span>{lesson.time}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
            <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
              {lesson.grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;