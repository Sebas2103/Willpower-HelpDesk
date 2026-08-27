<?php 
class usuario{  
    private string $nombre;

    private string $correo;
    private string $contrasena;
    private int $rol_id;

    public function __construct(string $nombre, string $correo, string $contrasena, int $rol_id) {
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->contrasena = password_hash($contrasena, PASSWORD_DEFAULT); // Encriptar la contraseña
        $this->rol_id = $rol_id;
    }

    public function getNombre(): string {
        return $this->nombre;
    }

 
    public function getCorreo(): string {
        return $this->correo;
    }

    public function getContrasena(): string {
        return $this->contrasena;
    }

    public function getRolId(): int {
        return $this->rol_id;
    }



    
}

?>