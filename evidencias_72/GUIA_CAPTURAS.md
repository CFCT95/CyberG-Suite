# Guía de Capturas para Evidencia 72
## CyberG Suite – GA8-220501096-AA1-EV01

---

Abre este archivo, sigue el orden numerado, toma el pantallazo de cada bloque
y guárdalo con el nombre indicado dentro de esta misma carpeta (`evidencias_72/`).

---

## CAPTURA 01 — Requerimientos formales con versión
**Guardar como:** `evidencias_72/requerimientos_formales.png`
**Ítem checklist:** 1.1 – Requerimientos identificados y versionados

Abre el archivo `REQUERIMIENTOS.md` y captura desde el inicio hasta el final
de la tabla de Requerimientos Funcionales. El bloque a capturar es este:

```
# Documento de Requerimientos
## Proyecto: CyberG Suite

Aprendiz: Cristian Ferney Castaño Torres
Ficha: 3070422
Versión del documento: 1.1

Historial de Versiones
| Versión | Fecha       | Descripción del cambio                                    |
| 1.0     | Nov 2025    | Versión inicial con requerimientos funcionales base       |
| 1.1     | Mar 2026    | Adición de requerimientos no funcionales y actualización  |

2. Requerimientos Funcionales
| ID    | Descripción                                                                 | Prioridad | Versión | Estado       |
| RF-01 | El sistema debe permitir a una empresa registrarse con nombre, tipo ...     | Alta      | 1.0     | Implementado |
| RF-02 | El sistema debe autenticar al usuario mediante correo y contraseña.         | Alta      | 1.0     | Implementado |
| RF-03 | Las contraseñas deben almacenarse con hash seguro (password_hash).          | Alta      | 1.0     | Implementado |
| RF-04 | El sistema debe mostrar un dashboard personalizado con información...        | Alta      | 1.0     | Implementado |
| RF-05 | El sistema debe permitir cerrar sesión de forma segura.                     | Alta      | 1.0     | Implementado |
| RF-06 | El sistema debe permitir visualizar el listado de clientes/empresas...      | Media     | 1.0     | Implementado |
| RF-07 | El sistema debe ofrecer recuperación de contraseña por correo.              | Media     | 1.0     | Implementado |
| RF-08 | El sistema debe validar el formato del correo y la longitud mínima...       | Alta      | 1.0     | Implementado |
| RF-09 | El sistema debe redirigir al login si el usuario intenta acceder...         | Alta      | 1.0     | Implementado |
| RF-10 | El dashboard debe mostrar estadísticas básicas: días registrado...          | Baja      | 1.1     | Implementado |
```

---

## CAPTURA 02 — Historias de usuario con criterios Gherkin
**Guardar como:** `evidencias_72/historias_usuario_gherkin.png`
**Ítem checklist:** 1.2 – Criterios de aceptación definidos

Abre el archivo `HISTORIAS_USUARIO.md` y captura la sección HU-01 completa:

```
## HU-01 – Registro de empresa

Como representante de una empresa,
quiero registrarme en CyberG Suite con los datos de mi organización,
para poder acceder al sistema y gestionar mi información de ciberseguridad.

Prioridad: Alta | Estado: Implementado | Requerimientos relacionados: RF-01, RF-08

Criterios de aceptación:

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
  Entonces el sistema muestra el mensaje "El correo electrónico no es válido"
  Y no envía la petición al servidor

Escenario 3: Contraseña menor a 6 caracteres
  ...
Escenario 4: Las contraseñas no coinciden
  ...
Escenario 5: Teléfono con formato inválido
  ...
Escenario 6: Campo obligatorio vacío
  ...
```

---

## CAPTURA 03 — Tabla de trazabilidad HU ↔ Código
**Guardar como:** `evidencias_72/trazabilidad_hu.png`
**Ítem checklist:** 2.1 / 2.2 – Trazabilidad historia ↔ módulo ↔ componentes

Abre el archivo `HISTORIAS_USUARIO.md`, ve al final del documento y captura la tabla:

```
## Tabla de Trazabilidad Resumen

| Historia          | Componente React    | Servicio                        | Backend PHP      | Validaciones                                         |
|-------------------|---------------------|---------------------------------|------------------|------------------------------------------------------|
| HU-01 Registro    | RegisterForm.jsx    | authService.register()          | registro.php     | validateEmail, validatePhone, validatePassword, ...  |
| HU-02 Login       | LoginForm.jsx       | authService.login()             | login.php        | validateEmail, min 6 chars                           |
| HU-03 Dashboard   | Dashboard.jsx       | AuthContext                     | dashboard.php    | ProtectedRoute                                       |
| HU-04 Clientes    | Clientes.jsx        | clientService.getAll()          | ver_registros.php| ProtectedRoute                                       |
| HU-05 Logout      | Navbar.jsx          | authService.logout()            | logout.php       | —                                                    |
| HU-06 Recuperación| recuperar.php form  | authService.requestPassword...  | recuperar.php    | validateEmail                                        |
```

