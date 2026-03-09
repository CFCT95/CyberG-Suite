# Guía de Presentación: Módulo de Gestión de Clientes
## Evidencia de Desempeño: GA7-220501096-AA2-EV01

Esta guía te ayudará a presentar el módulo de gestión de clientes demostrando todas las funcionalidades CRUD y la conexión con la base de datos mediante JDBC.

**IMPORTANTE:** Durante la presentación, alterna entre mostrar el código Java y la base de datos MySQL para demostrar que las operaciones se reflejan correctamente en la BD.

### 🔧 Acceso a MySQL

**Usaremos phpMyAdmin para todas las verificaciones:**
- Abre en navegador: http://localhost:8080/phpmyadmin/index.php?lang=en
- Más visual y fácil de mostrar en pantalla
- Permite ejecutar SQL y ver resultados en tabla
- Ideal para presentación en video

---

## 📋 PREPARACIÓN ANTES DE LA PRESENTACIÓN

### 1. Verificar Requisitos

Antes de comenzar, verifica que tengas:

- ✅ Java JDK instalado
- ✅ MySQL corriendo en XAMPP (puerto 3306)
- ✅ Base de datos `improve` creada
- ✅ Tabla `CLIENTE` existente
- ✅ MySQL Connector/J descargado
- ✅ phpMyAdmin abierto en el navegador para mostrar la BD

**Comandos de verificación:**

```bash
# Verificar Java
export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"
java -version
javac -version

# Verificar MySQL usando phpMyAdmin:
# Abre en navegador: http://localhost:8080/phpmyadmin/index.php?lang=en
# Verifica que la base de datos 'improve' esté disponible
```

**📸 CAPTURA:** Pantallas mostrando las versiones de Java y la conexión a MySQL

---

### 2. Preparar Ventanas

