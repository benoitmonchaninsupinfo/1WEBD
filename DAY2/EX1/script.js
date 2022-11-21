/**
 * Exercice 2.1
 * Créer une fonction cube(), cette fonction prend en paramêtre une variable et renvoie le cube de cette variable.
 * Implémenter la fonction, faites un appel, avec 3, 5, -7 et afficher les résultats dans la console
*/

// Commençons par la façon la plus commune de déclarer une fonction, grâce au mot clé "function" suivi du nom de la fonction et de ses arguments entre ()
// "x" ici est le nom provisoir qu'a le futur nombre donné à la fonction, imaginez vous que c'est un nombre inconnu, il faut bien lui donner un nom
// Ensuite on ouvre les {} et on y écrit les instructions que la fonction doit éxecuter
// Dans notre bloc d'insctructions, on a le mot clé "return" qui va nous permettre de dire à la fonction qu'elle va renvoyer une valeur
// "return" n'est pas obligatoire, mais ici nous avons besoin de savoir ce que vaut x**3, donc on le retourne pour ensuite l'utiliser
function cube(x) {
    return x**3;
}

// On peut aussi stocker une fonction dans une variable, ici c'est une fonction anonyme, comme son nom l'indique, elle n'a pas de nom
// La mettre à l'intérieur d'une variable va nous permettre de l'appeler en utilisant le nom qu'on a donné à la variable
// Une fonction anonyme s'écrit comme une fonction nommée mais sans mettre de nom, simplement
let cube2 = function (x) {
    return x**3;
}

// Il existe aussi les fonctions flêchées, elles sont anonymes et doivent être stockées dans une variable
// Pour une fonction de ce type, on peut retirer le mot clé "function", la flêche rend la chose implicite
// La flêche s'écrit "=" suivi de ">", elle est précédée des arguments de la fonction et suivie du bloc d'insctructions
let cube3 = (x) => {
    return x**3;
}

// Pour le dernier petit exemple, on a ici une forme beaucoup plus courte et "simple" dans la forme
// Pour une fonction flêchée (c'est le cas ici), on n'a pas besoin de mettre les () autour d'un seul argument
// /!\ Attention à bien les mettre dès que vous passez à 2 arguments ou plus
// Une autre notion est vue ici, on ne met aucun bloc d'inscrutions, on met directement notre calcul
// On peut faire ceci quand on n'a besoin que d'une seule ligne d'instruction et qu'un résultat est retournée sur cette ligne
let cube4 = x => x**3

// Plus qu'à tester nos fonctions en les appelant avec des () après leur nom
// Notez que pour les fonctions "cube2", "cube3" et "cube4" qui sont dans des variables, on a bien utilisé le nom de la variable
// A l'intérieur des () on donné notre fameux "x" qui sera donc renvoyé au cube
console.log(cube(3), cube2(5), cube3(-7), cube4(3));