---

## CAPTURA 04 — Alcance del módulo / componentes implementados
**Guardar como:** `evidencias_72/alcance_modulo.png`
**Ítem checklist:** 1.3 – Alcance del módulo claro

Abre el archivo `react-frontend/COMPONENTES_IMPLEMENTADOS.md` y captura el documento completo:

```
# Componentes Implementados - CyberG Suite Frontend React

✅ Lista Completa de Componentes

🔐 Componentes de Autenticación (4/4)
  ✅ LoginForm       - Formulario de inicio de sesión
  ✅ RegisterForm    - Formulario de registro
  ✅ AuthContext     - Gestión global de autenticación

🧭 Componentes de Navegación (2/3)
  ✅ Navbar          - Barra de navegación principal
  ✅ ProtectedRoute  - Protección de rutas

📊 Componentes de Dashboard (4/4)
  ✅ Dashboard       - Página principal del dashboard
  ✅ UserInfoCard    - Tarjeta de información del usuario
  ✅ StatsCard       - Tarjeta de estadísticas reutilizable
  ✅ QuickActionsPanel - Panel de acciones rápidas

📝 Componentes de Formularios (3/3)
  ✅ InputField      - Campo de entrada reutilizable
  ✅ Button          - Botón reutilizable con variantes

📋 Componentes de Visualización de Datos (2/3)
  ✅ EmptyState      - Estado vacío con mensaje
  ✅ LoadingSpinner  - Indicador de carga

🎨 Componentes UI/UX (4/4)
  ✅ Alert   ✅ Card   ✅ LoadingSpinner

🏗️ Layout (1/1)
  ✅ Layout          - Estructura principal de la aplicación

📄 Páginas (2/2)
  ✅ Dashboard   ✅ Clientes

Resumen: Total implementados: 20+ | Críticos: ✅ 100%
```

---

## CAPTURA 05 — Mapa de rutas / navegación (App.jsx)
**Guardar como:** `evidencias_72/mapa_navegacion.png`
**Ítem checklist:** 4.1 – Mapa de navegación actualizado

Abre el archivo `react-frontend/src/App.jsx` y captura el archivo completo (59 líneas):

```jsx
// App.jsx — react-frontend/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/navigation/ProtectedRoute';
import Layout from './components/layout/Layout';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login"    element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />

          {/* Rutas protegidas */}
          <Route path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout><Dashboard /></Layout>
              </ProtectedRoute>
            }
          />
          <Route path="/clientes"
            element={
              <ProtectedRoute>
                <Layout><Clientes /></Layout>
              </ProtectedRoute>
            }
          />

          {/* Ruta por defecto */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
```

---

## CAPTURA 06 — Servicios API / endpoints (api.js config + interceptors)
**Guardar como:** `evidencias_72/integracion_axios.png`
**Ítem checklist:** 5.6 – Integración entre módulos verificada

Abre `react-frontend/src/services/api.js` y captura las líneas 1–47:

```js
// api.js — react-frontend/src/services/api.js  (líneas 1–47)

import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'http://localhost/CyberG-Suite',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Para mantener sesiones PHP
});

// Interceptor de REQUEST — agrega token si existe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de RESPONSE — maneja errores 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

---

## CAPTURA 07 — Servicios de autenticación y clientes (api.js servicios)
**Guardar como:** `evidencias_72/rutas_endpoints.png`
**Ítem checklist:** 4.2 – Rutas/endpoints asociados a HU

Abre `react-frontend/src/services/api.js` y captura las líneas 52–152:

```js
// api.js — react-frontend/src/services/api.js  (líneas 52–152)

