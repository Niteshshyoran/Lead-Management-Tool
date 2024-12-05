import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const {authState, login, logout } = useAuth();

  useEffect(() => {
    if (!authState.user) {
      // Simulate login for testing
      login({ name: 'John Doe' }, 'sample-token');
    }
  }, [authState.user, login]);

  return (
    <div>
      <h1>Dashboard</h1>
      {authState.user ? (
        <>
          <p>Welcome, {authState.user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
      <div>
        <h2>Lead Management Dashboard</h2>
        <p>Manage your leads and customers efficiently!</p>
      </div>
    </div>
  );
};

export default Dashboard;
