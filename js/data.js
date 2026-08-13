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
      ]
    }
  }
];

// "DD/MM/YYYY HH:MM" -> "Sab 22/08 · 18:30"
function formatMatchDate(dataOra) {
  const [datePart, timePart] = dataOra.split(' ');
  const [day, month, year] = datePart.split('/').map(Number);
  const giorni = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  const weekday = giorni[new Date(year, month - 1, day).getDay()];
  return `${weekday} ${datePart.slice(0, 5)} · ${timePart}`;
}
