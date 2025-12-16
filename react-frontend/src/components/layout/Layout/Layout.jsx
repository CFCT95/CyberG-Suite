/**
 * Layout - Componente de layout principal
 * Estructura la aplicación con header, sidebar y contenido principal
 */

import React from 'react';
import Navbar from '../../navigation/Navbar';
import './Layout.css';

/**
 * Componente Layout
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Contenido principal a renderizar
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-main">
        <div className="layout-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

