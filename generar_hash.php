<?php
// generar_hash.php — herramienta SOLO para uso local mientras desarrollas.
// Escribe una contraseña, te muestra su hash, la copias a la BD.
// Bórralo cuando termines de configurar tus usuarios de prueba.

$hash = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    if ($password !== '') {
        $hash = password_hash($password, PASSWORD_DEFAULT);
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Generar hash (solo local)</title>
</head>
<body style="font-family: sans-serif; max-width: 500px; margin: 40px auto;">
  <h2>Generar hash de contraseña</h2>
  <form method="POST">
    <input type="text" name="password" placeholder="Escribe la contraseña" required style="width:100%; padding:8px;">
    <button type="submit" style="margin-top:10px; padding:8px 16px;">Generar</button>
  </form>

  <?php if ($hash): ?>
    <h3>Hash generado:</h3>
    <textarea readonly style="width:100%; height:80px;"><?php echo htmlspecialchars($hash); ?></textarea>
    <p>Cópialo y pégalo en la columna <code>password_hash</code> del usuario, en phpMyAdmin.</p>
  <?php endif; ?>
</body>
</html>
