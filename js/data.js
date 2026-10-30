// Dati di esempio per GreenPick — Giornata 10, Serie A 2026/27.
// Formato pensato per essere lo stesso per tutti i campionati:
// CLASSIFICA (tabella squadre) e MATCHES (calendario/pronostici) sono
// due elenchi indipendenti, così un giorno potranno arrivare da fonti
// dati reali separate senza cambiare la logica di rendering.

const GIORNATA = {
  numero: 10,
  campionato: 'Serie A'
};

// Colonne: #, Squadra, PG, V, N, P, GF, GS, DR, Pt
const CLASSIFICA = [
  { nome: 'Inter', pg: 9, v: 8, n: 1, p: 0, gf: 25, gs: 10, dr: 15, pt: 25 },
  { nome: 'Lazio', pg: 9, v: 8, n: 1, p: 0, gf: 22, gs: 7, dr: 15, pt: 25 },
  { nome: 'Roma', pg: 9, v: 6, n: 3, p: 0, gf: 23, gs: 8, dr: 15, pt: 21 },
  { nome: 'Como', pg: 9, v: 6, n: 2, p: 1, gf: 17, gs: 8, dr: 9, pt: 20 },
  { nome: 'Milan', pg: 9, v: 5, n: 3, p: 1, gf: 18, gs: 11, dr: 7, pt: 18 },
  { nome: 'Frosinone', pg: 9, v: 5, n: 2, p: 2, gf: 22, gs: 14, dr: 8, pt: 17 },
  { nome: 'Napoli', pg: 9, v: 4, n: 2, p: 3, gf: 17, gs: 11, dr: 6, pt: 14 },
  { nome: 'Juventus', pg: 9, v: 4, n: 2, p: 3, gf: 11, gs: 10, dr: 1, pt: 14 },
  { nome: 'Torino', pg: 9, v: 4, n: 1, p: 4, gf: 14, gs: 14, dr: 0, pt: 13 },
  { nome: 'Cagliari', pg: 9, v: 4, n: 1, p: 4, gf: 8, gs: 13, dr: -5, pt: 13 },
  { nome: 'Bologna', pg: 9, v: 3, n: 2, p: 4, gf: 12, gs: 12, dr: 0, pt: 11 },
  { nome: 'Atalanta', pg: 9, v: 3, n: 2, p: 4, gf: 16, gs: 17, dr: -1, pt: 11 },
  { nome: 'Genoa', pg: 9, v: 3, n: 1, p: 5, gf: 8, gs: 13, dr: -5, pt: 10 },
  { nome: 'Lecce', pg: 9, v: 3, n: 0, p: 6, gf: 10, gs: 19, dr: -9, pt: 9 },
  { nome: 'Sassuolo', pg: 9, v: 2, n: 2, p: 5, gf: 14, gs: 22, dr: -8, pt: 8 },
  { nome: 'Monza', pg: 9, v: 2, n: 1, p: 6, gf: 16, gs: 22, dr: -6, pt: 7 },
  { nome: 'Udinese', pg: 9, v: 1, n: 2, p: 6, gf: 9, gs: 18, dr: -9, pt: 5 },
  { nome: 'Fiorentina', pg: 9, v: 1, n: 2, p: 6, gf: 11, gs: 21, dr: -10, pt: 5 },
  { nome: 'Parma', pg: 9, v: 1, n: 2, p: 6, gf: 5, gs: 15, dr: -10, pt: 5 },
  { nome: 'Venezia', pg: 9, v: 1, n: 0, p: 8, gf: 6, gs: 19, dr: -13, pt: 3 }
];

