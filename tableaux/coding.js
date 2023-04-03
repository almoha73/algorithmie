// Entrée
// 5   Le nombre N de températures à analyser.  0 ≤ N < 10000
//1 -2 -8 4 5   Les N températures exprimées sous la forme de nombres entiers allant de -273 à 5526
//Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
// Sortie 1  Affichez 0 (zéro) si aucune température n'est fournie. Sinon, affichez la température la plus proche de 0

// function temperatureProcheDeZero(n, temperatures) {
//   if (n < 1 || n > 9999 || !temperatures) {
//     return 0;
//   }

//   let temperatureLaPlusProche = temperatures[0];

//   for (let i = 1; i < n; i++) {
//     const temperatureCourante = temperatures[i];

//     if (
//       Math.abs(temperatureCourante) < Math.abs(temperatureLaPlusProche) ||
//       (Math.abs(temperatureCourante) === Math.abs(temperatureLaPlusProche) &&
//         temperatureCourante > temperatureLaPlusProche)
//     ) {
//       temperatureLaPlusProche = temperatureCourante;
//     }
//   }

//   return temperatureLaPlusProche;
// }

function temperatureProcheDeZero(n, temperatures) {
  if (n < 1 || n > 9999 || !temperatures) {
    return 0;
  }

  return temperatures.reduce((prev, curr) => {
    return Math.abs(curr) < Math.abs(prev) ||
      (Math.abs(curr) === Math.abs(prev) && curr > prev)
      ? curr
      : prev;
  });
}

// console.log(temperatureProcheDeZero(5, [5, -10, 25, 30, -1]) );

//Vous vivez dans la ville de Cartesia où toutes les rues sont disposées dans un plan en grille parfaite. Vous êtes arrivé dix minutes trop tôt à un rendez-vous, alors vous avez décidé de profiter de l'occasion pour faire une courte promenade. La ville fournit à ses citoyens une application de génération de promenades sur leurs téléphones : chaque fois que vous appuyez sur le bouton, elle vous envoie un tableau de chaînes de caractères représentant des directions à suivre (par exemple, ['n', 's', 'w', 'e']). Vous ne marchez jamais que d'un seul bloc pour chaque lettre (direction), et vous savez qu'il vous faut une minute pour traverser un bloc de la ville. Créez une fonction qui renvoie true si la promenade que vous propose l'application vous prendra exactement dix minutes (vous ne voulez pas être en avance ou en retard !) et vous ramènera bien sûr à votre point de départ. Renvoyez false dans le cas contraire.

//Note : vous recevrez toujours un tableau valide contenant un assortiment aléatoire de lettres de direction ('n', 's', 'e' ou 'w' uniquement). Il ne vous donnera jamais un tableau vide (ce n'est pas une promenade, c'est rester immobile !).

function estUnePromenadeDe10Minutes(tableauDirections) {
  if (tableauDirections.length !== 10) {
    return false;
  }

  const position = { x: 0, y: 0 };

  for (let i = 0; i < tableauDirections.length; i++) {
    switch (tableauDirections[i]) {
      case "n":
        position.y++;
        break;
      case "s":
        position.y--;
        break;
      case "e":
        position.x++;
        break;
      case "w":
        position.x--;
        break;
    }
  }

  return position.x === 0 && position.y === 0;
}

function capital(string) {
  switch (string) {
    case "France":
      return "Paris";

    case "Allemagne":
      return "Berlin";

    case "Italie":
      return "Rome";

    case "Maroc":
      return "Rabat";

    case "Espagne":
      return "Madrid";

    case "Portugal":
      return "Lisbonne";

    case "Angleterre":
      return "Londres";

    default:
      "inconnu";
  }
}
console.log(capital("Allemagne"));

// **
//  * Auto-generated code below aims at helping you parse
//  * the standard input according to the problem statement.
//  **/

let n = 5;
var inputs = ["-2", "-8", "4", "-1", "1"];
// a temperature expressed as an integer ranging from -273 to 5526

function temp() {
  let arr = [];
  for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    console.log(t);
    arr.push(t);
    console.log(arr);
  }
  const arr2 = arr.reduce((acc, curr) => {
    if (Math.abs(curr) < Math.abs(acc)) {
      return curr;
    } else if (Math.abs(curr) === Math.abs(acc) && curr > acc) {
      return curr;
    }
    return acc;
  }, Infinity);
  return arr2;
}
console.log(temp());

let arra = [1, 3, 8, 56, 48521];

function numberInarray(array, num) {
  return array.find((elt) => elt === num) ? true : false;
}
console.log(numberInarray(arra, 48521));

function check(num1, num2) {
  return num1 === 100 || num2 === 100 || num1 + num2 === 100 ? true : false;
}
console.log(check(50, 20));

function ext(filename) {
  return filename.slice(filename.lastIndexOf("."));
}
console.log(ext("agnes.jpg")); /// retourne .jpg

