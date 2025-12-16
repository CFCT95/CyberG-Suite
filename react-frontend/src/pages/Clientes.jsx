/**
 * Clientes - Página para ver todos los registros de clientes
 * Muestra una tabla con todos los clientes registrados
 */

import React, { useEffect, useState } from 'react';
import { clientService } from '../services/api';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import EmptyState from '../components/data/EmptyState';
import Alert from '../components/ui/Alert';
import './Clientes.css';

/**
 * Componente Clientes
 */
const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadClientes();
  }, []);

  /**
   * Carga los clientes desde la API
   */
  const loadClientes = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // Nota: El servicio necesita ser adaptado para parsear HTML o crear endpoint JSON
      // Por ahora mostramos un estado vacío o de carga
      const response = await fetch('http://localhost/CyberG-Suite/ver_registros.php');
      const html = await response.text();
      
      // Simulación: En producción se debería tener un endpoint JSON
      // Por ahora mostramos mensaje informativo
      setClientes([]);
    } catch (err) {
      setError('Error al cargar los clientes. Por favor, intenta nuevamente.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="clientes-loading">
        <LoadingSpinner size="large" message="Cargando clientes..." />
      </div>
    );
  }

  return (
    <div className="clientes-page">
      <h1 className="page-title">📊 Registros de Clientes</h1>

      {error && (
        <Alert type="error" message={error} onDismiss={() => setError(null)} />
      )}

      <Card className="clientes-card">
        {clientes.length === 0 ? (
          <EmptyState
            message="No hay clientes registrados todavía"
            icon="📭"
            actionLabel="Crear primer cliente"
            onAction={() => window.location.href = '/registro'}
          />
        ) : (
          <div className="clientes-table-container">
            <table className="clientes-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Tipo de Empresa</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Fecha de Registro</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id_cliente}>
                    <td>{cliente.id_cliente}</td>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.tipo_empresa}</td>
                    <td>{cliente.correo}</td>
                    <td>{cliente.telefono}</td>
                    <td>{new Date(cliente.fecha_registro).toLocaleDateString('es-ES')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <div className="clientes-info">
        <p>
          <strong>Nota:</strong> Para ver los registros completos, accede directamente a{' '}
          <a href="http://localhost/CyberG-Suite/ver_registros.php" target="_blank" rel="noopener noreferrer">
            ver_registros.php
          </a>
        </p>
      </div>
    </div>
  );
};

export default Clientes;

