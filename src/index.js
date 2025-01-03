import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import './index.css'; // Tailwind or custom styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using the new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
