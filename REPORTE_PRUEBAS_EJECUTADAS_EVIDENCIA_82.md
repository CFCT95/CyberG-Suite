# REPORTE DE PLAN DE PRUEBAS EJECUTADAS
## GA9-220501096-AA3-EV01 — Evidencia de Producto

**Programa de Formación:** Análisis y Desarrollo de Software (ADSO)  
**Proyecto:** CyberG Suite  
**Ficha:** 3070422  
**Aprendiz:** Cristian Ferney Castaño Torres  
**Instructor:** Juan Pablo Sierra  
**Fecha:** 5 de Abril de 2026  

---

## 1. Introducción

El presente documento constituye el reporte consolidado de los resultados obtenidos tras la ejecución del plan de pruebas diseñado para el software **CyberG Suite**. En él se presenta la trazabilidad del comportamiento de los módulos críticos (Registro, Autenticación, Seguridad y UI) bajo un entorno controlado de servidor Apache (XAMPP). El objetivo primordial es verificar que el flujo de usuario cumpla con los requerimientos técnicos y funcionales, asegurando que la solución sea fiable y cumpla con los estándares de calidad exigidos.

---

## 2. Alcance y Resumen del Plan de Pruebas

Se ejecutaron un total de **7 casos de prueba**, divididos en dos metodologías:
1.  **Pruebas Manuales (Exploratorias):** Para validar procesos funcionales específicos como el registro de datos y el flujo de recuperación de contraseña.
2.  **Pruebas Automatizadas (E2E):** Utilizando **Node.js + Puppeteer** para verificar la integridad del DOM y el renderizado correcto de la interfaz inicial sin intervención humana.

**Entorno de Ejecución:**
-   **Host:** Localhost (XAMPP 8.2.4) sobre macOS Sequoia.
-   **Motor de Base de Datos:** MariaDB/MySQL.
-   **Navegador:** Microsoft Edge / Chrome (Chromium).

---

## 3. Consolidado de Resultados (Plan Ejecutado)

A continuación, se tabulan los resultados de los casos de prueba ejecutados:

| ID | Nombre del Caso | Tipo de Prueba | Estado | Observaciones |
|---|---|---|---|---|
| **CP-001** | Registro de usuario nuevo | Funcional E2E (Manual) | ✅ **PASÓ** | Usuario "Cristian QA" creado correctamente en DB. |
| **CP-002** | Inicio de sesión exitoso | Funcional E2E (Manual) | ✅ **PASÓ** | Redirección al Dashboard en 1.2 seg. |
| **CP-003** | Login: Contraseña incorrecta | Escenario Negativo | ✅ **PASÓ** | Mensaje "Credenciales incorrectas" visualizado. |
| **CP-004** | Registro: Campos vacíos | Validación Front | ✅ **PASÓ** | Bloqueo nativo del navegador (required). |
| **CP-005** | Dashboard sin sesión activa | Seguridad/Acceso | ✅ **PASÓ** | Redirección automática a login.php. |
| **CP-006** | Recuperación de contraseña | Funcional | ✅ **PASÓ** | Módulo responde sin errores PHP Notice/Warning. |
| **CP-007** | Validación UI: Index structure | Automatizada (Puppeteer) | ✅ **PASÓ** | Encabezado H1 y Título coinciden con diseño. |

**Métrica de Éxito:**
- Total Casos: 7
- **Aprobados: 7 (100%)**
- Fallidos: 0
- Bloqueados: 0

---

## 4. Evidencias Multimedia de Ejecución

Para mantener la trazabilidad, se anexan los enlaces a las capturas de pantalla de los momentos críticos de la ejecución:

### 4.1 Registro y Base de Datos
-   **Formulario de Registro:** [Ver Imagen](evidencias/cp001_registro.png)
-   **Verificación en DB MySQL:** [Ver Imagen](evidencias/cp001_db_registro.png)

### 4.2 Autenticación y Flujos
-   **Login Exitoso:** [Ver Imagen](evidencias/cp002_login_exitoso.png)
-   **Dashboard Principal:** [Ver Imagen](evidencias/cp002_dashboard.png)
-   **Rechazo por Credenciales Erróneas:** [Ver Imagen](evidencias/cp003_login_fallido.png)

### 4.3 Seguridad y Validaciones
-   **Bloqueo de Acceso No Autorizado:** [Ver Imagen](evidencias/cp005_sin_sesion.png)
-   **Formulario de Recuperación:** [Ver Imagen](evidencias/cp006_recuperar.png)

### 4.4 Pruebas Automatizadas (Puppeteer)
-   **Captura E2E Ejecutada:** [Ver Imagen](react-frontend/captura_inicio.png)
-   **Log de Consola:** Se verificó el log de éxito `✅ [Éxito] Todas las validaciones de UI pasaron correctamente.`

---

## 5. Análisis de Hallazgos y Acciones Correctivas

Tras la ejecución, no se detectaron fallos críticos que impidan la puesta en marcha de la fase actual. Sin embargo, se proponen las siguientes acciones de mejora post-ejecución:

1.  **Refactorización de Sesiones:** Aunque el CP-005 pasó, se recomienda implementar un sistema de tokens (JWT) para mayor seguridad en futuras integraciones de API.
2.  **Expansión de E2E:** El CP-007 solo valida el index. Se recomienda programar scripts de Puppeteer que interactúen con el formulario de login para automatizar el ciclo completo de CP-002.
3.  **Sanitización de Entradas:** Implementar validaciones de backend más estrictas para evitar ataques de SQL Injection, más allá de la validación HTML de "campos obligatorios" vista en el CP-004.

---

## 6. Conclusiones

La ejecución de este plan de pruebas confirma que **CyberG Suite** posee una estructura de datos e interfaz estable para su fase de prototipo. La integración exitosa de pruebas manuales y automatizadas con Puppeteer demuestra que el sistema es capaz de manejar flujos básicos de usuario (CRUD y Autenticación) de manera segura y eficiente. 

El 100% de éxito en los casos seleccionados garantiza que los requerimientos de la "Evidencia 82" han sido cumplidos y que el software está listo para una siguiente iteración de escalabilidad.

---

**Repositorio del Proyecto:** [https://github.com/CFCT95/CyberG-Suite](https://github.com/CFCT95/CyberG-Suite)

*Fin del Reporte.*
