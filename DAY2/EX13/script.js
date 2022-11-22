/**
 * Exercice 2.13
 * A partir de la structure suivante, lister récursivement tous les éléments du bloc "section"
*/

// On récupère notre section
const section = document.querySelector('.section');

// Je vous invite à être curieux et regarder quelle propriété on va pouvoir utiliser pour récupérer les éléments enfants de notre section
console.log(section.childNodes);
// On va donc utiliser la propriété "childNodes"

// On veut afficher nos éléments récursivement, on va donc créer une fonction récursive (qui s'appelera elle-même)
function displayNodes(parent) {

    // On va itérer sur les enfants de notre parent
    for(let child of parent.childNodes) {

        // On affiche dans la console chaque élément enfant
        console.log(child);

        // Et on rappelle notre fonction (elle est récursive) pour afficher les enfants de chaque enfant
        displayNodes(child);

    }
}

// On peut initiallement appeler la fonction "displayNodes" pour afficher tous les enfants et sous enfants de notre section
displayNodes(section);

// J'ai remarqué que vous allez avoir du texte entre chacun de vos éléments, n'y prêtez attention, ce sont les retours à la ligne dans votre code HTML
