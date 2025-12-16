package co.sena.cybergsuite.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Clase responsable de gestionar la conexión con la base de datos MySQL.
 * Implementa el patrón Singleton para asegurar una única instancia de conexión.
 * 
 * @author Cristian Ferney Castaño Torres
 * @version 1.0
 * @since 2025-11-26
 */
public class ConexionBD {
    
    // Constantes de configuración de la base de datos
    private static final String URL = "jdbc:mysql://127.0.0.1:3306/improve?useSSL=false&serverTimezone=UTC&characterEncoding=UTF-8";
    private static final String USUARIO = "root";
    private static final String CONTRASENA = "";
    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    
    // Instancia única de la conexión (Singleton)
    private static Connection conexion = null;
    
    /**
     * Constructor privado para prevenir instanciación directa (Singleton).
     */
    private ConexionBD() {
    }
    
    /**
     * Obtiene una conexión a la base de datos.
     * Si la conexión no existe o está cerrada, crea una nueva.
     * 
     * @return Objeto Connection para interactuar con la base de datos
     * @throws SQLException Si ocurre un error al establecer la conexión
     */
    public static Connection obtenerConexion() throws SQLException {
        try {
            // Cargar el driver JDBC de MySQL
            Class.forName(DRIVER);
            
            // Si la conexión no existe o está cerrada, crear una nueva
            if (conexion == null || conexion.isClosed()) {
                conexion = DriverManager.getConnection(URL, USUARIO, CONTRASENA);
                System.out.println("✅ Conexión establecida exitosamente con la base de datos");
            }
            
            return conexion;
            
        } catch (ClassNotFoundException e) {
            System.err.println("❌ Error: No se encontró el driver JDBC de MySQL");
            System.err.println("   Asegúrate de tener mysql-connector-java en el classpath");
            throw new SQLException("Driver no encontrado", e);
            
        } catch (SQLException e) {
            System.err.println("❌ Error al conectar con la base de datos:");
            System.err.println("   " + e.getMessage());
            throw e;
        }
    }
    
    /**
     * Cierra la conexión con la base de datos.
     * 
     * @throws SQLException Si ocurre un error al cerrar la conexión
     */
    public static void cerrarConexion() throws SQLException {
        if (conexion != null && !conexion.isClosed()) {
            conexion.close();
            System.out.println("✅ Conexión cerrada exitosamente");
        }
    }
    
    /**
     * Verifica si la conexión está activa.
     * 
     * @return true si la conexión está activa, false en caso contrario
     */
    public static boolean estaConectado() {
        try {
            return conexion != null && !conexion.isClosed();
        } catch (SQLException e) {
            return false;
        }
    }
    
    /**
     * Muestra información de la conexión actual.
     */
    public static void mostrarInformacionConexion() {
        if (estaConectado()) {
            try {
                System.out.println("\n📊 Información de Conexión:");
                System.out.println("   URL: " + URL);
                System.out.println("   Usuario: " + USUARIO);
                System.out.println("   Estado: Conectado ✅");
                System.out.println("   Base de datos: improve");
                System.out.println("   Tabla: CLIENTE\n");
            } catch (Exception e) {
                System.err.println("Error al obtener información de conexión: " + e.getMessage());
            }
        } else {
            System.out.println("❌ No hay conexión activa con la base de datos");
        }
    }
}

