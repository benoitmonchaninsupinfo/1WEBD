/**
 * Exercice 6.3
 * A partir de cette api public, 
 * https://open-meteo.com/en/docs
 * Recherchez les coordonnées Gps de l’école (Google Map)
 * Testez le endpoint dans PostMan
 * Récupérez via fetch, les températures (paramètres hourly=temperature_2m)
 * Affichez sous forme de graphe, ces températures
 * https://www.chartjs.org/docs/latest
 */

// On appelle l'API avec les coordonnées GPS de Lille
const jsonRes = fetch('https://api.open-meteo.com/v1/forecast?latitude=48.856614&longitude=2.3522219&hourly=temperature_2m').then((res) => {
    // On récupère la réponse en JSON
    return res.json();
});

// On récupère les données de la réponse
jsonRes.then((data) => {

    // On récupère les températures
    const temperatures = data.hourly.temperature_2m;

    // On récupère les labels qui sont les heures
    const times = data.hourly.time.map((time) => {

        // On créé une date à partir de celles données par l'API
        const date = new Date(time);

        // On retourne la date et l'heure sous forme de string pour chaque label
        return date.toLocaleDateString() + ' : ' + date.toLocaleTimeString();

    });

    // On récupère le canvas où on va afficher le graphe
    const ctx = document.getElementById('myChart').getContext('2d');

    // On créé le graphe avec Chart.js
    // https://www.chartjs.org/docs/latest
    // On lui passe les données et les options, je vous laisse vous documenter, ce n'est pas le but de l'exercice
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: 'Température',
                data: temperatures,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