function replacestring(string) {
  return string
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
}
console.log(replacestring("agnes")); /// return bhoft

function addNew(string) {
  return string.includes("New!")
    ? string.replace("New!", "")
    : `New! ${string}`;
}
console.log(addNew("agnes"), addNew("New! beaumatin"));

function newString(string) {
  const newS = string.slice(0, 3).concat(string.slice(-3));
  if (string.length < 3) {
    return string;
  } else {
    return newS;
  }
}
console.log(newString("beau"));

function firstHalf(string) {
  return string.length % 2 === 0
    ? string.slice(0, string.length / 2)
    : "it is not an even string";
}
console.log(firstHalf("beaumatina"));

function concatString(str1, str2) {
  return str1.slice(1, str1.length).concat(str2.slice(1, str2.length));
}
console.log(concatString("agnes", "beaumatin"));

function nearest100(num1, num2) {
  return Math.abs(100 - num1) > Math.abs(100 - num2) ? num2 : num1;
}
console.log(nearest100(152, -96));

function check2or4(letter, string) {
  let arr = string.split("").filter((elt) => elt === letter);
  console.log(arr);
  return arr.length > 1 && arr.length < 5
    ? `the string contains ${arr.length} occurrences`
    : "the string doen't contains 2 or 4 occurences";
}
console.log(check2or4("a", "badaboumaa"));

function evenDigit(array) {
  return array.filter((elt) => elt % 2 === 0).length;
}
console.log(evenDigit([1, 3, 4, 8, 5, 12]));

function evenUp(num, array) {
  const arr = array.sort((a, b) => {
    return a - b;
  });
  const arr2 = arr.filter((elt) => elt % 2 === 0).filter((elt) => elt > num);
  return arr2;
}
console.log(evenUp(2, [1, 3, 4, 8, 5, 12, 15]));

function checkArray(array) {
  let arr = [...array].sort((a, b) => a - b);
  return JSON.stringify(arr) === JSON.stringify(array) ? true : false;
}
console.log(checkArray([1, 2, 3, 5, 6, 12, 15]));

function largestEven(array) {
  const arr = [...array].sort((a, b) => a - b);
  //console.log(...arr.filter(num => num % 2 === 0));
  const arr2 = arr.filter((elt) => elt % 2 === 0);
  return arr2[arr2.length - 1];
  //Math.max(...arr.filter(num => num % 2 === 0))
}
console.log(largestEven([1, 2, 3, 5, 6, 12]));

function replaceDigit(string) {
  return string.replace(/[0-9]/, "$"); // remplace que le prmier sinon /[0-9]/g
}
console.log(replaceDigit("ag2ne1s"));

function leapYear(year) {
  return year % 4 === 0 ? year : false;
}
console.log(leapYear(2024));

function compareObj(obj1, obj2) {
  console.log(Object.keys(obj1));
  return Object.keys(obj1).every((key) => obj2[key]);
}
console.log(
  compareObj({ name: "John", age: 20 }, { name: "John", sexe: "male", age: 20 })
);

let splitString = `abc,def,ghi
 jkl,mno,pqr
 stu,vwx,yza`;
let fr = [];
const arr5 = splitString.split("\n").map((elt) => elt.split(","));
console.log(arr5);

const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomColor);
// Nous générons un nombre aléatoire en utilisant la méthode Math.random(), qui retourne un nombre décimal compris entre 0 et 1.
// Nous multiplions le nombre aléatoire par 16777215, qui correspond à la valeur décimale maximale que l'on peut obtenir avec six chiffres hexadécimaux (FFFFFF en hexadécimal).
// Nous utilisons la méthode Math.floor() pour arrondir le résultat à l'entier inférieur.
// Nous convertissons le nombre en une chaîne de caractères hexadécimaux à l'aide de la méthode toString(16). Cette méthode convertit un nombre en une chaîne de caractères en utilisant la base spécifiée (16 pour l'hexadécimal).
// Nous concaténons la chaîne de caractères hexadécimaux avec le caractère "#" pour obtenir une chaîne de caractères représentant une couleur en format hexadécimal.

let string = "agnes";
console.log(
  string
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
);

function vowels(string) {
  let count = 0;
  let voyel = "aeiouy";
  let arr1 = string.split("");
  let arr2 = voyel.split("");

  //return arr1.filter((elt) => arr2.includes(elt)).length
  return arr1.filter((elt) => arr2.indexOf(elt) > -1).length;
}
console.log(vowels("beaumatin"));

function extractUnique(string) {
  /// On peut utiliser new Set
  return string.split("").reduce(function (acc, char) {
    if (acc.indexOf(char) === -1) {
      acc.push(char);
    }
    return acc;
  }, []);
}
console.log(extractUnique("stringi"));

