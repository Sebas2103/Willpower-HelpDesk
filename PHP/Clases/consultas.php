<?php
class consultas
//Aqui  estaran todas las consultas a la base de datos generales que se necesiten
{
    private mysqli $conexion;

    public function __construct(mysqli $conexion)
    {
        $this->conexion = $conexion;
    }

    public function obtenerRoles():array{
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
