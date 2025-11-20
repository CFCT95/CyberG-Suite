<?php
// Habilitar visualización de errores (solo para desarrollo)
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Configuración de la base de datos
$servername = "127.0.0.1";
$port = 3307; // MySQL en XAMPP está corriendo en el puerto 3307
$username = "root";
$password = ""; // XAMPP por defecto tiene contraseña vacía
$dbname = "improve"; // Nombre de la base de datos

// Primero conectar sin seleccionar base de datos para verificar servidor
$conn_temp = new mysqli($servername, $username, $password, "", $port);

if ($conn_temp->connect_error) {
  die("Error de conexión al servidor MySQL: " . $conn_temp->connect_error . 
      "<br><br>Verifica que MySQL esté corriendo en XAMPP.");
}

// Verificar si la base de datos existe
$result = $conn_temp->query("SHOW DATABASES LIKE '$dbname'");
if ($result->num_rows == 0) {
    // Crear la base de datos si no existe
    if ($conn_temp->query("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")) {
        // Base de datos creada
        $conn_temp->close();
    } else {
        die("Error al crear la base de datos: " . $conn_temp->error);
    }
} else {
    $conn_temp->close();
}

// Crear conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexión
if ($conn->connect_error) {
  die("Error de conexión a la base de datos '$dbname': " . $conn->connect_error . 
      "<br><br>La base de datos no existe. Por favor créala manualmente o verifica el nombre.");
}

// Verificar si la tabla CLIENTE existe y tiene el campo contraseña
$table_check = $conn->query("SHOW TABLES LIKE 'CLIENTE'");
if ($table_check->num_rows > 0) {
    // Verificar si la tabla CLIENTE tiene el campo contraseña
    $column_check = $conn->query("SHOW COLUMNS FROM CLIENTE LIKE 'contrasena'");
    if ($column_check->num_rows == 0) {
        // Agregar campo contraseña a la tabla CLIENTE
        $sql_alter = "ALTER TABLE CLIENTE ADD COLUMN contrasena VARCHAR(255) NOT NULL AFTER telefono";
        if (!$conn->query($sql_alter)) {
            die("Error al agregar campo contraseña a CLIENTE: " . $conn->error);
        }
    }
} else {
    // Crear tabla CLIENTE si no existe
    $sql_create_table = "CREATE TABLE IF NOT EXISTS CLIENTE (
        id_cliente INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        tipo_empresa VARCHAR(50) NOT NULL,
        correo VARCHAR(100) NOT NULL UNIQUE,
        telefono VARCHAR(15) NOT NULL,
        contrasena VARCHAR(255) NOT NULL,
        fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_correo (correo)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    if (!$conn->query($sql_create_table)) {
        die("Error al crear la tabla CLIENTE: " . $conn->error);
    }
}

// Establecer charset UTF-8 para caracteres especiales
$conn->set_charset("utf8");
?>