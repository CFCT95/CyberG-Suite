/**
 * ProtectedRoute - Componente wrapper que protege rutas
 * Redirige usuarios no autenticados a la página de login
 */

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import LoadingSpinner from '../../ui/LoadingSpinner';

/**
 * Componente ProtectedRoute
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Componentes hijos a proteger
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Mostrar spinner mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <LoadingSpinner size="large" message="Verificando autenticación..." />
      </div>
    );
  }

  // Si no está autenticado, redirigir al login
  // Guardamos la ubicación actual para redirigir después del login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado, renderizar los hijos
  return children;
};

export default ProtectedRoute;

