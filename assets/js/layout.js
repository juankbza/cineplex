/* ==========================================
   CinePleX - INYECTOR DE LAYOUT (APPBAR & FOOTER) + CARRITO GLOBAL
   ========================================== */

function getLayoutConfig() {
  const normPath = window.location.pathname.replace(/\\/g, '/');
  const isInViews = normPath.includes('/views/');
  return {
    assetBase: isInViews ? '../assets/' : 'assets/',
    viewBase: isInViews ? '' : 'views/'
  };
}

function getNavbarHTML() {
  const { assetBase, viewBase } = getLayoutConfig();
  return `
  <header class="navbar">
    <a href="${viewBase}home.html" class="nav-brand">
      <div class="nav-logo-container" style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 38px; height: 38px; background: #6d28d9; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.25rem; color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); border: 1px solid rgba(139, 92, 246, 0.3);">
          X
        </div>
        <span style="font-size: 1.45rem; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">Cine<span style="color: #8b5cf6;">PleX</span></span>
      </div>
    </a>

    <nav class="nav-menu">
      <a href="${viewBase}home.html#cartelera" class="nav-item" data-section="cartelera">Cartelera</a>
      <a href="${viewBase}home.html#preventa" class="nav-item" data-section="preventa">Preventa</a>
      <a href="${viewBase}home.html#proximamente" class="nav-item" data-section="proximamente">Próximamente</a>
      <a href="${viewBase}contacto.html" class="nav-item" data-section="contacto">Contacto</a>
      <a href="${viewBase}carameleria.html" class="nav-item" data-section="carameleria">Caramelería</a>
      <span class="nav-indicator"></span>
    </nav>

    <!-- BUSCADOR CINEPLEX EN EL NAVBAR -->
    <div class="nav-search-wrapper" id="navSearchWrapper">
      <div class="nav-search-box">
        <svg class="nav-search-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="navSearchInput" class="nav-search-input" placeholder="Buscar películas..." autocomplete="off">
        <button type="button" id="navSearchClearBtn" class="nav-search-clear" style="display: none;" title="Limpiar">✕</button>
      </div>

      <!-- DESPLEGABLE EN VIVO DE RESULTADOS -->
      <div class="nav-search-results" id="navSearchResults"></div>
    </div>

    <div class="nav-actions">
      <!-- MODO OSCURO / CLARO -->
      <button class="btn-theme-toggle" id="themeToggle" title="Cambiar Tema">
        <svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
        </svg>
      </button>

      <!-- BOTÓN DEL CARRITO EN LA BARRA SUPERIOR -->
      <button class="nav-cart-btn" id="navCartBtn" title="Ver Carrito de Compras">
        <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span class="cart-badge" id="navCartBadge">0</span>
      </button>

      <!-- MENÚ DESPLEGABLE "SU COMPRA" -->
      <div class="nav-cart-dropdown" id="navCartDropdown">
        <div class="nav-cart-header">
          <div class="nav-cart-title">
            <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h3>Su Compra</h3>
          </div>
          <button class="nav-cart-close" id="navCartClose" title="Cerrar">✕</button>
        </div>

        <div class="nav-cart-body" id="navCartBody">
          <!-- Renderizado dinámico -->
        </div>

        <div class="nav-cart-footer">
          <div class="nav-cart-summary">
            <div class="summary-line">
              <span>Precio:</span>
              <span id="navCartSubtotal">$0.00</span>
            </div>
            <div class="summary-line">
              <span>Precio:</span>
              <span id="navCartFee">$1.50</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-line total-line">
              <span>Total precio:</span>
              <span id="navCartTotal" class="total-highlight">$0.00</span>
            </div>
          </div>
          <a href="${viewBase}pagos.html" class="btn-nav-checkout">IR A PAGAR</a>
        </div>
      </div>

      <!-- BOTÓN DE PERFIL / USUARIO -->
      <a href="${viewBase}perfil.html" class="btn-user-icon" title="Mi Perfil">
        <svg class="icon-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>
    </div>
  </header>
  `;
}

