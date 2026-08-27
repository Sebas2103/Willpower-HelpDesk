// Enviamos la petición al archivo PHP//Desde html
const myModal = new bootstrap.Modal(document.getElementById("mymodal"));
const contenedorModal = document.getElementById("textoModal");

//Variables html


//------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
llamar_categorias(); // Llamamos a la función para cargar los roles al cargar la página


//--------------------------------FUNCIONES---------------------------------------------
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



document.getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitamos que el formulario se envíe de forma tradicional

    validarFormulario(); // Llamamos a la función para validar el formulario

    function validarFormulario() {
      fetch("../PHP/Clases/procesar.php")
        .then((respuesta) => respuesta.text()) // Leemos la respuesta como texto
        .then((datos) => {
          contenedorModal.innerHTML = `<p>${datos}</p>`;
          myModal.show();
          // Aquí puedes mostrar un mensaje en tu HTML si quieres
        })
        .catch((error) => {
          contenedorModal.innerHTML = `<p>No se encontro al usuario${error}</p>`;
          myModal.show();
        });
    }
  });
