import React, { useEffect, useState } from 'react';
import { fetchLeads } from '../services/leadsService';

const LeadsList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const getLeads = async () => {
      try {
        const data = await fetchLeads();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    getLeads();
  }, []);

  return (
    <div>
      <h1>Leads List</h1>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            <strong>{lead.leadName}</strong> - {lead.contactNumber} - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadsList;
