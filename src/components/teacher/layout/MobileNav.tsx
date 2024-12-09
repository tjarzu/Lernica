import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, BookOpen, MessageCircle, FileText, Users } from 'lucide-react';

const MobileNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: <LayoutGrid className="w-5 h-5" />, label: 'Dashboard', path: '/teacher' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Lessons', path: '/teacher/lessons' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Chat', path: '/teacher/chat' },
    { icon: <FileText className="w-5 h-5" />, label: 'Posts', path: '/teacher/posts' },
    { icon: <Users className="w-5 h-5" />, label: 'Students', path: '/teacher/students' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-lg ${
              location.pathname === item.path
                ? 'text-blue-600'
                : 'text-gray-600'
            }`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;