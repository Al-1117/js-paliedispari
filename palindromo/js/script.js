// // ESERCIZIO 1 - PALINDROMA
// // CONSEGNA
// // Una funzione per capire se la parola è palindroma
//


// INIZIO FUNZIONE - CORRETTO

function isPalindroma(parolaDaVerificare){
  var result = false;
  var parolaArray = parolaDaVerificare.split("");
  parolaArray.reverse();
  var parolaInversa = parolaArray.join("");
  console.log(parolaInversa);
  if (parolaDaVerificare == parolaInversa)  {
    result = true;
  }

  return result;

}



// FINE FUNZIONE - CORRETTO


// // Chiedo la parola da cercare
var parolaUtente = document.getElementById('parolaUtente');
console.log(parolaUtente);

// Bottone Controlla
var bottoneControlla = document.getElementById('controlla');

// Output
var output = document.getElementById('output');


bottoneControlla.addEventListener('click',

function(){

  // Creo variabili di appoggio
  parolaUtente = parolaUtente.value;
  var toUppercase = parolaUtente.toUpperCase();

  // // Controllo che la parola inserita sia valida
  // while ((parolaUtente.length == 0) || (!isNaN(parseInt(parolaUtente) ))) {
  //   output.innerHTML = "Errore, inserisci una parola valida."
  //   // alert("Errore");
  // }


  // Controllo che la parola inserita sia palindroma con la funzione
  isPalindroma(parolaUtente);
  if (isPalindroma(parolaUtente)) {
    // Comunico l'output all'utente
  output.innerHTML = toUppercase + " è palindroma";
  } else {
  output.innerHTML = toUppercase +" non è palindroma";
  }

}

)


//
// // // FATTO PRECEDENTEMENTE
// // function parolaPalindroma(parolaDaVerificare) {
// //   var palindroma = messaggio;
// //   // Divido la parola lettera x lettera
// //   var parolaDivisa = parolaUtente.split("");
// //   console.log(parolaDivisa);
// //
// //   var parolaUtenteInversa = parolaDivisa.reverse();
// //   console.log(parolaUtenteInversa);
// //
// //   // Converto l'array in stringhe
// //
// //   var parolaStringa1 = parolaDivisa.toString();
// //   console.log(parolaStringa1);
// //
// //   var parolaStringa2 = parolaUtenteInversa.toString();
// //   console.log(parolaStringa2);
// //
// //   var messaggio
// //
// //   if (parolaStringa1 == parolaStringa2) {
// //
// //     messaggio = alert("La parola è polindroma");
// //
// //   } else {
// //     messaggio = alert("La parola non è polindroma");
// //
// //   }
// //
// //   return palindroma;
// //
// // }
// //
// // //
// // //
// // // FINE ESERCIZIO 1
