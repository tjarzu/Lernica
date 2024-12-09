import React, { useState } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/parent/layout/Sidebar';
import TopBar from '../components/parent/layout/TopBar';
import MobileNav from '../components/parent/layout/MobileNav';
import FloatingActionButton from '../components/parent/FloatingActionButton';
import Dashboard from '../pages/parent/Dashboard';
import Chat from '../pages/shared/Chat';
import Posts from '../pages/shared/Posts';
import Storybook from '../pages/parent/Storybook';
import CareerCollege from '../pages/parent/CareerCollege';
import Progress from '../pages/parent/Progress';
import Collaboration from '../pages/parent/Collaboration';
import Settings from '../pages/shared/Settings';

interface ParentLayoutProps {
  onLogout: () => void;
}

const ParentLayout: React.FC<ParentLayoutProps> = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-16 lg:pb-0">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
        <TopBar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isSidebarOpen={isSidebarOpen}
          onLogout={onLogout}
        />
        <main className="pt-16 max-w-[1800px] mx-auto">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="progress" element={<Progress />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="career-college" element={<CareerCollege />} />
            <Route path="storybook" element={<Storybook />} />
            <Route path="chat" element={<Chat />} />
            <Route path="posts" element={<Posts />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <MobileNav />
      <FloatingActionButton />
    </div>
  );
};

export default ParentLayout;