// ESERCIZIO 1 - PALINDROMA
// CONSEGNA
// Una funzione per capire se la parola è palindroma

// Chiedo la parola da cercare
var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);

// INIZIO FUNZIONE

function parolaPalindroma(parolaDaVerificare) {
  var palindroma = messaggio;
  // Divido la parola lettera x lettera
  var parolaDivisa = parolaUtente.split("");
  console.log(parolaDivisa);

  var parolaUtenteInversa = parolaDivisa.reverse();
  console.log(parolaUtenteInversa);

  // Converto l'array in stringhe

  var parolaStringa1 = parolaDivisa.toString();
  console.log(parolaStringa1);

  var parolaStringa2 = parolaUtenteInversa.toString();
  console.log(parolaStringa2);

  var messaggio

  if (parolaStringa1 == parolaStringa2 ) {
    messaggio = alert("La parola è polindroma");

  } else {
    messaggio = alert("La parola non è polindroma");

  }

  return palindroma;

}

// FINE FUNZIONE


// PROVA FUNZIONE
var prova = parolaPalindroma(parolaUtente)
console.log(prova);
