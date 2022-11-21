/**
 * Exercice 2.3
 * Créer une fonction average(), cette fonction prend en paramètre un tableau avec des valeurs numériques et renvoie la moyenne des valeurs de ce tableau.
 * Implémenter la fonction, faites un appel, avec un tableau de valeurs numériques et afficher le résultat dans la console
*/

// Comme pour les exercices précédents, on va déclarer une nouvelle fonction, ici "average"
// Elle va prendre en paramètres les valeurs ("values") dont nous voulons la moyenne
// On ne met qu'une seule variable en argument car on veut uniquement un tableau et non directement les valeurs
// On a déjà vu dans les exercices du Day 1 comment faire une somme, ici on va la diviser la taille du tableau pour faire la moyenne
function average(values) {
    return values.reduce((total, value) => total + value, 0) / values.length
}

// Affichons le résultat de la moyenne des nombres 8, 12, 16 et 7
console.log(average([8, 12, 16, 7]));
