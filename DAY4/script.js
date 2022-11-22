const m = "m"; //représente un mur
const p = "p"; //représente le personnage
const b = "b"; //représente le chemin
const f = "f"; //représente le trophée

const defaultXPerso = 1; //position initial du personnage sur l'axe X
const defaultYPerso = 1; //postition initial du personnage sur l'axe Y

let xperso = defaultXPerso;
let yperso = defaultYPerso;

let xTrophy = 9;
let yTrophy = 5;

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

const UP = document.getElementById('up');
const LEFT = document.getElementById('left');
const DOWN = document.getElementById('down');
const RIGHT = document.getElementById('right');

function afficheLaby() {
  const leLaby = document.getElementById("laby");
  let insertion = "<table border=0 cellspacing=0 cellpadding=0>";

  for (i = 0; i < laby.length; i++) {
    insertion += "<tr>";
    for (j = 0; j < laby[i].length; j++) {
      insertion += "<td>";
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
      insertion += "</td>";
    }
    insertion += "</tr>";
  }

  insertion += "</table>";
  leLaby.innerHTML = insertion;
}

function moveP(direction) {
    let x = xperso;
    let y = yperso;
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

    if (canGo(x, y)) {
        laby[y][x] = p;
        laby[yperso][xperso] = b;
        xperso = x;
        yperso = y;
        afficheLaby();
    }

    if (xperso === xTrophy && yperso === yTrophy) {
        finish();
    }
}

function moveUp() {
    moveP('up');
}

function moveLeft() {
    moveP('left');
}

function moveDown() {
    moveP('down');
}

function moveRight() {
    moveP('right');
}

function canGo(x, y) {
    return laby[y][x] !== m;
}

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

function start() {
    laby[yperso][xperso] = b;
    laby[defaultYPerso][defaultXPerso] = p;
    laby[yTrophy][xTrophy] = f;
    xperso = defaultXPerso;
    yperso = defaultYPerso;
    afficheLaby();
    addEventListeners();
}

function finish() {
    removeEventListeners();
    setTimeout(() => alert('Vous avez gagné, bien joué !'), 10);
}

function addEventListeners() {
    removeEventListeners();
    UP.addEventListener('click', moveUp);
    LEFT.addEventListener('click', moveLeft);
    DOWN.addEventListener('click', moveDown);
    RIGHT.addEventListener('click', moveRight);
    document.addEventListener('keyup', handleKeyUp);
}

function removeEventListeners() {
    UP.removeEventListener('click', moveUp);
    LEFT.removeEventListener('click', moveLeft);
    DOWN.removeEventListener('click', moveDown);
    RIGHT.removeEventListener('click', moveRight);
    document.removeEventListener('keyup', handleKeyUp);
}
