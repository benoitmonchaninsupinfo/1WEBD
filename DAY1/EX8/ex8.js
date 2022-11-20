/**
 * Exercice 1.8
 * Ecrivez le code qui permet de vérifier si l’âge d’un utilisateur est situé entre 20 ans ET 30 ans OU 40 ans ET 50 ans
 */

// On récupère l'age que l'utilisateur va entrer grâce à la méthode prompt
let age = prompt('Quel age as-tu ?');

/**
 * On vérifie si ce que l'utilisateur a entrer est bien un nombre (pour sécuriser le code car la méthode prompt retourne une chaîne de caractères)
 * Ici on converti le contenu de la variable `age` en nombre et on utilise la méthode isNaN ("NaN" pour "Not a Number")
 * Pour un rappel concernant la syntaxe des "if...else...", consultez la page suivante : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
 */
if (isNaN(Number(age))) { // Si isNaN retourne TRUE, c'est que `age` n'est pas un nombre, on le dit à l'utilisateur
    console.log('C\'est pas un nombre');
} else { // Si isNaN retourne FALSE, c'est que `age` est bien un nombre
    if ((age >= 20 && age <= 30) || (age >= 40 && age <= 50)) { // Maintenant, on veut savoir si l'utilisateur a entre 20 et 30 ans ou 40 et 50 ans
        console.log('Tu as entre 20 ans et 30 ans ou 40 ans et 50 ans');
    } else {
        console.log('Tu n\'as pas entre 20 ans et 30 ans ou 40 ans et 50 ans');
    }
}
