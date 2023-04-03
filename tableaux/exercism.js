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
function reverse(phrase) {
  const arr = phrase.split(" ");
  console.log(arr);
  return arr.reverse().join(" ");
}
console.log(reverse("Hello World"));

// Écrivez une fonction qui prend en entrée un tableau d'entiers et qui renvoie le plus grand nombre présent dans le tableau.
function greater(arr) {
  const a = arr.reduce((curr, acc) => {
    return acc > curr ? acc : curr;
  });
  return a;
}
console.log(greater([1, 8, 4, 0, 3]));

// Écrivez une fonction qui prend en entrée un tableau de chaînes de caractères et qui renvoie la chaîne la plus longue dans le tableau.
// function longer(arr) {
//   const a = arr.reduce((curr, acc) => {
//     return acc.length > curr.length ? acc : curr;
//   }, "");
//   return a;
// }
function longer(arr) {
  return arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
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
  return arr1.reduce((acc, curr) => {
    if (arr2.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
console.log(nombreCommuns([1, 3, 4, 6, 7, 9], [2, 3, 5, 7, 8, 9]));

// Écrivez une fonction qui prend en entrée un tableau de nombres et qui renvoie la somme de tous les nombres impairs dans le tableau.
function somme(array) {
  return array.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
      return acc + curr;
    } else {
      return acc;
    }
  }, 0);
}
console.log(somme([1, 2, 3, 8]));

// Écrivez une fonction qui prend en entrée une chaîne de caractères et qui renvoie "true" si la chaîne contient tous les caractères de l'alphabet, et "false" sinon.
function alphabetChar(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const str = string.toLowerCase().split("").sort().join("");
  console.log(new Set(str));
  let arr = [...new Set(str)];
  console.log(arr.join(""));
  if (arr.join("").includes(alphabet)) {
    return true;
  } else {
    return false;
  }
}
console.log(
  alphabetChar("Le vif zéphyr jubile sur les kumquats du clown gracieux")
);

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
  let ar = curr.note * curr.poids;

  return ar;
}, 0);
console.log(noteFinale);

//let words = ['HELLO', 'wOrld', 'ABCD', 'FOOBAR', 'EXAMPLE'];
// Vous avez un tableau de chaînes de caractères représentant des mots. Vous devez trouver le mot le plus long qui contient uniquement des lettres en majuscules. Si plusieurs mots ont la même longueur, vous devez renvoyer le premier mot trouvé dans le tableau.

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length && word === word.toUpperCase()) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(findLongestWord("HELLO wOrld ABCD FOOBAR EXaMPLE"));

//let products = [{ name: 'Pencil', price: 0.5, quantity: 100 },{ name: 'Notebook', price: 2, quantity: 50 },{ name: 'Pen', price: 1, quantity: 75 }];
//La fonction que vous allez créer doit retourner 187.5, qui est le coût total de tous les produits en stock.
function calculateTotalCost(products) {
  // votre code ici
  return products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
}
console.log(
  calculateTotalCost([
    { name: "Pencil", price: 0.5, quantity: 100 },
    { name: "Notebook", price: 2, quantity: 50 },
    { name: "Pen", price: 1, quantity: 75 },
  ])
);

//let students = [{ name: 'Alice', age: 20, grades: [85, 90, 92, 89] },{ name: 'Bob', age: 21, grades: [72, 68, 75, 81] },{ name: 'Charlie', age: 19, grades: [88, 82, 87, 92] }];
//La fonction que vous allez créer doit retourner un nouveau tableau d'objets, où chaque objet a les propriétés name (nom de l'étudiant) et averageGrade (moyenne arrondie à deux décimales).
function calculateGradesAverage(students) {
  return students.map((student) => {
    const averageGrade = student.grades.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return {
      name: student.name,
      averageGrade: (averageGrade / student.grades.length).toFixed(2),
    };
  });
}
console.log(
  calculateGradesAverage([
    { name: "Alice", age: 20, grades: [85, 90, 92, 89] },
    { name: "Bob", age: 21, grades: [72, 68, 75, 81] },
    { name: "Charlie", age: 19, grades: [88, 82, 87, 92] },
  ])
);

