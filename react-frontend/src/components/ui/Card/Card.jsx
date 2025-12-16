/**
 * Card - Componente de tarjeta reutilizable
 * Agrupa contenido relacionado en una caja con bordes y sombra
 */

import React from 'react';
import './Card.css';

/**
 * Componente Card
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Contenido de la tarjeta
 * @param {ReactNode} props.header - Contenido del header (opcional)
 * @param {ReactNode} props.footer - Contenido del footer (opcional)
 * @param {string} props.className - Clases CSS adicionales
 * @param {Function} props.onClick - Función a ejecutar al hacer clic (opcional, hace la tarjeta clickeable)
 */
const Card = ({
  children,
  header,
  footer,
  className = '',
  onClick,
  ...props
}) => {
  const cardClasses = [
    'card',
    onClick && 'card-clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e);
        }
      }}
      {...props}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;

