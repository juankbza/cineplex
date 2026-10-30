(() => {
  const STORAGE_KEY = 'cineplex-admin-demo-v1';
  const viewTitles = {
    overview: 'Resumen general',
    movies: 'Películas y funciones',
    rooms: 'Salas y asientos',
    concessions: 'Dulcería e inventario',
    promotions: 'Promociones',
    refunds: 'Devoluciones',
    customers: 'Clientes y personal',
    audit: 'Auditoría',
    reports: 'Reportes y ventas',
    'age-checks': 'Verificación de edad',
    chatbot: 'Chatbot IA',
    settings: 'Ajustes del sistema'
  };
  const money = new Intl.NumberFormat('es-VE', { style: 'currency', currency: 'USD' });
  const localDate = (offsetDays, hour = 18) => {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    date.setHours(hour, 0, 0, 0);
    return date.toISOString().slice(0, 16);
  };
  const initialState = () => ({
    movies: [
      { id: 'm1', title: 'Spider-Man: Beyond the Spider-Verse', genre: 'Animación / Acción', duration: 140, rating: '+13', status: 'En Cartelera', trailer: 'https://www.youtube.com/watch?v=demo-spider', poster: '', archived: false },
      { id: 'm2', title: 'Dune: Parte Dos', genre: 'Ciencia ficción / Aventura', duration: 166, rating: 'TP', status: 'En Cartelera', trailer: 'https://www.youtube.com/watch?v=demo-dune', poster: '', archived: false },
      { id: 'm3', title: 'Oppenheimer', genre: 'Drama / Historia', duration: 180, rating: '+18', status: 'En Cartelera', trailer: '', poster: '', archived: false },
      { id: 'm4', title: 'Gladiador II', genre: 'Acción / Épico', duration: 150, rating: '+14', status: 'Próximamente', trailer: '', poster: '', archived: false }
    ],
    screenings: [
      { id: 's1', movieId: 'm1', room: 'Sala 1', format: '4D', dateTime: localDate(1, 18), language: 'Español', subtitles: 'Sin subtítulos', price: 8, ticketsSold: 42, status: 'Programada' },
      { id: 's2', movieId: 'm2', room: 'Sala 4', format: 'VIP', dateTime: localDate(1, 20), language: 'Inglés', subtitles: 'Español', price: 12, ticketsSold: 18, status: 'Programada' },
      { id: 's3', movieId: 'm3', room: 'Sala 2', format: 'Estándar', dateTime: localDate(2, 19), language: 'Español', subtitles: 'Sin subtítulos', price: 7, ticketsSold: 0, status: 'Programada' }
    ],
    rooms: [
      { id: 'r1', name: 'Sala 1', format: '4D', capacity: 60, status: 'Habilitada', seats: Array.from({ length: 60 }, (_, i) => ({ id: `1-${i + 1}`, status: i === 17 ? 'Mantenimiento' : 'Disponible' })) },
      { id: 'r2', name: 'Sala 2', format: 'Estándar', capacity: 120, status: 'Habilitada', seats: Array.from({ length: 120 }, (_, i) => ({ id: `2-${i + 1}`, status: 'Disponible' })) },
      { id: 'r3', name: 'Sala 4', format: 'VIP', capacity: 48, status: 'Mantenimiento', seats: Array.from({ length: 48 }, (_, i) => ({ id: `4-${i + 1}`, status: i === 4 ? 'Mantenimiento' : 'Disponible' })) }
    ],
    products: [
      { id: 'p1', name: 'Cotufas grandes', type: 'Producto', stock: 34, threshold: 10, price: 5.5 },
      { id: 'p2', name: 'Combo Pareja', type: 'Combo', stock: 7, threshold: 12, price: 14 },
      { id: 'p3', name: 'Agua mineral 500 ml', type: 'Producto', stock: 48, threshold: 15, price: 2 },
      { id: 'p4', name: 'Nachos con queso', type: 'Producto', stock: 4, threshold: 8, price: 6 }
    ],
    promotions: [
      { id: 'pr1', name: 'Miércoles de cine', code: 'MIERCOLES20', discount: 20, starts: localDate(0, 0).slice(0, 10), ends: localDate(30, 0).slice(0, 10), status: 'Activa' }
    ],
    customers: [
      { id: 'c1', name: 'María Rodríguez', email: 'maria.rodriguez@example.test', joined: '2026-03-12', status: 'Activo' },
      { id: 'c2', name: 'Carlos Méndez', email: 'carlos.mendez@example.test', joined: '2026-05-21', status: 'Activo' },
      { id: 'c3', name: 'Sofía Valenzuela', email: 'sofia.valenzuela@example.test', joined: '2026-08-03', status: 'Bloqueado' }
    ],
    staff: [
      { id: 'u1', name: 'Ana Gómez', email: 'ana.gomez@example.test', role: 'Admin', status: 'Activo' },
      { id: 'u2', name: 'Luis Pérez', email: 'luis.perez@example.test', role: 'Gerente', status: 'Activo' },
      { id: 'u3', name: 'Elena Díaz', email: 'elena.diaz@example.test', role: 'Cajero', status: 'Activo' }
    ],
    refunds: [
      { id: 'rf1', customer: 'María Rodríguez', reason: 'Función reprogramada', amount: 16, status: 'Pendiente' },
      { id: 'rf2', customer: 'Carlos Méndez', reason: 'Compra duplicada', amount: 8, status: 'Pendiente' },
      { id: 'rf3', customer: 'Sofía Valenzuela', reason: 'Solicitud revisada', amount: 12, status: 'Autorizado' }
    ],
    audit: [
      { at: new Date().toISOString(), actor: 'Sistema de demostración', action: 'Inicio del prototipo', detail: 'Datos ficticios cargados en este navegador.' }
    ],
    ageChecks: [
      { at: new Date(Date.now() - 1800000).toISOString(), ref: 'REF-•••-1842', age: '22 años', result: 'Verificado', reviewed: false },
      { at: new Date(Date.now() - 7200000).toISOString(), ref: 'REF-•••-7021', age: 'No concluyente', result: 'Revisión manual', reviewed: false }
    ],
    chats: [
      { at: new Date(Date.now() - 1200000).toISOString(), id: 'CHAT-1048', topic: 'Compra de entradas', summary: 'Consulta sobre cambio de horario.', status: 'Pendiente' },
      { at: new Date(Date.now() - 5400000).toISOString(), id: 'CHAT-1042', topic: 'Promociones', summary: 'Pregunta sobre descuento de miércoles.', status: 'Revisado' }
    ],
    settings: { gateway: 'Sin configurar', currency: 'USD', defaultStockThreshold: 10, maintenanceMode: false }
  });

  const clone = value => JSON.parse(JSON.stringify(value));
  let state;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    state = saved ? { ...initialState(), ...JSON.parse(saved) } : initialState();
    if (saved && (!Array.isArray(state.movies) || !Array.isArray(state.screenings) || !Array.isArray(state.audit))) {
      throw new Error('El formato guardado no es válido.');
    }
  } catch (error) {
    console.error('No se pudieron leer los datos del panel de administración:', error);
    state = initialState();
    window.setTimeout(() => notify('No se pudieron leer los datos guardados; se cargó una muestra nueva.'), 0);
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const text = value => value == null ? '' : String(value);
  const create = (tag, className, value) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (value !== undefined) element.textContent = text(value);
    return element;
  };
  const cell = value => create('td', '', value);
  const badge = (value, variant = 'info') => create('span', `admin-badge ${variant}`, value);
  const movieFor = id => state.movies.find(movie => movie.id === id);
  const statusVariant = status => /activo|programada|habilitada|disponible|verificado/i.test(status) ? 'success' : /pendiente|mantenimiento|próximamente|revisión/i.test(status) ? 'warning' : /cancel|bloque|fuera|rechaz|deshabilitad/i.test(status) ? 'danger' : 'info';
  const dateLabel = value => value ? new Date(value).toLocaleString('es-VE', { dateStyle: 'medium', timeStyle: 'short' }) : '—';
  const futureScreenings = movieId => state.screenings.filter(item => item.movieId === movieId && item.status === 'Programada');
  const moneyLabel = value => money.format(Number(value) || 0);

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('No se pudieron guardar los cambios del panel de administración:', error);
      notify('No se pudieron guardar los cambios en este navegador.');
    }
  }

  function log(action, detail) {
    state.audit.unshift({ at: new Date().toISOString(), actor: 'Administrador (demo)', action, detail });
    state.audit = state.audit.slice(0, 300);
    persist();
  }

  function notify(message) {
    const toast = $('#adminToast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(notify.timeout);
    notify.timeout = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function addEmptyRow(tbody, columns, message = 'No hay registros para mostrar.') {
    const row = create('tr');
    const empty = create('td', 'admin-empty', message);
    empty.colSpan = columns;
    row.append(empty);
    tbody.append(row);
  }

  function addActions(row, actions) {
    const td = create('td');
    const wrapper = create('div', 'admin-actions');
    actions.forEach(({ label, action, id, variant = 'secondary', disabled = false }) => {
      const button = create('button', `admin-button small ${variant}`, label);
      button.type = 'button';
      button.dataset.action = action;
      if (id) button.dataset.id = id;
      button.disabled = disabled;
      wrapper.append(button);
    });
    td.append(wrapper);
    row.append(td);
  }

  function renderOverview() {
    const activeMovies = state.movies.filter(movie => movie.status === 'En Cartelera' && !movie.archived).length;
    const screenings = state.screenings.filter(item => item.status === 'Programada');
    const lowStock = state.products.filter(product => product.stock <= product.threshold);
    const revenue = 18420;
    const stats = [
      ['Películas en cartelera', activeMovies, `${state.movies.length} en catálogo`],
      ['Funciones programadas', screenings.length, 'Fechas futuras'],
      ['Alertas de inventario', lowStock.length, 'Stock bajo o agotado'],
      ['Ingresos de muestra', moneyLabel(revenue), 'Últimos 30 días · demo']
    ];
    const statsHost = $('#overviewStats');
    statsHost.replaceChildren();
    stats.forEach(([label, value, detail]) => {
      const card = create('article', 'admin-stat-card');
      card.append(create('div', 'admin-stat-label', label), create('div', 'admin-stat-value', value), create('div', 'admin-stat-detail', detail));
      statsHost.append(card);
    });

    const screeningBody = $('#overviewScreenings');
    screeningBody.replaceChildren();
    screenings.slice(0, 5).forEach(item => {
      const movie = movieFor(item.movieId);
      const row = create('tr');
      row.append(cell(movie ? movie.title : 'Película eliminada'), cell(`${item.room} · ${item.format}`), cell(dateLabel(item.dateTime)));
      const stateCell = create('td');
      stateCell.append(badge(item.status, statusVariant(item.status)));
      row.append(stateCell);
      screeningBody.append(row);
    });
    if (!screenings.length) addEmptyRow(screeningBody, 4);

    const alerts = $('#overviewAlerts');
    alerts.replaceChildren();
    lowStock.forEach(product => {
      const item = create('div', 'admin-alert-item');
      const content = create('div');
      content.append(create('strong', '', product.name), create('small', '', `${product.stock} disponibles · mínimo ${product.threshold}`));
      item.append(content, badge(product.stock === 0 ? 'Agotado' : 'Stock bajo', 'warning'));
      alerts.append(item);
    });
    if (!lowStock.length) alerts.append(create('p', 'admin-subtext', 'No hay alertas de stock.'));

    const activity = $('#overviewActivity');
    activity.replaceChildren();
    state.audit.slice(0, 4).forEach(entry => {
      const item = create('div', 'admin-activity-item');
      const content = create('div');
      content.append(create('strong', '', entry.action), create('small', '', `${entry.actor} · ${entry.detail}`));
      item.append(content, create('small', '', dateLabel(entry.at)));
      activity.append(item);
    });
  }

  function renderMovies() {
    const search = ($('#movieSearch').value || '').trim().toLowerCase();
    const moviesBody = $('#moviesTable');
    moviesBody.replaceChildren();
    const movies = state.movies.filter(movie => !movie.archived && movie.title.toLowerCase().includes(search));
    movies.forEach(movie => {
      const row = create('tr');
      const title = create('td');
      title.append(create('strong', '', movie.title), create('span', 'admin-subtext', `${movie.genre} · ${movie.duration} min · ${movie.rating}`));
      row.append(title);
      const status = create('td');
      const statusSelect = document.createElement('select');
      statusSelect.className = 'admin-inline-select';
      statusSelect.dataset.action = 'movie-status';
      statusSelect.dataset.id = movie.id;
      ['Próximamente', 'En Cartelera', 'Fuera de Cartelera'].forEach(value => {
        const option = create('option', '', value);
        option.value = value;
        option.selected = movie.status === value;
        statusSelect.append(option);
      });
      status.append(statusSelect);
      row.append(status);
      const trailer = create('td');
      if (movie.trailer) {
        const link = create('a', 'admin-link', 'Ver tráiler');
        link.href = movie.trailer;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        trailer.append(link);
      } else trailer.textContent = 'Sin tráiler';
      row.append(trailer);
      const counts = futureScreenings(movie.id);
      row.append(cell(`${counts.length} futuras · ${state.screenings.filter(item => item.movieId === movie.id).reduce((sum, item) => sum + Number(item.ticketsSold || 0), 0)} boletos vendidos`));
      const actions = [{ label: 'Editar', action: 'edit-movie', id: movie.id }];
      if (movie.trailer) actions.push({ label: 'Gestionar tráiler', action: 'trailer', id: movie.id });
      actions.push({ label: 'Archivar', action: 'archive-movie', id: movie.id, variant: 'danger' });
      addActions(row, actions);
      moviesBody.append(row);
    });
    if (!movies.length) addEmptyRow(moviesBody, 5, 'No hay películas que coincidan con la búsqueda.');

    const screeningBody = $('#screeningsTable');
    screeningBody.replaceChildren();
    state.screenings.slice().sort((a, b) => a.dateTime.localeCompare(b.dateTime)).forEach(item => {
      const row = create('tr');
      const movie = movieFor(item.movieId);
      row.append(cell(movie ? movie.title : 'Película eliminada'), cell(`${item.room} · ${item.format}`), cell(dateLabel(item.dateTime)), cell(`${item.language} · ${item.subtitles}`), cell(moneyLabel(item.price)), cell(text(item.ticketsSold)));
      const statusCell = create('td');
      const statusWrap = create('div', 'admin-actions');
      statusWrap.append(badge(item.status, statusVariant(item.status)));
      if (item.status === 'Programada') {
        const button = create('button', 'admin-button small danger', 'Cancelar');
        button.dataset.action = 'cancel-screening';
        button.dataset.id = item.id;
        statusWrap.append(button);
      }
      statusCell.append(statusWrap);
      row.append(statusCell);
      screeningBody.append(row);
    });
    if (!state.screenings.length) addEmptyRow(screeningBody, 7);
  }

  function renderRooms() {
    const host = $('#roomsGrid');
    host.replaceChildren();
    state.rooms.forEach(room => {
      const card = create('article', 'admin-room-card');
      const top = create('div', 'admin-room-top');
      const info = create('div');
      info.append(create('h3', '', room.name), create('p', '', `${room.format} · ${room.capacity} asientos · ${room.seats.filter(seat => seat.status !== 'Disponible').length} no disponibles`));
      const statusSelect = document.createElement('select');
      statusSelect.className = 'admin-inline-select';
      statusSelect.dataset.action = 'room-status';
      statusSelect.dataset.id = room.id;
      ['Habilitada', 'Deshabilitada', 'Mantenimiento'].forEach(value => {
      const option = create('option', '', value);
      option.value = value;
      option.selected = room.status === value;
      statusSelect.append(option);
      });
      top.append(info, statusSelect);
      const status = create('div');
      status.style.marginTop = '0.5rem';
      status.append(badge(room.status, statusVariant(room.status)));
      const seats = create('div', 'admin-seats');
      room.seats.forEach(seat => {
        const button = create('button', `admin-seat${seat.status !== 'Disponible' ? ' maintenance' : ''}${seat.status === 'Deshabilitado' ? ' disabled-seat' : ''}`, seat.id);
        button.title = `${seat.id}: ${seat.status}. Haz clic para cambiar el estado.`;
        button.dataset.action = 'toggle-seat';
        button.dataset.roomId = room.id;
        button.dataset.seatId = seat.id;
        button.disabled = room.status !== 'Habilitada';
        seats.append(button);
      });
      card.append(top, status, seats, create('div', 'admin-room-legend', 'Verde: disponible · rojo: mantenimiento · gris: deshabilitado. Haz clic para cambiar el estado.'));
      host.append(card);
    });
  }

  function renderProducts() {
    const search = ($('#productSearch').value || '').trim().toLowerCase();
    const body = $('#productsTable');
    body.replaceChildren();
    state.products.filter(product => product.name.toLowerCase().includes(search)).forEach(product => {
      const row = create('tr');
      row.append(cell(product.name), cell(product.type), cell(product.stock), cell(product.threshold), cell(moneyLabel(product.price)));
      const alertCell = create('td');
      alertCell.append(badge(product.stock <= product.threshold ? (product.stock === 0 ? 'Agotado' : 'Stock bajo') : 'Normal', product.stock <= product.threshold ? 'warning' : 'success'));
      row.append(alertCell);
      addActions(row, [
        { label: '+1 stock', action: 'stock-add', id: product.id },
        { label: '−1 stock', action: 'stock-sub', id: product.id },
        { label: 'Editar', action: 'edit-product', id: product.id },
        { label: 'Eliminar', action: 'delete-product', id: product.id, variant: 'danger' }
      ]);
      body.append(row);
    });
    if (!body.children.length) addEmptyRow(body, 7, 'No hay productos que coincidan con la búsqueda.');
  }

  function renderPromotions() {
    const body = $('#promotionsTable');
    body.replaceChildren();
    state.promotions.forEach(promo => {
      const row = create('tr');
      const offer = promo.kind === 'Precio especial'
        ? moneyLabel(promo.discount)
        : `${promo.discount}% de descuento`;
      row.append(cell(promo.name), cell(promo.code), cell(offer), cell(`${promo.starts} — ${promo.ends}`));
      const statusCell = create('td');
      statusCell.append(badge(promo.status, statusVariant(promo.status)));
      row.append(statusCell);
      addActions(row, [
        { label: 'Editar', action: 'edit-promotion', id: promo.id },
        { label: 'Eliminar', action: 'delete-promotion', id: promo.id, variant: 'danger' }
      ]);
      body.append(row);
    });
    if (!body.children.length) addEmptyRow(body, 6);
  }

  function renderPeople() {
    const search = ($('#customerSearch').value || '').trim().toLowerCase();
    const customers = $('#customersTable');
    customers.replaceChildren();
    state.customers.filter(user => `${user.name} ${user.email}`.toLowerCase().includes(search)).forEach(user => {
      const row = create('tr');
      row.append(cell(user.name), cell(user.email), cell(user.joined));
      const statusCell = create('td');
      statusCell.append(badge(user.status, statusVariant(user.status)));
      row.append(statusCell);
      addActions(row, [
        { label: user.status === 'Activo' ? 'Bloquear' : 'Desbloquear', action: 'toggle-customer', id: user.id },
        { label: 'Eliminar', action: 'delete-customer', id: user.id, variant: 'danger' }
      ]);
      customers.append(row);
    });
    if (!customers.children.length) addEmptyRow(customers, 5, 'No hay clientes que coincidan con la búsqueda.');

    const staff = $('#staffTable');
    staff.replaceChildren();
    state.staff.forEach(user => {
      const row = create('tr');
      row.append(cell(user.name), cell(user.email));
      const roleCell = create('td');
      const role = document.createElement('select');
      role.className = 'admin-inline-select';
      role.dataset.action = 'staff-role';
      role.dataset.id = user.id;
      ['Admin', 'Gerente', 'Cajero'].forEach(value => {
        const option = create('option', '', value);
        option.value = value;
        option.selected = value === user.role;
        role.append(option);
      });
      roleCell.append(role);
      row.append(roleCell);
      const statusCell = create('td');
      statusCell.append(badge(user.status, statusVariant(user.status)));
      row.append(statusCell);
      addActions(row, [{ label: 'Eliminar', action: 'delete-staff', id: user.id, variant: 'danger' }]);
      staff.append(row);
    });
    if (!staff.children.length) addEmptyRow(staff, 5);
  }

  function renderRefunds() {
    const body = $('#refundsTable');
    body.replaceChildren();
    state.refunds.forEach(refund => {
      const row = create('tr');
      row.append(cell(refund.id.toUpperCase()), cell(refund.customer), cell(refund.reason), cell(moneyLabel(refund.amount)));
      const statusCell = create('td');
      statusCell.append(badge(refund.status, statusVariant(refund.status)));
      row.append(statusCell);
      addActions(row, refund.status === 'Pendiente'
        ? [{ label: 'Autorizar (demo)', action: 'authorize-refund', id: refund.id, variant: 'primary' }, { label: 'Rechazar', action: 'reject-refund', id: refund.id, variant: 'danger' }]
        : []);
      body.append(row);
    });
    if (!body.children.length) addEmptyRow(body, 6);
  }

  function renderAudit() {
    const body = $('#auditTable');
    body.replaceChildren();
    state.audit.forEach(entry => {
      const row = create('tr');
      row.append(cell(dateLabel(entry.at)), cell(entry.actor), cell(entry.action), cell(entry.detail));
      body.append(row);
    });
    if (!body.children.length) addEmptyRow(body, 4);
  }

  function renderReports() {
    const host = $('#reportStats');
    host.replaceChildren();
    [
      ['Entradas vendidas', '1.284', 'Reporte de demostración'],
      ['Ingresos por entradas', moneyLabel(12840), 'Datos ficticios'],
      ['Ingresos de dulcería', moneyLabel(3860), 'Datos ficticios'],
      ['Reembolsos aprobados', moneyLabel(420), 'Sin movimiento real de dinero']
    ].forEach(([label, value, detail]) => {
      const card = create('article', 'admin-stat-card');
      card.append(create('div', 'admin-stat-label', label), create('div', 'admin-stat-value', value), create('div', 'admin-stat-detail', detail));
      host.append(card);
    });
    const bars = $('#reportBars');
    bars.replaceChildren();
    [['Entradas', 12840], ['Dulcería', 3860], ['Promociones', 1720], ['Reembolsos', 420]].forEach(([name, value]) => {
      const row = create('div', 'admin-report-row');
      const track = create('div', 'admin-report-track');
      const fill = create('div', 'admin-report-fill');
      fill.style.width = `${Math.max(4, value / 12840 * 100)}%`;
      track.append(fill);
      row.append(create('span', '', name), track, create('span', 'admin-report-value', moneyLabel(value)));
      bars.append(row);
    });
  }

  function renderAgeChecks() {
    const body = $('#ageTable');
    body.replaceChildren();
    state.ageChecks.forEach(item => {
      const row = create('tr');
      row.append(cell(dateLabel(item.at)), cell(item.ref), cell(item.age));
      const result = create('td');
      result.append(badge(item.result, statusVariant(item.result)));
      row.append(result);
      const review = create('td');
      const reviewWrap = create('div', 'admin-actions');
      reviewWrap.append(badge(item.reviewed ? 'Revisado' : 'Pendiente', item.reviewed ? 'success' : 'warning'));
      if (!item.reviewed) {
        const button = create('button', 'admin-button small secondary', 'Marcar revisado');
        button.dataset.action = 'review-age';
        button.dataset.id = item.ref;
        reviewWrap.append(button);
      }
      review.append(reviewWrap);
      row.append(review);
      body.append(row);
    });
    if (!body.children.length) addEmptyRow(body, 5);
  }

  function renderChats() {
    const body = $('#chatTable');
    body.replaceChildren();
    state.chats.forEach(item => {
      const row = create('tr');
      row.append(cell(dateLabel(item.at)), cell(item.id), cell(item.topic), cell(item.summary));
      const statusCell = create('td');
      statusCell.append(badge(item.status, statusVariant(item.status)));
      row.append(statusCell);
      addActions(row, item.status === 'Pendiente' ? [{ label: 'Marcar revisado', action: 'review-chat', id: item.id }] : []);
      body.append(row);
    });
    if (!body.children.length) addEmptyRow(body, 6);
  }

  function renderSettings() {
    const form = $('#settingsForm');
    form.elements.gateway.value = state.settings.gateway;
    form.elements.currency.value = state.settings.currency;
    form.elements.defaultStockThreshold.value = state.settings.defaultStockThreshold;
    form.elements.maintenanceMode.checked = Boolean(state.settings.maintenanceMode);
  }

  function renderAll() {
    renderOverview();
    renderMovies();
    renderRooms();
    renderProducts();
    renderPromotions();
    renderRefunds();
    renderPeople();
    renderAudit();
    renderReports();
    renderAgeChecks();
    renderChats();
    renderSettings();
  }

  function showView(name) {
    if (!viewTitles[name]) return;
    $$('.admin-view').forEach(view => view.classList.toggle('active', view.id === `view-${name}`));
    $$('.admin-nav-link').forEach(button => button.classList.toggle('active', button.dataset.view === name));
    $('#pageTitle').textContent = viewTitles[name];
  }

  function field(label, name, type = 'text', value = '', options = {}) {
    const wrapper = create('label', `admin-modal-field${options.full ? ' full' : ''}`);
    wrapper.append(create('span', '', label));
    let input;
    if (type === 'select') {
      input = document.createElement('select');
      options.choices.forEach(choice => {
        const option = create('option', '', choice);
        option.value = choice;
        input.append(option);
      });
    } else {
      input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
      if (type !== 'textarea') input.type = type;
      if (options.step) input.step = options.step;
      if (options.min !== undefined) input.min = String(options.min);
      if (options.max !== undefined) input.max = String(options.max);
      if (options.placeholder) input.placeholder = options.placeholder;
    }
    input.name = name;
    input.value = text(value);
    input.required = options.required !== false;
    wrapper.append(input);
    return wrapper;
  }

  function openForm(title, fields, onSave) {
    closeModal();
    const backdrop = create('div', 'admin-modal-backdrop');
    backdrop.dataset.modal = 'true';
    const modal = create('form', 'admin-modal');
    const header = create('div', 'admin-modal-header');
    header.append(create('h2', '', title));
    const close = create('button', 'admin-button small', 'Cerrar');
    close.type = 'button';
    close.dataset.action = 'close-modal';
    header.append(close);
    const body = create('div', 'admin-modal-body');
    fields.forEach(definition => body.append(field(...definition)));
    const footer = create('div', 'admin-modal-footer');
    const cancel = create('button', 'admin-button', 'Cancelar');
    cancel.type = 'button';
    cancel.dataset.action = 'close-modal';
    const save = create('button', 'admin-button primary', 'Guardar');
    save.type = 'submit';
    footer.append(cancel, save);
    modal.append(header, body, footer);
    modal.addEventListener('submit', event => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(modal).entries());
      const result = onSave(data);
      if (result !== false) {
        closeModal();
        renderAll();
      }
    });
    backdrop.addEventListener('click', event => {
      if (event.target === backdrop) closeModal();
    });
    backdrop.append(modal);
    document.body.append(backdrop);
    $('input, select, textarea', modal)?.focus();
  }

  function closeModal() {
    $('.admin-modal-backdrop')?.remove();
  }

  function nextId(prefix) {
    return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;
  }

  function editMovie(movie) {
    const current = movie || { title: '', genre: '', duration: 120, rating: 'TP', status: 'Próximamente', trailer: '', poster: '' };
    openForm(movie ? 'Editar película' : 'Crear película', [
      ['Título', 'title', 'text', current.title, { full: true }],
      ['Género', 'genre', 'text', current.genre],
      ['Duración (minutos)', 'duration', 'number', current.duration, { min: 1 }],
      ['Clasificación', 'rating', 'text', current.rating],
      ['Estado', 'status', 'select', current.status, { choices: ['Próximamente', 'En Cartelera', 'Fuera de Cartelera'] }],
      ['URL del tráiler (opcional)', 'trailer', 'url', current.trailer, { full: true, required: false, placeholder: 'https://…' }],
      ['URL del póster (opcional)', 'poster', 'url', current.poster, { full: true, required: false, placeholder: 'https://…' }]
    ], data => {
      if (data.trailer && !validUrl(data.trailer)) { notify('La URL del tráiler debe ser válida.'); return false; }
      if (data.poster && !validUrl(data.poster)) { notify('La URL del póster debe ser válida.'); return false; }
      const saved = { ...current, ...data, duration: Number(data.duration), archived: false };
      if (movie) Object.assign(movie, saved);
      else state.movies.unshift({ id: nextId('m'), ...saved });
      log(movie ? 'Edición de película' : 'Creación de película', saved.title);
      notify(movie ? 'Película actualizada.' : 'Película creada y publicada en el catálogo local.');
    });
  }

  function addScreening() {
    const availableMovies = state.movies.filter(movie => !movie.archived && movie.status !== 'Fuera de Cartelera');
    if (!availableMovies.length) { notify('Crea o publica una película antes de programar funciones.'); return; }
    const movieOptions = availableMovies.map(movie => `${movie.id} — ${movie.title}`);
    const defaultDate = localDate(1, 18);
    openForm('Programar función', [
      ['Película', 'movieChoice', 'select', movieOptions[0], { choices: movieOptions, full: true }],
      ['Sala', 'room', 'select', 'Sala 1', { choices: state.rooms.map(room => room.name) }],
      ['Formato', 'format', 'select', 'Estándar', { choices: ['Estándar', 'VIP', '4D'] }],
      ['Fecha y hora', 'dateTime', 'datetime-local', defaultDate],
      ['Idioma', 'language', 'select', 'Español', { choices: ['Español', 'Inglés', 'Portugués', 'Otro'] }],
      ['Subtítulos', 'subtitles', 'select', 'Sin subtítulos', { choices: ['Sin subtítulos', 'Español', 'Inglés', 'Portugués'] }],
      ['Precio (USD)', 'price', 'number', 7, { min: 0, step: '0.01' }]
    ], data => {
      const [movieId] = data.movieChoice.split(' — ');
      const room = state.rooms.find(item => item.name === data.room);
      if (!room || room.status !== 'Habilitada') { notify('La sala elegida está deshabilitada o en mantenimiento.'); return false; }
      if (new Date(data.dateTime) <= new Date()) { notify('La función debe programarse en una fecha futura.'); return false; }
      if (state.screenings.some(item => item.room === data.room && item.status === 'Programada' && Math.abs(new Date(item.dateTime) - new Date(data.dateTime)) < 3 * 60 * 60 * 1000)) {
        notify('La sala ya tiene una función programada en ese horario.'); return false;
      }
      state.screenings.push({ id: nextId('s'), movieId, room: data.room, format: data.format, dateTime: data.dateTime, language: data.language, subtitles: data.subtitles, price: Number(data.price), ticketsSold: 0, status: 'Programada' });
      const movie = movieFor(movieId);
      log('Programación de función', `${movie ? movie.title : 'Película'} · ${data.room} · ${dateLabel(data.dateTime)}`);
      notify('Función programada correctamente.');
    });
  }

  function editProduct(product) {
    const current = product || { name: '', type: 'Producto', stock: 0, threshold: state.settings.defaultStockThreshold, price: 0 };
    openForm(product ? 'Editar producto o combo' : 'Crear producto o combo', [
      ['Nombre', 'name', 'text', current.name],
      ['Tipo', 'type', 'select', current.type, { choices: ['Producto', 'Combo'] }],
      ['Stock disponible', 'stock', 'number', current.stock, { min: 0 }],
      ['Alerta de stock bajo', 'threshold', 'number', current.threshold, { min: 0 }],
      ['Precio (USD)', 'price', 'number', current.price, { min: 0, step: '0.01' }]
    ], data => {
      const saved = { ...current, ...data, stock: Number(data.stock), threshold: Number(data.threshold), price: Number(data.price) };
      if (product) Object.assign(product, saved);
      else state.products.unshift({ id: nextId('p'), ...saved });
      log(product ? 'Edición de producto' : 'Creación de producto', saved.name);
      notify(product ? 'Producto actualizado.' : 'Producto añadido al inventario.');
    });
  }

  function editPromotion(promotion) {
    const current = promotion || { name: '', code: '', kind: 'Descuento (%)', discount: 10, starts: localDate(0).slice(0, 10), ends: localDate(30).slice(0, 10), status: 'Activa' };
    openForm(promotion ? 'Editar promoción' : 'Crear promoción', [
      ['Nombre de promoción', 'name', 'text', current.name, { full: true }],
      ['Código', 'code', 'text', current.code],
      ['Tipo de oferta', 'kind', 'select', current.kind || 'Descuento (%)', { choices: ['Descuento (%)', 'Precio especial'] }],
      ['Valor (% de descuento o precio especial en USD)', 'discount', 'number', current.discount, { min: current.kind === 'Precio especial' ? 0 : 1, max: current.kind === 'Precio especial' ? undefined : 100, step: '0.01' }],
      ['Válida desde', 'starts', 'date', current.starts],
      ['Válida hasta', 'ends', 'date', current.ends],
      ['Estado', 'status', 'select', current.status, { choices: ['Activa', 'Pausada'] }]
    ], data => {
      if (data.ends < data.starts) { notify('La fecha de término no puede ser anterior a la fecha de inicio.'); return false; }
      const saved = { ...current, ...data, discount: Number(data.discount), code: data.code.toUpperCase() };
      if (promotion) Object.assign(promotion, saved);
      else state.promotions.unshift({ id: nextId('pr'), ...saved });
      log(promotion ? 'Edición de promoción' : 'Creación de promoción', `${saved.name} · ${saved.kind === 'Precio especial' ? moneyLabel(saved.discount) : `${saved.discount}%`}`);
      notify('Promoción guardada.');
    });
  }

  function addStaff() {
    openForm('Crear cuenta de personal', [
      ['Nombre', 'name', 'text', ''],
      ['Correo', 'email', 'email', ''],
      ['Rol', 'role', 'select', 'Cajero', { choices: ['Admin', 'Gerente', 'Cajero'] }]
    ], data => {
      if (state.staff.some(user => user.email.toLowerCase() === data.email.toLowerCase())) { notify('Ya existe una cuenta de personal con ese correo.'); return false; }
      state.staff.unshift({ id: nextId('u'), name: data.name, email: data.email, role: data.role, status: 'Activo' });
      log('Creación de cuenta de personal', `${data.name} · Rol ${data.role}`);
      notify('Cuenta de muestra creada.');
    });
  }

  function validUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' || url.protocol === 'http:';
    } catch {
      return false;
    }
  }

  function archiveMovie(id) {
    const movie = movieFor(id);
    if (!movie) return;
    const movieScreenings = state.screenings.filter(item => item.movieId === id);
    const now = Date.now();
    const inProgress = movieScreenings.some(item => {
      const start = new Date(item.dateTime).getTime();
      const end = start + 3 * 60 * 60 * 1000;
      return item.status === 'Programada' && start <= now && now < end;
    });
    const soldTickets = movieScreenings.reduce((sum, item) => sum + Number(item.ticketsSold || 0), 0);
    if (inProgress || soldTickets > 0) {
      notify(inProgress ? 'No se puede archivar: la película tiene una función en emisión.' : `No se puede archivar: hay ${soldTickets} boletos vendidos.`);
      return;
    }
    if (!window.confirm(`¿Archivar "${movie.title}"? Las funciones futuras sin boletos vendidos se cancelarán.`)) return;
    movieScreenings.filter(item => item.status === 'Programada').forEach(item => { item.status = 'Cancelada'; });
    movie.archived = true;
    movie.status = 'Fuera de Cartelera';
    log('Archivo de película', movie.title);
    persist();
    renderAll();
    notify('Película archivada.');
  }

  function cancelScreening(id) {
    const screening = state.screenings.find(item => item.id === id);
    if (!screening || screening.status !== 'Programada') return;
    const starts = new Date(screening.dateTime).getTime();
    const ends = starts + 3 * 60 * 60 * 1000;
    const now = Date.now();
    if (starts <= now && now < ends) { notify('Bloqueado: no se puede cancelar una función en emisión.'); return; }
    if (starts <= now) { notify('Solo se pueden cancelar funciones futuras.'); return; }
    const sold = Number(screening.ticketsSold) || 0;
    const refundTotal = sold * Number(screening.price || 0);
    const confirmation = sold > 0
      ? `¿Cancelar esta función futura? Se creará una solicitud de reembolso pendiente por ${moneyLabel(refundTotal)} para ${sold} boletos.`
      : '¿Cancelar esta función futura?';
    if (!window.confirm(confirmation)) return;
    screening.status = 'Cancelada';
    if (sold > 0) {
      state.refunds.unshift({
        id: nextId('rf'),
        customer: `Compradores de ${movieFor(screening.movieId)?.title || 'la función'}`,
        reason: `Cancelación de función · ${screening.room} · ${dateLabel(screening.dateTime)} · ${sold} boletos`,
        amount: refundTotal,
        status: 'Pendiente'
      });
    }
    log('Cancelación de función futura', `${movieFor(screening.movieId)?.title || 'Película'} · ${dateLabel(screening.dateTime)} · ${sold} boletos`);
    persist();
    renderAll();
    notify(sold > 0 ? 'Función cancelada; solicitud de reembolso pendiente creada.' : 'Función cancelada en el prototipo local.');
  }

  function changeMovieStatus(movie, status) {
    if (status === 'Fuera de Cartelera') {
      const movieScreenings = state.screenings.filter(item => item.movieId === movie.id);
      const blocked = movieScreenings.some(item => Number(item.ticketsSold) > 0 || (item.status === 'Programada' && (() => {
        const start = new Date(item.dateTime).getTime();
        return start <= Date.now() && Date.now() < start + 3 * 60 * 60 * 1000;
      })()));
      if (blocked) {
        notify('No se puede sacar de cartelera: hay una función en emisión o boletos vendidos.');
        renderMovies();
        return;
      }
      movieScreenings.filter(item => item.status === 'Programada' && new Date(item.dateTime) > new Date()).forEach(item => {
        item.status = 'Cancelada';
      });
    }
    movie.status = status;
    log('Cambio de estado de película', `${movie.title} → ${status}`);
    persist();
    renderAll();
    notify('Estado de película actualizado.');
  }

  function resetDemo() {
    if (!window.confirm('Esto eliminará los cambios locales y restaurará la muestra. ¿Continuar?')) return;
    state = initialState();
    persist();
    renderAll();
    notify('Datos de demostración restablecidos.');
  }

  function downloadCsv(filename, rows) {
    const csv = rows.map(row => row.map(value => `"${text(value).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' }));
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
    notify('Archivo CSV generado con datos de demostración.');
  }

  document.addEventListener('click', event => {
    const nav = event.target.closest('[data-view]');
    if (nav) { showView(nav.dataset.view); return; }
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === 'navigate') { showView(button.dataset.target); return; }
    if (action === 'close-modal') { closeModal(); return; }
    if (action === 'add-movie') { editMovie(null); return; }
    if (action === 'edit-movie') { editMovie(movieFor(id)); return; }
    if (action === 'trailer') { editMovie(movieFor(id)); return; }
    if (action === 'archive-movie') { archiveMovie(id); return; }
    if (action === 'add-screening') { addScreening(); return; }
    if (action === 'cancel-screening') { cancelScreening(id); return; }
    if (action === 'add-product') { editProduct(null); return; }
    if (action === 'edit-product') { editProduct(state.products.find(item => item.id === id)); return; }
    if (action === 'delete-product') {
      const product = state.products.find(item => item.id === id);
      if (product && window.confirm(`¿Eliminar "${product.name}" del inventario de demostración?`)) {
        state.products = state.products.filter(item => item.id !== id);
        log('Eliminación de producto', product.name); persist(); renderAll(); notify('Producto eliminado.');
      }
      return;
    }
    if (action === 'stock-add') {
      const product = state.products.find(item => item.id === id);
      if (product) { product.stock += 1; log('Ajuste de inventario', `${product.name} · stock: ${product.stock}`); persist(); renderAll(); notify('Stock incrementado en una unidad.'); }
      return;
    }
    if (action === 'add-promotion') { editPromotion(null); return; }
    if (action === 'edit-promotion') { editPromotion(state.promotions.find(item => item.id === id)); return; }
    if (action === 'delete-promotion') {
      const promo = state.promotions.find(item => item.id === id);
      if (promo && window.confirm(`¿Eliminar la promoción "${promo.name}"?`)) {
        state.promotions = state.promotions.filter(item => item.id !== id);
        log('Eliminación de promoción', promo.name); persist(); renderAll(); notify('Promoción eliminada.');
      }
      return;
    }
    if (action === 'toggle-seat') {
      const room = state.rooms.find(item => item.id === button.dataset.roomId);
      const seat = room?.seats.find(item => item.id === button.dataset.seatId);
      if (!seat) return;
      const cycle = ['Disponible', 'Mantenimiento', 'Deshabilitado'];
      seat.status = cycle[(cycle.indexOf(seat.status) + 1) % cycle.length];
      log('Mantenimiento de asiento', `${room.name} · asiento ${seat.id} → ${seat.status}`); persist(); renderAll(); notify('Estado del asiento actualizado.');
      return;
    }
    if (action === 'stock-sub') {
      const product = state.products.find(item => item.id === id);
      if (product) {
        product.stock = Math.max(0, product.stock - 1);
        log('Ajuste de inventario', `${product.name} · stock: ${product.stock}`);
        persist(); renderAll(); notify('Stock actualizado.');
      }
      return;
    }
    if (action === 'toggle-customer') {
      const user = state.customers.find(item => item.id === id);
      if (user) { user.status = user.status === 'Activo' ? 'Bloqueado' : 'Activo'; log('Cambio de estado de cliente', `${user.name} → ${user.status}`); persist(); renderAll(); notify(`Cliente ${user.status.toLowerCase()}.`); }
      return;
    }
    if (action === 'delete-customer') {
      const user = state.customers.find(item => item.id === id);
      if (user && window.confirm(`¿Eliminar el cliente de muestra "${user.name}"?`)) {
        state.customers = state.customers.filter(item => item.id !== id);
        log('Eliminación de cliente', user.name); persist(); renderAll(); notify('Cliente eliminado de la muestra.');
      }
      return;
    }
    if (action === 'add-staff') { addStaff(); return; }
    if (action === 'delete-staff') {
      const user = state.staff.find(item => item.id === id);
      if (user && user.role === 'Admin' && state.staff.filter(item => item.role === 'Admin' && item.status === 'Activo').length <= 1) { notify('Debe quedar al menos una cuenta Admin activa.'); return; }
      if (user && window.confirm(`¿Eliminar la cuenta local de "${user.name}"?`)) {
        state.staff = state.staff.filter(item => item.id !== id);
        log('Eliminación de cuenta de personal', user.name); persist(); renderAll(); notify('Cuenta eliminada de la muestra.');
      }
      return;
    }
    if (action === 'authorize-refund' || action === 'reject-refund') {
      const refund = state.refunds.find(item => item.id === id);
      if (!refund || refund.status !== 'Pendiente') return;
      const approved = action === 'authorize-refund';
      if (!window.confirm(`${approved ? '¿Autorizar' : '¿Rechazar'} la solicitud por ${moneyLabel(refund.amount)}? Esta acción es solo local y no mueve dinero.`)) return;
      refund.status = approved ? 'Autorizado (demo)' : 'Rechazado';
      log(approved ? 'Autorización de reembolso (demo)' : 'Rechazo de reembolso', `${refund.id} · ${refund.customer} · ${moneyLabel(refund.amount)}`);
      persist(); renderAll(); notify(approved ? 'Aprobación simulada registrada; no se transfirió dinero.' : 'Rechazo local registrado.');
      return;
    }
    if (action === 'review-chat') {
      const chat = state.chats.find(item => item.id === id);
      if (chat) { chat.status = 'Revisado'; log('Revisión de interacción de chatbot', chat.id); persist(); renderAll(); notify('Interacción marcada como revisada.'); }
      return;
    }
    if (action === 'review-age') {
      const check = state.ageChecks.find(item => item.ref === id);
      if (check) { check.reviewed = true; log('Revisión de verificación de edad', check.ref); persist(); renderAll(); notify('Registro marcado como revisado.'); }
      return;
    }
    if (action === 'export-audit') {
      downloadCsv('cineplex-auditoria-demo.csv', [['Fecha', 'Actor', 'Acción', 'Detalle'], ...state.audit.map(item => [item.at, item.actor, item.action, item.detail])]);
      return;
    }
    if (action === 'export-report') {
      downloadCsv('cineplex-reporte-demo.csv', [['Métrica', 'Valor'], ['Entradas vendidas', '1284'], ['Ingresos por entradas', '12840'], ['Ingresos de dulcería', '3860'], ['Reembolsos aprobados', '420']]);
      return;
    }
    if (action === 'test-gateway') { notify('Prueba simulada: configura un backend para conectar una pasarela real.'); return; }
    if (action === 'reset-demo') { resetDemo(); }
  });

  document.addEventListener('change', event => {
    const { action, id } = event.target.dataset;
    if (action === 'movie-status') {
      const movie = movieFor(id);
      if (movie) changeMovieStatus(movie, event.target.value);
    }
    if (action === 'staff-role') {
      const user = state.staff.find(item => item.id === id);
      if (user) { user.role = event.target.value; log('Cambio de rol de personal', `${user.name} → ${user.role}`); persist(); renderAll(); notify('Rol actualizado en la muestra.'); }
    }
    if (action === 'room-status') {
      const room = state.rooms.find(item => item.id === id);
      if (!room) return;
      const requestedStatus = event.target.value;
      const scheduledSoon = state.screenings.some(item => item.room === room.name && item.status === 'Programada' && new Date(item.dateTime) > new Date() && new Date(item.dateTime) <= new Date(Date.now() + 24 * 60 * 60 * 1000));
      if (requestedStatus !== 'Habilitada' && scheduledSoon) {
        notify('No se puede cambiar el estado: hay funciones programadas en esta sala durante las próximas 24 horas.');
        renderRooms();
        return;
      }
      room.status = requestedStatus;
      log('Cambio de estado de sala', `${room.name} → ${room.status}`);
      persist(); renderAll(); notify('Estado de sala actualizado.');
    }
  });

  document.addEventListener('input', event => {
    if (event.target.id === 'movieSearch') renderMovies();
    if (event.target.id === 'productSearch') renderProducts();
    if (event.target.id === 'customerSearch') renderPeople();
  });

  $('#settingsForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const threshold = Number(form.elements.defaultStockThreshold.value);
    if (!Number.isInteger(threshold) || threshold < 0) { notify('El umbral de stock debe ser un entero no negativo.'); return; }
    state.settings = {
      gateway: form.elements.gateway.value,
      currency: form.elements.currency.value,
      defaultStockThreshold: threshold,
      maintenanceMode: form.elements.maintenanceMode.checked
    };
    log('Actualización de ajustes del sistema', `Pasarela: ${state.settings.gateway} · Moneda: ${state.settings.currency} · Mantenimiento: ${state.settings.maintenanceMode ? 'sí' : 'no'}`);
    persist();
    renderAll();
    notify('Ajustes locales guardados.');
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  renderAll();
})();
