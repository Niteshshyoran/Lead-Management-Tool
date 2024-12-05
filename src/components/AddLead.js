// src/components/AddLead.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLead } from '../actions/leadActions';

const AddLead = () => {
  const dispatch = useDispatch();
  const [leadName, setLeadName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleAddLead = () => {
    const newLead = {
      id: Date.now(), // Use unique ID (e.g., timestamp or UUID)
      leadName,
      contactNumber,
      status: 'New',
    };

    dispatch(addLead(newLead)); // Dispatch the addLead action
    setLeadName('');
    setContactNumber('');
  };

  return (
    <div>
      <h3>Add Lead</h3>
      <input
        type="text"
        placeholder="Lead Name"
        value={leadName}
        onChange={(e) => setLeadName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <button onClick={handleAddLead}>Add Lead</button>
    </div>
  );
};

export default AddLead;
