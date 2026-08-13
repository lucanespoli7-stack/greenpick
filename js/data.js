// Dati di esempio per GreenPick — Giornata 1, Serie A 2026/27.
// Formato pensato per essere lo stesso per tutti i campionati:
// CLASSIFICA (tabella squadre) e MATCHES (calendario/pronostici) sono
// due elenchi indipendenti, così un giorno potranno arrivare da fonti
// dati reali separate senza cambiare la logica di rendering.

const GIORNATA = {
  numero: 1,
  campionato: 'Serie A'
};

// Colonne: #, Squadra, PG, V, N, P, GF, GS, DR, Pt
const CLASSIFICA = [
  { nome: 'Lecce', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Bologna', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Frosinone', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Genoa', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Napoli', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Udinese', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Monza', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Sassuolo', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Venezia', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Roma', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Inter', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Juventus', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Fiorentina', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Milan', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Atalanta', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Lazio', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Cagliari', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Torino', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Parma', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 },
  { nome: 'Como', pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 }
];

// Colonne: Data (con orario), Stadio, Partita
const MATCHES = [
  {
    id: 'inter-monza',
    dataOra: '22/08/2026 18:30',
    stadio: 'Giuseppe Meazza',
    home: 'Inter',
    away: 'Monza',
    pronostico: {
      esito: '1 (Handicap -1)',
      quota: 1.66,
      analisi: [
        'Inter squadra rodata, poche modifiche rispetto allo scorso anno, campioni in carica',
        'Monza promossa all’ultimo playoff (miglior classifica regular season vs Catanzaro)',
        'Juric con risultati negativi nelle ultime stagioni'
      ],
      analisiEn: [
        'Inter are a settled squad with few changes from last season, and enter as defending champions',
        'Monza earned promotion via the play-offs (a better regular-season record than Catanzaro)',
        'Juric has posted poor results in his recent seasons'
      ]
    }
  },
  {
    id: 'udinese-como',
    dataOra: '22/08/2026 18:30',
    stadio: 'Bluenergy Stadium',
    home: 'Udinese',
    away: 'Como',
    pronostico: {
      esito: 'Goal',
      quota: 2.05,
      analisi: [
        'Como qualificato in Champions ma stagione da iniziare, molti nuovi innesti da assimilare',
        'Servirà tempo prima che il Como raggiunga il ritmo',
        'Udine è un campo ostico'
      ],
      analisiEn: [
        'Como qualified for the Champions League, but the season is just starting with many new signings to bed in',
        'Como will need time to hit their stride',
        'Udine is a tough away ground'
      ]
    }
  },
  {
    id: 'genoa-napoli',
    dataOra: '22/08/2026 20:45',
    stadio: 'Luigi Ferraris',
    home: 'Genoa',
    away: 'Napoli',
    pronostico: {
      esito: 'X (Handicap Napoli -1)',
      quota: 3.60,
      analisi: [
        'Napoli rivoluzionato dall’arrivo di Allegri',
        'Servirà tempo per l’assestamento della nuova gestione',
        'Allegri storicamente abituato a vittorie di misura'
      ],
      analisiEn: [
        'Napoli have been reshaped by Allegri’s arrival',
        'The new management will need time to settle in',
        'Allegri has historically favoured narrow wins'
      ]
    }
  },
  {
    id: 'parma-cagliari',
    dataOra: '22/08/2026 20:45',
    stadio: 'Ennio Tardini',
    home: 'Parma',
    away: 'Cagliari',
    pronostico: {
      esito: 'X',
      quota: 3.10,
      analisi: [
        'Partita all’insegna del non perdere punti in avvio di stagione',
        'Nessun trasferimento rilevante in entrata per il Cagliari',
        'Parma ha ceduto Pellegrino alla Fiorentina'
      ],
      analisiEn: [
        'Both sides will play it cautiously, keen not to drop points this early in the season',
        'Cagliari made no significant incoming transfers this window',
        'Parma sold Pellegrino to Fiorentina'
      ]
    }
  },
  {
    id: 'frosinone-juventus',
    dataOra: '23/08/2026 18:30',
    stadio: 'Benito Stirpe',
    home: 'Frosinone',
    away: 'Juventus',
    pronostico: null
  },
  {
    id: 'venezia-lecce',
    dataOra: '23/08/2026 18:30',
    stadio: 'Pier Luigi Penzo',
    home: 'Venezia',
    away: 'Lecce',
    pronostico: null
  },
  {
    id: 'atalanta-sassuolo',
    dataOra: '23/08/2026 20:45',
    stadio: 'Gewiss Stadium',
    home: 'Atalanta',
    away: 'Sassuolo',
    pronostico: {
      esito: '1',
      quota: 1.50,
      analisi: [
        'Ritorno di un allenatore offensivo sulla panchina Atalanta',
        'Prima in casa, occasione favorevole',
        'Sassuolo orfano di Grosso, passato alla Fiorentina'
      ],
      analisiEn: [
        'An attack-minded coach is back on Atalanta’s bench',
        'A favourable occasion for their home opener',
        'Sassuolo are without Grosso, who left for Fiorentina'
      ]
    }
  },
  {
    id: 'torino-milan',
    dataOra: '23/08/2026 20:45',
    stadio: 'Olimpico Grande Torino',
    home: 'Torino',
    away: 'Milan',
    pronostico: null
  },
  {
    id: 'bologna-lazio',
    dataOra: '24/08/2026 18:30',
    stadio: "Renato Dall'Ara",
    home: 'Bologna',
    away: 'Lazio',
    pronostico: {
      esito: 'X',
      quota: 3.20,
      analisi: [
        'Entrambe reduci da cambio allenatore',
        'Bologna priva dei giocatori chiave delle scorse stagioni',
        'Lazio in difficoltà societarie, Gattuso subentrato da poco'
      ],
      analisiEn: [
        'Both sides have just changed manager',
        'Bologna are missing key players from recent seasons',
        'Lazio are in a difficult spot off the pitch, with Gattuso only recently appointed'
      ]
    }
  },
  {
    id: 'roma-fiorentina',
    dataOra: '24/08/2026 20:45',
    stadio: 'Stadio Olimpico',
    home: 'Roma',
    away: 'Fiorentina',
    pronostico: {
      esito: 'Over 2,5',
      quota: 1.95,
      analisi: [
        'Entrambe squadre propositive con talento offensivo',
        'Fiorentina rinnovata (rosa e allenatore), in fase di adattamento'
      ],
      analisiEn: [
        'Both sides play proactive, attack-minded football',
        'Fiorentina have been overhauled (squad and coach) and are still adapting'
      ]
    }
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

const GIORNATA_LALIGA = { numero: 1, campionato: 'LaLiga' };

const CLASSIFICA_LALIGA = [
  'Real Sociedad', 'Elche', 'Alaves', 'Celta Vigo', 'Malaga', 'Vallecano',
  'Real Madrid', 'Villarreal', 'Barcellona', 'Atl. Madrid', 'Siviglia',
  'Racing Santander', 'A Coruña', 'Valencia', 'Ath. Bilbao', 'Espanyol',
  'Betis', 'Getafe', 'Osasuna', 'Levante'
].map(nome => ({ nome, pg: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0, pt: 0 }));

const MATCHES_LALIGA = [
  { id: 'alaves-getafe', dataOra: '15/08/2026 19:30', stadio: 'Mendizorroza', home: 'Alaves', away: 'Getafe', pronostico: null },
  { id: 'siviglia-vallecano', dataOra: '15/08/2026 21:30', stadio: 'Ramón Sánchez-Pizjuán', home: 'Siviglia', away: 'Vallecano', pronostico: null },
  { id: 'racing-santander-villarreal', dataOra: '16/08/2026 17:00', stadio: 'El Sardinero', home: 'Racing Santander', away: 'Villarreal', pronostico: null },
  { id: 'espanyol-levante', dataOra: '16/08/2026 19:00', stadio: 'RCDE Stadium', home: 'Espanyol', away: 'Levante', pronostico: null },
  { id: 'celta-vigo-osasuna', dataOra: '16/08/2026 21:30', stadio: 'Balaídos', home: 'Celta Vigo', away: 'Osasuna', pronostico: null },
  { id: 'a-coruna-elche', dataOra: '17/08/2026 21:00', stadio: 'Abanca-Riazor', home: 'A Coruña', away: 'Elche', pronostico: null },
  { id: 'atl-madrid-malaga', dataOra: '19/08/2026 21:00', stadio: 'Cívitas Metropolitano', home: 'Atl. Madrid', away: 'Malaga', pronostico: null }
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
