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




function capital(string){
  switch(string){
    case "France":
    return "Paris"
    
    case "Allemagne":
      return "Berlin"
  
      case "Italie":
        return "Rome"
  
        case "Maroc":
          return "Rabat"
  
          case "Espagne":
            return "Madrid"
  
            case "Portugal":
              return "Lisbonne"
  
              case "Angleterre":
              return "Londres"
  
  default: "inconnu"
}
}
console.log(capital("Allemagne"));



// **
//  * Auto-generated code below aims at helping you parse
//  * the standard input according to the problem statement.
//  **/

let n = 5
var inputs = ['-2', '-8', '4', '-1', '1' ]
// a temperature expressed as an integer ranging from -273 to 5526

function temp(){
  let arr = []
  for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
   console.log(t);
   arr.push(t)
   console.log(arr); 
  }
  const arr2 =  arr.reduce((acc,curr) => {
    if (Math.abs(curr) < Math.abs(acc)) {
      return curr;
    } else if (Math.abs(curr) === Math.abs(acc) && curr > acc) {
      return curr;
    }
    return acc;
    
    }, Infinity)
  return arr2
  
}
console.log(temp())


let arra = [1,3,8,56,48521]

function numberInarray(arra, num){
return arra.find((elt) => elt === num) ? true : false
}
console.log(numberInarray(arra, 48521));

function check(num1, num2){
  return (num1 === 100 || num2===100) || (num1 + num2 === 100) ? true : false
}
console.log(check(50, 20))


function ext(filename){
return filename.slice(filename.lastIndexOf('.'))

}
console.log(ext("agnes.jpg")) /// retourne .jpg



function replacestring(string){
return string.split('').map(char=> String.fromCharCode(char.charCodeAt(0) + 1)).join('')
}
console.log(replacestring("agnes"));/// return bhoft

function addNew(string){
return string.includes("New!") ? string.replace('New!', '') : `New! ${string}`
}
console.log(addNew("agnes"), addNew("New! beaumatin"));

function newString(string){
const newS = string.slice(0,3).concat(string.slice(-3))
  if(string.length < 3){
    return string
  }else{return newS}

}
console.log(newString("af"));

function firstHalf(string){
  return string.length % 2 === 0 ? string.slice(0, string.length / 2) : "it is not an even string"
}
console.log(firstHalf("beaumatin"));

function concatString(str1, str2){
return str1.slice(1, str1.length).concat(str2.slice(1,str2.length))
}
console.log(concatString("agnes", "beaumatin"));

function nearest100 (num1,num2){
return Math.abs(100 - num1) > Math.abs(100- num2) ? num2 : num1
}
console.log(nearest100(152, -96));

function check2or4 (letter, string){
let arr = string.split('').filter((elt) => elt === letter)
return arr.length > 1 && arr.length <5 ? `the string contains ${arr.length} occurrences` : "the string doen't contains 2 or 4 occurences"
}
console.log(check2or4("a", "badaboumaaa"));

function evenDigit(array){
return array.filter((elt) => elt % 2 === 0).length
}
console.log(evenDigit([1,3,4,8,5,12]));

function evenUp(num, array){
const arr =  array.sort((a,b)=> {return a - b})
const arr2 = arr.filter((elt) => elt % 2 === 0).filter((elt) => elt > num)
return arr2
}
console.log((evenUp(2, [1,3,4,8,5,12,15])));

function checkArray(array){
let arr = [...array].sort((a,b) => a-b)
return JSON.stringify(arr) === JSON.stringify(array) ? true : false
}
console.log(checkArray([1,2,3,5,6,12,15]));

function largestEven(array){
const arr =[...array].sort((a,b) => a-b)
console.log(...arr);
const arr2 = arr.filter((elt) => elt % 2 === 0)
return arr2[arr2.length -1]
//Math.max(...arr.filter(num => num % 2 === 0))
}
console.log(largestEven([1,2,3,5,6,12]));

function replaceDigit(string){
return string.replace(/[0-9]/, "$") // remplace que le prmier sinon /[0-9]/g
}
console.log(replaceDigit("ag2ne1s"));

function leapYear(year){
return year % 4 === 0 ? year : false
}
console.log(leapYear(2024));

function compareObj(obj1, obj2){
console.log(Object.keys(obj1));
return Object.keys(obj1).every((key) => obj2[key])
}
console.log(compareObj( { name: "John", age: 20 }, { name: "John", sexe: "male", age: 20, },));


let splitString = `abc,def,ghi
 jkl,mno,pqr
 stu,vwx,yza`
let fr=[]
const arr5 = splitString.split('\n').map((elt => elt.split(',')))
console.log(arr5);



const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomColor);
// Nous générons un nombre aléatoire en utilisant la méthode Math.random(), qui retourne un nombre décimal compris entre 0 et 1.
// Nous multiplions le nombre aléatoire par 16777215, qui correspond à la valeur décimale maximale que l'on peut obtenir avec six chiffres hexadécimaux (FFFFFF en hexadécimal).
// Nous utilisons la méthode Math.floor() pour arrondir le résultat à l'entier inférieur.
// Nous convertissons le nombre en une chaîne de caractères hexadécimaux à l'aide de la méthode toString(16). Cette méthode convertit un nombre en une chaîne de caractères en utilisant la base spécifiée (16 pour l'hexadécimal).
// Nous concaténons la chaîne de caractères hexadécimaux avec le caractère "#" pour obtenir une chaîne de caractères représentant une couleur en format hexadécimal.


let string = "agnes"
console.log(string.split('').sort((a,b) => a.localeCompare(b)).join(''))

function vowels(string){
  let count = 0
let voyel = "aeiouy"
let arr1 = string.split('')
let arr2 = voyel.split('')

//return arr1.filter((elt) => arr2.includes(elt)).length
return arr1.filter((elt) => arr2.indexOf(elt) > -1).length
}
console.log(vowels("beaumatin"));

function extractUnique(string){  /// On peut utiliser new Set
  return string.split('').reduce(function(acc, char) {
    if (acc.indexOf(char) === -1) {
      acc.push(char);
    }
    return acc;
  }, []);
}
console.log(extractUnique("stringi"));