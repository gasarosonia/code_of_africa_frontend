import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'; // Ensure the correct path to your theme

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
