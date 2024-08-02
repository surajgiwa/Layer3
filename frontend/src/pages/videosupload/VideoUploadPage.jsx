// src/pages/VideoUploadPage.jsx

import React, { useState } from 'react';
import axios from '../../api/axios'; // Adjust path as per your Axios setup

const VideoUploadPage = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await axios.post('/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('Video upload successful!');
      console.log(response.data);
    } catch (error) {
      setMessage('Error uploading video: ' + error.message);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Video Upload Page (Layer 3)</h1>
      <form onSubmit={handleVideoUpload}>
        <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} />
        <button type="submit">Upload Video</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VideoUploadPage;
