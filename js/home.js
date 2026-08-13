// Popola la home page con l'elenco dei campionati disponibili.

function renderLeagues() {
  const list = document.getElementById('leagues-list');
  list.innerHTML = '';

  LEAGUES.forEach(league => {
    const link = document.createElement('a');
    link.className = 'league-item';
    link.href = `campionato.html?id=${encodeURIComponent(league.id)}`;

    const flag = document.createElement('span');
    flag.className = 'league-flag';
    flag.innerHTML = league.bandieraSvg;

    const name = document.createElement('span');
    name.className = 'league-name';
    name.textContent = league.nome;

    link.appendChild(flag);
    link.appendChild(name);
    list.appendChild(link);
  });
}

renderLeagues();
