// API Configuration
// This allows easy switching between development and production

const isDevelopment = import.meta.env.DEV;

export const API_CONFIG = {
  // Base URL for API
  baseURL: isDevelopment 
    ? 'http://localhost:5000'
    : import.meta.env.VITE_API_URL || 'https://your-render-backend-url.onrender.com',
  
  // API Endpoints
  endpoints: {
    contact: '/api/contact',
    health: '/api/contact/health',
  },
  
  // Timeout for API requests
  timeout: 30000, // 30 seconds
};

// Helper function to get full endpoint URL
export const getEndpointURL = (endpoint: keyof typeof API_CONFIG.endpoints): string => {
  return `${API_CONFIG.baseURL}${API_CONFIG.endpoints[endpoint]}`;
};

// Example usage:
// const url = getEndpointURL('contact');
// fetch(url, {...})

