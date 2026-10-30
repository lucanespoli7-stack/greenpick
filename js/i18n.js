// Sistema di traduzione IT/EN condiviso da tutte le pagine.
// La lingua scelta viene salvata in localStorage e riapplicata ad ogni
// pagina senza ricaricare o cambiare URL.

const LANG_KEY = 'greenpick-lang';

const STRINGS = {
  it: {
    heroTitle: 'Analisi, non scommesse. Segui il verde.',
    heroSubtitle: 'Analisi sui maggiori campionati europei, aggiornate ogni giornata. Semplici, chiare, verificabili.',
    backToLeagues: '← Tutti i campionati',
    backToMatches: '← Tutte le partite',
    standingsLink: 'Classifica →',
    standingsHeading: 'Classifica',
    matchesTitle: n => `Tutte le partite di giornata ${n}`,
    matchdayLabel: (n, league) => `Giornata ${n} · ${league}`,
    colTeam: 'Squadra',
    colPG: 'PG',
    colV: 'V',
    colN: 'N',
    colP: 'P',
    colGF: 'GF',
    colGS: 'GS',
    colDR: 'DR',
    colPt: 'Pt',
    comingSoonEyebrow: 'GreenPick PRO',
    comingSoonTitle: 'Presto disponibile',
    comingSoonText: league => `Le analisi su ${league} arriveranno a breve con l'abbonamento GreenPick PRO. Nel frattempo, la Serie A resta gratuita e aggiornata ogni giornata.`,
    proTag: 'Coming soon PRO',
    leagueNotFound: 'Campionato non trovato',
    matchNotFound: 'Partita non trovata',
    statsHeading: 'Statistiche a confronto',
    statsTag: 'Giornata in corso',
    statPosition: 'Posizione in classifica',
    statPlayed: 'Partite giocate',
    statWins: 'Vittorie',
    statDraws: 'Pareggi',
    statLosses: 'Sconfitte',
    statGF: 'Gol fatti',
    statGA: 'Gol subiti',
    quotaLabel: 'Quota',
    noPickText: 'Pronostico non ancora disponibile per questa partita.',
    footer: 'GreenPick © 2026',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    schedinaTab: (n, moltiplicatore) => `${n} giocate · x${moltiplicatore}`,
    schedinaTitle: 'La tua schedina',
    schedinaEmpty: 'Nessuna giocata selezionata.',
    schedinaMultiplier: 'Moltiplicatore totale',
    schedinaStakeLabel: 'Puntata (€)',
    schedinaPotentialWin: 'Vincita potenziale',
    schedinaClear: 'Svuota schedina',
    schedinaAddBtn: '+ Aggiungi',
    schedinaAddedBtn: '✓ Aggiunta',
    schedinaBonusNote: "Alcuni bookmaker applicano bonus o maggiorazioni sulle multiple (es. bonus multipla, assicurazione sulla prima giocata). GreenPick non include questi bonus: il moltiplicatore mostrato è il prodotto delle quote selezionate, senza alcuna maggiorazione."
  },
  en: {
    heroTitle: 'Analysis, not betting. Follow the green.',
    heroSubtitle: "Analysis on Europe's top leagues, updated every matchday. Simple, clear, verifiable.",
    backToLeagues: '← All leagues',
    backToMatches: '← All matches',
    standingsLink: 'Standings →',
    standingsHeading: 'Standings',
    matchesTitle: n => `All matchday ${n} fixtures`,
    matchdayLabel: (n, league) => `Matchday ${n} · ${league}`,
    colTeam: 'Team',
    colPG: 'P',
    colV: 'W',
    colN: 'D',
    colP: 'L',
    colGF: 'GF',
    colGS: 'GA',
    colDR: 'GD',
    colPt: 'Pts',
    comingSoonEyebrow: 'GreenPick PRO',
    comingSoonTitle: 'Coming soon',
    comingSoonText: league => `Analysis for ${league} is coming soon with a GreenPick PRO subscription. In the meantime, Serie A stays free and updated every matchday.`,
    proTag: 'Coming soon PRO',
    leagueNotFound: 'League not found',
    matchNotFound: 'Match not found',
    statsHeading: 'Head-to-head stats',
    statsTag: 'Current matchday',
    statPosition: 'League position',
    statPlayed: 'Matches played',
    statWins: 'Wins',
    statDraws: 'Draws',
    statLosses: 'Losses',
    statGF: 'Goals for',
    statGA: 'Goals against',
    quotaLabel: 'Odds',
    noPickText: 'Prediction not yet available for this match.',
    footer: 'GreenPick © 2026',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    schedinaTab: (n, moltiplicatore) => `${n} picks · x${moltiplicatore}`,
    schedinaTitle: 'Your bet slip',
    schedinaEmpty: 'No picks selected.',
    schedinaMultiplier: 'Total odds',
    schedinaStakeLabel: 'Stake (€)',
    schedinaPotentialWin: 'Potential payout',
    schedinaClear: 'Clear slip',
    schedinaAddBtn: '+ Add',
    schedinaAddedBtn: '✓ Added',
    schedinaBonusNote: 'Some bookmakers apply bonuses or boosts on accumulators (e.g. multiple bet bonus, first-pick insurance). GreenPick does not include any such bonus: the multiplier shown is simply the product of the selected odds, with no boost applied.'
  }
};

