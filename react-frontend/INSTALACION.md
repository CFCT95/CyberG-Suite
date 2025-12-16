# Guía de Instalación - CyberG Suite Frontend React

## Requisitos Previos

- Node.js 16.0 o superior
- npm 7.0 o superior (viene con Node.js)
- Backend PHP corriendo en `http://localhost/CyberG-Suite`

## Pasos de Instalación

### 1. Instalar Dependencias

```bash
cd react-frontend
npm install
```

Este comando instalará todas las dependencias necesarias:
- React 18.2.0
- React Router DOM 6.20.0
- Axios 1.6.2
- React Hook Form 7.48.2
- Vite 5.0.8

### 2. Configurar el Backend

Asegúrate de que el backend PHP esté corriendo en:
- URL: `http://localhost/CyberG-Suite`
- Apache y MySQL deben estar activos en XAMPP

### 3. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

### 4. Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## Estructura del Proyecto

```
react-frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── auth/           # Componentes de autenticación
│   │   ├── navigation/     # Componentes de navegación
│   │   ├── layout/         # Componentes de layout
│   │   └── ui/             # Componentes UI base
│   ├── context/            # Context API
│   ├── pages/              # Páginas de la aplicación
│   ├── services/           # Servicios API
│   ├── utils/              # Utilidades
│   ├── styles/             # Estilos globales
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── public/                 # Archivos estáticos
├── package.json
└── vite.config.js
```

## Solución de Problemas

### Error: Puerto 3000 en uso
Cambia el puerto en `vite.config.js` o usa:
```bash
npm run dev -- --port 3001
```

### Error de CORS
Asegúrate de que el backend PHP permita peticiones desde `http://localhost:3000`

### Error de conexión con el backend
Verifica que:
- Apache esté corriendo en XAMPP
- MySQL esté corriendo en XAMPP
- La URL del backend sea correcta en `src/services/api.js`

## Comandos Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza build de producción

