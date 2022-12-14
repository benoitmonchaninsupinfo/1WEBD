/**
 * Exercice 2.7
 * Créer une nouvelle page Web avec une zone permettant d’effectuer des calculs (SUM, SUB, MULT, DIV, MODULO)
 * Faire apparaitre l’historique des calculs dans une zone et faire apparaitre le résultat des calculs dans une autre zone de la page WEB
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

// Et on récupère les références des blocs où seront affichés le résultat et l'historique
const RESULT = document.getElementById('result');
const HISTORY = document.getElementById('history');

// On va écouter l'événement "click" de chacun de nos boutons, grâce à la méthode "addEventListener" en spécifiant quel événement on veut écouter et en donnant une fonction qui va s'éxecuter en conséquence
// La fonction anonyme donnée en argument de "addEventListener" va être éxecutée à chaque fois qu'on va cliquer sur le bouton en question
// Ici nos fonctions vont simplement récupérer le résultat du calcul fait dans la fonction déclarée plus bas et le mettre dans notre bloc pour l'afficher à l'utilisateur
// Les références "X" et "Y" sont des champs de formulaire, pour récupérer leur valeur il suffit de récupérer leur propriété "value"
// On ajout également le calcul à l'historique grâce une autre fonction "addToHistory" déclarée plus bas
BUTTON_SUM.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'SUM');
    addToHistory(X.value, Y.value, res, '+');
    RESULT.innerText = res;
})

BUTTON_SUB.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'SUB');
    addToHistory(X.value, Y.value, res, '-');
    RESULT.innerText = res;
})

BUTTON_MULT.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'MULT');
    addToHistory(X.value, Y.value, res, '*');
    RESULT.innerText = res;
})

BUTTON_DIV.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'DIV');
    addToHistory(X.value, Y.value, res, '/');
    RESULT.innerText = res;
})

BUTTON_MODULO.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'MODULO');
    addToHistory(X.value, Y.value, res, '%');
    RESULT.innerText = res;
})

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
    HISTORY.innerHTML = `${x} ${operator} ${y} = ${result} | ` + HISTORY.innerHTML;
}
