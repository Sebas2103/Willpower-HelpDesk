// Enviamos la petición al archivo PHP//Desde html
const myModal = new bootstrap.Modal(document.getElementById("mymodal"));
const contenedorModal = document.getElementById("textoModal");

//Variables html
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");

//------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
llamar_categorias(); // Llamamos a la función para cargar los roles al cargar la página

//--------------------------------FUNCIONES---------------------------------------------
function llamar_categorias() {
  fetch("../PHP/Clases/llamarRol.php")
    .then((respuesta) => respuesta.json())
    .then((roles) => {
   
      //roles cadena de texto que se convierte en un objeto JSON
      const selectRol = document.getElementById("rol");
      roles.forEach((rol) => {
         // Verifica que los roles se estén cargando correctamente
        const option = document.createElement("option");
        option.value = rol.id_rol;
        option.textContent = rol.nombre_rol;
        selectRol.appendChild(option);
      });
    })
    .catch((error) => {
      console.log("Error al cargar roles:", error);
    });
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitamos que el formulario se envíe de forma tradicional
    validarFormulario(); // Llamamos a la función para validar el formulario
  });

  function validarFormulario() {
  //Enviar datos al archivo php para procesar la información
  fetch("../PHP/Clases/procesar.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      correo: usuario.value,
      contrasena: password.value,
    }),
  })
    .then((respuesta) => respuesta.json()) // Leemos la respuesta como JSON
    .then((datos) => { 
      
      contenedorModal.innerHTML=` <h5 class="modal-title">Bienvenido a help Desk</h5>`
      contenedorModal.innerHTML = `<p>${datos.mensaje}</p>`;
      myModal.show();
      

      localStorage.setItem("usuario",datos.usuario)

         // Espera 3 segundos y luego redirige
    setTimeout(() => {
      window.location.href="../personal/index.html"
    }, 3000);
     


      // Aquí puedes mostrar un mensaje en tu HTML si quieres
    })
    .catch((error) => {
       contenedorModal.innerHTML=` <h5 class="modal-title">Usuario no encontrado</h5>`
      contenedorModal.innerHTML = `<p>No se encontro al usuario${error}</p>`;
      myModal.show();
    });
}
