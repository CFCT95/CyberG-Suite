/**
 * Utilidades de validación para formularios
 * Contiene funciones reutilizables para validar campos comunes
 */

/**
 * Valida formato de correo electrónico
 * @param {string} email - Correo a validar
 * @returns {boolean} true si es válido, false si no
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida fortaleza de contraseña
 * @param {string} password - Contraseña a validar
 * @returns {Object} Objeto con isValid y strength
 */
export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, strength: 'weak', message: 'La contraseña es requerida' };
  }

  if (password.length < 6) {
    return { isValid: false, strength: 'weak', message: 'La contraseña debe tener al menos 6 caracteres' };
  }

  // Calcular fortaleza
  let strength = 'weak';
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score >= 4) strength = 'strong';
  else if (score >= 2) strength = 'medium';

  return {
    isValid: password.length >= 6,
    strength,
    message: password.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : '',
  };
};

/**
 * Valida formato de teléfono
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} true si es válido, false si no
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

/**
 * Valida que dos contraseñas coincidan
 * @param {string} password - Primera contraseña
 * @param {string} confirmPassword - Segunda contraseña
 * @returns {boolean} true si coinciden, false si no
 */
export const validatePasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

/**
 * Valida que un campo no esté vacío
 * @param {string} value - Valor a validar
 * @returns {boolean} true si no está vacío, false si está vacío
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