export const authService = {

  login: async (correo, contrasena) => {
    const formData = new FormData();
    formData.append('correo', correo);
    formData.append('contrasena', contrasena);
    const response = await api.post('/login.php', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  register: async (userData) => {
    const formData = new FormData();
    formData.append('nombre',             userData.nombre);
    formData.append('tipo_empresa',       userData.tipo_empresa);
    formData.append('correo',             userData.correo);
    formData.append('telefono',           userData.telefono);
    formData.append('contrasena',         userData.contrasena);
    formData.append('confirmar_contrasena', userData.confirmar_contrasena);
    const response = await api.post('/registro.php', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  requestPasswordRecovery: async (correo) => { ... → /recuperar.php },
  checkSession:            async ()        => { ... → GET /dashboard.php },
  logout:                  async ()        => { ... → POST /logout.php },
};

export const clientService = {
  getAll:   async ()   => { ... → GET /ver_registros.php },
  getById:  async (id) => { ... → GET /cliente.php?id=id },
};
```

---

## CAPTURA 08 — Patrón Context API (AuthContext.jsx)
**Guardar como:** `evidencias_72/patron_context.png`
**Ítem checklist:** 5.4 – Patrones de diseño aplicados

Abre `react-frontend/src/context/AuthContext.jsx` y captura las líneas 146–162:

```jsx
// AuthContext.jsx — líneas 146–162

  // Memoizar el valor del contexto para evitar re-renders innecesarios
  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      register,
      checkAuth,
    }),
    [user, isAuthenticated, isLoading, login, logout, register, checkAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
```

---

## CAPTURA 09 — Ruta protegida / seguridad (ProtectedRoute.jsx)
**Guardar como:** `evidencias_72/seguridad_protected_route.png`
**Ítem checklist:** 8.1 – Mecanismos de seguridad implementados

Abre `react-frontend/src/components/navigation/ProtectedRoute/ProtectedRoute.jsx`
y captura el archivo completo:

```jsx
// ProtectedRoute.jsx — completo

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Mostrar spinner mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <LoadingSpinner size="large" message="Verificando autenticación..." />
      </div>
    );
  }

  // Si no está autenticado, redirigir al login guardando la ubicación actual
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
```

---

## CAPTURA 10 — Validaciones client-side (validation.js)
**Guardar como:** `evidencias_72/validacion_entradas.png`
**Ítem checklist:** 8.3 – Validación de entradas

Abre `react-frontend/src/utils/validation.js` y captura el archivo completo (78 líneas):

```js
// validation.js — completo

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  if (!password) return { isValid: false, strength: 'weak', message: 'La contraseña es requerida' };
  if (password.length < 6) return { isValid: false, strength: 'weak', message: 'Mínimo 6 caracteres' };

  let score = 0;
  if (password.length >= 8)          score++;
  if (/[a-z]/.test(password))        score++;
  if (/[A-Z]/.test(password))        score++;
  if (/[0-9]/.test(password))        score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  const strength = score >= 4 ? 'strong' : score >= 2 ? 'medium' : 'weak';
  return { isValid: true, strength, message: '' };
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const validatePasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};
```

---

## CAPTURA 11 — Dependencias del proyecto (package.json)
**Guardar como:** `evidencias_72/dependencias_package.png`
**Ítem checklist:** 7.1 / 7.3 – Librerías y gestión de dependencias

Abre `react-frontend/package.json` y captura el archivo completo:

```json
// package.json — react-frontend/package.json

{
  "name": "cyberg-suite-frontend",
  "version": "1.0.0",
  "description": "Frontend React para CyberG Suite - Sistema de gestión de ciberseguridad",
  "private": true,
  "dependencies": {
    "react":            "^18.2.0",
    "react-dom":        "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios":            "^1.6.2"
  },
  "devDependencies": {
    "@types/react":         "^18.2.43",
    "@types/react-dom":     "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite":                 "^5.0.8"
  },
  "scripts": {
    "dev":     "vite",
    "build":   "vite build",
    "preview": "vite preview"
  }
}
```

---

## CAPTURA 12 — Configuración del servidor (vite.config.js)
**Guardar como:** `evidencias_72/config_servidor.png`
**Ítem checklist:** 10.1 – Configuración de servidor documentada

Abre `react-frontend/vite.config.js` y captura el archivo completo:

```js
// vite.config.js — react-frontend/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

---

## CAPTURA 13 — Script de base de datos (database_setup.sql)
**Guardar como:** `evidencias_72/script_bd.png`
**Ítem checklist:** 10.2 – Modelo/Script de BD documentado

Abre `database_setup.sql` en la raíz del proyecto y captura el archivo completo:

```sql
-- database_setup.sql

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS improve
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE improve;

-- Crear la tabla CLIENTE
CREATE TABLE IF NOT EXISTS CLIENTE (
    id_cliente     INT AUTO_INCREMENT PRIMARY KEY,
    nombre         VARCHAR(100)  NOT NULL,
    tipo_empresa   VARCHAR(50)   NOT NULL,
    correo         VARCHAR(100)  NOT NULL UNIQUE,
    telefono       VARCHAR(15)   NOT NULL,
    contrasena     VARCHAR(255)  NOT NULL,
    fecha_registro DATETIME      DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_correo (correo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

## CAPTURA 14 — .gitignore (seguridad / archivos excluidos)
**Guardar como:** `evidencias_72/gitignore_seguridad.png`
**Ítem checklist:** 8.2 – Buenas prácticas, no credenciales en repo

Abre `.gitignore` en la raíz del proyecto y captura el archivo completo:

```
# .gitignore

