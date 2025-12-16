/**
 * AuthContext - Context Provider para gestión global de autenticación
 * Proporciona el estado de autenticación y métodos relacionados a todos los componentes
 */

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { authService } from '../services/api';

// Crear el contexto
const AuthContext = createContext(null);

/**
 * Hook personalizado para usar el AuthContext
 * @returns {Object} Objeto con user, isAuthenticated, login, logout, checkAuth
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

/**
 * AuthProvider - Componente que provee el contexto de autenticación
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Componentes hijos
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Verificar si hay una sesión activa al cargar la aplicación
   */
  useEffect(() => {
    checkAuth();
  }, []);

  /**
   * Verificar autenticación actual
   * Lee el usuario desde localStorage y verifica con el servidor
   */
  const checkAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
        
        // Verificar con el servidor si la sesión sigue siendo válida
        try {
          await authService.checkSession();
        } catch (error) {
          // Si falla, limpiar el estado
          logout();
        }
      }
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
      logout();
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Iniciar sesión
   * @param {string} correo - Correo electrónico del usuario
   * @param {string} contrasena - Contraseña del usuario
   * @returns {Promise<Object>} Datos del usuario si el login es exitoso
   */
  const login = useCallback(async (correo, contrasena) => {
    try {
      const response = await authService.login(correo, contrasena);
      
      if (response.success || response.user) {
        const userData = response.user || {
          id_cliente: response.id_cliente,
          nombre: response.nombre,
          correo: response.correo,
        };
        
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        
        return { success: true, user: userData };
      } else {
        throw new Error(response.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error en login:', error);
      return {
        success: false,
        message: error.response?.data?.message || error.message || 'Error al iniciar sesión',
      };
    }
  }, []);

  /**
   * Cerrar sesión
   * Limpia el estado de autenticación y el localStorage
   */
  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
    }
  }, []);

  /**
   * Registrar nuevo usuario
   * @param {Object} userData - Datos del usuario a registrar
   * @returns {Promise<Object>} Resultado del registro
   */
  const register = useCallback(async (userData) => {
    try {
      const response = await authService.register(userData);
      
      if (response.success || response.message) {
        return { success: true, message: response.message || 'Registro exitoso' };
      } else {
        throw new Error(response.message || 'Error al registrar');
      }
    } catch (error) {
      console.error('Error en registro:', error);
      return {
        success: false,
        message: error.response?.data?.message || error.message || 'Error al registrar',
      };
    }
  }, []);

  // Memoizar el valor del contexto para evitar re-renders innecesarios
  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      register,
      checkAuth,
    }),
    [user, isAuthenticated, isLoading, login, logout, register, checkAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

