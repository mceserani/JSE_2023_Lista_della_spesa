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

const itemToRemove = [
    {
        type: "input",
        name: "toRemove",
        message: "Quale elemento vuoi rimuovere?",
    }
];

const itemToAdd = [
    {
        type: "input",
        name: "toAdd",
        message: "Quale elemento vuoi aggiungere?",
    }
];

// Definiamo una funzione che permette all'utente di aggiungere un elemento alla lista
// Usare inquirer.prompt() per chiedere all'utente di inserire un elemento da aggiungere alla lista
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function addToList() {
    inquirer.prompt(itemToAdd).then((answers) => {
        shoppingList.push(answers.toAdd);
        console.log("Elemento aggiunto");
        showMenu();
    });
}

// Definiamo una funzione che permette all'utente di rimuovere un elemento dalla lista
// Usare inquirer.prompt() per chiedere all'utente di inserire un elemento da rimuovere dalla lista
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function removeFromList() {
    inquirer.prompt(itemToRemove).then((answers) => {
        const pos = shoppingList.indexOf(answers.toRemove);
        if (pos == -1)
            console.log("Elemento non presente nella lista.");
        else{
            shoppingList = shoppingList.slice(0,pos).concat(shoppingList.slice(pos+1));
            console.log("L'elemento è stato rimosso dalla lista.");
        }
        showMenu();
    });
}

// Definiamo una funzione che mostra la lista della spesa
// Se la lista è vuota, mostriamo un messaggio di avvertimento
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function showList() {
    if (shoppingList.length == 0)
        console.log("La lista è vuota!");
    else{
        for (let i = 0; i < shoppingList.length; i++)
            console.log(shoppingList[i]);
    }
    showMenu();
}

// Definiamo una funzione che svuota completamente la lista della spesa
// Al termine dell'operazione, mostriamo nuovamente il menù delle opzioni
function clearList() {
  shoppingList = [];
  console.log("La lista della spesa è stata svuotata!");
  showMenu();
}

// Avviamo il programma mostrando il menù delle opzioni
showMenu();
