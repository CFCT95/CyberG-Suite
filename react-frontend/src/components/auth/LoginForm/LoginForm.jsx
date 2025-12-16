/**
 * LoginForm - Componente de formulario de inicio de sesión
 * Maneja la autenticación de usuarios con validación de campos
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import InputField from '../../ui/InputField';
import Button from '../../ui/Button';
import Alert from '../../ui/Alert';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { validateEmail } from '../../../utils/validation';
import './LoginForm.css';

/**
 * Componente LoginForm
 */
const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Estados del formulario
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  /**
   * Maneja el cambio en los campos del formulario
   * @param {Event} e - Evento del input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * Valida los campos del formulario
   * @returns {boolean} true si es válido, false si hay errores
   */
  const validateForm = () => {
    const newErrors = {};

    // Validar correo
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo electrónico es requerido';
    } else if (!validateEmail(formData.correo)) {
      newErrors.correo = 'El correo electrónico no es válido';
    }

    // Validar contraseña
    if (!formData.contrasena) {
      newErrors.contrasena = 'La contraseña es requerida';
    } else if (formData.contrasena.length < 6) {
      newErrors.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Maneja el envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulario
    if (!validateForm()) {
      setAlert({
        type: 'error',
        message: 'Por favor, corrige los errores en el formulario',
      });
      return;
    }

    setIsLoading(true);
    setAlert(null);

    try {
      const result = await login(formData.correo, formData.contrasena);

      if (result.success) {
        setAlert({
          type: 'success',
          message: 'Inicio de sesión exitoso. Redirigiendo...',
        });

        // Redirigir al dashboard después de un breve delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setAlert({
          type: 'error',
          message: result.message || 'Error al iniciar sesión. Verifica tus credenciales.',
        });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Error al conectar con el servidor. Por favor, intenta nuevamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <h2 className="login-title">Iniciar Sesión</h2>

        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            autoDismiss={alert.type === 'success'}
            onDismiss={() => setAlert(null)}
          />
        )}

        <InputField
          type="email"
          name="correo"
          label="Correo Electrónico"
          placeholder="correo@ejemplo.com"
          value={formData.correo}
          onChange={handleChange}
          error={errors.correo}
          required
          disabled={isLoading}
        />

        <InputField
          type="password"
          name="contrasena"
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          value={formData.contrasena}
          onChange={handleChange}
          error={errors.contrasena}
          required
          disabled={isLoading}
        />

        <Button
          type="submit"
          variant="primary"
          loading={isLoading}
          disabled={isLoading}
          className="btn-block"
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </Button>

        <div className="login-links">
          <a href="/recuperar" className="login-link">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="/registro" className="login-link">
            ¿No tienes cuenta? Regístrate
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

