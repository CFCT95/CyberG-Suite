/**
 * EmptyState - Componente que se muestra cuando no hay datos
 * Proporciona un mensaje amigable y opcionalmente una acción
 */

import React from 'react';
import Button from '../../ui/Button';
import './EmptyState.css';

/**
 * Componente EmptyState
 * @param {Object} props - Props del componente
 * @param {string} props.message - Mensaje a mostrar
 * @param {string} props.icon - Icono o emoji a mostrar
 * @param {string} props.actionLabel - Texto del botón de acción (opcional)
 * @param {Function} props.onAction - Función a ejecutar al hacer clic en el botón (opcional)
 */
const EmptyState = ({ 
  message = 'No hay datos para mostrar', 
  icon = '📭',
  actionLabel,
  onAction 
}) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <p className="empty-message">{message}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