// Colonne: Data (con orario), Stadio, Partita
const MATCHES = [
  {
    id: 'bologna-monza',
    dataOra: '31/10/2026 15:00',
    stadio: "Stadio Renato Dall'Ara",
    home: 'Bologna',
    away: 'Monza',
    pronostico: null
  },
  {
    id: 'udinese-roma',
    dataOra: '31/10/2026 18:00',
    stadio: 'Bluenergy Stadium',
    home: 'Udinese',
    away: 'Roma',
    pronostico: null
  },
  {
    id: 'milan-inter',
    dataOra: '31/10/2026 20:45',
    stadio: 'Stadio San Siro (Giuseppe Meazza)',
    home: 'Milan',
    away: 'Inter',
    pronostico: null
  },
  {
    id: 'como-venezia',
    dataOra: '01/11/2026 12:30',
    stadio: 'Stadio Giuseppe Sinigaglia',
    home: 'Como',
    away: 'Venezia',
    pronostico: null
  },
  {
    id: 'frosinone-torino',
    dataOra: '01/11/2026 15:00',
    stadio: 'Stadio Benito Stirpe',
    home: 'Frosinone',
    away: 'Torino',
    pronostico: null
  },
  {
    id: 'lazio-cagliari',
    dataOra: '01/11/2026 15:00',
    stadio: 'Stadio Olimpico',
    home: 'Lazio',
    away: 'Cagliari',
    pronostico: null
  },
  {
    id: 'lecce-genoa',
    dataOra: '01/11/2026 18:00',
    stadio: 'Stadio Via del Mare',
    home: 'Lecce',
    away: 'Genoa',
    pronostico: null
  },
  {
    id: 'juventus-napoli',
    dataOra: '01/11/2026 20:45',
    stadio: 'Allianz Stadium',
    home: 'Juventus',
    away: 'Napoli',
    pronostico: null
  },
  {
    id: 'sassuolo-fiorentina',
    dataOra: '02/11/2026 18:30',
    stadio: 'Mapei Stadium – Città del Tricolore',
    home: 'Sassuolo',
    away: 'Fiorentina',
    pronostico: null
  },
  {
    id: 'atalanta-parma',
    dataOra: '02/11/2026 20:45',
    stadio: 'New Balance Arena',
    home: 'Atalanta',
    away: 'Parma',
    pronostico: null
  }
];

// "DD/MM/YYYY HH:MM" -> "Sab 22/08 · 18:30" (o "Sat 22/08 · 18:30" in inglese)
function formatMatchDate(dataOra) {
  const [datePart, timePart] = dataOra.split(' ');
  const [day, month, year] = datePart.split('/').map(Number);
  const weekday = STRINGS[getLang()].weekdays[new Date(year, month - 1, day).getDay()];
  return `${weekday} ${datePart.slice(0, 5)} · ${timePart}`;
}

// --- Bundesliga ---------------------------------------------------------

const GIORNATA_BUNDESLIGA = { numero: 1, campionato: 'Bundesliga' };

const CLASSIFICA_BUNDESLIGA = [
  'Union Berlino', 'Francoforte', 'Bayern', 'Leverkusen', 'Brema', 'Schalke',
  'Amburgo', 'Dortmund', 'Monchengladbach', 'Hoffenheim', 'Colonia', 'Magonza',
  'Friburgo', 'Augusta', 'Paderborn', 'Stoccarda', 'Elversberg', 'RB Lipsia'
].map(nome => ({ nome, pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 }));

