import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ⬅️ Make sure this matches the filename from step 3

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
