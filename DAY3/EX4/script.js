/**
 * Exercice 3.4
 * Documentez-vous sur l’objet Date()
 * Développez une horloge numérique
 * 
 * P.S. : Le style de l'horloge n'est pas le même que celui de l'énoncé, ce n'est pas très important pour l'exercice
*/

// On récupère les références de nos éléments HTML
const hoursRef = document.querySelector('.hours');
const minutesRef = document.querySelector('.minutes');
const secondsRef = document.querySelector('.seconds');

function getDate() {
    // On récupère la date actuelle
    const date = new Date(Date.now());
    // On récupère les heures, minutes et secondes de la date pour les afficher dans nos éléments HTML
    hoursRef.textContent = date.getHours();
    minutesRef.textContent = date.getMinutes();
    secondsRef.textContent = date.getSeconds();
}

// On appelle la fonction getDate() pour afficher l'heure au chargement de la page
getDate();

// On appelle la fonction getDate() toutes les secondes
setInterval(getDate, 1000);
