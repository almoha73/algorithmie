// Instructions :

// Dans cet exercice, vous allez écrire du code pour aider un freelance à communiquer avec ses clients au sujet des prix de certains projets. Vous allez écrire quelques fonctions utilitaires pour calculer rapidement les coûts pour les clients.

// Calculer le taux journalier en fonction d'un taux horaire
// Un client contacte le freelance pour se renseigner sur ses tarifs. Le freelance explique qu'il travaille 8 heures par jour. Cependant, le freelance ne connaît que ses tarifs horaires pour le projet. Aidez-le à estimer un taux journalier en fonction d'un taux horaire.
// dayRate(89);
// // => 712
// Le taux journalier n'a pas besoin d'être arrondi ou changé à une précision "fixe".

// Calculer le nombre de jours de travail en fonction d'un budget fixe
// Un autre jour, un chef de projet propose au freelance de travailler sur un projet avec un budget fixe. Étant donné le budget fixe et le taux horaire du freelance, aidez-le à calculer le nombre de jours pendant lesquels il travaillerait jusqu'à ce que le budget soit épuisé. Le résultat doit être arrondi à l'entier inférieur.
// daysInBudget(20000, 89);
// // => 28

// Calculer le taux réduit pour les grands projets
// Souvent, les clients du freelance l'embauchent pour des projets s'étalant sur plusieurs mois. Dans ces cas-là, le freelance décide d'offrir une réduction pour chaque mois entier, et les jours restants sont facturés au taux journalier. Chaque mois compte 22 jours facturables. Aidez-le à estimer son coût pour de tels projets, en fonction d'un taux horaire, du nombre de jours que dure le projet et d'un taux de réduction mensuel. La réduction est toujours passée en tant que nombre, où 42% devient 0,42. Le résultat doit être arrondi à l'entier supérieur.
// priceWithMonthlyDiscount(89, 230, 0.42);
// // => 97972

function dayRate(ratePerHour) {
  return 8 * ratePerHour; // 89x8=712
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / ratePerHour) * 8);
}
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const moisComplets = Math.floor(numDays / 22);
  const joursRestants = numDays % 22;
  const prixMoisComplets = ratePerHour * 8 * 22 * moisComplets * (1 - discount);
  const prixJoursRestants = ratePerHour * 8 * joursRestants;
  return Math.ceil(prixMoisComplets + prixJoursRestants);
}
console.log(priceWithMonthlyDiscount(89, 230, 0.42));

//   Instructions :

// Un nouveau club de poésie a ouvert en ville et vous songez à y assister. Comme il y a eu des incidents par le passé, le club a une politique d'entrée très spécifique que vous devrez maîtriser avant d'essayer d'entrer.

// Il y a deux portes au club de poésie, une porte d'entrée et une porte arrière, et les deux sont gardées. Pour entrer, vous devrez découvrir le mot de passe du jour.

// Le mot de passe est toujours basé sur un poème et peut être dérivé en deux étapes.

// Le gardien récitera le poème, une ligne à la fois, et vous devrez répondre avec une lettre appropriée de cette ligne.
// Le gardien vous dira maintenant toutes les lettres auxquelles vous avez répondu en une seule fois, et vous devrez les écrire sur une feuille de papier dans un format spécifique.
// Les détails du processus dépendent de la porte que vous essayez d'entrer.

// Obtenir la première lettre d'une phrase
// Pour déterminer les lettres pour le mot de passe de la porte d'entrée, vous devez répondre avec la première lettre de la ligne du poème que le gardien vous récite.
// Pour obtenir un bon mot de passe, les membres du club de poésie aiment utiliser des acrostiches. Cela signifie que la première lettre de chaque phrase forme un mot. Voici un exemple d'un de leurs auteurs préférés, Michael Lockwood.

// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// Ainsi, lorsque le gardien récite "Stands so high", vous répondez "S", lorsque le gardien récite "Huge hooves too", vous répondez "H".

// Implémentez la fonction frontDoorResponse qui prend une ligne du poème en argument et renvoie la première lettre de cette ligne.

// frontDoorResponse('Stands so high');
// // => "S"

// Mettre un mot en majuscule
// Maintenant que vous avez toutes les lettres correctes, tout ce que vous avez à faire pour obtenir le mot de passe de la porte d'entrée est de mettre correctement le mot en majuscules.
// Implémentez la fonction frontDoorPassword qui accepte une chaîne de caractères (les lettres combinées que vous avez trouvées dans la tâche 1) et la renvoie correctement en majuscules.

