import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, Clock, ChevronRight, Users, Star, Calendar, Bell, ShoppingBag, BookOpen, Settings, AlertTriangle } from 'lucide-react';

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
        path: '/'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-emerald-500 to-emerald-600">
            <BookOpen className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Lesson Plans',
        path: '/lessons'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-pink-500 to-pink-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </Icon>
        ),
        label: 'Chat',
        path: '/chat'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-orange-500 to-orange-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </Icon>
        ),
        label: 'Posts',
        path: '/posts'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-green-500 to-green-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Icon>
        ),
        label: 'Analytics',
        path: '/analytics'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-yellow-500 to-yellow-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
              <path d="M19 8a3 3 0 100-6 3 3 0 000 6z" />
              <path d="M5 8a3 3 0 100-6 3 3 0 000 6z" />
              <path d="M12 2L8 8l4 4 4-4-4-6z" />
            </svg>
          </Icon>
        ),
        label: 'Recognition & Achievements',
        path: '/recognition'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-purple-500 to-purple-600">
            <Users className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Students',
        path: '/students'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-red-500 to-red-600">
            <AlertTriangle className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Behavior Incidents',
        path: '/behavior-incidents'
      }
    ]}, 
    { section: 'TOOLS', items: [
      {
        icon: (
          <Icon className="bg-gradient-to-br from-emerald-500 to-emerald-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </Icon>
        ),
        label: 'Development',
        path: '/development'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-purple-500 to-purple-600">
            <ShoppingBag className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Shop',
        path: '/shop'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-cyan-500 to-cyan-600">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 14l-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10z" />
              <path d="M14 15v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" />
            </svg>
          </Icon>
        ),
        label: 'Collaboration',
        path: '/collaboration'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-gray-500 to-gray-600">
            <Settings className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Settings',
        path: '/settings'
      }
    ]}
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:z-30 lg:inset-y-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="absolute left-0 top-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto shadow-sm z-50">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img src="https://api.dicebear.com/7.x/shapes/svg?seed=stanford" alt="Stanford" className="h-8" />
            <div>
              <div className="font-semibold text-gray-900 tracking-wide">Lernica</div>
              <div className="text-sm text-gray-500">Learning Platform</div>
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
                  className="flex items-center space-x-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 font-medium text-sm group cursor-pointer"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4 mx-4 mb-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">👑</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">$9</span>
            </div>
            <span className="text-sm text-gray-500 font-medium">/month</span>
          </div>
          <h3 className="font-semibold mb-1 text-gray-900">Upgrade to PRO</h3>
          <p className="text-sm text-gray-600 mb-4">Get detailed analytics and premium courses.</p>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-sm">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;