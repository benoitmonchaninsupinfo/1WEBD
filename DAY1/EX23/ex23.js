/** Exercice 1.23
 * Affichez les lettres de l’alphabet de Z à A
*/

// Reprenons les lettres de l'exercice précédent que nous avions transformées en tableau
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
alphabet = alphabet.split('');

// Grâce à la méthode reverse, native aux tableaux JavaScript, on va inverser l'ordre des entrées de notre tableau
// Pour plus d'informations concernant la méthode reverse, consultez cette page : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
alphabet.reverse();

// De la même façon que pour l'exercice précédent, on va afficher les lettres une par une
alphabet.forEach(function(letter) {
    console.log(letter);
});
