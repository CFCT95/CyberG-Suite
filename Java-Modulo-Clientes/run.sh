#!/bin/bash

# Script de ejecución para el módulo de gestión de clientes
# CyberG Suite - Java con JDBC

echo "╔════════════════════════════════════════════════════════════╗"
echo "║        EJECUTANDO MÓDULO DE GESTIÓN DE CLIENTES            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar que existe el JDBC driver
if [ ! -f "lib/mysql-connector-java-8.0.33.jar" ]; then
    echo "❌ Error: No se encontró el JDBC driver"
    exit 1
fi

# Verificar que las clases estén compiladas
if [ ! -d "build" ] || [ -z "$(ls -A build)" ]; then
    echo "⚠️  Las clases no están compiladas. Compilando..."
    ./compile.sh
fi

# Ejecutar
echo "🚀 Iniciando aplicación..."
echo ""
java -cp lib/mysql-connector-java-8.0.33.jar:build co.sena.cybergsuite.principal.GestionClientes