// frontDoorPassword('SHIRE');
// // => "Shire"

// frontDoorPassword('shire');
// // => "Shire"

// Obtenir la dernière lettre d'une phrase
// Pour déterminer les lettres pour le mot de passe de la porte arrière, vous devez répondre avec la dernière lettre de la ligne du poème que le gardien vous récite.
// Les membres du club de poésie sont vraiment intelligents. Le poème mentionné précédemment est également téléstiche, ce qui signifie que la dernière lettre de chaque phrase forme également un mot :

// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// Lorsque le gardien récite "Stands so high", vous répondez "h", lorsque le gardien récite "Huge hooves too", vous répondez "o".

// Notez que parfois, le gardien fait des pauses stylistiques

function frontDoorResponse(l) {
  return l[0];
}

function frontDoorPassword(word) {
  return (
    word.toLowerCase().charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}
console.log(frontDoorPassword("SUMMER"));

function backDoorResponse(line) {
  const lineS = line.trim();
  console.log(lineS);
  return lineS[lineS.length - 1];
}
console.log(backDoorResponse("gloun bgrtsx ngvbjiu "));

function backDoorPassword(word) {}

// Écrivez une fonction qui prend en entrée une chaîne de caractères et qui renvoie la chaîne de caractères inversée. Par exemple, si la chaîne en entrée est 'hello', la fonction devrait renvoyer 'olleh'
function reverse(string) {
  const arr = string.split("");
  return arr.reduce((curr, acc) => {
    return acc + curr;
  }, "");
}
console.log(reverse("agnes"));

// Écrivez une fonction qui prend en entrée une chaîne de caractères et qui renvoie le nombre de paires de lettres adjacentes identiques dans la chaîne. Par exemple, si la chaîne en entrée est 'hello', la fonction devrait renvoyer 1, car il y a une paire de lettres adjacentes 'l'
function countAdjacentPairs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i + 1] ? count++ : count;
  }
  return count;
}
console.log(countAdjacentPairs("fille"));

// Écrivez une fonction pour inverser l'ordre des mots dans une chaîne de caractères. Par exemple, si la chaîne est "Hello World", la fonction devrait renvoyer "World Hello"
function rev(phrase) {
  const s = phrase.split(" ");
  return s.reverse().join(" ");
}
console.log(rev("Hello World"));

// Écrivez une fonction qui prend en entrée un tableau d'entiers et qui renvoie le plus grand nombre présent dans le tableau.
function greater(arr) {
  const a = arr.reduce((curr, acc) => {
    return acc > curr ? acc : curr;
  });
  return a;
}
console.log(greater([1, 8, 4, 0, 3]));

// Écrivez une fonction qui prend en entrée un tableau de chaînes de caractères et qui renvoie la chaîne la plus longue dans le tableau.
function longer(arr) {
  const a = arr.reduce((curr, acc) => {
    return acc.length > curr.length ? acc : curr;
  }, "");
  return a;
}
console.log(longer(["agnes", "sylvain", "algorithme"]));

// Écrivez une fonction qui prend en entrée un nombre entier et qui renvoie "Fizz" si le nombre est divisible par 3, "Buzz" s'il est divisible par 5, et "FizzBuzz" s'il est divisible par 3 et 5. Sinon, la fonction doit simplement renvoyer le nombre.
function truc(nombre) {
  if (nombre % 3 === 0 && nombre % 5 === 0) {
    return "FizzBuzz";
  } else if (nombre % 5 === 0) {
    return "Buzz";
  } else if (nombre % 3 === 0) {
    return "Fizz";
  } else {
    return nombre;
  }
}
console.log(truc(15));

