import { recipes } from "./data.js";

//REDUCE BASE

const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
//console.log(product); // Output: 120

const num = [1, 2, 3, 4, 5];
const sumOfSquares = num.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue * currentValue);
  return accumulator;
}, []);
//console.log(sumOfSquares);
/* Output:
[1, 4, 9, 16, 25]
*/

//ANOTHER EXEMPLE   (retourne un objet qui compte le nombre d'occurences)
const text = "the quick brown fox jumps over the lazy dog";
const words = text.split(" ");
//console.log(words);
const wordCounts = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
//console.log(wordCounts);
/* Output:
{
  the: 2,
  quick: 1,
  brown: 1,
  fox: 1,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1
}
*/

const numb = [1, 2, 3, 2, 1, 5, 3, 2, 4];
const countOccurrences = numb.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
//console.log(countOccurrences);
/* Output:
{ 1: 2, 2: 3, 3: 2, 5: 1, 4: 1 }
*/

// CALCUL D'UNE MOYENNE DE VALEUR D'OBJETS (age)
const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 30 },
  { name: "Joan", age: 35 },
];

const averageAge = people.reduce(
  (accumulator, currentValue) => {
    accumulator.count += 1;
    accumulator.sum += currentValue.age;
    return accumulator;
  },
  { count: 0, sum: 0 }
);

//console.log(averageAge.sum / averageAge.count);
// Output: 28

//TOTAL PAR CATEGAORIES
const products = [
  { name: "apple", category: "fruit", price: 1.5 },
  { name: "banana", category: "fruit", price: 2.0 },
  { name: "carrot", category: "vegetable", price: 0.75 },
  { name: "potato", category: "vegetable", price: 1.0 },
];

const totalCostByCategory = products.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.category]) {
    accumulator[currentValue.category] = 0;
  }

  accumulator[currentValue.category] += currentValue.price;
  return accumulator;
}, {});

//console.log(totalCostByCategory);
// Output: { fruit: 3.5, vegetable: 1.75 }

//TOTAL PAR PRODUIT => COUT FONCTION QUANTITE
const orders = [
  { product: "apple", quantity: 5, price: 1.5 },
  { product: "banana", quantity: 2, price: 2.0 },
  { product: "carrot", quantity: 7, price: 0.75 },
  { product: "potato", quantity: 3, price: 1.0 },
];

const totalOrderCost = orders.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.product]) {
    accumulator[currentValue.product] = 0;
  }

  accumulator[currentValue.product] +=
    currentValue.quantity * currentValue.price;
  return accumulator;
}, {});

//console.log(totalOrderCost);
// Output: { apple: 7.5, banana: 4.0, carrot: 5.25, potato: 3.0 }

// SALARIES PAR AGE
const human = [
  { name: "John", age: 30, salary: 50000 },
  { name: "Jane", age: 27, salary: 55000 },
  { name: "Jim", age: 35, salary: 45000 },
  { name: "Jessica", age: 31, salary: 52000 },
];

const salariesByAge = human.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.age]) {
    accumulator[currentValue.age] = 0;
  }

  accumulator[currentValue.age] += currentValue.salary;
  return accumulator;
}, {});

//console.log(salariesByAge);
// Output: { 30: 50000, 27: 55000, 35: 45000, 31: 52000 }

//TOTAL DES PAGES
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 326 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 227 },
];

const totalPages = books.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.pages;
}, 0);

//console.log(totalPages);
// Output: 914

// Output: { fruit: [ 'apple', 'banana' ], vegetable: [ 'carrot', 'potato' ] }
const foods = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "potato", type: "vegetable" },
];

const foodTypes = foods.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.type]) {
    accumulator[currentValue.type] = [];
  }

  accumulator[currentValue.type].push(currentValue.name);
  return accumulator;
}, {});

// Output: 1.8
const purchases = [
  { item: "apple", price: 0.5 },
  { item: "banana", price: 0.3 },
  { item: "carrot", price: 0.6 },
  { item: "potato", price: 0.4 },
];

