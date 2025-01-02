// Menú móvil
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Botón scroll to top
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {


    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
          button.classList.toggle('active');
        });
      });})
    /////////imagen spin abajo
// Selecciona la imagen
const spinningImage = document.querySelector('.spin img');

// Crea la animación usando GSAP
gsap.to(spinningImage, {
  rotation: 720, // Rota 720 grados (2 vueltas completas)
  duration: 5, // Duración de la animación en segundos
  repeat: 0, // No repetir la animación
  ease: "linear" // Easing lineal para una rotación suave
});