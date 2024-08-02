import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For potential redirect on unauthorized access
import AuthService from '../services/AuthService'; // Adjust path as per your service

const VideoList = ({ videos, setVideos }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For potential redirect

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { isLoggedIn, isAdmin } = await AuthService.isAuthenticated(); // Check for logged in user and admin status

        if (!isLoggedIn) {
          navigate('/login'); // Redirect to login if not logged in
          return;
        }

        if (!isAdmin) {
          navigate('/unauthorized'); // Redirect to unauthorized page if not admin (optional)
          return;
        }

        // Replace with actual video fetching logic using your backend API
        const response = await fetch('/api/videos'); // Assuming an API endpoint for videos
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Video Listing (For Admins)</h2>
      {isLoading && <p>Loading videos...</p>}
      {error && <p>Error: {error}</p>}
      {videos.length > 0 && (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>{video.title}</li>
          ))}
        </ul>
      )}
      {videos.length === 0 && <p>No videos found.</p>}
    </div>
  );
};

export default VideoList;
