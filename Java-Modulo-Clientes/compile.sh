#!/bin/bash

# Script de compilación para el módulo de gestión de clientes
# CyberG Suite - Java con JDBC

echo "╔════════════════════════════════════════════════════════════╗"
echo "║        COMPILANDO MÓDULO DE GESTIÓN DE CLIENTES            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar que existe el JDBC driver
if [ ! -f "lib/mysql-connector-java-8.0.33.jar" ]; then
    echo "❌ Error: No se encontró el JDBC driver"
    echo "   Descárgalo desde: https://dev.mysql.com/downloads/connector/j/"
    echo "   Y colócalo en la carpeta lib/"
    exit 1
fi

# Crear directorio build si no existe
mkdir -p build

# Compilar
echo "📦 Compilando clases..."
javac -cp lib/mysql-connector-java-8.0.33.jar -d build \
    src/co/sena/cybergsuite/modelo/Cliente.java \
    src/co/sena/cybergsuite/conexion/ConexionBD.java \
    src/co/sena/cybergsuite/dao/ClienteDAO.java \
    src/co/sena/cybergsuite/principal/GestionClientes.java

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Compilación exitosa!"
    echo ""
    echo "Para ejecutar la aplicación:"
    echo "  java -cp lib/mysql-connector-java-8.0.33.jar:build co.sena.cybergsuite.principal.GestionClientes"
else
    echo ""
    echo "❌ Error en la compilación"
    exit 1
fi

