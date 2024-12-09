import React from 'react';
import { Menu, LogOut, Settings, Users, Globe, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  toggleSidebar: () => void;
  userPoints: number;
  isSidebarOpen: boolean;
  streak: number;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar, userPoints, isSidebarOpen, streak }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuClick = () => toggleSidebar();

  return (
    <div className={`h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 ${isSidebarOpen ? 'lg:left-64' : ''} z-30 flex items-center px-4 transition-all duration-300`}>
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 hidden lg:flex items-center cursor-pointer"
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>
      
      <button onClick={handleMobileMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
        <Menu className="h-5 w-5 text-gray-600" />
      </button>

      <div className="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex-1 ml-4">
          <h1 className="text-xl font-semibold text-gray-900">Lernica</h1>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-6">
          <div className="hidden lg:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-all">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" fill="url(#coin-gradient)" />
                <path d="M12 6v12M15.5 9.5h-7a3 3 0 0 0 0 6h7" strokeLinecap="round" />
                <defs>
                  <linearGradient id="coin-gradient" x1="2" y1="2" x2="22" y2="22">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFA500" />
                  </linearGradient>
                </defs>
              </svg>
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

          <button className="relative hidden lg:block">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-all">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Mobile Points Display */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="flex items-center space-x-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
              <Star className="w-4 h-4" />
              <span>{userPoints}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Abubakar</div>
              <div className="text-xs text-gray-500">Beginner</div>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 p-1 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <img
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=user"
                  alt="User avatar"
                  className="w-full h-full"
                />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Abubakar</p>
                    <p className="text-xs text-gray-500">abubakar@example.com</p>
                  </div>
                  
                  <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    Switch Account
                  </button>
                  
                  <button 
                    onClick={() => navigate('/settings')}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </button>
                  
                  <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center cursor-pointer">
                    <Globe className="w-4 h-4 mr-2" />
                    Language
                  </button>
                  
                  <div className="border-t border-gray-100 mt-1">
                    <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center">
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