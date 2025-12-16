/**
 * Servicio API para comunicación con el backend PHP
 * Maneja todas las peticiones HTTP relacionadas con la aplicación
 */

import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'http://localhost/CyberG-Suite',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Para mantener sesiones PHP
});

/**
 * Interceptor para agregar token de autenticación si existe
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor para manejar errores de respuesta
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o no válido
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

/**
 * Servicios de Autenticación
 */
export const authService = {
  /**
   * Iniciar sesión
   * @param {string} correo - Correo electrónico del usuario
   * @param {string} contrasena - Contraseña del usuario
   * @returns {Promise} Respuesta del servidor
   */
  login: async (correo, contrasena) => {
    const formData = new FormData();
    formData.append('correo', correo);
    formData.append('contrasena', contrasena);
    
    const response = await api.post('/login.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  /**
   * Registrar nuevo usuario
   * @param {Object} userData - Datos del usuario a registrar
   * @returns {Promise} Respuesta del servidor
   */
  register: async (userData) => {
    const formData = new FormData();
    formData.append('nombre', userData.nombre);
    formData.append('tipo_empresa', userData.tipo_empresa);
    formData.append('correo', userData.correo);
    formData.append('telefono', userData.telefono);
    formData.append('contrasena', userData.contrasena);
    formData.append('confirmar_contrasena', userData.confirmar_contrasena);
    
    const response = await api.post('/registro.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  /**
   * Solicitar recuperación de contraseña
   * @param {string} correo - Correo electrónico del usuario
   * @returns {Promise} Respuesta del servidor
   */
  requestPasswordRecovery: async (correo) => {
    const formData = new FormData();
    formData.append('correo', correo);
    
    const response = await api.post('/recuperar.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  /**
   * Verificar sesión actual
   * @returns {Promise} Datos del usuario si la sesión es válida
   */
  checkSession: async () => {
    const response = await api.get('/dashboard.php');
    return response.data;
  },

  /**
   * Cerrar sesión
   * @returns {Promise} Respuesta del servidor
   */
  logout: async () => {
    const response = await api.post('/logout.php');
    return response.data;
  },
};

/**
 * Servicios de Clientes
 */
export const clientService = {
  /**
   * Obtener todos los clientes
   * @returns {Promise} Lista de clientes
   */
  getAll: async () => {
    const response = await api.get('/ver_registros.php');
    return response.data;
  },

  /**
   * Obtener información de un cliente por ID
   * @param {number} id - ID del cliente
   * @returns {Promise} Datos del cliente
   */
  getById: async (id) => {
    const response = await api.get(`/cliente.php?id=${id}`);
    return response.data;
  },
};

export default api;

