<?php
header('Content-Type: application/json'); // Establecer el encabezado de respuesta como JSON
require_once(__DIR__ . '/db_conexion.php'); // Incluir el archivo de conexión a la base de datos
 
$sql = "SELECT * FROM roles";
 
$resultado = mysqli_query($conexion, $sql);
/* ejecutar el comando sql  */
$roles = [];

 /* reccorrer el array $resultado  que se guardara en filas  */
while ($filas = mysqli_fetch_assoc($resultado)) {
    $roles[] = $filas;
}
 
echo json_encode($roles);
/* convertir el array en json y se envia al js rol  */
?>
 