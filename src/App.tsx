import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherLayout from './layouts/TeacherLayout';
import ParentLayout from './layouts/ParentLayout';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/auth/Login';

interface LayoutProps {
  onLogout: () => void;
}

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<'teacher' | 'parent' | 'admin' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Landing /> : <Navigate to={`/${userRole}`} replace />} />
        <Route path="/login" element={
          !isAuthenticated ? (
            <Login onLogin={(role) => {
              setUserRole(role);
              setIsAuthenticated(true);
            }} />
          ) : (
            <Navigate to={`/${userRole}`} replace />
          )
        } />

        {/* Teacher Routes */}
        <Route path="/teacher/*" element={isAuthenticated ? <TeacherLayout onLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Parent Routes */}
        <Route path="/parent/*" element={isAuthenticated ? <ParentLayout onLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={isAuthenticated ? <AdminLayout onLogout={handleLogout} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;