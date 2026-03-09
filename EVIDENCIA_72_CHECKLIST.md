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
| Requerimientos del sistema identificados y versionados | **Cumple** | Documento `REQUERIMIENTOS.md` creado con 21 requerimientos (RF, RNF, RI) en tabla ID/Descripción/Prioridad/Versión/Estado. Historial de versiones 1.0 → 1.1 documentado. **Captura manual:** `REQUERIMIENTOS.md` tabla sección 2 (RF-01 a RF-10). Ruta: `./evidencias_72/requerimientos_formales.png` |
| Criterios de aceptación definidos (por historia/caso de uso) | **Cumple** | Documento `HISTORIAS_USUARIO.md` creado con 6 historias de usuario (HU-01 a HU-06) en formato Gherkin (Given/When/Then). Cada HU incluye múltiples escenarios, prioridad, estado y trazabilidad hacia archivos del código fuente. **Captura manual:** `HISTORIAS_USUARIO.md` sección HU-01 o HU-02. Ruta: `./evidencias_72/historias_usuario_gherkin.png` |
| Alcance del módulo a codificar está claro | **Cumple** | El módulo cubre: registro de empresas, autenticación, dashboard personalizado, visualización de clientes. Documentado en `README.md` y `react-frontend/COMPONENTES_IMPLEMENTADOS.md`. **Captura manual:** `react-frontend/COMPONENTES_IMPLEMENTADOS.md` completo. Ruta: `./evidencias_72/alcance_modulo.png` |

---

### 2. Casos de Uso / Historias de Usuario

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Documento de casos de uso o historias de usuario actualizado | **Cumple** | `HISTORIAS_USUARIO.md` creado con 6 HU completas: registro, login, dashboard, clientes, logout y recuperación de contraseña. Cada una con rol, objetivo, escenarios Gherkin y trazabilidad. **Captura manual:** `HISTORIAS_USUARIO.md` tabla de trazabilidad al final del documento. Ruta: `./evidencias_72/trazabilidad_hu.png` |
| Trazabilidad: historia/caso ↔ módulo ↔ clases/componentes | **Cumple** | `HISTORIAS_USUARIO.md` incluye tabla de trazabilidad resumen (HU ↔ Componente React ↔ Servicio ↔ Backend PHP ↔ Validaciones) y sección "Trazabilidad de código" en cada HU con archivos y números de línea. **Captura manual:** `HISTORIAS_USUARIO.md` sección "Tabla de Trazabilidad Resumen". Ruta: `./evidencias_72/trazabilidad_hu.png` |

---