const MATCHES_BUNDESLIGA = [
  { id: 'bayern-stoccarda', dataOra: '28/08/2026 20:30', stadio: 'Allianz Arena', home: 'Bayern', away: 'Stoccarda', pronostico: null },
  { id: 'colonia-hoffenheim', dataOra: '29/08/2026 15:30', stadio: 'RheinEnergieStadion', home: 'Colonia', away: 'Hoffenheim', pronostico: null },
  { id: 'elversberg-leverkusen', dataOra: '29/08/2026 15:30', stadio: 'Stadion an der Kaiserlinde', home: 'Elversberg', away: 'Leverkusen', pronostico: null },
  { id: 'magonza-paderborn', dataOra: '29/08/2026 15:30', stadio: 'Mewa Arena', home: 'Magonza', away: 'Paderborn', pronostico: null },
  { id: 'rb-lipsia-monchengladbach', dataOra: '29/08/2026 15:30', stadio: 'Red Bull Arena Leipzig', home: 'RB Lipsia', away: 'Monchengladbach', pronostico: null },
  { id: 'union-berlino-francoforte', dataOra: '29/08/2026 15:30', stadio: 'Stadion An der Alten Försterei', home: 'Union Berlino', away: 'Francoforte', pronostico: null },
  { id: 'dortmund-amburgo', dataOra: '29/08/2026 18:30', stadio: 'Signal Iduna Park', home: 'Dortmund', away: 'Amburgo', pronostico: null },
  { id: 'friburgo-brema', dataOra: '30/08/2026 15:30', stadio: 'Europa-Park Stadion', home: 'Friburgo', away: 'Brema', pronostico: null },
  { id: 'augusta-schalke', dataOra: '30/08/2026 17:30', stadio: 'WWK Arena', home: 'Augusta', away: 'Schalke', pronostico: null }
];

// --- Ligue 1 -------------------------------------------------------------

const GIORNATA_LIGUE1 = { numero: 1, campionato: 'Ligue 1' };

const CLASSIFICA_LIGUE1 = [
  'Auxerre', 'Le Havre', 'Le Mans', 'Lilla', 'Lorient', 'Monaco', 'Nizza',
  'PSG', 'Strasburgo', 'Angers', 'Brest', 'Troyes', 'Paris FC', 'Marsiglia',
  'Tolosa', 'Lens', 'Rennes', 'Lione'
].map(nome => ({ nome, pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 }));

const MATCHES_LIGUE1 = [
  { id: 'marsiglia-strasburgo', dataOra: '21/08/2026 20:45', stadio: 'Stade Vélodrome', home: 'Marsiglia', away: 'Strasburgo', pronostico: null },
  { id: 'lens-auxerre', dataOra: '22/08/2026 17:15', stadio: 'Stade Bollaert-Delelis', home: 'Lens', away: 'Auxerre', pronostico: null },
  { id: 'le-mans-brest', dataOra: '22/08/2026 20:45', stadio: 'MMArena', home: 'Le Mans', away: 'Brest', pronostico: null },
  { id: 'nizza-lorient', dataOra: '22/08/2026 20:45', stadio: 'Allianz Riviera', home: 'Nizza', away: 'Lorient', pronostico: null },
  { id: 'tolosa-lione', dataOra: '22/08/2026 20:45', stadio: 'Stadium de Toulouse', home: 'Tolosa', away: 'Lione', pronostico: null },
  { id: 'troyes-paris-fc', dataOra: '22/08/2026 20:45', stadio: "Stade de l'Aube", home: 'Troyes', away: 'Paris FC', pronostico: null },
  { id: 'angers-lilla', dataOra: '23/08/2026 15:00', stadio: 'Stade Raymond Kopa', home: 'Angers', away: 'Lilla', pronostico: null },
  { id: 'le-havre-monaco', dataOra: '23/08/2026 17:15', stadio: 'Stade Océane', home: 'Le Havre', away: 'Monaco', pronostico: null },
  { id: 'psg-rennes', dataOra: '23/08/2026 20:45', stadio: 'Parc des Princes', home: 'PSG', away: 'Rennes', pronostico: null }
];

// --- LaLiga ----------------------------------------------------------------

const GIORNATA_LALIGA = { numero: 11, campionato: 'LaLiga' };

