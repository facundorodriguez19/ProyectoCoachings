const COACHES = [
  {
    id: 1, name: 'ZephyrMid', game: 'lol', gameLabel: 'League of Legends', rank: 'Challenger', rankClass: 'rank-challenger', rankIcon: '🏆', price: 18, rating: 4.9, reviews: 143, specialty: 'Mid Lane · Yasuo · Zed · Sylas', tags: ['Mid', 'Mecánicas', 'Roaming', 'Wave clear'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Zed.png',
    bio: 'Mid laner semi-profesional con más de 6 años de experiencia en el servidor. Especialista en picks de carry y micro-mecánicas agresivas.',
    fullBio: 'Aprenderás a controlar el mapa desde el carril central. Nos enfocaremos en el manejo de oleadas, el timing de roaming y cómo convertir una ventaja individual en una victoria para el equipo. Mis sesiones incluyen revisión de VODs y feedback directo en tiempo real.',
    video: '#',
    reviewsList: [
      { user: 'Summoner123', rating: 5, text: 'Excelente coach, me ayudó a subir de Platino a Diamante en una semana.' },
      { user: 'YasuoMain42', rating: 5, text: 'Sus mecánicas con asesinos son de otro nivel. Gran paciencia.' }
    ]
  },
  {
    id: 2, name: 'NovaADC', game: 'lol', gameLabel: 'League of Legends', rank: 'Grandmaster', rankClass: 'rank-grandmaster', rankIcon: '💎', price: 14, rating: 4.8, reviews: 89, specialty: 'Bot Lane · Jinx · Caitlyn · Kaisa', tags: ['ADC', 'Posicionamiento', 'Teamfight', 'CS'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Jinx.png',
    bio: 'Experta en posicionamiento y farm eficiente. Ex-coach de academia profesional.',
    fullBio: 'El rol de ADC es sobre paciencia y precisión. Te enseñaré a sobrevivir a los asesinos y a maximizar tu DPS en las peleas de equipo. Analizaremos tu fase de líneas y cómo buildear correctamente según la partida.',
    video: '#',
    reviewsList: [
      { user: 'KaisaLover', rating: 4, text: 'Muy buena explicando el posicionamiento. Un poco estricta con el farm pero sirve.' }
    ]
  },
  { id: 3, name: 'TacticianGG', game: 'tft', gameLabel: 'TFT', rank: 'Master', rankClass: 'rank-master', rankIcon: '👑', price: 12, rating: 4.7, reviews: 67, specialty: 'Composiciones · Economy · Posicionamiento', tags: ['Economy', 'Rerolls', 'Comps', 'Augments'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Lux.png', bio: 'Maestro de la estrategia. Especialista en economía y transición de composiciones.', fullBio: 'El TFT no es solo suerte, es probabilidad. Te enseñaré cuándo hacer roll, cuándo ahorrar y cómo identificar las mejores opciones de aumentos para ganar cada partida.', video: '#', reviewsList: [] },
  { id: 4, name: 'PhoenixRadiant', game: 'val', gameLabel: 'Valorant', rank: 'Radiant', rankClass: 'rank-radiant', rankIcon: '🔥', price: 20, rating: 5.0, reviews: 211, specialty: 'Duelist · Jett · Reyna · Neon', tags: ['Aim', 'Movement', 'Clutch', 'Entry'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Akali.png', bio: 'Jugador Radiant top 500. Especialista en entry fragging y clutch situacional.', fullBio: 'Dominaremos el mapa mediante el movimiento y la precisión. Te enseñaré setups específicos de duelista y cómo leer la defensa enemiga para entrar a site con éxito.', video: '#', reviewsList: [] },
  { id: 5, name: 'SilverSentinel', game: 'val', gameLabel: 'Valorant', rank: 'Diamond', rankClass: 'rank-diamond', rankIcon: '💠', price: 10, rating: 4.6, reviews: 52, specialty: 'Sentinel · Killjoy · Cypher · Sage', tags: ['Util', 'Info', 'Defense', 'Setup'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Orianna.png', bio: 'Experta en control de mapa y setups defensivos de info.', fullBio: 'La defensa gana partidas. Aprenderás a usar tu utilidad de forma eficiente para denegar sitios y proporcionar información crítica a tu equipo.', video: '#', reviewsList: [] },
  { id: 6, name: 'BuildKingFN', game: 'fn', gameLabel: 'Fortnite', rank: 'Challenger', rankClass: 'rank-challenger', rankIcon: '🏗️', price: 15, rating: 4.8, reviews: 98, specialty: 'Building · Editing · Box Fighting · Zonewars', tags: ['Builds', 'Edits', '90s', 'Zone wars'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Vi.png', bio: 'Experto en construcción rápida y edición bajo presión.', fullBio: 'Te enseñaré los fundamentos de las box-fights y cómo editar para conseguir ángulos ganadores. Zonewars y estrategia de late game.', video: '#', reviewsList: [] }
];

// --- AUTH & STATE ---
let storedCoaches = JSON.parse(localStorage.getItem('luxury_coaches') || '[]');
let ALL_COACHES = [...COACHES, ...storedCoaches];

let users = JSON.parse(localStorage.getItem('luxury_users') || '[]');

// Add default admin if not present
if (!users.find(u => u.email === 'admin@levelup.coach')) {
  users.push({
    username: 'Admin',
    email: 'admin@levelup.coach',
    password: 'admin123',
    game: 'all'
  });
  localStorage.setItem('luxury_users', JSON.stringify(users));
}

let currentUser = JSON.parse(localStorage.getItem('luxury_logged_user') || 'null');

// Admin Check
const isAdmin = () => currentUser && currentUser.email === 'admin@levelup.coach';

let currentGame = 'all';

/**
 * Filter coaches by game type
 */
function setGame(el, game) {
  document.querySelectorAll('.game-tab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentGame = game;
  renderCoaches();
}

/**
 * Render coach cards based on filters, search and sorting
 */
function renderCoaches() {
  const searchInput = document.getElementById('searchInput');
  const langFilter = document.getElementById('langFilter');
  const sortFilter = document.getElementById('sortFilter');
  const coachGrid = document.getElementById('coachGrid');

  if (!coachGrid) return;

  const search = (searchInput?.value || '').toLowerCase();
  const lang = langFilter?.value || '';
  const sort = sortFilter?.value || 'rating';

  let list = ALL_COACHES.filter(c => {
    const gm = currentGame === 'all' || c.game === currentGame;
    const sr = !search ||
      c.name.toLowerCase().includes(search) ||
      c.specialty.toLowerCase().includes(search) ||
      c.tags.some(t => t.toLowerCase().includes(search));
    const lg = !lang || c.lang === lang;
    return gm && sr && lg;
  });

  // Sorting logic
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => b.rating - a.rating);

  // Empty state handling
  if (!list.length) {
    coachGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <h3>Sin resultados</h3>
        <p>Prueba con otro filtro o búsqueda.</p>
      </div>
    `;
    return;
  }

  // Generate cards
  coachGrid.innerHTML = list.map((c, i) => `
    <div class="coach-card" style="animation:fadeUp 0.45s ${i * 0.07}s ease both;" onclick="openCoachModal(${c.id})">
      <div class="coach-banner">
        <img src="${c.banner}" alt="" onerror="this.parentElement.style.background='linear-gradient(135deg,#0d2010,#1a4025)'; this.style.display='none';">
        <div class="banner-overlay"></div>
        <div class="coach-game-badge">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          ${c.gameLabel}
        </div>
        <div class="coach-avatar-wrap">
          <div class="coach-avatar">
            <img src="${c.avatar}" alt="${c.name}" onerror="this.outerHTML='<span style=font-size:24px>${c.rankIcon}</span>'">
          </div>
        </div>
      </div>
      <div class="coach-body">
        ${isAdmin() ? `
          <div class="admin-actions">
            <button class="btn-admin-edit" onclick="event.stopPropagation(); editCoach(${c.id})">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="btn-admin-delete" onclick="event.stopPropagation(); deleteCoach(${c.id})">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>
        ` : ''}
        <div class="coach-top">
          <div class="coach-name">${c.name}</div>
          <div class="rank-badge ${c.rankClass}" style="margin-bottom:0; padding:2px 10px;">
            ${c.rankIcon} ${c.rank}
          </div>
        </div>
        <div class="coach-lang">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          ${c.lang}
        </div>
        <div class="coach-spec">${c.specialty}</div>
        <div class="tags-row">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="coach-footer">
          <div class="rating-row">
            <span class="stars">★★★★★</span>
            <strong>${c.rating}</strong>
            <span class="rating-count">(${c.reviews})</span>
          </div>
          <div class="price-tag">$${c.price}<span>/hr</span></div>
        </div>
        <button class="btn-book">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Reservar sesión
        </button>
      </div>
    </div>
  `).join('');
}

/**
 * Handle functional form submissions
 */
/**
 * Admin: Delete a coach
 */
function deleteCoach(id) {
  if (!confirm('¿Estás seguro de que deseas eliminar este perfil de coach?')) return;

  // Remove from stored (localStorage)
  storedCoaches = storedCoaches.filter(c => c.id !== id);
  localStorage.setItem('luxury_coaches', JSON.stringify(storedCoaches));

  // Update ALL_COACHES (excluding the deleted ID from both arrays)
  ALL_COACHES = ALL_COACHES.filter(c => c.id !== id);

  renderCoaches();
}

/**
 * Admin: Edit a coach
 */
function editCoach(id) {
  const coachId = Number(id);
  const c = ALL_COACHES.find(x => x.id === coachId);
  if (!c) return;

  openModal('coach');

  // Wait for modal to render
  setTimeout(() => {
    const form = document.querySelector('#modalContent form');
    if (!form) return;

    // Use name attributes for more stable population
    if (form.querySelector('[name="name"]')) form.querySelector('[name="name"]').value = c.name;
    if (form.querySelector('[name="gameLabel"]')) form.querySelector('[name="gameLabel"]').value = c.gameLabel;
    if (form.querySelector('[name="rank"]')) form.querySelector('[name="rank"]').value = c.rank;
    if (form.querySelector('[name="price"]')) form.querySelector('[name="price"]').value = c.price;
    if (form.querySelector('[name="bio"]')) form.querySelector('[name="bio"]').value = (c.bio || c.fullBio || '');
    if (form.querySelector('[name="lang"]')) form.querySelector('[name="lang"]').value = c.lang || 'Español';
    if (form.querySelector('.avatar-editor img')) form.querySelector('.avatar-editor img').src = c.avatar || '';
    if (form.querySelector('.banner-editor img')) form.querySelector('.banner-editor img').src = c.banner || '';
    if (form.querySelector('[name="tags"]')) form.querySelector('[name="tags"]').value = (c.tags || []).join(', ');

    // Transform form into EDIT mode
    form.dataset.editId = coachId;
    form.querySelector('.btn-modal').innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      Guardar cambios
    `;
    document.querySelector('#modalContent .modal-title').textContent = 'Editar Perfil';
  }, 100);
}

/**
 * Helper to convert file to Base64
 */
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

async function handleFormSubmit(e, type) {
  if (e) e.preventDefault();
  const form = e.target;
  const modalContent = document.getElementById('modalContent');

  if (type === 'login') {
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      currentUser = user;
      localStorage.setItem('luxury_logged_user', JSON.stringify(currentUser));
      updateNavigationUI();

      modalContent.innerHTML = `
        <div style="text-align:center; padding: 40px 0;">
          <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="modal-title">¡Bienvenido, ${user.username}!</div>
          <p style="color:var(--muted2); margin-top:8px;">Has iniciado sesión correctamente.</p>
          <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="closeModal()">Comenzar a aprender</button>
        </div>
      `;
    } else {
      // Show error
      let errorEl = form.querySelector('.form-error');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        form.prepend(errorEl);
      }
      errorEl.textContent = 'Correo o contraseña incorrectos. Verifica tus datos o regístrate.';
    }
    return;
  }

  if (type === 'register') {
    const username = form.querySelector('input[placeholder="Tu nick en el juego"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const game = form.querySelector('select').value;

    if (users.find(u => u.email === email)) {
      alert('Este correo ya está registrado.');
      return;
    }

    const newUser = { username, email, password, game };
    users.push(newUser);
    localStorage.setItem('luxury_users', JSON.stringify(users));

    modalContent.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="modal-title">¡Cuenta creada!</div>
        <p style="color:var(--muted2); margin-top:8px;">Ya puedes iniciar sesión con tus credenciales.</p>
        <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="openModal('login')">Ir al Login</button>
      </div>
    `;
    return;
  }

  if (type === 'coach') {
    const name = form.querySelector('[name="name"]').value;
    const gameLabel = form.querySelector('[name="gameLabel"]').value;
    const rank = form.querySelector('[name="rank"]').value;
    const price = form.querySelector('[name="price"]').value;
    const bio = form.querySelector('[name="bio"]').value;
    const lang = form.querySelector('[name="lang"]').value;
    const tagsStr = form.querySelector('[name="tags"]').value;

    // Build mailto body
    const subject = encodeURIComponent(`[LevelUp Coach] Nueva solicitud de Coach - ${name}`);
    const body = encodeURIComponent(
`Hola Facundo,

Nueva solicitud de Coach recibida desde el sitio LevelUp Coach.

━━━━━━━━━━━━━━━━━━━━━━━━━
  DATOS DEL COACH POSTULANTE
━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre / Nick:     ${name}
Juego principal:   ${gameLabel}
Rango / ELO:       ${rank}
Precio por hora:   $${price} USD
Idioma:            ${lang}
Especialidades:    ${tagsStr || 'No especificadas'}

Descripción:
${bio}

━━━━━━━━━━━━━━━━━━━━━━━━━
Nota: Las imágenes de perfil (avatar y banner) deben ser enviadas por separado.

Enviado automáticamente desde LevelUp Coach.`
    );

    const mailtoLink = `mailto:Facundo.rodriguez.web@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Show success message
    modalContent.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="modal-title">¡Solicitud enviada!</div>
        <p style="color:var(--muted2); margin-top:8px; line-height:1.6;">Tu aplicación fue enviada por email para revisión.<br>Nos pondremos en contacto contigo pronto.</p>
        <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="closeModal()">Continuar</button>
      </div>
    `;
    return;
  }


  if (type === 'profile') {
    const newUsername = form.querySelector('[name="username"]').value;
    const newBio = form.querySelector('[name="userbio"]').value;
    const avatarFile = document.getElementById('profileAvatarInput').files[0];
    const bannerFile = document.getElementById('profileBannerInput').files[0];

    // Update currentUser object
    currentUser.username = newUsername;
    currentUser.bio = newBio;
    if (avatarFile) currentUser.avatar = await toBase64(avatarFile);
    if (bannerFile) currentUser.banner = await toBase64(bannerFile);

    // Update in users array
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) users[userIndex] = currentUser;

    localStorage.setItem('luxury_logged_user', JSON.stringify(currentUser));
    localStorage.setItem('luxury_users', JSON.stringify(users));

    updateNavigationUI();

    modalContent.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="modal-title">¡Perfil actualizado!</div>
        <p style="color:var(--muted2); margin-top:8px;">Tus cambios han sido guardados correctamente.</p>
        <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="closeModal()">Cerrar</button>
      </div>
    `;
    return;
  }

  // Common success for other forms
  modalContent.innerHTML = `
    <div style="text-align:center; padding: 40px 0;">
      <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="modal-title">¡Éxito!</div>
      <p style="color:var(--muted2); margin-top:8px;">Tu solicitud ha sido enviada correctamente.</p>
      <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="closeModal()">Cerrar</button>
    </div>
  `;
}

/**
 * Open common modals (login, register, be a coach)
 */
function openModal(type) {
  const modalContent = document.getElementById('modalContent');
  const modalOverlay = document.getElementById('modalOverlay');

  const templates = {
    login: `
      <div class="modal-title">Bienvenido de vuelta</div>
      <div class="modal-sub">Inicia sesión para continuar</div>
      <form onsubmit="handleFormSubmit(event, 'login')">
        <div class="form-group">
          <label>Correo electrónico</label>
          <input type="email" placeholder="tu@email.com" required>
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-primary btn-modal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
          </svg>
          Iniciar sesión
        </button>
      </form>
      <p style="text-align:center;color:var(--muted);font-size:13px;margin-top:16px;">
        ¿No tienes cuenta? <a href="#" onclick="openModal('register')" style="color:var(--accent);text-decoration:none;font-weight:600;">Regístrate gratis</a>
      </p>
    `,
    register: `
      <div class="modal-title">Crea tu cuenta</div>
      <div class="modal-sub">Gratis · Sin tarjeta de crédito</div>
      <form onsubmit="handleFormSubmit(event, 'register')">
        <div class="form-group">
          <label>Nombre de usuario</label>
          <input type="text" placeholder="Tu nick en el juego" required>
        </div>
        <div class="form-group">
          <label>Correo electrónico</label>
          <input type="email" placeholder="tu@email.com" required>
        </div>
        <div class="form-group">
          <label>Contraseña</label>
          <input type="password" placeholder="Mínimo 8 caracteres" required minlength="8">
        </div>
        <div class="form-group">
          <label>Juego principal</label>
          <select required>
            <option value="">Selecciona un juego</option>
            <option>League of Legends</option>
            <option>TFT</option>
            <option>Valorant</option>
            <option>Fortnite</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-modal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
          </svg>
          Crear cuenta gratis
        </button>
      </form>
    `,
    coach: `
      <div class="modal-title">Publica tu perfil</div>
      <div class="modal-sub">Completa los datos para aparecer en la lista</div>
      <form onsubmit="handleFormSubmit(event, 'coach')">
        <div class="twitter-editor">
          <div class="banner-editor" onclick="this.querySelector('input').click()">
            <div class="camera-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000">
            <input type="file" name="banner" class="hidden-input" accept="image/*" onchange="const f=this.files[0]; if(f){ const r=new FileReader(); r.onload=e=>this.previousElementSibling.src=e.target.result; r.readAsDataURL(f); }">
          </div>
          <div class="avatar-editor-wrap">
            <div class="avatar-editor" onclick="this.querySelector('input').click()">
              <div class="camera-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/10337/10337579.png">
              <input type="file" name="avatar" class="hidden-input" accept="image/*" onchange="const f=this.files[0]; if(f){ const r=new FileReader(); r.onload=e=>this.previousElementSibling.src=e.target.result; r.readAsDataURL(f); }">
            </div>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Nombre / Nick</label>
            <input type="text" name="name" placeholder="Tu nombre en el juego" required>
          </div>
          <div class="form-group">
            <label>Precio por hora (USD)</label>
            <input type="number" name="price" placeholder="Ej: 15" min="5" required>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Juego principal</label>
            <select name="gameLabel" required>
              <option value="">Selecciona un juego</option>
              <option>League of Legends</option>
              <option>TFT</option>
              <option>Valorant</option>
              <option>Fortnite</option>
            </select>
          </div>
          <div class="form-group">
            <label>Rango / ELO</label>
            <select name="rank" required>
              <option value="">Tu rango actual</option>
              <option>Challenger</option>
              <option>Grandmaster</option>
              <option>Master</option>
              <option>Diamond</option>
              <option>Platinum</option>
              <option>Radiant</option>
            </select>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Idioma</label>
            <select name="lang" required>
              <option>Español</option>
              <option>Inglés</option>
              <option>Portugués</option>
            </select>
          </div>
          <div class="form-group">
            <label>Especialidades (comas)</label>
            <input type="text" name="tags" placeholder="Ej: Mid lane, Macro, Mental">
          </div>
        </div>

        <div class="form-group">
          <label>Descripción detallada</label>
          <textarea name="bio" placeholder="Cuéntanos tu experiencia y qué aprenderán contigo..." required></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-modal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Publicar mi perfil
        </button>
      </form>
    `,
    profile: `
      <form onsubmit="handleFormSubmit(event, 'profile')">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 15px;">
            <div onclick="closeModal()" style="cursor:pointer; color: white;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <div class="modal-title" style="margin-bottom: 0; font-size: 19px;">Editar perfil</div>
          </div>
          <button type="submit" class="btn" style="background: white; color: black; border-radius: 20px; padding: 6px 18px; font-weight: 700; border: none; font-size: 14px; cursor: pointer;">Guardar</button>
        </div>

        <div class="twitter-editor">
          <!-- Banner Editor -->
          <div class="banner-editor" onclick="document.getElementById('profileBannerInput').click()">
            <div class="camera-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <img id="profileBannerPreview" src="${currentUser?.banner || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000'}">
          </div>
          
          <!-- Avatar Editor -->
          <div class="avatar-editor-wrap">
            <div class="avatar-editor" onclick="document.getElementById('profileAvatarInput').click()">
              <div class="camera-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <img id="profileAvatarPreview" src="${currentUser?.avatar || 'https://cdn-icons-png.flaticon.com/512/10337/10337579.png'}">
            </div>
          </div>
          
          <!-- Hidden Inputs -->
          <input type="file" id="profileAvatarInput" class="hidden-input" accept="image/*" onchange="const f=this.files[0]; if(f){ const r=new FileReader(); r.onload=e=>{ document.getElementById('profileAvatarPreview').src=e.target.result; }; r.readAsDataURL(f); }">
          <input type="file" id="profileBannerInput" class="hidden-input" accept="image/*" onchange="const f=this.files[0]; if(f){ const r=new FileReader(); r.onload=e=>{ document.getElementById('profileBannerPreview').src=e.target.result; }; r.readAsDataURL(f); }">
        </div>

        <div class="form-group" style="border: 1px solid var(--card-border); border-radius: 4px; padding: 4px 12px; margin-bottom: 15px;">
          <label style="font-size: 13px; color: var(--muted); margin-bottom: 0;">Nombre</label>
          <input type="text" name="username" value="${currentUser?.username || ''}" style="background:transparent; border:none; padding: 4px 0; color:white; width:100%; font-size: 16px; outline:none;" required>
        </div>

        <div class="form-group" style="border: 1px solid var(--card-border); border-radius: 4px; padding: 4px 12px;">
          <label style="font-size: 13px; color: var(--muted); margin-bottom: 0;">Biografía</label>
          <textarea name="userbio" style="background:transparent; border:none; padding: 4px 0; color:white; width:100%; font-size: 16px; min-height: 80px; resize:none; outline:none;">${currentUser?.bio || ''}</textarea>
        </div>
      </form>
    `,
  };

  if (modalContent) modalContent.innerHTML = templates[type] || '';
  if (modalOverlay) modalOverlay.classList.add('open');
}

/**
 * Update the navigation bar based on auth state
 */
function updateNavigationUI() {
  const navActions = document.getElementById('navActions');
  if (!navActions) return;

  if (currentUser) {
    navActions.innerHTML = `
      <div class="user-profile" onclick="openModal('profile')" style="cursor:pointer;">
        <div class="user-info">
          <div class="user-avatar-small" style="background-image: url('${currentUser.avatar}'); background-size: cover;">
            ${!currentUser.avatar ? currentUser.username[0].toUpperCase() : ''}
          </div>
          <span class="user-name">${currentUser.username}</span>
        </div>
        <button class="btn btn-ghost" onclick="event.stopPropagation(); logout()" style="padding: 8px 12px; font-size: 13px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Salir
        </button>
      </div>
    `;
  } else {
    navActions.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login')">Iniciar sesión</button>
      <button class="btn btn-primary" onclick="openModal('register')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
        </svg>
        Crear cuenta
      </button>
  `;
  }
}

/**
 * Log out the current user
 */
function logout() {
  currentUser = null;
  localStorage.removeItem('luxury_logged_user');
  updateNavigationUI();
}

/**
 * Open specific coach detail modal
 */
function openCoachModal(id) {
  const c = ALL_COACHES.find(x => x.id === Number(id));
  if (!c) return;

  const modalContent = document.getElementById('modalContent');
  const modalOverlay = document.getElementById('modalOverlay');
  const modal = modalOverlay.querySelector('.modal');

  // Apply rich modal class
  modal.className = 'modal modal-detailed';

  if (modalContent) {
    modalContent.innerHTML = `
      <div class="modal-detailed-grid">
        <!-- Sidebar / Visual -->
        <div class="modal-detailed-side">
          <div class="coach-detailed-visual">
            <img src="${c.banner}" class="coach-detailed-banner" onerror="this.style.background='var(--surface2)';">
            <div class="coach-detailed-avatar">
              <img src="${c.avatar}" alt="${c.name}">
            </div>
          </div>
          
          <div class="coach-detailed-video">
            <div class="video-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>Ver video de presentación</span>
            </div>
          </div>

          <div class="coach-detailed-stats">
            <div class="detailed-stat">
              <div class="stat-label">Calificación</div>
              <div class="stat-value"><span class="stars">★★★★★</span> ${c.rating}</div>
            </div>
            <div class="detailed-stat">
              <div class="stat-label">Sesiones</div>
              <div class="stat-value">+150</div>
            </div>
          </div>

          <button class="btn btn-primary btn-modal" onclick="alert('Funcionalidad de reserva en desarrollo')">
            Reservar por $${c.price}/hr
          </button>
        </div>

        <!-- Main Content -->
    <div class="modal-detailed-main">
      <div class="coach-detailed-header">
        <div>
          <div class="modal-title">${c.name}</div>
          <div class="coach-lang">${c.gameLabel} · ${c.lang}</div>
        </div>
        <div class="rank-badge ${c.rankClass}" style="margin-right: 20px;">${c.rankIcon} ${c.rank}</div>
      </div>

      <div class="modal-section">
        <h4>Acerca del Coach</h4>
        <p>${c.bio}</p>
        <p style="margin-top:10px;">${c.fullBio}</p>
      </div>

      <div class="modal-section">
        <h4>Especialidades</h4>
        <div class="tags-row">
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h4>Reseñas Recientes</h4>
        <div class="reviews-list">
          ${(c.reviewsList && c.reviewsList.length) ? c.reviewsList.map(r => `
                <div class="review-item">
                  <div class="review-top">
                    <strong>${r.user}</strong>
                    <span class="stars">★★★★★</span>
                  </div>
                  <p>${r.text}</p>
                </div>
              `).join('') : '<p class="muted">Aún no hay reseñas detalladas.</p>'}
        </div>
      </div>
    </div>
      </div >
    `;
  }

  if (modalOverlay) modalOverlay.classList.add('open');
}

/**
 * Handle modal closing
 */
function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modal = modalOverlay?.querySelector('.modal');
  if (modalOverlay) modalOverlay.classList.remove('open');
  if (modal) modal.className = 'modal'; // Reset class
}

/**
 * Close modal when clicking outside
 */
function handleOverlayClick(e) {
  const modalOverlay = document.getElementById('modalOverlay');
  if (e.target === modalOverlay) closeModal();
}

/**
 * Initialize Reveal animations using Intersection Observer
 */
function initRevealAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// --- CINEMATIC ENGINES ---

/**
 * Handle intro screen completion
 */
function initIntro() {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    if (intro) intro.classList.add('hide');
    document.body.style.overflow = 'auto';
    startCounters();
  }, 2000);
}

/**
 * Handle Navigation scroll state
 */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/**
 * Animated Counters for stats
 */
function startCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
      const count = +counter.innerText;
      const speed = target / 50;
      if (count < target) {
        counter.innerText = Math.ceil(count + speed);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

/**
 * Infinite Marquee Track Builder
 */
const MARQUEE_DATA = [
  { icon: '🏆', label: 'League of Legends', val: '80+ Coaches' },
  { icon: '🔥', label: 'Valorant', val: '60+ Coaches' },
  { icon: '👑', label: 'TFT', val: '40+ Coaches' },
  { icon: '🏗️', label: 'Fortnite', val: '60+ Coaches' },
  { icon: '✅', label: 'Coaches Verificados', val: '240+' },
  { icon: '⭐', label: 'Rating Promedio', val: '4.9' }
];

function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const content = MARQUEE_DATA.map(item => `
    < div class="marquee-item" >
      <span>${item.icon}</span>
      ${item.label} <strong>${item.val}</strong>
    </div >
    `).join('');
  track.innerHTML = content + content; // Double for seamless loop
}

/**
 * Background Particle System
 */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.life = Math.random() * 200 + 100;
      this.age = 0;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.age++;
      if (this.age > this.life || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha * (1 - this.age / this.life);
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(74, 222, 128, ${(1 - dist / 120) * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderCoaches();
  initRevealAnimations();
  updateNavigationUI();

  // Cinematic initializers
  initIntro();
  initParticles();
  initMarquee();
  initNavScroll();
});
