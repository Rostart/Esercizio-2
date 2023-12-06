function timer() {
  // Inizializza la variabile `timer` a 5
  let timer = 5;

  // Crea un evento di 1 secondo
  const interval = setInterval(() => {
    // Decrementa il valore di `timer`
    timer--;

    // Se `timer` è identico a 0,
    if (timer < 0) {
      // Resetta `timer` a 5
      timer = 5;
    }

    // Aggiorna l'elemento `#timer`
    document.getElementById("timer").innerHTML = timer;
  }, 1000);
}

// Inizia il timer
timer();