const CLASSIFICA_LALIGA = [
  { nome: 'Barcellona', pg: 10, v: 9, n: 0, p: 1, gf: 40, gs: 11, dr: 29, pt: 27 },
  { nome: 'Atl. Madrid', pg: 10, v: 8, n: 1, p: 1, gf: 20, gs: 8, dr: 12, pt: 25 },
  { nome: 'Real Madrid', pg: 10, v: 8, n: 0, p: 2, gf: 25, gs: 10, dr: 15, pt: 24 },
  { nome: 'Betis', pg: 10, v: 6, n: 2, p: 2, gf: 16, gs: 14, dr: 2, pt: 20 },
  { nome: 'Real Sociedad', pg: 10, v: 6, n: 1, p: 3, gf: 19, gs: 18, dr: 1, pt: 19 },
  { nome: 'Siviglia', pg: 10, v: 5, n: 2, p: 3, gf: 16, gs: 16, dr: 0, pt: 17 },
  { nome: 'Alaves', pg: 10, v: 3, n: 3, p: 4, gf: 14, gs: 11, dr: 3, pt: 12 },
  { nome: 'Ath. Bilbao', pg: 9, v: 3, n: 3, p: 3, gf: 12, gs: 9, dr: 3, pt: 12 },
  { nome: 'Celta Vigo', pg: 10, v: 2, n: 6, p: 2, gf: 10, gs: 7, dr: 3, pt: 12 },
  { nome: 'Villarreal', pg: 10, v: 3, n: 3, p: 4, gf: 15, gs: 14, dr: 1, pt: 12 },
  { nome: 'A Coruña', pg: 10, v: 2, n: 5, p: 3, gf: 13, gs: 13, dr: 0, pt: 11 },
  { nome: 'Osasuna', pg: 10, v: 3, n: 2, p: 5, gf: 10, gs: 20, dr: -10, pt: 11 },
  { nome: 'Racing Santander', pg: 10, v: 3, n: 2, p: 5, gf: 15, gs: 26, dr: -11, pt: 11 },
  { nome: 'Levante', pg: 10, v: 2, n: 4, p: 4, gf: 16, gs: 19, dr: -3, pt: 10 },
  { nome: 'Elche', pg: 10, v: 2, n: 4, p: 4, gf: 14, gs: 17, dr: -3, pt: 10 },
  { nome: 'Vallecano', pg: 9, v: 2, n: 3, p: 4, gf: 12, gs: 20, dr: -8, pt: 9 },
  { nome: 'Getafe', pg: 10, v: 2, n: 3, p: 5, gf: 5, gs: 15, dr: -10, pt: 9 },
  { nome: 'Espanyol', pg: 10, v: 2, n: 2, p: 6, gf: 12, gs: 14, dr: -2, pt: 8 },
  { nome: 'Valencia', pg: 10, v: 1, n: 3, p: 6, gf: 7, gs: 17, dr: -10, pt: 6 },
  { nome: 'Malaga', pg: 10, v: 0, n: 5, p: 5, gf: 7, gs: 19, dr: -12, pt: 5 }
];

const MATCHES_LALIGA = [
  { id: 'villarreal-espanyol', dataOra: '30/10/2026 21:00', stadio: 'Estadio de la Cerámica', home: 'Villarreal', away: 'Espanyol', pronostico: null },
  { id: 'levante-atl-madrid', dataOra: '31/10/2026 14:00', stadio: 'Estadio Ciutat de València', home: 'Levante', away: 'Atl. Madrid', pronostico: null },
  { id: 'vallecano-celta-vigo', dataOra: '31/10/2026 16:15', stadio: 'Estadio de Vallecas', home: 'Vallecano', away: 'Celta Vigo', pronostico: null },
  { id: 'betis-malaga', dataOra: '31/10/2026 18:30', stadio: 'Estadio de La Cartuja', home: 'Betis', away: 'Malaga', pronostico: null },
  { id: 'barcellona-alaves', dataOra: '31/10/2026 21:00', stadio: 'Spotify Camp Nou', home: 'Barcellona', away: 'Alaves', pronostico: null },
  { id: 'getafe-siviglia', dataOra: '01/11/2026 14:00', stadio: 'Coliseum', home: 'Getafe', away: 'Siviglia', pronostico: null },
  { id: 'racing-santander-real-madrid', dataOra: '01/11/2026 16:15', stadio: 'El Sardinero', home: 'Racing Santander', away: 'Real Madrid', pronostico: null },
  { id: 'elche-valencia', dataOra: '01/11/2026 18:30', stadio: 'Estadio Martínez Valero', home: 'Elche', away: 'Valencia', pronostico: null },
  { id: 'ath-bilbao-real-sociedad', dataOra: '01/11/2026 21:00', stadio: 'San Mamés', home: 'Ath. Bilbao', away: 'Real Sociedad', pronostico: null },
  { id: 'a-coruna-osasuna', dataOra: '02/11/2026 21:00', stadio: 'Estadio Abanca-Riazor', home: 'A Coruña', away: 'Osasuna', pronostico: null }
];

