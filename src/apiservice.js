import axios from 'axios';

const API_URL = 'http://localhost:8000/';  // Replace with your Django backend API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,  // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any headers needed for your API requests
  }
});

// Function to fetch data from the API
const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Rethrow the error to be handled elsewhere
  }
};

// Function to post data to the API
const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Add other functions for different HTTP methods as needed

export { fetchData, postData };
