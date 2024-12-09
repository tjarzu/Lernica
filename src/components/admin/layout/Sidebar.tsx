import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Users, School, MessageSquare, Settings, Brain } from 'lucide-react';

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
            <LayoutGrid className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Dashboard',
        path: '/admin'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-cyan-500 to-cyan-600">
            <Brain className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'AI Agents',
        path: '/admin/ai-agents'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-blue-500 to-blue-600">
            <MessageSquare className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Data Chat',
        path: '/admin/data-chat'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-green-500 to-green-600">
            <Users className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Collaboration',
        path: '/admin/collaboration'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-teal-500 to-teal-600">
            <Users className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Students',
        path: '/admin/students'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-teal-500 to-teal-600">
            <Users className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Teachers',
        path: '/admin/teachers'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-green-500 to-green-600">
            <School className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'School Metrics',
        path: '/admin/metrics'
      },
      {
        icon: (
          <Icon className="bg-gradient-to-br from-pink-500 to-pink-600">
            <MessageSquare className="w-5 h-5 text-white" />
          </Icon>
        ),
        label: 'Chat',
        path: '/admin/chat'
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
        path: '/admin/settings'
      }
    ]}
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:z-30 lg:inset-y-0 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 lg:hidden pointer-events-auto"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="absolute left-0 top-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto shadow-sm z-50 pointer-events-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img src="https://api.dicebear.com/7.x/shapes/svg?seed=admin" alt="Logo" className="h-8" />
            <div>
              <div className="font-semibold text-gray-900 tracking-wide">Admin Portal</div>
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