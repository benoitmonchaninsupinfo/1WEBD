/**
 * Exercice 3.6
 * Ecrivez un simple formulaire HTML, seulement 2 champs : email et password, et un bouton submit.
 * Le bouton submit est désactivé tant que les 2 champs sont vides et qu’ils ne respectent pas les règles suivantes :
 *  - un email doit être un email (n caractères suivi de @ suivi de n caractères suivi de . suivi de n caractères), 
 *  - un password fait au minimum 8 caractères.
 * Vous n’avez pas le droit d’utiliser l’attribut required et type=’email’
 * Concernant l’expression de contrôle pour l’email, consulter cette page 
 * https://www.w3resource.com/javascript/form/email-validation.php
*/

// On récupère nos éléments HTML (inputs et bouton)
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

// On désactive le bouton submit au chargement de la page
submitButton.disabled = true;

// Cette fonction retourne true si l'email est valide, false sinon
function validateEmail(email) {
    // On utilise une expression régulière pour vérifier si l'email est valide
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // On retourne le résultat de la vérification grâce à la méthode "test" de l'expression régulière
    return emailRegex.test(email);
}

// Cette fonction retourne true si le mot de passe est valide, false sinon
function validatePassword(password) {
    // On vérifie si le mot de passe fait au moins 8 caractères
    return password.length >= 8;
}

function validateForm() {
    // On récupère la valeur des inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    // On vérifie si l'email et le mot de passe sont valides
    if (validateEmail(email) && validatePassword(password)) {
        // Si oui, on active le bouton submit
        submitButton.disabled = false;
    } else {
        // Sinon, on le désactive
        submitButton.disabled = true;
    }
}

// On appelle la fonction validateForm() à chaque fois qu'on tape dans les inputs
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
