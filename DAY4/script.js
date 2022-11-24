const m = "m"; //représente un mur
const p = "p"; //représente le personnage
const b = "b"; //représente le chemin
const f = "f"; //représente le trophée

const defaultXPerso = 1; //position initial du personnage sur l'axe X
const defaultYPerso = 1; //postition initial du personnage sur l'axe Y

let xperso = defaultXPerso;
let yperso = defaultYPerso;

let xTrophy = 9; // position du trophée sur l'axe X
let yTrophy = 5; // position du trophée sur l'axe Y

let timer; // variable qui contient l'identifiant de l'intervalle
let time = 0; // On initialise le timer à 0

//tableau à double entrée représentant votre labyrinthe, vous pouvez le modifier pour comprendre le fonctionnement
const laby = [
  [m, m, m, m, m, m, m, m, m, m],
  [m, p, m, b, b, b, b, b, b, m],
  [m, b, m, b, m, m, m, b, m, m],
  [m, b, m, b, m, b, m, b, b, m],
  [m, b, b, b, m, b, m, m, b, m],
  [m, b, m, b, m, b, b, b, b, f],
  [m, m, m, m, m, m, m, m, m, m],
];

// On récupère nos éléments HTML
const leLaby = document.getElementById("laby"); // le labirynthe pour gérer le mouvement au clic

const UP = document.getElementById('up'); // Le bouton qui permet de bouger vers le haut
const LEFT = document.getElementById('left'); // Le bouton qui permet de bouger vers la gauche
const DOWN = document.getElementById('down'); // Le bouton qui permet de bouger vers le bas
const RIGHT = document.getElementById('right'); // Le bouton qui permet de bouger vers la droite

const autoFinishButton = document.getElementById('auto-finish'); // Le bouton qui permet de lancer la résolution du labyrinthe automatiquement

// Cette fonction va afficher le labirynthe dans notre page HTML
function afficheLaby() {
  // On comment contenu du labyrinthe avec une balise d'ouverture d'un tableau HTML
  let insertion = "<table border=0 cellspacing=0 cellpadding=0>";

  // On parcourt le tableau à double entrée
  for (i = 0; i < laby.length; i++) {

    // On ajoute une balise d'ouverture de ligne
    insertion += "<tr>";
    for (j = 0; j < laby[i].length; j++) {

      // On ajoute une balise d'ouverture de donnée dans le tableau
      insertion += `<td id="${i}_${j}">`;

      // On ajoute l'image correspondante au contenu de la case
      switch(laby[i][j]) {
        case m:
            insertion += "<img width='52'height='52' src='Assets/stonewall.png'>";
            break;
        case p:
            insertion +=
            "<img width='52' height='52' style='background-image:Assets/Ground.png' src='Assets/Heros.png'>";
            break;
        case b:
            insertion += "<img width='52' height='52' src='Assets/Ground.png'>";
            break;
        case f:
            insertion += "<img width='52' height='52'src='Assets/Trophy.png'>";
      }

      // On ajoute une balise de fermeture de donnée dans le tableau
      insertion += "</td>";
    }

    // On ajoute une balise de fermeture de ligne
    insertion += "</tr>";
  }

  // On ajoute une balise de fermeture de tableau
  insertion += "</table>";

  // On insère le tout dans le labyrinthe
  leLaby.innerHTML = insertion;
}

// Cette fonction va déplacer le personnage dans le labyrinthe
// Elle prend en paramètre la direction dans laquelle on veut bouger
function moveP(direction) {

    // On récupère la position actuelle du personnage
    let x = xperso;
    let y = yperso;

    // On déplace le personnage dans la direction souhaitée
    switch(direction) {
        case 'up':
            y--;
            break;
        case 'left':
            x--;
            break;
        case 'down':
            y++;
            break;
        case 'right':
            x++;
    }

    // On vérifie que la case où on veut aller est accessible
    if (canGo(x, y)) {

        // Si oui, on met à jour la position du personnage
        moveTo(x, y);
    }
}

// Cette fonction va déplacer le personnage vers le haut
function moveUp() {
    moveP('up');
}

