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
    pronostico: {
      esito: 'Goal',
      quota: 1.75,
      analisi: [
        'Il Monza subisce 2,4 gol a partita (22 in 9), peggior difesa insieme al Sassuolo',
        'Il Monza però segna con continuità: 16 gol, più del Bologna (12)'
      ],
      analisiEn: [
        'Monza concede 2.4 goals per game (22 in 9), joint-worst defence with Sassuolo',
        'Monza still score regularly: 16 goals, more than Bologna (12)'
      ]
    }
  },
  {
    id: 'udinese-roma',
    dataOra: '31/10/2026 18:00',
    stadio: 'Bluenergy Stadium',
    home: 'Udinese',
    away: 'Roma',
    pronostico: {
      esito: '2',
      quota: 1.60,
      analisi: [
        'Roma ancora imbattuta (6V 3N) con la seconda miglior difesa (8 gol subiti)',
        'Udinese 17ª con una sola vittoria e 9 gol segnati'
      ],
      analisiEn: [
        'Roma still unbeaten (6W 3D) with the second-best defence (8 conceded)',
        'Udinese 17th with just one win and 9 goals scored'
      ]
    }
  },
  {
    id: 'milan-inter',
    dataOra: '31/10/2026 20:45',
    stadio: 'Stadio San Siro (Giuseppe Meazza)',
    home: 'Milan',
    away: 'Inter',
    pronostico: {
      esito: 'Goal',
      quota: 1.50,
      analisi: [
        'Inter miglior attacco del campionato con 25 gol (2,8 a partita)',
        'Il Milan segna 2 gol a partita (18 in 9)'
      ],
      analisiEn: [
        "Inter have the league's best attack with 25 goals (2.8 per game)",
        'Milan score 2 goals per game (18 in 9)'
      ]
    }
  },
  {
    id: 'como-venezia',
    dataOra: '01/11/2026 12:30',
    stadio: 'Stadio Giuseppe Sinigaglia',
    home: 'Como',
    away: 'Venezia',
    pronostico: {
      esito: 'Goal',
      quota: 1.60,
      analisi: [
        'Como 4° con 17 gol fatti, quasi 2 a partita',
        "Il Venezia ha cambiato allenatore due giornate fa e sta crescendo: ha battuto il Napoli e ha messo in difficoltà l'Inter"
      ],
      analisiEn: [
        'Como 4th with 17 goals scored, almost 2 per game',
        'Venezia changed coach two matchdays ago and are improving: they beat Napoli and gave Inter a hard time'
      ]
    }
  },
  {
    id: 'frosinone-torino',
    dataOra: '01/11/2026 15:00',
    stadio: 'Stadio Benito Stirpe',
    home: 'Frosinone',
    away: 'Torino',
    pronostico: {
      esito: 'Over 2.5',
      quota: 1.40,
      analisi: [
        'Le partite del Frosinone hanno una media di 4 gol (22 fatti, 14 subiti)',
        'Il Torino ha totalizzato 28 gol complessivi in 9 partite (14 fatti, 14 subiti)'
      ],
      analisiEn: [
        'Frosinone games average 4 goals (22 scored, 14 conceded)',
        'Torino games total 28 goals in 9 matches (14 for, 14 against)'
      ]
    }
  },
  {
    id: 'lazio-cagliari',
    dataOra: '01/11/2026 15:00',
    stadio: 'Stadio Olimpico',
    home: 'Lazio',
    away: 'Cagliari',
    pronostico: {
      esito: '1 + Over 2.5',
      quota: 2.20,
      analisi: [
        'Lazio 2ª e imbattuta (8V 1N) con la miglior difesa: 7 gol subiti',
        'Lazio a segno 2,4 volte a partita; il Cagliari ha differenza reti negativa (−5)'
      ],
      analisiEn: [
        'Lazio 2nd and unbeaten (8W 1D) with the best defence: 7 conceded',
        'Lazio score 2.4 per game; Cagliari have a negative goal difference (−5)'
      ]
    }
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

const GIORNATA_BUNDESLIGA = { numero: 8, campionato: 'Bundesliga' };

const CLASSIFICA_BUNDESLIGA = [
  { nome: 'Bayern', pg: 7, v: 5, n: 2, p: 0, gf: 25, gs: 6, dr: 19, pt: 17 },
  { nome: 'Dortmund', pg: 7, v: 5, n: 2, p: 0, gf: 12, gs: 4, dr: 8, pt: 17 },
  { nome: 'Friburgo', pg: 7, v: 4, n: 1, p: 2, gf: 16, gs: 9, dr: 7, pt: 13 },
  { nome: 'Leverkusen', pg: 7, v: 4, n: 1, p: 2, gf: 16, gs: 12, dr: 4, pt: 13 },
  { nome: 'RB Lipsia', pg: 7, v: 4, n: 0, p: 3, gf: 20, gs: 11, dr: 9, pt: 12 },
  { nome: 'Brema', pg: 7, v: 3, n: 3, p: 1, gf: 15, gs: 14, dr: 1, pt: 12 },
  { nome: 'Magonza', pg: 7, v: 3, n: 1, p: 3, gf: 16, gs: 13, dr: 3, pt: 10 },
  { nome: 'Elversberg', pg: 7, v: 3, n: 1, p: 3, gf: 12, gs: 15, dr: -3, pt: 10 },
  { nome: 'Augusta', pg: 7, v: 2, n: 3, p: 2, gf: 17, gs: 13, dr: 4, pt: 9 },
  { nome: 'Hoffenheim', pg: 7, v: 3, n: 0, p: 4, gf: 14, gs: 14, dr: 0, pt: 9 },
  { nome: 'Amburgo', pg: 7, v: 3, n: 0, p: 4, gf: 6, gs: 16, dr: -10, pt: 9 },
  { nome: 'Colonia', pg: 7, v: 2, n: 2, p: 3, gf: 8, gs: 11, dr: -3, pt: 8 },
  { nome: 'Paderborn', pg: 7, v: 2, n: 2, p: 3, gf: 6, gs: 9, dr: -3, pt: 8 },
  { nome: 'Francoforte', pg: 7, v: 2, n: 2, p: 3, gf: 10, gs: 17, dr: -7, pt: 8 },
  { nome: 'Stoccarda', pg: 7, v: 2, n: 0, p: 5, gf: 10, gs: 13, dr: -3, pt: 6 },
  { nome: 'Schalke', pg: 7, v: 1, n: 3, p: 3, gf: 4, gs: 7, dr: -3, pt: 6 },
  { nome: 'Union Berlino', pg: 7, v: 1, n: 3, p: 3, gf: 6, gs: 18, dr: -12, pt: 6 },
  { nome: 'Monchengladbach', pg: 7, v: 1, n: 0, p: 6, gf: 11, gs: 22, dr: -11, pt: 3 }
];

const MATCHES_BUNDESLIGA = [
  { id: 'elversberg-magonza', dataOra: '30/10/2026 20:30', stadio: 'Ursapharm-Arena an der Kaiserlinde', home: 'Elversberg', away: 'Magonza', pronostico: null },
  { id: 'augusta-friburgo', dataOra: '31/10/2026 15:30', stadio: 'WWK Arena', home: 'Augusta', away: 'Friburgo', pronostico: null },
  { id: 'brema-hoffenheim', dataOra: '31/10/2026 15:30', stadio: 'Weserstadion', home: 'Brema', away: 'Hoffenheim', pronostico: null },
  { id: 'leverkusen-stoccarda', dataOra: '31/10/2026 15:30', stadio: 'BayArena', home: 'Leverkusen', away: 'Stoccarda', pronostico: null },
  { id: 'monchengladbach-paderborn', dataOra: '31/10/2026 15:30', stadio: 'Borussia-Park', home: 'Monchengladbach', away: 'Paderborn', pronostico: null },
  { id: 'schalke-rb-lipsia', dataOra: '31/10/2026 15:30', stadio: 'Veltins-Arena', home: 'Schalke', away: 'RB Lipsia', pronostico: null },
  { id: 'bayern-dortmund', dataOra: '31/10/2026 18:30', stadio: 'Allianz Arena', home: 'Bayern', away: 'Dortmund', pronostico: null },
  { id: 'union-berlino-colonia', dataOra: '01/11/2026 15:30', stadio: 'Stadion An der Alten Försterei', home: 'Union Berlino', away: 'Colonia', pronostico: null },
  { id: 'francoforte-amburgo', dataOra: '01/11/2026 17:30', stadio: 'Deutsche Bank Park', home: 'Francoforte', away: 'Amburgo', pronostico: null }
];

// --- Ligue 1 -------------------------------------------------------------

const GIORNATA_LIGUE1 = { numero: 9, campionato: 'Ligue 1' };

const CLASSIFICA_LIGUE1 = [
  { nome: 'PSG', pg: 8, v: 5, n: 2, p: 1, gf: 16, gs: 9, dr: 7, pt: 17 },
  { nome: 'Rennes', pg: 8, v: 5, n: 1, p: 2, gf: 18, gs: 14, dr: 4, pt: 16 },
  { nome: 'Lilla', pg: 8, v: 4, n: 3, p: 1, gf: 11, gs: 6, dr: 5, pt: 15 },
  { nome: 'Monaco', pg: 8, v: 4, n: 3, p: 1, gf: 11, gs: 7, dr: 4, pt: 15 },
  { nome: 'Lione', pg: 8, v: 4, n: 2, p: 2, gf: 13, gs: 7, dr: 6, pt: 14 },
  { nome: 'Paris FC', pg: 8, v: 4, n: 2, p: 2, gf: 13, gs: 9, dr: 4, pt: 14 },
  { nome: 'Lens', pg: 8, v: 4, n: 1, p: 3, gf: 16, gs: 12, dr: 4, pt: 13 },
  { nome: 'Marsiglia', pg: 8, v: 4, n: 0, p: 4, gf: 18, gs: 13, dr: 5, pt: 12 },
  { nome: 'Lorient', pg: 8, v: 3, n: 3, p: 2, gf: 7, gs: 6, dr: 1, pt: 12 },
  { nome: 'Nizza', pg: 8, v: 3, n: 2, p: 3, gf: 8, gs: 10, dr: -2, pt: 11 },
  { nome: 'Tolosa', pg: 8, v: 2, n: 4, p: 2, gf: 12, gs: 11, dr: 1, pt: 10 },
  { nome: 'Auxerre', pg: 8, v: 3, n: 1, p: 4, gf: 12, gs: 18, dr: -6, pt: 10 },
  { nome: 'Brest', pg: 8, v: 2, n: 3, p: 3, gf: 14, gs: 12, dr: 2, pt: 9 },
  { nome: 'Angers', pg: 8, v: 2, n: 2, p: 4, gf: 9, gs: 15, dr: -6, pt: 8 },
  { nome: 'Le Mans', pg: 8, v: 1, n: 4, p: 3, gf: 11, gs: 16, dr: -5, pt: 7 },
  { nome: 'Strasburgo', pg: 8, v: 2, n: 1, p: 5, gf: 12, gs: 18, dr: -6, pt: 7 },
  { nome: 'Troyes', pg: 8, v: 1, n: 2, p: 5, gf: 5, gs: 16, dr: -11, pt: 5 },
  { nome: 'Le Havre', pg: 8, v: 0, n: 2, p: 6, gf: 8, gs: 15, dr: -7, pt: 2 }
];

const MATCHES_LIGUE1 = [
  { id: 'le-havre-psg', dataOra: '30/10/2026 19:00', stadio: 'Stade CMA CGM Océane', home: 'Le Havre', away: 'PSG', pronostico: null },
  { id: 'nizza-rennes', dataOra: '30/10/2026 19:00', stadio: 'Allianz Riviera', home: 'Nizza', away: 'Rennes', pronostico: null },
  { id: 'lilla-lens', dataOra: '30/10/2026 21:05', stadio: 'Decathlon Arena – Stade Pierre-Mauroy', home: 'Lilla', away: 'Lens', pronostico: null },
  { id: 'troyes-le-mans', dataOra: '31/10/2026 20:45', stadio: "Stade de l'Aube", home: 'Troyes', away: 'Le Mans', pronostico: null },
  { id: 'strasburgo-auxerre', dataOra: '01/11/2026 15:00', stadio: 'Stade de la Meinau', home: 'Strasburgo', away: 'Auxerre', pronostico: null },
  { id: 'lione-angers', dataOra: '01/11/2026 17:15', stadio: 'Groupama Stadium', home: 'Lione', away: 'Angers', pronostico: null },
  { id: 'paris-fc-monaco', dataOra: '01/11/2026 17:15', stadio: 'Stade Jean-Bouin', home: 'Paris FC', away: 'Monaco', pronostico: null },
  { id: 'marsiglia-tolosa', dataOra: '01/11/2026 20:45', stadio: 'CEPAC Vélodrome', home: 'Marsiglia', away: 'Tolosa', pronostico: null },
  { id: 'lorient-brest', dataOra: '02/11/2026 20:45', stadio: 'Stade du Moustoir', home: 'Lorient', away: 'Brest', pronostico: null }
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

const GIORNATA_PREMIER = { numero: 9, campionato: 'Premier League' };

const CLASSIFICA_PREMIER = [
  { nome: 'Manchester City', pg: 8, v: 7, n: 0, p: 1, gf: 20, gs: 9, dr: 11, pt: 21 },
  { nome: 'Arsenal', pg: 8, v: 7, n: 0, p: 1, gf: 13, gs: 5, dr: 8, pt: 21 },
  { nome: 'Brighton', pg: 8, v: 5, n: 1, p: 2, gf: 23, gs: 7, dr: 16, pt: 16 },
  { nome: 'Liverpool', pg: 8, v: 4, n: 3, p: 1, gf: 11, gs: 8, dr: 3, pt: 15 },
  { nome: 'Chelsea', pg: 8, v: 4, n: 1, p: 3, gf: 17, gs: 15, dr: 2, pt: 13 },
  { nome: 'Brentford', pg: 8, v: 2, n: 5, p: 1, gf: 14, gs: 9, dr: 5, pt: 11 },
  { nome: 'Leeds', pg: 8, v: 2, n: 5, p: 1, gf: 9, gs: 6, dr: 3, pt: 11 },
  { nome: 'Newcastle', pg: 8, v: 3, n: 2, p: 3, gf: 12, gs: 14, dr: -2, pt: 11 },
  { nome: 'Aston Villa', pg: 8, v: 3, n: 2, p: 3, gf: 9, gs: 12, dr: -3, pt: 11 },
  { nome: 'Hull', pg: 8, v: 2, n: 4, p: 2, gf: 9, gs: 8, dr: 1, pt: 10 },
  { nome: 'Everton', pg: 8, v: 2, n: 4, p: 2, gf: 8, gs: 9, dr: -1, pt: 10 },
  { nome: 'Ipswich', pg: 8, v: 3, n: 1, p: 4, gf: 12, gs: 16, dr: -4, pt: 10 },
  { nome: 'Bournemouth', pg: 8, v: 2, n: 3, p: 3, gf: 12, gs: 13, dr: -1, pt: 9 },
  { nome: 'Tottenham', pg: 8, v: 2, n: 3, p: 3, gf: 8, gs: 10, dr: -2, pt: 9 },
  { nome: 'Fulham', pg: 8, v: 2, n: 2, p: 4, gf: 8, gs: 10, dr: -2, pt: 8 },
  { nome: 'Manchester Utd', pg: 8, v: 1, n: 4, p: 3, gf: 10, gs: 13, dr: -3, pt: 7 },
  { nome: 'Crystal Palace', pg: 8, v: 2, n: 1, p: 5, gf: 9, gs: 19, dr: -10, pt: 7 },
  { nome: 'Nottingham', pg: 8, v: 1, n: 3, p: 4, gf: 6, gs: 10, dr: -4, pt: 6 },
  { nome: 'Coventry', pg: 8, v: 2, n: 0, p: 6, gf: 6, gs: 15, dr: -9, pt: 6 },
  { nome: 'Sunderland', pg: 8, v: 1, n: 2, p: 5, gf: 6, gs: 14, dr: -8, pt: 5 }
];

const MATCHES_PREMIER = [
  { id: 'chelsea-manchester-utd', dataOra: '31/10/2026 13:30', stadio: 'Stamford Bridge', home: 'Chelsea', away: 'Manchester Utd', pronostico: null },
  { id: 'bournemouth-leeds', dataOra: '31/10/2026 16:00', stadio: 'Vitality Stadium', home: 'Bournemouth', away: 'Leeds', pronostico: null },
  { id: 'brentford-nottingham', dataOra: '31/10/2026 16:00', stadio: 'Gtech Community Stadium', home: 'Brentford', away: 'Nottingham', pronostico: null },
  { id: 'coventry-sunderland', dataOra: '31/10/2026 16:00', stadio: 'Coventry Building Society Arena', home: 'Coventry', away: 'Sunderland', pronostico: null },
  { id: 'hull-ipswich', dataOra: '31/10/2026 16:00', stadio: 'MKM Stadium', home: 'Hull', away: 'Ipswich', pronostico: null },
  { id: 'manchester-city-brighton', dataOra: '31/10/2026 16:00', stadio: 'Etihad Stadium', home: 'Manchester City', away: 'Brighton', pronostico: null },
  { id: 'tottenham-crystal-palace', dataOra: '31/10/2026 18:30', stadio: 'Tottenham Hotspur Stadium', home: 'Tottenham', away: 'Crystal Palace', pronostico: null },
  { id: 'aston-villa-fulham', dataOra: '31/10/2026 21:00', stadio: 'Villa Park', home: 'Aston Villa', away: 'Fulham', pronostico: null },
  { id: 'liverpool-arsenal', dataOra: '01/11/2026 17:30', stadio: 'Anfield', home: 'Liverpool', away: 'Arsenal', pronostico: null },
  { id: 'newcastle-everton', dataOra: '02/11/2026 21:00', stadio: "St James' Park", home: 'Newcastle', away: 'Everton', pronostico: null }
];

// Dati per campionato, indicizzati per id (lo stesso usato in js/leagues.js).
const LEAGUE_DATA = {
  'serie-a': { giornata: GIORNATA, classifica: CLASSIFICA, matches: MATCHES },
  'bundesliga': { giornata: GIORNATA_BUNDESLIGA, classifica: CLASSIFICA_BUNDESLIGA, matches: MATCHES_BUNDESLIGA },
  'ligue-1': { giornata: GIORNATA_LIGUE1, classifica: CLASSIFICA_LIGUE1, matches: MATCHES_LIGUE1 },
  'laliga': { giornata: GIORNATA_LALIGA, classifica: CLASSIFICA_LALIGA, matches: MATCHES_LALIGA },
  'premier-league': { giornata: GIORNATA_PREMIER, classifica: CLASSIFICA_PREMIER, matches: MATCHES_PREMIER }
};
