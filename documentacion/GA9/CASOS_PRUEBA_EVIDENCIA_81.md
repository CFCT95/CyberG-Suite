# CASOS DE PRUEBA – CyberG Suite
## GA9-220501096-AA2-EV01 — Diseño de Casos y Ambiente de Pruebas

> **Documentos relacionados:**
> - [Lista de Chequeo – Evidencia 81](EVIDENCIA_81_CHECKLIST.md)
> - [Script de pruebas Puppeteer](../../react-frontend/test_ui.js)
> - [Captura de UI validada](../../react-frontend/captura_inicio.png)
> - [Base de datos](../../database_setup.sql)
> - [Repositorio completo](https://github.com/CFCT95/CyberG-Suite)

---

## 1. Datos del Proyecto y Ambiente

| Campo | Detalle |
|---|---|
| **Nombre del proyecto** | CyberG Suite |
| **Aprendiz** | Cristian Ferney Castaño Torres |
| **Ficha** | 3070422 |
| **Programa** | Análisis y Desarrollo de Software (ADSO) |
| **Repositorio** | https://github.com/CFCT95/CyberG-Suite |
| **Herramienta de pruebas** | Node.js + Puppeteer (Headless Browser) / Revisión manual en navegador |
| **Entorno de prueba** | Web – Aplicación PHP sobre servidor Apache (XAMPP) |
| **Fecha de revisión** | 5 de Abril de 2026 |
| **Autor** | Cristian Ferney Castaño Torres |

---

## 2. Definición del Ambiente de Pruebas

| Parámetro | Valor |
|---|---|
| **Tipo de entorno** | Web (localhost) |
| **Sistema operativo** | macOS Sequoia 15.x |
| **Servidor web** | Apache 2.4 – XAMPP 8.2.4 |
| **Lenguaje backend** | PHP 8.2 |
| **Base de datos** | MySQL 8.0 (XAMPP) |
| **Navegador probado** | Microsoft Edge v123 / Google Chrome v123 |
| **URL de prueba** | http://localhost:8080/CyberG-Suite/ |
| **Runtime adicional** | Node.js v18 (para scripts Puppeteer) |
| **Servicios externos** | Ninguno (entorno completamente local) |

---

## 3. Formato de Casos de Prueba

### CP-001 – Registro de usuario nuevo (flujo exitoso)

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Registro exitoso de usuario nuevo |
| **Número de caso** | 001 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba funcional que valida que un usuario puede registrarse correctamente en la plataforma completando todos los campos requeridos del formulario de registro. |
| **Tipo de prueba** | Funcional – End-to-End |
| **Ambiente / Entorno** | Web – Apache/XAMPP – macOS – Edge v123 |
| **Herramienta** | Revisión manual en navegador |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | Apache y MySQL corriendo en XAMPP. Base de datos inicializada con [database_setup.sql](../../database_setup.sql). El correo a registrar no existe previamente en la DB. |
| **Pasos de ejecución** | 1. Abrir `http://localhost:8080/CyberG-Suite/` · 2. Clic en **Registrarse** · 3. Completar: Nombre, Correo, Contraseña y confirmar contraseña · 4. Clic en "Registrarse" |
| **Salida esperada** | El sistema crea el usuario en la DB y redirige al login con un mensaje de confirmación. |
| **Salida obtenida** | El usuario fue registrado correctamente y se redirigió al login. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Formulario: [evidencias/cp001_registro.png](evidencias/cp001_registro.png) · Registro en DB: [evidencias/cp001_db_registro.png](evidencias/cp001_db_registro.png) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

### CP-002 – Inicio de sesión con credenciales correctas

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Inicio de sesión exitoso |
| **Número de caso** | 002 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba funcional que verifica que un usuario registrado puede ingresar a la plataforma usando su correo y contraseña válidos. |
| **Tipo de prueba** | Funcional – End-to-End |
| **Ambiente / Entorno** | Web – Apache/XAMPP – macOS – Edge v123 |
| **Herramienta** | Revisión manual en navegador |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | El usuario debe existir previamente en la base de datos (ejecutar CP-001 primero). Apache y MySQL corriendo. |
| **Pasos de ejecución** | 1. Abrir `http://localhost:8080/CyberG-Suite/login.php` · 2. Ingresar correo y contraseña válidos · 3. Clic en "Iniciar sesión" |
| **Salida esperada** | El sistema autentica al usuario y lo redirige al dashboard principal. |
| **Salida obtenida** | Acceso concedido. Se redirigió correctamente al dashboard. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Login exitoso: [evidencias/cp002_login_exitoso.png](evidencias/cp002_login_exitoso.png) · Dashboard: [evidencias/cp002_dashboard.png](evidencias/cp002_dashboard.png) · Módulo: [../../login.php](../../login.php) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

### CP-003 – Inicio de sesión con contraseña incorrecta

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Login fallido por contraseña incorrecta |
| **Número de caso** | 003 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba de escenario alterno que verifica que el sistema rechaza el acceso cuando la contraseña ingresada no coincide con la registrada en la base de datos, mostrando un mensaje de error claro. |
| **Tipo de prueba** | Funcional – Escenario negativo |
| **Ambiente / Entorno** | Web – Apache/XAMPP – macOS – Edge v123 |
| **Herramienta** | Revisión manual en navegador |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | Usuario existente en base de datos (ver CP-001). Apache y MySQL corriendo. |
| **Pasos de ejecución** | 1. Abrir [../../login.php](../../login.php) · 2. Ingresar correo válido + contraseña incorrecta · 3. Clic en "Iniciar sesión" |
| **Salida esperada** | El sistema NO concede acceso y muestra un mensaje de error indicando credenciales incorrectas. |
| **Salida obtenida** | Se mostró el mensaje de error. El sistema no permitió el acceso. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Mensaje de error en login: [evidencias/cp003_login_fallido.png](evidencias/cp003_login_fallido.png) · Módulo: [../../login.php](../../login.php) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

### CP-004 – Registro con campos vacíos (validación de formulario)

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Validación de campos obligatorios en registro |
| **Número de caso** | 004 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba que verifica que el formulario de registro no permite enviarse si hay campos requeridos vacíos, garantizando la integridad de los datos que llegan al backend. |
| **Tipo de prueba** | Funcional – Validación de entradas |
| **Ambiente / Entorno** | Web – Apache/XAMPP – macOS – Edge v123 |
| **Herramienta** | Revisión manual en navegador |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | Apache corriendo. Navegador abierto en [../../registro.php](../../registro.php). |
| **Pasos de ejecución** | 1. Abrir [../../registro.php](../../registro.php) · 2. Dejar todos los campos en blanco · 3. Clic en "Registrarse" |
| **Salida esperada** | El navegador o el servidor bloquea el envío y muestra indicadores de campo requerido en los inputs vacíos. |
| **Salida obtenida** | El formulario bloqueó el envío y marcó los campos obligatorios vacíos. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Campos obligatorios sin datos: [evidencias/cp004_campos_vacios.png](evidencias/cp004_campos_vacios.png) · Validaciones de formulario: [evidencias/cp004_validaciones.png](evidencias/cp004_validaciones.png) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

### CP-005 – Acceso al dashboard sin sesión activa

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Bloqueo de acceso al dashboard sin autenticación |
| **Número de caso** | 005 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba de seguridad que verifica que un usuario no autenticado no puede acceder directamente al dashboard o a páginas protegidas escribiendo la URL manualmente en el navegador. |
| **Tipo de prueba** | Seguridad – Control de acceso |
| **Ambiente / Entorno** | Web – Apache/XAMPP – macOS – Edge v123 |
| **Herramienta** | Revisión manual en navegador |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | No tener sesión activa (usar ventana de incógnito o ejecutar [../../logout.php](../../logout.php) primero). |
| **Pasos de ejecución** | 1. Abrir ventana de incógnito · 2. Ingresar directamente a `http://localhost:8080/CyberG-Suite/dashboard.php` · 3. Observar el comportamiento |
| **Salida esperada** | El sistema detecta que no hay sesión y redirige automáticamente a [../../login.php](../../login.php). |
| **Salida obtenida** | Se redirigió correctamente al login. El dashboard no fue accesible sin autenticación. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Redirección al login sin sesión: [evidencias/cp005_sin_sesion.png](evidencias/cp005_sin_sesion.png) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

### CP-006 – Recuperación de contraseña

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Flujo de recuperación de contraseña |
| **Número de caso** | 006 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba funcional que verifica que el módulo de recuperación de contraseña acepta un correo registrado y responde con el mensaje correspondiente sin generar errores en el servidor. |
| **Tipo de prueba** | Funcional |
| **Ambiente / Entorno** | Web – Apache/XAMPP – macOS – Edge v123 |
| **Herramienta** | Revisión manual en navegador |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | Usuario registrado en la DB (ver CP-001). Apache y MySQL corriendo. |
| **Pasos de ejecución** | 1. Abrir [../../recuperar.php](../../recuperar.php) · 2. Ingresar el correo del usuario registrado · 3. Clic en enviar |
| **Salida esperada** | El sistema procesa la solicitud sin errores PHP y muestra un mensaje de confirmación. |
| **Salida obtenida** | El sistema respondió correctamente sin errores de servidor. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Pantalla de recuperación: [evidencias/cp006_recuperar.png](evidencias/cp006_recuperar.png) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

### CP-007 – Validación de UI: título y encabezado del index (Puppeteer)

| Campo | Detalle |
|---|---|
| **Nombre del caso** | Validación automatizada de estructura DOM en index.html |
| **Número de caso** | 007 |
| **Fecha de revisión** | 05/04/2026 |
| **Descripción** | Prueba automatizada End-to-End con Puppeteer que verifica que la vista principal del sistema expone correctamente el título de la pestaña y el encabezado H1 esperados, asegurando que el HTML cargue de forma íntegra. |
| **Tipo de prueba** | Automatizada – End-to-End – Validación de UI |
| **Ambiente / Entorno** | Web – Headless Chromium – Node.js v18 – macOS |
| **Herramienta** | Node.js + Puppeteer v22 |
| **Autor** | Cristian Ferney Castaño Torres |
| **Precondiciones** | Node.js v18 instalado. Script disponible en [../../react-frontend/test_ui.js](../../react-frontend/test_ui.js). |
| **Pasos de ejecución** | 1. Abrir terminal en `react-frontend/` · 2. Ejecutar `node test_ui.js` · 3. Revisar output en consola |
| **Salida esperada** | `✅ [Éxito] Todas las validaciones de UI pasaron correctamente.` y captura `captura_inicio.png` generada. |
| **Salida obtenida** | Script ejecutó correctamente. Título: "CyberG Suite". H1: "Bienvenido a CyberG Suite". Captura generada. |
| **Resultado** | ✅ Aprobado |
| **Seguimiento** | N/A |
| **Severidad** | N/A |
| **Evidencia** | Captura UI validada: [../../react-frontend/captura_inicio.png](../../react-frontend/captura_inicio.png) · Script: [../../react-frontend/test_ui.js](../../react-frontend/test_ui.js) |
| **Firma de aprobación** | Cristian F. Castaño Torres – Aprendiz SENA Ficha 3070422 |

---

## 4. Resumen de Resultados

| # Caso | Nombre | Tipo | Resultado |
|---|---|---|---|
| CP-001 | Registro de usuario nuevo | Funcional E2E | ✅ Aprobado |
| CP-002 | Login exitoso | Funcional E2E | ✅ Aprobado |
| CP-003 | Login con contraseña incorrecta | Escenario negativo | ✅ Aprobado |
| CP-004 | Registro con campos vacíos | Validación de entradas | ✅ Aprobado |
| CP-005 | Acceso al dashboard sin sesión | Seguridad – Control acceso | ✅ Aprobado |
| CP-006 | Recuperación de contraseña | Funcional | ✅ Aprobado |
| CP-007 | Validación UI automatizada (Puppeteer) | Automatizado E2E | ✅ Aprobado |

**Total casos:** 7 | **Aprobados:** 7 | **En seguimiento:** 0 | **Rechazados:** 0

---

*Documento generado: 5 de Abril de 2026*
*Evidencia: GA9-220501096-AA2-EV01 – Casos y Ambiente de Pruebas*
*Proyecto: CyberG Suite – Ficha 3070422*
