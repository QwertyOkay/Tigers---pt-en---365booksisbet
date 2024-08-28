import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import Terms from './pages/Terms';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the AboutPage component.
root.render(<Terms />);
