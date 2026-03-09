# Instrucciones de Instalación y Configuración
## Módulo de Gestión de Clientes - CyberG Suite

---

## 📦 PASO 1: Descargar MySQL Connector/J (JDBC Driver)

### Opción A: Descarga Manual

1. Visita: https://dev.mysql.com/downloads/connector/j/
2. Selecciona "Platform Independent"
3. Descarga el archivo ZIP (ej: `mysql-connector-j-8.0.33.zip`)
4. Extrae el archivo ZIP
5. Copia `mysql-connector-j-8.0.33.jar` a la carpeta `lib/` del proyecto

### Opción B: Usando wget o curl

```bash
cd Java-Modulo-Clientes/lib
wget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-8.0.33.zip
unzip mysql-connector-j-8.0.33.zip
cp mysql-connector-j-8.0.33/mysql-connector-j-8.0.33.jar .
rm -rf mysql-connector-j-8.0.33 mysql-connector-j-8.0.33.zip
```

### Verificar

```bash
ls -lh lib/mysql-connector-java-8.0.33.jar
```

---

## 🔧 PASO 2: Verificar Base de Datos

Asegúrate de que:

1. MySQL esté corriendo en XAMPP (puerto 3306)
2. La base de datos `improve` exista
3. La tabla `CLIENTE` esté creada

**Verificar:**

```bash
mysql -u root -h 127.0.0.1 -P 3306 -e "USE improve; DESCRIBE CLIENTE;"
```

Si no existe, ejecuta el script SQL:

```bash
mysql -u root -h 127.0.0.1 -P 3306 < ../../database_setup.sql
```

---

## 🛠️ PASO 3: Compilar el Proyecto

### Opción A: Compilación Manual

```bash
cd Java-Modulo-Clientes

# Compilar todas las clases
javac -cp lib/mysql-connector-java-8.0.33.jar -d build src/co/sena/cybergsuite/**/*.java

# O compilar clase por clase
javac -cp lib/mysql-connector-java-8.0.33.jar src/co/sena/cybergsuite/modelo/Cliente.java
javac -cp lib/mysql-connector-java-8.0.33.jar src/co/sena/cybergsuite/conexion/ConexionBD.java
javac -cp lib/mysql-connector-java-8.0.33.jar src/co/sena/cybergsuite/dao/ClienteDAO.java
javac -cp lib/mysql-connector-java-8.0.33.jar:src src/co/sena/cybergsuite/principal/GestionClientes.java
```

### Opción B: Usando Script (crear compile.sh)

```bash
#!/bin/bash
echo "Compilando proyecto..."
javac -cp lib/mysql-connector-java-8.0.33.jar -d build src/co/sena/cybergsuite/**/*.java
if [ $? -eq 0 ]; then
    echo "✅ Compilación exitosa!"
else
    echo "❌ Error en la compilación"
    exit 1
fi
```

---

## ▶️ PASO 4: Ejecutar la Aplicación

```bash
java -cp lib/mysql-connector-java-8.0.33.jar:src co.sena.cybergsuite.principal.GestionClientes
```

O si compilaste en build/:

```bash
java -cp lib/mysql-connector-java-8.0.33.jar:build co.sena.cybergsuite.principal.GestionClientes
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "No se encontró el driver JDBC"

**Solución:** Verifica que el JAR esté en el classpath:
```bash
ls -la lib/mysql-connector-java-8.0.33.jar
```

### Error: "Connection refused"

**Solución:** Verifica que MySQL esté corriendo:
```bash
# En XAMPP, verifica que MySQL esté iniciado
# O verifica la conexión:
mysql -u root -h 127.0.0.1 -P 3306
```

### Error: "Unknown database 'improve'"

**Solución:** Crea la base de datos:
```bash
mysql -u root -h 127.0.0.1 -P 3306 -e "CREATE DATABASE IF NOT EXISTS improve;"
```

### Error: "Table 'CLIENTE' doesn't exist"

**Solución:** Ejecuta el script SQL:
```bash
mysql -u root -h 127.0.0.1 -P 3306 improve < ../../database_setup.sql
```

---

## ✅ VERIFICACIÓN FINAL

Ejecuta este comando para verificar que todo está correcto:

```bash
# Verificar Java
java -version && javac -version

# Verificar JDBC Driver
ls -lh lib/mysql-connector-java-8.0.33.jar

# Verificar Base de Datos
mysql -u root -h 127.0.0.1 -P 3306 improve -e "SELECT COUNT(*) FROM CLIENTE;"

# Compilar
javac -cp lib/mysql-connector-java-8.0.33.jar -d build src/co/sena/cybergsuite/**/*.java

# Ejecutar
java -cp lib/mysql-connector-java-8.0.33.jar:build co.sena.cybergsuite.principal.GestionClientes
```

Si todos los comandos se ejecutan sin errores, ¡estás listo! 🎉

