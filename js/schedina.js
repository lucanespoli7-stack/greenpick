// Pannello "schedina": simulatore di calcolo (moltiplicatore + vincita
// potenziale) sui pronostici selezionati dall'utente. Nessun collegamento a
// siti scommesse esterni: solo calcolo, salvato in localStorage per id
// partita così resta sempre sincronizzato con js/data.js.

const SCHEDINA_KEY = 'greenpick-schedina';
const SCHEDINA_STAKE_KEY = 'greenpick-schedina-stake';

let schedinaOpen = false;

function getSchedina() {
  try {
    const raw = localStorage.getItem(SCHEDINA_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveSchedina(ids) {
  localStorage.setItem(SCHEDINA_KEY, JSON.stringify(ids));
}

function getSchedinaStake() {
  const raw = localStorage.getItem(SCHEDINA_STAKE_KEY);
  const value = raw ? parseFloat(raw) : 0;
  return Number.isFinite(value) ? value : 0;
}

function saveSchedinaStake(value) {
  localStorage.setItem(SCHEDINA_STAKE_KEY, String(value));
}

function toggleSchedina(matchId) {
  const ids = getSchedina();
  const idx = ids.indexOf(matchId);

  if (idx === -1) {
    ids.push(matchId);
  } else {
    ids.splice(idx, 1);
  }

  saveSchedina(ids);
  renderSchedinaPanel();
  attachAddButtons();
}

function calcolaMoltiplicatore(ids) {
  if (!ids.length) return 0;

  return ids.reduce((acc, id) => {
    const match = MATCHES.find(m => m.id === id);
    if (!match || !match.pronostico) return acc;
    return acc * match.pronostico.quota;
  }, 1);
}

function formatSchedinaNumber(n) {
  return n.toFixed(2).replace('.', ',');
}

function renderSchedinaPanel() {
  let panel = document.getElementById('schedina-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'schedina-panel';
    document.body.appendChild(panel);
  }

  const ids = getSchedina();
  const moltiplicatore = calcolaMoltiplicatore(ids);
  const stake = getSchedinaStake();
  const vincita = stake * moltiplicatore;

  panel.className = `schedina-panel${schedinaOpen ? ' open' : ''}${ids.length ? ' has-items' : ''}`;

  const rows = ids.map(id => {
    const match = MATCHES.find(m => m.id === id);
    if (!match || !match.pronostico) return '';
    return `
      <li class="schedina-row">
        <div>
          <div class="schedina-row-teams">${match.home} — ${match.away}</div>
          <div class="schedina-row-pick">${match.pronostico.esito} · x${formatSchedinaNumber(match.pronostico.quota)}</div>
        </div>
        <button type="button" class="schedina-remove" data-remove-id="${match.id}" aria-label="×">×</button>
      </li>
    `;
  }).join('');

  panel.innerHTML = `
    <button type="button" class="schedina-tab" id="schedina-tab">${t('schedinaTab')(ids.length, formatSchedinaNumber(moltiplicatore))}</button>
    <div class="schedina-panel-inner">
      <div class="schedina-header">
        <h3>${t('schedinaTitle')}</h3>
        <button type="button" class="schedina-close" id="schedina-close" aria-label="close">×</button>
      </div>

      ${ids.length
        ? `<ul class="schedina-list">${rows}</ul>`
        : `<p class="schedina-empty">${t('schedinaEmpty')}</p>`}

      <div class="schedina-summary-row">
        <span>${t('schedinaMultiplier')}</span>
        <span class="schedina-multiplier-value">x${formatSchedinaNumber(moltiplicatore)}</span>
      </div>

      <label class="schedina-stake-label">
        ${t('schedinaStakeLabel')}
        <input type="number" min="0" step="1" inputmode="decimal" id="schedina-stake-input" class="schedina-stake-input" value="${stake || ''}">
      </label>

      <div class="schedina-summary-row schedina-win-row">
        <span>${t('schedinaPotentialWin')}</span>
        <span class="schedina-win-value">€ ${formatSchedinaNumber(vincita)}</span>
      </div>

      <p class="schedina-bonus-note">${t('schedinaBonusNote')}</p>

      <button type="button" class="schedina-clear" id="schedina-clear">${t('schedinaClear')}</button>
    </div>
  `;

  document.getElementById('schedina-tab').addEventListener('click', () => {
    schedinaOpen = true;
    renderSchedinaPanel();
  });

  document.getElementById('schedina-close').addEventListener('click', () => {
    schedinaOpen = false;
    renderSchedinaPanel();
  });

  document.getElementById('schedina-clear').addEventListener('click', () => {
    saveSchedina([]);
    renderSchedinaPanel();
    attachAddButtons();
  });

  document.getElementById('schedina-stake-input').addEventListener('input', e => {
    const value = e.target.value;
    saveSchedinaStake(value);
    const newStake = parseFloat(value) || 0;
    panel.querySelector('.schedina-win-value').textContent =
      `€ ${formatSchedinaNumber(newStake * moltiplicatore)}`;
  });

  panel.querySelectorAll('.schedina-remove').forEach(btn => {
    btn.addEventListener('click', () => toggleSchedina(btn.dataset.removeId));
  });
}

function attachAddButtons() {
  const ids = getSchedina();

  document.querySelectorAll('[data-schedina-add]').forEach(el => {
    const matchId = el.dataset.schedinaAdd;
    const added = ids.includes(matchId);

    if (el.classList.contains('schedina-add-btn')) {
      el.textContent = added ? t('schedinaAddedBtn') : t('schedinaAddBtn');
      el.classList.toggle('schedina-add-btn--added', added);
    } else if (el.classList.contains('pick-quota')) {
      el.classList.toggle('pick-quota--added', added);
    }

    el.onclick = e => {
      e.preventDefault();
      e.stopPropagation();
      toggleSchedina(matchId);
    };
  });
}

renderSchedinaPanel();
attachAddButtons();

const previousOnLangChange = window.onLangChange;
window.onLangChange = function () {
  if (typeof previousOnLangChange === 'function') previousOnLangChange();
  renderSchedinaPanel();
  attachAddButtons();
};
