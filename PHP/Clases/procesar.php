<?php
header('Content-Type: application/json'); // Establecer el encabezado de respuesta como JSON
require_once(__DIR__ . '/db_conexion.php'); // Incluir el archivo de conexión a la base de datos
require_once(__DIR__ . '/consultas.php');
 // Incluir el archivo de consultas

$correo = $_POST['correo'] ?? ''; // Obtener el correo del formulario
$contrasena = $_POST['contrasena'] ?? ''; // Obtener la contraseña del formulario



$cConexion = new db_conexion(); // Crear una instancia de la clase de conexión a la base de datos
$cConsulta = new consultas($cConexion->conexion); // Crear una instancia de la clase de consultas y pasar la conexión a la base de datos
$correo = $cConsulta->llamarUsuario($correo, $contrasena); // Llamar al método llamarUsuario para obtener la información del usuario

if ($correo) {
    //calve:valor
    echo json_encode(['bandera' => true,'usuario'=>$correo["nombre"],'mensaje' => 'Bienvenido ' . $correo['nombre']]); // Enviar un mensaje de error si el usuario no se encuentra o la contraseña es incorrecta
    exit; // Salir del script
}
echo json_encode(['bandera' => false, 'mensaje' => 'Usuario o contraseña incorrectos']); // Enviar un mensaje de error si el usuario no se encuentra o la contraseña es incorrecta



    ?>