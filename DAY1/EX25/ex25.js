/*
 Exercice 1.25
 A partir de ce tableau de tableaux associatifs, affichez d'abord les prénoms, ensuite calculez la somme total des ages et affichez la
*/
let users = [
  { name: "borg", firstname: "jerome", age: 49 },
  { name: "marcial", firstname: "paul", age: 19 },
  { name: "truchi", firstname: "pierre", age: 20 },
  { name: "golmich", firstname: "jacques", age: 50 },
  { name: "heros", firstname: "patricia", age: 12 },
  { name: "patou", firstname: "sylvie", age: 30 },
];

/*
 Pour cet exercice, on va décourvrir la méthode "map" qui est native aux tableaux JavaScript
 Cette fonction renvoie un nouveau tableau, on a donc besoin de le stocker dans une nouvelle variable (ici "firstnames")
 "map" prend en premier argument une fonction qui va s'éxecuter pour chaque itération de notre tableau "users"
 Dans cette fonction on a besoin de retourner une valeur, cette valeur sera la valeur pour le nouveau tableau "firstnames" au même index que "users"
 Pour chaque "user" on veut le prénom ("firstname"), comme vu dans l'excercice précédent, on va récupérer la valeur à la clé "firstname" de chaque tableau associatif ("user.firstname") et la retourner
 Pour plus d'informations concernant la méthode map, consultez cette page : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
const firstnames = users.map(function (user) {
    return user.firstname;
});

// On affiche les prénoms dans la console
console.log(firstnames);

/*
 Nous avons déjà vu comment fonctionne la méthode "reduce" dans l'exercice 3
 La seule différence ici est qu'on ne va pas avoir de nombres mais un tableau associatif à chaque itération
 Comme plus haut, on va récupérer l'age de chaque "user" ("user.age") qu'on va ajouter au total pour chaque itération
 Ici, on spécifie la valeur de départ à 0, sinon la première valeur (stockée dans total à la première itération) sera un tableau associatif et on ne pourrait pas faire d'addition
  Si vous êtes curieux, essayer de ne pas le mettre pour vous rendre compte du problème :)
*/
const agesSum = users.reduce(function(total, user) {
    return total + user.age;
}, 0);

// Admirons le résultat
console.log(agesSum);