function getFooterHTML() {
  const { assetBase, viewBase } = getLayoutConfig();
  return `
  <footer class="site-footer">
    <div class="footer-glow-line"></div>
    <div class="footer-container">
      
      <div class="footer-brand-col">
        <a href="${viewBase}home.html" class="footer-logo-link">
          <img src="${assetBase}img/logo.png" alt="CinePleX Logo" class="footer-logo-img">
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
          <li><a href="${viewBase}home.html#cartelera">Cartelera Hoy</a></li>
          <li><a href="${viewBase}home.html#preventa">Preventa Exclusiva</a></li>
          <li><a href="${viewBase}home.html#proximamente">Próximos Estrenos</a></li>
          <li><a href="${viewBase}carameleria.html">Caramelería Online</a></li>
          <li><a href="${viewBase}home.html#promos">Promociones y Club</a></li>
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
          <li><a href="${viewBase}perfil.html">Mi Perfil / Mi Cuenta</a></li>
          <li><a href="#">Validación de Edad (+18)</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Políticas de Privacidad</a></li>
          <li><a href="${viewBase}contacto.html">Contacto y Ayuda</a></li>
        </ul>
      </div>

    </div>

    <!-- SECCIÓN DE TIPOS DE PAGO Y DERECHOS -->
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
}

/* ==========================================
   OBJETO GLOBAL: GESTIÓN DE CARRITO CINEPLEX (ENTRADAS + SNACKS)
   ========================================== */
const DEFAULT_CART_ITEMS = [
  {
    id: 'item-1',
    nombre: 'Combo Temporada Siniestra',
    tipo: 'Snack',
    precio: 19.99,
    cantidad: 1,
    img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'item-2',
    nombre: 'Gladiador Neons',
    tipo: 'Snack',
    precio: 18.50,
    cantidad: 1,
    img: 'https://images.unsplash.com/photo-1585647347382-223bdb0dca9df?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'item-3',
    nombre: 'Combo Pareja Suprema',
    tipo: 'Snack',
    precio: 12.50,
    cantidad: 1,
    img: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=120&q=80'
  }
];

window.CineCart = {
  getItems() {
    try {
      const data = localStorage.getItem('cineplex_cart');
      if (data) return JSON.parse(data);
    } catch (e) {}
    localStorage.setItem('cineplex_cart', JSON.stringify(DEFAULT_CART_ITEMS));
    return DEFAULT_CART_ITEMS;
  },

  save(items) {
    localStorage.setItem('cineplex_cart', JSON.stringify(items));
    this.updateUI();
  },

  addItem(item) {
    const items = this.getItems();
    const existing = items.find(i => i.nombre === item.nombre && i.tipo === (item.tipo || 'Snack'));
    if (existing) {
      existing.cantidad += 1;
    } else {
      items.push({
        id: item.id || Date.now().toString(),
        nombre: item.nombre,
        tipo: item.tipo || 'Snack',
        precio: parseFloat(item.precio),
        cantidad: 1,
        img: item.img || 'https://images.unsplash.com/photo-1585647347382-223bdb0dca9df?auto=format&fit=crop&w=120&q=80'
      });
    }
    this.save(items);
    const shortName = item.nombre.length > 36 ? item.nombre.slice(0, 34) + '...' : item.nombre;
    this.showToast(`"${shortName}" añadido al carrito`);
    this.animateBadge();
    this.openDropdown();
  },

  clear() {
    this.save([]);
    try {
      localStorage.removeItem('cineplex_tickets_carrito');
      localStorage.removeItem('cineplex_ticket_actual');
    } catch(e) {}
  },

  removeItem(id) {
    let items = this.getItems();
    items = items.filter(i => i.id !== id);
    this.save(items);
    try {
      let tickets = JSON.parse(localStorage.getItem('cineplex_tickets_carrito') || '[]');
      tickets = tickets.filter(t => t.id !== id);
      localStorage.setItem('cineplex_tickets_carrito', JSON.stringify(tickets));
    } catch(e) {}
  },

  changeQty(id, delta) {
    let items = this.getItems();
    const item = items.find(i => i.id === id);
    if (item) {
      item.cantidad += delta;
      if (item.cantidad <= 0) {
        items = items.filter(i => i.id !== id);
      }
      this.save(items);
    }
  },

  toggleDropdown() {
    const dropdown = document.getElementById('navCartDropdown');
    if (dropdown) dropdown.classList.toggle('active');
  },

  openDropdown() {
    const dropdown = document.getElementById('navCartDropdown');
    if (dropdown) dropdown.classList.add('active');
  },

  closeDropdown() {
    const dropdown = document.getElementById('navCartDropdown');
    if (dropdown) dropdown.classList.remove('active');
  },

  animateBadge() {
    const badge = document.getElementById('navCartBadge');
    if (badge) {
      badge.classList.remove('badge-pop');
      void badge.offsetWidth;
      badge.classList.add('badge-pop');
    }
  },

  showToast(msg) {
    let toast = document.getElementById('cineToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cineToast';
      toast.className = 'cine-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  },

  updateUI() {
    const items = this.getItems();
    const badge = document.getElementById('navCartBadge');
    const body = document.getElementById('navCartBody');
    const subtotalEl = document.getElementById('navCartSubtotal');
    const totalEl = document.getElementById('navCartTotal');

    const totalCount = items.reduce((sum, i) => sum + i.cantidad, 0);
    if (badge) badge.textContent = totalCount;

    if (!body) return;

    if (items.length === 0) {
      body.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: #64748b;">
          <p style="font-size: 0.95rem; margin-bottom: 0.4rem; color: #ffffff; font-weight: 700;">Tu carrito está vacío</p>
          <span style="font-size: 0.8rem; color: #a78bfa;">Elige entradas o snacks para agregarlos aquí</span>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (totalEl) totalEl.textContent = '$0.00';
      return;
    }

    body.innerHTML = items.map(item => `
      <div class="nav-cart-item">
        <div class="nav-cart-thumb" style="background-image: url('${item.img}');"></div>
        <div class="nav-cart-details">
          <div class="nav-cart-name-row">
            <span class="nav-cart-name">${item.nombre}</span>
            <button class="nav-cart-remove" onclick="CineCart.removeItem('${item.id}')" title="Eliminar">✕</button>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.2rem;">
            <span class="nav-cart-price">$${item.precio.toFixed(2)}</span>
            <span class="nav-cart-type">${item.tipo}</span>
          </div>
          <div class="nav-cart-qty">
            <button onclick="CineCart.changeQty('${item.id}', -1)">−</button>
            <span>${item.cantidad}</span>
            <button onclick="CineCart.changeQty('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `).join('');

    const subtotal = items.reduce((sum, i) => sum + (i.precio * i.cantidad), 0);
    const fee = 1.50;
    const total = subtotal + fee;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    // Sincronizar barra flotante inferior de caramelería si existe
    const cartBarCount = document.getElementById('cartBarItemsCount');
    const cartBarTotal = document.getElementById('cartBarTotalAmount');
    if (cartBarCount) cartBarCount.textContent = totalCount;
    if (cartBarTotal) cartBarTotal.textContent = `$${total.toFixed(2)}`;
  }
};

