#!/bin/bash

# Script de ayuda para consultar la base de datos
# Facilita ejecutar consultas SQL sin tener que escribir la ruta completa

MYSQL_PATH="/Applications/XAMPP/xamppfiles/bin/mysql"
DB_NAME="improve"
HOST="127.0.0.1"
PORT="3306"
USER="root"

if [ ! -f "$MYSQL_PATH" ]; then
    echo "❌ MySQL no encontrado en: $MYSQL_PATH"
    echo "   Verifica que XAMPP esté instalado"
    exit 1
fi

if [ -z "$1" ]; then
    echo "Uso: $0 \"SELECT * FROM CLIENTE;\""
    echo ""
    echo "O abre phpMyAdmin en: http://localhost/phpmyadmin"
    exit 1
fi

$MYSQL_PATH -u $USER -h $HOST -P $PORT $DB_NAME -e "$1"

