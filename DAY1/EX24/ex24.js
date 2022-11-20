/** Exercice 1.24
 * Créer un tableau associatif, ayant pour clé marque, modele, cv
 * Remplissez le et affichez la marque en majuscule dans la console
*/

/** On créé notre tableau associatif comme demandé
 * Pour rappel, les tableaux associatif sont des combinaisons de clés et de valeurs entre {}
 * La clé peut être une simple chaîne de caractère ('cle_test') ou écrite directement (marque, modele ou cv)
 * La valeur peut être de tout type, l'idée est que chaque clé peut être considérée comme une variable contenant cette valeur
*/
const entries = {
    marque: 'Volkswagen',
    modele: 'Golf',
    cv: 'CV',
    'cle_test': 'test'
};

/** Pour afficher la marque, on va y accéder grâce à un "." après "entries"
 * Ici on prend notre tableau associatif "entries" et on veut la valeur de sa clé "marque", on écrit donc "entries.marque"
 * Et on utilise la méthode toUpperCase vue dans l'exercice 12
*/
console.log(entries.marque.toUpperCase());
