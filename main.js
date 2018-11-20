// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50


var numeriCpu = [];

for (var i = 0; i < 16; i++) {
  numeriCpu[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(numeriCpu);

var numeroRandom = Math.floor(Math.random() * 100) + 1; // restituisce un numero intero da 1 a 100

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
console.log(numeroUtente);

if (numeroUtente > 100) {
  window.alert("Attenzione! Hai inserito un numero maggiore di 100");
}

// se il numero inserito dall'utente è uguale ad un numero presente nell'array del Cpu allora la partita finisce.


for (var i = 0; i < numeriCpu.length; i++) {
  if (numeriCpu[i] == numeroUtente) {
    window.alert('La partita finisce qui! Hai inserito un numero già presente in lista');
  }
  else if (numeriCpu[i] != numeroUtente) {
    var newNumero = parseInt(prompt("Grande! Inserisci un altro numero da 1 a 100"));
    console.log("il tuo nuovo numero è: " + newNumero );
    if (numeroUtente > 100) {
      window.alert("Attenzione! Hai inserito un numero maggiore di 100");
    }
  }
  else {
    window.alert('Fine della partita!');

  }
}