// Écrivez une fonction qui prend en entrée une chaîne de caractères et qui renvoie "true" si la chaîne est un palindrome (c'est-à-dire qu'elle peut être lue de la même manière de gauche à droite et de droite à gauche), et "false" sinon
function palindrome(string) {
  const arr = string.split("");
  const reverse = [...arr].reverse();

  if (arr.join("") === reverse.join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("blue"));

// Écrivez une fonction qui prend en entrée une chaîne de caractères et qui renvoie la chaîne avec tous les caractères en majuscules. Par exemple, si la chaîne est "Hello World", la fonction devrait renvoyer "HELLO WORLD"
function up(string) {
  return string.toUpperCase();
}
console.log(up("agnes beaumatin"));

// Écrivez une fonction qui prend en entrée deux tableaux d'entiers triés en ordre croissant et qui renvoie un tableau contenant les éléments communs aux deux tableaux. Par exemple, si les tableaux sont [1, 3, 4, 6, 7, 9] et [2, 3, 5, 7, 8, 9], la fonction devrait renvoyer [3, 7, 9]
function nombreCommuns(arr1, arr2) {
  return arr1.reduce((a, b) => {
    console.log(a, b);
    if (arr2.includes(b)) {
      a.push(b);
    }
    return a;
  }, []);
}
console.log(nombreCommuns([1, 3, 4, 6, 7, 9], [2, 3, 5, 7, 8, 9]));

// Écrivez une fonction qui prend en entrée un tableau de nombres et qui renvoie la somme de tous les nombres impairs dans le tableau.
function somme(array) {
  return array.reduce((a, b) => {
    return a + b;
  });
}
console.log(somme([1, 2, 3, 8]));

// Écrivez une fonction qui prend en entrée une chaîne de caractères et qui renvoie "true" si la chaîne contient tous les caractères de l'alphabet, et "false" sinon.
function car(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const a = alphabet.split("");
  let s = string.toLowerCase().split("").sort();
  console.log(a, s);
  const f = a.reduce((c, d) => {
    if (s.includes(d)) {
      c.push(d);
    }
    return c;
  }, []);

  return f.join("") === alphabet;
}
console.log(car("Le vif zéphyr jubile sur les kumquats du clown gracieux"));

// Écrivez une fonction qui prend en entrée un nombre entier et qui renvoie le nombre en chiffres romains. Par exemple, si le nombre est 14, la fonction doit renvoyer "XIV"
function convertToRomanNumeral(n) {
  const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  const sortedNumerals = Object.entries(romanNumerals).sort(
    (a, b) => b[0] - a[0]
  );
  let result = "";
  for (let [value, numeral] of sortedNumerals) {
    while (n >= value) {
      result += numeral;
      n -= value;
    }
  }
  return result;
}
console.log(convertToRomanNumeral(14));

// Écrivez une fonction qui prend en entrée un tableau d'objets avec une propriété "age" et qui renvoie la moyenne des âges dans le tableau.
let personnes = [
  { nom: "Alice", age: 23 },
  { nom: "Bob", age: 37 },
  { nom: "Charlie", age: 29 },
  { nom: "Dave", age: 43 },
];

function moyAge(arr) {
  const add = arr.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
}

console.log(moyAge(personnes));

const produits = [
  { nom: "T-shirt", prix: 25, quantite: 2 },
  { nom: "Chaussures", prix: 80, quantite: 1 },
  { nom: "Sac à dos", prix: 50, quantite: 3 },
  { nom: "Pantalon", prix: 45, quantite: 2 },
];

function prixTotal(array) {
  return array.reduce((acc, curr) => {
    console.log((acc, curr));

    return (acc += curr.prix * curr.quantite);
  }, 0);
}

// const justeNom = produits.reduce((accumulator, currentValue) => {
//   accumulator.push(currentValue.nom)
// return accumulator
// }, [])

console.log(prixTotal(produits));

const numbers = [1, 3, 5, 7, 9, 10, 12, 15, 18, 20];
// calculer la somme de tous les nombres divisibles par 3 ou 5 dans un tableau de nombres

const sum = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 3 === 0 || currentValue % 5 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);
console.log(sum);

// Par exemple, si on lui passe le tableau ['chat', 'chien', 'chat', 'oiseau', 'poisson', 'chat'], la fonction doit retourner l'objet {chat: 3, chien: 1, oiseau: 1, poisson: 1}.
let arr = ["chat", "chien", "chat", "oiseau", "poisson", "chat"];
const nombreOccurence = arr.reduce((acc, curr) => {
  // L'expression acc[curr] est utilisée pour accéder à la propriété de l'objet correspondant à la chaîne de caractères curr. Si cette propriété n'existe pas encore, elle sera créée automatiquement avec une valeur initialisée à undefined.
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(nombreOccurence);

const notes = [
  { note: 15, poids: 0.3 },
  { note: 18, poids: 0.4 },
  { note: 12, poids: 0.2 },
  { note: 14, poids: 0.1 },
];
// Dans cet exemple, la note finale est calculée comme suit : 15 * 0.3 + 18 * 0.4 + 12 * 0.2 + 14 * 0.1 = 15.9.

const noteFinale = notes.reduce((acc, curr) => {
console.log(acc, curr);
let ar = curr.note * curr.poids

  return ar
}, 0)
console.log(noteFinale);