// --- Premier League --------------------------------------------------------

const GIORNATA_PREMIER = { numero: 1, campionato: 'Premier League' };

const CLASSIFICA_PREMIER = [
  'Arsenal', 'Aston Villa', 'Chelsea', 'Everton', 'Fulham', 'Liverpool',
  'Manchester City', 'Manchester Utd', 'Newcastle', 'Sunderland', 'Tottenham',
  'Coventry', 'Crystal Palace', 'Hull', 'Ipswich', 'Bournemouth', 'Brighton',
  'Leeds', 'Nottingham', 'Brentford'
].map(nome => ({ nome, pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 }));

const MATCHES_PREMIER = [
  { id: 'arsenal-coventry', dataOra: '21/08/2026 21:00', stadio: 'Emirates Stadium', home: 'Arsenal', away: 'Coventry', pronostico: null },
  { id: 'hull-manchester-utd', dataOra: '22/08/2026 13:30', stadio: 'MKM Stadium', home: 'Hull', away: 'Manchester Utd', pronostico: null },
  { id: 'everton-crystal-palace', dataOra: '22/08/2026 16:00', stadio: 'Everton Stadium', home: 'Everton', away: 'Crystal Palace', pronostico: null },
  { id: 'ipswich-sunderland', dataOra: '22/08/2026 16:00', stadio: 'Portman Road', home: 'Ipswich', away: 'Sunderland', pronostico: null },
  { id: 'nottingham-leeds', dataOra: '22/08/2026 16:00', stadio: 'City Ground', home: 'Nottingham', away: 'Leeds', pronostico: null },
  { id: 'brentford-tottenham', dataOra: '22/08/2026 18:30', stadio: 'Gtech Community Stadium', home: 'Brentford', away: 'Tottenham', pronostico: null },
  { id: 'brighton-aston-villa', dataOra: '23/08/2026 15:00', stadio: 'American Express Stadium', home: 'Brighton', away: 'Aston Villa', pronostico: null },
  { id: 'manchester-city-bournemouth', dataOra: '23/08/2026 15:00', stadio: 'Etihad Stadium', home: 'Manchester City', away: 'Bournemouth', pronostico: null },
  { id: 'newcastle-liverpool', dataOra: '23/08/2026 17:30', stadio: "St James' Park", home: 'Newcastle', away: 'Liverpool', pronostico: null },
  { id: 'fulham-chelsea', dataOra: '24/08/2026 21:00', stadio: 'Craven Cottage', home: 'Fulham', away: 'Chelsea', pronostico: null }
];

// Dati per campionato, indicizzati per id (lo stesso usato in js/leagues.js).
const LEAGUE_DATA = {
  'serie-a': { giornata: GIORNATA, classifica: CLASSIFICA, matches: MATCHES },
  'bundesliga': { giornata: GIORNATA_BUNDESLIGA, classifica: CLASSIFICA_BUNDESLIGA, matches: MATCHES_BUNDESLIGA },
  'ligue-1': { giornata: GIORNATA_LIGUE1, classifica: CLASSIFICA_LIGUE1, matches: MATCHES_LIGUE1 },
  'laliga': { giornata: GIORNATA_LALIGA, classifica: CLASSIFICA_LALIGA, matches: MATCHES_LALIGA },
  'premier-league': { giornata: GIORNATA_PREMIER, classifica: CLASSIFICA_PREMIER, matches: MATCHES_PREMIER }
};
