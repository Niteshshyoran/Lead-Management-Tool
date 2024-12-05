import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddEditLead = () => {
  const [lead, setLead] = useState({
    leadName: '',
    contactNumber: '',
    email: '',
    status: 'New',
  });
  const { id } = useParams(); // Get the lead id from URL (only for editing)
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the lead data from the backend (e.g., JSON server)
      const fetchLead = async () => {
        const response = await fetch(`http://localhost:5000/leads/${id}`);
        const data = await response.json();
        setLead(data);
      };
      fetchLead();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead({ ...lead, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      // Edit existing lead
      await fetch(`http://localhost:5000/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
      });
    } else {
      // Add new lead
      await fetch('http://localhost:5000/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
      });
    }

    // Redirect to the leads list after submitting
    navigate('/leads');
  };

  return (
    <div>
      <h2>{id ? 'Edit Lead' : 'Add New Lead'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="leadName"
          placeholder="Lead Name"
          value={lead.leadName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={lead.contactNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={lead.email}
          onChange={handleChange}
        />
        <select
          name="status"
          value={lead.status}
          onChange={handleChange}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
        <button type="submit">{id ? 'Update Lead' : 'Add Lead'}</button>
      </form>
    </div>
  );
};

export default AddEditLead;
