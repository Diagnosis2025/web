document.addEventListener('DOMContentLoaded', () => {
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Dropdown en móvil
  const dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });
});


// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
    });
});

// Efecto smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animate-up, .animate-zoom');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // evitar repetir animación
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => observer.observe(el));
});

// Cargar footer desde archivo externo
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

// Filtrado de productos (domótica)
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        productCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

