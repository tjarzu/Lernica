import React from 'react';
import EmotionCheckIn from '../components/dashboard/EmotionCheckIn';
import ClassroomAnalytics from '../components/dashboard/ClassroomAnalytics';
import DailyLessonPlan from '../components/dashboard/DailyLessonPlan';
import TeacherNotifications from '../components/dashboard/TeacherNotifications';
import ParentMessages from '../components/dashboard/ParentMessages';

interface DashboardProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  onPointsEarned: (points: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onPointsEarned }) => {
  return (
    <div className="p-4 md:p-8 ml-0">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>Level 32</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8 space-y-6 lg:space-y-0">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <EmotionCheckIn onPointsEarned={onPointsEarned} />
          </div>
          <div className="w-full lg:w-1/3">
            <TeacherNotifications />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2">
          <ParentMessages />
        </div>
        <div className="xl:col-span-1">
          <DailyLessonPlan onPointsEarned={onPointsEarned} />
        </div>
      </div>

      <div className="mb-8">
        <ClassroomAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;