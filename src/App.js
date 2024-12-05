import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LeadsList from './components/LeadsList';
import AddEditLead from './pages/AddEditLead'; // Page for Add/Edit Lead
import Navbar from './components/Navbar'; // Optional: Navigation bar for the app
import Button from './components/Button';

function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <div>
      <h1>Welcome</h1>
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
        <Navbar /> {/* Optional: Add a navigation bar */}
        <h1>Lead Management App</h1>
        <Routes>
          {/* Define Routes for the app */}
          <Route path="/" element={<Dashboard />} /> {/* Dashboard */}
          <Route path="/leads" element={<LeadsList />} /> {/* Leads List */}
          <Route path="/add-lead" element={<AddEditLead />} /> {/* Add Lead */}
          <Route path="/edit-lead/:id" element={<AddEditLead />} /> {/* Edit Lead */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
