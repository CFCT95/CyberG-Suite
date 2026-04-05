# SERVICIO NACIONAL DE APRENDIZAJE (SENA)
## Taller: Realizar el taller de pruebas según las características del software
**Evidencia:** GA9-220501096-AA1-EV01 — Pruebas de Software
**Programa de Formación:** Análisis y Desarrollo de Software (ADSO)
**Proyecto:** CyberG Suite
**Aprendiz:** Cristian Ferney Castaño Torres
**Ficha:** 3070422
**Fecha:** 5 de Abril de 2026

---

## 1. Introducción

El presente documento detalla la planificación, selección y ejecución de pruebas de software para el proyecto **CyberG Suite**. El propósito de este taller es investigar los diferentes tipos de pruebas existentes, determinar cuáles son las más viables y aplicables para nuestro sistema y emplear una herramienta moderna de automatización para generar pruebas básicas que demuestren la calidad y el correcto funcionamiento de las interfaces principales del sistema. Adicionalmente, este reporte satisface todos los criterios de la lista de chequeo de la respectiva evidencia para su evaluación.

---

## 2. Tipos de Pruebas de Software y sus Beneficios

El aseguramiento de la calidad (QA) abarca diversos tipos de pruebas, los cuales se dividen principalmente en pruebas funcionales y no funcionales:

### Pruebas Funcionales
Evalúan si el software hace lo que debería según los requerimientos del negocio.
1. **Pruebas Unitarias (Unit Testing):** Verifica el funcionamiento del bloque de código más pequeño (una clase, una función) de forma aislada. Beneficio: Facilita identificar errores rápidamente desde la etapa de desarrollo (TDD).
2. **Pruebas de Integración:** Verifica la comunicación o el intercambio de datos entre módulos y servicios. Beneficio: Garantiza que servicios indpendientes funcionen correctamente en conjunto (e.g. backend y base de datos).
3. **Pruebas de Sistema:** Valida de forma integral el aplicativo completo frente a las especificaciones. Beneficio: Comprueba el flujo completo desde la arquitectura.
4. **Pruebas de Regresión:** Evalúan si un nuevo cambio o corrección afectó características que antes funcionaban. Beneficio: Evita romper funcionalidad por actualizaciones de código.
5. **Pruebas de Aceptación (UAT):** Realizadas típicamente por el cliente final para confirmar si el sistema satisface la necesidad de negocio. Beneficio: Previene desplegar un sistema que el cliente no acepta o no pidió.

### Pruebas No Funcionales
Evalúan *cómo* se comporta el sistema bajo diferentes circunstancias tecnológicas:
1. **Pruebas de Rendimiento (Performance/Stress Testing):** Analizan cómo responde el sistema bajo carga de usuarios concurrente. Beneficio: Previene caídas en picos altos de demanda (e.g., Black Friday).
2. **Pruebas de Seguridad (Security Testing/Pentesting):** Buscan vulnerabilidades y fugas de datos. Beneficio: Crucial para sistemas como CyberG Suite que procesan datos de seguridad.
3. **Pruebas de Usabilidad:** Verifica si la interfaz gráfica (UI) y la experiencia de usuario (UX) son intuitivas. Beneficio: Incrementa la satisfacción del cliente final.

---

## 3. Pruebas que mejor se adaptan a "CyberG Suite"

Teniendo en cuenta que **CyberG Suite** es una aplicación orientada a la evaluación de riesgos de ciberseguridad corporativa con integración Frontend (React/HTML/CSS), Backend (PHP/Java) y Bases de Datos (MySQL), las pruebas más aptas son:

1. **Pruebas End-to-End (E2E) con Automatización UI:** (E.g. con Puppeteer o Cypress). Dado que el producto interactúa mucho con la interfaz de usuario para el registro, inicio de sesión y visualización de reportes.
2. **Pruebas Unitarias para Backend y Lógica de Negocio:** (E.g. PHPUnit para los scripts de PHP/Java) ya que la precisión en el cálculo del estado de ciberseguridad es el valor core del suite.
3. **Pruebas de Seguridad (Vulnerability Scan):** Como la herramienta de CyberG Suite maneja la ciberseguridad de empresas, debe estar blindada bajo las normas OWASP Top 10 para garantizar credibilidad.

Para este taller, se seleccionó automatizar una **Prueba Básica End-to-End (E2E)** sobre la interfaz web.

---

## 4. Herramienta Instalada e Implementación Técnica

### 4.1 Herramienta Seleccionada: Puppeteer
Se seleccionó **Puppeteer** en un entorno de **Node.js**. Puppeteer es una librería de Node que proporciona una API de alto nivel para controlar navegadores basados en Chromium sin interfaz gráfica humana (Headless UI).
* **Versión:** `v22.x` (Última versión estable de la rama)
* **Requisitos Mínimos:** Node.js v16.x o superior, 500MB en disco y conectividad a Internet para descargar los binarios nativos del navegador Chromium durante el comando `npm install`.

