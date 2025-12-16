
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS improve CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE improve;

-- Crear la tabla CLIENTE con todos los campos necesarios
CREATE TABLE IF NOT EXISTS CLIENTE (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo_empresa VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(15) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_correo (correo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Si la tabla CLIENTE ya existe pero no tiene el campo contraseña, ejecutar:
-- ALTER TABLE CLIENTE ADD COLUMN contrasena VARCHAR(255) NOT NULL AFTER telefono;

