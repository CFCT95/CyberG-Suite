# Lista de Chequeo – Evidencia 81
## GA9-220501096-AA2-EV01 – Casos y Ambiente de Pruebas
### Diseña casos y define el ambiente de pruebas de software según proyecto

---

## Datos del Proyecto

| Campo | Valor |
|---|---|
| **Nombre del proyecto** | CyberG Suite |
| **Aprendiz** | Cristian Ferney Castaño Torres – C.C. 1037644717 |
| **Ficha** | 3070422 |
| **Programa** | Análisis y Desarrollo de Software (ADSO) |
| **Repositorio (URL)** | https://github.com/CFCT95/CyberG-Suite |
| **Archivo entregable** | CASOS_PRUEBA_EVIDENCIA_81.md |
| **Herramienta de pruebas** | Node.js + Puppeteer v22 / Revisión manual en navegador |
| **Entorno de prueba** | Web – Apache/XAMPP – macOS |

---

## Lista de Chequeo Evaluada

### 2. Formato / Artefacto de Casos de Prueba

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Incluye "Nombre del proyecto" en el formato de casos de prueba. | **Cumple** | Registrado en encabezado y en cada caso: "CyberG Suite". |
| Incluye "Nombre del caso de prueba". | **Cumple** | Cada caso contiene nombre descriptivo (ej: "Registro exitoso de usuario nuevo"). |
| Incluye "Fecha de revisión". | **Cumple** | Fecha registrada en todos los casos: 05/04/2026. |
| Incluye "Descripción del caso de prueba". | **Cumple** | Cada caso detalla tipo de prueba, cómo se ejecuta y con qué fin. |
| Incluye "Ambiente o entorno de prueba". | **Cumple** | Especificado en cada caso: Web – Apache/XAMPP – macOS – Edge v123. |
| Incluye "Herramienta utilizada". | **Cumple** | Registrada por caso: Puppeteer v22 / revisión manual según aplique. |
| Incluye "Autor del caso de prueba". | **Cumple** | Cristian Ferney Castaño Torres en todos los casos. |
| Incluye "Número de caso" consecutivo. | **Cumple** | Numeración: CP-001 al CP-007. |
| Incluye "Salida esperada". | **Cumple** | Documentada con detalle en cada caso de prueba. |
| Incluye "Salida obtenida". | **Cumple** | Registrado el resultado real obtenido en cada ejecución. |
| Incluye "Resultado". | **Cumple** | Todos marcados como ✅ Aprobado al no encontrar fallos. |
| Incluye "Seguimiento". | **Cumple** | Campo incluido; marcado N/A al no presentarse fallas. |
| Incluye "Severidad". | **Cumple** | Campo incluido; marcado N/A al no presentarse fallas. |
| Incluye "Evidencia". | **Cumple** | Cada caso referencia capturas o logs. CP-007 enlaza a `captura_inicio.png` en repositorio. |
| Incluye "Firma de aprobación". | **Cumple** | Firma registrada en todos los casos: Cristian F. Castaño Torres – Ficha 3070422. |

---

### 3. Diseño de Casos de Prueba

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Los casos están alineados a requerimientos del proyecto. | **Cumple** | Los 7 casos cubren los módulos core del sistema: registro, login, seguridad, recuperación de clave y validación UI. |
| Cada caso describe entradas/precondiciones y pasos de ejecución. | **Cumple** | Campo "Precondiciones" y "Pasos de ejecución" incluidos en todos los casos. |
| Los casos priorizan encontrar errores con mínimo esfuerzo. | **Cumple** | Se priorizaron flujos críticos: autenticación, validación de formularios y control de acceso. |
| Se diseñan casos para escenarios normales y alternos/errores. | **Cumple** | CP-001, CP-002, CP-006 son flujos normales. CP-003 y CP-004 son escenarios alternos/negativos. |
| Coherencia entre descripción, salida esperada y criterio de resultado. | **Cumple** | En todos los casos la salida obtenida coincide con la esperada y el resultado refleja esa consistencia. |

---

### 4. Definición del Ambiente de Pruebas

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| Se especifica si el ambiente es web o escritorio. | **Cumple** | Ambiente Web. Documentado en sección 2 del archivo de casos. |
| Se registran sistemas operativos probados. | **Cumple** | macOS Sequoia 15.x. |
| Se registran navegadores y versiones. | **Cumple** | Microsoft Edge v123 / Google Chrome v123. |
| Se describen servidores/servicios/puertos o configuración relevante. | **Cumple** | Apache 2.4, XAMPP 8.2.4, puerto 8080. |
| Se especifican bases de datos o servicios externos requeridos. | **Cumple** | MySQL 8.0 local (XAMPP). Sin servicios externos. |

---

### 5. Evidencias y Verificación

| Ítem | Estado | Evidencia / Observaciones |
|---|---|---|
| El archivo entregable se puede abrir correctamente. | **Cumple** | Documento Markdown accesible vía repositorio GitHub: https://github.com/CFCT95/CyberG-Suite |
| Se incluyen evidencias asociadas a cada caso. | **Cumple** | CP-007 referencia `captura_inicio.png`. Los demás casos manuales documentan el resultado observado. |
| Cuando hay fallas: se registra seguimiento y severidad. | **Cumple** | No se registraron fallas. Campo incluido y marcado N/A en todos los casos. |
| Los resultados están diligenciados y justificables. | **Cumple** | Todos los casos registran "Aprobado" con la salida obtenida que lo justifica. |
| El archivo está ordenado y con encabezados claros. | **Cumple** | Estructura clara con tablas Markdown por secciones numeradas. |

---

## Resumen Ejecutivo

| Categoría | Ítems | Cumple | Parcial | No Cumple |
|---|---|---|---|---|
| 2. Formato de casos de prueba | 15 | 15 | 0 | 0 |
| 3. Diseño de casos de prueba | 5 | 5 | 0 | 0 |
| 4. Definición del ambiente | 5 | 5 | 0 | 0 |
| 5. Evidencias y verificación | 5 | 5 | 0 | 0 |
| **TOTAL** | **30** | **30** | **0** | **0** |

**Porcentaje de cumplimiento:** 30/30 = **100% Cumple**

---

*Documento generado: 5 de Abril de 2026*
*Evidencia: GA9-220501096-AA2-EV01 – Casos y Ambiente de Pruebas*
*Proyecto: CyberG Suite – Ficha 3070422*
