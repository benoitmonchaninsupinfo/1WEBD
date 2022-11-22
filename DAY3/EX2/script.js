/**
 * Exercice 3.2
 * A partir d’une page html vierge, générer dynamiquement le code suivant
*/

// Créons notre "div" grâce à la méthode "createElement" de notre document HTML
let div = document.createElement('div');

// On lui donne l'attribut "class" avec la valeur "main" ce qui donne "<div class="main"></div>"
div.setAttribute('class', 'main');

// Créons notre liste, de la même façon que la "div" mais cette fois avec "ul"
let list = document.createElement('ul');

// De la même façon, on y ajoute la classe "liste"
list.setAttribute('class', 'liste');

// Créons nos 2 items de liste, des "li", auxquels on insère du code HTML
let listItem1 = document.createElement('li');
listItem1.innerHTML = '<a href="lien1.php" class="lien">page 1</a>';
let listItem2 = document.createElement('li');
listItem2.innerHTML = '<a href="lien2.php" class="lien">page 2</a>';

// On va maintenant ajouter nos items de liste dans notre liste, grâce à la méthode "appendChild" de notre liste
// A savoir que "appendChild" est native à tout élément DOM en JavaScript
list.appendChild(listItem1);
list.appendChild(listItem2);

// On ajoute notre liste à la div, de la même façon
div.appendChild(list);

// Et on finit par ajouter notre div à notre document HTML
// Dans mon cas, je l'ajoute après le "h1" de ma page après l'avoir séléctionné
// Sinon vous pouvez faire comme ceci : document.body.appendChild(div)
// J'ai fait comme ceci pour que la div ne se retrouve pas avant le titre de la page
document.querySelector('h1').insertAdjacentElement('afterend', div);

// Je vous invite à vérifier que vos éléments sont bien placés grâce à l'inspécteur Web
