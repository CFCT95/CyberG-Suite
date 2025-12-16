package co.sena.cybergsuite.dao;

import co.sena.cybergsuite.conexion.ConexionBD;
import co.sena.cybergsuite.modelo.Cliente;

import java.sql.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Clase Data Access Object (DAO) para la entidad Cliente.
 * Implementa las operaciones CRUD (Create, Read, Update, Delete) 
 * utilizando JDBC y PreparedStatement para prevenir SQL Injection.
 * 
 * @author Cristian Ferney Castaño Torres
 * @version 1.0
 * @since 2025-11-26
 */
public class ClienteDAO {
    
    // Consultas SQL preparadas
    private static final String INSERTAR = 
        "INSERT INTO CLIENTE (nombre, tipo_empresa, correo, telefono, contrasena) VALUES (?, ?, ?, ?, ?)";
    
    private static final String CONSULTAR_TODOS = 
        "SELECT id_cliente, nombre, tipo_empresa, correo, telefono, contrasena, fecha_registro FROM CLIENTE ORDER BY fecha_registro DESC";
    
    private static final String CONSULTAR_POR_ID = 
        "SELECT id_cliente, nombre, tipo_empresa, correo, telefono, contrasena, fecha_registro FROM CLIENTE WHERE id_cliente = ?";
    
    private static final String CONSULTAR_POR_CORREO = 
        "SELECT id_cliente, nombre, tipo_empresa, correo, telefono, contrasena, fecha_registro FROM CLIENTE WHERE correo = ?";
    
    private static final String ACTUALIZAR = 
        "UPDATE CLIENTE SET nombre = ?, tipo_empresa = ?, correo = ?, telefono = ? WHERE id_cliente = ?";
    
    private static final String ELIMINAR = 
        "DELETE FROM CLIENTE WHERE id_cliente = ?";
    
    /**
     * Inserta un nuevo cliente en la base de datos (CREATE).
     * 
     * @param cliente Objeto Cliente con los datos a insertar
     * @return true si la inserción fue exitosa, false en caso contrario
     * @throws SQLException Si ocurre un error en la operación de base de datos
     */
    public boolean insertar(Cliente cliente) throws SQLException {
        Connection conexion = null;
        PreparedStatement preparedStatement = null;
        boolean exito = false;
        
        try {
            conexion = ConexionBD.obtenerConexion();
            preparedStatement = conexion.prepareStatement(INSERTAR, Statement.RETURN_GENERATED_KEYS);
            
            // Establecer parámetros del PreparedStatement
            preparedStatement.setString(1, cliente.getNombre());
            preparedStatement.setString(2, cliente.getTipoEmpresa());
            preparedStatement.setString(3, cliente.getCorreo());
            preparedStatement.setString(4, cliente.getTelefono());
            preparedStatement.setString(5, cliente.getContrasena());
            
            // Ejecutar la inserción
            int filasAfectadas = preparedStatement.executeUpdate();
            
            if (filasAfectadas > 0) {
                // Obtener el ID generado automáticamente
                ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
                if (generatedKeys.next()) {
                    cliente.setIdCliente(generatedKeys.getInt(1));
                }
                exito = true;
                System.out.println("✅ Cliente insertado exitosamente con ID: " + cliente.getIdCliente());
            }
            
        } catch (SQLException e) {
            System.err.println("❌ Error al insertar cliente: " + e.getMessage());
            throw e;
        } finally {
            cerrarRecursos(preparedStatement, null);
        }
        
        return exito;
    }
    
    /**
     * Consulta todos los clientes de la base de datos (READ - Todos).
     * 
     * @return Lista de todos los clientes encontrados
     * @throws SQLException Si ocurre un error en la operación de base de datos
     */
    public List<Cliente> consultarTodos() throws SQLException {
        List<Cliente> clientes = new ArrayList<>();
        Connection conexion = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        
        try {
            conexion = ConexionBD.obtenerConexion();
            preparedStatement = conexion.prepareStatement(CONSULTAR_TODOS);
            resultSet = preparedStatement.executeQuery();
            
            while (resultSet.next()) {
                Cliente cliente = mapearResultSetACliente(resultSet);
                clientes.add(cliente);
            }
            
            System.out.println("✅ Se encontraron " + clientes.size() + " cliente(s)");
            
        } catch (SQLException e) {
            System.err.println("❌ Error al consultar clientes: " + e.getMessage());
            throw e;
        } finally {
            cerrarRecursos(preparedStatement, resultSet);
        }
        
        return clientes;
    }
    
    /**
     * Consulta un cliente por su ID (READ - Por ID).
     * 
     * @param idCliente ID del cliente a buscar
     * @return Cliente encontrado o null si no existe
     * @throws SQLException Si ocurre un error en la operación de base de datos
     */
    public Cliente consultarPorId(int idCliente) throws SQLException {
        Cliente cliente = null;
        Connection conexion = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        
        try {
            conexion = ConexionBD.obtenerConexion();
            preparedStatement = conexion.prepareStatement(CONSULTAR_POR_ID);
            preparedStatement.setInt(1, idCliente);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                cliente = mapearResultSetACliente(resultSet);
                System.out.println("✅ Cliente encontrado: " + cliente.getNombre());
            } else {
                System.out.println("⚠️  No se encontró cliente con ID: " + idCliente);
            }
            
        } catch (SQLException e) {
            System.err.println("❌ Error al consultar cliente por ID: " + e.getMessage());
            throw e;
        } finally {
            cerrarRecursos(preparedStatement, resultSet);
        }
        
