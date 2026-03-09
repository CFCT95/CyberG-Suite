/**
 * QuickActionsPanel - Panel de acciones rápidas
 * Muestra botones de acceso rápido a funcionalidades comunes
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import './QuickActionsPanel.css';

/**
 * Componente QuickActionsPanel
 */
const QuickActionsPanel = () => {
  const navigate = useNavigate();

  /**
   * Acciones rápidas disponibles
   */
  const actions = [
    {
      id: 'ver-registros',
      label: 'Ver Registros',
      icon: '📝',
      onClick: () => navigate('/clientes'),
    },
    {
      id: 'nuevo-registro',
      label: 'Nuevo Registro',
      icon: '➕',
      onClick: () => navigate('/registro'),
    },
    {
      id: 'cambiar-password',
      label: 'Cambiar Contraseña',
      icon: '🔐',
      onClick: () => navigate('/recuperar'),
    },
    {
      id: 'inicio',
      label: 'Inicio',
      icon: '🏠',
      onClick: () => navigate('/'),
      variant: 'secondary',
    },
  ];

  return (
    <div className="quick-actions-panel">
      <h3 className="panel-title">🚀 Acciones Rápidas</h3>
      <div className="actions-grid">
        {actions.map((action) => (
          <div key={action.id} className="action-card">
            <div className="action-icon">{action.icon}</div>
            <h4 className="action-label">{action.label}</h4>
            <Button
              variant={action.variant || 'primary'}
              onClick={action.onClick}
              className="action-button"
            >
              Ir
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsPanel;

