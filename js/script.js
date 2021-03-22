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
  document.getElementById("avviso").innerHTML = "Accesso effettuato!";
} else {
  document.getElementById("avviso").innerHTML = "Accesso negato!";
}

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

var player = parseInt(Math.random() * 6);
document.getElementById("player").innerHTML = "Numero del giocatore: " + player;
var computer = parseInt(Math.random() * 6);
document.getElementById("computer").innerHTML =
  "Numero del computer: " + computer;
if (player > computer) {
  document.getElementById("esito").innerHTML = "Ha vinto il giocatore";
} else if (player === computer) {
  document.getElementById("esito").innerHTML = "Pareggio!";
} else if (player < computer) {
  document.getElementById("esito").innerHTML = "Ha vinto il computer";
}
