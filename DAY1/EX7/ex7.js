/** Exercice 1.7
 * Ecrivez le code qui permet de vérifier si un utilisateur est majeur ou pas
 */

// On récupère l'age que l'utilisateur va entrer grâce à la méthode prompt
let age = prompt('Quela age as-tu ?');

/**
 * On vérifie si ce que l'utilisateur a entrer est bien un nombre (pour sécuriser le code car la méthode prompt retourne une chaîne de caractères)
 * Ici on converti le contenu de la variable `age` en nombre et on utilise la méthode isNaN ("NaN" pour "Not a Number")
 * Pour un rappel concernant la syntaxe des "if...else...", consultez la page suivante : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
 */
if (isNaN(Number(age))) { // Si isNaN retourne TRUE, c'est que `age` n'est pas un nombre, on le dit à l'utilisateur
    console.log('C\'est pas un nombre');
} else { // Si isNaN retourne FALSE, c'est que `age` est bien un nombre
    if (age >= 18) { // Maintenant, on veut savoir si l'utilisateur est majeur (18 ans ou plus) ou mineur (moins de 18 ans)
        console.log('Vous êtes majeur');
    } else {
        console.log('Vous êtes mineur');
    }
}
