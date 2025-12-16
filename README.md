# CyberG Suite

Sistema web para evaluar el estado de ciberseguridad de empresas. Aplicación desarrollada en PHP con MySQL.

## 📋 Descripción

CyberG Suite es una plataforma que permite a las empresas registrarse y evaluar su estado de ciberseguridad. El sistema incluye autenticación de usuarios, gestión de sesiones, y un dashboard personalizado.

## 🚀 Características

- ✅ Registro de usuarios (empresas)
- ✅ Sistema de autenticación con contraseñas hasheadas
- ✅ Dashboard personalizado para usuarios autenticados
- ✅ Recuperación de contraseña
- ✅ Visualización de registros
- ✅ Gestión de sesiones segura
- ✅ Base de datos MySQL con auto-configuración

## 📦 Requisitos

- XAMPP (o servidor web con PHP y MySQL)
- PHP 7.4 o superior
- MySQL 5.7 o superior
- Navegador web moderno

## 🔧 Instalación

1. **Clonar o descargar el repositorio**
   ```bash
   git clone https://github.com/CFCT95/CyberG-Suite.git
   ```

2. **Colocar el proyecto en el directorio de XAMPP**
   - Copiar la carpeta `CyberG-Suite` a `xampp/htdocs/`

3. **Configurar la base de datos**
   
   **Opción A: Automática (recomendada)**
   - El sistema creará automáticamente la base de datos y tablas al acceder por primera vez
   - Asegúrate de que MySQL esté corriendo en XAMPP
   
   **Opción B: Manual**
   - Abrir phpMyAdmin (http://localhost/phpmyadmin)
   - Ejecutar el script `database_setup.sql` que se encuentra en la raíz del proyecto

4. **Configurar la conexión a la base de datos**
   - Editar el archivo `db.php` si es necesario
   - Por defecto está configurado para XAMPP:
     - Servidor: 127.0.0.1
     - Puerto: 3306
     - Usuario: root
     - Contraseña: (vacía)
     - Base de datos: improve

5. **Iniciar los servicios en XAMPP**
   - Iniciar Apache
   - Iniciar MySQL

6. **Acceder a la aplicación**
   - Abrir el navegador y visitar: `http://localhost/CyberG-Suite/`

## 📁 Estructura del Proyecto

```
CyberG-Suite/
├── index.html              # Página principal
├── login.php               # Sistema de inicio de sesión
├── registro.php            # Sistema de registro
├── dashboard.php           # Panel de control del usuario
├── logout.php              # Cerrar sesión
├── recuperar.php           # Recuperación de contraseña
├── ver_registros.php       # Visualización de registros
├── db.php                  # Configuración de base de datos
├── database_setup.sql      # Script SQL para crear la BD
├── .htaccess              # Configuración de Apache
├── styles/
│   └── styles.css         # Estilos CSS
└── images/
    └── logo-cyberg-suite.png
```

## 🔐 Seguridad

- Las contraseñas se almacenan usando `password_hash()` de PHP
- Las consultas SQL utilizan prepared statements para prevenir SQL injection
- Las sesiones se gestionan de forma segura
- Validación de datos en el servidor

## 🗄️ Base de Datos

### Tabla: CLIENTE

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id_cliente | INT | ID único (auto-increment) |
| nombre | VARCHAR(100) | Nombre de la empresa |
| tipo_empresa | VARCHAR(50) | Tipo de empresa |
| correo | VARCHAR(100) | Email (único) |
| telefono | VARCHAR(15) | Teléfono |
| contrasena | VARCHAR(255) | Contraseña hasheada |
| fecha_registro | DATETIME | Fecha de registro |

## 👤 Uso

1. **Registro**: Acceder a "Registrarse" y completar el formulario
2. **Inicio de sesión**: Usar el correo y contraseña registrados
3. **Dashboard**: Ver información personalizada después del login
4. **Ver registros**: Opción para ver todos los registros (requiere autenticación)

## 🛠️ Tecnologías Utilizadas

- PHP 7.4+
- MySQL
- HTML5
- CSS3
- JavaScript (básico)

## 📝 Notas

- El proyecto está configurado para desarrollo local con XAMPP
- Los errores están habilitados para facilitar el desarrollo
- Para producción, deshabilitar la visualización de errores en `db.php`

## 👨‍💻 Autor

Desarrollado como proyecto académico.

## 📄 Licencia

Este proyecto es de uso educativo.

---

**Repositorio**: https://github.com/CFCT95/CyberG-Suite.git