//Énoncé : Vous avez une chaîne de caractères représentant une phrase. Vous devez inverser l'ordre des mots de la phrase.
//let phrase = "Le JavaScript est un langage de programmation";
function reverseWordsOrder(phrase) {
  // votre code ici
  return phrase.split(" ").reverse().join(" ");
}
console.log(reverseWordsOrder("Le JavaScript est un langage de programmation"));

//Énoncé : Vous avez un tableau de nombres. Vous devez trouver le nombre qui apparaît le plus souvent dans le tableau.
//let numbers = [2, 5, 6, 2, 3, 5, 2, 4, 6, 5, 5];
//La fonction que vous allez créer doit retourner le nombre 5, car il apparaît le plus souvent dans le tableau (4 fois).

function findMostFrequentNumber(numbers) {
  // votre code ici

  let count = 0;
  let mostFrequentNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    let currentCount = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        currentCount++;
      }
    }
    if (currentCount > count) {
      count = currentCount;
      mostFrequentNumber = numbers[i];
    }
  }
  return mostFrequentNumber;
}
console.log(findMostFrequentNumber([2, 5, 6, 2, 3, 5, 2, 4, 6, 5, 5]));

//Énoncé : Vous avez un tableau d'objets représentant des fruits. Chaque objet a les propriétés name (nom du fruit), price (prix du fruit) et quantity (quantité de fruits en stock). Vous devez créer une fonction qui prend en entrée un fruit (représenté par un objet avec les propriétés name et quantity), et qui renvoie le prix total du fruit (prix unitaire multiplié par la quantité). Si le fruit n'est pas en stock, la fonction doit renvoyer 0.
//let fruits = [{ name: 'Apple', price: 1.2, quantity: 50 },{ name: 'Orange', price: 0.9, quantity: 75 },{ name: 'Banana', price: 0.6, quantity: 0 }];

function calculateFruitTotalPrice(fruit) {
  // votre code ici
  if (fruit.quantity === 0) {
    return 0;
  } else {
    return fruit.price * fruit.quantity;
  }
}
console.log(
  calculateFruitTotalPrice({ name: "Apple", price: 1.2, quantity: 50 })
);

//Énoncé : Vous avez un tableau de nombres. Vous devez trouver la plus longue séquence de nombres consécutifs dans le tableau. La fonction que vous allez créer doit retourner un tableau contenant les nombres de la séquence consécutive.
//let numbers = [1, 2, 3, 5, 6, 7, 8, 10, 11];
//La fonction que vous allez créer doit retourner le tableau [5, 6, 7, 8], car c'est la plus longue séquence de nombres consécutifs dans le tableau.

function findLongestConsecutiveSequence(numbers) {
  // votre code ici
  let longestSequence = [];
  let currentSequence = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] + 1 === numbers[i + 1]) {
      currentSequence.push(numbers[i]);
    } else {
      currentSequence.push(numbers[i]);
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
      currentSequence = [];
    }
  }
  return longestSequence;
}

console.log(findLongestConsecutiveSequence([1, 2, 3, 5, 6, 7, 8, 10, 11]));

// Vous avez un tableau de noms, représentés par des chaînes de caractères. Vous devez créer une fonction qui prend en entrée le tableau de noms, et qui renvoie une chaîne de caractères représentant une liste des noms, séparés par des virgules et un "et" pour le dernier nom. Si le tableau est vide, la fonction doit renvoyer une chaîne vide.
//let names = ["Alice", "Bob", "Charlie", "David"];
//La fonction que vous allez créer doit retourner la chaîne "Alice, Bob, Charlie et David".

function createNameList(names) {
  // votre code ici
  console.log(names.join(", "));
  return names.join(", ").replace(/,([^,]*)$/, " et$1");
}
console.log(createNameList(["Alice", "Bob", "Charlie", "David"]));

//Vous avez un tableau de nombres, représentés par des nombres entiers. Vous devez créer une fonction qui prend en entrée le tableau de nombres, et qui renvoie la moyenne des nombres pairs du tableau, arrondie à deux décimales.
//let numbers = [4, 7, 1, 9, 6, 3, 8, 2];
function averageEvenNumbers(numbers) {
  // votre code ici
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  let sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
  return (sum / evenNumbers.length).toFixed(2);
}
console.log(averageEvenNumbers([4, 7, 1, 9, 6, 3, 8, 2]));

