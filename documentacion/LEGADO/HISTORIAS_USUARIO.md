# Historias de Usuario
## Proyecto: CyberG Suite

---

**Aprendiz:** Cristian Ferney Castaño Torres  
**Ficha:** 3070422  
**Instructor:** Eumir Pulido  
**Fecha:** 8 de marzo de 2026  
**Versión:** 1.0  

---

## Introducción

Este documento describe las historias de usuario del sistema CyberG Suite, cada una con sus criterios de aceptación en formato Gherkin (Given / When / Then), y su trazabilidad hacia los componentes y archivos del código fuente.

---

## HU-01 – Registro de empresa

**Como** representante de una empresa,  
**quiero** registrarme en CyberG Suite con los datos de mi organización,  
**para** poder acceder al sistema y gestionar mi información de ciberseguridad.

**Prioridad:** Alta | **Estado:** Implementado | **Requerimientos relacionados:** RF-01, RF-08

### Criterios de aceptación

```gherkin
Escenario 1: Registro exitoso con datos válidos
  Dado que estoy en la página /registro
  Y los campos nombre, tipo_empresa, correo, teléfono, contraseña y confirmación están completos y son válidos
  Cuando presiono el botón "Registrarse"
  Entonces el sistema crea la cuenta en la base de datos
  Y muestra el mensaje "Registro exitoso. Redirigiendo al login..."
  Y me redirige a /login después de 2 segundos

Escenario 2: Correo con formato inválido
  Dado que estoy en la página /registro
  Y ingreso un correo sin "@" o sin dominio (ej: "usuario.com")
  Cuando presiono "Registrarse"
  Entonces el sistema muestra el mensaje "El correo electrónico no es válido" bajo el campo correo
  Y no envía la petición al servidor

Escenario 3: Contraseña menor a 6 caracteres
  Dado que estoy en la página /registro
  Y ingreso una contraseña de menos de 6 caracteres
  Cuando escribo en el campo contraseña
  Entonces el indicador de fortaleza muestra "Débil"
  Y al intentar registrarse muestra "La contraseña debe tener al menos 6 caracteres"

Escenario 4: Las contraseñas no coinciden
  Dado que estoy en la página /registro
  Y los campos contraseña y confirmar contraseña tienen valores distintos
  Cuando presiono "Registrarse"
  Entonces el sistema muestra "Las contraseñas no coinciden" bajo el campo confirmación
  Y no envía la petición al servidor

Escenario 5: Teléfono con formato inválido
  Dado que estoy en la página /registro
  Y ingreso un teléfono con menos de 10 dígitos o con letras
  Cuando presiono "Registrarse"
  Entonces el sistema muestra "El teléfono debe tener entre 10 y 15 dígitos"

Escenario 6: Campo obligatorio vacío
  Dado que estoy en la página /registro
  Y dejo el campo nombre vacío
  Cuando presiono "Registrarse"
  Entonces el sistema muestra "El nombre es requerido" bajo el campo correspondiente
```

**Trazabilidad de código:**
- `react-frontend/src/components/auth/RegisterForm/RegisterForm.jsx` — lógica de validación (líneas 65–101) y envío (líneas 106–146)
- `react-frontend/src/utils/validation.js` — `validateEmail`, `validatePhone`, `validatePassword`, `validatePasswordMatch`
- `registro.php` — procesamiento server-side y guardado en BD con `password_hash()`

---

## HU-02 – Inicio de sesión

**Como** usuario registrado en CyberG Suite,  
**quiero** iniciar sesión con mi correo y contraseña,  
**para** acceder a mi dashboard y a las funcionalidades del sistema.

**Prioridad:** Alta | **Estado:** Implementado | **Requerimientos relacionados:** RF-02, RF-03, RF-09

### Criterios de aceptación

