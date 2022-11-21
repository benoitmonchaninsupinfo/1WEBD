/**
 * Exercice 2.4
 * Créer une fonction convertDate(), cette fontion prend en paramètre une date au format jj/mm/yyyy hh:mm, et un autre paramêtre de type boolean, permettant de choisir si le retour, sera seulement la date ou la date et l’heure
 * Si c’est seulement la date, le retour sera au format yyyy-mm-dd
 * Si c’est seulement la date et l’heure, le retour sera au format yyyy-mm-ddThh:mm
 * Implémenter la fonction, faites un appel, avec les deux cas et afficher les résultats dans la console
*/

// Déclarons notre nouvelle fonction "convertDate", qui prend deux arguments :
//  - "dateTime" qui sera la date que nous voulons qu'elle transforme
//  - "keepTime" qui déterminera si la fonction nous donne aussi l'heure
//      le "=" suivi de la valeur "false" veut dire que si on ne donne pas de valeur pour "keepTime" alors elle vaudra "false"
function convertDate(dateTime, keepTime = false) {
    // On commence par récupérer les 10 premiers caractères de notre chaîne "dateTime", ce qui correspond à la date
    let date = dateTime.slice(0, 10);
    
    // On la découpe en utilisant le séparateur "/" pour avoir un tableau de cet forme [jour, mois, année]
    let dateSplitted = date.split('/');

    // On peut construire notre nouvelle date, en inversant le jour et l'année puis en joingnant le tout avec le séparateur "-"
    let newDate = [dateSplitted[2], dateSplitted[1], dateSplitted[0]].join('-');

    // On va vérifier la valeur de "keepTime" pour savoir si on doit garder l'heure ou non
    if (keepTime) {
        
        // Si oui, on récupère l'heure de notre chaîne d'origine
        let time = dateTime.slice(11, 16);
        
        // Et on retourne notre date suivie de l'heure
        // Le fait d'utiliser "return" à ce moment va arrêter l'éxecution de la fonction
        // Pour la concaténation utilisée, on a simplement une chaîne "${newDate}T${time}" où "${}" est remplcée par la valeur dans la variable "newDate", idem pour ${time}
        return `${newDate}T${time}`
    }

    // Si la fonction ne s'est pas arrêtée avant, on retourne uniquement la date
    return newDate
}

// Vérifions nos deux cas dans la console
console.log('avec heure:', convertDate('08/11/2022 12:45', true));
console.log('sans heure', convertDate('08/11/2022 12:45'));