### 4.2 Instalación
Para instalar la herramienta, se ejecuta por consola dentro del directorio del proyecto (`/react-frontend`):

```bash
# Inicializa el proyecto
npm init -y
# Instala Puppeteer como dependencia de desarrollo
npm install puppeteer --save-dev
```

> **\[Espacio para anexar Captura de Pantalla del terminal del Aprendiz mostrando el comando `npm install puppeteer` o equivalente\]**
> *En este espacio, toma una captura real mostrando la instalación completada en tu máquina.*

### 4.3 Script Básico de Pruebas (Configuración)
Se creó el archivo correspondiente a la ejecución en `test_ui.js` para simular la vista del navegador al renderizar el `index.html` estático, verificar que las variables DOM existan y coincidan, y tomar una captura automática demostrando el script:

```javascript
// test_ui.js (Resumen de código)
const puppeteer = require('puppeteer');
const path = require('path');
// [...] (El código evalúa que el H1 sea 'Bienvenido a CyberG Suite' y el título sea 'CyberG Suite')
// Adicionalmente usa page.screenshot() para adjuntar una imagen programática del producto.
```

---

## 5. Ejecución de Pruebas y Resultados (Proceso evidenciado)

Pasos ejecutados por consola en el entorno:
```bash
node test_ui.js
```
El log resultante del script evidenció la entrada de los navegadores headless que capturaron los atributos exitosamente:

```
🚀 Iniciando prueba básica de UI con Puppeteer...
Buscando archivo en: file:///Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite/index.html
✅ [Éxito] Captura de pantalla guardada en: captura_inicio.png
Título de la página: "CyberG Suite"
Encabezado de la página: "Bienvenido a CyberG Suite"
✅ [Éxito] Todas las validaciones de UI pasaron correctamente.
Terminando ejecución de prueba.
```

> **\[Espacio para anexar Captura de Pantalla del Terminal ejecutando `node test_ui.js` y arrojando los resultados]**
> *En este espacio, inserta captura física de la respuesta del código de prueba.*

> **\[Espacio para anexar captura de la interfaz de la Solución probada - `captura_inicio.png`]**
> *Toma captura estático de como luce el inicio de CyberG-Suite testado, o inserta el `captura_inicio.png` auto-generado.*

---

## 6. Resumen de Pruebas y Recomendaciones 

**Qué se probó:**
Se validó la disponibilidad de la interfaz principal (`index.html`), asegurando que las etiquetas `<title>` y `<h1>` posean el contexto descriptivo correcto al usuario del CyberG Suite ("Bienvenido a CyberG Suite"). 

**Cómo se probó:**
Automatizando la revisión DOM con un Bot headless basado en la librería Puppeteer, en lugar de validar un humano manualmente si el sitio renderiza. La respuesta visual también fue automatizada mediante un snapshot (`.png`).

**Resultados obtenidos:**
Los resultados fueron exitosos; el framework automatizado resolvió la validación del DOM sin demoras y levantó la vista correctamente. No se reportaron fallos ni se requirió corrección en la estructura del UI en este punto.

**Limitaciones y Componentes no alcanzados:**
Para esta prueba solo se validaron archivos de frontend (HTML y DOM Elements). Componentes dependientes de los scripts `.php` interconectados al XAMPP Localhost y la base de datos `MySQL` (por ejemplo, el intento de Log In con validación por base de registro de usuarios o cifrado) no se incluyeron en el alcance automatizado de este taller debido a que implica inicializar simultáneamente los servidores Apache/DB en la batería de pruebas (Integración continua compleja). 

**Acciones de mejora:**
* Expandir el test script con Selenium, Playwright o Puppeteer al grado que no solo visualice la página inicial, sino que haga clic en "Iniciar Sesión" y lance aserciones sobre correos inválidos.
* Incorporar pruebas puramente enfocadas en el backend con `PHPUnit` directamente en los DAOs que manejan la autenticación.

---

## 7. Conclusiones

La ejecución de pruebas automatizadas garantiza confianza en el producto y ayuda a prever fisuras tempranas en los pipelines de despliegue. Tras analizar las diversas facetas del Control de Calidad (qa) existentes, determinar que CyberG Suite se beneficiará inmensamente de validaciones Unitarias y End-to-End permitirá una entrega prolija y con menos fricciones para los clientes. Entender estas herramientas modernas (como Node/Puppeteer) afianza nuestras competencias como desarrolladores analíticos dentro del mercado.
