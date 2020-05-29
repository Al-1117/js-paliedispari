// // ESERCIZIO 1 - PALINDROMA
// // CONSEGNA
// // Una funzione per capire se la parola è palindroma
//
// // Chiedo la parola da cercare
// var parolaUtente = prompt("Inserisci una parola");
// console.log(parolaUtente);
//
// // INIZIO FUNZIONE
//
// function parolaPalindroma(parolaDaVerificare) {
//   var palindroma = messaggio;
//   // Divido la parola lettera x lettera
//   var parolaDivisa = parolaUtente.split("");
//   console.log(parolaDivisa);
//
//   var parolaUtenteInversa = parolaDivisa.reverse();
//   console.log(parolaUtenteInversa);
//
//   // Converto l'array in stringhe
//
//   var parolaStringa1 = parolaDivisa.toString();
//   console.log(parolaStringa1);
//
//   var parolaStringa2 = parolaUtenteInversa.toString();
//   console.log(parolaStringa2);
//
//   var messaggio
//
//   if (parolaStringa1 == parolaStringa2 ) {
//     messaggio = alert("La parola è polindroma");
//
//   } else {
//     messaggio = alert("La parola non è polindroma");
//
//   }
//
//   return palindroma;
//
// }
//
// // FINE FUNZIONE
//
//
// // PROVA FUNZIONE
// var prova = parolaPalindroma(parolaUtente)
// console.log(prova);

// FINE ESERCIZIO 1


// ESERCIZIO 2 PARI E DISPARI
// CONSEGNA
// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

// Chiedo all'utente se pari o dispari
var pariDispari = document.getElementById('pari_dispari');

// Chiedo all'utente il numero scelto
var numeroUtente = document.getElementById('numero_utente');


// Bottone ok
var bottone = document.getElementById('bottone');

bottone.addEventListener('click',

function pariODispari(){
  numeroUtente = parseInt(numeroUtente.value);
  // Numero scelto dal pc
  var numeroPc = Math.floor(Math.random() * 5) + 1;
  console.log(pariDispari.value);
  console.log(numeroUtente);
  console.log(numeroPc);

  // Somma dei numeri
  var somma = numeroPc + numeroUtente;
  console.log(somma);

  // Verdetto

  if ( (pariDispari.value == 'pari') && (somma % 2 == 0)) {
    console.log("hai vinto");

  } else if ( (pariDispari.value == 'dispari') && (somma % 2 != 0)) {
    console.log("hai vinto");

  } else {
    console.log('Hai perso');

  }



}

);


































// FINE  ESERCIZIO 2 PARI E DISPARI
