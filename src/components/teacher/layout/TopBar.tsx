import React, { useState } from 'react';
import { Menu, LogOut, Settings, Users, Globe, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  toggleSidebar: () => void;
  userPoints: number;
  isSidebarOpen: boolean;
  streak: number;
  onLogout: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar, userPoints, isSidebarOpen, streak, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 ${isSidebarOpen ? 'lg:left-64' : 'lg:left-0'} z-30 flex items-center px-4 transition-all duration-300`}>
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 hidden lg:flex items-center"
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>
      
      <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
        <Menu className="h-5 w-5 text-gray-600" />
      </button>

      <div className="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex-1 ml-4">
          <h1 className="text-xl font-semibold text-gray-900">Teacher Portal</h1>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-6">
          <div className="hidden lg:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-all">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-gray-700">{userPoints} points</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-all">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <span className="font-medium text-gray-700">{streak}</span>
          </div>

          {/* Mobile Points Display */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="flex items-center space-x-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
              <Star className="w-4 h-4" />
              <span>{userPoints}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Teacher</div>
              <div className="text-xs text-gray-500">Level 32</div>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 p-1 hover:shadow-md transition-all duration-200"
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=teacher"
                  alt="User avatar"
                  className="w-full h-full"
                />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Teacher</p>
                    <p className="text-xs text-gray-500">teacher@example.com</p>
                  </div>
                  
                  <button 
                    onClick={() => navigate('/teacher/settings')}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </button>
                  
                  <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Language
                  </button>
                  
                  <div className="border-t border-gray-100 mt-1">
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        onLogout();
                      }}
                      className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;