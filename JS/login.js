// Enviamos la petición al archivo PHP//Desde html
const myModal = new bootstrap.Modal(document.getElementById("mymodal"));
const contenedorModal = document.getElementById("textoModal");
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitamos que el formulario se envíe de forma tradicional

      validarFormulario(); // Llamamos a la función para validar el formulario


      


    // Función para validar el formulario y mostrar el modal

    function validarFormulario() {
      fetch("../PHP/Clases/db_conexion.php")
        .then((respuesta) => respuesta.text()) // Leemos la respuesta como texto
        .then((datos) => {
          contenedorModal.innerHTML = `<p>${datos}</p>`;
          myModal.show();
          // Aquí puedes mostrar un mensaje en tu HTML si quieres
        })
        .catch((error) => {
          contenedorModal.innerHTML = `<p>No se encontraron datos: ${error}</p>`;
          myModal.show();
        });
    }
  });
