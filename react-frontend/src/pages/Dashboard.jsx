/**
 * Dashboard - Página principal del dashboard
 * Muestra información del usuario y estadísticas
 */

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import './Dashboard.css';

/**
 * Componente Dashboard
 */
const Dashboard = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <LoadingSpinner size="large" message="Cargando dashboard..." />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        Bienvenido, {user?.nombre || 'Usuario'}
      </h1>

      <div className="dashboard-grid">
        <Card className="dashboard-card">
          <Card header={<h3>Información Personal</h3>}>
            <div className="info-item">
              <span className="info-label">Nombre:</span>
              <span className="info-value">{user?.nombre || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Correo:</span>
              <span className="info-value">{user?.correo || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Tipo de Empresa:</span>
              <span className="info-value">{user?.tipo_empresa || 'N/A'}</span>
            </div>
          </Card>
        </Card>

        <Card className="dashboard-card">
          <Card header={<h3>Estado de Cuenta</h3>}>
            <div className="info-item">
              <span className="info-label">Estado:</span>
              <span className="info-value status-active">✓ Activo</span>
            </div>
            <div className="info-item">
              <span className="info-label">ID Cliente:</span>
              <span className="info-value">#{user?.id_cliente || 'N/A'}</span>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

