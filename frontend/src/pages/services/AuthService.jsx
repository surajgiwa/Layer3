import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

class AuthService {
  login(email, password) {
    return axios.post(`${API_URL}/login`, { email, password })
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          return { success: false, message: error.response.data.message || 'Error logging in' };
        } else if (error.request) {
          // The request was made but no response was received
          console.error(error.request);
          return { success: false, message: 'Network error' };
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
          return { success: false, message: 'Internal server error' };
        }
      });
  }

  signup(name, email, password) {
    return axios.post(`${API_URL}/signup`, { name, email, password })
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          return { success: false, message: error.response.data.message || 'Error signing up' };
        } else if (error.request) {
          console.error(error.request);
          return { success: false, message: 'Network error' };
        } else {
          console.error('Error:', error.message);
          return { success: false, message: 'Internal server error' };
        }
      });
  }

  forgotPassword(email) {
    return axios.post(`${API_URL}/forgot-password`, { email })
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          return { success: false, message: error.response.data.message || 'Error requesting password reset' };
        } else if (error.request) {
          console.error(error.request);
          return { success: false, message: 'Network error' };
        } else {
          console.error('Error:', error.message);
          return { success: false, message: 'Internal server error' };
        }
      });
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      resolve({ success: true, message: 'Logout successful' });
    });
  }

  resetPassword(token, newPassword) {
    return axios.post(`${API_URL}/reset-password/${token}`, { newPassword })
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          return { success: false, message: error.response.data.message || 'Error resetting password' };
        } else if (error.request) {
          console.error(error.request);
          return { success: false, message: 'Network error' };
        } else {
          console.error('Error:', error.message);
          return { success: false, message: 'Internal server error' };
        }
      });
  }
}

export default new AuthService(); // Export an instance of AuthService