### 3. Arquitectura y Diagramas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Diagrama de clases actualizado | **Cumple** | Diagrama Mermaid con entidad `CLIENTE` y clases PHP con atributos, métodos y relaciones. URL: [DIAGRAMAS.md – Sección 1](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#1-diagrama-de-clases) |
| Diagrama de paquetes actualizado | **Cumple** | Diagrama Mermaid con capas Backend PHP, Base de Datos, Frontend (context/services/utils/pages/components). URL: [DIAGRAMAS.md – Sección 2](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#2-diagrama-de-paquetes) |
| Diagrama de componentes actualizado | **Cumple** | Diagrama Mermaid flujo `main.jsx` → `App.jsx` → `AuthContext` → rutas → páginas → widgets → `api.js` → Backend PHP. URL: [DIAGRAMAS.md – Sección 3](https://github.com/CFCT95/CyberG-Suite/blob/main/DIAGRAMAS.md#3-diagrama-de-componentes) |
| Capas identificadas y ubicación de componentes | **Cumple** | Capas claramente separadas: Presentación (`react-frontend/src/`), Lógica de Negocio (`login.php`, `registro.php`, `dashboard.php`), Acceso a Datos (`db.php`, `ver_registros.php`), Base de Datos (MySQL/`database_setup.sql`). **Captura manual:** `react-frontend/src/services/api.js` líneas 1–50 (capa de integración). Ruta: `./evidencias_72/capas_arquitectura.png` |

---

### 4. Navegación y UI

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Mapa de navegación (pantallas/rutas) actualizado | **Cumple** | Rutas definidas en `App.jsx`: `/login` → `LoginForm`, `/registro` → `RegisterForm`, `/dashboard` → `Dashboard` (protegida), `/clientes` → `Clientes` (protegida), `/` → redirect a `/dashboard`. `ProtectedRoute` controla acceso. **Captura manual:** `react-frontend/src/App.jsx` completo. Ruta: `./evidencias_72/mapa_navegacion.png` |
| Rutas/endpoints asociados a historias o casos de uso | **Cumple** | Cada ruta corresponde a un caso de uso: `/login` (CU: Autenticarse), `/registro` (CU: Registrar empresa), `/dashboard` (CU: Ver dashboard), `/clientes` (CU: Ver registros). Endpoints backend: `login.php`, `registro.php`, `dashboard.php`, `ver_registros.php`, `logout.php`. **Captura manual:** `react-frontend/src/services/api.js` líneas 52–152. Ruta: `./evidencias_72/rutas_endpoints.png` |

---

### 5. Codificación e Integración

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Cada módulo codificado en el lenguaje/stack seleccionado | **Cumple** | Frontend: 20+ componentes React JSX. Backend: 6 archivos PHP (`login.php`, `registro.php`, `dashboard.php`, `logout.php`, `recuperar.php`, `ver_registros.php`). BD: `database_setup.sql` + auto-setup en `db.php`. Java módulo adicional en `Java-Modulo-Clientes/`. **Captura manual:** explorador de archivos de la raíz del proyecto. Ruta: `./evidencias_72/modulos_codificados.png` |
| Componentes reutilizables identificados y separados | **Cumple** | 5 componentes UI reutilizables: `Button`, `InputField`, `LoadingSpinner`, `Alert`, `Card`. 3 componentes dashboard: `UserInfoCard`, `StatsCard`, `QuickActionsPanel`. 1 componente `EmptyState`. Cada uno en su propio directorio con `.jsx`, `.css` e `index.js`. **Captura manual:** carpeta `react-frontend/src/components/ui/` en el explorador. Ruta: `./evidencias_72/componentes_reutilizables.png` |
| Nomenclatura de paquetes/carpetas clara y consistente | **Cumple** | React: PascalCase para componentes (`LoginForm`, `ProtectedRoute`), camelCase para utilidades (`validation.js`, `api.js`). PHP: snake_case para archivos (`ver_registros.php`, `database_setup.sql`). Carpetas temáticas: `ui/`, `auth/`, `navigation/`, `layout/`, `dashboard/`, `data/`. **Captura manual:** árbol de directorios `react-frontend/src/`. Ruta: `./evidencias_72/nomenclatura_carpetas.png` |
| Patrones de diseño aplicados | **Cumple** | Context API (patrón Provider/Observer) en `AuthContext.jsx`. Repository pattern en `ClienteRepository.java` y simulado en `api.js`. Component pattern con composición en `Layout.jsx`. `ProtectedRoute` como patrón Guard/HOC. `useMemo`/`useCallback` para optimización. **Captura manual:** `react-frontend/src/context/AuthContext.jsx` líneas 146–162. Ruta: `./evidencias_72/patron_context.png` |
| Buenas prácticas: legibilidad, SOLID, manejo de errores, validaciones | **Cumple** | PHPDoc en todos los archivos PHP, JSDoc en todos los archivos JS/JSX. Prepared statements MySQL (previene SQL injection). `password_hash()` para contraseñas. Try/catch en todas las funciones async. Validaciones client-side en `validation.js` y server-side en PHP. **Captura manual:** `react-frontend/src/utils/validation.js` completo. Ruta: `./evidencias_72/buenas_practicas.png` |
| Integración entre módulos verificada | **Cumple** | Axios configurado con `baseURL: 'http://localhost/CyberG-Suite'`, `withCredentials: true`. Interceptors para token y errores 401. FormData para compatibilidad con PHP. Proxy Vite en `vite.config.js`. **Captura manual:** `react-frontend/src/services/api.js` líneas 8–47. Ruta: `./evidencias_72/integracion_axios.png` |

---

### 6. Control de Versiones

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Repositorio (Git) con commits descriptivos | **Cumple** | 8 commits en `main`: "corregir puerto MySQL", "corregir gitignore", "agregar index.html", "migrar a PHP", "agregar informes técnicos", "agregar informes", "agregar readme", etc. Ramas: `main`, `develop`, `feature/agregar-gitignore`. **Captura manual:** ejecutar `git log --oneline` y capturar output. Ruta: `./evidencias_72/git_log.png` |
| Rama/flujo de trabajo definido | **Cumple** | Tres ramas activas: `main` (producción), `develop` (desarrollo), `feature/agregar-gitignore` (feature branch). Flujo GitFlow básico implementado. **Captura manual:** ejecutar `git branch -a` y capturar. Ruta: `./evidencias_72/git_branches.png` |
| README con instrucciones de ejecución y dependencias | **Cumple** | `README.md` raíz con instalación, configuración BD, inicio XAMPP. `react-frontend/README.md` con `npm install`, `npm run dev`, variables de entorno. `react-frontend/INSTALACION.md` con pasos detallados. **Captura manual:** `README.md` sección "Instalación" líneas 28–60. Ruta: `./evidencias_72/readme_instalacion.png` |

---

### 7. Librerías, Frameworks y Dependencias

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Listado de librerías por capa y propósito | **Cumple** | **Frontend:** React 18.2 (UI), React Router DOM 6.20 (routing), Axios 1.6 (HTTP), Vite 5.0 (build). **Backend:** PHP nativo (lógica), MySQLi (BD). **BD:** MySQL 5.7. **Java:** MySQL Connector 8.0.33 (lib/). **Captura manual:** `react-frontend/package.json` completo. Ruta: `./evidencias_72/dependencias_package.png` |
| Framework(s) por capa | **Cumple** | Presentación: React + Vite. Negocio: PHP 7.4+ nativo. Datos: MySQLi. Módulo adicional: Java puro (sin framework). Cada capa tecnológicamente separada. **Captura manual:** `react-frontend/vite.config.js` completo. Ruta: `./evidencias_72/frameworks_vite.png` |
| Gestión de dependencias | **Cumple** | `react-frontend/package.json` con versiones fijas (`^18.2.0`, `^6.20.0`, `^1.6.2`). `Java-Modulo-Clientes/lib/mysql-connector-java-8.0.33.jar` incluido. `node_modules/` excluido del repo via `.gitignore`. **Captura manual:** `react-frontend/package.json` completo. Ruta: `./evidencias_72/gestion_dependencias.png` |

---

### 8. Seguridad

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Mecanismos de seguridad implementados (auth, roles, permisos) | **Cumple** | Autenticación: sesiones PHP + localStorage React. Rutas protegidas con `ProtectedRoute`. Interceptor 401 en Axios redirige a `/login`. `password_hash(PASSWORD_DEFAULT)` para contraseñas. **Captura manual:** `react-frontend/src/components/navigation/ProtectedRoute/ProtectedRoute.jsx` completo. Ruta: `./evidencias_72/seguridad_protected_route.png` |
| Buenas prácticas: variables de entorno, no credenciales en repo | **Cumple** | `db.php` actualizado: usa `getenv()` para `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME` con fallback a valores XAMPP locales. URL: [db.php](https://github.com/CFCT95/CyberG-Suite/blob/main/db.php#L8-L12) |
| Validación de entradas y controles básicos | **Cumple** | Client-side: `validateEmail`, `validatePassword`, `validatePhone`, `validateRequired`, `validatePasswordMatch` en `validation.js`. Server-side: prepared statements MySQLi en `login.php`, `registro.php`. Sanitización con `htmlspecialchars()`. **Captura manual:** `react-frontend/src/utils/validation.js` líneas 1–60. Ruta: `./evidencias_72/validacion_entradas.png` |

---

### 9. Pruebas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Pruebas unitarias por módulo | **No Cumple** | No existen archivos de prueba (`*.test.js`, `*.spec.php`). No hay directorio `/tests`. Las validaciones están implementadas pero sin cobertura de pruebas automatizadas. **Mejora para GA10/11:** implementar Jest + React Testing Library para componentes React. Ejemplo: prueba para `validateEmail()` en `validation.test.js`. Mínimo 3 pruebas unitarias para los módulos principales. |
| Resultados de pruebas (capturas/logs) y cobertura | **No Cumple** | Sin pruebas no hay resultados. Sólo existe validación manual implícita por el flujo de la aplicación. **Mejora para GA10/11:** ejecutar `npm test -- --coverage` tras implementar Jest y adjuntar captura del reporte de cobertura. Ruta esperada: `./evidencias_72/resultados_pruebas.png` |

---

### 10. Ambientes, Servidor y Base de Datos

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Configuración de servidor (local/dev/test) documentada | **Cumple** | `README.md` documenta XAMPP con Apache y MySQL. Puerto 3306, servidor 127.0.0.1. Vite dev server en puerto 3000 con proxy a `http://localhost/CyberG-Suite`. **Captura manual:** `react-frontend/vite.config.js` completo. Ruta: `./evidencias_72/config_servidor.png` |
| Modelo/Script de BD y configuración de conexión documentados | **Cumple** | `database_setup.sql` contiene el DDL completo de la tabla `CLIENTE`. `db.php` auto-crea la BD y la tabla si no existen. `README.md` documenta todos los campos de la tabla. **Captura manual:** `database_setup.sql` completo. Ruta: `./evidencias_72/script_bd.png` |
| Instrucciones para levantar el proyecto | **Cumple** | Instrucciones completas en `README.md` (5 pasos claros), `react-frontend/INSTALACION.md` y `react-frontend/LEEME_PRIMERO.txt`. Incluye comandos, puertos y configuración. **Captura manual:** `README.md` sección "Instalación" completa. Ruta: `./evidencias_72/instrucciones_ejecucion.png` |

---

### 11. Evidencias y Entrega

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| URLs: repositorio, demo, API docs, tablero | **Cumple** | Repositorio: https://github.com/CFCT95/CyberG-Suite.git (público). Demo local: `http://localhost/CyberG-Suite/`. API: `http://localhost/CyberG-Suite/login.php`, `/registro.php`, etc. Documentado en `README.md` línea 134. **Captura manual:** página principal de GitHub del repo. Ruta: `./evidencias_72/repositorio_github.png` |
| Archivos compilados/build (si aplica) | **Cumple** | `npm run build` ejecutado. Genera `react-frontend/dist/` con `index.html` (0.49 kB), `assets/index.css` (14.1 kB), `assets/index.js` (222 kB). 132 módulos transformados. URL: [react-frontend/dist/](https://github.com/CFCT95/CyberG-Suite/tree/main/react-frontend/dist) |
| PDF con checklist diligenciada + observaciones + enlaces | **Pendiente** | Este documento (`EVIDENCIA_72_CHECKLIST.md`) es la base. **Acción requerida:** convertir este archivo a PDF (usar VS Code → "Open Preview" → "Print to PDF", o Markdown to PDF extension). Guardar como `EVIDENCIA_72_GA08_3070422.pdf`. |

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
| 11. Evidencias y entrega | 3 | 2 | 0 | 1 |
| **TOTAL** | **34** | **31** | **0** | **3** |

**Porcentaje de cumplimiento:** 31/34 = **91% Cumple** | 0/34 = **0% Parcial** | 3/34 = **9% No Cumple** *(Pruebas unitarias pendientes para GA10/GA11)*

---

## Plan de Mejora – Ítems "No Cumple" (Guías 10 y 11)

### 1. Pruebas Unitarias (ítem 9.1)

**Observación técnica:** El proyecto carece completamente de pruebas automatizadas. Ningún componente React ni función utilitaria tiene cobertura de test. Esto impide verificar regresiones y garantizar el comportamiento esperado de las validaciones y servicios.

**Acción para GA10/GA11:**
```bash
# Instalar Jest y React Testing Library
cd react-frontend
npm install --save-dev jest @testing-library/react @testing-library/jest-dom vitest
```
Crear al menos:
- `src/utils/validation.test.js` → probar `validateEmail`, `validatePassword`, `validatePasswordMatch`
- `src/components/ui/Button/Button.test.jsx` → probar render, click, estado disabled
- `src/components/auth/LoginForm/LoginForm.test.jsx` → probar validación de campos

### 2. Resultados de Pruebas (ítem 9.2)

**Observación técnica:** Sin evidencia de pruebas ejecutadas no es posible demostrar la calidad funcional del módulo. La Lista de Chequeo del SENA requiere evidencia verificable (capturas o logs de ejecución).

**Acción para GA10/GA11:**
Tras implementar las pruebas unitarias, ejecutar:
```bash
npm run test -- --coverage
```
Capturar pantalla del reporte en terminal y del reporte HTML de cobertura. Adjuntar como `./evidencias_72/resultados_pruebas.png`.

### 3. Diagramas UML como imágenes (ítems 3.1, 3.2, 3.3) – "Parcial"

**Observación técnica:** Los diagramas están descritos en texto y código, pero la evidencia GA08 requiere artefactos visuales. Entregar solo código sin diagramas puede resultar en descuento de puntos.

**Acción para GA10/GA11:**
- Crear diagrama de clases en [draw.io](https://draw.io) o PlantUML con las clases `Cliente`, `ClienteRepository`, `ClienteService` del informe técnico.
- Exportar como `.png` y colocar en `evidencias_72/diagrama_clases.png`.
- Crear diagrama de componentes con React components y sus dependencias.

### 4. Variables de entorno para BD (ítem 8.2) – "Parcial"

**Observación técnica:** Credenciales hardcoded en `db.php` es una vulnerabilidad de seguridad. En producción esto representaría riesgo real. Para la evaluación académica, demostrar conocimiento de la buena práctica.

**Acción para GA10/GA11:**
Crear `config.php` con:
```php
$dbConfig = [
    'host' => getenv('DB_HOST') ?: '127.0.0.1',
    'port' => getenv('DB_PORT') ?: '3306',
    'user' => getenv('DB_USER') ?: 'root',
    'pass' => getenv('DB_PASS') ?: '',
    'name' => getenv('DB_NAME') ?: 'improve',
];
```
Y agregar `.env.example` al repositorio como referencia.

---

## Evidencias por URL de GitHub

> **Nota:** Para ítems de código fuente, el instructor puede verificar directamente en el repositorio público sin necesidad de captura de pantalla. Los links de GitHub son evidencia válida y verificable. Para los ítems marcados con **"Captura requerida"**, no existe URL directa equivalente.

| # | Ítem checklist | URL de evidencia en GitHub | Requiere captura |
|---|---|---|---|
| 1.1 | Requerimientos funcionales RF-01 a RF-10 | [REQUERIMIENTOS.md – Sección 2](https://github.com/CFCT95/CyberG-Suite/blob/main/REQUERIMIENTOS.md#L29-L43) | No |
| 1.1 | Historial de versiones del documento | [REQUERIMIENTOS.md – Historial](https://github.com/CFCT95/CyberG-Suite/blob/main/REQUERIMIENTOS.md#L14-L20) | No |
| 1.2 | Historias de usuario con Gherkin | [HISTORIAS_USUARIO.md](https://github.com/CFCT95/CyberG-Suite/blob/main/HISTORIAS_USUARIO.md) | No |
| 1.3 | Alcance del módulo / componentes implementados | [COMPONENTES_IMPLEMENTADOS.md](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/COMPONENTES_IMPLEMENTADOS.md) | No |
| 2.1 / 2.2 | Trazabilidad HU ↔ componentes | [HISTORIAS_USUARIO.md – Trazabilidad](https://github.com/CFCT95/CyberG-Suite/blob/main/HISTORIAS_USUARIO.md) | No |
| 3.4 | Capas de arquitectura – servicio de integración | [api.js – config + interceptors (L1–47)](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/services/api.js#L1-L47) | No |
| 4.1 | Mapa de navegación / rutas React | [App.jsx completo](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/App.jsx) | No |
| 4.2 | Rutas/endpoints asociados a casos de uso | [api.js – servicios (L52–152)](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/services/api.js#L52-L152) | No |
| 5.1 | Módulos codificados – estructura general | [Raíz del repositorio](https://github.com/CFCT95/CyberG-Suite) | No |
| 5.2 | Componentes reutilizables separados | [Carpeta components/ui/](https://github.com/CFCT95/CyberG-Suite/tree/main/react-frontend/src/components/ui) | No |
| 5.3 | Nomenclatura de carpetas | [Carpeta src/](https://github.com/CFCT95/CyberG-Suite/tree/main/react-frontend/src) | No |
| 5.4 | Patrón Context API (Provider/Observer) | [AuthContext.jsx – useMemo (L146–162)](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/context/AuthContext.jsx#L146-L162) | No |
| 5.5 | Buenas prácticas – validaciones | [validation.js (L1–78)](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/utils/validation.js) | No |
| 5.6 | Integración Axios con backend | [api.js – interceptors (L8–47)](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/services/api.js#L8-L47) | No |
| 6.1 | Commits descriptivos | [Historial de commits](https://github.com/CFCT95/CyberG-Suite/commits/main) | No |
| 6.2 | Ramas / flujo de trabajo | [Ramas del repositorio](https://github.com/CFCT95/CyberG-Suite/branches) | No |
| 6.3 | README con instrucciones | [README.md – Instalación](https://github.com/CFCT95/CyberG-Suite/blob/main/README.md) | No |
| 7.1 / 7.3 | Dependencias frontend (package.json) | [package.json](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/package.json) | No |
| 7.2 | Framework Vite / proxy configuración | [vite.config.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/vite.config.js) | No |
| 8.1 | Seguridad – rutas protegidas | [ProtectedRoute.jsx](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/components/navigation/ProtectedRoute/ProtectedRoute.jsx) | No |
| 8.2 | .gitignore excluye credenciales | [.gitignore (L1–5)](https://github.com/CFCT95/CyberG-Suite/blob/main/.gitignore) | No |
| 8.3 | Validación de entradas | [validation.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/src/utils/validation.js) | No |
| 10.1 | Configuración servidor Vite | [vite.config.js](https://github.com/CFCT95/CyberG-Suite/blob/main/react-frontend/vite.config.js) | No |
| 10.2 | Script de base de datos | [database_setup.sql](https://github.com/CFCT95/CyberG-Suite/blob/main/database_setup.sql) | No |
| 10.3 | Instrucciones de ejecución | [README.md](https://github.com/CFCT95/CyberG-Suite/blob/main/README.md) | No |
| 11.1 | Repositorio público GitHub | [github.com/CFCT95/CyberG-Suite](https://github.com/CFCT95/CyberG-Suite) | No |
| 3.1–3.3 | Diagramas UML (clases, paquetes, componentes) | *(No aplica URL – diagramas visuales pendientes)* | **Sí – GA10/GA11** |
| 9.1–9.2 | Pruebas unitarias y resultados | *(No aplica URL – pruebas no implementadas aún)* | **Sí – GA10/GA11** |
| 11.2 | Build `dist/` generado | *(No aplica URL – ejecutar `npm run build` primero)* | **Sí si se requiere** |

---

## Nota sobre Demo y Plataforma SENA

Para evidencia de publicación o estado administrativo en la plataforma SENA/Cyberga:
1. Ingresar a [https://cyberga.sena.edu.co](https://cyberga.sena.edu.co) o la plataforma asignada.
2. Navegar al proyecto de la ficha 3070422.
3. Capturar pantalla de la ficha técnica del proyecto y guardar como `evidencias_72/estado_cyberga.png`.
4. Capturar pantalla de la entrega enviada (si aplica) como `evidencias_72/entrega_plataforma.png`.

---

*Documento generado: 8 de marzo de 2026*
*Evidencia: GA8-220501096-AA1-EV01*
*Proyecto: CyberG Suite – Ficha 3070422*
