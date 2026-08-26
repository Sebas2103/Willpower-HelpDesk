
llamar_categorias(); // Llamamos a la función para cargar los roles al cargar la página
function llamar_categorias() {
    
  fetch("../PHP/Clases/llamarRol.php")
    .then(respuesta => respuesta.json())
    .then(roles => { //roles cadena de texto que se convierte en un objeto JSON
        
      const selectRol = document.getElementById("rol");
      roles.forEach(rol => {
        const option = document.createElement("option");
        option.value = rol.id_rol;
        option.textContent = rol.nombre_rol;
        selectRol.appendChild(option);


      });
    })
    .catch(error => {
      console.log("Error al cargar roles:", error);
    });
}