/**
 * Exercice 6.1
 * Demandez a l’utilisateur s’il aime votre site, enregistrez la réponse en cookie
 * A chaque affichage de la page, affichez lui son choix
 */

// Si on a auncun cookie, on demande à l'utilisateur s'il aime le site
if (document.cookie === '') {
    const choice = confirm('Aimez vous le site ?');

    // On enregistre la réponse de l'utilisateur dans un cookie
    document.cookie = 'userLikeMySite=' + choice;

} else {
    // Sinon, on récupère le cookie et le choix de l'utilisateur qu'on convertit en boolean
    const userLikeMySite = document.cookie.split('=')[1] === 'true';

    // On affiche le choix de l'utilisateur
    if (userLikeMySite) {
        alert('Vous aimez le site !');
    } else {
        alert('Vous n\'aimez pas le site !');
    }
}
