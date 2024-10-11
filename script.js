document.querySelectorAll('.icon-nav a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.icon-nav a').forEach(a => a.classList.remove('active'));
        item.classList.add('active');
    });
});
function selectCard(card) {
    // Eliminar la clase "active" de todas las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => c.classList.remove('active'));

    // Agregar la clase "active" a la tarjeta seleccionada
    card.classList.add('active');
}
const navLinks = document.querySelectorAll('.icon-nav a');
const cardTitle = document.querySelector('.card-title');
const cardPrice = document.querySelector('.card-price');
const cardDescription = document.querySelector('.card-description');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace se comporte como un enlace normal

        // Obtiene el contenido del data-content
        const content = JSON.parse(link.getAttribute('data-content'));

        // Actualiza el contenido de la tarjeta
        cardTitle.textContent = content.title;
        cardPrice.textContent = content.price;
        cardDescription.textContent = content.description;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".content-block");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    blocks.forEach(block => {
        observer.observe(block);
    });
});
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll(".otro, .mapa, .final-container .content4");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    });
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    // Añadir evento de clic para mostrar/ocultar el menú
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open'); // Alterna la clase 'open' para mostrar u ocultar el menú
    });