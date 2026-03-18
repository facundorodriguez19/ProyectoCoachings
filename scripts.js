// Supabase Configuration
const SUPABASE_URL = 'https://fetkdlctxlvptehelgbg.supabase.co'; // Reemplazar con URL de Supabase
const SUPABASE_ANON_KEY = 'sb_publishable_AA_1yz1Ce-7HPhxDZdfRcw_G_tpl3Aw'; // Reemplazar con Anon Key de Supabase
const _supabase = typeof supabase !== 'undefined' ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const COACHES = [
  {
    id: 1, name: 'ZephyrMid', game: 'lol', gameLabel: 'League of Legends', rank: 'Challenger', rankClass: 'rank-challenger', rankIcon: '🏆', price: 18, rating: 4.9, reviews: 143, specialty: 'Mid Lane · Yasuo · Zed · Sylas', tags: ['Mid Lane', 'Mecánicas', 'Roaming', 'Wave Control'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Zed.png',
    bio: 'Mid laner semi-profesional con más de 6 años de experiencia en el servidor. Especialista en picks de carry y micro-mecánicas agresivas.',
    fullBio: 'Aprenderás a controlar el mapa desde el carril central. Nos enfocaremos en el manejo de oleadas, el timing de roaming y cómo convertir una ventaja individual en una victoria para el equipo.',
    video: 'https://www.youtube.com/embed/fGSV1D8_s7s',
    instagram: 'zephyr_mid',
    twitter: 'ZephyrMid',
    twitch: 'zephyrmid',
    youtube: '@ZephyrMid',
    reviewsList: [
      { user: 'Summoner123', rating: 5, text: 'Excelente coach, me ayudó a subir de Platino a Diamante en una semana.' },
      { user: 'YasuoMain42', rating: 5, text: 'Sus mecánicas con asesinos son de otro nivel. Gran paciencia.' }
    ],
    availability: ['Lunes - Viernes: 18:00 - 22:00', 'Sábados: 10:00 - 15:00']
  },
  {
    id: 2, name: 'NovaADC', game: 'lol', gameLabel: 'League of Legends', rank: 'Grandmaster', rankClass: 'rank-grandmaster', rankIcon: '💮', price: 14, rating: 4.8, reviews: 89, specialty: 'Bot Lane · Jinx · Caitlyn · Kaisa', tags: ['ADC', 'Posicionamiento', 'Teamfight', 'Farm / CS'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Jinx.png',
    bio: 'Experta en posicionamiento y farm eficiente. Ex-coach de academia profesional.',
    fullBio: 'El rol de ADC es sobre paciencia y precisión. Te enseñaré a sobrevivir a los asesinos y a maximizar tu DPS en las peleas de equipo.',
    video: 'https://www.youtube.com/embed/fGSV1D8_s7s',
    instagram: 'nova_adc',
    twitter: 'NovaADC',
    twitch: 'novaadc',
    youtube: '@NovaADC',
    reviewsList: [{ user: 'KaisaLover', rating: 4, text: 'Muy buena explicando el posicionamiento.' }],
    availability: ['Martes y Jueves: 20:00 - 00:00', 'Domingos: Todo el día']
  },
  {
    id: 3, name: 'IronJungler', game: 'lol', gameLabel: 'League of Legends', rank: 'Master', rankClass: 'rank-master', rankIcon: '👑', price: 16, rating: 4.7, reviews: 74, specialty: 'Jungle · Vi · Hecarim · Graves', tags: ['Jungle', 'Macro Game', 'Visión', 'Roaming'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Vi.png',
    bio: 'Jungla con enfoque en macro game y control de objetivos. Campeón Top 100 servidor LAN.',
    fullBio: 'La jungla decide las partidas. Aprenderás rutas de farmeo, timings de objetivos, cómo hacer gank efectivo y cómo leer el mapa para siempre estar en el lugar correcto.',
    video: 'https://www.youtube.com/embed/fGSV1D8_s7s',
    instagram: 'iron_jg',
    twitter: 'IronJungler',
    twitch: 'ironjg',
    youtube: '@IronJungler',
    reviewsList: [],
    availability: ['Lunes, Miércoles, Viernes: 15:00 - 19:00']
  },
  {
    id: 4, name: 'SupportGod', game: 'lol', gameLabel: 'League of Legends', rank: 'Diamond', rankClass: 'rank-diamond', rankIcon: '💠', price: 10, rating: 4.6, reviews: 52, specialty: 'Support · Thresh · Nautilus · Lulu', tags: ['Support', 'Visión', 'Posicionamiento', 'Draft / Picks'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Thresh.png',
    bio: 'Support mecánico con foco en control de visión y jugadas de equipo.',
    fullBio: 'El support es el cerebro del equipo. Aprenderás a colocar wards en los momentos críticos, cómo pelar con encantadores vs. engagers y cómo comunicarte con tu ADC.',
    video: 'https://www.youtube.com/embed/fGSV1D8_s7s',
    instagram: 'supp_god',
    twitter: 'SupportGod',
    twitch: 'supportgod',
    youtube: '@SupportGod',
    reviewsList: [],
    availability: ['Fines de semana: 12:00 - 20:00']
  },
  {
    id: 5, name: 'TopDiff', game: 'lol', gameLabel: 'League of Legends', rank: 'Grandmaster', rankClass: 'rank-grandmaster', rankIcon: '💮', price: 15, rating: 4.9, reviews: 103, specialty: 'Top Lane · Garen · Garen · Darius', tags: ['Top Lane', 'Mecánicas', 'Wave Control', 'Trading'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Darius.png',
    bio: 'Top laner experto en splitpush y control de oleadas. Especialidad en campeones de pelea.',
    fullBio: 'El carril Top es una isla, y hay que saber aprovecharla. Aprenderás a ganar el 1v1, freezear oleadas y cómo tomar decisiones de splitpush vs. teamfight.',
    video: 'https://www.youtube.com/embed/fGSV1D8_s7s',
    instagram: 'top_diff',
    twitter: 'TopDiff',
    twitch: 'topdiff',
    youtube: '@TopDiff',
    reviewsList: [],
    availability: ['Lunes - Jueves: 19:00 - 23:00']
  },
  {
    id: 6, name: 'MidOrFeed', game: 'lol', gameLabel: 'League of Legends', rank: 'Challenger', rankClass: 'rank-challenger', rankIcon: '🏆', price: 22, rating: 5.0, reviews: 198, specialty: 'Mid Lane · Ahri · Lux · Orianna', tags: ['Mid Lane', 'Macro Game', 'Teamfight', 'Análisis VOD'], lang: 'Español', banner: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', avatar: 'https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/Ahri.png',
    bio: 'Mid Challenger con experiencia en torneos semiprofesionales. Análisis VOD detallado.',
    fullBio: 'Mis sesiones incluyen análisis profundo de tus VODs para detectar patrones de error. Trabajamos mecánicas, decision-making y mentalidad competitiva.',
    video: 'https://www.youtube.com/embed/fGSV1D8_s7s',
    instagram: 'mid_or_feed',
    twitter: 'MidOrFeed',
    twitch: 'midorfeed',
    youtube: '@MidOrFeed',
    reviewsList: [{ user: 'ProPote', rating: 5, text: 'Lo mejor que hice fue tomar estas clases. Subí 3 rangos en un mes.' }],
    availability: ['Diariamente: 21:00 - 01:00']
  },
];

/**
 * Initialize Google Identity Services
 */
function initGoogleAuth() {
  if (typeof google === 'undefined') {
    setTimeout(initGoogleAuth, 500);
    return;
  }

  // ID de Cliente real de Google Cloud Console
  const CLIENT_ID = '1028803456468-5oq23iht8aqk7v7bcagn7hu2dat4rcmr.apps.googleusercontent.com';

  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse,
    auto_select: false,
    cancel_on_tap_outside: true
  });
}

/**
 * Navigation & Mobile Menu Logic
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (!menu || !btn) return;

  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    closeMobileMenu();
  } else {
    menu.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('open');
  document.body.style.overflow = 'auto';
}

window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;

/**
 * Handle JWT from Google
 */
function handleCredentialResponse(response) {
  // Decode JWT without library
  const base64Url = response.credential.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  const googleUser = JSON.parse(jsonPayload);

  // Create or update local user
  const found = users.find(u => u.email === googleUser.email);
  if (!found) {
    const newUser = {
      username: googleUser.name,
      email: googleUser.email,
      avatar: googleUser.picture,
      game: 'all'
    };
    users.push(newUser);
    localStorage.setItem('luxury_users', JSON.stringify(users));
    currentUser = newUser;
  } else {
    currentUser = found;
  }

  localStorage.setItem('luxury_current', JSON.stringify(currentUser));
  closeModal();
  updateNavigationUI();

  // Notification
  const toast = document.createElement('div');
  toast.className = 'auth-toast';
  toast.innerText = `¡Bienvenido, ${currentUser.username}!`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/**
 * Render the official Google Button
 */
function renderGoogleButton() {
  const container = document.getElementById('google-signin-button');
  if (!container || typeof google === 'undefined') {
    if (container) setTimeout(renderGoogleButton, 200);
    return;
  }

  google.accounts.id.renderButton(
    container,
    { theme: "outline", size: "large", width: "320", text: "continue_with", shape: "pill" }
  );
}

// Update openModal to trigger rendering
let storedCoaches = JSON.parse(localStorage.getItem('luxury_coaches') || '[]');
let deletedCoachIds = JSON.parse(localStorage.getItem('luxury_deleted_ids') || '[]');

// Merge logic: Start with default, remove deleted, then merge/update with stored
let ALL_COACHES = COACHES.filter(c => !deletedCoachIds.includes(c.id));

// Overwrite default coaches with stored versions (for edits) or add new stored ones
storedCoaches.forEach(sc => {
  const idx = ALL_COACHES.findIndex(c => c.id === sc.id);
  if (idx !== -1) {
    ALL_COACHES[idx] = sc;
  } else {
    ALL_COACHES.push(sc);
  }
});

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

let currentGame = 'lol';

function setGame(el, game) {
  document.querySelectorAll('.game-tab').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  currentGame = game;
  renderCoaches();
}

/**
 * Render coach cards based on filters, search and sorting from Supabase
 */
async function renderCoaches() {
  const coachGrid = document.getElementById('coachGrid');
  if (!coachGrid) return;

  // Show skeleton or loader
  coachGrid.innerHTML = '<div class="loader-spinner" style="grid-column: 1/-1; margin: 50px auto;"></div>';

  if (!_supabase) {
    console.warn("Supabase not initialized");
    return;
  }

  const searchInput = document.getElementById('searchInput');
  const langFilter = document.getElementById('langFilter');
  const sortFilter = document.getElementById('sortFilter');
  const roleFilter = document.getElementById('roleFilter');

  const search = (searchInput?.value || '').toLowerCase();
  const lang = langFilter?.value || '';
  const sort = sortFilter?.value || 'rating';
  const role = roleFilter?.value || '';

  // Fetch from Supabase
  let query = _supabase
    .from('coaches')
    .select('*')
    .eq('approved', true);

  if (lang) query = query.eq('lang', lang);
  
  const { data: listAll, error } = await query;

  if (error) {
    console.error("Error de Supabase:", error);
    coachGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px;">
      <p style="color:#ef4444; margin-bottom:10px;">Error de conexión: ${error.message}</p>
      <p style="font-size:12px; color:var(--muted2);">Verifica tu "Anon Key" en scripts.js</p>
    </div>`;
    return;
  }

  // Local filtering for search and roles
  let list = listAll.filter(c => {
    const sr = !search ||
      c.name.toLowerCase().includes(search) ||
      c.specialty.toLowerCase().includes(search) ||
      (c.tags && c.tags.some(t => t.toLowerCase().includes(search)));
    const rl = !role || (c.tags && c.tags.some(t => t.toLowerCase().includes(role.toLowerCase())));
    return sr && rl;
  });

  // Sorting
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => b.rating - a.rating);

  const isIndex = !!document.getElementById('heroImg');
  if (isIndex) list = list.slice(0, 6);

  if (!list.length) {
    coachGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--muted2); padding:40px;">No se encontraron coaches aprobados.</p>`;
    return;
  }

  // Generate cards
  coachGrid.innerHTML = list.map((c, i) => `
    <div class="coach-card" style="animation:fadeUp 0.45s ${i * 0.07}s ease both;" onclick="openCoachModal('${c.id}')">
      <div class="coach-banner">
        <img src="${c.banner}" alt="" onerror="this.parentElement.style.background='linear-gradient(135deg,#0d2010,#1a4025)'; this.style.display='none';">
        <div class="banner-overlay"></div>
        <div class="coach-game-badge">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          ${c.game_label}
        </div>
        <div class="coach-avatar-wrap">
          <div class="coach-avatar">
            <img src="${c.avatar}" alt="${c.name}" onerror="this.outerHTML='<span style=font-size:24px>${c.rank_icon}</span>'">
          </div>
        </div>
      </div>
      <div class="coach-body">
        ${isAdmin() ? `
          <div class="admin-actions">
            <button class="btn-admin-edit" onclick="event.stopPropagation(); editCoach('${c.id}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="btn-admin-delete" onclick="event.stopPropagation(); deleteCoach('${c.id}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>
        ` : ''}
        <div class="coach-top">
          <div class="coach-name">${c.name}</div>
          <div class="rank-badge ${c.rank_class}" style="margin-bottom:0; padding:2px 10px;">
            ${c.rank_icon} ${c.rank}
          </div>
        </div>
        <div class="coach-lang">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          ${c.lang}
        </div>
        <div class="coach-spec">${c.specialty}</div>
        <div class="tags-row">${c.tags ? c.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}</div>
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
 * Admin: Open Dashboard for Approvals
 */
async function openAdminDashboard() {
  const modalContent = document.getElementById('modalContent');
  const modalOverlay = document.getElementById('modalOverlay');
  
  openModal('login'); // Generic open cleanup
  document.querySelector('.modal').className = 'modal modal-detailed'; // Large style

  modalContent.innerHTML = `
    <div style="padding: 24px;">
      <div class="modal-title">Panel de Administración</div>
      <p style="color:var(--muted); margin-bottom: 24px;">Gestiona las solicitudes de nuevos coaches.</p>
      
      <div id="adminApprovalList" class="reviews-list" style="max-height: 500px;">
        <div class="loader-spinner" style="margin: 40px auto;"></div>
      </div>
      
      <div style="margin-top: 24px; text-align: right;">
        <button class="btn btn-ghost" onclick="migrateCoachesToSupabase()" style="font-size: 11px; opacity: 0.5;">Migrar datos iniciales</button>
      </div>
    </div>
  `;

  const { data: pending, error } = await _supabase
    .from('coaches')
    .select('*')
    .eq('approved', false);

  const listContainer = document.getElementById('adminApprovalList');
  if (error) {
    listContainer.innerHTML = `<p style="color:#ef4444;">Error: ${error.message}</p>`;
    return;
  }

  if (pending.length === 0) {
    listContainer.innerHTML = '<p style="text-align:center; padding: 40px; color:var(--muted2);">No hay solicitudes pendientes.</p>';
    return;
  }

  listContainer.innerHTML = pending.map(p => `
    <div class="review-item" style="border: 1px solid rgba(74,222,128,0.1); padding: 16px; margin-bottom: 12px; border-radius: 12px; background: rgba(255,255,255,0.02);">
       <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div style="display:flex; gap:12px; align-items:center;">
            <img src="${p.avatar}" style="width:40px; height:40px; border-radius:8px; object-fit:cover;">
            <div>
              <div style="font-weight:700;">${p.name}</div>
              <div style="font-size:12px; color:var(--accent);">${p.rank} · $${p.price}/hr</div>
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-primary" onclick="approveCoach('${p.id}')" style="padding: 5px 10px; font-size: 11px;">Aceptar</button>
            <button class="btn btn-ghost" onclick="deleteCoach('${p.id}')" style="padding: 5px 10px; font-size: 11px; border-color:#ef4444; color:#ef4444;">Rechazar</button>
          </div>
       </div>
       <div style="margin-top:12px; font-size:13px; color:var(--muted);">
          <strong>Bio:</strong> ${p.bio}
       </div>
       <div style="margin-top:8px; font-size:11px; color:var(--muted2);">
          Email: ${p.email} · Especialidades: ${p.tags ? p.tags.join(', ') : ''}
       </div>
    </div>
  `).join('');
}

/**
 * Migration Helper: Call this only once to push hardcoded coaches to DB
 */
async function migrateCoachesToSupabase() {
  if (!confirm("Esto subirá los coaches iniciales a la base de datos. ¿Continuar?")) return;
  
  const toInsert = COACHES.map(c => ({
    name: c.name,
    email: 'placeholder@coach.com',
    game: 'lol',
    game_label: c.gameLabel,
    rank: c.rank,
    rank_class: c.rankClass,
    rank_icon: c.rankIcon,
    price: c.price,
    rating: c.rating,
    reviews: c.reviews,
    specialty: c.specialty,
    tags: c.tags,
    lang: c.lang,
    banner: c.banner,
    avatar: c.avatar,
    bio: c.bio,
    full_bio: c.fullBio,
    video: c.video,
    instagram: c.instagram,
    twitter: c.twitter,
    twitch: c.twitch,
    youtube: c.youtube,
    availability: c.availability,
    approved: true
  }));

  const { error } = await _supabase.from('coaches').insert(toInsert);
  if (error) alert("Error migrando: " + error.message);
  else {
    alert("Migración exitosa.");
    renderCoaches();
    openAdminDashboard();
  }
}

/**
 * Handle functional form submissions
 */
/**
 * Admin: Delete/Reject a coach
 */
async function deleteCoach(id) {
  if (!confirm('¿Estás seguro de que deseas eliminar este perfil?')) return;

  const { error } = await _supabase
    .from('coaches')
    .delete()
    .eq('id', id);

  if (error) {
    alert("Error al eliminar: " + error.message);
    return;
  }

  renderCoaches();
  // If we are in the admin dashboard, refresh it too
  if (document.getElementById('adminApprovalList')) {
    openAdminDashboard();
  }
}

/**
 * Admin: Approve a coach
 */
async function approveCoach(id) {
  const { error } = await _supabase
    .from('coaches')
    .update({ approved: true })
    .eq('id', id);

  if (error) {
    alert("Error al aprobar: " + error.message);
    return;
  }

  renderCoaches();
  openAdminDashboard(); // Refresh pending list
}

/**
 * Admin: Edit a coach
 */
async function editCoach(id) {
  const { data: c, error } = await _supabase
    .from('coaches')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !c) return;

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

    // Social Media
    if (form.querySelector('[name="instagram"]')) form.querySelector('[name="instagram"]').value = c.instagram || '';
    if (form.querySelector('[name="twitter"]')) form.querySelector('[name="twitter"]').value = c.twitter || '';
    if (form.querySelector('[name="twitch"]')) form.querySelector('[name="twitch"]').value = c.twitch || '';
    if (form.querySelector('[name="youtube"]')) form.querySelector('[name="youtube"]').value = c.youtube || '';
    if (form.querySelector('[name="video"]')) form.querySelector('[name="video"]').value = c.video || '';

    if (form.querySelector('[name="tags"]')) form.querySelector('[name="tags"]').value = (c.tags || []).join(', ');

    // Transform form into EDIT mode
    form.dataset.editId = id;
    form.querySelector('.btn-modal').innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      Guardar cambios
    `;
    document.querySelector('#modalContent .modal-title').textContent = 'Editar Perfil';

    // Pre-fill availability rows
    const availContainer = document.getElementById('availabilityEntries');
    if (availContainer && c.availability && c.availability.length) {
      availContainer.innerHTML = '';
      c.availability.forEach(slot => {
        const parts = slot.split(':').map(p => p.trim());
        const days = parts[0] || '';
        const hours = parts.slice(1).join(':').trim();
        availContainer.insertAdjacentHTML('beforeend', `
          <div class="availability-entry" style="display:flex; gap:8px; margin-bottom:8px; align-items:center;">
            <input type="text" name="avail_days[]" value="${days}" placeholder="Ej: Lunes - Viernes" style="flex:1;" />
            <input type="text" name="avail_hours[]" value="${hours}" placeholder="Ej: 18:00 - 22:00" style="flex:1;" />
            <button type="button" onclick="addAvailRow()" style="background:rgba(74,222,128,0.1); border:1px solid rgba(74,222,128,0.3); color:var(--accent); border-radius:6px; width:32px; height:32px; cursor:pointer; font-size:18px; display:flex; align-items:center; justify-content:center;">+</button>
          </div>
        `);
      });
    }
  }, 100);
}

/**
 * Add a new availability entry row in the coach form
 */
function addAvailRow() {
  const container = document.getElementById('availabilityEntries');
  if (!container) return;
  const html = `
    <div class="availability-entry" style="display:flex; gap:8px; margin-bottom:8px; align-items:center;">
      <input type="text" name="avail_days[]" placeholder="Ej: Sábados" style="flex:1;" />
      <input type="text" name="avail_hours[]" placeholder="Ej: 10:00 - 14:00" style="flex:1;" />
      <button type="button" onclick="this.closest('.availability-entry').remove()" style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); color:#ef4444; border-radius:6px; width:32px; height:32px; cursor:pointer; font-size:20px; display:flex; align-items:center; justify-content:center;">−</button>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
}
window.addAvailRow = addAvailRow;

/**
 * Compress image using Canvas
 */
function compressImage(file, maxWidth = 400, quality = 0.6) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
    };
  });
}

/**
 * Helper to convert file to Base64 (legacy/fallback)
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
    const usernameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');

    const username = usernameInput?.value?.trim();
    const email = emailInput?.value?.trim();
    const password = passwordInput?.value?.trim();

    if (!username || !email || !password) {
      let errorEl = form.querySelector('.form-error');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        form.prepend(errorEl);
      }
      errorEl.textContent = 'Por favor, completa todos los campos.';
      return;
    }

    if (users.find(u => u.email === email)) {
      let errorEl = form.querySelector('.form-error');
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        form.prepend(errorEl);
      }
      errorEl.textContent = 'Este correo ya está registrado. Intenta iniciar sesión.';
      return;
    }

    const newUser = { username, email, password, game: 'lol', avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=4ade80&color=052e16&bold=true` };
    users.push(newUser);
    localStorage.setItem('luxury_users', JSON.stringify(users));

    // Automatically log in the new user
    currentUser = newUser;
    localStorage.setItem('luxury_logged_user', JSON.stringify(currentUser));
    updateNavigationUI();

    modalContent.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="modal-title">¡Bienvenido, ${username}!</div>
        <p style="color:var(--muted2); margin-top:8px;">Tu cuenta fue creada e iniciaste sesión correctamente.</p>
        <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="closeModal()">Comenzar a aprender</button>
      </div>
    `;
    return;
  }

  if (type === 'coach') {
    const name = form.querySelector('[name="name"]').value;
    const applicantEmail = form.querySelector('[name="applicant_email"]').value;
    const instagram = form.querySelector('[name="instagram"]').value;
    const twitter = form.querySelector('[name="twitter"]').value;
    const twitch = form.querySelector('[name="twitch"]').value;
    const youtube = form.querySelector('[name="youtube"]').value;
    const videoUrl = form.querySelector('[name="video"]').value;
    const gameLabel = form.querySelector('[name="gameLabel"]').value;
    const rank = form.querySelector('[name="rank"]').value;
    const price = form.querySelector('[name="price"]').value;
    const bio = form.querySelector('[name="bio"]').value;
    const lang = form.querySelector('[name="lang"]').value;
    const selectedTags = [...form.querySelectorAll('[name="tags_pick"]:checked')].map(el => el.value);
    const tagsStr = selectedTags.join(', ');

    // --- MANDATORY FIELDS VALIDATION ---
    if (selectedTags.length === 0) {
      alert('Por favor selecciona al menos una especialidad.');
      return;
    }

    const avatarImg = form.querySelector('.avatar-editor img');
    if (avatarImg && avatarImg.src.includes('cdn-icons-png.flaticon.com/512/10337/10337579.png')) {
      alert('Por favor sube una imagen de perfil personalizada para continuar.');
      return;
    }

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

(Fotos enviadas vía datos adjuntos)

Enviado automáticamente desde LevelUp Coach.`
    );

    // --- AUTOMATED EMAIL VIA EMAILJS ---
    // IMPORTANTE: Debes completar tus credenciales en init() y send() para que funcione.

    const fullReport = `
Nueva solicitud de Coach recibida:

Nombre / Nick:     ${name}
Email Contacto:    ${applicantEmail}
Juego principal:   ${gameLabel}
Rango / ELO:       ${rank}
Precio por hora:   $${price} USD
Idioma:            ${lang}
Especialidades:    ${tagsStr || 'No especificadas'}

REDES SOCIALES:
Instagram: ${instagram || 'No'}
Twitter:   ${twitter || 'No'}
Twitch:    ${twitch || 'No'}
YouTube:   ${youtube || 'No'}
Video URL: ${videoUrl || 'No'}

BIOGRAFÍA:
${bio}

IMÁGENES:
Avatar: ${form.querySelector('.avatar-editor img').src}
Banner: ${form.querySelector('.banner-editor img').src}

Enviado desde LevelUp Coach.`;

    const templateParams = {
      from_name: name,
      user_email: applicantEmail,
      game: gameLabel,
      rank,
      price,
      language: lang,
      tags: tagsStr || 'No especificadas',
      message: fullReport,
      instagram,
      twitter,
      twitch,
      youtube,
      video: videoUrl,
      avatar: form.querySelector('.avatar-editor img').src,
      banner: form.querySelector('.banner-editor img').src,
      to_email: 'facundo.rodriguez.pro@gmail.com'
    };

    // --- Persist the Coach data ---
    // Parse availability entries
    const availDays = [...form.querySelectorAll('[name="avail_days[]"]')].map(i => i.value.trim()).filter(Boolean);
    const availHours = [...form.querySelectorAll('[name="avail_hours[]"]')].map(i => i.value.trim()).filter(Boolean);
    const availability = availDays.map((day, i) => day + (availHours[i] ? ': ' + availHours[i] : '')).filter(Boolean);

    const coachData = {
      name,
      email: applicantEmail,
      instagram,
      twitter,
      twitch,
      youtube,
      video: videoUrl,
      game: 'lol',
      game_label: gameLabel,
      rank,
      rank_class: `rank-${rank.toLowerCase()}`,
      rank_icon: rank === 'Challenger' ? '🏆' : (rank === 'Grandmaster' ? '💮' : '👑'),
      price: Number(price),
      rating: 5.0,
      reviews: 0,
      specialty: tagsStr,
      tags: selectedTags,
      lang,
      banner: form.querySelector('.banner-editor img').src,
      avatar: form.querySelector('.avatar-editor img').src,
      bio: bio,
      full_bio: bio,
      approved: form.dataset.editId ? true : false // If editing (admin), keep approved. If new, false.
    };

    if (form.dataset.editId) {
      // It's an EDIT (Admin only)
      const { error } = await _supabase
        .from('coaches')
        .update(coachData)
        .eq('id', form.dataset.editId);

      if (error) {
        alert("Error actualizando: " + error.message);
        return;
      }
      renderCoaches();
    } else {
      // NEW POSTULATION
      const { error } = await _supabase
        .from('coaches')
        .insert([coachData]);

      if (error) {
        alert("Error al postular: " + error.message);
        return;
      }
      console.log("Nueva postulación guardada en Supabase.");
    }

    // Inicializar con tu Public Key
    emailjs.init('YFuDnrEyqTc_eDxhq');

    emailjs.send('service_ddpagyt', 'template_662v4cd', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
        alert('Error al enviar el email: ' + (error.text || 'El archivo es demasiado grande para EmailJS'));
      });

    // Show success message
    modalContent.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="modal-title">¡Solicitud Procesada!</div>
        <p style="color:var(--muted2); margin-top:8px; line-height:1.6;">Su solicitud será atendida.</p>
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
  const modal = modalOverlay?.querySelector('.modal');

  // Reset modal class to base
  if (modal) modal.className = 'modal';

  const templates = {
    login: `
      <div class="modal-title">Bienvenido de vuelta</div>
      <div class="modal-sub">Inicia sesión para continuar</div>
      
      <div id="google-signin-button" style="margin-bottom: 20px; display: flex; justify-content: center;"></div>

      <div class="auth-divider">o</div>

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
      
      <div id="google-signin-button" style="margin-bottom: 20px; display: flex; justify-content: center;"></div>

      <div class="auth-divider">o</div>

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
            <input type="file" name="banner" class="hidden-input" accept="image/*" onchange="const f=this.files[0]; if(f){ compressImage(f, 800, 0.5).then(data => this.previousElementSibling.src = data); }">
          </div>
          <div class="avatar-editor-wrap">
            <div class="avatar-editor" onclick="this.querySelector('input').click()">
              <div class="camera-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/10337/10337579.png">
              <input type="file" name="avatar" class="hidden-input" accept="image/*" onchange="const f=this.files[0]; if(f){ compressImage(f, 400, 0.6).then(data => this.previousElementSibling.src = data); }">
            </div>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Nombre / Nick</label>
            <input type="text" name="name" placeholder="Tu nombre en el juego" required>
          </div>
          <div class="form-group">
            <label>Tu correo electrónico</label>
            <input type="email" name="applicant_email" placeholder="Para que podamos contactarte" required>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Juego principal</label>
            <div style="background: rgba(74, 222, 128, 0.04); border: 1px solid rgba(74, 222, 128, 0.1); border-radius: 9px; padding: 11px 14px; font-size: 14px; color: var(--muted2);">League of Legends</div>
            <input type="hidden" name="gameLabel" value="League of Legends">
          </div>
          <div class="form-group">
            <label>Rango / ELO</label>
            <select name="rank" required>
              <option value="">Tu rango actual</option>
              <option>Challenger</option>
              <option>Grandmaster</option>
              <option>Master</option>
              <option>Diamond</option>
            </select>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Precio por hora (USD)</label>
            <input type="number" name="price" placeholder="Ej: 15" min="5" required>
          </div>
          <div class="form-group">
            <label>Idioma</label>
            <select name="lang" required>
              <option>Español</option>
              <option>Inglés</option>
              <option>Portugués</option>
            </select>
          </div>
        </div>

        <div class="modal-grid-two">
          <div class="form-group">
            <label>Instagram / Twitter (User)</label>
            <div style="display:flex; gap:10px;">
              <input type="text" name="instagram" placeholder="Insta" style="flex:1;">
              <input type="text" name="twitter" placeholder="Twitter" style="flex:1;">
            </div>
          </div>
          <div class="form-group">
            <label>Twitch / YouTube (User)</label>
            <div style="display:flex; gap:10px;">
              <input type="text" name="twitch" placeholder="Twitch" style="flex:1;">
              <input type="text" name="youtube" placeholder="YouTube" style="flex:1;">
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>URL Video de Presentación (YouTube / Embed) *</label>
          <input type="url" name="video" placeholder="https://www.youtube.com/embed/..." required>
        </div>

        <div class="form-group">
          <label>Especialidades</label>
          <div class="tags-picker">
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Mid Lane"><span>Mid Lane</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Top Lane"><span>Top Lane</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Jungle"><span>Jungle</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="ADC"><span>ADC</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Support"><span>Support</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Mecánicas"><span>Mecánicas</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Macro Game"><span>Macro Game</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Wave Control"><span>Wave Control</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Roaming"><span>Roaming</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Teamfight"><span>Teamfight</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Posicionamiento"><span>Posicionamiento</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Farm / CS"><span>Farm / CS</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Visión"><span>Visión</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Draft / Picks"><span>Draft / Picks</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Mental Coach"><span>Mental Coach</span></label>
            <label class="tag-check"><input type="checkbox" name="tags_pick" value="Análisis VOD"><span>Análisis VOD</span></label>
          </div>
        </div>

        <div class="form-group">
          <label>Descripción detallada</label>
          <textarea name="bio" placeholder="Cuéntanos tu experiencia y qué aprenderán contigo..." required></textarea>
        </div>

        <div class="form-group">
          <label style="display:flex; align-items:center; gap:8px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Disponibilidad (horarios y días)
          </label>
          <div class="availability-entries" id="availabilityEntries">
            <div class="availability-entry" style="display:flex; gap:8px; margin-bottom:8px; align-items:center;">
              <input type="text" name="avail_days[]" placeholder="Ej: Lunes - Viernes" style="flex:1;" />
              <input type="text" name="avail_hours[]" placeholder="Ej: 18:00 - 22:00" style="flex:1;" />
              <button type="button" onclick="addAvailRow()" style="background:rgba(74,222,128,0.1); border:1px solid rgba(74,222,128,0.3); color:var(--accent); border-radius:6px; width:32px; height:32px; cursor:pointer; font-size:18px; display:flex; align-items:center; justify-content:center;">+</button>
            </div>
          </div>
          <p style="font-size:11px; color:var(--muted); margin-top:4px;">Agrega cada bloque de horario por separado con el botón +</p>
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

  // Render Google Button if applicable
  if (type === 'login' || type === 'register') {
    renderGoogleButton();
  }
}

/**
 * Update the navigation bar based on auth state
 */
function updateNavigationUI() {
  const navActions = document.getElementById('navActions');
  const mobileUserActions = document.getElementById('mobileUserActions');
  if (!navActions) return;

  let desktopHtml = '';
  let mobileHtml = '';

  if (currentUser) {
    desktopHtml = `
      <div class="user-profile" style="cursor:default;">
        <div class="user-info" onclick="openModal('profile')" style="cursor:pointer;">
          <div class="user-avatar-small" style="background-image: url('${currentUser.avatar}'); background-size: cover;">
            ${!currentUser.avatar ? currentUser.username[0].toUpperCase() : ''}
          </div>
          <span class="user-name">${currentUser.username}</span>
        </div>
        ${isAdmin() ? `
          <button class="btn btn-ghost" onclick="openAdminDashboard()" style="padding: 8px 12px; font-size: 13px; border-color:var(--gold); color:var(--gold);">
            Panel Admin
          </button>
        ` : ''}
        <button class="btn btn-ghost" onclick="logout()" style="padding: 8px 12px; font-size: 13px;">
          Salir
        </button>
      </div>
    `;
    mobileHtml = `
      <div class="user-profile" style="background:rgba(255,255,255,0.05); width:100%; justify-content:center; padding:15px; border-radius:15px; margin-bottom: 20px;">
        <div class="user-avatar-small" style="width:40px; height:40px; font-size:18px; background-image: url('${currentUser.avatar}'); background-size: cover;">
          ${!currentUser.avatar ? currentUser.username[0].toUpperCase() : ''}
        </div>
        <div class="user-name" style="display:block; font-size:16px;">${currentUser.username}</div>
      </div>
      <a href="#coaches-section" onclick="closeMobileMenu()">Coaches</a>
      <a href="#como-funciona" onclick="closeMobileMenu()">Cómo funciona</a>
      <a href="#ser-coach" onclick="closeMobileMenu()">Ser Coach</a>
      <div class="mobile-menu-divider"></div>
      <button class="btn btn-ghost mobile-menu-btn" onclick="logout()">Cerrar sesión</button>
    `;
  } else {
    desktopHtml = `
      <button class="btn btn-ghost" onclick="openModal('login')">Iniciar sesión</button>
      <button class="btn btn-primary" onclick="openModal('register')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
        </svg>
        Crear cuenta
      </button>
    `;
    mobileHtml = `
      <a href="#coaches-section" onclick="closeMobileMenu()">Coaches</a>
      <a href="#como-funciona" onclick="closeMobileMenu()">Cómo funciona</a>
      <a href="#ser-coach" onclick="closeMobileMenu()">Ser Coach</a>
      <div class="mobile-menu-divider"></div>
      <button class="btn btn-ghost mobile-menu-btn" onclick="closeMobileMenu(); openModal('login')">Iniciar sesión</button>
      <button class="btn btn-primary mobile-menu-btn" onclick="closeMobileMenu(); openModal('register')">Crear cuenta</button>
    `;
  }

  // Preserve hamburger button if it exists
  const hamburger = navActions.querySelector('.hamburger-btn');
  navActions.innerHTML = desktopHtml;
  if (hamburger) navActions.appendChild(hamburger);

  if (mobileUserActions) mobileUserActions.innerHTML = mobileHtml;
}

function logout() {
  currentUser = null;
  localStorage.removeItem('luxury_logged_user');
  updateNavigationUI();
  closeMobileMenu();
}
window.logout = logout;

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (!menu || !btn) return;

  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    menu.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
    animateMobileMenuLinks();
  }
}
window.toggleMobileMenu = toggleMobileMenu;

/**
 * Close Mobile Menu
 */
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeMobileMenu = closeMobileMenu;

/**
 * Animate Mobile Menu Buttons
 */
async function animateMobileMenuLinks() {
  const buttons = document.querySelectorAll('.mobile-menu-btn');

  // Fade in buttons
  buttons.forEach((btn, idx) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(10px)';
    btn.style.transition = 'all 0.4s ease';
    setTimeout(() => {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    }, idx * 100);
  });
}

/**
 * Typewriter Helper
 */
function typeText(el, text, speed = 50) {
  return new Promise(resolve => {
    let i = 0;
    el.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.appendChild(cursor);

    function type() {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        i++;
        setTimeout(type, speed);
      } else {
        cursor.remove();
        resolve();
      }
    }
    type();
  });
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
 * Google Sign-In Mockup Step 2: Name Entry
 */
function openGoogleSignInStep2(email) {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <div class="google-mockup">
      <div style="text-align:center; margin-bottom: 20px;">
        <svg width="48" height="48" viewBox="0 0 24 24" style="margin-bottom:12px;">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <div class="google-mock-title">Te damos la bienvenida</div>
        <div class="google-mock-email-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/></svg>
          ${email}
        </div>
      </div>

      <form onsubmit="event.preventDefault(); selectGoogleAccount('${email}', this.google_name.value, 'https://ui-avatars.com/api/?name='+this.google_name.value.split(' ').join('+')+'&background=random&color=white')">
        <div class="google-field-outline" style="margin-bottom: 20px;">
          <input type="text" name="google_name" required placeholder=" ">
          <label>Nombre de usuario</label>
        </div>

        <div class="google-field-outline">
          <input type="password" name="google_pass" required placeholder=" ">
          <label>Introduce tu contraseña</label>
        </div>

        <div style="margin-top: 8px;">
          <label style="display:inline-flex; align-items:center; gap:8px; font-size:14px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px;"> Mostrar contraseña
          </label>
        </div>

        <div style="display:flex; justify-content: space-between; align-items: center; margin-top: 60px;">
           <a href="#" style="color:#1a73e8; font-size:14px; font-weight:600; text-decoration:none;" onclick="openGoogleSignInStep1()">Olvidé mi contraseña</a>
           <button type="submit" class="google-btn-primary">Siguiente</button>
        </div>
      </form>
    </div>

    <style>
      .google-mock-email-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 4px 12px;
        border: 1px solid #dadce0;
        border-radius: 20px;
        font-size: 14px;
        color: #3c4043;
        font-weight: 500;
        margin-top: 4px;
      }
      /* Inherit the rest from Step 1 styles */
    </style>
  `;
}

/**
 * Handle selection of a mock Google account
 */
function selectGoogleAccount(email, name, avatar) {
  const modalContent = document.getElementById('modalContent');

  // Simulate loading
  modalContent.innerHTML = `
    <div style="text-align:center; padding: 60px 0; background: white; border-radius: 8px;">
      <div class="loader-google" style="margin: 0 auto 20px;"></div>
      <p style="color:#5f6368; font-family: roboto, arial;">Conectando con Google...</p>
    </div>
  `;

  setTimeout(() => {
    const googleUser = {
      username: name,
      email: email,
      avatar: avatar,
      game: 'lol',
      bio: 'Jugador autenticado vía Google'
    };

    currentUser = googleUser;
    localStorage.setItem('luxury_logged_user', JSON.stringify(currentUser));

    const existingUsers = JSON.parse(localStorage.getItem('luxury_users') || '[]');
    if (!existingUsers.find(u => u.email === googleUser.email)) {
      existingUsers.push(googleUser);
      localStorage.setItem('luxury_users', JSON.stringify(existingUsers));
    }

    updateNavigationUI();

    modalContent.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="width:60px; height:60px; background:var(--accent-glow); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:var(--accent);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="modal-title">¡Bienvenido, ${googleUser.username}!</div>
        <p style="color:var(--muted2); margin-top:8px;">Has iniciado sesión con Google correctamente.</p>
        <button class="btn btn-primary" style="margin-top:24px; width:100%;" onclick="closeModal()">Comenzar a aprender</button>
      </div>
    `;
  }, 1200);
}

/**
 * Mock Google Login Initiation
 */
function loginWithGoogle() {
  openGoogleAccountSelection();
}

/**
 * Open specific coach detail modal from Supabase
 */
async function openCoachModal(id) {
  const { data: c, error } = await _supabase
    .from('coaches')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !c) return;

  const modalContent = document.getElementById('modalContent');
  const modalOverlay = document.getElementById('modalOverlay');
  const modal = modalOverlay?.querySelector('.modal');

  if (!modalContent || !modal) return;

  // Apply rich modal class
  modal.className = 'modal modal-detailed';

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
          <iframe 
            src="${c.video || 'https://www.youtube.com/embed/fGSV1D8_s7s'}" 
            title="Presentation Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
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

        <!-- Social Media Icons -->
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px; margin-top:10px;">
          ${c.instagram ? `<a href="https://instagram.com/${c.instagram}" target="_blank" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>` : ''}
          ${c.twitter ? `<a href="https://twitter.com/${c.twitter}" target="_blank" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-1 2.17-2 2.51c0 0 .5 4.5-3.5 7.5a11.94 11.94 0 0 1-9 2c0 0 0 3 .5 3.5a12.28 12.28 0 0 1-7 0c0 0 9.5 4.5 12.5-8l2-.5c0 0-2 3-5 5.5l1.5 2L22 4z"/></svg></a>` : ''}
          ${c.twitch ? `<a href="https://twitch.tv/${c.twitch}" target="_blank" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg></a>` : ''}
          ${c.youtube ? `<a href="https://youtube.com/${c.youtube}" target="_blank" class="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>` : ''}
        </div>

        <button class="btn btn-primary btn-modal" onclick="alert('Funcionalidad de reserva en desarrollo')">
          Reservar por $${c.price}/hr
        </button>
        
        <button class="btn btn-ghost btn-modal" style="margin-top:12px; border-color:var(--accent); color:var(--accent);" onclick="openComments('${c.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Preguntas y Respuestas
        </button>
      </div>

      <!-- Main Content -->
      <div class="modal-detailed-main">
        <div class="coach-detailed-header">
          <div>
            <div class="modal-title">${c.name}</div>
            <div class="coach-lang">${c.game_label} · ${c.lang}</div>
          </div>
          <div class="rank-badge ${c.rank_class}" style="margin-right: 20px;">${c.rank_icon} ${c.rank}</div>
        </div>

        <div class="modal-section">
          <h4>Acerca del Coach</h4>
          <p>${c.bio}</p>
          <p style="margin-top:10px;">${c.full_bio}</p>
        </div>

        ${c.availability ? `
        <div class="modal-section">
          <h4>Horarios Disponibles</h4>
          <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
            <ul style="list-style:none; padding:0; margin:0;">
              ${c.availability.map(h => `<li style="font-size:13px; color:var(--muted); margin-bottom:6px; display:flex; align-items:center; gap:8px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${h}</li>`).join('')}
            </ul>
          </div>
        </div>
        ` : ''}

        <div class="modal-section">
          <h4>Especialidades</h4>
          <div class="tags-row">
            ${c.tags ? c.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
          </div>
        </div>
        
        <div class="modal-section">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
            <h4 style="margin:0;">Reseñas de Usuarios</h4>
            <button class="btn btn-ghost" style="padding:4px 12px; font-size:12px;" onclick="toggleReviewForm()">Dejar reseña</button>
          </div>

          <div id="reviewForm" class="review-form" style="display:none; margin-bottom:25px;">
            ${currentUser ? `
              <div class="rating-input" style="margin-bottom:12px;">
                <span style="font-size:13px; color:var(--muted); margin-right:10px;">Tu calificación:</span>
                <div class="star-rating" id="starRating">
                  <span data-value="1">★</span><span data-value="2">★</span><span data-value="3">★</span><span data-value="4">★</span><span data-value="5">★</span>
                </div>
              </div>
              <textarea id="reviewText" placeholder="Cuéntanos tu experiencia con ${c.name}..." style="width:100%; min-height:80px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:white; padding:12px; margin-bottom:12px; font-family:inherit; outline:none;"></textarea>
              <div style="display:flex; justify-content:flex-end; gap:10px;">
                <button class="btn btn-ghost" style="padding:6px 16px;" onclick="toggleReviewForm()">Cancelar</button>
                <button class="btn btn-primary" style="padding:6px 16px;" onclick="submitReview('${c.id}')">Publicar</button>
              </div>
            ` : `
              <div style="text-align:center; padding:20px; background:rgba(255,255,255,0.02); border-radius:8px; border:1px dashed rgba(255,255,255,0.1);">
                <p style="font-size:14px; color:var(--muted);">Debes <a href="#" onclick="openModal('login')" style="color:var(--accent); text-decoration:none;">iniciar sesión</a> para dejar una reseña.</p>
              </div>
            `}
          </div>

          <div class="reviews-list">
             <p class="muted">Las reseñas detalladas ahora se cargan desde el servidor.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  if (modalOverlay) modalOverlay.classList.add('open');

  // Star rating logic initialization if logged in
  if (currentUser) {
    setTimeout(() => initStarRating(), 100);
  }
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
 * Open Comments / Q&A Interface for a specific coach from Supabase
 */
async function openComments(coachId) {
  const { data: c, error: coachError } = await _supabase
    .from('coaches')
    .select('*')
    .eq('id', coachId)
    .single();

  if (coachError || !c) return;

  const modalContent = document.getElementById('modalContent');

  // Load comments from localStorage
  const commentsKey = `luxury_comments_${c.id}`;
  const threads = JSON.parse(localStorage.getItem(commentsKey) || '[]');

  modalContent.innerHTML = `
    <div style="display: flex; flex-direction: column; height: 100%;">
      <div style="display: flex; align-items: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 15px;">
        <div onclick="openCoachModal(${c.id})" style="cursor:pointer; color: var(--muted); display:flex; align-items:center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${c.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
          <div>
            <div style="font-weight:700; font-size:16px;">Preguntas para ${c.name}</div>
            <div style="font-size:12px; color:var(--muted2);">El coach suele responder en menos de 24h</div>
          </div>
        </div>
      </div>

      <div class="comments-container">
        <div class="comments-list" id="commentsList">
          ${threads.length === 0 ? `
            <div style="text-align:center; color:var(--muted2); font-size:13px; margin-top:40px; padding: 0 20px;">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:15px; opacity:0.3;">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <p>Aún no hay preguntas. ¡Sé el primero en consultar!</p>
            </div>
          ` : threads.map(t => `
            <div class="comment-thread" id="thread-${t.id}">
              <div class="comment-item">
                <img src="${t.userAvatar || 'https://ui-avatars.com/api/?name=' + t.userName}" class="comment-avatar">
                <div class="comment-bubble">
                  <div class="comment-header">
                    <span class="comment-user">${t.userName}</span>
                    <span class="comment-time">${new Date(t.timestamp).toLocaleDateString()}</span>
                  </div>
                  <div class="comment-text">${t.text}</div>
                  
                  <div style="display:flex; gap:12px; margin-top:8px; border-top:1px solid rgba(255,255,255,0.05); padding-top:8px;">
                    ${currentUser && (currentUser.email === 'admin@levelup.coach') ? `
                      <button onclick="toggleReplyInput(${t.id})" style="background:none; border:none; color:var(--accent); font-size:11px; cursor:pointer; font-weight:600; padding:0; display:flex; align-items:center; gap:4px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg> Responder
                      </button>
                    ` : ''}
                    
                    ${currentUser && (currentUser.username === t.userName || currentUser.email === 'admin@levelup.coach') ? `
                      <button onclick="deleteComment(${c.id}, ${t.id})" style="background:none; border:none; color:#ef4444; font-size:11px; cursor:pointer; font-weight:600; padding:0; display:flex; align-items:center; gap:4px;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> Eliminar
                      </button>
                    ` : ''}
                  </div>
                </div>
              </div>
              
              <div id="reply-input-${t.id}" style="display:none; margin-left:48px; margin-top:8px;">
                <textarea class="comment-textarea" id="replyText-${t.id}" placeholder="Escribe tu respuesta como coach..." style="min-height:60px; margin-bottom:8px;"></textarea>
                <div style="display:flex; justify-content:flex-end; gap:8px;">
                  <button class="btn btn-ghost" style="padding:4px 12px; font-size:12px;" onclick="toggleReplyInput(${t.id})">Cancelar</button>
                  <button class="btn btn-primary" style="padding:4px 12px; font-size:12px;" onclick="submitReply(${c.id}, ${t.id})">Responder</button>
                </div>
              </div>

              <div id="replies-${t.id}">
                ${t.replies ? t.replies.map(r => `
                  <div class="coach-reply">
                    <img src="${c.avatar}" class="comment-avatar">
                    <div class="comment-bubble" style="border-color: rgba(74, 222, 128, 0.2); background: rgba(74, 222, 128, 0.03);">
                      <div class="comment-header">
                        <span class="comment-user" style="color:white;">${c.name} <span class="reply-badge">Coach</span></span>
                        <span class="comment-time">${new Date(r.timestamp).toLocaleDateString()}</span>
                      </div>
                      <div class="comment-text">${r.text}</div>
                    </div>
                  </div>
                `).join('') : ''}
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="comment-input-area">
          ${currentUser ? `
            <textarea class="comment-textarea" id="commentText" placeholder="Escribe tu pregunta para ${c.name}..."></textarea>
            <div style="display:flex; justify-content:flex-end;">
              <button class="btn btn-primary" onclick="submitComment(${c.id})">Enviar pregunta</button>
            </div>
          ` : `
            <div style="text-align:center; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 8px; font-size:13px; color:var(--muted2);">
              Debes <a href="#" onclick="openModal('login')" style="color:var(--accent); text-decoration:none; font-weight:600;">iniciar sesión</a> para dejar una pregunta.
            </div>
          `}
        </div>
      </div>
    </div>
  `;

  // Scroll to bottom
  const container = document.getElementById('commentsList');
  container.scrollTop = container.scrollHeight;
}

/**
 * Submit a new comment/question
 */
function submitComment(coachId) {
  const textarea = document.getElementById('commentText');
  const text = textarea.value.trim();
  if (!text) return;

  const commentsKey = `luxury_comments_${coachId}`;
  const threads = JSON.parse(localStorage.getItem(commentsKey) || '[]');

  const newThread = {
    id: Date.now(),
    userName: currentUser.username || 'Usuario',
    userAvatar: currentUser.avatar || null,
    text: text,
    timestamp: Date.now(),
    replies: []
  };

  threads.push(newThread);
  localStorage.setItem(commentsKey, JSON.stringify(threads));

  // Re-render
  openComments(coachId);
}

/**
 * Toggle visibility of reply input
 */
function toggleReplyInput(commentId) {
  const el = document.getElementById(`reply-input-${commentId}`);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

/**
 * Submit a manual coach reply
 */
function submitReply(coachId, commentId) {
  const textarea = document.getElementById(`replyText-${commentId}`);
  if (!textarea) return;

  const text = textarea.value.trim();
  if (!text) return;

  const commentsKey = `luxury_comments_${coachId}`;
  const threads = JSON.parse(localStorage.getItem(commentsKey) || '[]');
  const threadIndex = threads.findIndex(t => t.id === Number(commentId));

  if (threadIndex !== -1) {
    if (!threads[threadIndex].replies) threads[threadIndex].replies = [];
    threads[threadIndex].replies.push({
      text: text,
      timestamp: Date.now()
    });
    localStorage.setItem(commentsKey, JSON.stringify(threads));
    openComments(coachId);
  }
}

/**
 * Toggle visibility of the review form in the modal
 */
function toggleReviewForm() {
  const form = document.getElementById('reviewForm');
  if (form) form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

/**
 * Initialize star rating interactivity
 */
function initStarRating() {
  const stars = document.querySelectorAll('#starRating span');
  let selectedValue = 0;

  stars.forEach(star => {
    star.addEventListener('mouseover', function () {
      const val = this.getAttribute('data-value');
      stars.forEach(s => {
        if (s.getAttribute('data-value') <= val) s.classList.add('hover');
        else s.classList.remove('hover');
      });
    });

    star.addEventListener('mouseout', function () {
      stars.forEach(s => s.classList.remove('hover'));
    });

    star.addEventListener('click', function () {
      selectedValue = this.getAttribute('data-value');
      stars.forEach(s => {
        if (s.getAttribute('data-value') <= selectedValue) s.classList.add('active');
        else s.classList.remove('active');
      });
      document.getElementById('starRating').setAttribute('data-selected', selectedValue);
    });
  });
}

/**
 * Submit a new review for a coach
 */
function submitReview(coachId) {
  const ratingEl = document.getElementById('starRating');
  const textEl = document.getElementById('reviewText');
  const rating = parseInt(ratingEl?.getAttribute('data-selected') || '0');
  const text = textEl?.value.trim();

  if (rating === 0) {
    alert('Por favor, selecciona una calificación.');
    return;
  }
  if (!text) {
    alert('Por favor, escribe un comentario.');
    return;
  }

  const coach = ALL_COACHES.find(c => c.id === Number(coachId));
  if (!coach) return;

  if (!coach.reviewsList) coach.reviewsList = [];

  // Add new review
  coach.reviewsList.unshift({
    user: currentUser.username || 'Usuario',
    rating: rating,
    text: text,
    timestamp: Date.now()
  });

  // Recalculate average rating
  const totalRating = coach.reviewsList.reduce((acc, r) => acc + r.rating, 0);
  coach.rating = parseFloat((totalRating / coach.reviewsList.length).toFixed(1));
  coach.reviews = coach.reviewsList.length;

  // Save to localStorage
  saveCoachData(coach);

  // Re-render and notification
  openCoachModal(coachId);
  renderCoaches();

  const toast = document.createElement('div');
  toast.className = 'auth-toast';
  toast.innerText = '¡Reseña publicada con éxito!';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/**
 * Delete a review (Admin only)
 */
function deleteReview(coachId, reviewIdx) {
  if (!isAdmin()) return;
  if (!confirm('¿Estás seguro de que deseas eliminar esta reseña?')) return;

  const coach = ALL_COACHES.find(c => c.id === Number(coachId));
  if (!coach) return;

  coach.reviewsList.splice(reviewIdx, 1);

  // Recalculate average rating
  if (coach.reviewsList.length > 0) {
    const totalRating = coach.reviewsList.reduce((acc, r) => acc + r.rating, 0);
    coach.rating = parseFloat((totalRating / coach.reviewsList.length).toFixed(1));
  } else {
    coach.rating = 0;
  }
  coach.reviews = coach.reviewsList.length;

  saveCoachData(coach);
  openCoachModal(coachId);
  renderCoaches();
}

/**
 * Edit a review (Admin only)
 */
function editReview(coachId, reviewIdx) {
  if (!isAdmin()) return;

  const coach = ALL_COACHES.find(c => c.id === Number(coachId));
  if (!coach) return;

  const review = coach.reviewsList[reviewIdx];
  const newText = prompt('Editar reseña:', review.text);

  if (newText !== null && newText.trim() !== '') {
    review.text = newText.trim();
    saveCoachData(coach);
    openCoachModal(coachId);
  }
}

/**
 * Helper to save coach data to localStorage
 */
function saveCoachData(updatedCoach) {
  let stored = JSON.parse(localStorage.getItem('luxury_coaches') || '[]');
  const idx = stored.findIndex(c => c.id === updatedCoach.id);

  if (idx !== -1) stored[idx] = updatedCoach;
  else stored.push(updatedCoach);

  localStorage.setItem('luxury_coaches', JSON.stringify(stored));
}

/**
 * Delete a specific comment/thread (for Q&A section)
 */
function deleteComment(coachId, commentId) {
  if (!confirm('¿Seguro que quieres eliminar esta pregunta?')) return;

  const commentsKey = `luxury_comments_${coachId}`;
  let threads = JSON.parse(localStorage.getItem(commentsKey) || '[]');
  threads = threads.filter(t => t.id !== Number(commentId));

  localStorage.setItem(commentsKey, JSON.stringify(threads));
  openComments(coachId);
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

/**
 * Hero Image Slideshow — rotates every 5 seconds with CSS fade
 */
const HERO_IMAGES = [
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg',
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aurora_0.jpg',
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg',
];

function initHeroSlideshow() {
  const img = document.getElementById('heroImg');
  const cards = document.querySelectorAll('.float-card');
  if (!img) return;

  // Preload all images silently
  HERO_IMAGES.forEach(src => {
    const preload = new Image();
    preload.src = src;
  });

  let idx = 0;

  setInterval(() => {
    idx = (idx + 1) % HERO_IMAGES.length;
    // Fade out everything
    img.style.opacity = '0';
    cards.forEach(c => c.style.opacity = '0');

    // After transition, swap src and fade back in
    setTimeout(() => {
      img.src = HERO_IMAGES[idx];
      img.style.opacity = '1';
      cards.forEach(c => c.style.opacity = '1');
    }, 700);
  }, 10000);
}

/**
 * Typewriter Effect for Hero Title
 */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const words = ["SUBE TU ELO", "SE EL MEJOR"];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 150;

  function type() {
    const currentWord = words[wordIdx];

    if (isDeleting) {
      charIdx--;
      typeSpeed = 100;
    } else {
      charIdx++;
      typeSpeed = 150;
    }

    // Use slice to avoid partial character issues with multi-byte chars (though É is usually fine)
    el.textContent = currentWord.substring(0, charIdx);

    if (!isDeleting && charIdx === currentWord.length) {
      isDeleting = true;
      typeSpeed = 3000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  // Initial delay
  setTimeout(type, 1000);
}

/**
 * Navigate to Coachings page with a smooth loading effect
 */
function navToCoachings() {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    loader.classList.add('active');
    setTimeout(() => {
      window.location.href = 'coachings.html';
    }, 800);
  } else {
    window.location.href = 'coachings.html';
  }
}
window.navToCoachings = navToCoachings;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Hide page loader if active (coming from another page)
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => {
      loader.classList.remove('active');
    }, 500);
  }

  initIntro();
  initNavScroll();
  initParticles();
  initHeroSlideshow();
  initTypewriter();
  initRevealAnimations();
  initGoogleAuth();
  updateNavigationUI();
  renderCoaches();
});
