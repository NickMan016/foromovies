import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.css'
import './assets/css/tailwind.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