```gherkin
Escenario 1: Login exitoso con credenciales válidas
  Dado que estoy en la página /login
  Y tengo una cuenta registrada con correo "empresa@test.com" y contraseña válida
  Cuando ingreso las credenciales correctas y presiono "Iniciar Sesión"
  Entonces el sistema muestra "Inicio de sesión exitoso. Redirigiendo..."
  Y me redirige al dashboard en /dashboard después de 1 segundo
  Y mi información queda guardada en localStorage

Escenario 2: Credenciales incorrectas
  Dado que estoy en la página /login
  Y ingreso una contraseña incorrecta para un correo registrado
  Cuando presiono "Iniciar Sesión"
  Entonces el sistema muestra un mensaje de error "Verifica tus credenciales"
  Y permanezco en la página /login

Escenario 3: Correo con formato inválido
  Dado que estoy en la página /login
  Y ingreso un correo sin formato válido (sin "@" o sin dominio)
  Cuando presiono "Iniciar Sesión"
  Entonces el sistema muestra "El correo electrónico no es válido" sin llamar al servidor

Escenario 4: Campo contraseña vacío
  Dado que estoy en la página /login
  Y dejo el campo contraseña en blanco
  Cuando presiono "Iniciar Sesión"
  Entonces el sistema muestra "La contraseña es requerida"

Escenario 5: Acceso a ruta protegida sin sesión
  Dado que no tengo sesión iniciada
  Cuando intento acceder directamente a /dashboard o /clientes en la URL
  Entonces el sistema me redirige automáticamente a /login
```

**Trazabilidad de código:**
- `react-frontend/src/components/auth/LoginForm/LoginForm.jsx` — validación (líneas 57–76) y submit (líneas 82–124)
- `react-frontend/src/context/AuthContext.jsx` — función `login` (líneas 77–103)
- `react-frontend/src/components/navigation/ProtectedRoute/ProtectedRoute.jsx` — Escenario 5
- `login.php` — autenticación server-side con `password_verify()`

---

## HU-03 – Ver dashboard personalizado

**Como** usuario autenticado,  
**quiero** ver un panel de control con mi información y estadísticas,  
**para** conocer el estado de mi cuenta y acceder rápidamente a las funciones del sistema.

**Prioridad:** Alta | **Estado:** Implementado | **Requerimientos relacionados:** RF-04, RF-10

### Criterios de aceptación

```gherkin
Escenario 1: Dashboard carga con información del usuario
  Dado que tengo sesión activa
  Cuando accedo a /dashboard
  Entonces el sistema muestra mi nombre en el mensaje de bienvenida "¡Bienvenido, [nombre]!"
  Y muestra el tipo de empresa y el ID de cliente
  Y muestra la fecha de registro en formato dd/mm/aaaa

Escenario 2: Estadísticas del dashboard
  Dado que tengo sesión activa y una fecha de registro registrada
  Cuando accedo a /dashboard
  Entonces el sistema calcula y muestra los días transcurridos desde mi registro
  Y muestra el estado de cuenta como "✓ Activo"
  Y muestra mi ID de cliente con el prefijo "#"

Escenario 3: Estado de carga
  Dado que acabo de iniciar sesión
  Cuando el dashboard está cargando los datos
  Entonces el sistema muestra el componente LoadingSpinner con el mensaje "Cargando dashboard..."
  Y después de 1 segundo muestra el contenido completo

Escenario 4: Acceso directo sin sesión
  Dado que no tengo sesión activa
  Cuando intento acceder a /dashboard
  Entonces el sistema me redirige a /login
```

**Trazabilidad de código:**
- `react-frontend/src/pages/Dashboard.jsx` — lógica completa del dashboard
- `react-frontend/src/components/dashboard/UserInfoCard/UserInfoCard.jsx` — Escenario 1
- `react-frontend/src/components/dashboard/StatsCard/StatsCard.jsx` — Escenario 2
- `dashboard.php` — verificación de sesión server-side

---

## HU-04 – Ver listado de clientes

**Como** usuario autenticado,  
**quiero** ver el listado de empresas registradas en el sistema,  
**para** consultar la información de los clientes registrados.

**Prioridad:** Media | **Estado:** Implementado | **Requerimientos relacionados:** RF-06

### Criterios de aceptación

```gherkin
Escenario 1: Listado con clientes registrados
  Dado que tengo sesión activa
  Y existen clientes registrados en la base de datos
  Cuando accedo a /clientes
  Entonces el sistema consulta ver_registros.php
  Y muestra la lista de clientes con su información básica

Escenario 2: Sin clientes registrados
  Dado que tengo sesión activa
  Y no existen clientes en la base de datos
  Cuando accedo a /clientes
  Entonces el sistema muestra el componente EmptyState con un mensaje informativo

Escenario 3: Error de conexión
  Dado que tengo sesión activa
  Y el servidor no responde
  Cuando accedo a /clientes
  Entonces el sistema muestra un Alert de tipo "error" con el mensaje de fallo

Escenario 4: Acceso sin sesión
  Dado que no tengo sesión activa
  Cuando intento acceder a /clientes
  Entonces el sistema me redirige a /login
```

