/* =====================================================
   WILLPOWER — LOGIN
   Interacciones: mostrar/ocultar contraseña, validación
   básica en el cliente y estado de carga del botón.
   (La validación real y segura ocurre en el servidor,
   dentro de php/procesar_login.php)
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const btnSubmit = document.getElementById("btnSubmit");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  // --- Mostrar / ocultar contraseña ---
  togglePassword.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePassword.setAttribute("aria-pressed", String(isHidden));
    togglePassword.setAttribute("aria-label", isHidden ? "Ocultar contraseña" : "Mostrar contraseña");
  });

  // --- Validación básica en el cliente (no reemplaza la validación en PHP) ---
  form.addEventListener("submit", (e) => {
    let valid = true;

    form.querySelectorAll(".field").forEach((field) => {
      const input = field.querySelector(".field__input");
      if (!input) return;

      if (input.hasAttribute("required") && !input.value.trim()) {
        field.classList.add("is-invalid");
        valid = false;
      } else if (input.id === "password" && input.value.length < 6) {
        field.classList.add("is-invalid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    if (!valid) {
      e.preventDefault();
      return;
    }

    // Estado de carga mientras el navegador envía el POST a procesar_login.php
    btnSubmit.classList.add("is-loading");
  });

  // Quita el estado de error apenas el usuario vuelve a escribir
  form.querySelectorAll(".field__input").forEach((input) => {
    input.addEventListener("input", () => {
      input.closest(".field").classList.remove("is-invalid");
    });
  });
});