<?php
// Habilitar visualización de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Iniciar sesión
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Verificar si el usuario está logueado
if (!isset($_SESSION['cliente_id'])) {
    header('Location: login.php');
    exit;
}

require 'db.php';

// Obtener información completa del cliente desde la base de datos
$cliente_id = $_SESSION['cliente_id'];
$sql = "SELECT id_cliente, nombre, tipo_empresa, correo, telefono, fecha_registro FROM CLIENTE WHERE id_cliente = ? LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $cliente_id);
$stmt->execute();
$result = $stmt->get_result();
$cliente = $result->fetch_assoc();
$stmt->close();

// Si no se encuentra el cliente, cerrar sesión
if (!$cliente) {
    session_destroy();
    header('Location: login.php');
    exit;
}

// Actualizar información de sesión con datos actualizados
$_SESSION['cliente_nombre'] = $cliente['nombre'];
$_SESSION['cliente_correo'] = $cliente['correo'];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - CyberG Suite</title>
  <link rel="stylesheet" href="styles/styles.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #0b0f1a;
      color: white;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }
    .header {
      background: rgba(255, 106, 0, 0.1);
      padding: 20px;
      border-bottom: 2px solid rgba(255, 106, 0, 0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .logo {
      max-width: 50px;
      height: auto;
    }
    .header h1 {
      margin: 0;
      color: #ff6a00;
      font-size: 24px;
    }
    .header-right {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .user-info {
      text-align: right;
      margin-right: 15px;
    }
    .user-name {
      font-weight: bold;
      color: #ff6a00;
    }
    .user-email {
      font-size: 12px;
      color: #cccccc;
    }
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background: #ff6a00;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
    .btn:hover {
      background: #e05800;
    }
    .btn-secondary {
      background: #555;
    }
    .btn-secondary:hover {
      background: #666;
    }
    .btn-danger {
      background: #dc3545;
    }
    .btn-danger:hover {
      background: #c82333;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px 20px;
    }
    .welcome-section {
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 0 15px rgba(255,255,255,0.1);
    }
    .welcome-section h2 {
      color: #ff6a00;
      margin-top: 0;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .info-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #ff6a00;
      box-shadow: 0 0 10px rgba(255,255,255,0.05);
    }
    .info-card h3 {
      color: #ff6a00;
      margin-top: 0;
      font-size: 18px;
    }
    .info-card p {
      margin: 5px 0;
      color: #cccccc;
    }
    .info-label {
      font-weight: bold;
      color: #ff6a00;
    }
    .actions-section {
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 10px;
      margin-top: 30px;
      box-shadow: 0 0 15px rgba(255,255,255,0.1);
    }
    .actions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .action-card {
      background: rgba(255, 106, 0, 0.1);
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      transition: transform 0.3s, background 0.3s;
      border: 1px solid rgba(255, 106, 0, 0.3);
    }
    .action-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 106, 0, 0.2);
    }
    .action-card h4 {
      color: #ff6a00;
      margin-top: 0;
    }
    .stats-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .stat-card {
      background: rgba(255, 106, 0, 0.15);
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid rgba(255, 106, 0, 0.3);
    }
    .stat-number {
      font-size: 32px;
      font-weight: bold;
      color: #ff6a00;
      margin: 10px 0;
    }
    .stat-label {
      color: #cccccc;
      font-size: 14px;
    }
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        align-items: flex-start;
      }
      .header-right {
        width: 100%;
        margin-top: 15px;
        justify-content: space-between;
      }
      .user-info {
        text-align: left;
        margin-right: 0;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div class="header">
    <div class="header-left">
      <img src="images/logo-cyberg-suite.png" alt="CyberG Logo" class="logo">
      <h1>CyberG Suite</h1>
    </div>
    <div class="header-right">
      <div class="user-info">
        <div class="user-name"><?php echo htmlspecialchars($cliente['nombre']); ?></div>
        <div class="user-email"><?php echo htmlspecialchars($cliente['correo']); ?></div>
      </div>
      <a href="logout.php" class="btn btn-danger">Cerrar Sesión</a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <h2>👋 ¡Bienvenido, <?php echo htmlspecialchars($cliente['nombre']); ?>!</h2>
      <p>Gestiona tu información de ciberseguridad desde este panel de control.</p>
    </div>

    <!-- User Information Cards -->
    <div class="info-grid">
      <div class="info-card">
        <h3>📋 Información Personal</h3>
        <p><span class="info-label">Nombre:</span> <?php echo htmlspecialchars($cliente['nombre']); ?></p>
        <p><span class="info-label">Correo:</span> <?php echo htmlspecialchars($cliente['correo']); ?></p>
        <p><span class="info-label">Teléfono:</span> <?php echo htmlspecialchars($cliente['telefono']); ?></p>
      </div>

      <div class="info-card">
        <h3>🏢 Información Empresarial</h3>
        <p><span class="info-label">Tipo de Empresa:</span> <?php echo htmlspecialchars($cliente['tipo_empresa']); ?></p>
        <p><span class="info-label">ID Cliente:</span> #<?php echo htmlspecialchars($cliente['id_cliente']); ?></p>
        <p><span class="info-label">Fecha Registro:</span> <?php echo date('d/m/Y H:i', strtotime($cliente['fecha_registro'])); ?></p>
      </div>

      <div class="info-card">
        <h3>🔒 Seguridad</h3>
        <p><span class="info-label">Estado:</span> <span style="color: #00ff99;">✓ Activo</span></p>
        <p><span class="info-label">Sesión:</span> Iniciada</p>
        <p><span class="info-label">Último acceso:</span> <?php echo date('d/m/Y H:i'); ?></p>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="welcome-section">
      <h3>📊 Resumen</h3>
      <div class="stats-section">
        <div class="stat-card">
          <div class="stat-label">Estado de Cuenta</div>
          <div class="stat-number">✓</div>
          <div class="stat-label">Activa</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Días Registrado</div>
          <div class="stat-number">
            <?php 
            $fecha_registro = new DateTime($cliente['fecha_registro']);
            $hoy = new DateTime();
            $diferencia = $fecha_registro->diff($hoy);
            echo $diferencia->days;
            ?>
          </div>
          <div class="stat-label">días</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">ID de Cliente</div>
          <div class="stat-number">#<?php echo htmlspecialchars($cliente['id_cliente']); ?></div>
          <div class="stat-label">Identificador</div>
        </div>
      </div>
    </div>

    <!-- Actions Section -->
    <div class="actions-section">
      <h3>🚀 Acciones Rápidas</h3>
      <div class="actions-grid">
        <div class="action-card">
          <h4>📝 Ver Registros</h4>
          <p style="font-size: 12px; color: #cccccc;">Ver todos los clientes registrados</p>
          <a href="ver_registros.php" class="btn" style="margin-top: 10px;">Ver</a>
        </div>
        <div class="action-card">
          <h4>➕ Nuevo Registro</h4>
          <p style="font-size: 12px; color: #cccccc;">Registrar un nuevo cliente</p>
          <a href="registro.php" class="btn" style="margin-top: 10px;">Registrar</a>
        </div>
        <div class="action-card">
          <h4>🏠 Inicio</h4>
          <p style="font-size: 12px; color: #cccccc;">Volver a la página principal</p>
          <a href="index.html" class="btn btn-secondary" style="margin-top: 10px;">Ir</a>
        </div>
        <div class="action-card">
          <h4>🔐 Cambiar Contraseña</h4>
          <p style="font-size: 12px; color: #cccccc;">Actualizar tu contraseña</p>
          <a href="recuperar.php" class="btn btn-secondary" style="margin-top: 10px;">Cambiar</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

