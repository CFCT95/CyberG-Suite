# INFORME TÉCNICO DE PLAN DE TRABAJO PARA CONSTRUCCIÓN DE SOFTWARE
## Herramientas y Tecnologías de Versionamiento e Integración Continua
### Proyecto: CyberG Suite

---

**Evidencia de Conocimiento:** 64. GA7-220501096-AA1-EV01

**Presentado por:** Cristian Ferney Castaño Torres

**Documento:** C.C 1037644717

**Asignatura:** Análisis y Desarrollo de Software

**Ficha:** 3070422

**Fecha:** 25 de noviembre de 2025

**Versión del Documento:** 1.0

**Proyecto:** CyberG Suite - Sistema de Evaluación de Ciberseguridad

---

## ÍNDICE

1. [Portada](#portada)
2. [Introducción](#introducción)
3. [Objetivo](#objetivo)
4. [Características del Proyecto CyberG Suite](#características-del-proyecto-cyberg-suite)
5. [Selección de Herramientas de Versionamiento](#selección-de-herramientas-de-versionamiento)
6. [Herramientas de Integración Continua (CI/CD)](#herramientas-de-integración-continua-cicd)
7. [Estrategia de Versionamiento](#estrategia-de-versionamiento)
8. [Flujo de Trabajo Recomendado](#flujo-de-trabajo-recomendado)
9. [Conclusiones](#conclusiones)
10. [Referencias](#referencias)

---

## INTRODUCCIÓN

En el desarrollo de software actual, trabajar sin control de versiones adecuado puede generar problemas serios. Necesitamos herramientas que nos permitan rastrear cambios, colaborar sin conflictos y mantener la calidad del código a medida que el proyecto crece.

**CyberG Suite** es una aplicación web en PHP con MySQL que ayuda a las empresas a evaluar su nivel de ciberseguridad. Incluye autenticación de usuarios, gestión de sesiones, un dashboard personalizado, recuperación de contraseñas y visualización de registros.

Dado que el proyecto maneja información sensible relacionada con seguridad, necesitamos un sistema de versionamiento confiable y procesos automatizados que validen el código antes de que llegue a producción.

En este documento se detallan las herramientas de versionamiento e integración continua que se utilizarán en CyberG Suite, explicando por qué fueron elegidas y cómo se implementarán en el proyecto. Los conceptos presentados están basados en los contenidos del componente "Integración Continua" del programa de formación del SENA.

---

## OBJETIVO

Este informe tiene como propósito:

1. Definir qué herramientas de control de versiones usaremos en CyberG Suite y por qué.

2. Establecer cómo organizaremos el trabajo con ramas y commits para que el equipo pueda colaborar sin problemas.

3. Configurar un sistema de integración continua que ejecute pruebas y validaciones automáticamente cada vez que se haga un cambio.

4. Documentar el proceso de trabajo diario, desde crear una nueva funcionalidad hasta desplegarla en producción.

5. Compartir las prácticas que seguiremos para mantener el código organizado y de calidad.

---

## CARACTERÍSTICAS DEL PROYECTO CYBERG SUITE

Para elegir las herramientas adecuadas, primero revisemos qué tecnologías usa el proyecto:

### Stack Tecnológico
- **Lenguaje de Programación:** PHP 7.4+
- **Base de Datos:** MySQL 5.7+
- **Frontend:** HTML5, CSS3, JavaScript
- **Servidor Web:** Apache (XAMPP para desarrollo)
- **Sistema Operativo:** Multiplataforma (Windows, Linux, macOS)

### Arquitectura del Proyecto
- Aplicación web monolítica con separación de responsabilidades
- Sistema de autenticación basado en sesiones
- Conexión a base de datos mediante MySQLi
- Estructura de archivos organizada por funcionalidad

### Requisitos de Seguridad
- Manejo de información sensible (contraseñas hasheadas)
- Protección contra SQL Injection mediante prepared statements
- Gestión segura de sesiones
- Validación de datos en servidor

### Equipo de Desarrollo
- Proyecto académico/educativo
- Potencial para crecimiento en número de desarrolladores
- Necesidad de colaboración y revisión de código

---

## SELECCIÓN DE HERRAMIENTAS DE VERSIONAMIENTO

### 1. Sistema de Control de Versiones Distribuido (DVCS)

#### **Git**

Git es la opción más usada en la industria y la que implementaremos en CyberG Suite. Cada desarrollador tiene una copia completa del historial, lo que permite trabajar sin conexión y tener respaldo local. Las operaciones son rápidas incluso con proyectos grandes, y el sistema de ramas permite que varios desarrolladores trabajen en paralelo sin interferirse.

Además, Git se integra bien con herramientas de CI/CD y la mayoría de desarrolladores ya lo conocen, lo que facilita incorporar nuevos miembros al equipo.

Usaremos Git versión 2.30 o superior.

### 2. Plataforma de Hosting de Repositorios

#### **GitHub**

GitHub será nuestra plataforma principal para alojar el código. Es gratuita para proyectos públicos y educativos, lo que encaja perfecto con CyberG Suite. Lo mejor es que GitHub Actions viene integrado, así que podemos configurar CI/CD sin necesidad de servicios externos.

Los Pull Requests nos ayudan a revisar código antes de integrarlo, y las Issues sirven para gestionar tareas y reportar bugs. También podemos usar GitHub Pages para documentación si lo necesitamos.

Consideramos GitLab y Bitbucket, pero GitHub tiene más adopción y un ecosistema más amplio de herramientas, lo que facilita encontrar soluciones y tutoriales cuando surgen dudas.

El repositorio actual está en: https://github.com/CFCT95/CyberG-Suite.git

### 3. Estrategia de Ramas (Branching Strategy)

#### **Git Flow**

Usaremos Git Flow para organizar el trabajo. La estructura de ramas será así:

```
main/master          → Código en producción
├── develop          → Rama de desarrollo principal
├── feature/*        → Nuevas funcionalidades
├── bugfix/*         → Corrección de bugs
├── hotfix/*         → Correcciones urgentes en producción
└── release/*        → Preparación de releases
```

Esta estructura separa claramente el código en desarrollo del que está en producción, permite que varios desarrolladores trabajen en paralelo y facilita hacer releases controlados. Si el equipo es muy pequeño, podemos simplificar usando GitHub Flow (solo main y feature branches), pero Git Flow funciona mejor cuando el proyecto necesita mantenimiento a largo plazo.

---

## HERRAMIENTAS DE INTEGRACIÓN CONTINUA (CI/CD)

### 1. Plataforma de CI/CD

#### **GitHub Actions**

GitHub Actions es la opción más práctica porque ya está integrado con nuestro repositorio. No necesitamos configurar servicios externos, es gratuito para repositorios públicos (2,000 minutos al mes) y la configuración se hace con archivos YAML que versionamos junto al código.

El marketplace tiene muchas acciones ya listas para usar, y podemos ejecutar los workflows en Windows, Linux o macOS según necesitemos.

Un ejemplo de cómo configuraríamos el workflow:

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '7.4'
      - name: Validate PHP syntax
        run: find . -name "*.php" -exec php -l {} \;
      - name: Run security checks
        run: composer require --dev phpstan/phpstan
```

### 2. Herramientas de Análisis de Código

#### **PHPStan**

PHPStan revisa el código PHP sin ejecutarlo y encuentra errores que podrían pasar desapercibidos. Esto mejora la calidad del código y hace que sea más fácil mantenerlo. Se integra fácilmente con GitHub Actions para que corra automáticamente en cada commit.

#### **PHP_CodeSniffer**

Esta herramienta verifica que el código siga un estilo consistente. Podemos configurarlo para que siga estándares como PSR-12, lo que hace que el código sea más uniforme y fácil de revisar.

#### **SonarQube (Opcional)**

SonarQube hace un análisis más profundo del código, detecta vulnerabilidades de seguridad y muestra métricas sobre la deuda técnica. Es útil, pero requiere tener un servidor propio o pagar por el servicio, así que lo dejamos como opción para más adelante.

### 3. Herramientas de Testing

#### **PHPUnit**

PHPUnit es el framework de pruebas más usado en PHP. Se integra bien con GitHub Actions y nos permite escribir pruebas que se ejecuten automáticamente. Podemos usarlo para hacer desarrollo dirigido por pruebas (TDD) si queremos.

Implementaremos pruebas unitarias para las funciones críticas como autenticación y validación, pruebas de integración para verificar la conexión a la base de datos, y pruebas de seguridad para asegurarnos de que no haya vulnerabilidades de SQL Injection.

### 4. Herramientas de Despliegue Automático

#### **GitHub Actions + Servidor de Producción**

Usaremos GitHub Actions para automatizar los despliegues. Cuando todas las pruebas pasen, el código se desplegará automáticamente a un servidor de staging primero, y luego a producción. Si algo falla, podemos configurar un rollback automático.

Otras opciones que podríamos considerar son Deployer (específico para PHP) o Capistrano (multiplataforma), pero GitHub Actions nos da suficiente flexibilidad para empezar.

---

## ESTRATEGIA DE VERSIONAMIENTO

### 1. Convención de Nombres de Commits

Seguiremos el formato de Conventional Commits para que los mensajes sean claros y consistentes:

```
<tipo>(<ámbito>): <descripción>

[body opcional]

[footer opcional]
```

Los tipos que usaremos son:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (sin afectar código)
- `refactor`: Refactorización de código
- `test`: Adición o modificación de pruebas
- `chore`: Tareas de mantenimiento

Algunos ejemplos de cómo escribiríamos los commits:
```
feat(auth): Agregar recuperación de contraseña
fix(db): Corregir conexión MySQL en puerto 3307
docs(readme): Actualizar instrucciones de instalación
```

### 2. Versionado Semántico (Semantic Versioning)

Usaremos versionado semántico con el formato `MAJOR.MINOR.PATCH`:

- **MAJOR:** Cambios incompatibles con versiones anteriores
- **MINOR:** Nuevas funcionalidades compatibles hacia atrás
- **PATCH:** Correcciones de bugs compatibles

Por ejemplo, `v1.2.3` significa que es la versión 1, con 2 nuevas funcionalidades y 3 correcciones de bugs.

Para marcar las versiones, crearemos tags en Git con comandos como `git tag -a v1.0.0 -m "Release inicial"` y usaremos GitHub Releases para documentar qué cambió en cada versión.

### 3. Archivos de Configuración de Versionamiento

#### **.gitignore**

Necesitamos un archivo `.gitignore` para evitar subir archivos sensibles o temporales al repositorio. Incluiremos cosas como:

```
# Archivos de configuración sensibles
db.php.local
config.local.php

# Archivos temporales
*.log
*.tmp
.DS_Store

# Dependencias (si se usa Composer)
/vendor/

# Archivos del IDE
.idea/
.vscode/
*.swp
```

#### **.gitattributes**

El archivo `.gitattributes` normaliza cómo Git maneja los finales de línea y otros aspectos de los archivos:

```
* text=auto
*.php text eol=lf
*.html text eol=lf
*.css text eol=lf
*.sql text eol=lf
```

---

## FLUJO DE TRABAJO

### 1. Flujo de Desarrollo Diario

```
1. Actualizar rama local:
   git checkout develop
   git pull origin develop

2. Crear rama de feature:
   git checkout -b feature/nueva-funcionalidad

3. Desarrollar y hacer commits:
   git add .
   git commit -m "feat(scope): descripción"

4. Subir cambios:
   git push origin feature/nueva-funcionalidad

5. Crear Pull Request en GitHub

6. Revisión de código y merge a develop

7. Después de pruebas, merge a main
```

### 2. Pipeline de CI/CD Completo

```
┌─────────────┐
│   Push/PR   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  GitHub Actions  │
│  (Trigger CI)    │
└──────┬──────────┘
       │
       ├──► Validación de sintaxis PHP
       ├──► Análisis estático (PHPStan)
       ├──► Verificación de estándares (CodeSniffer)
       ├──► Ejecución de pruebas (PHPUnit)
       └──► Análisis de seguridad
       │
       ▼
   ┌───────┐
   │ ¿Pasan │
   │ pruebas?│
   └───┬───┘
       │
   ┌───┴───┐
   │       │
   NO     SÍ
   │       │
   ▼       ▼
┌─────┐ ┌──────────┐
│Fail │ │ Deploy to│
│PR   │ │ Staging  │
└─────┘ └────┬─────┘
             │
             ▼
        ┌─────────┐
        │ Tests   │
        │ Manual  │
        └────┬────┘
             │
             ▼
        ┌─────────┐
        │ Deploy  │
        │Production│
        └─────────┘
```

### 3. Checklist Pre-Commit

Antes de hacer commit, revisamos:
- [ ] El código sigue los estándares de estilo
- [ ] No hay credenciales hardcodeadas
- [ ] El código complejo tiene comentarios
- [ ] El mensaje de commit es descriptivo
- [ ] Las pruebas locales pasan

---

## HERRAMIENTAS ADICIONALES

### 1. Pre-commit Hooks

El framework `pre-commit` ejecuta validaciones automáticas antes de cada commit. Esto evita que subamos código con problemas y ahorra tiempo porque no tenemos que esperar a que falle el pipeline de CI.

### 2. Dependabot (GitHub)

Dependabot actualiza automáticamente las dependencias del proyecto, alerta sobre vulnerabilidades de seguridad y crea pull requests con las actualizaciones. Es útil para mantener el proyecto actualizado sin tener que revisar manualmente.

### 3. CodeQL (GitHub)

CodeQL hace análisis de seguridad automatizado y detecta vulnerabilidades comunes en el código. Es gratuito para repositorios públicos y se integra directamente con GitHub.

---

## RECURSOS INSTITUCIONALES

Este informe se basa en los contenidos y materiales proporcionados por el SENA a través de su plataforma de aprendizaje virtual. Los conceptos sobre control de versiones, integración continua y herramientas de CI/CD han sido consultados en los recursos institucionales disponibles.

Los estándares y herramientas presentados en este documento complementan y aplican los conocimientos adquiridos en el componente "Integración Continua" del programa de formación.

---

## CONCLUSIONES

Implementar un buen sistema de control de versiones e integración continua es clave para que CyberG Suite se mantenga estable y fácil de mantener. Las herramientas que elegimos nos dan:

1. **Git + GitHub:** Una base sólida para versionar el código y colaborar, con CI/CD integrado a través de GitHub Actions.

2. **GitHub Actions:** Automatiza las pruebas, el análisis de código y los despliegues sin necesidad de servicios externos.

3. **PHPStan y PHP_CodeSniffer:** Aseguran que el código PHP sea de calidad y consistente.

4. **PHPUnit:** Permite escribir pruebas automatizadas que hacen el sistema más confiable.

5. **Git Flow:** Organiza el desarrollo con ramas y facilita hacer releases controlados.

Juntas, estas herramientas mejoran la calidad del código, facilitan la colaboración, reducen errores mediante automatización, aumentan la seguridad con análisis continuo y aceleran el ciclo de desarrollo y despliegue.

Para un proyecto académico como CyberG Suite, estas herramientas ofrecen un buen balance: son funcionales, fáciles de usar y en su mayoría gratuitas para proyectos públicos.

---

## REFERENCIAS

1. **Git - Documentación Oficial**
   - URL: https://git-scm.com/doc
   - Acceso: 2024

2. **GitHub Actions - Documentación**
   - URL: https://docs.github.com/en/actions
   - Acceso: 2024

3. **Semantic Versioning 2.0.0**
   - URL: https://semver.org/
   - Acceso: 2024

4. **Conventional Commits**
   - URL: https://www.conventionalcommits.org/
   - Acceso: 2024

5. **PHPUnit - Framework de Pruebas**
   - URL: https://phpunit.de/
   - Acceso: 2024

6. **PHPStan - Análisis Estático**
   - URL: https://phpstan.org/
   - Acceso: 2024

7. **Git Flow - Modelo de Ramas**
   - URL: https://nvie.com/posts/a-successful-git-branching-model/
   - Acceso: 2024

8. **PSR-12: Extended Coding Style Guide**
   - URL: https://www.php-fig.org/psr/psr-12/
   - Acceso: 2024

9. **SENA - OVA: Integración Continua (CI/CD)**
   - URL: https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Tecnologia/228118/Contenido/OVA/CF28/index.html#/
   - Institución: Servicio Nacional de Aprendizaje (SENA)
   - Acceso: 2024

---

**Fin del Informe**

---

*Este documento ha sido generado como parte de la documentación técnica del proyecto CyberG Suite. Para más información, consultar el repositorio oficial en GitHub.*

