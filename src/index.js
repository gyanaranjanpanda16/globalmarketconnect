import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: you can add global styles here
import App from './App';

// Renders the App component into the "root" div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure this matches the id in index.html
);
