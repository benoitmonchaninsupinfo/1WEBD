/**
 * Exercice 1.15
 * La suite de Fibonacci est une suite de nombres entiers 0, 1, 1, 2, 3, 5, 8, 13...
 * La suite commence par 0 et 1, chaque nombre suivant est constitué de la somme des 2
 * précédents
 * 0
 * 1
 * 0+1 = 1
 * 1+1 = 2
 * 2+1 = 3
 * 3+2 = 5
 * 5+3 = 8
 * 8+5 = 13
 * ....
 * Ecrivez cet algorithme, affichez le nombre de la huitième itération
 */

// On commence notre suite avec les deux premiers entiers à additionner sous forme de tableau, soit 0 et 1
let fibo = [0, 1];

// On va itérer de 1 jusqu'à 8 pour aller jusqu'à la huitième itération
// Pour rappel sur la boucle for, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for
for(let i=1; i < 8; i++) {
    // Pour chaque itération, on va ajouter un élément dans notre tableau qui sera la somme de la valeur précédente et celle qui correspond à l'itération en cours
    // La méthode push permet d'ajouter un élément à la fin du tableau
    fibo.push(fibo[i] + fibo[i - 1]);
}

// On affiche notre tableau pour voir le résultat
console.log(fibo);
