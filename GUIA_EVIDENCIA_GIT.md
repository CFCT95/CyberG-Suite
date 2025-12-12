# Guía para Evidencia de Uso de Git
## CyberG Suite - Paso a Paso

Esta guía te ayudará a crear una evidencia completa del uso de Git, desde la configuración inicial hasta operaciones avanzadas.

---

## PASO 1: Verificar Instalación de Git

Abre la terminal y ejecuta:

```bash
git --version
```

**Qué capturar:** Pantalla mostrando la versión de Git instalada (ej: `git version 2.x.x`)

---

## PASO 2: Configuración Inicial de Git

Configura tu nombre y email (usa los datos reales):

```bash
git config --global user.name "Cristian Ferney Castaño Torres"
git config --global user.email "tu-email@ejemplo.com"
```

Verifica la configuración:

```bash
git config --global --list
```

**Qué capturar:** 
- Pantalla del comando de configuración
- Pantalla mostrando la lista de configuración con tu nombre y email

---

## PASO 3: Navegar al Proyecto

Ve al directorio del proyecto:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite
```

Verifica que estás en el directorio correcto:

```bash
pwd
ls -la
```

**Qué capturar:** Pantalla mostrando el directorio actual y los archivos del proyecto

---

## PASO 4: Verificar Estado del Repositorio

Verifica si ya existe un repositorio Git:

```bash
git status
```

Si no existe, verás un mensaje indicando que no es un repositorio Git.

**Qué capturar:** Pantalla del mensaje (puede ser que ya exista o que no exista)

---

## PASO 5: Inicializar Repositorio Git (si no existe)

Si no hay repositorio, inicialízalo:

```bash
git init
```

Verifica que se creó:

```bash
ls -la
```

Deberías ver una carpeta `.git`

**Qué capturar:** 
- Pantalla del comando `git init`
- Pantalla mostrando la carpeta `.git` en el listado

---

## PASO 6: Crear Archivo .gitignore

Crea un archivo `.gitignore` para excluir archivos no necesarios:

```bash
cat > .gitignore << 'EOF'
# Archivos de configuración sensibles
db.php.local
config.local.php

# Archivos temporales
*.log
*.tmp
.DS_Store

# Archivos HTML temporales (para PDF)
*.html

# Dependencias (si se usa Composer)
/vendor/

# Archivos del IDE
.idea/
.vscode/
*.swp
EOF
```

Verifica que se creó:

```bash
cat .gitignore
```

**Qué capturar:** Pantalla mostrando el contenido del `.gitignore`

---

## PASO 7: Ver Estado Inicial

Verifica qué archivos están sin seguimiento:

```bash
git status
```

**Qué capturar:** Pantalla mostrando todos los archivos como "Untracked files"

---

## PASO 8: Agregar Archivos al Staging Area

Agrega todos los archivos al área de staging:

```bash
git add .
```

Verifica el estado:

```bash
git status
```

**Qué capturar:** Pantalla mostrando los archivos en "Changes to be committed" (en verde)

---

## PASO 9: Hacer el Primer Commit

Crea el commit inicial:

```bash
git commit -m "feat: Commit inicial del proyecto CyberG Suite

