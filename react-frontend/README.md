# CyberG Suite - Frontend React

Frontend desarrollado con React JS para el sistema CyberG Suite de gestión de ciberseguridad empresarial.

## 🚀 Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca para construir interfaces de usuario
- **React Router DOM 6.20.0** - Enrutamiento para aplicaciones React
- **Axios 1.6.2** - Cliente HTTP para peticiones API
- **Vite 5.0.8** - Herramienta de construcción y desarrollo

## 📋 Requisitos Previos

- Node.js 16.0 o superior
- npm o yarn
- Backend PHP corriendo en `http://localhost`

## 🔧 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
react-frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── auth/           # Componentes de autenticación
│   │   ├── navigation/     # Componentes de navegación
│   │   ├── layout/         # Componentes de layout
│   │   └── ui/             # Componentes UI/UX
│   ├── context/            # Context API (AuthContext)
│   ├── services/           # Servicios API
│   ├── utils/              # Utilidades y helpers
│   ├── styles/             # Estilos globales
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── public/                 # Archivos estáticos
├── package.json
└── vite.config.js
```

## 🏗️ Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📝 Estándares de Codificación

- Componentes funcionales con Hooks
- Nomenclatura en camelCase para variables y funciones
- Nomenclatura en PascalCase para componentes
- Comentarios descriptivos en español
- Separación de responsabilidades
- Reutilización de componentes

## 🔐 Autenticación

El sistema utiliza Context API para manejar el estado de autenticación globalmente. Las rutas protegidas se implementan mediante el componente `ProtectedRoute`.

## 📄 Licencia

Proyecto académico - CyberG Suite

