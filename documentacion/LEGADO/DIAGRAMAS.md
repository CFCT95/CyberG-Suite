# Diagramas de Arquitectura – CyberG Suite

**Proyecto:** CyberG Suite | **Ficha:** 3070422 | **Aprendiz:** Cristian Ferney Castaño Torres  
**Evidencia:** GA8-220501096-AA1-EV01

---

## 1. Diagrama de Clases

```mermaid
classDiagram

    class CLIENTE {
        +INT id_cliente PK
        +VARCHAR nombre
        +VARCHAR tipo_empresa
        +VARCHAR correo UNIQUE
        +VARCHAR telefono
        +VARCHAR contrasena
        +DATETIME fecha_registro
    }

    class db {
        -string servername
        -string username
        -string password
        -string dbname
        +mysqli conn
        +crearBaseDatos()
        +crearTablaCliente()
        +verificarConexion()
    }

    class login {
        +POST correo
        +POST contrasena
        +validarCredenciales() JSON
        +iniciarSesion()
    }

    class registro {
        +POST nombre
        +POST tipo_empresa
        +POST correo
        +POST telefono
        +POST contrasena
        +registrarCliente() JSON
        +validarDatos()
    }

    class dashboard {
        +GET sesion
        +obtenerDatosSesion() JSON
        +calcularDiasRegistrado() int
    }

    class ver_registros {
        +GET sesion
        +listarClientes() JSON
    }

    class logout {
        +destruirSesion()
        +redirigir()
    }

    class recuperar {
        +POST correo
        +buscarUsuario() JSON
        +enviarEnlace()
    }

    db --> CLIENTE : gestiona
    login --> db : usa
    registro --> db : usa
    dashboard --> db : usa
    ver_registros --> db : usa
    recuperar --> db : usa
    login --> CLIENTE : autentica
    registro --> CLIENTE : crea
    ver_registros --> CLIENTE : lista
```

---

## 2. Diagrama de Paquetes

```mermaid
classDiagram
    class `Backend PHP` {
        db.php
        login.php
        registro.php
        dashboard.php
        ver_registros.php
        logout.php
        recuperar.php
    }

    class `Base de Datos` {
        database_setup.sql
        Tabla CLIENTE
    }

    class `context` {
        AuthContext.jsx
    }

    class `services` {
        api.js
    }

    class `utils` {
        validation.js
    }

    class `pages` {
        Dashboard.jsx
        Clientes.jsx
    }

    class `components/auth` {
        LoginForm.jsx
        RegisterForm.jsx
    }

    class `components/navigation` {
        ProtectedRoute.jsx
        Navbar.jsx
    }

    class `components/layout` {
        Layout.jsx
    }

    class `components/dashboard` {
        UserInfoCard.jsx
        StatsCard.jsx
        QuickActionsPanel.jsx
    }

    class `components/ui` {
        Button.jsx
        InputField.jsx
        LoadingSpinner.jsx
        Alert.jsx
        Card.jsx
    }

    class `components/data` {
        EmptyState.jsx
    }

    `Backend PHP` --> `Base de Datos` : MySQLi
    `services` --> `Backend PHP` : Axios HTTP
    `pages` --> `services` : usa
    `components/auth` --> `services` : usa
    `components/auth` --> `utils` : valida
    `pages` --> `components/dashboard` : incluye
    `pages` --> `components/data` : incluye
    `components/navigation` --> `context` : lee auth
```

---

## 3. Diagrama de Componentes

```mermaid
classDiagram
    class App {
        +BrowserRouter
        +AuthProvider
        +routes[]
        +render()
    }

    class AuthContext {
        +user
        +isAuthenticated
        +login()
        +logout()
    }

    class ProtectedRoute {
        +isAuthenticated bool
        +redirect /login
        +render() Outlet
    }

    class Layout {
        +Navbar
        +Outlet
        +render()
    }

    class LoginForm {
        +correo string
        +contrasena string
        +handleSubmit()
        +validateForm()
    }

    class RegisterForm {
        +nombre string
        +correo string
        +contrasena string
        +handleSubmit()
        +validateForm()
    }

    class Dashboard {
        +userData object
        +fetchDashboard()
        +render()
    }

    class Clientes {
        +clientes array
        +fetchClientes()
        +render()
    }

    class api {
        +baseURL string
        +login() Promise
        +register() Promise
        +getDashboard() Promise
        +getClientes() Promise
        +logout() Promise
    }

    App --> AuthContext : provee estado
    App --> ProtectedRoute : protege rutas
    App --> LoginForm : ruta /login
    App --> RegisterForm : ruta /registro
    ProtectedRoute --> Layout : renderiza si auth
    Layout --> Dashboard : ruta /dashboard
    Layout --> Clientes : ruta /clientes
    Dashboard --> api : fetchDashboard()
    Clientes --> api : fetchClientes()
    LoginForm --> api : login()
    RegisterForm --> api : register()
    LoginForm --> AuthContext : setUser()
    ProtectedRoute --> AuthContext : lee isAuthenticated
```

---

## 4. Capas de Arquitectura

```mermaid
graph TB
    subgraph PRESENTACION["Capa de Presentación – React JS + Vite"]
        P1["Componentes UI (Button, InputField, Card…)"]
        P2["Páginas (LoginForm, Dashboard, Clientes…)"]
        P3["Navegación (ProtectedRoute, Navbar)"]
    end

    subgraph NEGOCIO["Capa de Negocio – PHP 7.4"]
        N1["login.php – Autenticación + sesiones"]
        N2["registro.php – Validación + hash contraseña"]
        N3["dashboard.php – Datos de sesión activa"]
        N4["ver_registros.php – Consulta clientes"]
    end

    subgraph DATOS["Capa de Datos – MySQLi"]
        D1["db.php – Conexión + auto-setup BD"]
        D2["database_setup.sql – DDL Tabla CLIENTE"]
    end

    subgraph BD_LAYER["Base de Datos – MySQL 5.7"]
        B1["Tabla CLIENTE\n(id, nombre, tipo_empresa, correo, telefono, contrasena, fecha_registro)"]
    end

    PRESENTACION -->|Axios HTTP + JSON| NEGOCIO
    NEGOCIO -->|MySQLi prepared statements| DATOS
    DATOS -->|SQL queries| BD_LAYER
```

---

*Diagramas generados con Mermaid – renderizados en GitHub automáticamente*  
*CyberG Suite – Ficha 3070422 – GA8-220501096-AA1-EV01*
