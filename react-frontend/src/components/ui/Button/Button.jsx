/**
 * Button - Componente de botón reutilizable
 * Soporta diferentes variantes y estados (loading, disabled)
 */

import React from 'react';
import './Button.css';

/**
 * Componente Button
 * @param {Object} props - Props del componente
 * @param {string} props.variant - Variante del botón: 'primary', 'secondary', 'danger'
 * @param {boolean} props.loading - Indica si el botón está en estado de carga
 * @param {boolean} props.disabled - Indica si el botón está deshabilitado
 * @param {ReactNode} props.children - Contenido del botón
 * @param {string} props.className - Clases CSS adicionales
 * @param {Function} props.onClick - Función a ejecutar al hacer clic
 * @param {string} props.type - Tipo de botón: 'button', 'submit', 'reset'
 */
const Button = ({
  variant = 'primary',
  loading = false,
  disabled = false,
  children,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  /**
   * Maneja el clic del botón
   * Previene la acción si está deshabilitado o cargando
   */
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  /**
   * Determina las clases CSS del botón
   */
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    loading && 'btn-loading',
    disabled && 'btn-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className="btn-spinner" aria-hidden="true"></span>}
      <span className={loading ? 'btn-content-loading' : ''}>{children}</span>
    </button>
  );
};

export default Button;

