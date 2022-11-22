/**
 * Exercice 2.9
 * Faire une page HTML contenant un texte.
 * Au passage de la souris sur le texte, les mots changent de couleur.
 * L’action est faite en javascript.
*/

// On récupère la référence de notre texte qui a l'id "hover-text"
const hoverText = document.getElementById('hover-text');

// On ajoute un écouteur sur l'événement "mouseenter", ou "quand la souris arrive sur l'élément"
hoverText.addEventListener('mouseenter', () => {
    // On change la couleur du texte en passant par le style de celui-ci
    hoverText.style.color = "blue";
});

// On ajoute un écouteur sur l'événement "mouseleave", ou "quand la souris part de l'élément"
hoverText.addEventListener('mouseleave', () => {
    // On remet la couleur de texte par défaut, de la même façon
    hoverText.style.color = "black";
});
