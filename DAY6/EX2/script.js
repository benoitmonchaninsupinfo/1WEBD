/**
 * Exercice 6.2
 * A partir de l’exercice 6.1
 * Stockez toutes les opérations effectuées en dbStorage, 
 * Créer un bouton qui affiche toutes ses opérations
 * Créer un bouton qui vide toutes les opérations du dbStorage
 * 
 * P.S. : On reprend l'exercice 2.7 et on va appliquer ce qu'on doit normalement faire avec l'exercice 6.1, mais pour l'historique des calculs de l'exercice 2.7
*/

// La page web est créée dans index.html du même dossier

// On récupère les références des champs qui ont pour x et y
const X = document.getElementById('x');
const Y = document.getElementById('y');

// On récupère les références des boutons "sum", "sub", "mult", "div" et "modulo", qui ont respéctivement les ids "buttonSum", "buttonSub", "buttonMult", "buttonDiv" et "buttonModulo"
const BUTTON_SUM = document.getElementById('buttonSum');
const BUTTON_SUB = document.getElementById('buttonSub');
const BUTTON_MULT = document.getElementById('buttonMult');
const BUTTON_DIV = document.getElementById('buttonDiv');
const BUTTON_MODULO = document.getElementById('buttonModulo');

// On récupère les références des blocs où seront affichés le résultat et l'historique
const RESULT = document.getElementById('result');

// On récupère les références des boutons "showHistory" et "clearHistory", qui ont respéctivement les ids "show-history" et "clear-history"
const SHOW_HISTORY = document.getElementById('show-history');
const CLEAR_HISTORY = document.getElementById('clear-history');

// On récupère la référence du tableau pour l'historique
const HISTORY = document.querySelector('.history');

// On créé une constante pour le nom de l'object de stockage de l'historique
const OPERATIONS_HISTORY_DB_NAME = 'operations_history';

// La fonction "calculation" suivante prend 3 arguments :
//  - "x", un des deux nombres du calcul
//  - "y", un des deux nombres du calcul
//  - "operator", l'opérateur que l'on veut utiliser pour le calcul
// Grâce à la structure de contrôle "switch", cette fonction va simplement retourner le bon calcul suivant l'operateur entré en argument
function calcuation(x, y, operator) {
    switch(operator) {
        case 'SUM':
            return Number(x) + Number(y)
        case 'SUB':
            return Number(x) - Number(y)
        case 'MULT':
            return Number(x) * Number(y)
        case 'DIV':
            return Number(x) / Number(y)
        case 'MODULO':
            return Number(x) % Number(y)
    }
}

// Cette fonction "addToHistory" prend 4 arguments :
//  - "x" et "y", les valeurs du calcul
//  - "result", le resultat du calcul
//  - "operator", l'opérateur appliqué ("+", "-", "*", "/" ou "%")
// On va réassigner ce qu'il y a d'écrit dans l'historique en concaténant le dernier calcul et les précédents de l'historique
function addToHistory(x, y, result, operator) {
    const row = document.createElement('tr');
    const col = document.createElement('td');
    col.innerText = `${x} ${operator} ${y} = ${result}`;
    row.appendChild(col);
    console.log();
    HISTORY.querySelector('#history').insertAdjacentElement('afterbegin', row);
}

