import React from 'react'; // Import React to use JSX
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import your main App component
import './index.css'; // Import your CSS file

const container = document.getElementById('root'); // Get the root container
const root = createRoot(container); // Create a root for ReactDOM

root.render(<App />); // Render your App component into the root