//Vous avez un tableau d'objets représentant des personnes. Chaque objet a les propriétés suivantes : nom, age et pays. Vous devez créer une fonction qui prend en entrée le tableau d'objets, et qui renvoie une chaîne de caractères représentant le nom de la personne la plus âgée, suivie de la mention "vient de" et du nom de son pays.
//let people = [{ nom: "Alice", age: 25, pays: "France" },{ nom: "Bob", age: 30, pays: "Canada" }{ nom: "Charlie", age: 22, pays: "France" },{ nom: "David", age: 35, pays: "États-Unis" },{ nom: "Eve", age: 28, pays: "Canada" }];
//La fonction que vous allez créer doit retourner la chaîne "David vient des États-Unis", car David est la personne la plus âgée et vient des États-Unis.
function oldestPerson(people) {
  // votre code ici
  let oldest = people[0];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldest.age) {
      oldest = people[i];
    }
  }
  return `${oldest.nom} vient de ${oldest.pays}`;
}
console.log(
  oldestPerson([
    { nom: "Alice", age: 25, pays: "France" },
    { nom: "Bob", age: 30, pays: "Canada" },
    { nom: "Charlie", age: 22, pays: "France" },
    { nom: "David", age: 35, pays: "États-Unis" },
    { nom: "Eve", age: 28, pays: "Canada" },
  ])
);

//Vous avez une chaîne de caractères représentant une liste de noms, séparés par des virgules et des espaces. Vous devez créer une fonction qui prend en entrée la chaîne de caractères, et qui renvoie un tableau contenant les noms triés par ordre alphabétique.
//let names = "Alice, Eve, Bob, David, Charlie";
//La fonction que vous allez créer doit retourner le tableau ["Alice", "Bob", "Charlie", "David", "Eve"].

function sortNames(names) {
  // votre code ici
  return names.split(", ").sort();
}
console.log(sortNames("Alice, Eve, Bob, David, Charlie"));

// Vous avez un tableau de chaînes de caractères, représentant des noms. Vous devez créer une fonction qui prend en entrée le tableau de noms, et qui renvoie une chaîne de caractères représentant la première lettre de chaque nom, concaténées ensemble.
//let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
//La fonction que vous allez créer doit retourner la chaîne de caractères "ABCDE".
function firstLetters(names) {
  // votre code ici
  return names.map((name) => name[0]).join("");
}
console.log(firstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]));

function mostExpensiveFruit(fruits) {
  // votre code ici
  let fruitObj = fruits.reduce((acc, curr) => {
    if (acc.price > curr.price) {
      return acc;
    } else {
      return curr;
    }
  }, 0);
  return `${fruitObj.name} coûte ${fruitObj.price} euros`;
}
console.log(
  mostExpensiveFruit([
    { name: "Apple", price: 1.2 },
    { name: "Orange", price: 0.95 },
    { name: "Banana", price: 1.1 },
  ])
);

//Vous avez un tableau de nombres, représentés par des nombres à virgule flottante. Vous devez créer une fonction qui prend en entrée le tableau de nombres, et qui renvoie la somme des nombres du tableau, arrondie à deux décimales.
function totalPrice(prices) {
  // votre code ici
  const total = prices.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return total.toFixed(2);
}
console.log(totalPrice([0.99, 1.5, 2.25, 3.75, 1.25]));

//Vous avez un tableau de nombres, représentant des notes sur 20. Vous devez créer une fonction qui prend en entrée le tableau de notes, et qui renvoie la note minimale, la note maximale, et la moyenne des notes, arrondie à deux décimales près.
// La fonction que vous allez créer doit retourner un objet contenant les propriétés suivantes :
// {
//   min: 9,
//   max: 18,
//   avg: 13.43
// }

function gradeStats(notes) {
  // votre code ici

  let sum = notes.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let avg = sum / notes.length;
  let min = Math.min(...notes);
  let max = Math.max(...notes);
  return { avg, min, max };
}
console.log(gradeStats([12, 15.5, 9, 18, 13, 10.75, 16.25]));

