import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './userpage.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Assume isAdmin is fetched from local storage

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.firstName) {
      setFirstName(user.firstName);
    } else {
      setFirstName('User');
    }
    setIsAdmin(user.isAdmin || false);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleVideoDownload = () => {
    window.open('path_to_your_video_file.mp4', '_blank');
  };

  return (
    <div className="user-container">
      <div className="welcome-box">
        <h3>Welcome to {firstName}'s {isAdmin ? 'Admin Dashboard' : 'User Page'}</h3>
      </div>
      <div className="actions">
        <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
        {!isAdmin && (
          <button
            className="toggle-form-btn"
            onClick={() => window.open('/applicant-form', '_blank')}
          >
            Open Applicant Form
          </button>
        )}
      </div>
      {!isAdmin && (
        <div className="download-section">
          <button className="download-btn" onClick={handleVideoDownload}>Download Video</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