const total = purchases.reduce((accumulator, currentValue) => {
  //console.log(accumulator + currentValue.price);
  return accumulator + currentValue.price;
}, 0);

/*
  Output: 
  {
    fruit: { quantity: 7, products: ['apple', 'banana'] },
    vegetable: { quantity: 7, products: ['carrot', 'potato'] }
  }
  */
const produc = [
  { name: "apple", category: "fruit", quantity: 5 },
  { name: "banana", category: "fruit", quantity: 2 },
  { name: "carrot", category: "vegetable", quantity: 3 },
  { name: "potato", category: "vegetable", quantity: 4 },
];

const inventory = produc.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.category]) {
    accumulator[currentValue.category] = {
      quantity: 0,
      produc: [],
    };
  }

  accumulator[currentValue.category].quantity += currentValue.quantity;
  accumulator[currentValue.category].produc.push(currentValue.name);

  return accumulator;
}, {});

//console.log(inventory);

/*
Output: 
{
  Sales: { employees: ['John', 'Jim'], totalSalary: 9500 },
  Marketing: { employees: ['Jane', 'Judy'], totalSalary: 13000 },
  IT: { employees: ['Jack'], totalSalary: 8000 }
}
*/
const employees = [
  { name: "John", department: "Sales", salary: 5000 },
  { name: "Jane", department: "Marketing", salary: 6000 },
  { name: "Jim", department: "Sales", salary: 4500 },
  { name: "Judy", department: "Marketing", salary: 7000 },
  { name: "Jack", department: "IT", salary: 8000 },
];

const departmentStats = employees.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.department]) {
    accumulator[currentValue.department] = {
      employees: [],
      totalSalary: 0,
    };
  }

  accumulator[currentValue.department].employees.push(currentValue.name);
  accumulator[currentValue.department].totalSalary += currentValue.salary;
  return accumulator;
}, {});
//console.log(departmentStats);

/*
Output: 
{
  'Leo Tolstoy': 1225,
  'Herman Melville': 740,
  'Jane Austen': 278,
  'F. Scott Fitzgerald': 218,
  'Gabriel Garcia Marquez': 417
}
*/
const book = [
  { title: "War and Peace", author: "Leo Tolstoy", pages: 1225 },
  { title: "Moby Dick", author: "Herman Melville", pages: 740 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 278 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    pages: 417,
  },
];

const authorPages = book.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.author]) {
    accumulator[currentValue.author] = 0;
  }

  accumulator[currentValue.author] = currentValue.pages;

  return accumulator;
}, {});

//console.log(authorPages);

// Output: ['New York', 'London', 'Paris']
const arr = [
  { name: "John", age: 30, city: "New York" },
  { name: "Jane", age: 25, city: "London" },
  { name: "Jim", age: 35, city: "Paris" },
];

const cities = arr.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue.city)) {
    accumulator.push(currentValue.city);
  }

  return accumulator;
}, []);
//console.log(cities);

// Output: ['reading', 'traveling', 'painting', 'dancing', 'hiking']
// Output: { reading: 2, traveling: 1, painting: 1, dancing: 1, hiking: 1 }
const ar = [
  { name: "John", age: 30, hobbies: ["reading", "traveling"] },
  { name: "Jane", age: 25, hobbies: ["painting", "dancing"] },
  { name: "Jim", age: 35, hobbies: ["hiking", "reading"] },
];

const allHobbies = ar.reduce((accumulator, currentValue) => {
  currentValue.hobbies.forEach((elt) => {
    if (!accumulator.includes(elt)) {
      accumulator.push(elt);
    }
  });

  return accumulator;
}, []);

//console.log(allHobbies);

const hobbiesCount = ar.reduce((accumulator, currentValue) => {
  currentValue.hobbies.forEach((hobby) => {
    if (accumulator[hobby]) {
      accumulator[hobby]++;
    } else {
      accumulator[hobby] = 1;
    }
  });
  return accumulator;
}, {});
//console.log(hobbiesCount);

