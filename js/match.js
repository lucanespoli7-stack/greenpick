// Popola la pagina di dettaglio partita in base al parametro ?id= nell'URL.

function getMatchIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderTeamCard(containerId, teamName) {
  const card = document.getElementById(containerId);
  const posizione = CLASSIFICA.findIndex(t => t.nome === teamName) + 1;
  const s = CLASSIFICA.find(t => t.nome === teamName);

  card.querySelector('.team-name').textContent = teamName;
  card.querySelector('[data-stat="posizione"]').textContent = `${posizione}ª`;
  card.querySelector('[data-stat="giocate"]').textContent = s.pg;
  card.querySelector('[data-stat="vittorie"]').textContent = s.v;
  card.querySelector('[data-stat="pareggi"]').textContent = s.n;
  card.querySelector('[data-stat="sconfitte"]').textContent = s.p;
  card.querySelector('[data-stat="gol-fatti"]').textContent = s.gf;
  card.querySelector('[data-stat="gol-subiti"]').textContent = s.gs;
}

function formatQuota(quota) {
  return quota.toFixed(2).replace('.', ',');
}

function renderPick(match) {
  const pickSection = document.getElementById('pick-section');

  if (match.pronostico) {
    const punti = match.pronostico.analisi.map(punto => `<li>${punto}</li>`).join('');
    pickSection.innerHTML = `
      <div class="pick-card">
        <div class="pick-label">Greenpicked</div>
        <div class="pick-outcome-row">
          <div class="pick-outcome">${match.pronostico.esito}</div>
          <div class="pick-quota">Quota ${formatQuota(match.pronostico.quota)}</div>
        </div>
        <ul class="pick-list">${punti}</ul>
      </div>
    `;
  } else {
    pickSection.innerHTML = `
      <div class="no-pick-card">
        Pronostico non ancora disponibile per questa partita.
      </div>
    `;
  }
}

function renderMatch() {
  const id = getMatchIdFromUrl();
  const match = MATCHES.find(m => m.id === id);

  if (!match) {
    document.getElementById('match-title').textContent = 'Partita non trovata';
    document.getElementById('match-meta').textContent = '';
    document.getElementById('pick-section').innerHTML = '';
    document.getElementById('stats-section').style.display = 'none';
    return;
  }

  document.title = `${match.home} — ${match.away} · GreenPick`;
  document.getElementById('match-title').textContent = `${match.home} — ${match.away}`;
  document.getElementById('match-meta').textContent = `${formatMatchDate(match.dataOra)} · ${match.stadio}`;

  renderPick(match);
  renderTeamCard('home-team-card', match.home);
  renderTeamCard('away-team-card', match.away);
}

renderMatch();