// "Jaden Smith, le fils de Will Smith, est la vedette de films tels que The Karate Kid (2010) et After Earth (2013). Jaden est également connu pour certaines de ses philosophies qu'il partage sur Twitter. Lorsqu'il écrit sur Twitter, il est connu pour presque toujours mettre une majuscule à chaque mot. Pour simplifier, vous devrez mettre une majuscule à chaque mot, voyez comment les contractions sont attendues dans l'exemple ci-dessous.

// Votre tâche consiste à convertir des chaînes de caractères en la façon dont elles seraient écrites par Jaden Smith. Les chaînes de caractères sont des citations réelles de Jaden Smith, mais elles ne sont pas mises en majuscules de la même manière qu'il les a tapées initialement.

// Exemple :

// Non en Jaden-Cased : "How can mirrors be real if our eyes aren't real"
// Jaden-Cased : "How Can Mirrors Be Real If Our Eyes Aren't Real"

function convertString(string) {
  let arr = string.split(" ");
  let arr2 = [];
  for (let elt of arr) {
    arr2.push(elt.charAt(0).toUpperCase() + elt.slice(1));
  }
  return arr2.join(" ");
}
console.log(convertString("How can mirrors be real if our eyes aren't real"));

// Le club de croquet des banlieues ouest a deux catégories de membres, Senior et Open. Ils aimeraient votre aide pour un formulaire de demande qui indiquera aux membres potentiels dans quelle catégorie ils seront placés.

// Pour être un senior, un membre doit avoir au moins 55 ans et un handicap supérieur à 7. Dans ce club de croquet, les handicaps vont de -2 à +26 ; plus le joueur est bon, plus le handicap est bas.

// Entrée
// L'entrée consistera en une liste de paires. Chaque paire contient des informations pour un seul membre potentiel. Les informations comprennent un entier pour l'âge de la personne et un entier pour le handicap de la personne.

// Sortie
// La sortie consistera en une liste de valeurs de chaîne de caractères (en Haskell et C : Open ou Senior) indiquant si le membre respectif doit être placé dans la catégorie senior ou open.

// Exemple
// input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function isSenior(array) {
  let arr = [];
  for (let elt of array) {
    if (elt[0] >= 55 && elt[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  }
  return arr;
}
console.log(
  isSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

// Vous disposez d'un tableau (liste) strarr de chaînes de caractères et d'un entier k. Votre tâche est de retourner la première chaîne de caractères la plus longue composée de k chaînes de caractères consécutives prises dans le tableau.

// Exemples :
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concaténez les chaînes de caractères consécutives de strarr par 2, nous obtenons :

// treefoling (longueur 10) concaténation de strarr[0] et strarr[1]
// folingtrashy (" 12) concaténation de strarr[1] et strarr[2]
// trashyblue (longueur 10) concaténation de strarr[2] et strarr[3]
// blueabcdef (longueur 10) concaténation de strarr[3] et strarr[4]
// abcdefuvwxyz (" 12) concaténation de strarr[4] et strarr[5]

// Deux chaînes de caractères sont les plus longues : "folingtrashy" et "abcdefuvwxyz". La première est "folingtrashy", donc longest_consec(strarr, 2) doit retourner "folingtrashy".

// De la même manière :
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n étant la longueur du tableau de chaînes de caractères, si n = 0 ou k > n ou k <= 0 retourner "" (retourner Nothing en Elm, "nothing" en Erlang).

// Remarque :
// chaînes de caractères consécutives : suivent l'une après l'autre sans interruption.

(strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]), (k = 2);

function concatStringArray(array, k) {
  if (array.length === 0 || k <= 0) {
    return "nothing";
  }
  let arr = [];

  for (let index = 0; index < array.length; index++) {
    arr.push(array.slice(index, [index + k]).join(""));
    console.log(arr);
  }
  let plusLongue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > plusLongue.length) {
      plusLongue = arr[i];
    }
  }
  return plusLongue;
}

console.log(
  concatStringArray(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);

function toCamelCase(str) {
  let words = str.split(/-|_/);
  console.log(words);
  let result = words[0];
  let isFirstWordUppercase =
    words[0].charAt(0).toUpperCase() === words[0].charAt(0);
  console.log(isFirstWordUppercase);

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (isFirstWordUppercase) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
}
console.log(toCamelCase("The_Stealth-Warrior"));

function productArray(numbers) {
  let arr = numbers.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  return numbers.map((elt) => arr / elt);
}
console.log(productArray([16, 17, 4, 3, 5, 2]));

function swap(string) {
  const voyels = "aeiou";
  console.log(string.split(""));
  return string.split("").reduce((acc, curr) => {
    if (voyels.includes(curr)) {
      return acc + curr.toUpperCase();
    } else {
      return acc + curr;
    }
  }, "");
}
console.log(swap("HelloWorld!"));

function sortMyString(string) {
  let even = "";
  let impair = "";
  for (let i = 0; i < string.length; i += 2) {
    even += string.charAt(i);
    impair += string.charAt(i + 1);
  }
  return even + " " + impair;
}
console.log(sortMyString("beaumatin"));