// EXEMPLE AVEC LE TABLEAU RECIPES DU PROJET 7
//console.log(recipes);
const textObj = recipes.reduce((accumulator, currentValue) => {
  const newObj = {
    id: currentValue.id,
    text:
      currentValue.name +
      " " +
      currentValue.description +
      currentValue.ingredients.map((ingredient) => {
        return ingredient.ingredient;
      }),
    recette: currentValue,
  };
  //console.log(newObj);
  accumulator.push(newObj);
  return accumulator;
}, []);

//console.log(textObj);


// Output: [
//   { name: 'John', age: 30, interests: ['READING', 'TRAVELING'] },
//   { name: 'Jane', age: 25, interests: ['PAINTING', 'YOGA'] },
//   { name: 'Jim', age: 35, interests: ['RUNNING', 'GARDENING'] }
// ]
const array = [
  { name: "John", age: 30, interests: ["reading", "traveling"] },
  { name: "Jane", age: 25, interests: ["painting", "yoga"] },
  { name: "Jim", age: 35, interests: ["running", "gardening"] },
];

const updateArr = array.reduce((accumulator, currentValue) => {
  const newObj = {
    ...currentValue,
    interests: currentValue.interests.map((elt) => elt.toLowerCase()),
  };
  accumulator.push(newObj);
  return accumulator;
}, []);
//console.log(updateArr);

/*
[
  { name: "John", age: 25, city: "New York", senior: false },
  { name: "Jane", age: 32, city: "London", senior: true },
  { name: "Jim", age: 40, city: "Paris", senior: true }
]
*/
const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 32, city: "London" },
  { name: "Jim", age: 40, city: "Paris" },
];

const modifiedData = data.reduce((accumulator, currentValue) => {
  const newObj = {
    ...currentValue,
    senior: currentValue.age > 30 ? true : false,
  };
  accumulator.push(newObj);
  return accumulator;
}, []);

//console.log(modifiedData);

/*
{
  "New York": {
    total: 2,
    avgAge: 26.5,
    residents: ["John", "Joan"]
  },
  "London": {
    total: 1,
    avgAge: 32,
    residents: ["Jane"]
  },
  "Paris": {
    total: 1,
    avgAge: 40,
    residents: ["Jim"]
  }
}
*/
const d = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 32, city: "London" },
  { name: "Jim", age: 40, city: "Paris" },
  { name: "Joan", age: 28, city: "New York" },
  { name: "Agnès", age: 49, city: "New York" },
];

const summary = d.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.city]) {
    accumulator[currentValue.city] = {
      total: 0,
      avgAge: 0,
      residents: [],
    };
  }
  accumulator[currentValue.city].total += 1;
  accumulator[currentValue.city].residents.push(currentValue.name);
  accumulator[currentValue.city].avgAge =
    (accumulator[currentValue.city].avgAge *
      (accumulator[currentValue.city].total - 1) +
      currentValue.age) /
    accumulator[currentValue.city].total;
  accumulator[currentValue.city].total;

  return accumulator;
}, {});
//console.log(summary);

/*{
  groceries: { debit: 65, credit: 0 },
  entertainment: { debit: 20, credit: 0 },
  income: { debit: 0, credit: 150 },
  transportation: { debit: 40, credit: 0 },
  gift: { debit: 0, credit: 20 }
}
*/
const transactions = [
  { type: "debit", amount: 50, category: "groceries" },
  { type: "debit", amount: 20, category: "entertainment" },
  { type: "credit", amount: 100, category: "income" },
  { type: "debit", amount: 40, category: "transportation" },
  { type: "credit", amount: 20, category: "gift" },
  { type: "debit", amount: 15, category: "groceries" },
  { type: "credit", amount: 50, category: "income" },
];

const budget = transactions.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.category]) {
    accumulator[currentValue.category] = {
      debit: 0,
      credit: 0,
    };
  }
  if (currentValue.type === "debit") {
    accumulator[currentValue.category].debit += currentValue.amount;
  } else {
    accumulator[currentValue.category].credit += currentValue.amount;
  }
  return accumulator;
}, {});

//console.log(budget);
