// src/pages/Dashboard.test.js
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { AuthProvider } from '../context/AuthContext';

test('renders Dashboard component correctly with user logged in', () => {
  render(
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );

  // Assuming the Dashboard renders a text like "Welcome, user" when logged in
  expect(screen.getByText('Welcome, user')).toBeInTheDocument();
});
