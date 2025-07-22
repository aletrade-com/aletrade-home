import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

// 🔁 Redirección desde ?redirect=/ruta
const redirect = new URLSearchParams(window.location.search).get("redirect");
if (redirect && window.location.pathname === "/") {
  window.history.replaceState(null, "", redirect);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);