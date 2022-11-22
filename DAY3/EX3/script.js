/**
 * Exercice 3.3
 * A partir de ce que vous avez intégré en html, ajoutez le code qui permet :
 *  - de vérifier que la saisie est bien un nombre
 *  - de passer à la case suivante
 *  - d’envoyer le code une fois que toutes les cases sont remplies, l’envoie à ce stade se fera par un alert()
*/

// On récupère les références de nos champs de texte qui ont la propriété "name" à "otp-code"
let otpCodeInputs = document.getElementsByName('otp-code');

// On récupère la référence du bouton qui a l'id "otp-submit-button"
let otpSubmitButton = document.getElementById('otp-submit-button');

// On va itérer sur chaque champs de texte
for (let otpCodeInput of otpCodeInputs) {

    // Pour chaque champs de texte, on écoute l'évènement "input", qui va donc éxecuter la fonction donnée à chaque fois qu'on entre quelque chose dans notre champ
    otpCodeInput.addEventListener('input', (evt) => {

        // On vérifie d'abord si le champ contient bien un nombre valide, grâce à la méthode "validateNumber" définie plus bas, à laquelle on passe le contexte de l'événement et le champ, et qui retourne un booléen
        let valid = validateNumber(evt, otpCodeInput);

        // Si le booléen est "true"
        if (valid) {

            // On va faire le focus sur le champ suivant, grâce à la méthode "focusNextInput" définie plus bas, à laquelle on passe le champ
            focusNextInput(otpCodeInput);

            // Puis on soumet le formulaire grâce à la méthode "submit" définie plus bas
            submit();
        }
    });
}

// On va écouter l'évènement "click" du bouton de soumission du formulaire et on lui passe la signature de la fonction "submit"
// C'est important de souligner que c'est la signature qu'on donne et non l'appel de la fonction, on ne lui demande pas de l'éxecuter maintenant mais quand on va cliquer sur le bouton
otpSubmitButton.addEventListener('click', submit);

// La fonction "validateNumber" prend en paramètre le contexte d'un évènement "input" et la référence d'un champ de texte, et retourne un booléen disant si le nombre est valide ou non
function validateNumber(evt, currentInput) {

    // Un évènement "input" nous fourni la propriété "data" qui permet de savoir ce qu'il y a dans le champ au moment de la saisie
    // On transforme cette valeur en nombre
    let value = Number(evt.data);

    // Si ce n'est pas un nombre
    if (isNaN(value)) {

        // On le fait savoir à l'utilisateur
        alert('Ce n\'est pas un nombre !');

        // On réinitialise la valeur de notre champ de texte
        currentInput.value = null;

        // Et on retourne "false" pour dire que le nombre n'est pas valide
        return false;
    }

    // Sinon on returne "true", le nombre est valide
    return true;
}

// La fonction "focusNextInput" prend en paramètre la référence d'un champ de texte
function focusNextInput(currentInput) {

    // On récupère l'id de notre champ
    let currentInputId = currentInput.attributes.id.value;

    // On récupère l'index du champ présent à la fin de l'id du champ
    let currentInputIndex = currentInputId[currentInputId.length - 1];

    // On récupère le champ suivant grâce à l'index qu'on vient de récupérer
    let nextInput = document.getElementById(`otp-code-${(Number(currentInputIndex) + 1)}`);

    // Si le champ suivant existe
    if (nextInput) {

        // On déplace le focus sur ce champ grâce à la méthode "focus" de ce champ
        // Déplacer le focus fait comme si on allait cliquer dans le champ pour y écrire, sauf qu'ici on le fait pour l'utilisateur
        nextInput.focus();
    }
}

// La fonction "submit" va soumettre le formulaire
function submit() {

    // Par défaut on peut soumettre le formulaire
    let canSubmit = true;

    // On itère sur les champs de texte
    for (let otpCodeInput of otpCodeInputs) {

        // On vérifie s'il a bien une valeur grâce à la propriété "value" de la référence du champ
        if (!otpCodeInput.value) {
            
            // Si on a pas de valeur dans le champ, on ne peut pas soumettre, on arrête la boucle for ici grâce à "break"
            canSubmit = false;
            break;
        }
    }

    // Si on peut soumettre
    if (canSubmit) {

        // On affiche à l'utilisateur qu'il va recevoir son code sous peu
        // Vous n'êtes pas obligés d'utiliser un "setTimeout" ici, cela vous suffit : alert('Vous allez bientôt recevoir votre code !')
        // "alert" interrompt l'éxecution du code, je préfère attendre un peu que le code ai finit de s'éxecuter avant de faire mon "alert"
        setTimeout(() => alert('Vous allez bientôt recevoir votre code !'), 10)
    }
}
