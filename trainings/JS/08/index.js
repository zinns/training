// Create an empty object
// Validate if the object is empty

// const obj = {};
// if (obj.length >= 0){
//   console.log('el objeto no esta vacío'); ->pide espacios en blanco
// } else {
//   console.log('el objeto esta vacío'); -> pide espacios en blanco
// }

// Create an object that stores the next type of values: String, Number, Boolean, Array, Object

// const object = {
//   age: 26,
//   family: {},
//   favoriteMovies: [], -> mismo probla no me deja tener arreglos vacíos
//   isMarried: true,
//   name: 'Andres',
// };

// Print in console the object's number value

// console.log(object.age);

// Print each object value using For in

// for (const value in object) {
//   console.log(object[value]);
// }

// for (const key in object) {
//   if (object[key] === Number) {
//     console.log(`This could be your age ${object[key]}`);
//   } else {
//     console.log('algo salio mal');
//   }
// }

// for (const key in object) {
//   if (object[key] === true) {
//     console.log(object[key].typeOf);
//     } else if (object[key] === false){
//     console.log('Really? I had a different idea');
//   }
// }

// Crear un objeto llamado coche
// Añade la clave nombre con su valor
// Añade la clave año con su valor
// Añade la clave color con su valor
// Añade la clave gasolina con el valor 'diesel'
// Añade la clave puertas con el valor 4
// Eliminar la propiedad color
// Validar si el objeto está vacío

const car = {
  color: 'Red',
  gas: 'diesel',
  name: 'Honda',
  year: 2022,
};

delete car.color;

// if (car.length >= 0) -> pide espacios
//   console.log(true);
// } else {
//   console.log(false);
// }

// Print from 0 to 100 and print the sum of all numbers. -> (The sum of all numbers from 0 to 100 is 5050.)

// for (let i = 0; i <= 100; i++){ -> pide espacios
//   console.log(i + i);
// }

// Print from 0 to 100 -> Including 0 and 100 -> Do it using For/Do While/While
// Print from 0 to 100 but going from 0 to 2 and so on -> 0 2 4 6 8 -> Do it using For/Do While/While
// Print from 0 to 100 -> Do it using For/Do While/While
// if the number is multiple of 5 print 'You are easy'
// if the number is multiple of 7 print 'You are kind of hard'
// if the number is multiple of 7 and 5 print 'You are impossible'

// for (let i = 0; i <=100; i++){
//   console.log(i);
// }

// for (let i = 0; i <=100; i++){
//   if(i % 5 === 0){
//   console.log('You are easy')
// } else if (i % 7 === 0) {
//   console.log('You are kind of hard')
// } else if (i % 7 === 0 && i % 5 ===0){
//   console.log('You are imposible')
// }
// }

// for (let i = 100; i >=0; i+=2){
//   console.log(i);
// }

// let e = 100;

// do {
//   console.log(`contando con do while ${e}`);
//   e++;
// } while (e <= 100);

// do {
//   console.log(`contando con do while ${e}`)
//   e+=2;
// } while (e >= 100)

// let a = 0;

// while (a <= 100) {
//   console.log(`contando con while ${a}`);
//   a++;
// }

// while (a <= 100){
//   console.log(`contando con while ${a}`)
//   a+=2
// }
// Create an empty array
// Add to the empty array 5 random numbers from 0 to 100 using some loop
// Find the biggest random number and print it

// const arr = []

// for (let i = 0; arr.length; i++){
//   arr[i].push(Math.round(Math.random) * 100);
//   console.log(arr[i]);
// }

// Create an array with 6 string values
// Print each array value using For of

// const arr1 = ['Andres', 'Harumi', 'Shamid', 'Dante', 'Mavis', 'Mcqueen']

// for (const iterator of arr1) {
//   console.log(iterator);
// }

