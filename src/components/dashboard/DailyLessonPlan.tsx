import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';
import LessonPlanDetails from './LessonPlanDetails';
import { useState, useRef } from 'react';

const lessonDetails = {
  title: 'Financial Literacy',
  time: '10:30 AM',
  duration: '45 mins',
  grade: 'Grade 9-10',
  description: 'Introduction to budgeting and saving strategies for teenagers. This lesson focuses on practical financial skills that students can apply in their daily lives.',
  objectives: [
    'Understand basic budgeting principles and importance of financial planning',
    'Learn to differentiate between needs and wants in spending decisions',
    'Create a simple monthly budget using real-world scenarios',
    'Identify various saving strategies suitable for teenagers'
  ],
  activities: [
    {
      name: 'Introduction & Discussion',
      duration: '10 mins',
      description: 'Open discussion about students\' current understanding of money management and their financial goals.'
    },
    {
      name: 'Interactive Budgeting Exercise',
      duration: '15 mins',
      description: 'Students work in pairs to create a monthly budget based on a given scenario.'
    },
    {
      name: 'Saving Strategies Presentation',
      duration: '10 mins',
      description: 'Present various saving methods and tools available to teenagers.'
    },
    {
      name: 'Group Activity & Discussion',
      duration: '10 mins',
      description: 'Groups develop and present creative saving strategies for common teenage expenses.'
    }
  ],
  resources: [
    {
      name: 'Budget Template',
      type: 'worksheet',
      url: '#'
    },
    {
      name: 'Financial Terms Guide',
      type: 'pdf',
      url: '#'
    },
    {
      name: 'Teen Banking Guide',
      type: 'link',
      url: '#'
    },
    {
      name: 'Activity Worksheets',
      type: 'pdf',
      url: '#'
    }
  ]
};
import { useNavigate } from 'react-router-dom';

interface DailyLessonPlanProps {
  onPointsEarned: (points: number) => void;
}

const DailyLessonPlan: React.FC<DailyLessonPlanProps> = ({ onPointsEarned }) => {
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = React.useState<typeof lessonDetails | null>(null);
  const [showReward, setShowReward] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(0);
  const [earnedLessons, setEarnedLessons] = useState<Set<string>>(new Set());

  const handleLessonClick = () => {
    // Check if points were already earned for this lesson
    if (earnedLessons.has(lessonDetails.title)) {
      setSelectedLesson(lessonDetails);
      return;
    }

    const points = Math.floor(Math.random() * 51); // Random points between 0-50
    setRewardPoints(points);
    onPointsEarned(points);
    setShowReward(true);
    setSelectedLesson(lessonDetails);
    setEarnedLessons(prev => new Set([...prev, lessonDetails.title]));
    setTimeout(() => setShowReward(false), 3000); // Hide reward after 3 seconds
  };

  const handleViewAllLessons = () => {
    navigate('/lessons');
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl p-4 text-white h-[calc(100%-1rem)] shadow-xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10"></div>
      <div className="relative z-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Today's Lesson Plan</h3>
        <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">AI Generated</span>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={handleLessonClick}
          className="w-full text-left bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
          disabled={earnedLessons.has(lessonDetails.title)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <h4 className="font-medium">Financial Literacy</h4>
              {earnedLessons.has(lessonDetails.title) && (
                <div className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                  Points Earned
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">45 mins</span>
            </div>
          </div>
          <p className="text-sm text-white/80 mb-3">
            {lessonDetails.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Grade 9-10</span>
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-white/10">
              10:30 AM
            </span>
          </div>
        </button>

        <button
          onClick={handleLessonClick}
          className="w-full text-left bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <h4 className="font-medium">Digital Citizenship</h4>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">40 mins</span>
            </div>
          </div>
          <p className="text-sm text-white/80 mb-3">
            Online safety and responsible social media usage
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Grade 7-8</span>
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-white/10">
              1:15 PM
            </span>
          </div>
        </button>

        <button
          onClick={handleViewAllLessons}
          className="w-full mt-4 py-2 text-sm text-white/80 hover:text-white flex items-center justify-center space-x-1 transition-colors border border-white/10 rounded-lg hover:bg-white/10"
        >
          <span>View all lesson plans</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      </div>
      <LessonPlanDetails
        isOpen={selectedLesson !== null}
        onClose={() => setSelectedLesson(null)}
        lesson={selectedLesson || lessonDetails}
      />
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-xl p-6 shadow-2xl transform animate-bounce">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15l-2 5l9-13h-4l2-7l-9 13h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Points Earned!</h3>
              <p className="text-gray-600">You earned <span className="font-bold text-yellow-600">+{rewardPoints}</span> points for opening this lesson plan.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyLessonPlan;