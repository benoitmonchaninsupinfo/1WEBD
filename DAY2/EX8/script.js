/**
 * Exercice 2.7
 * Faire une zone en début de page WEB pour placer la date et l’heure de visite
*/

// Déclarons la fonction "displayDate" qui va afficher la date dans une balise paragraphe au début de notre document HTML
function displayDate() {

    // On récupère la date du jour grâce à l'objet Date
    let date = new Date(Date.now());

    // On créé un nouvel élément HTML "p" => <p></p>
    const p = document.createElement('p');

    // On lui donne du texte, en l'occurence la date récupérée et formattée à la langue du navigateur => <p>01/01/2022 00:00:00</p>
    p.innerText = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    // Et on ajoute cet élément au "body" de notre document HTML
    document.body.prepend(p);
}

// La fontion étant déclarée, on va la déclenchée dès que notre page "window" a chargée
// On écoute donc l'événement "load" et on passe la fonction "displayDate" pour afficher notre date
// On l'a passe sans les () pour ne pas l'appeler, on lui donne juste la signature de la fonction
window.addEventListener('load', displayDate);
