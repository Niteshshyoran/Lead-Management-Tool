import axios from 'axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data;  // return user and token
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