**Trazabilidad de código:**
- `react-frontend/src/pages/Clientes.jsx` — lógica de carga y renderizado
- `react-frontend/src/components/data/EmptyState/EmptyState.jsx` — Escenario 2
- `react-frontend/src/components/ui/Alert/Alert.jsx` — Escenario 3
- `ver_registros.php` — endpoint backend

---

## HU-05 – Cerrar sesión

**Como** usuario autenticado,  
**quiero** cerrar mi sesión de forma segura,  
**para** proteger mi cuenta cuando deje de usar el sistema.

**Prioridad:** Alta | **Estado:** Implementado | **Requerimientos relacionados:** RF-05

### Criterios de aceptación

```gherkin
Escenario 1: Cierre de sesión exitoso
  Dado que tengo sesión activa y estoy en cualquier página del sistema
  Cuando presiono el botón "Cerrar sesión" en la barra de navegación
  Entonces el sistema llama a logout.php para destruir la sesión PHP
  Y elimina los datos del usuario de localStorage
  Y me redirige a /login

Escenario 2: Estado después del logout
  Dado que acabo de cerrar sesión
  Cuando intento volver a /dashboard usando el botón "Atrás" del navegador
  Entonces el sistema me redirige a /login porque ya no hay sesión activa
```

**Trazabilidad de código:**
- `react-frontend/src/components/navigation/Navbar/Navbar.jsx` — botón de logout
- `react-frontend/src/context/AuthContext.jsx` — función `logout` (líneas 109–120)
- `logout.php` — destrucción de sesión PHP

---

## HU-06 – Recuperación de contraseña

**Como** usuario registrado que olvidó su contraseña,  
**quiero** solicitar la recuperación de mi contraseña,  
**para** recuperar el acceso a mi cuenta.

**Prioridad:** Media | **Estado:** Implementado | **Requerimientos relacionados:** RF-07

### Criterios de aceptación

```gherkin
Escenario 1: Solicitud con correo registrado
  Dado que estoy en la página de recuperación
  Y ingreso un correo que existe en la base de datos
  Cuando presiono "Recuperar contraseña"
  Entonces el sistema llama a recuperar.php con el correo ingresado
  Y muestra un mensaje de confirmación al usuario

Escenario 2: Solicitud con correo no registrado
  Dado que estoy en la página de recuperación
  Y ingreso un correo que no existe en la base de datos
  Cuando presiono "Recuperar contraseña"
  Entonces el sistema muestra un mensaje indicando que el correo no fue encontrado

Escenario 3: Formato de correo inválido
  Dado que estoy en la página de recuperación
  Y ingreso un correo con formato inválido
  Cuando presiono "Recuperar contraseña"
  Entonces el sistema muestra el error de validación antes de llamar al servidor
```

**Trazabilidad de código:**
- `react-frontend/src/services/api.js` — función `requestPasswordRecovery` (líneas 99–109)
- `recuperar.php` — procesamiento server-side
- `react-frontend/src/utils/validation.js` — `validateEmail`

---

## Tabla de Trazabilidad Resumen

| Historia | Componente React | Servicio | Backend PHP | Validaciones |
|---|---|---|---|---|
| HU-01 Registro | `RegisterForm.jsx` | `authService.register()` | `registro.php` | `validateEmail`, `validatePhone`, `validatePassword`, `validatePasswordMatch` |
| HU-02 Login | `LoginForm.jsx` | `authService.login()` | `login.php` | `validateEmail`, min 6 chars |
| HU-03 Dashboard | `Dashboard.jsx` | `AuthContext` | `dashboard.php` | `ProtectedRoute` |
| HU-04 Clientes | `Clientes.jsx` | `clientService.getAll()` | `ver_registros.php` | `ProtectedRoute` |
| HU-05 Logout | `Navbar.jsx` | `authService.logout()` | `logout.php` | — |
| HU-06 Recuperación | `recuperar.php` form | `authService.requestPasswordRecovery()` | `recuperar.php` | `validateEmail` |

---

*Documento de historias de usuario – CyberG Suite v1.0 – Ficha 3070422*
