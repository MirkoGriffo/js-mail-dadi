/*
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
*/

var mail = ["mirko@gmail.com", "christian@gmail.com", "mauro@gmail.com"];

var mailInserita = prompt("Inserire email");

utenteTrovato = false;

for (var i = 0; i < mail.length; i++) {
  if (mailInserita === mail[i]) {
    utenteTrovato = true;
  }
}

if (utenteTrovato === true) {
  document.getElementById("avviso").innerHTML = "Accesso effettuato";
} else {
  document.getElementById("avviso").innerHTML = "Accesso negato";
}