//Vous avez une chaîne de caractères représentant un texte. Vous devez créer une fonction qui prend en entrée la chaîne de caractères, et qui renvoie un objet contenant les propriétés suivantes :
// total: le nombre total de caractères dans le texte, y compris les espaces, la ponctuation, etc.
// letters: le nombre de lettres dans le texte (c'est-à-dire les caractères alphabétiques a-z et A-Z).
// words: le nombre de mots dans le texte (un mot étant défini comme une séquence de caractères alphabétiques séparée par des espaces, des signes de ponctuation ou des caractères spéciaux).
// averageLength: la longueur moyenne des mots dans le texte, arrondie à deux décimales près.
//let text = "JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi pour les serveurs.";
//La fonction que vous allez créer doit retourner l'objet suivant :
//{total: 121,letters: 95,words: 19,averageLength: 5.00}

function textStats(text) {
  const total = text.length;
  const letters = text.replace(/[^a-zA-Z]/g, "").length;
  const words = text.split(" ").length;
  const wordsLength = text
    .replace(/[^a-zA-Zé]/g, " ")
    .split(" ")
    .filter((elt) => elt !== "");
  const totalLength = wordsLength.reduce((acc, curr) => {
    return acc + curr.length;
  }, 0);
  console.log(totalLength);
  const averageLength = (totalLength / wordsLength.length).toFixed(2);

  return { total, letters, words, averageLength };
}
console.log(
  textStats(
    "JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi pour les serveurs."
  )
);

let library = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
  },
  {
    title: "Effective JavaScript",
    author: "David Herman",
    year: 2012,
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2011,
  },
  {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    year: 2011,
  },
  {
    title: "JavaScript for Kids",
    author: "Nick Morgan",
    year: 2014,
  },
];
// La fonction que vous allez créer doit retourner l'objet suivant :
// {
//   total: 5,
//   authors: [
//     "Douglas Crockford",
//     "David Herman",
//     "Marijn Haverbeke",
//     "David Flanagan",
//     "Nick Morgan"
//   ],
//   booksPerYear: {
//     2008: 1,
//     2011: 2,
//     2012: 1,
//     2014: 1
//   }
// }

function libraryStats(library) {
  // votre code ici
  const total = library.length;
  let authors = library.map((elt) => elt.author);
  let booksPerYear = library.reduce((acc, curr) => {
    acc[curr.year] = acc[curr.year] ? acc[curr.year] + 1 : 1;
    return acc;
  }, {});

  return { total, authors, booksPerYear };
}
console.log(libraryStats(library));

function sumArrays(a, b) {
  // votre code ici
  let sum = a.reduce((acc, curr, index) => {
    acc.push(curr + b[index]);
    return acc;
  }, []);
  return sum;
}
console.log(sumArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

//let phrase = "Le chat mange des croquettes";
// "eL tahc egnum sed setteuqorc"

function reverse(phrase) {
  console.log(phrase.split("").reverse().join(""));
  let reverse = phrase
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  return reverse;
}
console.log(reverse("Le chat mange des croquettes"));


// La fonction doit retourner
// {
//   total: 27.50,
//   byFruit: {
//     apple: 15.00,
//     banana: 10.00,
//     orange: 15.00
//   }
// }

function fruitSales(fruits) {
  // votre code ici
  let total = fruits.reduce((acc, curr) => {
acc += curr.price * curr.quantity
return acc
  }, 0)

let byFruit = fruits.reduce((acc, curr) => {

 
  acc[curr.name] = curr.price * curr.quantity



  return acc
}, {})

  return {total, byFruit}
}
console.log(fruitSales([
  {
    name: "apple",
    price: 1.5,
    quantity: 10,
  },
  {
    name: "banana",
    price: 0.5,
    quantity: 20,
  },
  {
    name: "orange",
    price: 1.0,
    quantity: 15,
  },
]));

//let texte = "Bonjour tout le monde";
// {
//   B: 1,
//   J: 1,
//   d: 1,
//   e: 3,
//   l: 1,
//   m: 1,
//   n: 2,
//   o: 4,
//   r: 1,
//   t: 2,
//   u: 1
// }

function countLetters(texte) {
  // votre code ici
  return texte.split("").reduce((acc, curr) => {

    acc[curr] = acc[curr] ? acc[curr] + 1 : 1

 return acc
  }, {})
}
console.log(countLetters("Bonjour tout le monde"));