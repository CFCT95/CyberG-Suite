# Módulo de Gestión de Clientes - CyberG Suite
## Implementación en Java con JDBC

Este módulo implementa las funcionalidades CRUD (Create, Read, Update, Delete) para la gestión de clientes utilizando Java y JDBC para conexión con base de datos MySQL.

---

## 📋 Estructura del Proyecto

```
Java-Modulo-Clientes/
├── src/
│   └── co/
│       └── sena/
│           └── cybergsuite/
│               ├── modelo/
│               │   └── Cliente.java
│               ├── conexion/
│               │   └── ConexionBD.java
│               ├── dao/
│               │   └── ClienteDAO.java
│               └── principal/
│                   └── GestionClientes.java
├── lib/
│   └── mysql-connector-java-8.0.33.jar
├── README.md
└── GUIA_PRESENTACION.md
```

---

## 🔧 Requisitos

- Java JDK 8 o superior
- MySQL 5.7 o superior
- MySQL Connector/J (JDBC Driver)
- IDE: IntelliJ IDEA, Eclipse o NetBeans

---

## 📦 Configuración

1. **Base de Datos**: Asegúrate de que la base de datos `improve` y la tabla `CLIENTE` existan
2. **JDBC Driver**: Descarga `mysql-connector-java-8.0.33.jar` y colócalo en la carpeta `lib/`
3. **Configuración**: Ajusta los parámetros de conexión en `ConexionBD.java` si es necesario

---

## 🚀 Compilación y Ejecución

```bash
# Compilar
javac -cp lib/mysql-connector-java-8.0.33.jar src/co/sena/cybergsuite/**/*.java

# Ejecutar
java -cp lib/mysql-connector-java-8.0.33.jar:src co.sena.cybergsuite.principal.GestionClientes
```

---

## 📝 Funcionalidades

- ✅ **CREATE**: Insertar nuevos clientes
- ✅ **READ**: Consultar clientes (todos, por ID, por correo)
- ✅ **UPDATE**: Actualizar información de clientes
- ✅ **DELETE**: Eliminar clientes

---

## 🔐 Seguridad

- Uso de PreparedStatement para prevenir SQL Injection
- Validación de datos antes de insertar/actualizar
- Manejo de excepciones apropiado

---

## 📚 Estándares de Codificación

- Nombres de clases en PascalCase
- Nombres de métodos en camelCase
- Nombres de variables en camelCase
- Paquetes en minúsculas con estructura jerárquica
- Comentarios Javadoc en todas las clases públicas

