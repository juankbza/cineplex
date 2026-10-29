/* ==========================================
   CinePleX - INYECTOR DE LAYOUT (APPBAR & FOOTER) + TEMA
   ========================================== */

const navbarHTML = `
  <header class="navbar">
    <a href="home.html" class="nav-brand">
      <div class="nav-logo-container">
        <img src="../assets/img/logo.png" alt="CinePleX Logo" class="nav-logo-img">
      </div>
    </a>

    <nav class="nav-menu">
      <a href="home.html#cartelera" class="nav-item">Cartelera</a>
      <a href="home.html#preventa" class="nav-item">Preventa</a>
      <a href="home.html#proximamente" class="nav-item">Próximamente</a>
      <a href="carameleria.html" class="nav-item">Caramelería</a>
      <a href="home.html#promos" class="nav-item">Contacto</a>
      <a href="home.html#comprar-ticket" class="nav-item btn-highlight-ticket">Comprar Ticket</a>
    </nav>

    <div class="nav-actions">
      <button class="btn-theme-toggle" id="themeToggle" title="Cambiar Tema">
        <svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
        </svg>
      </button>

      <a href="#carrito" class="nav-cart-btn" title="Ver Carrito">
        <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span class="cart-badge">0</span>
      </a>

      <a href="login.html" class="btn-user-icon" title="Iniciar Sesión">
        <svg class="icon-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>
    </div>
  </header>
`;

const footerHTML = `
  <footer class="site-footer">
    <div class="footer-glow-line"></div>
    <div class="footer-container">
      
      <div class="footer-brand-col">
        <a href="home.html" class="footer-logo-link">
          <img src="../assets/img/logo.png" alt="CinePleX Logo" class="footer-logo-img">
        </a>
        <p class="footer-desc">
          La experiencia cinematográfica definitiva. Disfruta de estrenos mundiales en salas VIP reclinables, sonido inmersivo Dolby Atmos y tecnología 4D de última generación.
        </p>
        <div class="footer-socials">
          <a href="#" class="social-circle" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-circle" title="X">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <a href="#" class="social-circle" title="TikTok">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a href="#" class="social-circle" title="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-links-col">
        <h4>Explorar</h4>
        <ul>
          <li><a href="home.html#cartelera">Cartelera Hoy</a></li>
          <li><a href="home.html#preventa">Preventa Exclusiva</a></li>
          <li><a href="home.html#proximamente">Próximos Estrenos</a></li>
          <li><a href="carameleria.html">Caramelería Online</a></li>
          <li><a href="home.html#promos">Promociones y Club</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Nuestras Salas</h4>
        <ul>
          <li><a href="#">Salas VIP Reclinables</a></li>
          <li><a href="#">Experiencia 4D E-Motion</a></li>
          <li><a href="#">Pantalla Gigante IMAX</a></li>
          <li><a href="#">Sonido Dolby Atmos</a></li>
          <li><a href="#">Eventos Corporativos</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Soporte y Legal</h4>
        <ul>
          <li><a href="login.html">Mi Cuenta / Ingresar</a></li>
          <li><a href="#">Validación de Edad (+18)</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Políticas de Privacidad</a></li>
          <li><a href="#">Contacto y Ayuda</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>© 2026 <span>CinePleX</span>. Todos los derechos reservados.</p>
        <div class="footer-payment-badges">
          <span class="pay-badge">Visa</span>
          <span class="pay-badge">Mastercard</span>
          <span class="pay-badge">Pago Móvil</span>
          <span class="pay-badge">USDT / Crypto</span>
        </div>
      </div>
    </div>
  </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navbarPlaceholder = document.getElementById('app-navbar');
  const footerPlaceholder = document.getElementById('app-footer');

  if (navbarPlaceholder) navbarPlaceholder.innerHTML = navbarHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const moonIcon = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>`;
  const sunIcon = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.innerHTML = sunIcon;
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.innerHTML = moonIcon;
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.innerHTML = sunIcon;
      }
    });
  }
});