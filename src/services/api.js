// src/api.js
import axios from 'axios';

// Get the server URL from the environment variables
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Function to handle user signup
export const signUpUser = async (email, classNumber) => {
  try {
    // Make the POST request to the signup endpoint
    const response = await axios.post(`${SERVER_URL}/api/classes/signup`, {
      email,
      classNumber,
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any errors
    throw error.response ? error.response.data : new Error('Network error');
  }
};
