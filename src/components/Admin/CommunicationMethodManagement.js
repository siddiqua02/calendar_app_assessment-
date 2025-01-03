// src/components/Admin/CommunicationMethodManagement.js

import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
    { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: true },
    { name: 'Email', description: 'Send an Email', sequence: 3, mandatory: true },
    { name: 'Phone Call', description: 'Call by Phone', sequence: 4, mandatory: false },
    { name: 'Other', description: 'Other Methods', sequence: 5, mandatory: false }
  ]);

  const [method, setMethod] = useState({
    name: '',
    description: '',
    sequence: '',
    mandatory: false
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setMethod({ ...method, [name]: name === 'mandatory' ? checked : value });
  };

  const handleAddMethod = () => {
    setMethods([...methods, method]);
    setMethod({ name: '', description: '', sequence: '', mandatory: false });
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <input name="name" value={method.name} onChange={handleInputChange} placeholder="Method Name" />
      <input name="description" value={method.description} onChange={handleInputChange} placeholder="Description" />
      <input name="sequence" value={method.sequence} onChange={handleInputChange} placeholder="Sequence" />
      <input type="checkbox" name="mandatory" checked={method.mandatory} onChange={handleInputChange} /> Mandatory
      <button onClick={handleAddMethod}>Add Method</button>
      {/* Display list of methods with options to edit, delete */}
    </div>
  );
};

export default CommunicationMethodManagement;
