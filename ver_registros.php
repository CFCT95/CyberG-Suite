<?php
// Habilitar visualización de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Iniciar sesión (opcional - permite ver registros sin login)
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require 'db.php';

// Verificar si hay usuario logueado (opcional)
$usuario_logueado = isset($_SESSION['cliente_id']);

// Consultar todos los registros de la tabla CLIENTE
$sql = "SELECT id_cliente, nombre, tipo_empresa, correo, telefono, fecha_registro FROM CLIENTE ORDER BY fecha_registro DESC";
$result = $conn->query($sql);

$total_registros = 0;
$registros = [];

if ($result && $result->num_rows > 0) {
    $total_registros = $result->num_rows;
    while ($row = $result->fetch_assoc()) {
        $registros[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ver Registros - CyberG Suite</title>
  <link rel="stylesheet" href="styles/styles.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #0b0f1a;
      color: white;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(255,255,255,0.1);
    }
    h1 {
      color: #ff6a00;
      margin-bottom: 20px;
    }
    .stats {
      background: rgba(255, 106, 0, 0.2);
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 18px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: rgba(255, 255, 255, 0.05);
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    th {
      background: rgba(255, 106, 0, 0.3);
      color: #ff6a00;
      font-weight: bold;
    }
    tr:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    .no-data {
      text-align: center;
      padding: 40px;
      color: #999;
    }
    .btn {
      display: inline-block;
      margin: 10px 10px 10px 0;
      padding: 10px 20px;
      background: #ff6a00;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s;
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
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Registros de Clientes</h1>
    
    <div class="stats">
      <strong>Total de registros:</strong> <?php echo $total_registros; ?>
    </div>

    <div>
      <a href="index.html" class="btn">🏠 Inicio</a>
      <a href="registro.php" class="btn">➕ Nuevo Registro</a>
      <?php if ($usuario_logueado): ?>
        <a href="dashboard.php" class="btn btn-secondary">📊 Dashboard</a>
        <a href="logout.php" class="btn btn-danger">🚪 Cerrar Sesión</a>
      <?php else: ?>
        <a href="login.php" class="btn btn-secondary">🔐 Login</a>
      <?php endif; ?>
      <a href="ver_registros.php" class="btn btn-secondary">🔄 Actualizar</a>
    </div>

    <?php if ($total_registros > 0): ?>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo de Empresa</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($registros as $registro): ?>
            <tr>
              <td><?php echo htmlspecialchars($registro['id_cliente']); ?></td>
              <td><?php echo htmlspecialchars($registro['nombre']); ?></td>
              <td><?php echo htmlspecialchars($registro['tipo_empresa']); ?></td>
              <td><?php echo htmlspecialchars($registro['correo']); ?></td>
              <td><?php echo htmlspecialchars($registro['telefono']); ?></td>
              <td><?php echo htmlspecialchars($registro['fecha_registro']); ?></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    <?php else: ?>
      <div class="no-data">
        <p>📭 No hay registros en la base de datos.</p>
        <p><a href="registro.php" class="btn">Crear primer registro</a></p>
      </div>
    <?php endif; ?>

    <div style="margin-top: 30px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 5px;">
      <h3>ℹ️ Información de Conexión</h3>
      <p><strong>Base de datos:</strong> improve</p>
      <p><strong>Tabla:</strong> CLIENTE</p>
      <p><strong>Servidor:</strong> 127.0.0.1:3307</p>
    </div>
  </div>
</body>
</html>