// Cette fonction va déplacer le personnage vers la gauche
function moveLeft() {
    moveP('left');
}

// Cette fonction va déplacer le personnage vers le bas
function moveDown() {
    moveP('down');
}

// Cette fonction va déplacer le personnage vers la droite
function moveRight() {
    moveP('right');
}

// Cette fonction va retourner true si la case est accessible, false sinon
function canGo(x, y) {

    // On vérifie que la case n'est pas un mur
    return laby[y][x] !== m

        // On vérifie que la case n'est pas celle ou se trouve déjà le personnage
        && (x !== xperso || y !== yperso)

        // On vérifie que la case est une case adjacente à celle du personnage
        && (
            // La case est à gauche ou à droite
            ((x === xperso - 1 || x === xperso + 1) && y === yperso)

            // La case est au dessus ou en dessous
            || ((y === yperso - 1 || y === yperso + 1) && x === xperso)
        );
}

// Cette fonction va déplacer le personnage suivant la flèche du clavier appuyée
function handleKeyUp(event) {
    switch(event.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowRight":
            moveRight();
    }
}

// Cette fonction va déplacer le personnage vers la case cliquée
function handleLabyClick(event) {

    // On initialise la variable qui va contenir la référence de la case cliquée
    let elementRef;

    // Si la case cliquée est une image
    if (event.target.nodeName === 'IMG') {

        // La référence de la case est la référence de l'élément parent (la balise <td>)
        elementRef = event.target.parentNode;
    } else {

        // Sinon, la référence de la case est la référence de l'élément lui-même
        elementRef = event.target;
    }

    // On récupère les coordonnées de la case cliquée
    const [y, x] = elementRef.id.split('_');

    // On vérifie que la case est accessible
    // Attention, on convertit les coordonnées en nombre car elles sont récupérées sous forme de chaîne de caractères
    if (canGo(Number(x), Number(y))) {

        // Si oui, on déplace le personnage vers la case cliquée
        moveTo(Number(x), Number(y));
    }
}

// Cette fonction va déplacer le personnage vers la case dont les coordonnées sont passées en paramètre
function moveTo(x, y) {

    // On place le personnage sur la case demandée
    laby[y][x] = p;

    // On place un sol sur la case où se trouvait le personnage
    laby[yperso][xperso] = b;

    // On met à jour les coordonnées du personnage
    xperso = x;
    yperso = y;

    // Si le personnage est sur la case du trésor
    if (xperso === xTrophy && yperso === yTrophy) {

        // On appelle la fonction finish()
        finish();
    }

    // On affiche de nouveau le labyrinthe pour prendre en compte les changements
    afficheLaby();
}

// Cette fonction va démarer ou redémarrer le jeu
function start() {

    // On désactive le bouton de démarrage automatique
    autoFinishButton.disabled = false;

    // On place un sol sur la case où se trouvait le personnage
    laby[yperso][xperso] = b;

    // On place le personnage sur la case de départ
    laby[defaultYPerso][defaultXPerso] = p;

    // On place le trophée
    laby[yTrophy][xTrophy] = f;

    // On met à jour les coordonnées du personnage
    xperso = defaultXPerso;
    yperso = defaultYPerso;

    // On affiche le labyrinthe
    afficheLaby();

    // On ajoute les écouteurs d'événements
    addEventListeners();

    // On réinitialise le timer
    time = 0;

    // On lance le timer
    timer = setInterval(displayTime, 1000);
}

// Cette fonction va arrêter le jeu et afficher le message de fin
function finish() {

    // On supprime les écouteurs d'événements
    removeEventListeners();

    // On arrête le timer
    clearInterval(timer);

    // On affiche le message de fin avec le temps écoulé, après un délai de 10 millisecondes pour laisser le temps au navigateur de mettre à jour le DOM
    setTimeout(() => alert('Vous avez gagné, bien joué ! Vous avez mit ' + time + ' secondes à terminer le labyrinthe'), 10);
}

