// Dati di esempio per GreenPick — Giornata 3, Serie A.
// Struttura pensata per essere sostituita in futuro con dati reali
// senza dover cambiare la logica di home.js / match.js.

const GIORNATA = {
  numero: 3,
  campionato: 'Serie A',
  scorsaGiornataEsito: '3/5',
  prossimoAggiornamento: 'GIO'
};

const MATCHES = [
  {
    id: 'atalanta-como',
    home: {
      nome: 'Atalanta',
      stats: { posizione: 5, giocate: 2, vittorie: 1, pareggi: 1, sconfitte: 0, golFatti: 4, golSubiti: 2 }
    },
    away: {
      nome: 'Como',
      stats: { posizione: 14, giocate: 2, vittorie: 0, pareggi: 1, sconfitte: 1, golFatti: 1, golSubiti: 3 }
    },
    data: 'Sab 15:00',
    stadio: 'Gewiss Stadium',
    pronostico: null
  },
  {
    id: 'bologna-fiorentina',
    home: {
      nome: 'Bologna',
      stats: { posizione: 6, giocate: 2, vittorie: 1, pareggi: 1, sconfitte: 0, golFatti: 3, golSubiti: 1 }
    },
    away: {
      nome: 'Fiorentina',
      stats: { posizione: 9, giocate: 2, vittorie: 1, pareggi: 0, sconfitte: 1, golFatti: 2, golSubiti: 2 }
    },
    data: 'Sab 18:00',
    stadio: "Dall'Ara",
    pronostico: {
      esito: '1',
      etichetta: 'Vittoria Bologna',
      nota: 'Il Bologna arriva da due risultati utili consecutivi e non subisce gol in casa da 3 turni. La Fiorentina fatica in trasferta contro squadre fisiche.'
    }
  },
  {
    id: 'inter-cagliari',
    home: {
      nome: 'Inter',
      stats: { posizione: 2, giocate: 2, vittorie: 2, pareggi: 0, sconfitte: 0, golFatti: 6, golSubiti: 1 }
    },
    away: {
      nome: 'Cagliari',
      stats: { posizione: 15, giocate: 2, vittorie: 0, pareggi: 1, sconfitte: 1, golFatti: 1, golSubiti: 4 }
    },
    data: 'Sab 20:45',
    stadio: 'San Siro',
    pronostico: {
      esito: '1',
      etichetta: 'Vittoria Inter',
      nota: "L'Inter ha il miglior attacco del girone e gioca in casa contro una difesa che ha già subito 4 gol in 2 partite."
    }
  },
  {
    id: 'juventus-frosinone',
    home: {
      nome: 'Juventus',
      stats: { posizione: 3, giocate: 2, vittorie: 1, pareggi: 1, sconfitte: 0, golFatti: 3, golSubiti: 1 }
    },
    away: {
      nome: 'Frosinone',
      stats: { posizione: 20, giocate: 2, vittorie: 0, pareggi: 0, sconfitte: 2, golFatti: 0, golSubiti: 5 }
    },
    data: 'Sab 20:45',
    stadio: 'Allianz Stadium',
    pronostico: null
  },
  {
    id: 'lecce-monza',
    home: {
      nome: 'Lecce',
      stats: { posizione: 16, giocate: 2, vittorie: 0, pareggi: 1, sconfitte: 1, golFatti: 1, golSubiti: 2 }
    },
    away: {
      nome: 'Monza',
      stats: { posizione: 19, giocate: 2, vittorie: 0, pareggi: 0, sconfitte: 2, golFatti: 1, golSubiti: 4 }
    },
    data: 'Dom 12:30',
    stadio: 'Via del Mare',
    pronostico: null
  },
  {
    id: 'napoli-genoa',
    home: {
      nome: 'Napoli',
      stats: { posizione: 1, giocate: 2, vittorie: 2, pareggi: 0, sconfitte: 0, golFatti: 5, golSubiti: 0 }
    },
    away: {
      nome: 'Genoa',
      stats: { posizione: 11, giocate: 2, vittorie: 1, pareggi: 0, sconfitte: 1, golFatti: 2, golSubiti: 3 }
    },
    data: 'Dom 15:00',
    stadio: 'Maradona',
    pronostico: {
      esito: '1',
      etichetta: 'Vittoria Napoli',
      nota: 'Il Napoli non ha ancora subito gol in questo campionato e gioca davanti al proprio pubblico.'
    }
  },
  {
    id: 'parma-udinese',
    home: {
      nome: 'Parma',
      stats: { posizione: 13, giocate: 2, vittorie: 0, pareggi: 2, sconfitte: 0, golFatti: 2, golSubiti: 2 }
    },
    away: {
      nome: 'Udinese',
      stats: { posizione: 12, giocate: 2, vittorie: 1, pareggi: 0, sconfitte: 1, golFatti: 2, golSubiti: 2 }
    },
    data: 'Dom 15:00',
    stadio: 'Ennio Tardini',
    pronostico: null
  },
  {
    id: 'torino-lazio',
    home: {
      nome: 'Torino',
      stats: { posizione: 10, giocate: 2, vittorie: 1, pareggi: 0, sconfitte: 1, golFatti: 2, golSubiti: 2 }
    },
    away: {
      nome: 'Lazio',
      stats: { posizione: 8, giocate: 2, vittorie: 1, pareggi: 1, sconfitte: 0, golFatti: 3, golSubiti: 1 }
    },
    data: 'Dom 18:00',
    stadio: 'Olimpico Grande Torino',
    pronostico: {
      esito: 'X',
      etichetta: 'Pareggio',
      nota: 'Due squadre in equilibrio, entrambe reduci da un pareggio. Negli ultimi confronti diretti prevale l’equilibrio.'
    }
  },
  {
    id: 'roma-sassuolo',
    home: {
      nome: 'Roma',
      stats: { posizione: 7, giocate: 2, vittorie: 1, pareggi: 1, sconfitte: 0, golFatti: 3, golSubiti: 2 }
    },
    away: {
      nome: 'Sassuolo',
      stats: { posizione: 17, giocate: 2, vittorie: 0, pareggi: 1, sconfitte: 1, golFatti: 2, golSubiti: 4 }
    },
    data: 'Dom 20:45',
    stadio: 'Olimpico',
    pronostico: null
  },
  {
    id: 'milan-venezia',
    home: {
      nome: 'Milan',
      stats: { posizione: 4, giocate: 2, vittorie: 1, pareggi: 1, sconfitte: 0, golFatti: 4, golSubiti: 2 }
    },
    away: {
      nome: 'Venezia',
      stats: { posizione: 18, giocate: 2, vittorie: 0, pareggi: 1, sconfitte: 1, golFatti: 1, golSubiti: 3 }
    },
    data: 'Dom 20:45',
    stadio: 'San Siro',
    pronostico: {
      esito: '1',
      etichetta: 'Vittoria Milan',
      nota: 'Il Milan gioca in casa contro la difesa che ha subito più gol nel girone dopo il Frosinone.'
    }
  }
];
