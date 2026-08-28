const usuario =localStorage.getItem("usuario")
if(usuario){

    document.getElementById("nombre-usuario").textContent=usuario;
}else{

    window.location("../HTML/index.html")
}
