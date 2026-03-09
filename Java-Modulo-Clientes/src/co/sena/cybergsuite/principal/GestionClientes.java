package co.sena.cybergsuite.principal;

import co.sena.cybergsuite.conexion.ConexionBD;
import co.sena.cybergsuite.dao.ClienteDAO;
import co.sena.cybergsuite.modelo.Cliente;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

/**
 * Clase principal que demuestra las funcionalidades CRUD del módulo de gestión de clientes.
 * Esta clase proporciona una interfaz de consola para interactuar con la base de datos.
 * 
 * @author Cristian Ferney Castaño Torres
 * @version 1.0
 * @since 2025-11-26
 */
public class GestionClientes {
    
    private static Scanner scanner = new Scanner(System.in);
    private static ClienteDAO clienteDAO = new ClienteDAO();
    
    /**
     * Método principal que inicia la aplicación.
     * 
     * @param args Argumentos de línea de comandos (no utilizados)
     */
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║     CYBERG SUITE - MÓDULO DE GESTIÓN DE CLIENTES          ║");
        System.out.println("║     Implementación Java con JDBC                          ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        try {
            // Verificar conexión
            ConexionBD.obtenerConexion();
            ConexionBD.mostrarInformacionConexion();
            
            // Menú principal
            mostrarMenu();
            
        } catch (SQLException e) {
            System.err.println("\n❌ Error crítico: No se pudo establecer conexión con la base de datos");
            System.err.println("   Verifica que MySQL esté corriendo y la configuración sea correcta");
            System.err.println("   Detalles: " + e.getMessage());
        } finally {
            try {
                ConexionBD.cerrarConexion();
            } catch (SQLException e) {
                System.err.println("Error al cerrar conexión: " + e.getMessage());
            }
            scanner.close();
        }
    }
    
    /**
     * Muestra el menú principal y procesa las opciones del usuario.
     */
    private static void mostrarMenu() {
        int opcion;
        
        do {
            System.out.println("\n╔════════════════════════════════════════════════════════════╗");
            System.out.println("║                    MENÚ PRINCIPAL                          ║");
            System.out.println("╠════════════════════════════════════════════════════════════╣");
            System.out.println("║  1. INSERTAR nuevo cliente (CREATE)                       ║");
            System.out.println("║  2. CONSULTAR todos los clientes (READ - Todos)           ║");
            System.out.println("║  3. CONSULTAR cliente por ID (READ - Por ID)                ║");
            System.out.println("║  4. CONSULTAR cliente por correo (READ - Por correo)       ║");
            System.out.println("║  5. ACTUALIZAR cliente (UPDATE)                            ║");
            System.out.println("║  6. ELIMINAR cliente (DELETE)                              ║");
            System.out.println("║  7. Demostración completa CRUD                           ║");
            System.out.println("║  0. SALIR                                                   ║");
            System.out.println("╚════════════════════════════════════════════════════════════╝");
            System.out.print("\nSeleccione una opción: ");
            
            try {
                opcion = Integer.parseInt(scanner.nextLine());
                
                switch (opcion) {
                    case 1:
                        insertarCliente();
                        break;
                    case 2:
                        consultarTodos();
                        break;
                    case 3:
                        consultarPorId();
                        break;
                    case 4:
                        consultarPorCorreo();
                        break;
                    case 5:
                        actualizarCliente();
                        break;
                    case 6:
                        eliminarCliente();
                        break;
                    case 7:
                        demostracionCompleta();
                        break;
                    case 0:
                        System.out.println("\n👋 ¡Hasta luego!");
                        break;
                    default:
                        System.out.println("\n⚠️  Opción no válida. Por favor, seleccione una opción del menú.");
                }
            } catch (NumberFormatException e) {
                System.out.println("\n⚠️  Error: Debe ingresar un número válido.");
                opcion = -1;
            } catch (SQLException e) {
                System.err.println("\n❌ Error en la operación: " + e.getMessage());
                opcion = -1;
            }
            
        } while (opcion != 0);
    }
    
    /**
     * Inserta un nuevo cliente en la base de datos (CREATE).
     */
    private static void insertarCliente() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║              INSERTAR NUEVO CLIENTE (CREATE)                ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        Cliente cliente = new Cliente();
        
        System.out.print("Nombre completo: ");
        cliente.setNombre(scanner.nextLine());
        
        System.out.print("Tipo de empresa: ");
        cliente.setTipoEmpresa(scanner.nextLine());
        
        System.out.print("Correo electrónico: ");
        cliente.setCorreo(scanner.nextLine());
        
        System.out.print("Teléfono: ");
        cliente.setTelefono(scanner.nextLine());
        
        System.out.print("Contraseña (se almacenará hasheada): ");
        String contrasena = scanner.nextLine();
        // En producción, usar BCrypt o similar para hashear
        cliente.setContrasena(contrasena);
        
        if (clienteDAO.insertar(cliente)) {
            System.out.println("\n✅ Cliente registrado exitosamente!");
            mostrarCliente(cliente);
        } else {
            System.out.println("\n❌ No se pudo registrar el cliente");
        }
    }
    
    /**
     * Consulta todos los clientes (READ - Todos).
     */
    private static void consultarTodos() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║          CONSULTAR TODOS LOS CLIENTES (READ - Todos)        ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        List<Cliente> clientes = clienteDAO.consultarTodos();
        
        if (clientes.isEmpty()) {
            System.out.println("📭 No hay clientes registrados en la base de datos.");
        } else {
            System.out.println("📊 Lista de clientes:\n");
            System.out.println("┌─────┬──────────────────────────┬──────────────────┬──────────────────────────┬──────────────┬─────────────────────┐");
            System.out.println("│ ID  │ Nombre                    │ Tipo Empresa     │ Correo                   │ Teléfono     │ Fecha Registro      │");
            System.out.println("├─────┼──────────────────────────┼──────────────────┼──────────────────────────┼──────────────┼─────────────────────┤");
            
            for (Cliente cliente : clientes) {
                System.out.printf("│ %-3d │ %-24s │ %-16s │ %-24s │ %-12s │ %-19s │%n",
                    cliente.getIdCliente(),
                    cliente.getNombre().length() > 24 ? cliente.getNombre().substring(0, 21) + "..." : cliente.getNombre(),
                    cliente.getTipoEmpresa().length() > 16 ? cliente.getTipoEmpresa().substring(0, 13) + "..." : cliente.getTipoEmpresa(),
                    cliente.getCorreo().length() > 24 ? cliente.getCorreo().substring(0, 21) + "..." : cliente.getCorreo(),
                    cliente.getTelefono(),
                    cliente.getFechaRegistro() != null ? cliente.getFechaRegistro().toString().substring(0, 19) : "N/A"
                );
            }
            
            System.out.println("└─────┴──────────────────────────┴──────────────────┴──────────────────────────┴──────────────┴─────────────────────┘");
        }
    }
    
    /**
     * Consulta un cliente por su ID (READ - Por ID).
     */
    private static void consultarPorId() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║           CONSULTAR CLIENTE POR ID (READ - Por ID)         ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        System.out.print("Ingrese el ID del cliente: ");
        int id = Integer.parseInt(scanner.nextLine());
        
        Cliente cliente = clienteDAO.consultarPorId(id);
        
        if (cliente != null) {
            mostrarCliente(cliente);
        } else {
            System.out.println("❌ Cliente no encontrado");
        }
    }
    
    /**
     * Consulta un cliente por su correo (READ - Por correo).
     */
    private static void consultarPorCorreo() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║        CONSULTAR CLIENTE POR CORREO (READ - Por correo)     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        System.out.print("Ingrese el correo del cliente: ");
        String correo = scanner.nextLine();
        
        Cliente cliente = clienteDAO.consultarPorCorreo(correo);
        
        if (cliente != null) {
            mostrarCliente(cliente);
        } else {
            System.out.println("❌ Cliente no encontrado");
        }
    }
    
    /**
     * Actualiza un cliente existente (UPDATE).
     */
    private static void actualizarCliente() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║              ACTUALIZAR CLIENTE (UPDATE)                    ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        System.out.print("Ingrese el ID del cliente a actualizar: ");
        int id = Integer.parseInt(scanner.nextLine());
        
        Cliente cliente = clienteDAO.consultarPorId(id);
        
        if (cliente == null) {
            System.out.println("❌ Cliente no encontrado");
            return;
        }
        
        System.out.println("\nDatos actuales:");
        mostrarCliente(cliente);
        System.out.println("\nIngrese los nuevos datos (presione Enter para mantener el valor actual):");
        
        System.out.print("Nombre [" + cliente.getNombre() + "]: ");
        String nombre = scanner.nextLine();
        if (!nombre.isEmpty()) {
            cliente.setNombre(nombre);
        }
        
        System.out.print("Tipo de empresa [" + cliente.getTipoEmpresa() + "]: ");
        String tipoEmpresa = scanner.nextLine();
        if (!tipoEmpresa.isEmpty()) {
            cliente.setTipoEmpresa(tipoEmpresa);
        }
        
        System.out.print("Correo [" + cliente.getCorreo() + "]: ");
        String correo = scanner.nextLine();
        if (!correo.isEmpty()) {
            cliente.setCorreo(correo);
        }
        
        System.out.print("Teléfono [" + cliente.getTelefono() + "]: ");
        String telefono = scanner.nextLine();
        if (!telefono.isEmpty()) {
            cliente.setTelefono(telefono);
        }
        
        if (clienteDAO.actualizar(cliente)) {
            System.out.println("\n✅ Cliente actualizado exitosamente!");
            System.out.println("\nDatos actualizados:");
            mostrarCliente(cliente);
        } else {
            System.out.println("\n❌ No se pudo actualizar el cliente");
        }
    }
    
    /**
     * Elimina un cliente de la base de datos (DELETE).
     */
    private static void eliminarCliente() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║              ELIMINAR CLIENTE (DELETE)                     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        System.out.print("Ingrese el ID del cliente a eliminar: ");
        int id = Integer.parseInt(scanner.nextLine());
        
        Cliente cliente = clienteDAO.consultarPorId(id);
        
        if (cliente == null) {
            System.out.println("❌ Cliente no encontrado");
            return;
        }
        
        System.out.println("\n⚠️  Cliente a eliminar:");
        mostrarCliente(cliente);
        System.out.print("\n¿Está seguro de eliminar este cliente? (s/n): ");
        String confirmacion = scanner.nextLine();
        
        if (confirmacion.equalsIgnoreCase("s")) {
            if (clienteDAO.eliminar(id)) {
                System.out.println("\n✅ Cliente eliminado exitosamente!");
            } else {
                System.out.println("\n❌ No se pudo eliminar el cliente");
            }
        } else {
            System.out.println("\n❌ Operación cancelada");
        }
    }
    
    /**
     * Muestra una demostración completa de todas las operaciones CRUD.
     */
    private static void demostracionCompleta() throws SQLException {
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║           DEMOSTRACIÓN COMPLETA DE OPERACIONES CRUD         ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        System.out.println("📝 Esta demostración ejecutará todas las operaciones CRUD automáticamente...\n");
        System.out.print("Presione Enter para continuar...");
        scanner.nextLine();
        
        // CREATE - Insertar cliente de prueba
        System.out.println("\n1️⃣  OPERACIÓN CREATE (Insertar)");
        System.out.println("─────────────────────────────────────────────────────────────");
        Cliente clientePrueba = new Cliente(
            "Empresa Demo S.A.S.",
            "Mediana",
            "demo@empresa.com",
            "3001234567",
            "contrasena123"
        );
        clienteDAO.insertar(clientePrueba);
        System.out.println("✅ Cliente de prueba insertado con ID: " + clientePrueba.getIdCliente());
        
        // READ - Consultar todos
        System.out.println("\n2️⃣  OPERACIÓN READ (Consultar todos)");
        System.out.println("─────────────────────────────────────────────────────────────");
        List<Cliente> clientes = clienteDAO.consultarTodos();
        System.out.println("✅ Total de clientes: " + clientes.size());
        
        // READ - Consultar por ID
        System.out.println("\n3️⃣  OPERACIÓN READ (Consultar por ID)");
        System.out.println("─────────────────────────────────────────────────────────────");
        Cliente clienteEncontrado = clienteDAO.consultarPorId(clientePrueba.getIdCliente());
        if (clienteEncontrado != null) {
            System.out.println("✅ Cliente encontrado: " + clienteEncontrado.getNombre());
        }
        
        // UPDATE - Actualizar cliente
        System.out.println("\n4️⃣  OPERACIÓN UPDATE (Actualizar)");
        System.out.println("─────────────────────────────────────────────────────────────");
        clientePrueba.setNombre("Empresa Demo Actualizada S.A.S.");
        clientePrueba.setTipoEmpresa("Grande");
        if (clienteDAO.actualizar(clientePrueba)) {
            System.out.println("✅ Cliente actualizado exitosamente");
        }
        
        // Verificar actualización
        Cliente clienteActualizado = clienteDAO.consultarPorId(clientePrueba.getIdCliente());
        if (clienteActualizado != null) {
            System.out.println("   Nuevo nombre: " + clienteActualizado.getNombre());
            System.out.println("   Nuevo tipo: " + clienteActualizado.getTipoEmpresa());
        }
        
        // DELETE - Eliminar cliente
        System.out.println("\n5️⃣  OPERACIÓN DELETE (Eliminar)");
        System.out.println("─────────────────────────────────────────────────────────────");
        if (clienteDAO.eliminar(clientePrueba.getIdCliente())) {
            System.out.println("✅ Cliente eliminado exitosamente");
        }
        
        // Verificar eliminación
        Cliente clienteEliminado = clienteDAO.consultarPorId(clientePrueba.getIdCliente());
        if (clienteEliminado == null) {
            System.out.println("✅ Confirmación: Cliente ya no existe en la base de datos");
        }
        
        System.out.println("\n✅ Demostración completa finalizada!");
    }
    
    /**
     * Muestra la información de un cliente de forma formateada.
     * 
     * @param cliente Cliente a mostrar
     */
    private static void mostrarCliente(Cliente cliente) {
        System.out.println("\n┌─────────────────────────────────────────────────────────────┐");
        System.out.println("│                    INFORMACIÓN DEL CLIENTE                  │");
        System.out.println("├─────────────────────────────────────────────────────────────┤");
        System.out.printf("│ ID Cliente:     %-45s │%n", cliente.getIdCliente());
        System.out.printf("│ Nombre:         %-45s │%n", cliente.getNombre());
        System.out.printf("│ Tipo Empresa:   %-45s │%n", cliente.getTipoEmpresa());
        System.out.printf("│ Correo:         %-45s │%n", cliente.getCorreo());
        System.out.printf("│ Teléfono:       %-45s │%n", cliente.getTelefono());
        System.out.printf("│ Fecha Registro: %-45s │%n", 
            cliente.getFechaRegistro() != null ? cliente.getFechaRegistro().toString() : "N/A");
        System.out.println("└─────────────────────────────────────────────────────────────┘");
    }
}

