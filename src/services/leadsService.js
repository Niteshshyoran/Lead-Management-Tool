import axios from 'axios';

const API_URL = 'http://localhost:5000/leads'; // JSON Server URL

// Fetch all leads
export const fetchLeads = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
};