        return cliente;
    }
    
    /**
     * Consulta un cliente por su correo electrónico (READ - Por correo).
     * 
     * @param correo Correo electrónico del cliente a buscar
     * @return Cliente encontrado o null si no existe
     * @throws SQLException Si ocurre un error en la operación de base de datos
     */
    public Cliente consultarPorCorreo(String correo) throws SQLException {
        Cliente cliente = null;
        Connection conexion = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        
        try {
            conexion = ConexionBD.obtenerConexion();
            preparedStatement = conexion.prepareStatement(CONSULTAR_POR_CORREO);
            preparedStatement.setString(1, correo);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                cliente = mapearResultSetACliente(resultSet);
                System.out.println("✅ Cliente encontrado: " + cliente.getNombre());
            } else {
                System.out.println("⚠️  No se encontró cliente con correo: " + correo);
            }
            
        } catch (SQLException e) {
            System.err.println("❌ Error al consultar cliente por correo: " + e.getMessage());
            throw e;
        } finally {
            cerrarRecursos(preparedStatement, resultSet);
        }
        
        return cliente;
    }
    
    /**
     * Actualiza los datos de un cliente existente (UPDATE).
     * 
     * @param cliente Objeto Cliente con los datos actualizados
     * @return true si la actualización fue exitosa, false en caso contrario
     * @throws SQLException Si ocurre un error en la operación de base de datos
     */
    public boolean actualizar(Cliente cliente) throws SQLException {
        Connection conexion = null;
        PreparedStatement preparedStatement = null;
        boolean exito = false;
        
        try {
            conexion = ConexionBD.obtenerConexion();
            preparedStatement = conexion.prepareStatement(ACTUALIZAR);
            
            // Establecer parámetros del PreparedStatement
            preparedStatement.setString(1, cliente.getNombre());
            preparedStatement.setString(2, cliente.getTipoEmpresa());
            preparedStatement.setString(3, cliente.getCorreo());
            preparedStatement.setString(4, cliente.getTelefono());
            preparedStatement.setInt(5, cliente.getIdCliente());
            
            // Ejecutar la actualización
            int filasAfectadas = preparedStatement.executeUpdate();
            
            if (filasAfectadas > 0) {
                exito = true;
                System.out.println("✅ Cliente actualizado exitosamente (ID: " + cliente.getIdCliente() + ")");
            } else {
                System.out.println("⚠️  No se encontró cliente con ID: " + cliente.getIdCliente());
            }
            
        } catch (SQLException e) {
            System.err.println("❌ Error al actualizar cliente: " + e.getMessage());
            throw e;
        } finally {
            cerrarRecursos(preparedStatement, null);
        }
        
        return exito;
    }
    
    /**
     * Elimina un cliente de la base de datos (DELETE).
     * 
     * @param idCliente ID del cliente a eliminar
     * @return true si la eliminación fue exitosa, false en caso contrario
     * @throws SQLException Si ocurre un error en la operación de base de datos
     */
    public boolean eliminar(int idCliente) throws SQLException {
        Connection conexion = null;
        PreparedStatement preparedStatement = null;
        boolean exito = false;
        
        try {
            conexion = ConexionBD.obtenerConexion();
            preparedStatement = conexion.prepareStatement(ELIMINAR);
            preparedStatement.setInt(1, idCliente);
            
            // Ejecutar la eliminación
            int filasAfectadas = preparedStatement.executeUpdate();
            
            if (filasAfectadas > 0) {
                exito = true;
                System.out.println("✅ Cliente eliminado exitosamente (ID: " + idCliente + ")");
            } else {
                System.out.println("⚠️  No se encontró cliente con ID: " + idCliente);
            }
            
        } catch (SQLException e) {
            System.err.println("❌ Error al eliminar cliente: " + e.getMessage());
            throw e;
        } finally {
            cerrarRecursos(preparedStatement, null);
        }
        
        return exito;
    }
    
    /**
     * Mapea un ResultSet a un objeto Cliente.
     * 
     * @param resultSet ResultSet con los datos del cliente
     * @return Objeto Cliente mapeado
     * @throws SQLException Si ocurre un error al leer los datos
     */
    private Cliente mapearResultSetACliente(ResultSet resultSet) throws SQLException {
        Cliente cliente = new Cliente();
        
        cliente.setIdCliente(resultSet.getInt("id_cliente"));
        cliente.setNombre(resultSet.getString("nombre"));
        cliente.setTipoEmpresa(resultSet.getString("tipo_empresa"));
        cliente.setCorreo(resultSet.getString("correo"));
        cliente.setTelefono(resultSet.getString("telefono"));
        cliente.setContrasena(resultSet.getString("contrasena"));
        
        // Convertir Timestamp a LocalDateTime
        Timestamp timestamp = resultSet.getTimestamp("fecha_registro");
        if (timestamp != null) {
            cliente.setFechaRegistro(timestamp.toLocalDateTime());
        }
        
        return cliente;
    }
    
    /**
     * Cierra los recursos de base de datos (PreparedStatement y ResultSet).
     * 
     * @param preparedStatement PreparedStatement a cerrar
     * @param resultSet ResultSet a cerrar
     */
    private void cerrarRecursos(PreparedStatement preparedStatement, ResultSet resultSet) {
        try {
            if (resultSet != null) {
                resultSet.close();
            }
            if (preparedStatement != null) {
                preparedStatement.close();
            }
        } catch (SQLException e) {
            System.err.println("⚠️  Error al cerrar recursos: " + e.getMessage());
        }
    }
}

