import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Settings, Users2, Book, FileText, GraduationCap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Icon = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <div className={`p-2 rounded-xl ${className} shadow-lg`}>
    {children}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { section: 'MENU', items: [
      {
        icon: (
          <Icon className="bg-gradient-to-br from-blue-500 to-blue-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
            </svg>
          </Icon>
        ),
        label: 'Dashboard',
        path: '/parent'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-emerald-500 to-emerald-600">
            <BookOpen className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Progress',
        path: '/parent/progress'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-blue-500 to-blue-600">
            <FileText className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Stories',
        path: '/parent/posts'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-blue-500 to-blue-600">
            <GraduationCap className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Career & College',
        path: '/parent/career-college'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-orange-500 to-orange-600">
            <Book className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Storybook',
        path: '/parent/storybook'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-purple-500 to-purple-600">
            <Users2 className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Collaboration',
        path: '/parent/collaboration'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-pink-500 to-pink-600">
            <MessageSquare className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Chat',
        path: '/parent/chat'
      }
    ]},
    { section: 'SETTINGS', items: [
      {
        icon: (
          <Icon className="bg-gradient-to-br from-gray-500 to-gray-600">
            <Settings className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Settings',
        path: '/parent/settings'
      }
    ]}
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 lg:z-10 lg:inset-y-0 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 lg:hidden pointer-events-auto"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`absolute left-0 top-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto shadow-sm transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } pointer-events-auto`}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img src="https://api.dicebear.com/7.x/shapes/svg?seed=parent" alt="Logo" className="h-8" />
            <div>
              <div className="font-semibold text-gray-900 tracking-wide">Parent Portal</div>
              <div className="text-sm text-gray-500">Lernica</div>
            </div>
          </div>
        </div>

        <nav className="px-3 py-4">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-6">
              <div className="px-3 mb-2 text-xs font-semibold text-gray-400 tracking-wider">
                {section.section}
              </div>
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  to={item.path}
                  className="flex items-center space-x-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 font-medium text-sm group"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;