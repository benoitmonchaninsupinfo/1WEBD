/**
 * Exercice 2.10
 * Faire une page HTML contenant une photo.
 * Au passage de la souris sur la photo, la photo change.
 * L’action est faite en javascript.
*/

// On récupère la référence de notre image grâce à son id "image-changing"
const imageChanging = document.getElementById('image-changing');

// On ajout un écouteur d'événement pour "mouseenter", comme pour l'exercice précédent
imageChanging.addEventListener('mouseenter', () => {
    // On change la source de l'image, pour changer l'image
    imageChanging.src = './image2.jpg'
});

// On ajout un écouteur d'événement pour "mouseleave", comme pour l'exercice précédent
imageChanging.addEventListener('mouseleave', () => {
    // On change la source de l'image, pour remettre l'image de base
    imageChanging.src = './image1.jpg'
});
