/**
 * LoadingSpinner - Componente de indicador de carga
 * Se muestra durante operaciones asíncronas
 */

import React from 'react';
import './LoadingSpinner.css';

/**
 * Componente LoadingSpinner
 * @param {Object} props - Props del componente
 * @param {string} props.size - Tamaño del spinner: 'small', 'medium', 'large'
 * @param {string} props.variant - Variante del spinner: 'spinner', 'dots', 'bars'
 * @param {string} props.message - Mensaje de texto opcional
 * @param {string} props.className - Clases CSS adicionales
 */
const LoadingSpinner = ({
  size = 'medium',
  variant = 'spinner',
  message,
  className = '',
}) => {
  const spinnerClasses = [
    'loading-spinner',
    `loading-spinner-${size}`,
    `loading-spinner-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={spinnerClasses} role="status" aria-live="polite">
      <div className="spinner-element" aria-hidden="true"></div>
      {message && <p className="spinner-message">{message}</p>}
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default LoadingSpinner;

