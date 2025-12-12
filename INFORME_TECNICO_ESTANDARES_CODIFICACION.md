# INFORME TÉCNICO DE ESTÁNDARES DE CODIFICACIÓN
## Aplicación del Paradigma Orientado a Objetos
### Proyecto: CyberG Suite

---

**Evidencia de desempeño:** GA7-220501096-AA1-EV02

**Presentado por:** Cristian Ferney Castaño Torres

**Documento:** C.C 1037644717

**Asignatura:** Análisis y Desarrollo de Software

**Ficha:** 3070422

**Fecha:** 25 de noviembre de 2025

**Versión del Documento:** 1.0

**Proyecto:** CyberG Suite - Sistema de Evaluación de Ciberseguridad

---

## ÍNDICE

1. [Portada](#portada)
2. [Introducción](#introducción)
3. [Objetivo](#objetivo)
4. [Conceptos Fundamentales del Paradigma Orientado a Objetos](#conceptos-fundamentales-del-paradigma-orientado-a-objetos)
5. [Estándares de Codificación](#estándares-de-codificación)
6. [Nombramiento de Variables](#nombramiento-de-variables)
7. [Declaración de Clases](#declaración-de-clases)
8. [Declaración de Métodos](#declaración-de-métodos)
9. [Declaración de Propiedades](#declaración-de-propiedades)
10. [Constantes y Constantes de Clase](#constantes-y-constantes-de-clase)
11. [Estructura de Archivos y Namespaces](#estructura-de-archivos-y-namespaces)
12. [Comentarios y Documentación](#comentarios-y-documentación)
13. [Manejo de Excepciones](#manejo-de-excepciones)
14. [Ejemplos de Implementación](#ejemplos-de-implementación)
15. [Conclusiones](#conclusiones)
16. [Referencias](#referencias)

---

## INTRODUCCIÓN

El desarrollo de software orientado a objetos requiere seguir estándares de codificación que garanticen la consistencia, mantenibilidad y legibilidad del código. Cuando varios desarrolladores trabajan en un proyecto, tener reglas claras evita confusiones y facilita la colaboración.

CyberG Suite es una aplicación web en PHP que maneja información sensible de empresas relacionada con ciberseguridad. Para mantener la calidad del código y facilitar su evolución, necesitamos establecer estándares claros basados en las mejores prácticas de la industria.

Este documento define los estándares de codificación que seguiremos en CyberG Suite, enfocándonos en el paradigma orientado a objetos. Estos estándares están basados en PSR (PHP Standards Recommendations), las convenciones más aceptadas en la comunidad PHP, y los contenidos del componente "Aplicación del paradigma orientado a objetos" del programa de formación del SENA.

---

## OBJETIVO

Este informe tiene como propósito:

1. Establecer estándares claros para el nombramiento de variables, clases, métodos y propiedades en el proyecto CyberG Suite.

2. Definir cómo estructurar las clases y sus componentes siguiendo principios de orientación a objetos.

3. Documentar las convenciones de código que todos los desarrolladores del proyecto deben seguir.

4. Proporcionar ejemplos prácticos de cómo aplicar estos estándares en el contexto de CyberG Suite.

5. Crear una base de referencia para mantener la consistencia del código a medida que el proyecto crece.

---

## CONCEPTOS FUNDAMENTALES DEL PARADIGMA ORIENTADO A OBJETOS

Antes de definir los estándares de codificación, es importante entender los conceptos básicos del paradigma orientado a objetos que aplicaremos en CyberG Suite.

### Clases y Objetos

Una clase es una plantilla que define las características (atributos) y comportamientos (métodos) que tendrán los objetos. Un objeto es una instancia concreta de una clase, con valores específicos en sus atributos.

En CyberG Suite, por ejemplo, tendríamos una clase `Cliente` que define qué información guardamos de cada cliente (nombre, correo, teléfono) y qué acciones puede realizar (registrarse, autenticarse, actualizar datos).

```php
// La clase define la estructura
class Cliente {
    private $nombre;
    private $correo;
    
    public function obtenerNombre() {
        return $this->nombre;
    }
}

// El objeto es una instancia concreta
$cliente1 = new Cliente();
$cliente1->establecerNombre("Empresa ABC");
```

### Encapsulación

La encapsulación consiste en ocultar los detalles internos de un objeto y exponer solo lo necesario a través de una interfaz pública. Esto protege la integridad de los datos y reduce la complejidad del sistema.

En nuestro proyecto, las propiedades de las clases serán privadas o protegidas, y el acceso se hará a través de métodos públicos (getters y setters). Esto nos permite validar los datos antes de asignarlos y mantener la consistencia.

```php
class Cliente {
    private $correo;  // Propiedad privada (encapsulada)
    
    // Interfaz pública para acceder
    public function establecerCorreo($correo) {
        if ($this->validarCorreo($correo)) {
            $this->correo = $correo;
        } else {
            throw new InvalidArgumentException('Correo inválido');
        }
    }
    
    private function validarCorreo($correo) {
        // Validación interna
        return filter_var($correo, FILTER_VALIDATE_EMAIL);
    }
}
```

### Herencia

La herencia permite que una clase (subclase) herede atributos y métodos de otra clase (superclase), promoviendo la reutilización de código. Esto es útil cuando tenemos entidades que comparten características comunes.

Por ejemplo, en CyberG Suite podríamos tener una clase base `Usuario` de la cual hereden `Cliente` y `Administrador`, compartiendo métodos comunes como autenticación.

```php
// Clase base
class Usuario {
    protected $id;
    protected $correo;
    protected $contrasena;
    
    public function autenticar($correo, $contrasena) {
        // Lógica común de autenticación
    }
}

// Clase que hereda
class Cliente extends Usuario {
    private $nombre;
    private $tipoEmpresa;
    
    // Hereda métodos y propiedades de Usuario
    // Puede agregar funcionalidades específicas
}
```

### Polimorfismo

El polimorfismo permite que diferentes clases puedan ser tratadas como instancias de una misma superclase, permitiendo que un mismo método tenga diferentes implementaciones según la clase que lo utilice.

Esto nos permite escribir código más flexible. Por ejemplo, podríamos tener diferentes tipos de validadores que implementen el mismo método `validar()`, pero cada uno con su lógica específica.

```php
interface Validador {
    public function validar($dato);
}

class ValidadorEmail implements Validador {
    public function validar($dato) {
        return filter_var($dato, FILTER_VALIDATE_EMAIL);
    }
}

class ValidadorTelefono implements Validador {
    public function validar($dato) {
        return preg_match('/^[0-9]{10}$/', $dato);
    }
}

// Podemos usar cualquier validador de la misma manera
function procesar($validador, $dato) {
    if ($validador->validar($dato)) {
        // Procesar dato válido
    }
}
```

### Aplicación en CyberG Suite

En CyberG Suite aplicaremos estos conceptos de la siguiente manera:

- **Clases de Modelo:** Representarán las entidades del sistema (Cliente, Sesion, etc.)
- **Clases de Servicio:** Contendrán la lógica de negocio (ClienteService, AutenticacionService)
- **Clases de Repositorio:** Manejarán el acceso a datos (ClienteRepository, BaseRepository)
- **Encapsulación:** Todas las propiedades serán privadas, acceso mediante métodos
- **Herencia:** Usaremos herencia para clases base comunes (BaseRepository, BaseService)
- **Interfaces:** Definiremos contratos que las clases deben cumplir (Validador, Repositorio)

---

## ESTÁNDARES DE CODIFICACIÓN

Los estándares que seguiremos están basados principalmente en PSR-1 (Basic Coding Standard) y PSR-12 (Extended Coding Style Guide), adaptados a las necesidades específicas de CyberG Suite.

### Principios Generales

- El código debe ser legible y autodocumentado
- Los nombres deben expresar claramente su propósito
- Se debe mantener consistencia en todo el proyecto
- Se prioriza la claridad sobre la brevedad
- Se siguen las convenciones de la comunidad PHP

---

## NOMBRAMIENTO DE VARIABLES

### Variables Locales y Parámetros

Las variables locales y los parámetros de funciones deben usar **camelCase** (primera letra minúscula).

```php
// Correcto
$nombreCliente = "Empresa ABC";
$correoElectronico = "contacto@empresa.com";
$fechaRegistro = new DateTime();
$numeroTelefono = "3001234567";

// Incorrecto
$nombre_cliente = "Empresa ABC";  // snake_case
$CorreoElectronico = "contacto@empresa.com";  // PascalCase
$fecha_registro = new DateTime();  // snake_case
```

### Variables Booleanas

Las variables booleanas deben usar prefijos que indiquen su naturaleza: `is`, `has`, `can`, `should`, `exists`, etc.

```php
// Correcto
$isAutenticado = true;
$hasPermisos = false;
$canEditar = true;
$shouldValidate = true;
$existsCliente = false;

// Incorrecto
$autenticado = true;  // No es claro que es booleano
$permisos = false;  // Ambiguo
```

### Variables de Contador

Para contadores en bucles, usar nombres cortos y descriptivos: `$i`, `$j`, `$k` para bucles simples, o nombres más descriptivos cuando sea necesario.

```php
// Correcto - bucle simple
for ($i = 0; $i < count($clientes); $i++) {
    // ...
}

// Correcto - bucle con contexto
foreach ($clientes as $indice => $cliente) {
    // ...
}

// Correcto - bucle con nombre descriptivo
for ($clienteIndex = 0; $clienteIndex < $total; $clienteIndex++) {
    // ...
}
```

### Variables Temporales

Las variables temporales deben tener nombres descriptivos que indiquen su propósito, incluso si son de corta duración.

```php
// Correcto
$resultadoConsulta = $stmt->get_result();
$datosCliente = $resultadoConsulta->fetch_assoc();
$hashContrasena = password_hash($contrasena, PASSWORD_DEFAULT);

// Incorrecto
$temp = $stmt->get_result();  // Muy genérico
$data = $resultadoConsulta->fetch_assoc();  // Muy genérico
$h = password_hash($contrasena, PASSWORD_DEFAULT);  // Muy corto
```

### Arrays y Colecciones

Los nombres de arrays deben ser plurales cuando contienen múltiples elementos, o usar sufijos descriptivos.

```php
// Correcto
$clientes = [];
$listaEmpresas = [];
$datosRegistro = [];
$configuracion = [];  // Singular cuando es un objeto de configuración

// Incorrecto
$cliente = [];  // Singular para múltiples elementos
$empresa = [];  // Singular para múltiples elementos
```

---

## DECLARACIÓN DE CLASES

### Nomenclatura de Clases

Las clases deben usar **PascalCase** y tener nombres sustantivos que describan su responsabilidad.

```php
// Correcto
class Cliente {}
class Autenticador {}
class GestorBaseDatos {}
class ValidadorFormulario {}
class ServicioEmail {}

// Incorrecto
class cliente {}  // minúscula
class ClienteManager {}  // Mezcla inglés/español
class cliente_servicio {}  // snake_case
```

### Estructura de una Clase

Las clases deben seguir este orden de declaración:

1. Constantes de clase
2. Propiedades estáticas
3. Propiedades de instancia (públicas, protegidas, privadas)
4. Constructor
5. Métodos públicos
6. Métodos protegidos
7. Métodos privados
8. Métodos mágicos (__toString, __get, etc.)

```php
<?php

namespace CyberGSuite\Modelo;

class Cliente
{
    // 1. Constantes
    const ESTADO_ACTIVO = 'activo';
    const ESTADO_INACTIVO = 'inactivo';
    
    // 2. Propiedades estáticas
    private static $totalClientes = 0;
    
    // 3. Propiedades de instancia
    private $idCliente;
    private $nombre;
    private $correo;
    private $telefono;
    private $tipoEmpresa;
    private $fechaRegistro;
    
    // 4. Constructor
    public function __construct($nombre, $correo, $telefono, $tipoEmpresa)
    {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->telefono = $telefono;
        $this->tipoEmpresa = $tipoEmpresa;
        $this->fechaRegistro = new DateTime();
        self::$totalClientes++;
    }
    
    // 5. Métodos públicos
    public function obtenerNombre()
    {
        return $this->nombre;
    }
    
    public function establecerNombre($nombre)
    {
        $this->nombre = $nombre;
    }
    
    // 6. Métodos protegidos
    protected function validarCorreo($correo)
    {
        return filter_var($correo, FILTER_VALIDATE_EMAIL);
    }
    
    // 7. Métodos privados
    private function generarId()
    {
        return uniqid('cliente_', true);
    }
    
    // 8. Métodos mágicos
    public function __toString()
    {
        return $this->nombre . ' (' . $this->correo . ')';
    }
}
```

### Una Clase, Una Responsabilidad

Cada clase debe tener una única responsabilidad bien definida (Principio de Responsabilidad Única - SRP).

```php
// Correcto - Clase enfocada en una responsabilidad
class Cliente
{
    // Solo maneja datos y lógica del cliente
}

class Autenticador
{
    // Solo maneja autenticación
}

class GestorBaseDatos
{
    // Solo maneja operaciones de base de datos
}

// Incorrecto - Clase con múltiples responsabilidades
class ClienteManager
{
    // Maneja datos del cliente
    // Maneja autenticación
    // Maneja base de datos
    // Maneja envío de emails
}
```

---

## DECLARACIÓN DE MÉTODOS

### Nomenclatura de Métodos

Los métodos deben usar **camelCase** y ser verbos que describan la acción que realizan.

```php
// Correcto
public function obtenerCliente($id) {}
public function guardarCliente($cliente) {}
public function validarFormulario($datos) {}
public function enviarEmail($destinatario, $mensaje) {}
public function calcularTotal() {}
public function esValido() {}  // Métodos booleanos con prefijo "es"

// Incorrecto
public function get_cliente($id) {}  // snake_case
public function GuardarCliente($cliente) {}  // PascalCase
public function cliente() {}  // Sustantivo, debería ser verbo
```

### Métodos Getter y Setter

Para acceder a propiedades privadas, usar métodos getter y setter con el prefijo `obtener` y `establecer` (o `get` y `set` si se prefiere inglés).

```php
// Correcto - Estilo español
public function obtenerNombre()
{
    return $this->nombre;
}

public function establecerNombre($nombre)
{
    $this->nombre = $nombre;
}

public function obtenerCorreo()
{
    return $this->correo;
}

// Correcto - Estilo inglés (también válido)
public function getNombre()
{
    return $this->nombre;
}

public function setNombre($nombre)
{
    $this->nombre = $nombre;
}
```

### Métodos Booleanos

Los métodos que retornan booleanos deben usar prefijos como `es`, `tiene`, `puede`, `debe`, etc.

```php
// Correcto
public function esValido()
{
    return !empty($this->nombre) && !empty($this->correo);
}

public function tienePermisos()
{
    return $this->permisos > 0;
}

public function puedeEditar()
{
    return $this->rol === 'admin';
}

public function debeValidar()
{
    return $this->estado === 'pendiente';
}

// Incorrecto
public function valido() {}  // No es claro que retorna booleano
public function permisos() {}  // Ambiguo
```

### Parámetros de Métodos

Los parámetros deben tener nombres descriptivos y usar **camelCase**.

```php
// Correcto
public function buscarClientePorCorreo($correoElectronico)
{
    // ...
}

public function crearSesion($idCliente, $nombreCliente, $tiempoExpiracion = 3600)
{
    // ...
}

public function validarFormulario($datosFormulario, $reglasValidacion)
{
    // ...
}

// Incorrecto
public function buscarClientePorCorreo($email) {}  // Mezcla idiomas
public function crearSesion($id, $n, $t) {}  // Nombres muy cortos
public function validar($d, $r) {}  // Nombres genéricos
```

### Visibilidad de Métodos

Siempre declarar la visibilidad de los métodos (public, protected, private).

```php
// Correcto
public function metodoPublico() {}
protected function metodoProtegido() {}
private function metodoPrivado() {}

// Incorrecto
function metodoSinVisibilidad() {}  // Por defecto es público, pero debe ser explícito
```

### Métodos Estáticos

Los métodos estáticos deben ser usados solo cuando no requieren estado de instancia.

```php
// Correcto
class Validador
{
    public static function validarEmail($correo)
    {
        return filter_var($correo, FILTER_VALIDATE_EMAIL);
    }
    
    public static function sanitizarEntrada($entrada)
    {
        return htmlspecialchars($entrada, ENT_QUOTES, 'UTF-8');
    }
}

// Uso
$esValido = Validador::validarEmail($correo);
```

---

## DECLARACIÓN DE PROPIEDADES

### Nomenclatura de Propiedades

Las propiedades deben usar **camelCase** y tener nombres sustantivos descriptivos.

```php
// Correcto
class Cliente
{
    private $idCliente;
    private $nombreCompleto;
    private $correoElectronico;
    private $numeroTelefono;
    private $fechaRegistro;
    private $esActivo;
}

// Incorrecto
class Cliente
{
    private $id_cliente;  // snake_case
    private $NombreCompleto;  // PascalCase
    private $email;  // Mezcla idiomas
    private $tel;  // Muy corto
}
```

### Visibilidad de Propiedades

Las propiedades deben ser privadas o protegidas, nunca públicas. El acceso debe ser a través de métodos getter/setter.

```php
// Correcto
class Cliente
{
    private $nombre;
    private $correo;
    
    public function obtenerNombre()
    {
        return $this->nombre;
    }
    
    public function establecerNombre($nombre)
    {
        $this->nombre = $nombre;
    }
}

// Incorrecto
class Cliente
{
    public $nombre;  // Propiedad pública
    public $correo;   // Propiedad pública
}
```

### Propiedades Estáticas

Las propiedades estáticas deben usar el mismo estilo de nomenclatura y ser privadas cuando sea posible.

```php
// Correcto
class Configuracion
{
    private static $instancia = null;
    private static $configuracionBaseDatos = [];
    public static $version = '1.0.0';
}
```

### Inicialización de Propiedades

Las propiedades deben inicializarse en el constructor o con valores por defecto en la declaración.

```php
// Correcto
class Cliente
{
    private $nombre = '';
    private $correo = '';
    private $esActivo = false;
    private $fechaRegistro;
    
    public function __construct($nombre, $correo)
    {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->fechaRegistro = new DateTime();
    }
}
```

---

## CONSTANTES Y CONSTANTES DE CLASE

### Nomenclatura de Constantes

Las constantes deben usar **UPPER_SNAKE_CASE** (mayúsculas con guiones bajos).

```php
// Correcto
define('RUTA_BASE', '/Applications/XAMPP/xamppfiles/htdocs/CyberG-Suite');
define('TIEMPO_SESION', 3600);
define('LONGITUD_MINIMA_CONTRASENA', 6);

// Constantes de clase
class Cliente
{
    const ESTADO_ACTIVO = 'activo';
    const ESTADO_INACTIVO = 'inactivo';
    const TIPO_EMPRESA_PEQUENA = 'pequeña';
    const TIPO_EMPRESA_MEDIANA = 'mediana';
    const TIPO_EMPRESA_GRANDE = 'grande';
}

// Incorrecto
define('rutaBase', '/path');  // camelCase
define('RutaBase', '/path');  // PascalCase
class Cliente
{
    const estadoActivo = 'activo';  // camelCase
    const EstadoActivo = 'activo';  // PascalCase
}
```

### Uso de Constantes

Las constantes deben usarse en lugar de valores mágicos (magic numbers/strings) en el código.

```php
// Correcto
if ($cliente->obtenerEstado() === Cliente::ESTADO_ACTIVO) {
    // ...
}

if (strlen($contrasena) < LONGITUD_MINIMA_CONTRASENA) {
    // ...
}

// Incorrecto
if ($cliente->obtenerEstado() === 'activo') {  // String mágico
    // ...
}

if (strlen($contrasena) < 6) {  // Número mágico
    // ...
}
```

---

## ESTRUCTURA DE ARCHIVOS Y NAMESPACES

### Estructura de Directorios

El proyecto debe organizarse por capas y responsabilidades:

```
CyberG-Suite/
├── src/
│   ├── Modelo/          # Clases de modelo (entidades)
│   │   ├── Cliente.php
│   │   └── Sesion.php
│   ├── Controlador/    # Controladores
│   │   ├── ClienteController.php
│   │   └── AutenticacionController.php
│   ├── Servicio/       # Lógica de negocio
│   │   ├── ClienteService.php
│   │   └── EmailService.php
│   ├── Repositorio/   # Acceso a datos
│   │   ├── ClienteRepository.php
│   │   └── BaseRepository.php
│   └── Util/          # Utilidades
│       ├── Validador.php
│       └── Sanitizador.php
├── config/            # Configuraciones
├── public/           # Archivos públicos (index.php, assets)
└── tests/            # Pruebas
```

### Namespaces

Cada clase debe estar en un namespace que refleje su ubicación en la estructura de directorios.

```php
// Archivo: src/Modelo/Cliente.php
<?php

namespace CyberGSuite\Modelo;

class Cliente
{
    // ...
}

// Archivo: src/Controlador/ClienteController.php
<?php

namespace CyberGSuite\Controlador;

use CyberGSuite\Modelo\Cliente;
use CyberGSuite\Servicio\ClienteService;

class ClienteController
{
    // ...
}
```

### Declaración de Namespace

El namespace debe declararse después de la etiqueta de apertura `<?php` y antes de cualquier otro código (excepto comentarios de archivo).

```php
<?php

namespace CyberGSuite\Modelo;

// Código de la clase
```

### Uso de use

Usar la declaración `use` para importar clases de otros namespaces.

```php
<?php

namespace CyberGSuite\Controlador;

use CyberGSuite\Modelo\Cliente;
use CyberGSuite\Servicio\ClienteService;
use CyberGSuite\Repositorio\ClienteRepository;
use DateTime;

class ClienteController
{
    // ...
}
```

---

## COMENTARIOS Y DOCUMENTACIÓN

### Comentarios de Clase

Cada clase debe tener un bloque de documentación PHPDoc que explique su propósito.

```php
<?php

namespace CyberGSuite\Modelo;

/**
 * Representa un cliente en el sistema CyberG Suite.
 * 
 * Esta clase encapsula los datos y comportamiento relacionado
 * con los clientes que se registran en la plataforma.
 * 
 * @package CyberGSuite\Modelo
 * @author Cristian Ferney Castaño Torres
 * @version 1.0
 */
class Cliente
{
    // ...
}
```

### Comentarios de Métodos

Los métodos públicos y protegidos deben tener documentación PHPDoc.

```php
/**
 * Obtiene el nombre completo del cliente.
 * 
 * @return string El nombre del cliente
 */
public function obtenerNombre()
{
    return $this->nombre;
}

/**
 * Establece el nombre del cliente.
 * 
 * @param string $nombre El nombre a establecer
 * @return void
 * @throws InvalidArgumentException Si el nombre está vacío
 */
public function establecerNombre($nombre)
{
    if (empty($nombre)) {
        throw new InvalidArgumentException('El nombre no puede estar vacío');
    }
    $this->nombre = $nombre;
}

/**
 * Valida si el correo electrónico del cliente es válido.
 * 
 * @param string $correo El correo a validar
 * @return bool True si es válido, false en caso contrario
 */
public function validarCorreo($correo)
{
    return filter_var($correo, FILTER_VALIDATE_EMAIL) !== false;
}
```

### Comentarios Inline

Los comentarios inline deben explicar el "por qué", no el "qué". El código debe ser lo suficientemente claro para no necesitar comentarios que expliquen qué hace.

```php
// Correcto - Explica el por qué
// Usamos prepared statements para prevenir SQL injection
$stmt = $conn->prepare($sql);

// Validamos el correo antes de guardar para evitar datos inválidos
if (!$this->validarCorreo($correo)) {
    throw new InvalidArgumentException('Correo inválido');
}

// Incorrecto - Explica el qué (el código ya lo hace)
// Asignamos el valor de nombre a la propiedad nombre
$this->nombre = $nombre;

// Retornamos el nombre
return $this->nombre;
```

---

## MANEJO DE EXCEPCIONES

### Nomenclatura de Excepciones

Las clases de excepción deben terminar con `Exception` y usar PascalCase.

```php
// Correcto
class ClienteNoEncontradoException extends Exception {}
class CorreoInvalidoException extends Exception {}
class ContrasenaInvalidaException extends Exception {}

// Incorrecto
class cliente_no_encontrado extends Exception {}  // snake_case
class ClienteError extends Exception {}  // No termina en Exception
```

### Lanzamiento de Excepciones

Usar excepciones específicas en lugar de excepciones genéricas cuando sea posible.

```php
// Correcto
if (empty($correo)) {
    throw new InvalidArgumentException('El correo no puede estar vacío');
}

if (!$this->existeCliente($idCliente)) {
    throw new ClienteNoEncontradoException("Cliente con ID {$idCliente} no encontrado");
}

// Incorrecto
if (empty($correo)) {
    throw new Exception('Error');  // Muy genérico
}
```

### Manejo de Excepciones

Capturar excepciones específicas y manejar cada caso apropiadamente.

```php
// Correcto
try {
    $cliente = $repositorio->buscarPorId($id);
} catch (ClienteNoEncontradoException $e) {
    // Manejar cliente no encontrado
    $mensaje = 'Cliente no encontrado';
} catch (DatabaseException $e) {
    // Manejar error de base de datos
    $mensaje = 'Error al conectar con la base de datos';
} catch (Exception $e) {
    // Manejar otros errores
    $mensaje = 'Ha ocurrido un error inesperado';
}
```

---

## EJEMPLOS DE IMPLEMENTACIÓN

### Ejemplo 1: Clase Cliente

```php
<?php

namespace CyberGSuite\Modelo;

use DateTime;
use InvalidArgumentException;

/**
 * Representa un cliente en el sistema CyberG Suite.
 * 
 * @package CyberGSuite\Modelo
 */
class Cliente
{
    // Constantes
    const ESTADO_ACTIVO = 'activo';
    const ESTADO_INACTIVO = 'inactivo';
    
    // Propiedades
    private $idCliente;
    private $nombre;
    private $correo;
    private $telefono;
    private $tipoEmpresa;
    private $contrasena;
    private $fechaRegistro;
    private $estado;
    
    // Constructor
    public function __construct($nombre, $correo, $telefono, $tipoEmpresa)
    {
        $this->establecerNombre($nombre);
        $this->establecerCorreo($correo);
        $this->establecerTelefono($telefono);
        $this->establecerTipoEmpresa($tipoEmpresa);
        $this->fechaRegistro = new DateTime();
        $this->estado = self::ESTADO_ACTIVO;
    }
    
    // Getters
    public function obtenerIdCliente()
    {
        return $this->idCliente;
    }
    
    public function obtenerNombre()
    {
        return $this->nombre;
    }
    
    public function obtenerCorreo()
    {
        return $this->correo;
    }
    
    // Setters con validación
    public function establecerNombre($nombre)
    {
        if (empty(trim($nombre))) {
            throw new InvalidArgumentException('El nombre no puede estar vacío');
        }
        $this->nombre = trim($nombre);
    }
    
    public function establecerCorreo($correo)
    {
        if (!$this->validarCorreo($correo)) {
            throw new InvalidArgumentException('El correo electrónico no es válido');
        }
        $this->correo = strtolower(trim($correo));
    }
    
    public function establecerContrasena($contrasena)
    {
        if (strlen($contrasena) < 6) {
            throw new InvalidArgumentException('La contraseña debe tener al menos 6 caracteres');
        }
        $this->contrasena = password_hash($contrasena, PASSWORD_DEFAULT);
    }
    
    // Métodos de validación
    public function validarCorreo($correo)
    {
        return filter_var($correo, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    public function esActivo()
    {
        return $this->estado === self::ESTADO_ACTIVO;
    }
    
    // Métodos mágicos
    public function __toString()
    {
        return $this->nombre . ' (' . $this->correo . ')';
    }
}
```

### Ejemplo 2: Clase Repositorio

```php
<?php

namespace CyberGSuite\Repositorio;

use CyberGSuite\Modelo\Cliente;
use CyberGSuite\Modelo\ClienteNoEncontradoException;
use mysqli;

/**
 * Maneja las operaciones de base de datos para clientes.
 * 
 * @package CyberGSuite\Repositorio
 */
class ClienteRepository
{
    private $conexion;
    
    public function __construct(mysqli $conexion)
    {
        $this->conexion = $conexion;
    }
    
    /**
     * Busca un cliente por su ID.
     * 
     * @param int $idCliente El ID del cliente
     * @return Cliente El cliente encontrado
     * @throws ClienteNoEncontradoException Si el cliente no existe
     */
    public function buscarPorId($idCliente)
    {
        $sql = "SELECT * FROM CLIENTE WHERE id_cliente = ? LIMIT 1";
        $stmt = $this->conexion->prepare($sql);
        
        if (!$stmt) {
            throw new DatabaseException('Error al preparar la consulta');
        }
        
        $stmt->bind_param("i", $idCliente);
        $stmt->execute();
        $resultado = $stmt->get_result();
        
        if ($resultado->num_rows === 0) {
            throw new ClienteNoEncontradoException("Cliente con ID {$idCliente} no encontrado");
        }
        
        $datos = $resultado->fetch_assoc();
        return $this->mapearACliente($datos);
    }
    
    /**
     * Guarda un cliente en la base de datos.
     * 
     * @param Cliente $cliente El cliente a guardar
     * @return int El ID del cliente guardado
     */
    public function guardar(Cliente $cliente)
    {
        $sql = "INSERT INTO CLIENTE (nombre, tipo_empresa, correo, telefono, contrasena) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conexion->prepare($sql);
        
        $nombre = $cliente->obtenerNombre();
        $tipoEmpresa = $cliente->obtenerTipoEmpresa();
        $correo = $cliente->obtenerCorreo();
        $telefono = $cliente->obtenerTelefono();
        $contrasena = $cliente->obtenerContrasena();
        
        $stmt->bind_param("sssss", $nombre, $tipoEmpresa, $correo, $telefono, $contrasena);
        
        if (!$stmt->execute()) {
            throw new DatabaseException('Error al guardar el cliente: ' . $stmt->error);
        }
        
        return $this->conexion->insert_id;
    }
    
    /**
     * Mapea un array de datos a un objeto Cliente.
     * 
     * @param array $datos Los datos del cliente
     * @return Cliente El objeto Cliente
     */
    private function mapearACliente($datos)
    {
        $cliente = new Cliente(
            $datos['nombre'],
            $datos['correo'],
            $datos['telefono'],
            $datos['tipo_empresa']
        );
        
        // Establecer propiedades adicionales si existen
        if (isset($datos['id_cliente'])) {
            $cliente->establecerIdCliente($datos['id_cliente']);
        }
        
        return $cliente;
    }
}
```

### Ejemplo 3: Clase de Servicio

```php
<?php

namespace CyberGSuite\Servicio;

use CyberGSuite\Modelo\Cliente;
use CyberGSuite\Repositorio\ClienteRepository;
use CyberGSuite\Modelo\ClienteNoEncontradoException;

/**
 * Contiene la lógica de negocio para clientes.
 * 
 * @package CyberGSuite\Servicio
 */
class ClienteService
{
    private $repositorio;
    
    public function __construct(ClienteRepository $repositorio)
    {
        $this->repositorio = $repositorio;
    }
    
    /**
     * Registra un nuevo cliente en el sistema.
     * 
     * @param array $datosRegistro Los datos del registro
     * @return Cliente El cliente registrado
     * @throws InvalidArgumentException Si los datos son inválidos
     */
    public function registrarCliente($datosRegistro)
    {
        // Validar datos
        $this->validarDatosRegistro($datosRegistro);
        
        // Verificar si el correo ya existe
        if ($this->existeClientePorCorreo($datosRegistro['correo'])) {
            throw new InvalidArgumentException('El correo electrónico ya está registrado');
        }
        
        // Crear cliente
        $cliente = new Cliente(
            $datosRegistro['nombre'],
            $datosRegistro['correo'],
            $datosRegistro['telefono'],
            $datosRegistro['tipo_empresa']
        );
        
        $cliente->establecerContrasena($datosRegistro['contrasena']);
        
        // Guardar en base de datos
        $idCliente = $this->repositorio->guardar($cliente);
        $cliente->establecerIdCliente($idCliente);
        
        return $cliente;
    }
    
    /**
     * Valida los datos de registro.
     * 
     * @param array $datos Los datos a validar
     * @return void
     * @throws InvalidArgumentException Si los datos son inválidos
     */
    private function validarDatosRegistro($datos)
    {
        $camposRequeridos = ['nombre', 'correo', 'telefono', 'tipo_empresa', 'contrasena'];
        
        foreach ($camposRequeridos as $campo) {
            if (empty($datos[$campo])) {
                throw new InvalidArgumentException("El campo {$campo} es requerido");
            }
        }
        
        if (strlen($datos['contrasena']) < 6) {
            throw new InvalidArgumentException('La contraseña debe tener al menos 6 caracteres');
        }
    }
    
    /**
     * Verifica si existe un cliente con el correo dado.
     * 
     * @param string $correo El correo a verificar
     * @return bool True si existe, false en caso contrario
     */
    private function existeClientePorCorreo($correo)
    {
        try {
            $this->repositorio->buscarPorCorreo($correo);
            return true;
        } catch (ClienteNoEncontradoException $e) {
            return false;
        }
    }
}
```

---

## RECURSOS INSTITUCIONALES

Este informe se basa en los contenidos y materiales proporcionados por el SENA a través de su plataforma de aprendizaje virtual. Los conceptos fundamentales del paradigma orientado a objetos (clases, objetos, encapsulación, herencia y polimorfismo) presentados en la sección correspondiente, así como los estándares de codificación y buenas prácticas, han sido consultados en los recursos institucionales disponibles.

Los estándares y conceptos presentados en este documento complementan y aplican los conocimientos adquiridos en el componente "Aplicación del paradigma orientado a objetos" del programa de formación, adaptándolos específicamente al contexto del proyecto CyberG Suite.

---

## CONCLUSIONES

Establecer estándares de codificación claros es fundamental para mantener la calidad y consistencia del código en CyberG Suite. Los estándares definidos en este documento:

1. Facilitan la colaboración entre desarrolladores al tener reglas claras y consistentes.

2. Mejoran la legibilidad del código, haciendo que sea más fácil entender y mantener.

3. Reducen errores comunes al seguir convenciones probadas por la comunidad PHP.

4. Permiten escalar el proyecto de manera organizada, separando responsabilidades en clases bien definidas.

5. Facilitan la incorporación de nuevos desarrolladores al tener documentación clara de cómo escribir código.

La aplicación del paradigma orientado a objetos en CyberG Suite, siguiendo estos estándares, permitirá crear un código más robusto, mantenible y escalable. A medida que el proyecto crezca, estos estándares servirán como guía para mantener la calidad del código.

---

## REFERENCIAS

1. **PSR-1: Basic Coding Standard**
   - URL: https://www.php-fig.org/psr/psr-1/
   - Acceso: 2024

2. **PSR-12: Extended Coding Style Guide**
   - URL: https://www.php-fig.org/psr/psr-12/
   - Acceso: 2024

3. **PHP Manual - Classes and Objects**
   - URL: https://www.php.net/manual/en/language.oop5.php
   - Acceso: 2024

4. **PHP The Right Way - Coding Practices**
   - URL: https://phptherightway.com/
   - Acceso: 2024

5. **Clean Code: A Handbook of Agile Software Craftsmanship**
   - Autor: Robert C. Martin
   - Editorial: Prentice Hall

6. **PHP-FIG (Framework Interop Group)**
   - URL: https://www.php-fig.org/
   - Acceso: 2024

7. **SENA - OVA: Aplicación del Paradigma Orientado a Objetos (CF28)**
   - URL: https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Tecnologia/228118/Contenido/OVA/CF28/index.html#/
   - Institución: Servicio Nacional de Aprendizaje (SENA)
   - Acceso: 2024

---

**Fin del Informe**

---

*Este documento forma parte de la documentación técnica del proyecto CyberG Suite y debe ser consultado por todos los desarrolladores del proyecto.*

