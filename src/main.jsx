import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/Router';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>

  </StrictMode>
);
