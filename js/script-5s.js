document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('themeToggle');
    
    // Menú móvil
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuButton.textContent = '☰';
            }
        });
    });

    // Tema oscuro
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '🌞 Tema claro' : '🌓 Tema oscuro';
        localStorage.setItem('darkMode', isDarkMode);
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌞 Tema claro';
    }

    // Animaciones
    const cards = document.querySelectorAll('.etapa-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Scroll animations
    window.addEventListener('scroll', revealOnScroll);
    
    function revealOnScroll() {
        const elements = document.querySelectorAll('.intro-card, .etapa-card, .conclusion-card');
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
    
    // Año actual
    document.querySelector('.current-year').textContent = new Date().getFullYear();
});