**Configura tu pantalla con:**
- **Ventana 1:** Editor de código (mostrar archivos .java)
- **Ventana 2:** Terminal (ejecutar aplicación Java)
- **Ventana 3:** phpMyAdmin en navegador (http://localhost:8080/phpmyadmin/index.php?lang=en)

**📸 CAPTURA:** Configuración de ventanas (opcional, pero útil)

---

### 3. Verificar Estructura del Proyecto

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite/Java-Modulo-Clientes
find src -type f -name "*.java"
```

**📸 CAPTURA:** Estructura de archivos Java del proyecto

---

### 4. Verificar Base de Datos Inicial

**Usando phpMyAdmin:**
1. Abre el navegador: http://localhost:8080/phpmyadmin/index.php?lang=en
2. Selecciona la base de datos `improve` en el panel izquierdo
3. Selecciona la tabla `CLIENTE`
4. Haz clic en "Estructura" para ver los campos de la tabla
5. Haz clic en "Examinar" para ver los registros existentes
6. O ejecuta SQL: `SELECT COUNT(*) as total FROM CLIENTE;`

**📸 CAPTURA:** 
- Estructura de la tabla CLIENTE en phpMyAdmin
- Registros iniciales en la base de datos

---

## 🎯 PRESENTACIÓN PASO A PASO

### PASO 1: Introducción y Contexto (2 minutos)

**Qué decir:**
"Voy a presentar el módulo de gestión de clientes desarrollado en Java con JDBC para el proyecto CyberG Suite. Este módulo implementa todas las operaciones CRUD (Create, Read, Update, Delete) siguiendo estándares de codificación y buenas prácticas de seguridad."

**Mostrar:**
- Estructura del proyecto
- Estándares de codificación aplicados
- Base de datos inicial (phpMyAdmin)

**📸 CAPTURA:** 
- Estructura del proyecto
- Base de datos inicial con registros

---

### PASO 2: Demostrar Estándares de Codificación (4 minutos)

#### 2.1 Nombramiento de Paquetes

**Mostrar estructura:**
```bash
ls -R src/co/sena/cybergsuite/
```

**Explicar:**
- Paquetes en minúsculas: `co.sena.cybergsuite`
- Estructura jerárquica: modelo, conexion, dao, principal
- Convención de nombres de dominio inverso

**📸 CAPTURA:** Estructura de paquetes

---

#### 2.2 Nombramiento de Clases

**Abrir y mostrar `Cliente.java`:**

```java
public class Cliente {
    private int idCliente;
    private String nombre;
    // ...
}
```

**Explicar:**
- Clases en PascalCase: `Cliente`, `ConexionBD`, `ClienteDAO`
- Nombres descriptivos y sustantivos
- Una clase, una responsabilidad

**📸 CAPTURA:** Código de la clase Cliente mostrando nomenclatura

---

#### 2.3 Nombramiento de Métodos

**Abrir `ClienteDAO.java` y mostrar métodos:**

```java
public boolean insertar(Cliente cliente)
public List<Cliente> consultarTodos()
public Cliente consultarPorId(int idCliente)
public boolean actualizar(Cliente cliente)
public boolean eliminar(int idCliente)
```

**Explicar:**
- Métodos en camelCase
- Verbos que describen la acción
- Nombres descriptivos

**📸 CAPTURA:** Métodos en ClienteDAO.java

---

#### 2.4 Nombramiento de Variables

**Mostrar variables en las clases:**

```java
private int idCliente;
private String nombre;
private String tipoEmpresa;
private Connection conexion;
private PreparedStatement preparedStatement;
```

**Explicar:**
- Variables en camelCase
- Nombres descriptivos
- Convenciones para tipos específicos

**📸 CAPTURA:** Variables en el código

---

### PASO 3: Demostrar Conexión con Base de Datos (5 minutos)

#### 3.1 Mostrar Clase de Conexión

**Abrir `ConexionBD.java` y mostrar:**

```java
private static final String URL = "jdbc:mysql://127.0.0.1:3306/improve...";
private static final String USUARIO = "root";
private static final String CONTRASENA = "";

public static Connection obtenerConexion() throws SQLException {
    Class.forName(DRIVER);
    conexion = DriverManager.getConnection(URL, USUARIO, CONTRASENA);
    return conexion;
}
```

**Explicar:**
- Configuración de conexión JDBC
- Patrón Singleton
- Manejo de excepciones

**📸 CAPTURA:** Código de ConexionBD.java

---

#### 3.2 Probar Conexión y Mostrar en Base de Datos

**Ejecutar la aplicación:**

```bash
export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"
cd /Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite/Java-Modulo-Clientes
./run.sh
```

**La aplicación mostrará información de conexión.**

**Mientras tanto, en phpMyAdmin:**
1. Abre: http://localhost:8080/phpmyadmin/index.php?lang=en
2. Ve a la pestaña "Estado" → "Procesos"
3. O ejecuta SQL: `SHOW PROCESSLIST;` en la pestaña "SQL"

**Explicar:**
"La conexión se estableció exitosamente. Podemos ver en phpMyAdmin que hay una conexión activa desde la aplicación Java."

**📸 CAPTURA:** 
- Salida de la aplicación mostrando conexión exitosa
- phpMyAdmin mostrando conexión activa en "Procesos"

---

### PASO 4: Demostrar Funcionalidad CREATE (Insertar) (4 minutos)

#### 4.1 Mostrar Código del Método INSERTAR

**Abrir `ClienteDAO.java` y mostrar método `insertar`:**

```java
public boolean insertar(Cliente cliente) throws SQLException {
    preparedStatement = conexion.prepareStatement(INSERTAR, Statement.RETURN_GENERATED_KEYS);
    preparedStatement.setString(1, cliente.getNombre());
    preparedStatement.setString(2, cliente.getTipoEmpresa());
    preparedStatement.setString(3, cliente.getCorreo());
    preparedStatement.setString(4, cliente.getTelefono());
    preparedStatement.setString(5, cliente.getContrasena());
    int filasAfectadas = preparedStatement.executeUpdate();
    // Obtener ID generado
    ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
    if (generatedKeys.next()) {
        cliente.setIdCliente(generatedKeys.getInt(1));
    }
}
```

**Explicar:**
- Uso de PreparedStatement (prevención SQL Injection)
- Parámetros posicionales (?)
- Obtención de ID generado automáticamente

**📸 CAPTURA:** Código del método insertar

---

#### 4.2 Ejecutar CREATE en la Aplicación

**En la aplicación, seleccionar opción 1**

**Datos de prueba:**
- Nombre: "Empresa Demo Java S.A.S."
- Tipo: "Mediana"
- Correo: "demo.java@empresa.com"
- Teléfono: "3001234567"
- Contraseña: "test123"

**📸 CAPTURA:** 
- Menú con opción 1 seleccionada
- Formulario de inserción
- Mensaje de éxito con ID generado (ej: ID: 5)

---

#### 4.3 Verificar en Base de Datos

**Inmediatamente después, mostrar en phpMyAdmin:**
1. Abre: http://localhost:8080/phpmyadmin/index.php?lang=en
2. Selecciona base de datos `improve` en el panel izquierdo
3. Selecciona tabla `CLIENTE`
4. Haz clic en "Examinar" para ver todos los registros
5. O ejecuta SQL en la pestaña "SQL": `SELECT * FROM CLIENTE ORDER BY id_cliente DESC LIMIT 1;`

**Explicar:**
"Como podemos ver, el cliente se insertó correctamente en la base de datos. El ID fue generado automáticamente y todos los datos están almacenados."

**📸 CAPTURA:** 
- Registro recién insertado en phpMyAdmin
- Mostrar todos los campos: id_cliente, nombre, tipo_empresa, correo, telefono, fecha_registro

---

### PASO 5: Demostrar Funcionalidad READ (Consultar) (5 minutos)

#### 5.1 READ - Consultar Todos

**Mostrar código del método `consultarTodos`:**

```java
public List<Cliente> consultarTodos() throws SQLException {
    preparedStatement = conexion.prepareStatement(CONSULTAR_TODOS);
    resultSet = preparedStatement.executeQuery();
    while (resultSet.next()) {
        Cliente cliente = mapearResultSetACliente(resultSet);
        clientes.add(cliente);
    }
    return clientes;
}
```

**Ejecutar en la aplicación: Opción 2**

**📸 CAPTURA:** 
- Código del método consultarTodos
- Lista completa de clientes mostrada en la aplicación

**Ahora mostrar en phpMyAdmin:**
1. Selecciona tabla `CLIENTE` → "Examinar"
2. O ejecuta SQL en la pestaña "SQL": `SELECT * FROM CLIENTE ORDER BY fecha_registro DESC;`

**Comparar:**
"Como vemos, la aplicación muestra los mismos registros que están en la base de datos, confirmando que la consulta funciona correctamente."

**📸 CAPTURA:** 
- Resultado de la consulta SQL en phpMyAdmin
- Comparar con lo mostrado en la aplicación

---

#### 5.2 READ - Consultar por ID

**Mostrar código:**

```java
public Cliente consultarPorId(int idCliente) {
    preparedStatement.setInt(1, idCliente);
    resultSet = preparedStatement.executeQuery();
    if (resultSet.next()) {
        return mapearResultSetACliente(resultSet);
    }
}
```

**Ejecutar en la aplicación: Opción 3**
- Ingresar el ID del cliente insertado (ej: 5)

**📸 CAPTURA:** Cliente encontrado por ID en la aplicación

**Verificar en phpMyAdmin:**
1. Ejecuta SQL en la pestaña "SQL": `SELECT * FROM CLIENTE WHERE id_cliente = 5;`

**📸 CAPTURA:** Mismo registro en phpMyAdmin

---

#### 5.3 READ - Consultar por Correo

**Ejecutar en la aplicación: Opción 4**
- Ingresar correo: "demo.java@empresa.com"

**📸 CAPTURA:** Cliente encontrado por correo

**Verificar en phpMyAdmin:**
1. Ejecuta SQL en la pestaña "SQL": `SELECT * FROM CLIENTE WHERE correo = 'demo.java@empresa.com';`

**📸 CAPTURA:** Registro en phpMyAdmin

---

### PASO 6: Demostrar Funcionalidad UPDATE (Actualizar) (4 minutos)

#### 6.1 Mostrar Código del Método ACTUALIZAR

**Abrir `ClienteDAO.java` y mostrar:**

```java
public boolean actualizar(Cliente cliente) throws SQLException {
    preparedStatement = conexion.prepareStatement(ACTUALIZAR);
    preparedStatement.setString(1, cliente.getNombre());
    preparedStatement.setString(2, cliente.getTipoEmpresa());
    preparedStatement.setString(3, cliente.getCorreo());
    preparedStatement.setString(4, cliente.getTelefono());
    preparedStatement.setInt(5, cliente.getIdCliente());
    int filasAfectadas = preparedStatement.executeUpdate();
}
```

**📸 CAPTURA:** Código del método actualizar

---

#### 6.2 Mostrar Estado ANTES en Base de Datos

**Primero, mostrar el registro actual en phpMyAdmin:**
1. Abre: http://localhost:8080/phpmyadmin/index.php?lang=en
2. Selecciona base de datos `improve` → tabla `CLIENTE`
3. Ejecuta SQL en la pestaña "SQL": `SELECT id_cliente, nombre, tipo_empresa, correo, telefono FROM CLIENTE WHERE id_cliente = 5;`
4. O simplemente selecciona "Examinar" y busca el registro con id_cliente = 5

**📸 CAPTURA:** Estado ANTES de la actualización en phpMyAdmin

---

#### 6.3 Ejecutar UPDATE en la Aplicación

**En la aplicación: Opción 5**
- Ingresar ID: 5
- Cambiar nombre a: "Empresa Demo Java ACTUALIZADA S.A.S."
- Cambiar tipo a: "Grande"

**📸 CAPTURA:** 
- Formulario de actualización
- Datos antes y después en la aplicación
- Mensaje de éxito

---

#### 6.4 Verificar Cambios en Base de Datos

**Inmediatamente después, mostrar en phpMyAdmin:**
1. Ejecuta SQL en la pestaña "SQL": `SELECT id_cliente, nombre, tipo_empresa, correo, telefono FROM CLIENTE WHERE id_cliente = 5;`
2. O refresca la tabla seleccionando "Examinar" nuevamente
3. Compara los valores antes y después

**Explicar:**
"Como podemos ver, los cambios se reflejaron inmediatamente en la base de datos. El nombre y tipo de empresa fueron actualizados correctamente."

**📸 CAPTURA:** 
- Estado DESPUÉS de la actualización en phpMyAdmin
- Comparar con el estado ANTES

---

### PASO 7: Demostrar Funcionalidad DELETE (Eliminar) (4 minutos)

#### 7.1 Mostrar Código del Método ELIMINAR

**Mostrar método `eliminar`:**

```java
public boolean eliminar(int idCliente) throws SQLException {
    preparedStatement = conexion.prepareStatement(ELIMINAR);
    preparedStatement.setInt(1, idCliente);
    int filasAfectadas = preparedStatement.executeUpdate();
}
```

**📸 CAPTURA:** Código del método eliminar

---

#### 7.2 Mostrar Registro ANTES de Eliminar

**En phpMyAdmin, mostrar que el registro existe:**
1. Ejecuta SQL en la pestaña "SQL": `SELECT * FROM CLIENTE WHERE id_cliente = 5;`
2. Ejecuta SQL: `SELECT COUNT(*) as total FROM CLIENTE;`
3. O selecciona "Examinar" y busca el registro con id_cliente = 5

**📸 CAPTURA:** Registro existente en phpMyAdmin ANTES de eliminar

---

#### 7.3 Ejecutar DELETE en la Aplicación

**En la aplicación: Opción 6**
- Ingresar ID: 5
- Confirmar eliminación (s)

**📸 CAPTURA:** 
- Confirmación de eliminación
- Mensaje de éxito en la aplicación

---

#### 7.4 Verificar Eliminación en Base de Datos

**Inmediatamente después, verificar en phpMyAdmin:**
1. Ejecuta SQL en la pestaña "SQL": `SELECT * FROM CLIENTE WHERE id_cliente = 5;` (debe estar vacío - 0 filas)
2. Ejecuta SQL: `SELECT COUNT(*) as total FROM CLIENTE;` (debe haber disminuido)
3. O refresca la tabla seleccionando "Examinar" y verifica que el registro ya no aparece

**Explicar:**
"Como podemos ver, el registro ya no existe en la base de datos. La consulta no devuelve resultados y el conteo total de registros disminuyó."

**📸 CAPTURA:** 
- Consulta que no encuentra el registro (resultado vacío en phpMyAdmin)
- Conteo total de registros (disminuido)

---

### PASO 8: Demostración Completa Automática (3 minutos)

**Seleccionar opción 7 en el menú**

**Explicar:**
"Esta opción ejecuta automáticamente todas las operaciones CRUD en secuencia para demostrar el funcionamiento completo del módulo."

**La demostración ejecutará:**
1. CREATE - Insertar cliente de prueba
2. READ - Consultar todos
3. READ - Consultar por ID
4. UPDATE - Actualizar cliente
5. DELETE - Eliminar cliente

**Mientras se ejecuta, mostrar en phpMyAdmin:**

**Durante CREATE:**
1. Refresca la tabla `CLIENTE` → "Examinar"
2. O ejecuta SQL: `SELECT * FROM CLIENTE ORDER BY id_cliente DESC LIMIT 1;`
3. Verifica que el nuevo registro apareció

**Durante UPDATE:**
1. Ejecuta SQL: `SELECT * FROM CLIENTE WHERE id_cliente = [ID_GENERADO];`
2. Compara valores antes y después
3. Verifica que los cambios se reflejaron

**Durante DELETE:**
1. Ejecuta SQL: `SELECT COUNT(*) FROM CLIENTE WHERE id_cliente = [ID_GENERADO];`
2. Debe retornar 0 (registro no existe)
3. O refresca "Examinar" y verifica que el registro desapareció

**📸 CAPTURA:** 
- Cada operación ejecutándose en la aplicación
- Cambios reflejados en la base de datos en tiempo real
- Finalización exitosa

---

### PASO 9: Mostrar Seguridad y Buenas Prácticas (3 minutos)

#### 9.1 PreparedStatement (Prevención SQL Injection)

**Mostrar código comparativo:**

```java
// ❌ MAL - Vulnerable a SQL Injection
String sql = "SELECT * FROM CLIENTE WHERE correo = '" + correo + "'";
Statement stmt = conexion.createStatement();
ResultSet rs = stmt.executeQuery(sql);

// ✅ BIEN - Usando PreparedStatement
preparedStatement = conexion.prepareStatement("SELECT * FROM CLIENTE WHERE correo = ?");
preparedStatement.setString(1, correo);
resultSet = preparedStatement.executeQuery();
```

**Explicar:**
- Prevención de SQL Injection
- Parámetros seguros
- Validación automática

**📸 CAPTURA:** Comparación de código seguro vs vulnerable

---

#### 9.2 Manejo de Recursos

**Mostrar método `cerrarRecursos`:**

```java
private void cerrarRecursos(PreparedStatement ps, ResultSet rs) {
    try {
        if (rs != null) rs.close();
        if (ps != null) ps.close();
    } catch (SQLException e) {
        System.err.println("Error al cerrar recursos: " + e.getMessage());
    }
}
```

**Explicar:**
- Cierre adecuado de recursos
- Prevención de memory leaks
- Try-finally para garantizar cierre

**📸 CAPTURA:** Código de manejo de recursos

---

### PASO 10: Resumen y Conclusiones (2 minutos)

**Resumir mostrando:**
1. ✅ Estándares de codificación aplicados
2. ✅ Conexión JDBC funcional
3. ✅ Operaciones CRUD completas
4. ✅ Seguridad con PreparedStatement
5. ✅ Verificación en base de datos de todas las operaciones

**Mostrar una última vez en phpMyAdmin:**
1. Ejecuta SQL en la pestaña "SQL": `SELECT COUNT(*) as total_clientes FROM CLIENTE;`
2. Ejecuta SQL: `SELECT * FROM CLIENTE ORDER BY fecha_registro DESC LIMIT 3;`
3. O selecciona "Examinar" para ver los últimos registros

**📸 CAPTURA:** 
- Resumen visual de funcionalidades
- Estado final de la base de datos en phpMyAdmin

---

## 📸 CHECKLIST DE CAPTURAS DE PANTALLA

### Preparación
- [ ] Estructura del proyecto
- [ ] Versiones de Java y MySQL
- [ ] Base de datos inicial (estructura y registros)

### Estándares de Codificación
- [ ] Estructura de paquetes
- [ ] Nombres de clases (código)
- [ ] Nombres de métodos (código)
- [ ] Nombres de variables (código)

### Conexión JDBC
- [ ] Código de ConexionBD.java
- [ ] Prueba de conexión exitosa
- [ ] Conexión activa en base de datos

### CREATE (Insertar)
- [ ] Código del método insertar
- [ ] Ejecución en aplicación
- [ ] Registro insertado en base de datos

### READ (Consultar)
- [ ] Código del método consultarTodos
- [ ] Lista en aplicación
- [ ] Consulta SQL en base de datos (comparar)
- [ ] Código consultarPorId
- [ ] Resultado en aplicación
- [ ] Consulta SQL por ID en BD
- [ ] Consulta por correo en aplicación
- [ ] Consulta SQL por correo en BD

### UPDATE (Actualizar)
- [ ] Código del método actualizar
- [ ] Estado ANTES en base de datos
- [ ] Ejecución en aplicación
- [ ] Estado DESPUÉS en base de datos (comparar)

### DELETE (Eliminar)
- [ ] Código del método eliminar
- [ ] Registro existente ANTES en BD
- [ ] Ejecución en aplicación
- [ ] Verificación de eliminación en BD (registro no existe)

### Demostración Completa
- [ ] Ejecución automática
- [ ] Cambios en BD durante cada operación

### Seguridad
- [ ] Código PreparedStatement (comparación)
- [ ] Manejo de recursos
- [ ] Manejo de excepciones

### Resumen
- [ ] Resumen final
- [ ] Estado final de base de datos

---

## ⏱️ TIEMPO TOTAL ESTIMADO

- Preparación: 5 minutos
- Presentación: 30-35 minutos
- **Total: 35-40 minutos**

---

## 💡 CONSEJOS PARA LA PRESENTACIÓN

1. **Usa phpMyAdmin** - Es más visual y fácil de mostrar en video (http://localhost:8080/phpmyadmin/index.php?lang=en)
2. **Alterna entre código y base de datos** - Muestra cómo cada operación se refleja en la BD
3. **Compara antes y después** - Especialmente en UPDATE y DELETE
4. **Explica mientras muestras** - No solo ejecutes, explica qué está pasando
5. **Verifica inmediatamente** - Después de cada operación, refresca phpMyAdmin o ejecuta consulta SQL
6. **Mantén un ritmo constante** - Sin apresurarte, pero sin perder tiempo
7. **Prepara consultas SQL** - Ten las consultas listas para copiar/pegar en phpMyAdmin

---

## 🎬 ESTRUCTURA RECOMENDADA DEL VIDEO

1. **Introducción** (2 min) - Proyecto y contexto
2. **Estándares de codificación** (4 min) - Paquetes, clases, métodos, variables
3. **Conexión JDBC** (5 min) - Código y prueba de conexión
4. **CREATE** (4 min) - Código → Ejecución → Verificación en BD
5. **READ** (5 min) - Código → Ejecución → Verificación en BD (3 variantes)
6. **UPDATE** (4 min) - Estado antes → Código → Ejecución → Estado después en BD
7. **DELETE** (4 min) - Registro antes → Código → Ejecución → Verificación en BD
8. **Demostración completa** (3 min) - Automática con cambios en BD
9. **Seguridad** (3 min) - PreparedStatement y buenas prácticas
10. **Resumen** (2 min) - Conclusiones y estado final

---

¡Buena suerte con tu presentación! 🚀
