// src/components/User/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/companies');
        setCompanies(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCompanies();
  }, []);

  const renderCompanyRow = (company) => (
    <tr key={company._id}>
      <td>{company.name}</td>
      <td>
        {company.lastFiveCommunications.map((com, idx) => (
          <Tooltip key={idx} title={com.comments || ''}>
            <div>{com.type} - {com.date}</div>
          </Tooltip>
        ))}
      </td>
      <td>{company.nextScheduledCommunication}</td>
      <td className={getColorCode(company.nextScheduledCommunication)}></td>
    </tr>
  );

  const getColorCode = (date) => {
    const today = new Date();
    const communicationDate = new Date(date);
    if (communicationDate < today) return 'red';
    if (communicationDate.toDateString() === today.toDateString()) return 'yellow';
    return '';
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(renderCompanyRow)}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
