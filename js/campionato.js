// Popola la pagina di un campionato in base al parametro ?id= nell'URL.
// Serie A mostra classifica + partite di giornata; gli altri campionati
// mostrano un messaggio "presto disponibile".

function getLeagueIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function buildClassifica() {
  const teams = new Map();

  MATCHES.forEach(match => {
    [match.home, match.away].forEach(team => {
      if (!teams.has(team.nome)) {
        teams.set(team.nome, team.stats);
      }
    });
  });

  return Array.from(teams, ([nome, stats]) => ({ nome, ...stats }))
    .sort((a, b) => a.posizione - b.posizione);
}

function renderClassifica() {
  const body = document.getElementById('classifica-body');
  body.innerHTML = '';

  buildClassifica().forEach(team => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${team.posizione}</td>
      <td class="team">${team.nome}</td>
      <td>${team.giocate}</td>
      <td>${team.vittorie}</td>
      <td>${team.pareggi}</td>
      <td>${team.sconfitte}</td>
      <td>${team.golFatti}</td>
      <td>${team.golSubiti}</td>
    `;
    body.appendChild(row);
  });
}

function renderMatches() {
  document.getElementById('matches-title').textContent = `Tutte le partite di giornata ${GIORNATA.numero}`;
  document.getElementById('matches-tag').textContent = GIORNATA.campionato;
  document.getElementById('classifica-tag').textContent = GIORNATA.campionato;

  const list = document.getElementById('match-list');
  list.innerHTML = '';

  MATCHES.forEach(match => {
    const link = document.createElement('a');
    link.className = match.pronostico ? 'ticket ticket--picked' : 'ticket';
    link.href = `partita.html?id=${encodeURIComponent(match.id)}`;

    const matchInfo = document.createElement('div');
    matchInfo.className = 'match';

    const teams = document.createElement('div');
    teams.className = 'teams';
    teams.textContent = `${match.home.nome} — ${match.away.nome}`;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${match.data} · ${match.stadio}`;

    matchInfo.appendChild(teams);
    matchInfo.appendChild(meta);
    link.appendChild(matchInfo);

    if (match.pronostico) {
      const badge = document.createElement('span');
      badge.className = 'greenpicked-btn';
      badge.textContent = 'Greenpicked →';
      link.appendChild(badge);
    }

    list.appendChild(link);
  });
}

function renderComingSoon(league) {
  document.getElementById('classifica-section').style.display = 'none';
  document.getElementById('matches-section').style.display = 'none';
  document.getElementById('coming-soon-section').style.display = '';

  document.getElementById('coming-soon-text').textContent =
    `Le analisi su ${league.nome} arriveranno a breve con l'abbonamento GreenPick PRO. Nel frattempo, la Serie A resta gratuita e aggiornata ogni giornata.`;
}

function renderPage() {
  const id = getLeagueIdFromUrl();
  const league = LEAGUES.find(l => l.id === id);

  if (!league) {
    document.getElementById('league-title').textContent = 'Campionato non trovato';
    document.getElementById('classifica-section').style.display = 'none';
    document.getElementById('matches-section').style.display = 'none';
    document.getElementById('coming-soon-section').style.display = 'none';
    return;
  }

  document.title = `${league.nome} · GreenPick`;
  document.getElementById('league-title').textContent = league.nome;

  if (league.attivo) {
    document.getElementById('league-sub').textContent = `Giornata ${GIORNATA.numero} · ${GIORNATA.campionato}`;
    renderClassifica();
    renderMatches();
  } else {
    document.getElementById('league-sub').textContent = '';
    renderComingSoon(league);
  }
}

renderPage();
