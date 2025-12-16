/**
 * Navbar - Barra de navegación principal
 * Se muestra en todas las páginas autenticadas
 */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Button from '../../ui/Button';
import './Navbar.css';

/**
 * Componente Navbar
 */
const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Maneja el cierre de sesión
   */
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  /**
   * Verifica si una ruta está activa
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Navegación principal">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/dashboard" className="navbar-logo">
            <img src="/images/logo-cyberg-suite.png" alt="CyberG Suite" className="logo-img" />
            <span className="logo-text">CyberG Suite</span>
          </Link>
        </div>

        <div className="navbar-right">
          <div className="navbar-user-info">
            <span className="user-name">{user?.nombre || 'Usuario'}</span>
            <span className="user-email">{user?.correo || ''}</span>
          </div>

          <button
            className="navbar-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
            <Link
              to="/dashboard"
              className={`navbar-link ${isActive('/dashboard') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/clientes"
              className={`navbar-link ${isActive('/clientes') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Clientes
            </Link>
            <Button variant="danger" onClick={handleLogout} className="navbar-logout">
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

