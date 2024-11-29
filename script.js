
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };



  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  
  abrir.addEventListener("click", () => {
      nav.classList.add("visible");
  })
  
  cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
  })
  
  // scroll abj
  document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Función para mostrar/ocultar botón
    function toggleScrollButton() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    }

    // Función para hacer scroll
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Escucha el evento de scroll
    window.addEventListener('scroll', toggleScrollButton);

    // Añade evento de click
    scrollToTopButton.addEventListener('click', scrollToTop);
});
// acaba el scroll

  