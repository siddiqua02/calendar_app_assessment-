// src/components/Admin/CompanyManagement.js

import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleAddCompany = () => {
    setCompanies([...companies, company]);
    setCompany({
      name: '',
      location: '',
      linkedinProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: ''
    });
  };

  // Additional methods for edit, delete, etc.

  return (
    <div>
      <h2>Company Management</h2>
      <input name="name" value={company.name} onChange={handleInputChange} placeholder="Company Name" />
      <input name="location" value={company.location} onChange={handleInputChange} placeholder="Location" />
      <input name="linkedinProfile" value={company.linkedinProfile} onChange={handleInputChange} placeholder="LinkedIn Profile" />
      <input name="emails" value={company.emails} onChange={handleInputChange} placeholder="Emails" />
      <input name="phoneNumbers" value={company.phoneNumbers} onChange={handleInputChange} placeholder="Phone Numbers" />
      <textarea name="comments" value={company.comments} onChange={handleInputChange} placeholder="Comments" />
      <input name="communicationPeriodicity" value={company.communicationPeriodicity} onChange={handleInputChange} placeholder="Communication Periodicity" />
      <button onClick={handleAddCompany}>Add Company</button>
      {/* Display list of companies with options to edit, delete */}
    </div>
  );
};

export default CompanyManagement;
