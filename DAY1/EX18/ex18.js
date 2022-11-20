/**
 * Exercice 1.18
 * A partir de ce tableau, array = [1, 2, 3, -2, 4, 5, 6, -2];
 * Ecrivez un code qui ne permet de garder que les nombres positifs, et calculez la moyenne de ces nombres positifs
 */

// Déclarons notre tableau
let array = [1, 2, 3, -2, 4, 5, 6, -2];

// Déclarons un nouveau tableau qui contiendra uniquement les nombres positifs
let arrayPositif;

/**
 * Nous allons filtrer notre tableau pour récupérer les valeurs positives
 * Pour cela, on va utiliser la méthode filter, native aux tableaux en JavaScript
 * filter retourne le nouveau tableau filtré, d'où l'assignation à arrayPositif
 * Cette méthode a besoin d'une fonction qui servira de filtre, elle va s'éxecuter pour chaque valeur de array donc on va passer en argument la valeur au moment de l'éxecution
 */
arrayPositif = array.filter(function(value) {
    // Ici, on va avoir besoin de retourner un booléen (true ou false) pour savoir si la valeur pourra aller dans notre nouveau tableau ou non
    // La condition sera évidemment "si la valeur est supérieurs ou égale à 0"
    return value >= 0;
})

// On peut déjà afficher le résultat pour voir ce que ça donne
console.log(arrayPositif);

// Pour calculer la moyenne, on va avoir besoin de la somme de nos valeurs
// On réutiliser reduce (c.f. Day 1 - Ex 3)
let sum = arrayPositif.reduce(function(total, value) {
    return total + value;
});

// Plus qu'à calculer notre moyenne et l'afficher
console.log(sum / arrayPositif.length);
