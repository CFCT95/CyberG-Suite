/**
 * Dashboard - Página principal del dashboard
 * Muestra información del usuario y estadísticas
 */

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import UserInfoCard from '../components/dashboard/UserInfoCard';
import StatsCard from '../components/dashboard/StatsCard';
import QuickActionsPanel from '../components/dashboard/QuickActionsPanel';
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

  /**
   * Calcula los días desde el registro
   */
  const calcularDiasRegistrado = () => {
    if (!user?.fecha_registro) return 0;
    const fechaRegistro = new Date(user.fecha_registro);
    const hoy = new Date();
    const diferencia = hoy - fechaRegistro;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          👋 ¡Bienvenido, {user?.nombre || 'Usuario'}!
        </h1>
        <p className="dashboard-subtitle">
          Gestiona tu información de ciberseguridad desde este panel de control.
        </p>
      </div>

      {/* Estadísticas rápidas */}
      <div className="dashboard-stats">
        <StatsCard
          value="✓"
          label="Estado de Cuenta"
          icon="🔒"
          color="success"
        />
        <StatsCard
          value={calcularDiasRegistrado()}
          label="Días Registrado"
          icon="📅"
        />
        <StatsCard
          value={`#${user?.id_cliente || 'N/A'}`}
          label="ID de Cliente"
          icon="🆔"
        />
      </div>

      {/* Información del usuario */}
      <div className="dashboard-grid">
        <UserInfoCard user={user} />
        
        <Card className="dashboard-card">
          <Card header={<h3>🏢 Información Empresarial</h3>}>
            <div className="info-item">
              <span className="info-label">Tipo de Empresa:</span>
              <span className="info-value">{user?.tipo_empresa || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">ID Cliente:</span>
              <span className="info-value">#{user?.id_cliente || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Fecha Registro:</span>
              <span className="info-value">
                {user?.fecha_registro 
                  ? new Date(user.fecha_registro).toLocaleDateString('es-ES')
                  : 'N/A'}
              </span>
            </div>
          </Card>
        </Card>

        <Card className="dashboard-card">
          <Card header={<h3>🔒 Seguridad</h3>}>
            <div className="info-item">
              <span className="info-label">Estado:</span>
              <span className="info-value status-active">✓ Activo</span>
            </div>
            <div className="info-item">
              <span className="info-label">Sesión:</span>
              <span className="info-value">Iniciada</span>
            </div>
            <div className="info-item">
              <span className="info-label">Último acceso:</span>
              <span className="info-value">
                {new Date().toLocaleString('es-ES')}
              </span>
            </div>
          </Card>
        </Card>
      </div>

      {/* Panel de acciones rápidas */}
      <QuickActionsPanel />
    </div>
  );
};

export default Dashboard;

