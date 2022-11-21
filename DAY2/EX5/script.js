/**
 * Exercice 2.5
 * A partir du tableau de l’exercice 1.25, affichez les prénoms et calculez la somme total des ages dans le même bloc d’instruction et affichez la
*/

// Récupérons le tableau utilisé dans l'exercice 1.25
let users = [
    { name: 'borg', firstname:'jerome', age: 49 },
    { name: 'marcial', firstname: 'paul', age: 19 },
    { name: 'truchi', firstname: 'pierre', age: 20 },
    { name: 'golmich', firstname: 'jacques', age: 50 },
    { name: 'heros', firstname: 'patricia', age: 12 },
    { name: 'patou', firstname: 'sylvie', age: 30 },
];

// En une seule fonction appelée "sumUsers", on va récupérer les prénoms des utilisateurs et la somme de leur age
function sumUsers(users) {

    // On initialise notre somme à 0
    let sum = 0;

    // On va itérer sur les utilisateurs grâce à "map" pour récupérer un nouveau tableau appelé "firstnames"
    let firstnames = users.map(user => {

        // Pour chaque utilisateur on va ajouter son age à notre somme
        sum += user.age;

        // Et on va retourner son prénom qui arrivera dans le nouveau tableau "firstnames"
        // "return" ici n'est compris que pour la fonction donnée en paramètre de "map", ça n'arrête pas "sumUsers"
        return user.firstname;

    });

    // Et on finit par retourner un tableau associatif avec la somme et les prénoms
    // En mettant directement la variable, ça revient à faire :
    //  {
    //    sum: sum,
    //    firstnames: firstnames
    //  }
    // Dans ce cas, on peut raccourcir en mettant directement nos variables
    return { sum, firstnames };
}

// Admirons le resultat !
console.log(sumUsers(users));
