// assegniamo al counter 0
counter = 0

// scriviamo la funzione di descrescita
function left (){
    const leftButton = document.getElementById("decrement-btn") // assegno una costante
    leftButton.addEventListener("click", function(){
        counter --; //assegno ad un evento la funzione di decremento
        loadCounter() // finito la dichiarazione della funzione aggiorno il counter con funzione
    })
}

// funzione di incremento
function right(){
    const rightButton = document.getElementById("increment-btn") // assegno una costante
    rightButton.addEventListener("click", function(){
        counter ++; //assegno ad un evento la funzione di incremento
        loadCounter() // finito la dichiarazione della funzione aggiorno il counter con funzione
    })
}

// aggiorno il display del counter
function loadCounter(){
    document.getElementById("counter-display").textContent = counter // questa funzione andrà a prendere il valore nel DOM di counter display e modificherà il contenuto assegnadogli il valore di counter
}

//richiamo le funzioni per eseguirle
left();
right();