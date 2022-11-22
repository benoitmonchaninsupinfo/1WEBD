/**
 * Exercice 3.1
 * A partir de l’exercice 2.6, numéroté chaque paragraphe (c’est juste pour se repérer), à présent, le paragraphe 1 : p1, doit se situer après p3, p4 doit se situer avant p2, p5 dans p6 mais au début
*/

// On récupère les paragraphes 1 et 3
let p1 = document.getElementById('p1');
let p3 = document.getElementById('p3');

// Grâce à la méthode "inserAdjacentElement" utilisé depuis le paragraphe 3,
//  avec la valeur "afterend" et le paragraphe 1 en paramètre, on place le paragraphe 1 après la balise de fermeture du paragraphe 3
p3.insertAdjacentElement('afterend', p1);

// On récupère les paragraphes 1 et 3
let p4 = document.getElementById('p4');
let p2 = document.getElementById('p2');

// Grâce à la méthode "insertBefore" du body de notre document HTML,
//  on donne d'abord le paragraphe 4 puis le paragraphe 2 pour placer le paragraphe 4 avant le paragraphe 2
document.body.insertBefore(p4, p2);

// p6 dans p5 mais au début
// On récupère les paragraphes 1 et 3
let p6 = document.getElementById('p6');
let p5 = document.getElementById('p5');

// Grâce à la méthode "inserAdjacentElement" utilisé depuis le paragraphe 5,
//  avec la valeur "afterbegin" et le paragraphe 6 en paramètre, on place le paragraphe 6 après la balise d'ouverture du paragraphe 5
p5.insertAdjacentElement('afterbegin', p6);
// Pour vérifié que cette instruction a bien fonctionné, je vous invite à inspecter vos éléments dans l'inspecteur Web.
// Comme ce sont des balises "p", leur style par défaut ne permet pas de le voir
