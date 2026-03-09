# Documento de Requerimientos
## Proyecto: CyberG Suite

---

**Aprendiz:** Cristian Ferney Castaño Torres  
**Ficha:** 3070422  
**Instructor:** Eumir Pulido  
**Fecha:** 8 de marzo de 2026  
**Versión del documento:** 1.1  

---

## Historial de Versiones

| Versión | Fecha | Descripción del cambio |
|---|---|---|
| 1.0 | Nov 2025 | Versión inicial con requerimientos funcionales base |
| 1.1 | Mar 2026 | Adición de requerimientos no funcionales y actualización de estado |

---

## 1. Introducción

CyberG Suite es una plataforma web que permite a empresas registrarse y evaluar su estado de ciberseguridad. Este documento lista los requerimientos funcionales y no funcionales identificados para el desarrollo del sistema, su prioridad y estado de implementación.

---

## 2. Requerimientos Funcionales

| ID | Descripción | Prioridad | Versión | Estado |
|---|---|---|---|---|
| RF-01 | El sistema debe permitir a una empresa registrarse con nombre, tipo de empresa, correo, teléfono y contraseña. | Alta | 1.0 | Implementado |
| RF-02 | El sistema debe autenticar al usuario mediante correo y contraseña. | Alta | 1.0 | Implementado |
| RF-03 | Las contraseñas deben almacenarse con hash seguro (`password_hash`). | Alta | 1.0 | Implementado |
| RF-04 | El sistema debe mostrar un dashboard personalizado con información del usuario autenticado. | Alta | 1.0 | Implementado |
| RF-05 | El sistema debe permitir cerrar sesión de forma segura. | Alta | 1.0 | Implementado |
| RF-06 | El sistema debe permitir visualizar el listado de clientes/empresas registradas. | Media | 1.0 | Implementado |
| RF-07 | El sistema debe ofrecer recuperación de contraseña por correo electrónico. | Media | 1.0 | Implementado |
| RF-08 | El sistema debe validar el formato del correo y la longitud mínima de la contraseña en el cliente. | Alta | 1.0 | Implementado |
| RF-09 | El sistema debe redirigir al login si el usuario intenta acceder a rutas protegidas sin autenticarse. | Alta | 1.0 | Implementado |
| RF-10 | El dashboard debe mostrar estadísticas básicas: días registrado, tipo de empresa, estado de cuenta. | Baja | 1.1 | Implementado |

---

## 3. Requerimientos No Funcionales

| ID | Descripción | Categoría | Prioridad | Versión | Estado |
|---|---|---|---|---|---|
| RNF-01 | El sistema debe responder a las peticiones del usuario en menos de 2 segundos en condiciones normales. | Rendimiento | Alta | 1.0 | Verificado |
| RNF-02 | Las consultas SQL deben usar prepared statements para prevenir inyección SQL. | Seguridad | Alta | 1.0 | Implementado |
| RNF-03 | El sistema debe funcionar correctamente en Chrome, Firefox y Safari (versiones actuales). | Compatibilidad | Media | 1.0 | Verificado |
| RNF-04 | La interfaz debe ser responsiva y adaptarse a dispositivos móviles y escritorio. | Usabilidad | Media | 1.0 | Implementado |
| RNF-05 | El código debe seguir los estándares PSR-1 y PSR-12 para PHP, y convenciones React para el frontend. | Mantenibilidad | Alta | 1.0 | Implementado |
| RNF-06 | El proyecto debe estar bajo control de versiones Git con historial de commits descriptivos. | Trazabilidad | Alta | 1.0 | Implementado |
| RNF-07 | El sistema debe manejar errores de conexión a la base de datos de forma controlada, sin exponer detalles internos al usuario final. | Seguridad | Alta | 1.1 | Parcial |
| RNF-08 | La base de datos debe crearse automáticamente si no existe al iniciar la aplicación por primera vez. | Disponibilidad | Media | 1.0 | Implementado |

---

## 4. Requerimientos de Interfaz

| ID | Descripción | Prioridad | Versión | Estado |
|---|---|---|---|---|
| RI-01 | El frontend React debe comunicarse con el backend PHP mediante Axios y FormData. | Alta | 1.0 | Implementado |
| RI-02 | El sistema debe mantener la sesión del usuario usando `localStorage` en el cliente y sesiones PHP en el servidor. | Alta | 1.0 | Implementado |
| RI-03 | La API del backend debe retornar respuestas en formato JSON. | Alta | 1.0 | Implementado |

---

## 5. Módulos Cubiertos en Esta Evidencia (GA08)

| Módulo | Requerimientos relacionados | Archivos principales |
|---|---|---|
| Autenticación | RF-02, RF-03, RF-05, RF-09, RNF-02 | `login.php`, `logout.php`, `AuthContext.jsx`, `LoginForm.jsx` |
| Registro | RF-01, RF-08 | `registro.php`, `RegisterForm.jsx`, `validation.js` |
| Dashboard | RF-04, RF-10 | `dashboard.php`, `Dashboard.jsx`, `UserInfoCard.jsx`, `StatsCard.jsx` |
| Clientes | RF-06 | `ver_registros.php`, `Clientes.jsx` |
| Recuperación | RF-07 | `recuperar.php` |
| Base de datos | RNF-08 | `db.php`, `database_setup.sql` |

---

*Documento de requerimientos – CyberG Suite v1.1 – Ficha 3070422*
