<?php
// Habilitar visualización de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Iniciar sesión con manejo de errores
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require 'db.php';

$mensaje_error = '';
$mensaje_exito = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Campos que vienen del formulario
    $nombre = trim($_POST['nombre'] ?? '');
    $tipo_empresa = trim($_POST['tipo_empresa'] ?? '');
    $correo = trim($_POST['correo'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');
    $contrasena = $_POST['contrasena'] ?? '';
    $confirmar_contrasena = $_POST['confirmar_contrasena'] ?? '';

    // Validaciones
    if (empty($nombre) || empty($tipo_empresa) || empty($correo) || empty($telefono) || empty($contrasena) || empty($confirmar_contrasena)) {
        $mensaje_error = 'Por favor, completa todos los campos';
    } elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $mensaje_error = 'El correo electrónico no es válido';
    } elseif (strlen($telefono) < 10) {
        $mensaje_error = 'El teléfono debe tener al menos 10 caracteres';
    } elseif (strlen($contrasena) < 6) {
        $mensaje_error = 'La contraseña debe tener al menos 6 caracteres';
    } elseif ($contrasena !== $confirmar_contrasena) {
        $mensaje_error = 'Las contraseñas no coinciden';
    } else {
        // Verificar si el correo ya existe en la tabla CLIENTE
        $sql_check = "SELECT id_cliente FROM CLIENTE WHERE correo = ? LIMIT 1";
        $stmt_check = $conn->prepare($sql_check);
        
        if ($stmt_check) {
            $stmt_check->bind_param("s", $correo);
            $stmt_check->execute();
            $result_check = $stmt_check->get_result();
            
            if ($result_check->num_rows > 0) {
                $mensaje_error = 'Este correo electrónico ya está registrado';
                $stmt_check->close();
            } else {
                $stmt_check->close();
                
                // Hash de la contraseña para mayor seguridad
                $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);
                
                // Insertar nuevo cliente en la tabla CLIENTE
                $sql = "INSERT INTO CLIENTE (nombre, tipo_empresa, correo, telefono, contrasena) VALUES (?, ?, ?, ?, ?)";
                $stmt = $conn->prepare($sql);
                
                if ($stmt) {
                    $stmt->bind_param("sssss", $nombre, $tipo_empresa, $correo, $telefono, $contrasena_hash);
                    
                    if ($stmt->execute()) {
                        $mensaje_exito = '¡Registro exitoso! Redirigiendo al login...';
                        // Redirigir al login después de 2 segundos
                        header("refresh:2;url=login.php");
                    } else {
                        $mensaje_error = 'Error al registrar cliente: ' . $conn->error;
                    }
                    $stmt->close();
                } else {
                    $mensaje_error = 'Error en la consulta: ' . $conn->error;
                }
            }
        } else {
            $mensaje_error = 'Error al verificar cliente: ' . $conn->error;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro - CyberG Suite</title>
  <link rel="stylesheet" href="styles/styles.css">
  <style>
    /* Estilos inline como respaldo */
    body {
      font-family: Arial, sans-serif;
      background-color: #0b0f1a;
      color: white;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }
    .form-container {
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(255,255,255,0.1);
      width: 100%;
      max-width: 400px;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="password"] {
      width: calc(100% - 20px);
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
    input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
    button {
      width: 100%;
      padding: 10px;
      background: #ff6a00;
      border: none;
      color: white;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background: #e05800;
    }
    .link {
      display: block;
      margin-top: 15px;
      color: #ff6a00;
      font-size: 14px;
      text-decoration: none;
    }
    .link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="form-container">
    <h2>Crear cuenta</h2>

    <!-- Mensajes desde PHP -->
    <?php if ($mensaje_error): ?>
      <div class="message" style="color:#ff4444; text-align:center; margin-bottom:10px; padding:10px; background:#ffe6e6; border-radius:5px;">
        <?php echo htmlspecialchars($mensaje_error); ?>
      </div>
    <?php endif; ?>
    
    <?php if ($mensaje_exito): ?>
      <div class="message" style="color:#00aa00; text-align:center; margin-bottom:10px; padding:10px; background:#e6ffe6; border-radius:5px;">
        <?php echo htmlspecialchars($mensaje_exito); ?>
      </div>
    <?php endif; ?>

    <form method="POST" action="registro.php" id="registroForm">
      <input type="text" name="nombre" id="nombre" placeholder="Nombre completo" required value="<?php echo isset($_POST['nombre']) ? htmlspecialchars($_POST['nombre']) : ''; ?>">
      <input type="text" name="tipo_empresa" id="tipo_empresa" placeholder="Tipo de empresa" required value="<?php echo isset($_POST['tipo_empresa']) ? htmlspecialchars($_POST['tipo_empresa']) : ''; ?>">
      <input type="email" name="correo" id="correo" placeholder="Correo electrónico" required value="<?php echo isset($_POST['correo']) ? htmlspecialchars($_POST['correo']) : ''; ?>">
      <input type="tel" name="telefono" id="telefono" placeholder="Teléfono" required minlength="10" value="<?php echo isset($_POST['telefono']) ? htmlspecialchars($_POST['telefono']) : ''; ?>">
      <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" required minlength="6">
      <input type="password" name="confirmar_contrasena" id="confirmar_contrasena" placeholder="Confirmar contraseña" required minlength="6">
      <button type="submit">Registrarse</button>
    </form>
    <a href="login.php" class="link">¿Ya tienes cuenta? Inicia sesión</a>
    <a href="index.html" class="link" style="margin-top:10px; display:block;">Volver al inicio</a>
  </div>
</body>
</html>

