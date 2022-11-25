/**
 * Day 5 : Exercices
 * 1. Créer un objet personnage, qui a pour propriétés :
 *  - nom (string), 
 *  - type (string) (guerrier, magicien...),
 *  - force (numérique), 
 *  - vitalité (numérique)
 * méthodes,
 * - appliquer dégât,
 * - afficher vitalité
 * Créer 2 instances, initialisez vos instances, et afficher le nom et la vitalité de chaque personnage
 * 
 * 2. A partir de l’exercice précédent, à présent jouer, jusqu’à qu’un personnage décède
 * Appliquez vos règles, comme par exemple, un personnage applique x * sa force en dégât, cela soustrait à la vitalité de l’adversaire, le premier dont la vitalité est à 0, est mort.
 * Ecrivez le code pour jouer, un joueur mort ne peut plus jouer
 * 
 * 3. A partir de l’exercice précédent, lisez cet article sur l’encapsulation (chapitre 3), et privatisez la force et la vitalité
 * https://www.gchagnon.fr/cours/dhtml/objets.html#encapsulation
 * Pourquoi est-il primordial d’encapsuler ces données ?
 * 
 * 4. Sur la base de l’exercice 5.1, vous aller créer un personnage, qui aura une propriété en 
 * plus expérience (junior), et un super personnage, qui a toutes les caractéristiques et 
 * méthodes d’un personnage, sauf qu’en expérience il est «sénior», et qu’il a une propriété 
 * supplémentaire «bonus» et une méthode supplémentaire «showBonus»
 * 
 * 5. A présent créer une closure, qui va générer vos personnages, et qui va également compter le nombre de personnage créé.
 * Créer n personnage, et vérifier que votre closure a bien comptabilisé n personnage
*/

// On reprend la closure du cours avec le compteur
function counter() {
    let passage = 0;

    return () => {
        return ++passage;
    }
}

// On initialise notre compteur
const count = counter();

// On créé la fonction constructeur de notre personnage, qui prend en paramètre le nom, le type et la force
function Personnage(name, type, force) {

    // On initialise les propriétés de notre personnage
    this.name = name;
    this.type = type;
    this.experience = 'junior';

    // On encapsule la force et la vitalité
    const strength = force;
    let health = 100;

    // On ajoute un à notre compteur à chaque fois qu'on créé un personnage
    console.log(count());

    // On créé un getter pour la force
    this.getStrength = () => strength

    // On créé un getter pour la vitalité
    this.getHealth = () => health

    // On créé un setter pour la vitalité
    this.setHealth = (newHealth) => health = newHealth

    // On créé une méthode pour appliquer des dégâts, qui prend en paramètre le personnage qui subit les dégâts
    this.attack = (attacked) => {

        // On affiche dans la console le nom du personnage qui attaque, et le nom du personnage qui subit les dégâts ainsi que la force de l'attaquant
        console.log(this.name, 'attaque', attacked.name, 'avec la force :', strength);

        // On soustrait la force de l'attaquant à la vitalité du personnage attaqué
        attacked.setHealth(attacked.getHealth() - strength);

        // On affiche dans la console la nouvelle vitalité du personnage attaqué
        console.log(attacked.name, 'a maintenant', attacked.getHealth(), 'de santé');
    }

    // On créé une méthode pour afficher la vitalité du personnage
    this.showHealth = () => {
        console.log(this.name, 'a', health, 'de santé');
    }
}

// On créé une fonction constructeur pour notre super personnage, qui prend en paramètre le nom, le type et la force
function SuperPersonnage(name, type, force) {

    // On appelle le constructeur de notre fonction constructeur Personnage, qui sera parent de SuperPersonnage
    // On lui passe en paramètre le nom, le type et la force
    Personnage.call(this, name, type, force);

    // On ajoute une propriété experience à notre super personnage
    this.experience = 'senior';

    // On ajoute une propriété bonus à notre super personnage
    const bonus = '40 de vie en plus';

    // On créé une méthode pour afficher le bonus du super personnage
    this.showBonus = () => console.warn(bonus);
}

// On créé deux instances de Personnage
const bob = new Personnage('Bob', 'Guerrier', 50);
const bib = new Personnage('Bib', 'Ninja', 30);

// On créé une instance de SuperPersonnage
const superP = new SuperPersonnage('Super', 'Archer', 80);

// On affiche le bonus du super personnage
superP.showBonus()

// Tant que la vitalité de Bob et de Bib est supérieur à 0 (ils sont en vie), on continue le combat
while(bob.getHealth() > 0 && bib.getHealth() > 0) {

    // Bob attaque Bib
    bob.attack(bib);

    // Si la vitalité de Bib est supérieur à 0 (il est en vie), il peut attaquer Bob
    if (bib.getHealth() > 0) {
        bib.attack(bob);
    }

    // Si la vitalité de Bib est inférieur ou égale à 0 (il est mort), on arrête le combat
}
