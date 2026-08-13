// Popola la pagina di un campionato in base al parametro ?id= nell'URL,
// leggendo classifica e partite da LEAGUE_DATA[id] (js/data.js).
// Ogni campionato mostra sempre classifica e calendario; se il campionato
// non è ancora attivo (js/leagues.js), le partite non hanno pronostico e
// al posto del bottone "Greenpicked" compare un'etichetta "Coming soon PRO".

function getLeagueIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderClassifica(classifica, campionatoNome) {
  document.getElementById('classifica-tag').textContent = campionatoNome;

  const body = document.getElementById('classifica-body');
  body.innerHTML = '';

  classifica.forEach((team, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i + 1}</td>
      <td class="team">${team.nome}</td>
      <td>${team.pg}</td>
      <td>${team.v}</td>
      <td>${team.n}</td>
      <td>${team.p}</td>
      <td>${team.gf}</td>
      <td>${team.gs}</td>
      <td>${team.dr}</td>
      <td>${team.pt}</td>
    `;
    body.appendChild(row);
  });
}

function renderMatches(matches, giornataNumero, isActive) {
  document.getElementById('matches-title').textContent = t('matchesTitle')(giornataNumero);

  const list = document.getElementById('match-list');
  list.innerHTML = '';

  matches.forEach(match => {
    const link = document.createElement('a');
    link.className = match.pronostico ? 'ticket ticket--picked' : 'ticket';
    link.href = `partita.html?id=${encodeURIComponent(match.id)}`;

    const matchInfo = document.createElement('div');
    matchInfo.className = 'match';

    const teams = document.createElement('div');
    teams.className = 'teams';
    teams.textContent = `${match.home} — ${match.away}`;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${formatMatchDate(match.dataOra)} · ${match.stadio}`;

    matchInfo.appendChild(teams);
    matchInfo.appendChild(meta);
    link.appendChild(matchInfo);

    if (match.pronostico) {
      const actions = document.createElement('div');
      actions.className = 'ticket-actions';

      const badge = document.createElement('span');
      badge.className = 'greenpicked-btn';
      badge.textContent = 'Greenpicked →';
      actions.appendChild(badge);

      const addBtn = document.createElement('button');
      addBtn.type = 'button';
      addBtn.className = 'schedina-add-btn';
      addBtn.dataset.schedinaAdd = match.id;
      addBtn.textContent = t('schedinaAddBtn');
      actions.appendChild(addBtn);

      link.appendChild(actions);
    } else if (!isActive) {
      const proTag = document.createElement('span');
      proTag.className = 'pro-tag';
      proTag.textContent = t('proTag');
      link.appendChild(proTag);
    }

    list.appendChild(link);
  });
}

function renderNotFound() {
  document.getElementById('league-title').textContent = t('leagueNotFound');
  document.getElementById('league-sub').textContent = '';
  document.getElementById('classifica-section').style.display = 'none';
  document.getElementById('matches-section').style.display = 'none';
  document.getElementById('coming-soon-section').style.display = 'none';
}

function renderPage() {
  const id = getLeagueIdFromUrl();
  const league = LEAGUES.find(l => l.id === id);
  const data = LEAGUE_DATA[id];

  if (!league || !data) {
    renderNotFound();
    return;
  }

  document.title = `${league.nome} · GreenPick`;
  document.getElementById('league-title').textContent = league.nome;
  document.getElementById('league-sub').textContent = t('matchdayLabel')(data.giornata.numero, data.giornata.campionato);

  renderClassifica(data.classifica, data.giornata.campionato);
  renderMatches(data.matches, data.giornata.numero, league.attivo);
}

renderPage();
window.onLangChange = renderPage;
