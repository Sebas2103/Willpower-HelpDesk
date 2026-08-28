<?php
class consultas
//Aqui  estaran todas las consultas a la base de datos generales que se necesiten
{
    private mysqli $conexion;

    public function __construct(mysqli $conexion)
    {
        $this->conexion = $conexion;
    }

    public function llamarUsuario($correo, $contrasena)
    {

        $sql = "SELECT * FROM usuarios WHERE correo = ?";
    //todos los elemetos de la tabla usuarios
        $preparacion = mysqli_prepare($this->conexion, $sql);
        mysqli_stmt_bind_param($preparacion, "s", $correo);
        //le indica a ? que ahi va esta el valor $ correo y s indica el tipo de  dato 

        mysqli_stmt_execute($preparacion);
        //ejecuta el comando sql para prevenir inyeccion sql

        $resultado = mysqli_stmt_get_result($preparacion);
        $cCorreo = mysqli_fetch_assoc($resultado);

        if (!$cCorreo) {

            return false;
        }
        if (password_verify($contrasena, $cCorreo['password_hash'])) {
            return $cCorreo;
        }
    }
    public function obtenerRoles(): array
    {
        $sql = "SELECT * FROM roles";

        $resultado = mysqli_query($this->conexion, $sql);
        /* ejecutar el comando sql  */
        $roles = [];

        /* reccorrer el array $resultado  que se guardara en filas  */
        while ($filas = mysqli_fetch_assoc($resultado)) {
            $roles[] = $filas;
        }
        return $roles;
    }
}
