// Scrol suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Acordeon interactivo
document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', function () {
        if (this.open) {
            document.querySelectorAll('details').forEach(otherDetail => {
                if (otherDetail !== this) otherDetail.open = false;
            });
        }
    });
});


// Formulario de contacto dinámico
document.querySelector('#cta button').addEventListener('click', () => {
    alert('Gracias por tu interés. Nos pondremos en contacto pronto.');
});
