import React, { useState } from 'react';
import api from '../api/axios'; // Adjust the path as per your project structure
import '../pages/Login/signin.css'; // Adjust the path to signin.css as per your project structure

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get('/api/users');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MyComponent;
