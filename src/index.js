import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SiteProvider } from './context/SiteContext';
import './i18n'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SiteProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SiteProvider>
);
reportWebVitals();
