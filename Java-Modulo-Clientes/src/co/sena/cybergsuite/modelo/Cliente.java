package co.sena.cybergsuite.modelo;

import java.time.LocalDateTime;

/**
 * Clase que representa la entidad Cliente del sistema CyberG Suite.
 * Esta clase encapsula los datos de un cliente empresarial.
 * 
 * @author Cristian Ferney Castaño Torres
 * @version 1.0
 * @since 2025-11-26
 */
public class Cliente {
    
    // Atributos de la clase
    private int idCliente;
    private String nombre;
    private String tipoEmpresa;
    private String correo;
    private String telefono;
    private String contrasena;
    private LocalDateTime fechaRegistro;
    
    /**
     * Constructor por defecto.
     */
    public Cliente() {
    }
    
    /**
     * Constructor con parámetros principales.
     * 
     * @param nombre Nombre completo del cliente
     * @param tipoEmpresa Tipo de empresa
     * @param correo Correo electrónico
     * @param telefono Número de teléfono
     * @param contrasena Contraseña hasheada
     */
    public Cliente(String nombre, String tipoEmpresa, String correo, 
                   String telefono, String contrasena) {
        this.nombre = nombre;
        this.tipoEmpresa = tipoEmpresa;
        this.correo = correo;
        this.telefono = telefono;
        this.contrasena = contrasena;
        this.fechaRegistro = LocalDateTime.now();
    }
    
    /**
     * Constructor completo con todos los atributos.
     * 
     * @param idCliente Identificador único del cliente
     * @param nombre Nombre completo del cliente
     * @param tipoEmpresa Tipo de empresa
     * @param correo Correo electrónico
     * @param telefono Número de teléfono
     * @param contrasena Contraseña hasheada
     * @param fechaRegistro Fecha de registro
     */
    public Cliente(int idCliente, String nombre, String tipoEmpresa, 
                   String correo, String telefono, String contrasena, 
                   LocalDateTime fechaRegistro) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.tipoEmpresa = tipoEmpresa;
        this.correo = correo;
        this.telefono = telefono;
        this.contrasena = contrasena;
        this.fechaRegistro = fechaRegistro;
    }
    
    // Métodos Getters y Setters
    
    /**
     * Obtiene el identificador del cliente.
     * 
     * @return ID del cliente
     */
    public int getIdCliente() {
        return idCliente;
    }
    
    /**
     * Establece el identificador del cliente.
     * 
     * @param idCliente ID del cliente
     */
    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }
    
    /**
     * Obtiene el nombre del cliente.
     * 
     * @return Nombre del cliente
     */
    public String getNombre() {
        return nombre;
    }
    
    /**
     * Establece el nombre del cliente.
     * 
     * @param nombre Nombre del cliente
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    /**
     * Obtiene el tipo de empresa.
     * 
     * @return Tipo de empresa
     */
    public String getTipoEmpresa() {
        return tipoEmpresa;
    }
    
    /**
     * Establece el tipo de empresa.
     * 
     * @param tipoEmpresa Tipo de empresa
     */
    public void setTipoEmpresa(String tipoEmpresa) {
        this.tipoEmpresa = tipoEmpresa;
    }
    
    /**
     * Obtiene el correo electrónico.
     * 
     * @return Correo electrónico
     */
    public String getCorreo() {
        return correo;
    }
    
    /**
     * Establece el correo electrónico.
     * 
     * @param correo Correo electrónico
     */
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
    /**
     * Obtiene el número de teléfono.
     * 
     * @return Número de teléfono
     */
    public String getTelefono() {
        return telefono;
    }
    
    /**
     * Establece el número de teléfono.
     * 
     * @param telefono Número de teléfono
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    /**
     * Obtiene la contraseña hasheada.
     * 
     * @return Contraseña hasheada
     */
    public String getContrasena() {
        return contrasena;
    }
    
    /**
     * Establece la contraseña hasheada.
     * 
     * @param contrasena Contraseña hasheada
     */
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    
    /**
     * Obtiene la fecha de registro.
     * 
     * @return Fecha de registro
     */
    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }
    
    /**
     * Establece la fecha de registro.
     * 
     * @param fechaRegistro Fecha de registro
     */
    public void setFechaRegistro(LocalDateTime fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
    
    /**
     * Representación en cadena del objeto Cliente.
     * 
     * @return Cadena con la información del cliente
     */
    @Override
    public String toString() {
        return "Cliente{" +
                "idCliente=" + idCliente +
                ", nombre='" + nombre + '\'' +
                ", tipoEmpresa='" + tipoEmpresa + '\'' +
                ", correo='" + correo + '\'' +
                ", telefono='" + telefono + '\'' +
                ", fechaRegistro=" + fechaRegistro +
                '}';
    }
}

