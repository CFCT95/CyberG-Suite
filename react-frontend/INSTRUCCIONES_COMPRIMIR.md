# Instrucciones para Comprimir el Proyecto

## 📦 Crear Archivo ZIP para Entrega

### Opción 1: Desde Terminal (macOS/Linux)

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite
zip -r CyberG-Suite-React-Frontend.zip react-frontend/ \
  -x "react-frontend/node_modules/*" \
  -x "react-frontend/.git/*" \
  -x "react-frontend/dist/*" \
  -x "react-frontend/.vite/*" \
  -x "react-frontend/*.log" \
  -x "react-frontend/.DS_Store"
```

### Opción 2: Desde Finder (macOS)

1. Abrir Finder
2. Navegar a: `/Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite/`
3. Hacer clic derecho en la carpeta `react-frontend`
4. Seleccionar "Comprimir react-frontend"
5. Renombrar el archivo a: `CyberG-Suite-React-Frontend.zip`

**Nota:** Si usas Finder, asegúrate de eliminar manualmente:
- `node_modules/` (si existe)
- `.git/` (si quieres excluirlo)
- `dist/` (si existe)

### Opción 3: Comando Simplificado

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite
zip -r CyberG-Suite-React-Frontend.zip react-frontend/ \
  -x "*/node_modules/*" \
  -x "*/.git/*" \
  -x "*/dist/*" \
  -x "*/.vite/*" \
  -x "*.log" \
  -x ".DS_Store"
```

## ✅ Verificación del Archivo ZIP

Después de crear el ZIP, verifica que contenga:

- ✅ Todos los archivos `.jsx`, `.js`, `.css`
- ✅ `package.json`
- ✅ `vite.config.js`
- ✅ `index.html`
- ✅ Todos los archivos `.md` de documentación
- ✅ Carpeta `src/` completa
- ❌ NO debe contener `node_modules/`
- ❌ NO debe contener `.git/`
- ❌ NO debe contener `dist/`

## 📋 Contenido que DEBE incluirse

```
react-frontend/
├── src/                    ✅ INCLUIR
├── package.json            ✅ INCLUIR
├── vite.config.js          ✅ INCLUIR
├── index.html              ✅ INCLUIR
├── .gitignore              ✅ INCLUIR
├── README.md               ✅ INCLUIR
├── INSTALACION.md          ✅ INCLUIR
├── ENTREGA.md              ✅ INCLUIR
├── REPOSITORIO.md          ✅ INCLUIR
├── LEEME_PRIMERO.txt       ✅ INCLUIR
└── [otros archivos .md]    ✅ INCLUIR
```

## 📋 Contenido que NO debe incluirse

```
react-frontend/
├── node_modules/           ❌ EXCLUIR
├── .git/                   ❌ EXCLUIR (opcional)
├── dist/                   ❌ EXCLUIR
├── .vite/                  ❌ EXCLUIR
├── *.log                   ❌ EXCLUIR
└── .DS_Store               ❌ EXCLUIR
```

## 📍 Ubicación del Archivo ZIP

El archivo se creará en:
```
/Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite/CyberG-Suite-React-Frontend.zip
```

## 🚀 Para Entregar

1. Crear el archivo ZIP usando uno de los métodos anteriores
2. Verificar el tamaño (debe ser pequeño, sin node_modules)
3. Incluir el archivo ZIP en la entrega
4. Incluir también el archivo `REPOSITORIO.md` con el enlace a GitHub

---

**Nota:** El archivo ZIP debe ser ligero (menos de 1 MB sin node_modules). Si es muy grande, verifica que no incluya `node_modules/`.

