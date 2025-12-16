/**
 * StatsCard - Componente reutilizable que muestra una estadística
 * Muestra un número grande, etiqueta y opcionalmente un icono
 */

import React from 'react';
import './StatsCard.css';

/**
 * Componente StatsCard
 * @param {Object} props - Props del componente
 * @param {string|number} props.value - Valor de la estadística
 * @param {string} props.label - Etiqueta descriptiva
 * @param {string} props.icon - Icono opcional (emoji o texto)
 * @param {string} props.color - Color del acento (opcional)
 */
const StatsCard = ({ value, label, icon, color = 'primary' }) => {
  /**
   * Formatea el número si es necesario
   */
  const formatValue = (val) => {
    if (typeof val === 'number') {
      return new Intl.NumberFormat('es-ES').format(val);
    }
    return val;
  };

  return (
    <div className={`stats-card stats-card-${color}`}>
      {icon && <div className="stats-icon">{icon}</div>}
      <div className="stats-number">{formatValue(value)}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
};

export default StatsCard;

