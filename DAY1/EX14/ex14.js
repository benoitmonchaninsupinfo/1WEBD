/**
 * Exercice 1.14
 * Chaque caractère a une valeur "ascii", étudiez la fonction charCodeAt()
 * A partir de votre prénom, écrivez une boucle qui va calculer la somme ascii des caractères composant votre prénom
 * Attention les majuscules et les minuscules n’ont pas la même valeur;
 */

// On initialise notre somme à 0;
let sum = 0;

// On choisit un prénom, entrez le votre (on aurait pu utiliser prompt pour demander le prénom à l'utilisateur)
let firstname = 'Benoit';

// On va itérer sur toutes les lettre du prénom
// Pour rappel sur la boucle for, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for
for(let i = 0; i < firstname.length; i++) {
    // Ici, la méthode charCodeAt va récupérer la valeur ascii de la lettre à l'index i dans notre prénom pour l'ajouter à la somme
    sum += firstname.charCodeAt(i);
}

// On affiche le résultat
console.log(sum);
