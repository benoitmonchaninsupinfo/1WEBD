/**
 * Exercice 1.9
 * Vous développez un jeu, votre personnage, peut réaliser différentes actions (marcher, courir, tomber, frapper, mourir), écrivez la structure de contrôle qui permettrait de gérer ces actions
 */

// On récupère l'action que l'utilisateur va entrer grâce à la méthode prompt
let action = prompt('Quelle action va faire l\'utilisateur ?');

/**
 * Grâce à la structure de contrôle switch, on affiche l'action que l'utilisateur veut réaliser
 * Pour un rappel concernant le switch, consultez la page suivante : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch
 */
switch(action) {
    case 'marcher':
        console.log('Il marche');
        break;
    case 'courir':
        console.log('Il court');
        break;
    case 'tomber':
        console.log('Il tombe');
        break;
    case 'frapper':
        console.log('Il frappe');
        break;
    case 'mourir':
        console.log('Il meurt');
        break;
    // Dans le cas où l'action entrée n'est pas parmi les options ci-dessus, on entre dans le cas par défaut
    default:
        console.log('L\'action entrée n\'est pas valide');
}
