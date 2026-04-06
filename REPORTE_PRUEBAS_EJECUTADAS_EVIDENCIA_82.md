# REPORTE DE PLAN DE PRUEBAS EJECUTADAS
## GA9-220501096-AA3-EV01 — Evidencia de Producto

| **Módulo** | **GA9-220501096-AA3-EV01** |
|---|---|
| **Programa** | Análisis y Desarrollo de Software (ADSO) |
| **Proyecto** | CyberG Suite |
| **Ficha** | 3070422 |
| **Aprendiz** | Cristian Ferney Castaño Torres |
| **Instructor** | Juan Pablo Sierra |
| **Fecha de entrega** | 5 de Abril de 2026 |

---

## 📑 Control de Versiones

| Versión | Fecha | Autor | Detalle del Cambio |
|---|---|---|---|
| 1.0 | 05/04/2026 | Cristian Ferney Castaño Torres | Creación del reporte inicial consolidado. |
| 1.1 | 05/04/2026 | Cristian Ferney Castaño Torres | Mejora de trazabilidad y enlaces de evidencias. |

---

## 🔝 Tabla de Contenidos
1.  [Introducción](#1-introducción)
2.  [Trazabilidad de la Fase de Pruebas](#2-trazabilidad-de-la-fase-de-pruebas)
3.  [Alcance y Resumen del Plan](#3-alcance-y-resumen-del-plan)
4.  [Consolidado de Resultados](#4-consolidado-de-resultados)
5.  [Evidencias Multimedia](#5-evidencias-multimedia)
6.  [Análisis de Hallazgos y Acciones](#6-análisis-de-hallazgos-y-acciones)
7.  [Conclusiones](#7-conclusiones)

---

## 1. Introducción

El presente documento constituye el reporte consolidado de los resultados obtenidos tras la ejecución del plan de pruebas diseñado para el software **CyberG Suite**. En él se presenta la trazabilidad del comportamiento de los módulos críticos (Registro, Autenticación, Seguridad y UI) bajo un entorno controlado de servidor Apache (XAMPP). El objetivo primordial es verificar que el flujo de usuario cumpla con los requerimientos técnicos y funcionales, asegurando una solución íntegra y profesional.

## 2. Trazabilidad de la Fase de Pruebas

Este reporte es la culminación de un proceso dividido en tres hitos técnicos fundamentales:
-   **Planificación:** Definición de la estrategia (Ver [Evidencia 80 - Informe de Pruebas](INFORME_PRUEBAS_SOFTWARE_EVIDENCIA_80.md)).
-   **Diseño:** Creación de los casos de prueba detallados (Ver [Evidencia 81 - Casos de Prueba](CASOS_PRUEBA_EVIDENCIA_81.md)).
-   **Ejecución:** Consolidado final y reporte de trazabilidad (Módulo actual GA9-220501096-AA3-EV01).

## 3. Alcance y Resumen del Plan de Pruebas

Se ejecutaron un total de **7 casos de prueba**, divididos en dos metodologías:
1.  **Pruebas Manuales (Black-Box):** Validación funcional de procesos como el registro de datos y recuperación de contraseña.
2.  **Pruebas Automatizadas (E2E):** Ejecución con **Node.js + Puppeteer** para verificar la integridad del DOM y el renderizado correcto de la interfaz inicial sin intervención humana.

**Entorno de Ejecución:**
-   **Servidor:** Localhost (XAMPP 8.2.4 - Apache 2.4 / MariaDB 10.4).
-   **Browser:** Headless Chromium (Puppeteer) / Edge v123.
-   **Sistema Operativo:** macOS Sequoia.

## 4. Consolidado de Resultados

A continuación, se tabulan los resultados de los casos de prueba ejecutados:

| ID | Nombre del Caso | Tipo de Prueba | Estado | Observaciones |
|---|---|---|---|---|
| **CP-001** | Registro de usuario nuevo | Funcional E2E | ✅ **PASÓ** | Registro persistido en tabla `usuarios`. |
| **CP-002** | Inicio de sesión exitoso | Funcional E2E | ✅ **PASÓ** | Redirección correcta a `dashboard.php`. |
| **CP-003** | Login: Contraseña incorrecta | Negativa | ✅ **PASÓ** | Mensaje de alerta visualizado correctamente. |
| **CP-004** | Registro: Campos vacíos | Validación Front | ✅ **PASÓ** | Bloqueo por atributos `required` en HTML5. |
| **CP-005** | Dashboard sin sesión activa | Seguridad | ✅ **PASÓ** | Redirección forzada por script de sesión. |
| **CP-006** | Recuperación de contraseña | Funcional | ✅ **PASÓ** | Módulo procesa el POST sin errores. |
| **CP-007** | Validación UI automatizada | E2E (Puppeteer) | ✅ **PASÓ** | Título y H1 validados via script Node.js. |

---

## 5. Evidencias Multimedia

Para mantener la trazabilidad técnica, se anexan los enlaces a las capturas alojadas en este repositorio:

| Referencia | Momento de Prueba | Enlace de Evidencia |
|---|---|---|
| **Registro** | Formulario en blanco / POST exitoso | [Ver Captura](evidencias/cp001_registro.png) |
| **Base de Datos** | Verificación de persistencia en MySQL | [Ver Captura](evidencias/cp001_db_registro.png) |
| **Login** | Pantalla de inicio de sesión | [Ver Captura](evidencias/cp002_login_exitoso.png) |
| **Dashboard** | Vista principal del sistema (Logueado) | [Ver Captura](evidencias/cp002_dashboard.png) |
| **Fallo Login** | Alerta de credenciales inválidas | [Ver Captura](evidencias/cp003_login_fallido.png) |
| **Seguridad** | Intento de acceso directo sin sesión | [Ver Captura](evidencias/cp005_sin_sesion.png) |
| **E2E UI** | Captura automática de Puppeteer | [Ver Captura](react-frontend/captura_inicio.png) |

## 6. Análisis de Hallazgos y Acciones Correctivas

Tras la ejecución, no se detectaron bloqueadores críticos. Se sugieren mejoras de evolución:
1.  **JWT Implementation:** Reemplazar las sesiones PHP nativas por tokens para mejorar la seguridad en despliegues distribuidos.
2.  **Validación Backend:** Añadir `filter_var` y `password_hash` con salt dinámico para robustecer la protección de datos en `db.php`.
3.  **Continuous testing:** Integrar Puppeteer con un corredor de pruebas como `Mocha` para reportes XML automatizados.

## 7. Conclusiones

Tras completar la ejecución de este plan de pruebas, puedo concluir que **CyberG Suite** presenta un nivel de estabilidad sólido para esta etapa del desarrollo. Haber pasado el 100% de los casos seleccionados no es solo una métrica, sino la confirmación de que los flujos críticos —especialmente el registro, la autenticación y la seguridad de acceso— están funcionando como se esperaba. 

Esta fase de pruebas me ha permitido validar que la base del software es confiable y que la estructura de datos es íntegra. Con estos resultados, tenemos luz verde para seguir escalando el proyecto y enfocarnos en integrar nuevas funcionalidades en las próximas iteraciones, sabiendo que contamos con un núcleo funcional bien testeado.

---

**Repositorio del Proyecto:** [https://github.com/CFCT95/CyberG-Suite](https://github.com/CFCT95/CyberG-Suite)

*Documento generado: 5 de Abril de 2026*  
*ADSO - CyberG Suite*
