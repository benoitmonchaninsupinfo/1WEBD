/**
 * Exercice 1.10
 * Traduisez ces instructions en ternaire
 */

/**
 * let x = 3;
 * if (x % 2) {
 *   alert("impair");
 * } else {
 *   alert("pair");
 * }
 */

let x = 3;
x % 2 ? alert('impair') : alert('pair');

/**
 * if (x>2 & x *2<5) {
 *   alert('1ere tranche')
 * }
 */

(x >= 2 && x**2 < 5) ? alert('1ere tranche') : null

// Pour un rappel concenant l'opération ternaire, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
