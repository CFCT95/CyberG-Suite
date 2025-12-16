/**
 * InputField - Componente reutilizable de campo de entrada
 * Incluye label, input, validación y mensajes de error
 */

import React, { useState } from 'react';
import './InputField.css';

/**
 * Componente InputField
 * @param {Object} props - Props del componente
 * @param {string} props.type - Tipo de input: 'text', 'email', 'password', 'tel', etc.
 * @param {string} props.label - Etiqueta del campo
 * @param {string} props.placeholder - Texto placeholder
 * @param {string} props.value - Valor del input
 * @param {Function} props.onChange - Función a ejecutar al cambiar el valor
 * @param {string} props.error - Mensaje de error a mostrar
 * @param {boolean} props.required - Indica si el campo es requerido
 * @param {boolean} props.disabled - Indica si el campo está deshabilitado
 * @param {string} props.className - Clases CSS adicionales
 */
const InputField = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Determina las clases CSS del input
   */
  const inputClasses = [
    'input-field',
    error && 'input-field-error',
    isFocused && 'input-field-focused',
    disabled && 'input-field-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="input-field-wrapper">
      {label && (
        <label htmlFor={props.id || props.name} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <div className="input-container">
        <input
          type={type}
          id={props.id || props.name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id || props.name}-error` : undefined}
          {...props}
        />
      </div>
      {error && (
        <span
          id={`${props.id || props.name}-error`}
          className="input-error-message"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;

