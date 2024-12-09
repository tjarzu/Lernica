import React, { useState } from 'react';
import { Menu, LogOut, Settings, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  onLogout: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar, isSidebarOpen, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 ${isSidebarOpen ? 'lg:left-64' : ''} z-30 flex items-center px-4 transition-all duration-300`}>
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
          <h1 className="text-xl font-semibold text-gray-900">Admin Portal</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">Admin User</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 p-1 hover:shadow-md transition-all duration-200"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
                alt="User avatar"
                className="w-full h-full"
              />
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
                
                <button 
                  onClick={() => navigate('/admin/settings')}
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
  );
};

export default TopBar;