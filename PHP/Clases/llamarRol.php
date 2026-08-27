<?php
header('Content-Type: application/json'); // Establecer el encabezado de respuesta como JSON
require_once(__DIR__ . '/db_conexion.php'); // Incluir el archivo de conexión a la base de datos
require_once(__DIR__ . '/consultas.php'); // Incluir el archivo de consultas

 $cConexion = new db_conexion(); // Crear una instancia de la clase de conexión a la base de datos
 $cConsulta= new consultas($cConexion->conexion); // Crear una instancia de la clase de consultas y pasar la conexión a la base de datos
$roles = $cConsulta->obtenerRoles($cConexion); // Llamar al método obtenerRoles para obtener los roles de la base de datos

echo json_encode($roles); // Convertir el array de roles a JSON y enviarlo como respuesta
/* convertir el array en json y se envia al js rol  */


?>
 