// Create an object with the next structure
// const user = {
//   age: 28,
//   children: 0,
//   favoriteFood: [
//     {
//       ingredients: ['Masa', 'slasa de tomate', 'jamon', 'queso'],
//       isExensive: false,
//       name: 'Pizza',
//     },
//     {
//       ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'],
//       isExpensive: false,
//       name: 'Alitas',
//     },
//   ],
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
//           ingredients: ['Tortilla', 'carne', 'verdura'],
//           isExensive: false,
//           name: 'Tacos',
//         },
//         {
//           ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'],
//           isExpensive: false,
//           name: 'Alitas',
//         },
//       ],
//       favoriteMovies: ['Star wars', 'Pokémon', 'Spiderman'],
//       hasChildren: false,
//       isMarried: true,
//       name: 'Edgar',
//     },
//     {
//       age: 26,
//       children: 2,
//       favoriteFood: [
//         {
//           ingredients: ['Tortilla', 'carne', 'verdura'],
//           isExensive: false,
//           name: 'Tacos',
//         },
//         {
//           ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'],
//           isExpensive: false,
//           name: 'Alitas',
//         },
//       ],
//       favoriteMovies: ['Black Howk Down', 'Lord of the rings', '13 hours'],
//       hasChildren: false,
//       isMarried: true,
//       name: 'Andres',
//     },
//      {
//       age: 26,
//       children: 0,
//       favoriteFood: [
//         {
//           ingredients: ['Tortilla', 'carne', 'verdura'],
//           isExensive: false,
//           name: 'Tacos',
//         },
//         {
//           ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'],
//           isExpensive: false,
//           name: 'Alitas',
//         },
//       ],
//       favoriteMovies: ['Star wars', 'Pokémon', 'Spiderman'],
//       hasChildren: false,
//       isMarried: true,
//       name: 'Andres',
//     },
//   ],
// };

// if (user.length > 0) {
//   console.log('There is not user');
// } else {
//   console.log(`I am ${user.name} I am ${user.age} years old`);
// }

// Validate -> if isMarried print 'Andres is already taken' if not, print 'Andres is available'

// if (user.isMarried === user.isMarried) {
//   console.log('Andres is already taken');
// } else {
//   console.log('Andres is avaliable');
// }

// Add the key pets to all the user objects with a value of an empty array

// user.pets = [];
// user.friends.pets = [];

// Add to pets some string values

// user.pets.push('Goddars', 'Gyda');

// user.friends.pets.push('Mavis', 'Mcqueen');

// Create a copy of the global object

// const users = Object.assign({},user)

// console.log(users);

// Change the name of the global copy object without modifying the original object

// let users = user2

// let {isMarried, hasChildren} = user

// Extract the values of children in new variables using destructuring (There would be two variables called Shamid and Dante )

// let {children: [Shamid, Dante]} = user

// Extract the name of each favoriteFood object value (You should use destructuring)

// let {favoriteFood} = user

// Modify the name value and change it to upper case

// user.name.toUpperCase();

// Add a key called luckyNumber and assign a random value between 0 and 100 that should be rounded

// user.luckyNumver = Math.round(Math.random() * 100);

// Sort the values of children key

// user.children.sorth();

// Validate -> if luckyNumber is multiple of 3 print 'Your lucky number is awesome', if it is not print 'Sorry but your lucky number is awful'

// if (user.luckyNumver % 3 === 0){
//   console.log('your lucky number is awesom');
// } else {
//   console.log('Sorry but your lucky number is awful');
// }

// For the next exercises you should use For/Do While/While/For of/For in Loops

// Try to do all exercises using all the loops

// In almost all exercises should be 5 different scenarios

// Reverse all the values of favoriteFood and print it
// Print the next template -> Hi, I'm (name) an I'm (age) years old and I'm friend of (global name) / You should use objects variables
// Print the names of friends objects
// Validate if each friend is an adult
// If is an adult print 'Yes, I can drive and drink alcohol'
// If is not an adult print 'I can drive and drink too, but it is illegal'
// Validate if favoriteMovies values have inside 'the' (or its equivalent in spanish no matter lower or upper case) ang modify it to 'this'
// Print in console the name of each friend with the name of each favorite food
// Example -> 'I'm Alex and I like tacos'
// Example -> 'I'm Alex and I like cheetos'
// Example -> 'I'm Jorge and I like sandwich'
// Example -> 'I'm Jorge and I like pizza'
// When the task has been completed you have to make a PR to develop

// user.favoriteFood.reverse()

// console.log(`Hola soy ${user.name} y tengo ${user.age} y soy amigo de ${user.friends.name}`)

// console.log(user.friends.name)

// if (user.friends.age >= 18){
//   console.log('Yes, I can drive and drink alcohol');
// } else {
//   console.log('I can drive and drink too, but it is illegal');
// }

// if (user.friends.fvoriteMovie.includs('The')){
//   user.friends.favoriteMovie.repleace('The','this')
// // }

// console.log(`I'm am ${user.freinds.name} and I like ${user.favoriteFood.name}`);
// console.log(`I'm am ${user.freinds.name} and I like ${user.favoriteFood.name}`);
// console.log(`I'm am ${user.freinds.name} and I like ${user.favoriteFood.name}`);
// console.log(`I'm am ${user.freinds.name} and I like ${user.favoriteFood.name}`);
