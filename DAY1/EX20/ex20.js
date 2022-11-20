/**
 * Exercice 1.20
 * En utilisant les fonctions alert() et prompt(), faire un fichier HTML qui à partir d’un bouton sur la page WEB demande 2 entiers l’un après l’autre à un utilisateur.
 * Les résultats affichés ensuite seront la somme, puis la multiplication de ces 2 entiers.
*/

// Récupérons les valeurs que l'utilisateur va entrer
const value1 = prompt('Entrez un premier nombre :');
const value2 = prompt('Entrez un deuxième nombre :');

// Affichons les résultats à l'utilisateur
// Pour rappel sur les littéraux de gabaris (template literals en anglais), consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
alert(`La somme des nombres ${value1} et ${value2} est égale à ${Number(value1) + Number(value2)}`);
alert(`La multiplication des nombres ${value1} et ${value2} est égale à ${Number(value1) * Number(value2)}`);

// Je ne me suis pas embêter à sécuriser le code comme dans les exercices 7 et 8
// Mais gardez en tête que les utilisateurs peuvent entrer tout et n'importe quoi et que si vous voulez uniquement des nombres, ce sera requis.
