


// ESERCIZIO 2 PARI E DISPARI
// CONSEGNA
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// FUNZIONI PER ESEGUIRE IL GIOCO PARI E DISPARI

// Funzione genera numeri random in un array
function generaNumeriCasuali(quantitaNumeri, limiteMassimo){
  var arrayNumeri = [];
  for (var i = 0; i < quantitaNumeri; i++) {
  var numeroRandom =  Math.floor(Math.random() * limiteMassimo) + 1;
    arrayNumeri.push(numeroRandom);
  }
  return arrayNumeri;
}

//
// // prova funzione
// var numeri = generaNumeriCasuali(10, 10);
// console.log(numeri);

// funzione somma numeri
function sommaNumeri(numero1, numero2){
  var somma = parseInt(numero1 + numero2);
  return somma;
}

// prova funzione somma numeri
// var numero = sommaNumeri(10, 10);
// console.log(numero);

  // funzione pariDispari
function pariDispari(totale){

  var messaggio;

  if (totale % 2 == 0) {
    messaggio = true;
    console.log("Pari");

  } else if (totale % 2 != 0) {
    messaggio = false;
    console.log('Dispari');

  }

  return messaggio
}

// // prova pariDispari
// var verdetto = pariDispari(36);
// console.log(verdetto);


// SVOLGIMENTO DEL GIOCO PARI E DISPARI

// Chiedo all'utente se pari o dispari
var scelta = document.getElementById('scelta');
//
// // Chiedo all'utente il numero scelto
var numeroUtente = document.getElementById('numero_utente');
//
// // Bottone ok
var bottone = document.getElementById('bottone');
//


// Evento cliccando sul bottone

bottone.addEventListener('click',

function(){
  // Mostro sezione Analisi
  var analisi = document.getElementById('analisi');
  analisi.className = analisi.classList + " mostra";

  // numero scelto dall'utente
  numeroUtente = parseInt(numeroUtente.value);
  console.log("Il numero scelto da te è " + numeroUtente);

  // Numero scelto dal pc utilizzando la funzione generaNumeriCasuali
  var numeroPc = generaNumeriCasuali(1, 5);
  console.log(scelta.value);
  numeroPc = numeroPc.join();
  numeroPc = parseInt(numeroPc);
  console.log("Il numero scelto dal PC è " + numeroPc);

  // Somma dei numeri utilizzando la funzione sommaNumeri
  var somma = sommaNumeri(numeroUtente, numeroPc)
  console.log("Totale dei numeri è " + somma);

  // Variabili per la stampa
  var output = document.getElementById('verdetto');
  var verdetto = pariDispari(somma)
  var numeroScelto = document.getElementById('numero_scelto').innerHTML = numeroUtente;
  var numeroPCscelto = document.getElementById('numero_pc_scelto').innerHTML = numeroPc;
  var totaleNumeri = document.getElementById('somma_numeri').innerHTML = somma;


  // Verdetto utilizzando la funzione pariDispari
  if ( ( scelta.value == 'pari') && (verdetto == true)) {
    output.innerHTML = "Hai vinto :)!"
    console.log(output);

  } else if ((scelta.value == 'dispari') && (verdetto == false)) {
    output.innerHTML = "Hai vinto :-)!"
    console.log(output);

  } else {
    output.innerHTML = "Hai perso :-(!"
    console.log(output);

  }


}
);

// FINE  ESERCIZIO 2 PARI E DISPARI
