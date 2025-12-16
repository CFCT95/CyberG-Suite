/**
 * main.jsx - Punto de entrada de la aplicación React
 * Renderiza el componente App en el DOM
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderizar la aplicación en el elemento root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

