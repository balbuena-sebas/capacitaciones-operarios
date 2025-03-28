document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('themeToggle');
    
    // Menú hamburguesa
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar ícono del botón
        mobileMenuButton.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuButton.textContent = '☰';
            }
        });
    });
    
    // Theme toggle
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
});