// src/components/User/CommunicationAction.js

import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const CommunicationAction = ({ company, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [communication, setCommunication] = useState({
    type: '',
    date: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommunication({ ...communication, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(communication);
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Communication Performed</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <h2>Log New Communication</h2>
          <input name="type" value={communication.type} onChange={handleInputChange} placeholder="Type of Communication" />
          <input name="date" value={communication.date} onChange={handleInputChange} placeholder="Date of Communication" />
          <textarea name="comments" value={communication.comments} onChange={handleInputChange} placeholder="Comments" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </Modal>
    </>
  );
};

export default CommunicationAction;
