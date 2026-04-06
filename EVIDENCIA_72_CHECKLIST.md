# Lista de Chequeo – Evidencia 72
## GA8-220501096-AA1-EV01 – Integración y Codificación de Módulos
### Desarrollar software a partir de la integración de sus módulos y componentes

---

## Datos del Proyecto

| Campo | Valor |
|---|---|
| **Nombre del proyecto** | CyberG Suite |
| **Aprendiz** | Cristian Ferney Castaño Torres – C.C. 1037644717 |
| **Ficha** | 3070422 |
| **Instructor** | Eumir Pulido |
| **Repositorio (URL)** | https://github.com/CFCT95/CyberG-Suite.git |
| **Demo (URL)** | http://localhost/CyberG-Suite/ (entorno local XAMPP) |
| **Stack** | React JS + Vite (frontend) / PHP 7.4+ (backend) / MySQL (BD) |

---

## Inventario de Tecnologías y Formatos

| Capa | Tecnología / Herramienta |
|---|---|
| **Front-end** | React JS 18.2, React Router DOM 6.20, Axios 1.6, Vite 5.0 |
| **Back-end** | PHP 7.4+ (nativo, sin framework) |
| **Base de datos** | MySQL 5.7+ (administrada con phpMyAdmin) |
| **Servidor/Hosting** | XAMPP (Apache + MySQL local) |
| **Formatos de archivo** | `.jsx`, `.js`, `.css`, `.php`, `.sql`, `.md`, `.html`, `.json` |

---

## Lista de Chequeo

