/**
 * Exercice 1.12
 * Ecrivez un tableau qui contient toutes les lettres de l’alphabet en minuscule.
 * Ecrivez une boucle qui va afficher tous les éléments de ce tableau 1 par 1 en MAJUSCULE
 * Proposez plusieurs solutions
 */

// On créé une variable alphabet qui va contenir un tableau avec chaque lettre de l'alphabet en entrée
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * Une première solution va utiliser une boucle for classique
 * 
 * On va boucler sur le tableau
 *  à partir de l'index 0 ("let i = 0", i est l'état de l'itération)
 *  tant que i est plus petit que la taille du tableau ("i < alphabet.length")
 *  et à chaque itération, on va incrémenter i
 * Pour rappel sur la boucle for, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for
 */
for (let i = 0; i < alphabet.length; i++) {
    // On va afficher la valeur du tableau à l'index i, en majuscule
    // La méthode toUpperCase est native aux chaînes de caractères JavaScript et permet de convertir toutes les lettre d'une chaîne de caractères en majuscules
    console.log(alphabet[i].toUpperCase(),);
}

/**
 * Une seconde solution, qui est un raccourci de la première
 * 
 * On va utiliser la méthode forEach, qui est native aux tableaux JavaScript
 * On va lui passer une fonction anonyme qui va s'éxecuter pour chaque entrée de notre tableau, elle prend en paramètre l'entrée du tableau pour chaque itération
 * Cette méthode fonctionne exactement comme ce qu'on a écrit plus tôt, on a juste remplacé "alphabet[i]" par "letter" dans l'éxecution
 * Pour rappel sur la méthode forEach, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
alphabet.forEach(function(letter) {
    console.log(letter.toUpperCase());
});

/**
 * Et une troisième solution serait d'utiliser while
 * 
 * Pour rappel sur la boucle while, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/while
 * On défini notre index à 0
 */
let i = 0;
// On va éxecuter le code du while tant que i est plus petit que la taille du tableau (attention à éviter les boucles infinies)
while(i < alphabet.length) {
    // Pour chaque itération, comme pour les autres solutions, on affiche chaque entrée du tableau en majuscule
    console.log(alphabet[i].toUpperCase());
    // A la fin de chaque itération, on va incrémenter i pour passer à la lettre suivante
    i++;
}
