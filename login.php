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

// Mostrar mensaje si se cerró sesión
if (isset($_GET['logout']) && $_GET['logout'] == 1) {
    $mensaje_exito = 'Sesión cerrada correctamente';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Campos que vienen del formulario
    $correo = trim($_POST['correo'] ?? '');
    $contrasena = $_POST['contrasena'] ?? '';

    if (empty($correo) || empty($contrasena)) {
        $mensaje_error = 'Por favor, completa todos los campos';
    } else {
        // Preparar consulta usando mysqli - buscar en tabla CLIENTE
        $sql = "SELECT id_cliente, nombre, correo, contrasena FROM CLIENTE WHERE correo = ? LIMIT 1";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param("s", $correo);
            $stmt->execute();
            $result = $stmt->get_result();
            $cliente = $result->fetch_assoc();

            if ($cliente) {
                // Verificar contraseña usando password_verify (la contraseña está hasheada)
                if (password_verify($contrasena, $cliente['contrasena'])) {
                    $_SESSION['cliente_id'] = $cliente['id_cliente'];
                    $_SESSION['cliente_nombre'] = $cliente['nombre'];
                    $_SESSION['cliente_correo'] = $cliente['correo'];
                    header('Location: dashboard.php');
                    exit;
                } else {
                    $mensaje_error = 'Contraseña incorrecta';
                }
            } else {
                $mensaje_error = 'Usuario no encontrado';
            }
            $stmt->close();
        } else {
            $mensaje_error = 'Error en la consulta: ' . $conn->error;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iniciar sesión - CyberG Suite</title>
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
    input[type="email"],
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
    <h2>Iniciar sesión</h2>

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

    <!-- AHORA el formulario sí envía a PHP -->
    <form method="POST" action="login.php" id="loginForm">
      <input type="email" name="correo" id="email" placeholder="Correo electrónico" required>
      <input type="password" name="contrasena" id="password" placeholder="Contraseña" required>
      <button type="submit">Entrar</button>
    </form>

    <a href="recuperar.html" class="link">¿Olvidaste tu contraseña?</a>
    <a href="index.html" class="link" style="margin-top:10px; display:block;">Volver al inicio</a>
  </div>
</body>
</html>
