<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$dbname = "andre";

// Crear la conexión
$conexion = mysqli_connect($servidor, $usuario, $password, $dbname);

// Comprobar la conexión
if (!$conexion) {
    die("La conexión ha fallado: " . mysqli_connect_error());
}

echo "¡Conexión exitosa!";
?>