// Cette fonction va démarer le jeu en mode automatique
function autoFinish() {

    // On supprime les écouteurs d'événements, pour éviter que le joueur puisse déplacer le personnage pendant le déroulement automatique
    removeEventListeners();

    // On désactive le bouton de démarrage automatique
    autoFinishButton.disabled = true;

    // On défini le chemin à suivre (pas de path finding, on va juste aller vers le trésor)
    const path = [
        {x: 1, y: 2},
        {x: 1, y: 3},
        {x: 1, y: 4},
        {x: 2, y: 4},
        {x: 3, y: 4},
        {x: 3, y: 3},
        {x: 3, y: 2},
        {x: 3, y: 1},
        {x: 4, y: 1},
        {x: 5, y: 1},
        {x: 6, y: 1},
        {x: 7, y: 1},
        {x: 7, y: 2},
        {x: 7, y: 3},
        {x: 8, y: 3},
        {x: 8, y: 4},
        {x: 8, y: 5},
        {x: 9, y: 5},
    ];

    // On initialise un index pour parcourir le chemin
    let moveIndex = 0;

    // On lance la fonction récursive qui va déplacer le personnage, en passant en paramètre le chemin et l'index du premier déplacement
    autoMove(path, moveIndex);
}

// Cette fonction va déplacer le personnage vers la case suivante du chemin
function autoMove(path, moveIndex) {

    // On utilise setTimeout pour déplacer le personnage avec un délai de 500 millisecondes
    setTimeout(() => {

        // On déplace le personnage vers la case suivante du chemin
        moveTo(path[moveIndex].x, path[moveIndex].y);

        // On incrémente l'index et on récupère la case suivante
        const nextMove = path[++moveIndex];

        // Si la case suivante existe
        if (nextMove) {

            // On appelle à nouveau la fonction récursive
            autoMove(path, moveIndex);
        }
    }, 500);
}

// Cette fonction va ajouter les écouteurs d'événements
function addEventListeners() {

    // On suppresse les écouteurs d'événements pour éviter les doublons
    removeEventListeners();

    // On ajoute un écouteur d'événement sur le bouton "Up"
    UP.addEventListener('click', moveUp);

    // On ajoute un écouteur d'événement sur le bouton "Left"
    LEFT.addEventListener('click', moveLeft);

    // On ajoute un écouteur d'événement sur le bouton "Down"
    DOWN.addEventListener('click', moveDown);

    // On ajoute un écouteur d'événement sur le bouton "Right"
    RIGHT.addEventListener('click', moveRight);

    // On ajoute un écouteur d'événement sur les touches du clavier
    document.addEventListener('keyup', handleKeyUp);

    // On ajoute un écouteur d'événement sur le clic de souris sur le labyrinthe
    leLaby.addEventListener('click', handleLabyClick);
}

// Cette fonction va supprimer les écouteurs d'événements
function removeEventListeners() {
    UP.removeEventListener('click', moveUp);
    LEFT.removeEventListener('click', moveLeft);
    DOWN.removeEventListener('click', moveDown);
    RIGHT.removeEventListener('click', moveRight);
    document.removeEventListener('keyup', handleKeyUp);
    leLaby.removeEventListener('click', handleLabyClick);
}

// Cette fonction va incrémenter le timer, le formater et l'afficher
function displayTime() {

    // On incrémente le timer
    time++;

    // On récupère l'élément HTML qui va afficher le temps, et on lui affecte le temps formaté
    document.getElementById('timer').innerText = formatTime(time);
}

// Cette fonction va formater le temps
function formatTime(secs) {

    // On récupère les minutes
    let minutes = secs > 60 ? parseInt(secs / 60) : 0;

    // Si on a plus de 9 minutes, on affiche les minutes, sinon on affiche un 0 devant
    minutes = minutes > 9 ? minutes : '0' + minutes;

    // On récupère les secondes
    let seconds = parseInt(secs % 60);

    // Si on a plus de 9 secondes, on affiche les secondes, sinon on affiche un 0 devant
    seconds = seconds > 9 ? seconds : '0' + seconds;

    // On retourne le temps formaté
    return `${minutes}:${seconds}`;
}