// On crée une fonction "openHistoryDatabase" qui va créer une base de données "db" et une table "operations_history" si elle n'existe pas sinon elle va l'ouvrir
function openHistoryDatabase() {

    // On va utiliser la méthode "open" de l'objet "indexedDB" pour créer une base de données
    // Cette méthode prend en argument le nom de la base de données et la version de la base de données
    // La version de la base de données est un nombre entier qui doit être incrémenté à chaque fois qu'on modifie la structure de la base de données
    // Si la base de données n'existe pas, elle sera créée, sinon elle sera ouverte
    // La méthode "open" retourne un objet "request" qui va nous permettre de savoir si la base de données a été créée ou ouverte
    const openRequest = indexedDB.open('db');

    // Si la base de données n'existe pas, on va écouter l'événement "upgradeneeded" de l'objet "request" pour créer les objets "store" de la base de données
    openRequest.onupgradeneeded = () => {
        // On récupère l'objet "db" qui représente la base de données
        const db = openRequest.result;

        // On vérifie que l'objet "store" n'existe pas déjà grâce à la méthode "objectStoreNames" de l'objet "db"
        if (!db.objectStoreNames.contains(OPERATIONS_HISTORY_DB_NAME)) {

            // On va utiliser la méthode "createObjectStore" de l'objet "db" pour créer cet objet "store"
            // Cette méthode prend en argument le nom de l'objet "store" et un objet "options" qui va nous permettre de définir des options pour cet objet "store"
            // On va définir l'option "keyPath" qui va nous permettre de définir la clé primaire de l'objet "store"
            // On va définir l'option "autoIncrement" qui va nous permettre de définir si la clé primaire est incrémentée automatiquement
            db.createObjectStore(OPERATIONS_HISTORY_DB_NAME, { keyPath: 'id', autoIncrement: true });
        }
    }

    // On va retourner une promesse qui va être résolue une fois la base de données créée ou ouverte et qui va être rejetée si la base de données n'a pas pu être créée ou ouverte
    return new Promise((resolve, reject) => {

        // On va écouter l'événement "success" de cet objet "request" pour savoir si la base de données a été créée ou ouverte
        // Si la base de données a été créée ou ouverte, on va résoudre notre promesse en lui passant en argument l'objet "db" qui représente la base de données
        openRequest.onsuccess = () => {
            console.log('La connexion avec la base de données est ok !');
            resolve(openRequest.result);
        }

        // Si la base de données n'a pas pu être créée ou ouverte, on va afficher un message d'erreur dans la console et rejeter notre promesse
        openRequest.onerror = () => {
            console.error('La connexion à la base de données ne s est pas bien passée');
            reject(openRequest.error);
        }
    });

}

// On crée une fonction "addOperationToHistory" qui va ajouter une opération à l'historique
function addOperationToHistory(x, y, result, operator, database) {

    // On va retourner une promesse qui sera résolue une fois l'opération ajoutée et qui sera rejetée si l'opération n'a pas pu être ajoutée
    return new Promise((resolve, reject) => {

        // On va utiliser la méthode "transaction" de l'objet "db" pour créer une transaction
        // Cette méthode prend en argument un tableau contenant le nom des objets "store" sur lesquels on veut effectuer des opérations
        const transaction = database.transaction([OPERATIONS_HISTORY_DB_NAME], 'readwrite');
        
        // On va utiliser la méthode "objectStore" de l'objet "transaction" pour récupérer l'objet "store" sur lequel on veut effectuer des opérations
        const store = transaction.objectStore(OPERATIONS_HISTORY_DB_NAME);

        // On va utiliser la méthode "add" de l'objet "store" pour ajouter une opération à l'historique
        // Cette méthode prend en argument l'opération que l'on veut ajouter
        const request = store.add({ x, y, result, operator });

        // On va écouter l'événement "success" de l'objet "request" pour savoir si l'opération a été ajoutée
        request.onsuccess = () => {
            console.log('L\'opération a bien été ajoutée à l historique !');
            resolve(request.result);
        }

        // On va écouter l'événement "error" de l'objet "request" pour savoir si l'opération n'a pas pu être ajoutée
        request.onerror = () => {
            console.error('L\'opération n a pas pu être ajoutée à l historique');
            reject(request.error);
        }
    });

}

// On crée une fonction "getOperationsHistory" qui va récupérer l'historique des opérations
function getOperationsHistory(database) {

    // On va utiliser la méthode "transaction" de l'objet "db" pour créer une transaction
    // Cette méthode prend en argument un tableau contenant le nom des objets "store" sur lesquels on veut effectuer des opérations
    const transaction = database.transaction(OPERATIONS_HISTORY_DB_NAME, 'readonly');

    // On va écouter l'événement "complete" de l'objet "transaction" pour savoir si la transaction a été effectuée
    transaction.oncomplete = () => {
        console.log('Transaction terminée !');
    }

    // On va récupérer l'objet "store" grâce à la méthode "objectStore" de l'objet "transaction"
    const historyStore = transaction.objectStore(OPERATIONS_HISTORY_DB_NAME);

    // On va utiliser la méthode "getAll" de l'objet "store" pour récupérer tous les éléments de l'objet "store"
    const historyRequest = historyStore.getAll();

    // On va écouter l'événement "success" de l'objet "request" pour savoir si la requête a été effectuée
    historyRequest.onsuccess = () => {

        // On va récupérer le résultat de la requête grâce à la propriété "result" de l'objet "request"
        const history = historyRequest.result;

        // Pour chaque opération de l'historique, on va l'ajouter à la liste des opérations
        history.forEach((operation) => {
            addToHistory(operation.x, operation.y, operation.result, operation.operator);
        });

        HISTORY.style.display = 'block';
    }

    // On va écouter l'événement "error" de l'objet "request" pour savoir si la requête n'a pas été effectuée et afficher un message d'erreur dans la console
    historyRequest.onerror = () => {
        console.error(historyRequest.error);
    }
}

