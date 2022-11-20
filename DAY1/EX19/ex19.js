/**
 * Exercice 1.19
 * A partir de ce tableau, array = [4, 2, 3, 6, 7, 8, 9]
 * Ecrivez le code qui permet de le transformer en ce tableau, array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Vous n’avez pas de droit de créer un nouveau tableau
*/

// Définissons notre tableau
const array = [4, 2, 3, 6, 7, 8, 9];

// Commençons par trier ce tableau pour avoir les nombres dans l'ordre grâce à la méthode sort
array.sort();

/**
 * Il nous manque le chiffre 5, ajoutons le à l'aide de la méthode splice
 * Pour rappel de la méthode splice, consultez cette page : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * En partant de l'index 3 (ou le chiffre 5 est manquant), on ne supprime aucune valeur et on ajoute la valeur 5
*/
array.splice(3, 0, 5);

// Il nous manque plus que les chiffres 0 et 1 au début du tableau
// Pour les ajouter on va utiliser la méthode unshift qui permet d'insérer de nouveaux éléments au début du tableau, ici 0 et 1
array.unshift(0, 1);

// Plus qu'à admirer notre résultat
console.log(array);
