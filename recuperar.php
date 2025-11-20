<?php
require 'db.php';

$mensaje_error = '';
$mensaje_exito = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correo = trim($_POST['correo'] ?? '');

    if (empty($correo)) {
        $mensaje_error = 'Por favor, ingresa tu correo electrónico';
    } elseif (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $mensaje_error = 'El correo electrónico no es válido';
    } else {
        // Verificar si el correo existe en la tabla CLIENTE
        $sql = "SELECT id_cliente, nombre FROM CLIENTE WHERE correo = ? LIMIT 1";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param("s", $correo);
            $stmt->execute();
            $result = $stmt->get_result();
            $cliente = $result->fetch_assoc();

            if ($cliente) {
                // Generar token de recuperación (en producción, usar un token más seguro)
                $token = bin2hex(random_bytes(32));
                $token_expiracion = date('Y-m-d H:i:s', strtotime('+1 hour'));
                
                // Verificar si las columnas de token existen antes de actualizar
                $columnas = $conn->query("SHOW COLUMNS FROM CLIENTE LIKE 'token_recuperacion'");
                if ($columnas->num_rows > 0) {
                    // Guardar token en la base de datos
                    $sql_token = "UPDATE CLIENTE SET token_recuperacion = ?, token_expiracion = ? WHERE id_cliente = ?";
                    $stmt_token = $conn->prepare($sql_token);
                    
                    if ($stmt_token) {
                        $stmt_token->bind_param("ssi", $token, $token_expiracion, $cliente['id_cliente']);
                        $stmt_token->execute();
                        $stmt_token->close();
                    }
                }
                
                // En producción, aquí enviarías un email con el enlace de recuperación
                // Por ahora, solo mostramos un mensaje
                $mensaje_exito = 'Si el correo existe en nuestro sistema, recibirás instrucciones para recuperar tu contraseña.';
            } else {
                // Por seguridad, no revelamos si el correo existe o no
                $mensaje_exito = 'Si el correo existe en nuestro sistema, recibirás instrucciones para recuperar tu contraseña.';
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
  <title>Recuperar contraseña - CyberG Suite</title>
  <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
  <div class="form-container">
    <h2>Recuperar contraseña</h2>

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

    <form method="POST" action="recuperar.php">
      <input type="email" name="correo" id="correo" placeholder="Correo electrónico" required value="<?php echo isset($_POST['correo']) ? htmlspecialchars($_POST['correo']) : ''; ?>">
      <button type="submit">Enviar instrucciones</button>
    </form>
    <a href="login.php" class="link">Volver al inicio de sesión</a>
    <a href="index.html" class="link" style="margin-top:10px; display:block;">Volver al inicio</a>
  </div>
</body>
</html>

