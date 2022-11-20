/**
 * Exercice 1.3
 * A partir du tableau suivant : [1, 2, 3, 4]
 *  - affichez le nombre d’élément qu’il contient
 *  - affichez la valeur du premier élément et du dernier élément
 *  - affichez la somme des valeurs
*/

// On déclare une variable numbers avec le tableau de nombre indiqué
let numbers = [1, 2, 3, 4];

// Grâce à la propriété length des tableaux en JavaScript, on affiche la taille du tableau dans la console
console.log("Le nombre d'éléments :", numbers.length);

/**
 * On affiche dans la console le premier élément du tableau grâce à son index
 * Rappel: un tableau en JS commence par l'index 0
 */
console.log("Le premier élément :", numbers[0]);

/**
 * On affiche dans la console le dernier élément du tableau grâce à son index
 * Le dernier index est la taille du tableau - 1. Dans notre cas, le tableau a une taille de 4, son dernier élément est à l'index 3
 */
console.log("Le dernier élément :", numbers[numbers.length - 1]);

/**
 * Grâce à la méthode reduce des tableaux en JavaScript, on récupère la somme de tous les éléments de notre tableau dans la variable tout juste déclarée `sum`
 * On passe une fonction en premier paramètre avec les arguments suivants : `total` (la valeur finale à l'itération en cours) et `number` (l'élément du tableau à l'itération en cours)
 */
let sum = numbers.reduce(function (total, number) {
  // Cette fonction va éxecuter le script suivant : elle va retourner la somme de `total` et `number`
  return total + number;
}, 0); // On donne à reduce la valeur de départ, ici 0, on veut la somme des éléments

/**
 * Voici ce que reduce a fait :
 * let sum = 0;
 * sum = 0 + 1; (valeur de départ + le premier élément du tableau, 1)
 * sum = 1 + 2; (la somme à cet instant, 1 + le deuxième élément du tableau, 2)
 * sum = 3 + 3; (la somme à cet instant, 3 + le deuxième élément du tableau, 3)
 * sum = 6 + 4; (la somme à cet instant, 6 + le deuxième élément du tableau, 4)
 */

// Et on l'affiche dans la console
console.log("La somme des valeurs :", sum);
