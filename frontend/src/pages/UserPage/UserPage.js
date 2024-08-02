// src/pages/User/UserPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './userpage.css';

const UserPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Fetch the authenticated user's first name from local storage or an API
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.firstName) {
      setFirstName(user.firstName);
    } else {
      setFirstName('User'); // Default name if not found
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to sign-in page using navigate
  };

  // Function to handle video download
  const handleVideoDownload = () => {
    // Replace with logic to download videos
    // For example, open a new window with the video URL
    window.open('path_to_your_video_file.mp4', '_blank');
    // Alternatively, you can use download attribute if you have direct download link
    // <a href="path_to_your_video_file.mp4" download>Download Video</a>
  };

  return (
    <div className="user-container">
      <div className="welcome-box">
        <h3>Welcome to {firstName}'s Page</h3>
      </div>
      <div className="actions">
        <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
        <button
          className="toggle-form-btn"
          onClick={() => window.open('/applicant-form', '_blank')}
        >
          Open Applicant Form
        </button>
      </div>
      <div className="download-section">
        <button className="download-btn" onClick={handleVideoDownload}>Download Video</button>
      </div>
    </div>
  );
};

export default UserPage;
