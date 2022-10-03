// Create an empty object

// const user1 = {};

// Create an object that stores the next type of values: String, Number, Boolean, Array, Object
// Print in console the object's number value

const user2 = {
  age: 26,
  familyInformation: {},
  // favoritesCandys: [], -> en esta línea no me respta el arreglo vacío
  isMale: true,
  name: 'Andres',
};

console.log(user2);

// Create an object called car
const car = {};
// Add the key name with its value

car.name = 'Honda';
// Add the key year with its value
car.age = 2022;
// Add the key color with its value
car.color = 'Red';
// Add the key gas with the value 'diesel'
car.gas = 'Diesel';
// Add the key doors with the value 4
car.doors = 4;
// Delete the color property
delete car.color;

// Print from 0 to 100 -> Including 0 and 100
// for (let i = 0; i <= 100; i++) { -> a pesar de que ya tiene e espacio despues del for, lo sigue piendo
//     console.log([i]); -> en esta linea no deja pide espacio en blanco despues dle primer corchete y antes del ultim corchete
// }

// Print from 100 to 0 -> Including 0 and 100

// for (let e = 100; e >= 0; e--) {
//     console.log([e]); -> mismo comentario de la lienea 34 y 35
// }

// Print from 0 to 100 but going from 0 to 2 and so on -> 0 2 4 6 8

// for (let d = 0; d <= 100; d += 2) {
//   console.log([d]); -> mismo comentario de la linea 34 y 35
// }

// Print from 0 to 100
// if the number is multiple of 5 print 'You are easy'
// if the number is multiple of 7 print 'You are kind of hard'
// if the number is multiple of 7 and 5 print 'You are impossible'

// for (let i = 0; i <= 100; i++) {
//   if ([i] % 5 === 0) {
//     console.log('You are easy');
//   } else if ([1] % 7 === 0) {
//     console.log('You are kind of hard');
//   } else if ([i] % 7 === 0 && [i] % 5 === 0) {
//     console.log('You are impossible');
//   }
// } -> también pide espacios en blanco se aplican y despues pide que se qiten

// Create an object with the next structure
// const user = {
//   age: 28,
//   children: 0,
//  favoriteFood: [
// {
//   ingredients: ['Masa', 'slasa de tomate', 'jamon', 'queso'], -> pide espcios en blanco entre los corchetes se aplica y despues pide quitarlos
//   isExensive: false,
//   name: 'Pizza',
// },
// {
//   ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'], -> mismo comentario de la linea 73
//   isExpensive: false,
//   name: 'Alitas',
// },
//  ],
//   favoriteMovies: [
//     'Lord of the Rings',
//     'Black Hawk Down',
//     '13 hours: The Secrets Soldiers of Benghazi',
//   ],
//   friends: [
//     {
//       age: 29,
//       children: 0,
//       favoriteFood: [
//         {
//   ingredients: ['Tortilla', 'carne', 'verdura'], -> pide espacio entre los corchetes
//   isExensive: false,
//   name: 'Tacos',
// },
// {
//   ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'], -> pide espcio entre los corchetes
//       isExpensive: false,
//       name: 'Alitas',
//     },
//   ]
//   favoriteMovies: ['Star wars', 'Pokémon', 'Spiderman'], -> pide espacio entre los corchetes
//   hasChildren: false,
//   isMarried: true,  -> problemas con las comas, se aplican y depsues pide que se quiten
//   name: 'Edgar',
// },
//   ], -> lo mismo con las comas

//   hasChildren: false,
//   isMarried: true,
//   name: 'Edgar',
// };

// Validate -> if the object is empty print 'There is no user' if not, print 'I'm Andres and I'm 26 years old' using the object values

// if (user) {
//   console.log('There is not user');
// } else {
//   console.log(`I'm ${user.name} and I'm ${user.age} years old`);
// } -> pide comas

// Validate -> if isMarried print 'Andres is already taken' if not, print 'Andres is available'

// if (user.isMarried) {
//   console.log('Andres is already taken');
// } else {
//   console.log('Andres is available');
// } -> pide comas

// Add the key pets to all the user objects with a value of an empty array

// user.pets = [];
// user.friends.pets = []; -> no permite tener arreglos vacios

// Add to pets some string values

// user.pets = ['dog', 'bunny'];
// user.friends.pets = ['dog']; -> pide comas

// Print in console the amount of pets
// Create a copy of the global object
// Create a copy of the first object of friends key

// console.log(user.pets.length);

// let user3 = Object.assign({}, user);

// Object.assign({}, user.friends);

// Change the name of the copy global object without modifying the original object

// Extract just isMarried and hasChildren you should use destructuring

// let { isMarried, hasChildren } = user;

// Extract the values of children in new variables using destructuring (There would be two variables called Shamid and Dante )

// let { children: Shamid, Dante } = user;

// Extract the name of each favoriteFood object value

// console.log(user.favoriteFood.values());

// Modify the name value and change it to upper case

// user.name.toUpperCase();

// Add a key called luckyNumber and assign a random value between 0 and 100 that should be rounded

// user.luchyNumber = Math.round(Math.random() * 100);

// Sort the values of children key

// user.children.sorth();

// Validate -> if luckyNumber is multiple of 3 print 'Your lucky number is awesome', if it is not print 'Sorry but your lucky number is awful'

// if (user.luchyNumber % 3 === 0){
//   console.log('Your lucky number is awesome');
// } else {
//   console.log('Sorry but your lucky number is awful');
// }
