/**
 * Alert - Componente de alerta para mostrar mensajes
 * Soporta diferentes tipos: success, error, warning, info
 */

import React, { useEffect, useState } from 'react';
import './Alert.css';

/**
 * Componente Alert
 * @param {Object} props - Props del componente
 * @param {string} props.type - Tipo de alerta: 'success', 'error', 'warning', 'info'
 * @param {string} props.message - Mensaje a mostrar
 * @param {boolean} props.autoDismiss - Indica si se cierra automáticamente
 * @param {number} props.dismissTime - Tiempo en ms antes de cerrar (si autoDismiss es true)
 * @param {Function} props.onDismiss - Función a ejecutar al cerrar
 * @param {string} props.className - Clases CSS adicionales
 */
const Alert = ({
  type = 'info',
  message,
  autoDismiss = false,
  dismissTime = 5000,
  onDismiss,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  /**
   * Maneja el cierre automático del alert
   */
  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onDismiss) {
          onDismiss();
        }
      }, dismissTime);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTime, isVisible, onDismiss]);

  /**
   * Maneja el cierre manual del alert
   */
  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible || !message) {
    return null;
  }

  const alertClasses = [
    'alert',
    `alert-${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  /**
   * Iconos según el tipo de alerta
   */
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div
      className={alertClasses}
      role="alert"
      aria-live="polite"
    >
      <span className="alert-icon" aria-hidden="true">
        {icons[type]}
      </span>
      <span className="alert-message">{message}</span>
      {onDismiss && (
        <button
          className="alert-close"
          onClick={handleDismiss}
          aria-label="Cerrar alerta"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;

