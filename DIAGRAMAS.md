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
graph TD
    subgraph PROYECTO["📁 CyberG-Suite (Raíz)"]
        subgraph BACKEND["📁 Backend PHP"]
            db_php["db.php\nConexión BD"]
            login_php["login.php\nAutenticación"]
            registro_php["registro.php\nRegistro"]
            dashboard_php["dashboard.php\nDatos sesión"]
            ver_php["ver_registros.php\nListado"]
            logout_php["logout.php\nCierre sesión"]
            recuperar_php["recuperar.php\nRecuperación"]
        end
        subgraph BD["📁 Base de Datos"]
            sql["database_setup.sql\nDDL Tabla CLIENTE"]
        end
        subgraph FRONTEND["📁 react-frontend/src"]
            subgraph CTX["📁 context"]
                auth_ctx["AuthContext.jsx\nEstado global auth"]
            end
            subgraph SVC["📁 services"]
                api_js["api.js\nAxios + endpoints"]
            end
            subgraph UTILS["📁 utils"]
                validation["validation.js\nValidaciones"]
            end
            subgraph PAGES["📁 pages"]
                dashboard_page["Dashboard.jsx"]
                clientes_page["Clientes.jsx"]
            end
            subgraph COMPONENTS["📁 components"]
                subgraph UI["📁 ui"]
                    button["Button"]
                    input["InputField"]
                    spinner["LoadingSpinner"]
                    alert["Alert"]
                    card["Card"]
                end
                subgraph AUTH_C["📁 auth"]
                    login_form["LoginForm"]
                    register_form["RegisterForm"]
                end
                subgraph NAV["📁 navigation"]
                    protected["ProtectedRoute"]
                    navbar["Navbar"]
                end
                subgraph LAYOUT_C["📁 layout"]
                    layout["Layout"]
                end
                subgraph DASH_C["📁 dashboard"]
                    user_card["UserInfoCard"]
                    stats["StatsCard"]
                    quick["QuickActionsPanel"]
                end
                subgraph DATA_C["📁 data"]
                    empty["EmptyState"]
                end
            end
        end
    end

    api_js -->|HTTP POST/GET| login_php
    api_js -->|HTTP POST| registro_php
    api_js -->|HTTP GET| dashboard_php
    api_js -->|HTTP GET| ver_php
    api_js -->|HTTP POST| logout_php
    login_php --> db_php
    registro_php --> db_php
    dashboard_php --> db_php
    ver_php --> db_php
    db_php --> sql
```

---

## 3. Diagrama de Componentes

```mermaid
graph LR
    subgraph ENTRY["Punto de Entrada"]
        main["main.jsx"]
        app["App.jsx\nRouter + Rutas"]
    end

    subgraph CONTEXT["Capa de Estado"]
        authctx["AuthContext\nProvider"]
    end

    subgraph LAYOUT_LAYER["Capa de Layout"]
        layout_c["Layout\n(Navbar + Outlet)"]
        navbar_c["Navbar\n(logout, nav links)"]
        protected_c["ProtectedRoute\n(guard auth)"]
    end

    subgraph PAGES_LAYER["Páginas"]
        login_p["LoginForm\n/login"]
        register_p["RegisterForm\n/registro"]
        dashboard_p["Dashboard\n/dashboard"]
        clientes_p["Clientes\n/clientes"]
    end

    subgraph DASH_WIDGETS["Widgets Dashboard"]
        usercard["UserInfoCard"]
        statscard["StatsCard"]
        quickpanel["QuickActionsPanel"]
    end

    subgraph UI_LIB["Librería UI Reutilizable"]
        btn["Button"]
        inp["InputField"]
        spin["LoadingSpinner"]
        alrt["Alert"]
        crd["Card"]
        empty_s["EmptyState"]
    end

    subgraph SERVICES_LAYER["Capa de Servicios"]
        api_s["api.js\nAxios instance"]
        valid_s["validation.js\nValidadores"]
    end

    main --> app
    app --> authctx
    app --> protected_c
    app --> login_p
    app --> register_p
    protected_c --> layout_c
    layout_c --> navbar_c
    layout_c --> dashboard_p
    layout_c --> clientes_p
    dashboard_p --> usercard
    dashboard_p --> statscard
    dashboard_p --> quickpanel
    dashboard_p --> api_s
    clientes_p --> api_s
    clientes_p --> empty_s
    login_p --> api_s
    login_p --> valid_s
    login_p --> btn
    login_p --> inp
    register_p --> api_s
    register_p --> valid_s
    register_p --> btn
    register_p --> inp
    navbar_c --> authctx
    protected_c --> authctx
    api_s -->|Axios HTTP| BACKEND["Backend PHP"]
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
