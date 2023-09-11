

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminPage from './components/AdminPage';
import LoginAPI from './components/LoginAPI';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <h1>My App</h1>

        {/* Render the LoginForm if not authenticated */}
        {!authenticated && <LoginForm handleLogin={handleLogin} />}

        {/* Render the AdminPage if authenticated */}
        {authenticated && (
          <Route path="http://localhost:3001/admin" render={() => <AdminPage handleLogout={handleLogout} />} />
        )}

        {/* Render the Navigate component */}
        <Navigate to={authenticated ? "http://localhost:3001/AdminPage" : "/"} />
        
        
        <Routes>
          <Route path="http://localhost:3001/api/login" component={LoginAPI} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
