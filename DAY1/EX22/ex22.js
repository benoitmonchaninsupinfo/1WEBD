/** Exercice 1.22
 * Transformez cette chaine en tableau indexé
 * Affichez de trois façon différentes, les lettres de l’alphabet
*/

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Commençons par transformer cette chaîne de caractères en tableau
 * On va utiliser la méthode split, elle permet de faire ce qu'on veut en spécifiant un séparateur vide
 * Pour un rappel sur la méthode split, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/
alphabet = alphabet.split('');

// Voici trois façons d'afficher toutes les valeurs de notre tableau
// 1: Afficher tout le tableau
console.log(alphabet);

// 2: Afficher les lettres une par une
// Si besoin, la méthode forEach est expliquée à l'exercice 12
alphabet.forEach(function(letter) {
    console.log(letter);
});

// 3: Afficher le tableau avec console.table
// console.table permet d'afficher de façon explicite un tableau dans la console, pour plus d'information consultez cette page : https://developer.mozilla.org/fr/docs/Web/API/Console/table
console.table(alphabet);
