

// On vous donne un tableau (qui aura une longueur d'au moins 3, mais qui pourrait être très grand) contenant des entiers. Le tableau est soit entièrement composé de nombres entiers impairs, soit entièrement composé de nombres entiers pairs, à l'exception d'un seul nombre entier . Écrivez une méthode qui prend le tableau comme argument et renvoie cette "valeur aberrante".

function unique(integers) {
  let odds = integers.filter((int) => int % 2 !== 0);
  let evens = integers.filter((int) => int % 2 === 0);
  return odds.length === 1 ? odds[0] : evens[0];
}

//console.log(unique([2, 4, 0, 100, 4, 11, 2602, 36]));
//console.log(unique([160, 3, 1719, 19, 11, 13, -21]));

//Dans une petite ville, la population est de p0 = 1000 au début de l'année. La population augmente régulièrement de 2 % par an et de plus 50 nouveaux habitants par an viennent s'installer dans la ville. De combien d'années la ville a-t-elle besoin pour voir sa population supérieure ou égale à p = 1200 habitants ?

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + (p0 * percent) / 100 + aug;
    years++;
  }
  return years;
}
//console.log(nbYear(1000, 2, 50, 1200));

// Si nous énumérons tous les nombres naturels inférieurs à 10 qui sont des multiples de 3 ou 5, nous obtenons 3, 5, 6 et 9. La somme de ces multiples est 23.
// Terminez la solution de manière à ce qu'elle renvoie la somme de tous les multiples de 3 ou 5 inférieurs au nombre transmis. De plus, si le nombre est négatif, il faut retourner 0 .
// Remarque : si le nombre est un multiple de 3 et de 5, ne le comptez qu'une fois.

function sum(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (i < num && num > 0) {
      if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
        arr.push(i);
      }
    }
    if (num < 0) {
      return 0;
    }
  }
 // console.log(arr);
  return arr.reduce((acc, curr) => acc + curr);
}
//console.log(sum(15));

//Complétez la solution de manière à ce qu'elle divise la chaîne de caractères en paires de deux caractères. Si la chaîne contient un nombre impair de caractères, elle doit remplacer le deuxième caractère manquant de la dernière paire par un trait de soulignement ('_').

function solution(s) {
  let result = [];
  for (let i = 0; i < s.length; i += 2) {
    result.push(s.substr(i, 2).padEnd(2, "_"));
  }
  return result;
}

//console.log(solution("beaumatin"));
// Cette fonction JavaScript solution(s) prend une chaîne s en entrée et renvoie un tableau de sous-chaînes de deux caractères à partir de la chaîne d'entrée.
// Elle initialise un tableau vide result qui stockera les sous-chaînes.
// Ensuite, elle utilise une boucle for qui se répète tous les deux caractères. À chaque itération, elle extrait une sous-chaîne de deux caractères à partir de s en utilisant la méthode substr et ajoute le résultat à result. Si la longueur de la chaîne d'entrée est impaire, la dernière sous-chaîne sera complétée avec un underscore en utilisant la méthode padEnd.
// Enfin, elle renvoie le tableau result.

function validBraces(braces) {
  let stack = [];
  let pairs = { ")": "(", "]": "[", "}": "{" };
 // console.log(pairs);
  for (let i = 0; i < braces.length; i++) {
    let brace = braces[i];
   // console.log(brace);
    if (brace in pairs) {
       // console.log(pairs[brace], stack[stack.length - 1]);
      if (stack[stack.length - 1] === pairs[brace]) {
        stack.pop();
       // console.log(stack);
      } else {
        return false;
      }
    } else {
      stack.push(brace);
     // console.log(stack);
    }
  }
  return stack.length === 0;
}
//console.log(validBraces("[(])"));
// Cette fonction JavaScript validBraces(braces) prend une chaîne de accolades braces en entrée et détermine si l'ordre des accolades est valide.
// Elle initialise un tableau vide stack pour stocker les accolades ouvrantes lorsqu'elles sont rencontrées.
// Elle initialise également un objet pairs qui relie les accolades fermantes aux accolades ouvrantes correspondantes.
// Ensuite, elle utilise une boucle for pour parcourir tous les caractères de braces. À chaque itération, elle récupère le caractère actuel dans la variable brace.
// Si brace est une accolade fermante (')', ']', '}'), elle vérifie si la dernière entrée dans stack correspond à l'accolade ouvrante correspondante selon pairs. Si c'est le cas, elle retire l'entrée de stack. Sinon, elle retourne false immédiatement.
// Si brace est une accolade ouvrante ('(', '[', '{'), elle l'ajoute à stack.
// Enfin, elle retourne true si la longueur de stack est nulle, ce qui signifie que toutes les accolades ouvrantes ont été associées à des accolades fermantes correspondantes. Sinon, elle retourne false.