// Popola la pagina di dettaglio partita in base al parametro ?id= nell'URL.

function getMatchIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderTeamCard(containerId, team) {
  const card = document.getElementById(containerId);
  const s = team.stats;

  card.querySelector('.team-name').textContent = team.nome;
  card.querySelector('[data-stat="posizione"]').textContent = `${s.posizione}ª`;
  card.querySelector('[data-stat="giocate"]').textContent = s.giocate;
  card.querySelector('[data-stat="vittorie"]').textContent = s.vittorie;
  card.querySelector('[data-stat="pareggi"]').textContent = s.pareggi;
  card.querySelector('[data-stat="sconfitte"]').textContent = s.sconfitte;
  card.querySelector('[data-stat="gol-fatti"]').textContent = s.golFatti;
  card.querySelector('[data-stat="gol-subiti"]').textContent = s.golSubiti;
}

function renderPick(match) {
  const pickSection = document.getElementById('pick-section');

  if (match.pronostico) {
    pickSection.innerHTML = `
      <div class="pick-card">
        <div class="pick-label">Greenpicked</div>
        <div class="pick-outcome">${match.pronostico.esito} — ${match.pronostico.etichetta}</div>
        <p class="pick-note">${match.pronostico.nota}</p>
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

  document.title = `${match.home.nome} — ${match.away.nome} · GreenPick`;
  document.getElementById('match-title').textContent = `${match.home.nome} — ${match.away.nome}`;
  document.getElementById('match-meta').textContent = `${match.data} · ${match.stadio}`;

  renderPick(match);
  renderTeamCard('home-team-card', match.home);
  renderTeamCard('away-team-card', match.away);
}

renderMatch();
