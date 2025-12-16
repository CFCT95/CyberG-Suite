/**
 * UserInfoCard - Componente de tarjeta que muestra información del usuario
 * Muestra nombre, correo, teléfono y tipo de empresa
 */

import React from 'react';
import Card from '../../ui/Card';
import './UserInfoCard.css';

/**
 * Componente UserInfoCard
 * @param {Object} props - Props del componente
 * @param {Object} props.user - Objeto con información del usuario
 */
const UserInfoCard = ({ user }) => {
  return (
    <Card className="user-info-card">
      <Card header={<h3>📋 Información Personal</h3>}>
        <div className="info-item">
          <span className="info-label">Nombre:</span>
          <span className="info-value">{user?.nombre || 'N/A'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Correo:</span>
          <span className="info-value">{user?.correo || 'N/A'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Teléfono:</span>
          <span className="info-value">{user?.telefono || 'N/A'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Tipo de Empresa:</span>
          <span className="info-value">{user?.tipo_empresa || 'N/A'}</span>
        </div>
      </Card>
    </Card>
  );
};

export default UserInfoCard;

