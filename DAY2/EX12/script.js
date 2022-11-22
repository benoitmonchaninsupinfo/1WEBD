/**
 * Exercice 2.12
 * Dans une page html, créer 3 liens html, ce seront 3 liens qui renvoient vers des sections de la page (encres nommés).
 * Lorsque que l’on clique sur 1 lien, sa forme change, cela permet de savoir sur quelle section nous sommes.
 * Ecrivez le code qui permet de mettre en avant le lien sélectionné, et bien sûr de remettre à son état originel, l’ancien lien cliqué.
*/

// On récupère les liens qui on la classe "link"
const links = document.getElementsByClassName('link');

// On boucle sur tous les liens, de la même façon que pour nos paragraphes de l'exercice 11
for(let link of links) {

    // On va ajouter un écouteur d'événement "click" sur chaque lien, pour savoir quand on clique dessus
    // A chaque fois qu'on va cliquer sur l'un ou l'autre des liens de notre tableau, la fonction anonyme donnée en paramètre de "addEventListener" va s'éxecuter
    link.addEventListener('click', () => {

        // On récupère le lien qui possède la classe "active" grâce à "querySelector" qui prend en argument un sélécteur CSS et renverra un seul élément
        const activeLink = document.querySelector('.active');

        // Si le lien actif est différent du lien sur lequel on a cliqué
        if (activeLink !== link) {

            // On enlève la classe "active" du précédent
            activeLink.classList.remove('active');

            // Et on ajoute la classe active au lien sur lequel on vient de cliquer
            link.classList.add('active');
        }
    })
}
