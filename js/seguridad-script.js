document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('themeToggle');
    
    // Menú hamburguesa
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Cerrar menú al hacer clic en enlace (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuButton.textContent = '☰';
            }
        });
    });
    
    // Tema oscuro/claro
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '🌞 Tema claro' : '🌓 Tema oscuro';
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Cargar preferencia de tema
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌞 Tema claro';
    }

    // Actualizar año en footer
    document.querySelector('.current-year').textContent = new Date().getFullYear();

    // Animación de las tarjetas al cargar
    const cards = document.querySelectorAll('.injury-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // Efecto al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
    
    function revealOnScroll() {
        const elements = document.querySelectorAll('.injury-card, .incident-table, .note-box');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }
    
    revealOnScroll();

    // Interacción para móviles - expandir tarjetas al tocar
    if (window.innerWidth < 768) {
        const cardHeaders = document.querySelectorAll('.card-header');
        
        cardHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const card = this.parentElement;
                const isActive = card.classList.contains('active');
                
                document.querySelectorAll('.injury-card').forEach(c => {
                    if (c !== card) c.classList.remove('active');
                });
                
                card.classList.toggle('active', !isActive);
            });
        });
    }
});