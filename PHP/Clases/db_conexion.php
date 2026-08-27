<?php
class db_conexion
{
    //Variables de la conexion a la base de datos F
    private string  $servidor = "localhost";
    private  string $usuario = "root";
    private   string $password = "";
    private  string $dbname = "mesa_ayuda_armonia";
    public mysqli $conexion;

    public function  __construct()
    { // Crear la conexión 
        $this->conexion = mysqli_connect($this->servidor, $this->usuario, $this->password, $this->dbname);

        // Comprobar la conexión
        if (!$this->conexion) {
            die("La conexión ha fallado: " . mysqli_connect_error());
        }
        /* 
        echo "¡Conexión exitosa!";; */
    }
};
