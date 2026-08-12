// Dati di esempio per GreenPick — Giornata 1, Serie A 2026/27.
// Struttura pensata per essere sostituita in futuro con dati reali
// senza dover cambiare la logica di home.js / match.js.

const GIORNATA = {
  numero: 1,
  campionato: 'Serie A',
  scorsaGiornataEsito: '—',
  prossimoAggiornamento: 'MAR'
};

const MATCHES = [
  {
    id: 'inter-monza',
    home: {
      nome: 'Inter',
      stats: { posizione: 2, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Monza',
      stats: { posizione: 13, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Sab 22/08',
    stadio: 'San Siro',
    pronostico: {
      esito: '1 (Handicap -1)',
      quota: 1.66,
      analisi: [
        'Inter squadra rodata, poche modifiche rispetto allo scorso anno, campioni in carica',
        'Monza promossa all’ultimo playoff (miglior classifica regular season vs Catanzaro)',
        'Juric con risultati negativi nelle ultime stagioni'
      ]
    }
  },
  {
    id: 'udinese-como',
    home: {
      nome: 'Udinese',
      stats: { posizione: 12, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Como',
      stats: { posizione: 18, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Sab 22/08',
    stadio: 'Bluenergy Stadium',
    pronostico: {
      esito: 'Goal',
      quota: 2.05,
      analisi: [
        'Como qualificato in Champions ma stagione da iniziare, molti nuovi innesti da assimilare',
        'Servirà tempo prima che il Como raggiunga il ritmo',
        'Udine è un campo ostico'
      ]
    }
  },
  {
    id: 'parma-cagliari',
    home: {
      nome: 'Parma',
      stats: { posizione: 15, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Cagliari',
      stats: { posizione: 14, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Sab 22/08',
    stadio: 'Ennio Tardini',
    pronostico: {
      esito: 'X',
      quota: 3.10,
      analisi: [
        'Partita all’insegna del non perdere punti in avvio di stagione',
        'Nessun trasferimento rilevante in entrata per il Cagliari',
        'Parma ha ceduto Pellegrino alla Fiorentina'
      ]
    }
  },
  {
    id: 'genoa-napoli',
    home: {
      nome: 'Genoa',
      stats: { posizione: 11, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Napoli',
      stats: { posizione: 1, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Sab 22/08',
    stadio: 'Luigi Ferraris',
    pronostico: {
      esito: 'X (Handicap Napoli -1)',
      quota: 3.60,
      analisi: [
        'Napoli rivoluzionato dall’arrivo di Allegri',
        'Servirà tempo per l’assestamento della nuova gestione',
        'Allegri storicamente abituato a vittorie di misura'
      ]
    }
  },
  {
    id: 'frosinone-juventus',
    home: {
      nome: 'Frosinone',
      stats: { posizione: 20, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Juventus',
      stats: { posizione: 4, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Dom 23/08',
    stadio: 'Benito Stirpe',
    pronostico: null
  },
  {
    id: 'venezia-lecce',
    home: {
      nome: 'Venezia',
      stats: { posizione: 17, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Lecce',
      stats: { posizione: 16, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Dom 23/08',
    stadio: 'Pier Luigi Penzo',
    pronostico: null
  },
  {
    id: 'torino-milan',
    home: {
      nome: 'Torino',
      stats: { posizione: 10, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Milan',
      stats: { posizione: 7, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Dom 23/08',
    stadio: 'Olimpico Grande Torino',
    pronostico: null
  },
  {
    id: 'atalanta-sassuolo',
    home: {
      nome: 'Atalanta',
      stats: { posizione: 3, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Sassuolo',
      stats: { posizione: 19, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Dom 23/08',
    stadio: 'Gewiss Stadium',
    pronostico: {
      esito: '1',
      quota: 1.50,
      analisi: [
        'Ritorno di un allenatore offensivo sulla panchina Atalanta',
        'Prima in casa, occasione favorevole',
        'Sassuolo orfano di Grosso, passato alla Fiorentina'
      ]
    }
  },
  {
    id: 'bologna-lazio',
    home: {
      nome: 'Bologna',
      stats: { posizione: 6, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Lazio',
      stats: { posizione: 9, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Lun 24/08',
    stadio: "Renato Dall'Ara",
    pronostico: {
      esito: 'X',
      quota: 3.20,
      analisi: [
        'Entrambe reduci da cambio allenatore',
        'Bologna priva dei giocatori chiave delle scorse stagioni',
        'Lazio in difficoltà societarie, Gattuso subentrato da poco'
      ]
    }
  },
  {
    id: 'roma-fiorentina',
    home: {
      nome: 'Roma',
      stats: { posizione: 5, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    away: {
      nome: 'Fiorentina',
      stats: { posizione: 8, giocate: 0, vittorie: 0, pareggi: 0, sconfitte: 0, golFatti: 0, golSubiti: 0 }
    },
    data: 'Lun 24/08',
    stadio: 'Stadio Olimpico',
    pronostico: {
      esito: 'Over 2,5',
      quota: 1.95,
      analisi: [
        'Entrambe squadre propositive con talento offensivo',
        'Fiorentina rinnovata (rosa e allenatore), in fase di adattamento'
      ]
    }
  }
];
