
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
// boton acordeón desplegable abj
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});
///////////////////////fin
//frases abj//
const quotes = [
  { text: "El éxito no es final, el fracaso no es fatal: es el coraje para continuar lo que cuenta.", author: "Winston Churchill" },
  { text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
  { text: "Todo lo que puedas imaginar es real.", author: "Pablo Picasso" },
  { text: "La mejor manera de predecir el futuro es crearlo.", author: "Peter Drucker" }
];

let currentQuote = 0;

function rotateQuotes() {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  // Fade out the current quote
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  // Change the quote after the fade out
  setTimeout(() => {
    currentQuote = (currentQuote + 1) % quotes.length; // Update the current quote index

    // Update the text and author
    quoteText.textContent = quotes[currentQuote].text;
    quoteAuthor.textContent = "- " + quotes[currentQuote].author;

    // Fade in the new quote
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 500); // Wait for 500ms before changing the quote
}

// Start rotating quotes when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setInterval(rotateQuotes, 5000); // Rotate quotes every 5 seconds
});
//// para que se adapte el texto al contenedor
window.addEventListener('resize', function() {
  var anchoContenedor = document.querySelector('.contenedor').offsetWidth;
  var tamañoFuente = anchoContenedor * 0.05; // Ajusta el multiplicador según sea necesario
  document.querySelector('.texto-fluido').style.fontSize = tamañoFuente + 'px';
});
////////////particulas fondo abajo
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 150;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.7})`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
// desplegable abj

  // formulario- abj
  document.getElementById('contactForm').addEventListener('submit', function() {
    // Muestra el mensaje de éxito
    document.getElementById('successMessage').classList.remove('hidden');

    // Limpia el formulario después de un breve retraso
    setTimeout(() => {
      this.reset();
      document.getElementById('successMessage').classList.add('hidden');
    }, 3000); // 2 segundos
  });
  //tabla abajo

  
  