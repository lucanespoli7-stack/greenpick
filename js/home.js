// Popola la home page con la lista delle partite di giornata, usando i dati in data.js.

function renderScoreboard() {
  const withPick = MATCHES.filter(m => m.pronostico).length;
  document.getElementById('sb-greenpicked').textContent = `${withPick}/${MATCHES.length}`;
  document.getElementById('sb-scorsa').textContent = GIORNATA.scorsaGiornataEsito;
}

function renderSectionHead() {
  document.getElementById('section-title').textContent = `Tutte le partite di giornata ${GIORNATA.numero}`;
  document.getElementById('section-tag').textContent = GIORNATA.campionato;
  document.getElementById('eyebrow').textContent = `Giornata ${GIORNATA.numero} · ${GIORNATA.campionato}`;
}

function renderMatches() {
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

renderSectionHead();
renderScoreboard();
renderMatches();
