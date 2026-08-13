// Popola la home page con l'elenco dei campionati disponibili.

const LEAGUES = [
  { id: 'serie-a', nome: 'Serie A', bandiera: '🇮🇹' },
  { id: 'bundesliga', nome: 'Bundesliga', bandiera: '🇩🇪' },
  { id: 'ligue-1', nome: 'Ligue 1', bandiera: '🇫🇷' },
  { id: 'laliga', nome: 'LaLiga', bandiera: '🇪🇸' },
  { id: 'premier-league', nome: 'Premier League', bandiera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }
];

function renderLeagues() {
  const list = document.getElementById('leagues-list');
  list.innerHTML = '';

  LEAGUES.forEach(league => {
    const link = document.createElement('a');
    link.className = 'league-item';
    link.href = `campionato.html?id=${encodeURIComponent(league.id)}`;

    const flag = document.createElement('span');
    flag.className = 'league-flag';
    flag.textContent = league.bandiera;

    const name = document.createElement('span');
    name.className = 'league-name';
    name.textContent = league.nome;

    link.appendChild(flag);
    link.appendChild(name);
    list.appendChild(link);
  });
}

renderLeagues();