// Mover la raya morada animada suavemente debajo del elemento activo con traslación fluida
function moveNavIndicator(targetEl) {
  const navMenu = document.querySelector('.nav-menu');
  const indicator = document.querySelector('.nav-indicator');
  if (!navMenu || !indicator) return;

  if (!targetEl) {
    indicator.style.opacity = '0';
    return;
  }

  const menuRect = navMenu.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();

  const left = targetRect.left - menuRect.left;
  const width = targetRect.width;

  indicator.style.transform = `translateX(${left}px)`;
  indicator.style.width = `${width}px`;
  indicator.style.opacity = '1';
}

// Función global para actualizar la raya morada animada del menú
function actualizarNavActive(targetIdentifier) {
  const navMenu = document.querySelector('.nav-menu');
  if (!navMenu) return;
  const navLinks = navMenu.querySelectorAll('.nav-item');
  
  navLinks.forEach(link => link.classList.remove('active'));

  if (!targetIdentifier) {
    moveNavIndicator(null);
    return;
  }

  const cleanTarget = targetIdentifier.replace('#', '').toLowerCase();
  const activeLink = Array.from(navLinks).find(link => {
    const sec = (link.getAttribute('data-section') || '').toLowerCase();
    const href = (link.getAttribute('href') || '').toLowerCase();
    return sec === cleanTarget || href.endsWith('#' + cleanTarget) || href.endsWith('/' + cleanTarget + '.html') || href.endsWith(cleanTarget + '.html');
  });

  if (activeLink) {
    activeLink.classList.add('active');
    requestAnimationFrame(() => moveNavIndicator(activeLink));
  } else {
    moveNavIndicator(null);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navbarPlaceholder = document.getElementById('app-navbar');
  const footerPlaceholder = document.getElementById('app-footer');

  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = getNavbarHTML();
    const currentPath = window.location.pathname.replace(/\\/g, '/').split('/').pop() || 'home.html';
    
    // Activar pestaña según la página actual o hash
    if (currentPath === 'contacto.html') {
      actualizarNavActive('contacto');
    } else if (currentPath === 'carameleria.html') {
      actualizarNavActive('carameleria');
    } else if (currentPath === 'home.html' || currentPath === '' || currentPath === 'index.html') {
      const currentHash = window.location.hash ? window.location.hash.replace('#', '') : 'cartelera';
      actualizarNavActive(currentHash);

      // ScrollSpy dinámico en home.html: Al deslizar con la rueda o trackpad, mueve la raya morada a la sección visible
      const sections = ['cartelera', 'preventa', 'proximamente'];
      let scrollTimer = null;
      window.addEventListener('scroll', () => {
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const scrollPos = window.scrollY + 200;
          for (let i = sections.length - 1; i >= 0; i--) {
            const secEl = document.getElementById(sections[i]);
            if (secEl && secEl.offsetTop <= scrollPos) {
              actualizarNavActive(sections[i]);
              break;
            }
          }
        }, 40);
      }, { passive: true });
    }
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = getFooterHTML();
  }

  // Interacción al hacer clic en enlaces del navbar: Cambio inmediato con animación de la raya morada
  document.querySelectorAll('.nav-menu .nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
      const sec = this.getAttribute('data-section') || this.getAttribute('href');
      actualizarNavActive(sec);
    });
  });

  // Reubicar la raya morada al redimensionar la ventana o cargar tipografías
  window.addEventListener('resize', () => {
    const activeLink = document.querySelector('.nav-menu .nav-item.active');
    if (activeLink) moveNavIndicator(activeLink);
  });
  if (document.fonts) {
    document.fonts.ready.then(() => {
      const activeLink = document.querySelector('.nav-menu .nav-item.active');
      if (activeLink) moveNavIndicator(activeLink);
    });
  }

  // Deslizamiento ultra suave al hacer clic en enlaces del navbar con anclas (#cartelera, #preventa, etc.)
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const hashIndex = href.indexOf('#');
      if (hashIndex !== -1) {
        const hash = href.substring(hashIndex);
        const target = document.querySelector(hash);
        if (target) {
          const hrefPath = href.substring(0, hashIndex);
          const currentPath = window.location.pathname.replace(/\\/g, '/').split('/').pop() || 'home.html';
          if (!hrefPath || hrefPath.endsWith(currentPath) || (currentPath === 'home.html' && hrefPath.endsWith('home.html'))) {
            e.preventDefault();
            actualizarNavActive(hash);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, null, hash);
          }
        }
      }
    });
  });

  // Si se accede a la página directamente con hash (ej: home.html#preventa), realizar deslizamiento suave y marcar
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
      actualizarNavActive(hash);
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 180);
    }
  }

  // Interacción del carrito en el navbar
  const navCartBtn = document.getElementById('navCartBtn');
  const navCartClose = document.getElementById('navCartClose');
  const navCartDropdown = document.getElementById('navCartDropdown');

  if (navCartBtn) {
    navCartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      CineCart.toggleDropdown();
    });
  }

  if (navCartClose) {
    navCartClose.addEventListener('click', (e) => {
      e.stopPropagation();
      CineCart.closeDropdown();
    });
  }

  // Cerrar al hacer clic fuera del dropdown
  document.addEventListener('click', (e) => {
    if (navCartDropdown && navCartDropdown.classList.contains('active')) {
      if (!navCartDropdown.contains(e.target) && !navCartBtn.contains(e.target)) {
        CineCart.closeDropdown();
      }
    }
  });

  // Tema Dark / Light
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

  // Catálogo oficial de películas para el buscador interactivo del navbar
  const CINEPLEX_CATALOG = [
    { id: 'dune-2', titulo: 'Dune: Parte Dos', genero: 'Ciencia Ficción • IMAX / 4D', duracion: '2h 46m', rating: '+13', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80' },
    { id: 'spider-verse', titulo: 'Spider-Man: Across the Spider-Verse', genero: 'Animación / Acción • 2D / 3D', duracion: '2h 20m', rating: 'ATP', poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=300&q=80' },
    { id: 'oppenheimer', titulo: 'Oppenheimer', genero: 'Drama / Historia • IMAX / 2D', duracion: '3h 00m', rating: '+16', poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=300&q=80' },
    { id: 'deadpool', titulo: 'Deadpool & Wolverine', genero: 'Acción / Comedia • 2D / 4D', duracion: '2h 08m', rating: '+18', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80' },
    { id: 'siniestra', titulo: 'Temporada Siniestra', genero: 'Terror / Suspenso • VIP 4D', duracion: '1h 52m', rating: '+18', poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=300&q=80' },
    { id: 'joker-2', titulo: 'Joker: Folie à Deux', genero: 'Drama / Crimen • Preventa VIP', duracion: '2h 18m', rating: '+16', poster: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=300&q=80' },
    { id: 'gladiador-2', titulo: 'Gladiador II', genero: 'Acción / Épica • Preventa IMAX', duracion: '2h 28m', rating: '+16', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80' },
    { id: 'venom-3', titulo: 'Venom: El Último Baile', genero: 'Acción / Sci-Fi • Preventa 3D', duracion: '1h 50m', rating: '+13', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80' },
    { id: 'rohirrim', titulo: 'El Señor de los Anillos: Rohirrim', genero: 'Animación / Fantasía', duracion: '2h 15m', rating: '+13', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80' }
  ];

  // Interacción del Buscador en el Navbar
  const navSearchInput = document.getElementById('navSearchInput');
  const navSearchClearBtn = document.getElementById('navSearchClearBtn');
  const navSearchResults = document.getElementById('navSearchResults');
  const { viewBase } = getLayoutConfig();

  if (navSearchInput && navSearchResults) {
    function realizarBusqueda(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        navSearchResults.classList.remove('active');
        navSearchResults.innerHTML = '';
        if (navSearchClearBtn) navSearchClearBtn.style.display = 'none';
        return;
      }

      if (navSearchClearBtn) navSearchClearBtn.style.display = 'block';

      const matches = CINEPLEX_CATALOG.filter(m => 
        m.titulo.toLowerCase().includes(q) || 
        m.genero.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        navSearchResults.innerHTML = `
          <div class="search-no-results">
            No se encontraron películas para "<strong>${query}</strong>"
          </div>
        `;
      } else {
        navSearchResults.innerHTML = matches.map(m => `
          <a href="${viewBase}detalle.html?pelicula=${m.id}" class="search-result-item">
            <img src="${m.poster}" alt="${m.titulo}" class="search-item-poster">
            <div class="search-item-info">
              <span class="search-item-title">${m.titulo}</span>
              <div class="search-item-meta">
                <span class="search-item-badge">${m.rating}</span>
                <span>${m.duracion}</span>
                <span>&bull;</span>
                <span>${m.genero.split('•')[0]}</span>
              </div>
            </div>
            <div style="font-size: 11px; font-weight: 800; color: #a78bfa; background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3); padding: 4px 8px; border-radius: 6px; white-space: nowrap;">
              Ver Tráiler &gt;
            </div>
          </a>
        `).join('');
      }

      navSearchResults.classList.add('active');
    }

    navSearchInput.addEventListener('input', (e) => {
      realizarBusqueda(e.target.value);
    });

    navSearchInput.addEventListener('focus', () => {
      if (navSearchInput.value.trim()) {
        realizarBusqueda(navSearchInput.value);
      }
    });

    if (navSearchClearBtn) {
      navSearchClearBtn.addEventListener('click', () => {
        navSearchInput.value = '';
        realizarBusqueda('');
        navSearchInput.focus();
      });
    }

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
      const searchWrapper = document.getElementById('navSearchWrapper');
      if (searchWrapper && !searchWrapper.contains(e.target)) {
        navSearchResults.classList.remove('active');
      }
    });

    // Cerrar al presionar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navSearchResults.classList.remove('active');
        navSearchInput.blur();
      }
    });
  }

  // Actualizar UI del carrito inmediatamente
  CineCart.updateUI();
});
