// Popola la home page con l'elenco dei campionati disponibili.

function stripeFlagSvg(clipId, colors, direction) {
  const bands = colors.map((color, i) => {
    return direction === 'v'
      ? `<rect x="${i * 8}" y="0" width="8" height="24" fill="${color}"/>`
      : `<rect x="0" y="${i * 8}" width="24" height="8" fill="${color}"/>`;
  }).join('');

  return `
    <svg viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true">
      <clipPath id="${clipId}"><circle cx="12" cy="12" r="12"/></clipPath>
      <g clip-path="url(#${clipId})">${bands}</g>
      <circle cx="12" cy="12" r="11.25" fill="none" stroke="#D9E3DC" stroke-width="1.5"/>
    </svg>
  `;
}

function englandFlagSvg(clipId) {
  return `
    <svg viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true">
      <clipPath id="${clipId}"><circle cx="12" cy="12" r="12"/></clipPath>
      <g clip-path="url(#${clipId})">
        <rect x="0" y="0" width="24" height="24" fill="#FFFFFF"/>
        <rect x="9.5" y="0" width="5" height="24" fill="#CE1124"/>
        <rect x="0" y="9.5" width="24" height="5" fill="#CE1124"/>
      </g>
      <circle cx="12" cy="12" r="11.25" fill="none" stroke="#D9E3DC" stroke-width="1.5"/>
    </svg>
  `;
}

const LEAGUES = [
  { id: 'serie-a', nome: 'Serie A', bandieraSvg: stripeFlagSvg('clip-serie-a', ['#009246', '#FFFFFF', '#CE2B37'], 'v') },
  { id: 'bundesliga', nome: 'Bundesliga', bandieraSvg: stripeFlagSvg('clip-bundesliga', ['#000000', '#DD0000', '#FFCE00'], 'h') },
  { id: 'ligue-1', nome: 'Ligue 1', bandieraSvg: stripeFlagSvg('clip-ligue-1', ['#0055A4', '#FFFFFF', '#EF4135'], 'v') },
  { id: 'laliga', nome: 'LaLiga', bandieraSvg: stripeFlagSvg('clip-laliga', ['#AA151B', '#F1BF00', '#AA151B'], 'h') },
  { id: 'premier-league', nome: 'Premier League', bandieraSvg: englandFlagSvg('clip-premier-league') }
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
