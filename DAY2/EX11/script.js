/**
 * Exercice 2.11
 * Créer une page html, avec 6 paragraphes, chaque paragraphe contient du texte mis en forme, et un attribut name.
*/

// On récupère tous les paragraphes qui on la classe "ex11"
let paragraphs = document.getElementsByClassName('ex11');

// Pour chaque paragraphe, on va afficher dans la console la valeur de l'attribut name et le texte que contient le paragraphe
// Ici on utilise une syntaxe inhabituelle pour la boucle for, que je vais expliquer
// On va simplement itérer sur le tableau "paragraphs" qui contient tous nos paragraphs
// A chaque itération, le paragraphe en cours est stocké dans la variable "paragraph", locale à notre boucle
for (let paragraph of paragraphs) {
    console.log(paragraph.attributes.name.value, paragraph.innerText);
}
