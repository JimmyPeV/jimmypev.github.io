function initNavMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuButton = document.getElementById('menu-btn');
  const closeButton = document.getElementById('close-menu-btn');

  if (!menuButton || !closeButton || !navMenu) return;

  const toggleMenu = () => {
    navMenu.classList.toggle('hidden');
    menuButton.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
  };

  menuButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer click en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
      menuButton.classList.remove('hidden');
      closeButton.classList.add('hidden');
    });
  });
}

// Ejecutar al inicio
document.addEventListener('DOMContentLoaded', initNavMenu);

// Re-ejecutar tras cada navegación de Astro
document.addEventListener('astro:after-swap', initNavMenu);
