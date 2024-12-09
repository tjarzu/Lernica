import React, { useState } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/admin/layout/Sidebar';
import TopBar from '../components/admin/layout/TopBar';
import MobileNav from '../components/admin/layout/MobileNav';
import Dashboard from '../pages/admin/Dashboard';
import AIAgentsPage from '../pages/admin/AIAgentsPage';
import DataChat from '../pages/admin/DataChat';
import Collaboration from '../pages/admin/Collaboration';
import TeacherProfiles from '../pages/admin/TeacherProfiles';
import StudentProfiles from '../pages/admin/StudentProfiles';
import SchoolMetrics from '../pages/admin/SchoolMetrics';
import Chat from '../pages/shared/Chat';
import Posts from '../pages/shared/Posts';
import Settings from '../pages/shared/Settings';

interface AdminLayoutProps {
  onLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout }) => {
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
            <Route path="ai-agents" element={<AIAgentsPage />} />
            <Route path="data-chat" element={<DataChat />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="teachers" element={<TeacherProfiles />} />
            <Route path="students" element={<StudentProfiles />} />
            <Route path="metrics" element={<SchoolMetrics />} />
            <Route path="chat" element={<Chat />} />
            <Route path="posts" element={<Posts />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default AdminLayout;