// On crée une fonction "clearOperationsHistory" qui va supprimer l'historique des opérations
function clearOperationsHistory(database) {
    
    // On va utiliser la méthode "transaction" de l'objet "db" pour créer une transaction
    // Cette méthode prend en argument un tableau contenant le nom des objets "store" sur lesquels on veut effectuer des opérations
    const transaction = database.transaction(OPERATIONS_HISTORY_DB_NAME, 'readwrite');

    // On va écouter l'événement "complete" de l'objet "transaction" pour savoir si la transaction a été effectuée
    transaction.oncomplete = () => {
        console.log('Transaction terminée !');
    }

    // On va récupérer l'objet "store" grâce à la méthode "objectStore" de l'objet "transaction"
    const historyStore = transaction.objectStore(OPERATIONS_HISTORY_DB_NAME);

    // On va utiliser la méthode "clear" de l'objet "store" pour supprimer tous les éléments de l'objet "store"
    const historyRequest = historyStore.clear();

    // On va écouter l'événement "success" de l'objet "request" pour savoir si la requête a été effectuée
    historyRequest.onsuccess = () => {
        console.log('L\'historique a bien été supprimé !');
        HISTORY.style.display = 'none';
        HISTORY.innerHTML = '';
    }

    // On va écouter l'événement "error" de l'objet "request" pour savoir si la requête n'a pas été effectuée et afficher un message d'erreur dans la console
    historyRequest.onerror = () => {
        console.error(historyRequest.error);
    }

}

// On va appeler la fonction "openHistoryDatabase" pour ouvrir la base de données
openHistoryDatabase().then((database) => {

    // On va écouter l'événement "click" de chacun de nos boutons, grâce à la méthode "addEventListener" en spécifiant quel événement on veut écouter et en donnant une fonction qui va s'éxecuter en conséquence
    // La fonction anonyme donnée en argument de "addEventListener" va être éxecutée à chaque fois qu'on va cliquer sur le bouton en question
    // Ici nos fonctions vont simplement récupérer le résultat du calcul fait dans la fonction déclarée plus bas et le mettre dans notre bloc pour l'afficher à l'utilisateur
    // Les références "X" et "Y" sont des champs de formulaire, pour récupérer leur valeur il suffit de récupérer leur propriété "value"
    // On ajout également le calcul à l'historique grâce une autre fonction "addOperationToHistory" déclarée plus haut (à savoir que cette fonction retourne une promesse et qu'on a pas forcément besoin de récupérer le résultat de cette promesse)
    BUTTON_SUM.addEventListener('click', () => {
        let res = calcuation(X.value, Y.value, 'SUM');
        addOperationToHistory(X.value, Y.value, res, '+', database);
        RESULT.innerText = res;
    });

    BUTTON_SUB.addEventListener('click', () => {
        let res = calcuation(X.value, Y.value, 'SUB');
        addOperationToHistory(X.value, Y.value, res, '-', database);
        RESULT.innerText = res;
    });

    BUTTON_MULT.addEventListener('click', () => {
        let res = calcuation(X.value, Y.value, 'MULT');
        addOperationToHistory(X.value, Y.value, res, '*', database);
        RESULT.innerText = res;
    });

    BUTTON_DIV.addEventListener('click', () => {
        let res = calcuation(X.value, Y.value, 'DIV');
        addOperationToHistory(X.value, Y.value, res, '/', database);
        RESULT.innerText = res;
    });

    BUTTON_MODULO.addEventListener('click', () => {
        let res = calcuation(X.value, Y.value, 'MODULO');
        addOperationToHistory(X.value, Y.value, res, '%', database);
        RESULT.innerText = res;
    });


    // On va écouter l'événement "click" du bouton "SHOW_HISTORY" pour afficher l'historique des opérations
    SHOW_HISTORY.addEventListener('click', () => {
        getOperationsHistory(database);
    });

    // Maintenant que notre base de données est disponible, on peut activer le bouton "SHOW_HISTORY" pour que l'utilisateur puisse afficher l'historique des opérations
    SHOW_HISTORY.attributes.removeNamedItem('disabled');

    CLEAR_HISTORY.addEventListener('click', () => {
        clearOperationsHistory(database);
    });

    // Maintenant que notre base de données est disponible, on peut activer le bouton "CLEAR_HISTORY" pour que l'utilisateur puisse effacer l'historique des opérations
    CLEAR_HISTORY.attributes.removeNamedItem('disabled');

}).catch((error) => {
    console.error(error);
});
