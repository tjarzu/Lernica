import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/teacher/layout/Sidebar';
import TopBar from '../components/teacher/layout/TopBar';
import QuickActions from '../components/teacher/QuickActions';
import MobileNav from '../components/teacher/layout/MobileNav';
import EngagementNotification from '../components/teacher/notifications/EngagementNotification';
import Dashboard from '../pages/teacher/Dashboard';
import Analytics from '../pages/Analytics';
import Chat from '../pages/shared/Chat';
import Posts from '../pages/shared/Posts';
import Students from '../pages/Students';
import Settings from '../pages/Settings';
import LessonPlans from '../pages/LessonPlans';
import Recognition from '../pages/Recognition';
import BehaviorIncidents from '../pages/BehaviorIncidents';
import Development from '../pages/Development';
import Shop from '../pages/Shop';
import Collaboration from '../pages/Collaboration';

interface TeacherLayoutProps {
  onLogout: () => void;
}

const TeacherLayout: React.FC<TeacherLayoutProps> = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userPoints, setUserPoints] = useState(200);
  const [streak, setStreak] = useState(0);
  const [showStreakPopup, setShowStreakPopup] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [engagementNotification, setEngagementNotification] = useState<{
    message: string;
    points: number;
  } | null>(null);

  const addPoints = (points: number) => {
    setUserPoints(prev => prev + points);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 lg:pb-0 relative">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className={`${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'} transition-all duration-300`}>
        <TopBar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          userPoints={userPoints} 
          isSidebarOpen={isSidebarOpen}
          streak={streak}
          onLogout={onLogout}
        />
        <main className="pt-20 px-4 lg:px-8 max-w-[1800px] mx-auto">
          <Routes>
            <Route index element={<Dashboard onPointsEarned={addPoints} />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="lessons" element={<LessonPlans />} />
            <Route path="posts" element={<Posts />} />
            <Route path="chat" element={<Chat />} />
            <Route path="students" element={<Students />} />
            <Route path="recognition" element={<Recognition />} />
            <Route path="behavior" element={<BehaviorIncidents />} />
            <Route path="development" element={<Development />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      {engagementNotification && (
        <EngagementNotification
          message={engagementNotification.message}
          points={engagementNotification.points}
          onClose={() => setEngagementNotification(null)}
        />
      )}
      <MobileNav />
      <QuickActions />
    </div>
  );
};

export default TeacherLayout;