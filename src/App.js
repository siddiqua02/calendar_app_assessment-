// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import CompanyManagement from './components/Admin/CompanyManagement';
import CommunicationMethodManagement from './components/Admin/CommunicationMethodManagement';
import Dashboard from './components/User/Dashboard';
import CalendarView from './components/User/CalendarView';

const App = () => {
  const companies = []; // Fetch companies from the API or use mock data
  const events = []; // Fetch events or use mock data

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<>
          <CompanyManagement />
          <CommunicationMethodManagement />
        </>} />
        <Route path="/dashboard" element={<Dashboard companies={companies} />} />
        <Route path="/calendar" element={<CalendarView events={events} />} />
      </Routes>
    </Router>
  );
};

export default App;
