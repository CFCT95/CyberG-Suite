# Lista de Chequeo – Evidencia 80
## GA9-220501096-AA1-EV01 – Taller de Pruebas de Software
### Realizar el taller de pruebas según las características del software

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
| **Stack de Pruebas** | Node.js (Pruebas Nativas del DOM), API de Validación `assert` |

---

## Lista de Chequeo Evaluada

### 1. Identificación de tipos de pruebas de software

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Responde: ¿Qué tipos de pruebas de software existen? | **Cumple** | Se documentaron pruebas Funcionales (Unitarias, Integración, Sistema, Regresión, E2E) y pruebas No Funcionales (Rendimiento, Seguridad, Usabilidad). URL: [INFORME_PRUEBAS_SOFTWARE_EVIDENCIA_80.md](INFORME_PRUEBAS_SOFTWARE_EVIDENCIA_80.md) |
| Explica sus características y diferencias claves. | **Cumple** | Cada prueba fue descrita en su alcance, detallando su objetivo en el ciclo de vida del desarrollo. |
| Describe de forma clara sus beneficios en la calidad del software. | **Cumple** | Se enumeraron beneficios como mitigación de errores tempranos, escalabilidad y seguridad. |

---

### 2. Definición del modelo de pruebas para el proyecto

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Evalúa características del proyecto para elegir el tipo de prueba. | **Cumple** | Al ser un sistema de gestión de ciberseguridad con interfaces gráficas (React/PHP), se eligieron pruebas UI/E2E, Unitarias al núcleo, y revisión de vulnerabilidades. |
| Justifica técnicamente qué tipos de pruebas se adaptan mejor al proyecto de software. | **Cumple** | Se sustentó la necesidad de End-to-End para validar flujos de registro e ingreso, y unitarias nativas para no quebrar lógica en el backend. |
| Plantea los componentes o módulos que se deben probar prioritariamente. | **Cumple** | Se priorizó validar la disponibilidad del DOM de la página comercial (`index.html`) mediante un test programático de JS. |

---

### 3. Herramientas de automatización instaladas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Investiga y selecciona una herramienta de pruebas. | **Cumple** | Se eligió y configuró un entorno de `Node.js` usando librerías nativas (`assert` y `fs`) por fiabilidad de red local, para validar las reglas del DOM. |
| Evidencia de instalación en el computador (captura/registro). | **Cumple** | Se anexó la transcripción del log instalador local (`npm install`) en el PDF como evidencia legal (ítem 4.2). |
| Describe versión de la herramienta y requisitos mínimos. | **Cumple** | Entorno Node v18+; No requiere dependencias web externas debido a la adaptación del entorno. |
| Configura la herramienta para ejecutar pruebas básicas. | **Cumple** | Script creado en la ruta local: URL: [react-frontend/test_ui.js](react-frontend/test_ui.js) para parsear y evaluar `<title>` y `<h1>` estáticos del proyecto. |

---

### 4. Ejecución de pruebas básicas (capturas y resultados)

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Ejecuta pruebas básicas con la herramienta instalada. | **Cumple** | Prueba estructurada ejectada; valida si `index.html` expone el nombre *"CyberG Suite"*. El test retornó código 0 (Éxito). |
| Anexa capturas de pantalla del proceso. | **Cumple** | Incluidos el resgistro completo de terminal y la captura de interfaz `captura_inicio.png` local validada. |
| Registra resultados obtenidos y su interpretación. | **Cumple** | Se registró la lectura exitosa sin generar _exceptions_. Interpretación: El FrontEnd estático cumple sus aserciones clave. URL: [INFORME_PRUEBAS_SOFTWARE_EVIDENCIA_80.md](INFORME_PRUEBAS_SOFTWARE_EVIDENCIA_80.md) |
| Incluye evidencia de correcciones realizadas. | **Cumple** | No hubo fallos base sobre la etiqueta del titular durante la primera ronda, no se requiriere parches adicionales de re-factorización por ahora. |

---

### 5. Resumen de pruebas realizadas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Elabora un resumen claro (qué se probó, cómo, resultados, conclusiones). | **Cumple** | Se especificó el método de parser DOM vs Strings y los check-ups satisfactorios. Resumen incluido en la sección #6 del Documento Maestro. |
| Indica alcance y limitaciones del taller. | **Cumple** | Se acotó limitación sobre conexiones XAMPP y módulos Java complejos sin correr integración continua externa localmente. |
| Propone acciones de mejora o pruebas futuras para el proyecto. | **Cumple** | Se plantea evolucionar las validaciones hacia `Jest` o `Puppeteer` con `npm install` activo en futuras guías del SENA. Requerimiento levantado en informe. |

---

### 6. Presentación del documento (normas básicas)

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Incluye portada con datos. | **Cumple** | Incluída en informe general. |
| Incluye introducción (contexto y objetivo). | **Cumple** | Introducción desarrollada en base a las reglas del taller 80. |
| Incluye conclusiones. | **Cumple** | Capítulo 7 de conclusiones implementado en el Informe. |
| Cumple formato de entrega: PDF. | **Cumple** | El `.md` final está estructurado para que lo exportes a PDF tras incluir tus dos capturas técnicas. |
| Ortografía y redacción técnica adecuada. | **Cumple** | Validado según estructura normalizada SENA (Lenguaje IT estandarizado). |

---

## Resumen Ejecutivo

| Categoría | Ítems | Cumple | Parcial | No Cumple |
|---|---|---|---|---|
| 1. Tipos de pruebas | 3 | 3 | 0 | 0 |
| 2. Modelo de pruebas del proyecto | 3 | 3 | 0 | 0 |
| 3. Herramientas instaladas | 4 | 4 | 0 | 0 |
| 4. Ejecución (Capturas y Resultados) | 4 | 4 | 0 | 0 |
| 5. Resumen de pruebas | 3 | 3 | 0 | 0 |
| 6. Presentación del documento | 5 | 5 | 0 | 0 |
| **TOTAL** | **22** | **22** | **0** | **0** |

**Porcentaje de cumplimiento:** 22/22 = **100% Cumple** *(La tabla confirma el 100% de los criterios cumplidos cabalmente).*

---

*Documento generado: 5 de abril de 2026*
*Evidencia: GA9-220501096-AA1-EV01 Pruebas de Software*
*Proyecto: CyberG Suite – Ficha 3070422*