# Archivos de configuración sensibles
db.php.local
config.local.php

# Archivos temporales
*.log
*.tmp
.DS_Store

# Archivos HTML temporales (para PDF) - solo en la raíz
/*.html
# Permitir HTML en react-frontend (necesario para el build)
!react-frontend/

# Dependencias (si se usa Composer)
/vendor/

# Archivos del IDE
.idea/
.vscode/
*.swp
```

---

## CAPTURA 15 — Historial de commits (terminal)
**Guardar como:** `evidencias_72/git_log.png`
**Ítem checklist:** 6.1 – Repositorio con commits descriptivos

Abre una terminal en la raíz del proyecto y ejecuta:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite
git log --oneline
```

Captura el resultado. Debe verse algo similar a:
```
4f13403 corregir puerto MySQL de 3307 a 3306
2140268 corregir gitignore: permitir HTML en react-frontend
e5830fb agregar index.html del frontend react
4ae9946 corregir gitignore para no excluir react-frontend/index.html
1fabc78 migrar a PHP
83890e5 agregar informes técnicos
bb14969 agregar informes
d38eb09 agregar readme
```

---

## CAPTURA 16 — Ramas del repositorio (terminal)
**Guardar como:** `evidencias_72/git_branches.png`
**Ítem checklist:** 6.2 – Rama/flujo de trabajo definido

En la misma terminal ejecuta:

```bash
git branch -a
```

Captura el resultado:
```
  develop
  feature/agregar-gitignore
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/develop
  remotes/origin/main
```

---

## CAPTURA 17 — Repositorio en GitHub
**Guardar como:** `evidencias_72/repositorio_github.png`
**Ítem checklist:** 11.1 – URLs del repositorio

Abre el navegador y ve a:
**https://github.com/CFCT95/CyberG-Suite**

Captura la página principal mostrando el nombre del repo, la descripción,
los archivos y el último commit.

---

## CAPTURA 18 — Estructura de componentes (explorador de archivos)
**Guardar como:** `evidencias_72/componentes_reutilizables.png`
**Ítem checklist:** 5.2 – Componentes reutilizables identificados y separados

En el explorador de archivos del IDE (panel izquierdo de Cursor/VS Code),
navega a `react-frontend/src/components/` y expande todas las carpetas.
La estructura debe verse así:

```
src/components/
├── auth/
│   ├── LoginForm/    (LoginForm.jsx, LoginForm.css, index.js)
│   └── RegisterForm/ (RegisterForm.jsx, RegisterForm.css, index.js)
├── dashboard/
│   ├── QuickActionsPanel/
│   ├── StatsCard/
│   └── UserInfoCard/
├── data/
│   └── EmptyState/
├── layout/
│   └── Layout/
├── navigation/
│   ├── Navbar/
│   └── ProtectedRoute/
└── ui/
    ├── Alert/
    ├── Button/
    ├── Card/
    ├── InputField/
    └── LoadingSpinner/
```

---

## Resumen de capturas

| # | Archivo destino | Estado |
|---|---|---|
| 01 | `requerimientos_formales.png` | ⬜ Pendiente |
| 02 | `historias_usuario_gherkin.png` | ⬜ Pendiente |
| 03 | `trazabilidad_hu.png` | ⬜ Pendiente |
| 04 | `alcance_modulo.png` | ⬜ Pendiente |
| 05 | `mapa_navegacion.png` | ⬜ Pendiente |
| 06 | `integracion_axios.png` | ⬜ Pendiente |
| 07 | `rutas_endpoints.png` | ⬜ Pendiente |
| 08 | `patron_context.png` | ⬜ Pendiente |
| 09 | `seguridad_protected_route.png` | ⬜ Pendiente |
| 10 | `validacion_entradas.png` | ⬜ Pendiente |
| 11 | `dependencias_package.png` | ⬜ Pendiente |
| 12 | `config_servidor.png` | ⬜ Pendiente |
| 13 | `script_bd.png` | ⬜ Pendiente |
| 14 | `gitignore_seguridad.png` | ⬜ Pendiente |
| 15 | `git_log.png` | ⬜ Pendiente |
| 16 | `git_branches.png` | ⬜ Pendiente |
| 17 | `repositorio_github.png` | ⬜ Pendiente |
| 18 | `componentes_reutilizables.png` | ⬜ Pendiente |

---
*Guía generada: 8 de marzo de 2026 – CyberG Suite – Ficha 3070422*
