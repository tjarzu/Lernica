import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, BookOpen, MessageCircle, FileText, BarChart2, Award, AlertTriangle, Users, Settings, PenTool, ShoppingBag, Users2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  const isPathActive = (path: string) => {
    if (path === '/teacher' && location.pathname === '/teacher') {
      return true;
    }
    return path !== '/teacher' && location.pathname.startsWith(path);
  };

  const menuItems = [
    { section: 'MENU', items: [
      {
        icon: (
          <Icon className="bg-gradient-to-br from-blue-500 to-blue-600">
            <LayoutGrid className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Dashboard',
        path: '/teacher'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-emerald-500 to-emerald-600">
            <BookOpen className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Lessons',
        path: '/teacher/lessons'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-pink-500 to-pink-600">
            <MessageCircle className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Chat',
        path: '/teacher/chat'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-orange-500 to-orange-600">
            <FileText className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Posts',
        path: '/teacher/posts'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-green-500 to-green-600">
            <BarChart2 className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Analytics',
        path: '/teacher/analytics'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-yellow-500 to-yellow-600">
            <Award className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Recognition',
        path: '/teacher/recognition'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-purple-500 to-purple-600">
            <Users className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Students',
        path: '/teacher/students'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-red-500 to-red-600">
            <AlertTriangle className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Behavior Incidents',
        path: '/teacher/behavior'
      }
    ]},
    { section: 'TOOLS', items: [
      {
        icon: (
          <Icon className="bg-gradient-to-br from-emerald-500 to-emerald-600">
            <PenTool className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Development',
        path: '/teacher/development'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-purple-500 to-purple-600">
            <ShoppingBag className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Shop',
        path: '/teacher/shop'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-cyan-500 to-cyan-600">
            <Users2 className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Collaboration',
        path: '/teacher/collaboration'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-gray-500 to-gray-600">
            <Settings className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Settings',
        path: '/teacher/settings'
      }
    ]}
  ];

  return (
    <div className="fixed inset-0 z-40 lg:z-30 lg:inset-y-0 pointer-events-none">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 lg:hidden pointer-events-auto ${!isOpen && 'hidden'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`absolute left-0 top-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto shadow-sm transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } pointer-events-auto`}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img src="https://api.dicebear.com/7.x/shapes/svg?seed=teacher" alt="Logo" className="h-8" />
            <div>
              <div className="font-semibold text-gray-900 tracking-wide">Teacher Portal</div>
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
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm group ${
                    isPathActive(item.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
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