function getLang() {
  return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'it';
}

function t(key) {
  return STRINGS[getLang()][key];
}

// Ordinale per la posizione in classifica: "11ª" (it) / "11th" (en).
function formatOrdinal(n) {
  if (getLang() !== 'en') return `${n}ª`;
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Traduce ogni elemento statico marcato con data-i18n="chiave".
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

function renderLangToggle() {
  const el = document.getElementById('lang-toggle');
  if (!el) return;
  const lang = getLang();

  // Bandiere tonde SVG inline (stessa tecnica delle bandiere dei campionati in leagues.js).
  const ring = 'fill="none" style="stroke:var(--line)"';
  const flagIt = `
    <svg class="lang-flag" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <clipPath id="lang-clip-it"><circle cx="12" cy="12" r="12"/></clipPath>
      <g clip-path="url(#lang-clip-it)">
        <rect x="0" y="0" width="8" height="24" fill="#009246"/>
        <rect x="8" y="0" width="8" height="24" fill="#FFFFFF"/>
        <rect x="16" y="0" width="8" height="24" fill="#CE2B37"/>
      </g>
      <circle cx="12" cy="12" r="11.25" ${ring} stroke-width="1.5"/>
    </svg>`;
  const flagEn = `
    <svg class="lang-flag" viewBox="15 0 30 30" width="20" height="20" aria-hidden="true" focusable="false">
      <clipPath id="lang-clip-en"><circle cx="30" cy="15" r="15"/></clipPath>
      <g clip-path="url(#lang-clip-en)">
        <rect x="0" y="0" width="60" height="30" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2"/>
        <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" stroke-width="10"/>
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/>
      </g>
      <circle cx="30" cy="15" r="14.06" ${ring} stroke-width="1.875"/>
    </svg>`;

  el.setAttribute('role', 'group');
  el.setAttribute('aria-label', 'Lingua / Language');
  el.innerHTML = `
    <button type="button" class="lang-btn${lang === 'it' ? ' active' : ''}" data-lang="it" aria-label="Italiano" aria-pressed="${lang === 'it'}">${flagIt}<span class="lang-code">IT</span></button>
    <button type="button" class="lang-btn${lang === 'en' ? ' active' : ''}" data-lang="en" aria-label="English" aria-pressed="${lang === 'en'}">${flagEn}<span class="lang-code">EN</span></button>
  `;

  el.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  renderLangToggle();
  applyStaticTranslations();
  if (typeof onLangChange === 'function') onLangChange();
}

document.documentElement.lang = getLang();
renderLangToggle();
applyStaticTranslations();
