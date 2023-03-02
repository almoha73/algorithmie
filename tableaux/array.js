console.log("hello world");

/*

Trouvez le nombre le plus fréquent dans ce tableau.
Supprimez tous les doublons dans le tableau.
Calculez la somme et la moyenne de tous les nombres du tableau.
Cet exercice couvre plusieurs concepts importants en JavaScript, tels que la génération de nombres aléatoires, les algorithmes de tri, le traitement de tableaux, et les opérations de base sur les tableaux.*/

//Créez un tableau de 1000 nombres aléatoires compris entre 1 et 1000.
let array = [];
for (let i = 1; i <= 1000; i++) {
  array.push(Math.floor(Math.random() * 1000));
}
//console.log(array);

//Triez ce tableau en utilisant un algorithme de tri rapide (quick sort).
function quickSort(arr, left, right) {
  let pivot, partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}
function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot],
    partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

array = quickSort(array, 0, array.length - 1);
//console.log(array);

// Tri à bulle
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

//console.log(array);
//console.log(array.sort((a, b) => a - b));

(nums = [2, 5, 1, 3, 4, 7]), (n = 3);
/*Output: [2,3,5,4,1,7] */

const shuffle = (nums, n) => {
//  console.log(nums.length);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i], nums[i + n]);
  }
  return arr;
};
//console.log(shuffle(nums, 3));

/*Donné un tableau d'entiers arr et un entier k.

On dit qu'une valeur arr[i] est plus forte qu'une valeur arr[j] si |arr[i] - m| > |arr[j] - m|, où m est la médiane du tableau. Si |arr[i] - m| == |arr[j] - m|, alors arr[i] est considéré comme plus fort que arr[j] si arr[i] > arr[j].

Renvoie une liste des k valeurs les plus fortes dans le tableau. Retournez la réponse dans n'importe quelle ordre arbitraire.

La médiane est la valeur centrale dans une liste d'entiers triée. Plus formellement, si la longueur de la liste est n, la médiane est l'élément en position ((n - 1) / 2) dans la liste triée (indexée à 0).

Pour arr = [6, -3, 7, 2, 11], n = 5 et la médiane est obtenue en triant le tableau arr = [-3, 2, 6, 7, 11] et la médiane est arr[m] où m = ((5 - 1) / 2) = 2. La médiane est 6.
Pour arr = [-7, 22, 17, 3], n = 4 et la médiane est obtenue en triant le tableau arr = [-7, 3, 17, 22] et la médiane est arr[m] où m = ((4 - 1) / 2) = 1. La médiane est 3.

Input: arr = [6,7,11,7,6,8], k = 5
Output: [11,8,6,6,7]
*/

Input: salary = [4000, 3000, 1000, 2000];
Output: 2500.0;
var average = function (salary) {
  const min = salary.reduce((acc, curr) => Math.min(acc, curr));
  const max = salary.reduce((acc, cur) => Math.max(acc, cur));
  const arr = salary.filter((elt) => elt !== min && elt !== max);
 // console.log(arr);
  return arr;
};

//console.log(average(salary));

//Nombre premiers entre O et 100 (seulement divisible par 1 et lui-même)
function listPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      // ou j <= Math.sqrt(i)
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

//console.log(listPrimes(100));



