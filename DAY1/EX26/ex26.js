/**
 * Exercice 1.26
 * A partir du texte suivant, n’affichez que les 100 premiers mots, suivi de ...
 */
const text =
  "Je voudrais vous raconter mon histoire. En réalité, je n’ai pas d’histoire parce que je suis un guerrier et ma vie tourne autour de la guerre et de la bataille. Dans cette image, je me trouve au fond, habillé exactement comme les autres, comme si nous étions la même personne, comme si nous n’avions pas d’âme. Vous m’avez reconnu ? Non ? Je suis celui qui conduit le bateau au voilier azur, l’unique bateau avec la voile différente. Je suis habillé avec une cuirasse et j’ai dans la main un bouclier blanc et rouge. Je suis celui qui n’a pas de sourire, qui n’a pas d’expression. Toi, spectateur qui regarde cette image, tu n’as probablement pas de problèmes. Mais nous, nous en avons beaucoup. Nous ramons vers une destination qu’on espère atteindre le plus tard possible parce qu’en arrivant à Troie, nous savons qu’on va perdre tout ce qu’on a, même si nous n’avons presque rien. Les bateaux que nous conduisons sont des bateaux inconfortables, ils ont la forme d’un croissant.";

/**
 * Je vous avoue que cet exercice m'a laissé perplexe. Je suis un fervant utilisateur du CSS, donc le faire en JavaScript me laisse dubitatif, surtout que vous n'aurez jamais à le faire en JS
 * Mais faisons le quand même !
 */

/**
 * On va commencer par créer un tableau avec tous les mots de notre texte, grâce à la méthode "split" vue dans l'exercice 22
 * La différence est qu'ici on veut les mots et non chaque lettre, on va donc mettre le séparateur " "
 */
const words = text.split(" ");

/**
 * Maintenant on veut afficher uniquement les 100 premiers mots
 * On peut s'embêter à tout faire avec une utilisation de méthode par ligne mais ça devient vite barbant, pas de panique, je vais tout expliquer...
 * On affiche le tout dans la console
 * On commence par récupérer les 100 premiers éléments ne notre tableau avec la méthode "slice", comme son nom l'indique, elle va nous donner une part de notre tableau de base, ici de l'index 0 à l'index 100 non inclut
 * Ensuite, on utilise la méthode "join" pour litéralement joindre les éléments de notre part de tableau avec un séparateur " "
 *  En bref, elle fait l'inverse de "split", on ne va pas séparer les éléments à partir d'un séparateur mais les joindre avec un séparateur donné
 * Enfin, on y ajoute les "..." comme demandé dans l'énoncé
 */
console.log(words.slice(0, 100).join(" ") + "...");
