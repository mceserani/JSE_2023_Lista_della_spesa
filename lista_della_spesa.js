import inquirer from 'inquirer';

// Creiamo un vettore vuoto che rappresenta la nostra lista della spesa
let shoppingList = [];

// Definiamo una funzione che mostra il menù delle opzioni all'utente
function showMenu() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'menuOption',
        message: 'Cosa vuoi fare?',
        choices: ['Aggiungi un elemento alla lista', 'Rimuovi un elemento dalla lista', 'Visualizza la lista', 'Svuota completamente la lista', 'Esci']
        }
    ]).then((answers) => {
        // In base alla scelta dell'utente, eseguiamo le operazioni corrispondenti
        switch (answers.menuOption) {
        case 'Aggiungi un elemento alla lista':
            addToList();
            break;
        case 'Rimuovi un elemento dalla lista':
            removeFromList();
            break;
        case 'Visualizza la lista':
            showList();
            break;
        case 'Svuota completamente la lista':
            clearList();
            break;
        case 'Esci':
            console.log('Arrivederci!');
            return;
        }
    });
}

// Definiamo una funzione che permette all'utente di aggiungere un elemento alla lista
// Usare inquirer.prompt() per chiedere all'utente di inserire un elemento da aggiungere alla lista
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function addToList() {
  
  // SCRIVI IL TUO CODICE QUI

}

// Definiamo una funzione che permette all'utente di rimuovere un elemento dalla lista
// Usare inquirer.prompt() per chiedere all'utente di inserire un elemento da rimuovere dalla lista
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function removeFromList() {
    
    // SCRIVI IL TUO CODICE QUI
  
}

// Definiamo una funzione che mostra la lista della spesa
// Se la lista è vuota, mostriamo un messaggio di avvertimento
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function showList() {
  
  // SCRIVI IL TUO CODICE QUI

}

// Definiamo una funzione che svuota completamente la lista della spesa
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function clearList() {
  
  // SCRIVI IL TUO CODICE QUI

}

// Avviamo il programma mostrando il menù delle opzioni
showMenu();
