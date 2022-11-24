/**
 * Exercice 3.5
 * Développez une horloge analogique
 * L’HTML et le CSS sont fournis et utilisés dans index.html et styles.css
 * P.S. : Il y a un leget bug d'animation des aiguilles quand on change de minute, mais ce n'est pas très important pour l'exercice
*/

function getDate() {
    // On récupère la date actuelle
    const date = new Date(Date.now());

    // On récupère les heures, minutes et secondes de la date pour les afficher dans nos éléments HTML
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // On récupère les références de nos éléments HTML pour les aiguilles
    const hoursRef = document.querySelector('#hour');
    const minutesRef = document.querySelector('#minute');
    const secondsRef = document.querySelector('#second');

    // On calcule les degrés de rotation de nos aiguilles
    const hoursDegrees = (hours / 12) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const secondsDegrees = (seconds / 60) * 360 + 90;

    // On applique les degrés de rotation de nos aiguilles en modifiant le style de nos éléments HTML avec la propriété transform
    hoursRef.style.transform = `rotate(${hoursDegrees}deg)`;
    minutesRef.style.transform = `rotate(${minutesDegrees}deg)`;
    secondsRef.style.transform = `rotate(${secondsDegrees}deg)`;
}

// On appelle la fonction getDate() pour afficher l'heure au chargement de la page
getDate();

// On appelle la fonction getDate() toutes les secondes
setInterval(getDate, 1000);