### 1. Requerimientos y Alcance

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Requerimientos del sistema identificados y versionados | **Cumple** | Documento con 21 requerimientos (RF, RNF, RI) en tabla ID/Descripción/Prioridad/Versión/Estado. Historial 1.0 → 1.1. URL: [REQUERIMIENTOS.md – Sección 2 (RF-01 a RF-10)](https://github.com/CFCT95/CyberG-Suite/blob/main/REQUERIMIENTOS.md#L29-L43) |
| Criterios de aceptación definidos (por historia/caso de uso) | **Cumple** | 6 historias de usuario (HU-01 a HU-06) en formato Gherkin (Given/When/Then) con escenarios, prioridad y trazabilidad. URL: [HISTORIAS_USUARIO.md](https://github.com/CFCT95/CyberG-Suite/blob/main/HISTORIAS_USUARIO.md) |
| Alcance del módulo a codificar está claro | **Cumple** | Módulo cubre: registro, autenticación, dashboard, clientes. URL: [COMPONENTES_IMPLEMENTADOS.md](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/COMPONENTES_IMPLEMENTADOS.md) |

---

### 2. Casos de Uso / Historias de Usuario

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Documento de casos de uso o historias de usuario actualizado | **Cumple** | 6 HU completas con escenarios Gherkin y trazabilidad hacia archivos del código fuente. URL: [HISTORIAS_USUARIO.md](https://github.com/CFCT95/CyberG-Suite/blob/main/HISTORIAS_USUARIO.md) |
| Trazabilidad: historia/caso ↔ módulo ↔ clases/componentes | **Cumple** | Tabla de trazabilidad resumen (HU ↔ Componente React ↔ Servicio ↔ Backend PHP ↔ Validaciones) con archivos y líneas. URL: [HISTORIAS_USUARIO.md – Trazabilidad](https://github.com/CFCT95/CyberG-Suite/blob/main/HISTORIAS_USUARIO.md) |

---

### 3. Arquitectura y Diagramas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Diagrama de clases actualizado | **Cumple** | Diagrama Mermaid con entidad `CLIENTE` y clases PHP con atributos, métodos y relaciones. URL: [DIAGRAMAS.md – Sección 1](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#1-diagrama-de-clases) |
| Diagrama de paquetes actualizado | **Cumple** | Diagrama Mermaid con capas Backend PHP, Base de Datos, Frontend (context/services/utils/pages/components). URL: [DIAGRAMAS.md – Sección 2](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#2-diagrama-de-paquetes) |
| Diagrama de componentes actualizado | **Cumple** | Diagrama Mermaid flujo `main.jsx` → `App.jsx` → `AuthContext` → rutas → páginas → widgets → `api.js` → Backend PHP. URL: [DIAGRAMAS.md – Sección 3](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#3-diagrama-de-componentes) |
| Capas identificadas y ubicación de componentes | **Cumple** | Presentación (react-frontend/src/), Negocio (login.php, registro.php, dashboard.php), Datos (db.php), BD (MySQL). URL: [DIAGRAMAS.md – Sección 4](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#4-capas-de-arquitectura) |

---

### 4. Navegación y UI

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Mapa de navegación (pantallas/rutas) actualizado | **Cumple** | Rutas: `/login`, `/registro`, `/dashboard` (protegida), `/clientes` (protegida), `/` → redirect. `ProtectedRoute` controla acceso. URL: [App.jsx](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/App.jsx) |
| Rutas/endpoints asociados a historias o casos de uso | **Cumple** | `/login` → login.php, `/registro` → registro.php, `/dashboard` → dashboard.php, `/clientes` → ver_registros.php. URL: [api.js – servicios](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/services/api.js#L52-L152) |

---

### 5. Codificación e Integración

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Cada módulo codificado en el lenguaje/stack seleccionado | **Cumple** | 20+ componentes React JSX, 6 archivos PHP, database_setup.sql, módulo Java adicional. URL: [Raíz del repositorio](https://github.com/CFCT95/CyberG-Suite) |
| Componentes reutilizables identificados y separados | **Cumple** | Button, InputField, LoadingSpinner, Alert, Card, UserInfoCard, StatsCard, QuickActionsPanel, EmptyState – cada uno con .jsx/.css/index.js. URL: [components/ui/](https://github.com/CFCT95/CyberG-Suite/tree/main/react-frontend/src/components/ui) |
| Nomenclatura de paquetes/carpetas clara y consistente | **Cumple** | PascalCase componentes, camelCase utilidades, snake_case PHP, carpetas temáticas ui/auth/navigation/layout/dashboard/data. URL: [src/components/](https://github.com/CFCT95/CyberG-Suite/tree/main/react-frontend/src/components) |
| Patrones de diseño aplicados | **Cumple** | Context API (Provider/Observer), Repository pattern, Component pattern (composición), Guard/HOC (ProtectedRoute), useMemo/useCallback. URL: [AuthContext.jsx L146-162](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/context/AuthContext.jsx#L146-L162) |
| Buenas prácticas: legibilidad, SOLID, manejo de errores, validaciones | **Cumple** | PHPDoc/JSDoc, prepared statements, password_hash(), try/catch async, validaciones client y server side. URL: [validation.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/utils/validation.js) |
| Integración entre módulos verificada | **Cumple** | Axios con baseURL, withCredentials, interceptors 401, FormData para PHP, proxy Vite. URL: [api.js – config L8-47](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/services/api.js#L8-L47) |

---

### 6. Control de Versiones

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Repositorio (Git) con commits descriptivos | **Cumple** | Commits descriptivos en rama main. URL: [Historial de commits](https://github.com/CFCT95/CyberG-Suite/commits/main) |
| Rama/flujo de trabajo definido | **Cumple** | Ramas: main (producción), develop (desarrollo), feature/agregar-gitignore. Flujo GitFlow básico. URL: [Ramas del repositorio](https://github.com/CFCT95/CyberG-Suite/branches) |
| README con instrucciones de ejecución y dependencias | **Cumple** | README.md raíz + react-frontend/README.md + INSTALACION.md con comandos, puertos y variables. URL: [README.md](https://github.com/CFCT95/CyberG-Suite/blob/main/README.md) |

---

### 7. Librerías, Frameworks y Dependencias

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Listado de librerías por capa y propósito | **Cumple** | Frontend: React 18.2, React Router 6.20, Axios 1.6, Vite 5.0. Backend: PHP nativo + MySQLi. Java: MySQL Connector 8.0.33. URL: [package.json](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/package.json) |
| Framework(s) por capa | **Cumple** | Presentación: React + Vite. Negocio: PHP 7.4 nativo. Datos: MySQLi. Módulo adicional: Java puro. URL: [vite.config.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/vite.config.js) |
| Gestión de dependencias | **Cumple** | package.json con versiones fijas. JAR MySQL Connector incluido en lib/. node_modules excluido via .gitignore. URL: [package.json](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/package.json) |

---

### 8. Seguridad

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Mecanismos de seguridad implementados (auth, roles, permisos) | **Cumple** | Sesiones PHP + localStorage React, ProtectedRoute, interceptor 401, password_hash(). URL: [ProtectedRoute.jsx](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/components/navigation/ProtectedRoute/ProtectedRoute.jsx) |
| Buenas prácticas: variables de entorno, no credenciales en repo | **Cumple** | `db.php` actualizado: usa `getenv()` para `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME` con fallback a valores XAMPP locales. URL: [db.php](https://github.com/CFCT95/CyberG-Suite/blob/main/db.php#L8-L12) |
| Validación de entradas y controles básicos | **Cumple** | validateEmail, validatePassword, validatePhone, validateRequired, validatePasswordMatch client-side. Prepared statements + htmlspecialchars() server-side. URL: [validation.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/utils/validation.js) |

---

### 9. Pruebas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Pruebas unitarias por módulo | **No Cumple** | No existen archivos de prueba (`*.test.js`, `*.spec.php`). No hay directorio `/tests`. Las validaciones están implementadas pero sin cobertura de pruebas automatizadas. **Mejora para siguientes guías:** implementar Jest + React Testing Library para componentes React. Ejemplo: prueba para `validateEmail()` en `validation.test.js`. Mínimo 3 pruebas unitarias para los módulos principales. |
| Resultados de pruebas (capturas/logs) y cobertura | **No Cumple** | Sin pruebas no hay resultados. Sólo existe validación manual implícita por el flujo de la aplicación. **Mejora para siguientes guías:** ejecutar `npm test -- --coverage` tras implementar Jest y adjuntar captura del reporte de cobertura. |

---

### 10. Ambientes, Servidor y Base de Datos

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Configuración de servidor (local/dev/test) documentada | **Cumple** | XAMPP Apache + MySQL puerto 3306, Vite dev server puerto 3000 con proxy. URL: [vite.config.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/vite.config.js) |
| Modelo/Script de BD y configuración de conexión documentados | **Cumple** | DDL completo tabla CLIENTE, db.php auto-crea BD/tabla, conexión con getenv(). URL: [database_setup.sql](https://github.com/CFCT95/CyberG-Suite/blob/main/database_setup.sql) |
| Instrucciones para levantar el proyecto | **Cumple** | 5 pasos claros con comandos, puertos y configuración en README.md. URL: [README.md – Instalación](https://github.com/CFCT95/CyberG-Suite/blob/main/README.md) |

---

### 11. Evidencias y Entrega

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| URLs: repositorio, demo, API docs, tablero | **Cumple** | Repositorio público GitHub, demo local XAMPP, endpoints documentados. URL: [github.com/CFCT95/CyberG-Suite](https://github.com/CFCT95/CyberG-Suite) |
| Archivos compilados/build (si aplica) | **Cumple** | npm run build ejecutado. dist/ generado con index.html (0.49 kB), assets/index.css (14.1 kB), assets/index.js (222 kB). URL: [react-frontend/dist/](https://github.com/CFCT95/CyberG-Suite/tree/main/react-frontend/dist) |
| PDF con checklist diligenciada + observaciones + enlaces | **Cumple** | Checklist diligenciada con estados, observaciones y enlaces verificables. URL: [EVIDENCIA_72_CHECKLIST.md](https://github.com/CFCT95/CyberG-Suite/blob/main/EVIDENCIA_72_CHECKLIST.md) |

---

## Resumen Ejecutivo

| Categoría | Ítems | Cumple | Parcial | No Cumple |
|---|---|---|---|---|
| 1. Requerimientos y alcance | 3 | 3 | 0 | 0 |
| 2. Casos de uso / HU | 2 | 2 | 0 | 0 |
| 3. Arquitectura y diagramas | 4 | 4 | 0 | 0 |
| 4. Navegación y UI | 2 | 2 | 0 | 0 |
| 5. Codificación e integración | 6 | 6 | 0 | 0 |
| 6. Control de versiones | 3 | 3 | 0 | 0 |
| 7. Librerías y dependencias | 3 | 3 | 0 | 0 |
| 8. Seguridad | 3 | 3 | 0 | 0 |
| 9. Pruebas | 2 | 0 | 0 | 2 |
| 10. Ambientes y BD | 3 | 3 | 0 | 0 |
| 11. Evidencias y entrega | 3 | 3 | 0 | 0 |
| **TOTAL** | **34** | **32** | **0** | **2** |

**Porcentaje de cumplimiento:** 32/34 = **94% Cumple** | 0/34 = **0% Parcial** | 2/34 = **6% No Cumple** *(Pruebas unitarias pendientes para siguientes guías)*

---

*Documento generado: 8 de marzo de 2026*
*Evidencia: GA8-220501096-AA1-EV01*
*Proyecto: CyberG Suite – Ficha 3070422*