- Configuración inicial del repositorio
- Estructura base del proyecto PHP
- Archivos de autenticación y registro
- Documentación técnica incluida"
```

Verifica el commit:

```bash
git log --oneline
```

**Qué capturar:** 
- Pantalla del comando commit
- Pantalla del log mostrando el commit creado

---

## PASO 10: Ver el Historial Detallado

Muestra el historial con más detalles:

```bash
git log --graph --oneline --all --decorate
```

**Qué capturar:** Pantalla del historial de commits

---

## PASO 11: Crear una Rama de Desarrollo

Crea y cambia a una rama de desarrollo:

```bash
git checkout -b develop
```

Verifica en qué rama estás:

```bash
git branch
```

**Qué capturar:** 
- Pantalla del comando creando la rama
- Pantalla mostrando las ramas (develop con *)

---

## PASO 12: Crear una Rama de Feature

Crea una rama para una nueva funcionalidad:

```bash
git checkout -b feature/mejora-autenticacion
```

Verifica:

```bash
git branch
```

**Qué capturar:** Pantalla mostrando las tres ramas (main, develop, feature/mejora-autenticacion)

---

## PASO 13: Hacer Cambios en la Rama Feature

Crea un archivo de prueba o modifica uno existente:

```bash
echo "# Mejoras de Autenticación" > MEJORAS.md
```

Agrega y haz commit:

```bash
git add MEJORAS.md
git commit -m "feat(auth): Agregar documentación de mejoras de autenticación"
```

**Qué capturar:** 
- Pantalla creando el archivo
- Pantalla del commit

---

## PASO 14: Ver Diferencias

Muestra las diferencias entre ramas:

```bash
git diff main..feature/mejora-autenticacion
```

O muestra los cambios del último commit:

```bash
git show
```

**Qué capturar:** Pantalla mostrando las diferencias

---

## PASO 15: Cambiar a la Rama Develop

Vuelve a la rama develop:

```bash
git checkout develop
```

**Qué capturar:** Pantalla del comando checkout

---

## PASO 16: Hacer Merge de la Feature a Develop

Integra los cambios de la feature a develop:

```bash
git merge feature/mejora-autenticacion
```

Verifica el log:

```bash
git log --graph --oneline --all --decorate
```

**Qué capturar:** 
- Pantalla del merge
- Pantalla del log mostrando el merge

---

## PASO 17: Ver el Estado del Repositorio

Verifica el estado actual:

```bash
git status
```

**Qué capturar:** Pantalla mostrando "working tree clean" o el estado actual

---

## PASO 18: Ver Información del Repositorio

Muestra información del repositorio:

```bash
git remote -v
```

Si no hay remoto, muestra la configuración local:

```bash
git config --list --local
```

**Qué capturar:** Pantalla de la configuración

---

## PASO 19: Crear Tags (Opcional pero Recomendado)

Crea un tag para marcar una versión:

```bash
git tag -a v1.0.0 -m "Versión inicial del proyecto CyberG Suite"
```

Lista los tags:

```bash
git tag
```

Muestra información del tag:

```bash
git show v1.0.0
```

**Qué capturar:** 
- Pantalla creando el tag
- Pantalla listando los tags
- Pantalla mostrando la información del tag

---

## PASO 20: Ver el Árbol de Ramas Visualmente

Muestra un árbol visual de las ramas:

```bash
git log --graph --pretty=format:'%C(yellow)%h%Creset -%C(red)%d%Creset %s %C(green)(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all
```

**Qué capturar:** Pantalla del árbol visual de commits

---

## PASO 21: Ver Estadísticas del Repositorio

Muestra estadísticas de commits:

```bash
git shortlog -sn
```

Muestra un resumen:

```bash
git log --stat
```

**Qué capturar:** Pantalla de las estadísticas

---

## PASO 22: Verificar Configuración Final

Verifica toda la configuración:

```bash
git config --list
```

**Qué capturar:** Pantalla de toda la configuración

---

## RESUMEN DE PANTALLAZOS A CAPTURAR

1. ✅ Versión de Git instalada
2. ✅ Configuración de nombre y email
3. ✅ Lista de configuración global
4. ✅ Directorio del proyecto y archivos
5. ✅ Estado inicial del repositorio
6. ✅ Inicialización del repositorio (si aplica)
7. ✅ Contenido del .gitignore
8. ✅ Archivos sin seguimiento (git status)
9. ✅ Archivos en staging (git add)
10. ✅ Primer commit realizado
11. ✅ Historial de commits
12. ✅ Creación de rama develop
13. ✅ Lista de ramas
14. ✅ Creación de rama feature
15. ✅ Cambios en la rama feature
16. ✅ Commit en la rama feature
17. ✅ Diferencias entre ramas
18. ✅ Merge de feature a develop
19. ✅ Historial con merge
20. ✅ Tags creados
21. ✅ Árbol visual de commits
22. ✅ Estadísticas del repositorio
23. ✅ Configuración final

---

## NOTAS IMPORTANTES

- **Toma pantallazos claros** de cada comando y su salida
- **Asegúrate de que se vea** el prompt de la terminal en cada captura
- **Incluye el contexto** (directorio actual, rama actual) cuando sea relevante
- **Organiza las capturas** en orden cronológico
- **Añade descripciones** breves a cada captura explicando qué muestra

---

## COMANDOS ADICIONALES ÚTILES (Opcional)

Si quieres mostrar más funcionalidades:

```bash
# Ver quién hizo qué cambios
git blame db.php

# Ver cambios en un archivo específico
git log -p db.php

# Ver ramas remotas (si tienes GitHub configurado)
git branch -r

# Ver todas las ramas (locales y remotas)
git branch -a

# Ver el contenido de un commit específico
git show HEAD

# Ver diferencias entre dos commits
git diff HEAD~1 HEAD
```

---

¡Listo! Con estos pasos tendrás una evidencia completa del uso de Git desde la configuración inicial hasta operaciones avanzadas.

