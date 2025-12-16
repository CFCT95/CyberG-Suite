/**
 * RegisterForm - Componente de formulario de registro
 * Maneja el registro de nuevos usuarios con validación completa
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import InputField from '../../ui/InputField';
import Button from '../../ui/Button';
import Alert from '../../ui/Alert';
import { validateEmail, validatePhone, validatePassword, validatePasswordMatch } from '../../../utils/validation';
import './RegisterForm.css';
import './RegisterForm.css';

/**
 * Componente RegisterForm
 */
const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    nombre: '',
    tipo_empresa: '',
    correo: '',
    telefono: '',
    contrasena: '',
    confirmar_contrasena: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(null);

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validación en tiempo real para contraseña
    if (name === 'contrasena') {
      const strength = validatePassword(value);
      setPasswordStrength(strength);
    }

    // Limpiar error del campo
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * Valida todos los campos del formulario
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.tipo_empresa.trim()) {
      newErrors.tipo_empresa = 'El tipo de empresa es requerido';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo electrónico es requerido';
    } else if (!validateEmail(formData.correo)) {
      newErrors.correo = 'El correo electrónico no es válido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!validatePhone(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe tener entre 10 y 15 dígitos';
    }

    const passwordValidation = validatePassword(formData.contrasena);
    if (!passwordValidation.isValid) {
      newErrors.contrasena = passwordValidation.message;
    }

    if (!formData.confirmar_contrasena) {
      newErrors.confirmar_contrasena = 'Confirma tu contraseña';
    } else if (!validatePasswordMatch(formData.contrasena, formData.confirmar_contrasena)) {
      newErrors.confirmar_contrasena = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const result = await register(formData);

      if (result.success) {
        setAlert({
          type: 'success',
          message: 'Registro exitoso. Redirigiendo al login...',
        });

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setAlert({
          type: 'error',
          message: result.message || 'Error al registrar. Por favor, intenta nuevamente.',
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
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form" noValidate>
        <h2 className="register-title">Crear Cuenta</h2>

        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            autoDismiss={alert.type === 'success'}
            onDismiss={() => setAlert(null)}
          />
        )}

        <InputField
          type="text"
          name="nombre"
          label="Nombre Completo"
          placeholder="Nombre de la empresa"
          value={formData.nombre}
          onChange={handleChange}
          error={errors.nombre}
          required
          disabled={isLoading}
        />

        <InputField
          type="text"
          name="tipo_empresa"
          label="Tipo de Empresa"
          placeholder="Ej: Tecnología, Servicios, etc."
          value={formData.tipo_empresa}
          onChange={handleChange}
          error={errors.tipo_empresa}
          required
          disabled={isLoading}
        />

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
          type="tel"
          name="telefono"
          label="Teléfono"
          placeholder="1234567890"
          value={formData.telefono}
          onChange={handleChange}
          error={errors.telefono}
          required
          disabled={isLoading}
        />

        <InputField
          type="password"
          name="contrasena"
          label="Contraseña"
          placeholder="Mínimo 6 caracteres"
          value={formData.contrasena}
          onChange={handleChange}
          error={errors.contrasena}
          required
          disabled={isLoading}
        />

        {passwordStrength && formData.contrasena && (
          <div className={`password-strength password-strength-${passwordStrength.strength}`}>
            Fortaleza: {passwordStrength.strength === 'weak' ? 'Débil' : passwordStrength.strength === 'medium' ? 'Media' : 'Fuerte'}
          </div>
        )}

        <InputField
          type="password"
          name="confirmar_contrasena"
          label="Confirmar Contraseña"
          placeholder="Repite tu contraseña"
          value={formData.confirmar_contrasena}
          onChange={handleChange}
          error={errors.confirmar_contrasena}
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
          {isLoading ? 'Registrando...' : 'Registrarse'}
        </Button>

        <div className="register-links">
          <a href="/login" className="register-link">
            ¿Ya tienes cuenta? Inicia sesión
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

