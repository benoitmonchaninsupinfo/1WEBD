/**
 * Exercice 2.2
 * Créer une fonction strToBold(), cette fonction prend en paramètre une variable et renvoie cette variable avec le code html pour mettre en gras.
 * Implémenter la fonction, faites un appel, avec Hello World et afficher le résultat dans la console
*/

// Créons la fonction "strToBold" demandée
// Ici on va demander à cette fonction de retourner une concaténation de chaînes de caractères
// Pour faire cette concaténation il suffit de séparer les chaînes de caractères par des "+" pour les "ajouter" les unes aux autres
function strToBold(str) {
    return '<strong>' + str + '</strong>';
}

// Affichons le résultat dans la console en appelant la fonction avec des () et notre chaîne de caractère à mettre en gras à l'intérieur
console.log(strToBold('Hello World'));
