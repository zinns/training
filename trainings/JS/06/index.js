// Create an empty object

// let obj = {}

// Create an object that stores the next type of values: String, Number, Boolean, Array, Object
// Print in console the object's number value

const obj = {
  age: 26,
  arr1: [],
  isMale: true,
  name: 'Andres',
  object: {},
};

console.log(obj.age);

// Create an object called dog
const dog = {};
// Add the key name with its value

dog.name = 'Mavis';

// Add the key age with its value

dog.age = 2;

// Add the key bark with the value 'woof woof'

dog.bark = 'woof woof';

// Add the key color with its value

dog.color = 'white';

// Delete the color property

delete dog.color;

// Print the keys (You should use some method)

console.log(Object.keys(dog));

// Print the values (You should use some method)

console.log(Object.values(dog));

// Print the keys with its values (You should use some method)

console.log(Object.entries(dog));

// Print the next string 'This is Goddard and he is 2 years old' (You should use the object information for the name and the age)

console.log(`This is ${dog.name} and she is ${dog.age} years old`);

// Crear un objeto con la siguiente estructura

// nombre: Andres
// edad 26
// estáCasado: verdadero
// tieneHijos: si
// hijos: ['Shamid', 'Dante']

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// Validate -> if the object is empty print 'There is no user' if not, print 'I'm Andres and I'm 26 years old' using the object values

//  if (obj >= 0){
//     console.log('No hay usuario')
//  } else {
//     console.log(`I'm ${obj.name} and I'm ${obj.age} yars old`)
//  }

// Validate if the children value has Shamid inside

// if (obj.children.includes('Shamid')){
//     console.log(true)
// } else {
//     console.log(false)
// }

// Validate -> if isMarried print 'Andres is already taken' if not, print 'Andres is available'

// if (obj.isMarried){
//     console.log('Andres is already taken')
// } else{
//     console.log('Andres is available')
// }

// Add the key pets with a value of an empty array

// obj.pets = []

// console.log(obj)

// Add to pets key the value of 'Dog' and 'Bunny'

// obj.pets = []

// obj.pets.push('Dog','Bunny')

// Print in console the amount of pets

// console.log(obj.pets.length);

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// // console.log(obj.children.length)

// // Create a copy of the last object

// const object = Object.assign({},obj)

// // Change the name of the second object without modifying the original object

// obj1.name = 'José'

// console.log(obj1)

// Extract just isMarried and hasChildren you should use destructuring

// const user = {
//   age: 26,
//   children: ['Shamid', 'Dante'],
//   hasChildren: 'yes',
//   isMarried: true,
//   name: 'Andres',
// };

// let {isMarried, hasChildren} = user

// Extract the values of children in new variables using destructuring
// (There would be two variables called Shamid and Dante )

const obj0 = {
  age: 26,
  children: ['Shamid', 'Dante'],
  hasChildren: 'yes',
  isMarried: true,
  name: 'Andres',
};

// eslint-disable-next-line semi, object-curly-newline
const {
  children: [Shamid, Dante],
  // eslint-disable-next-line object-curly-newline
} = obj0;

console.log(Shamid, Dante);

// Modify the name value and change it to upper case

const obj1 = {
  age: 26,
  children: ['Shamid', 'Dante'],
  hasChildren: 'yes',
  isMarried: true,
  name: 'Andres',
};

obj1.name = obj1.name.toUpperCase();

console.log(obj1);

// Add a key called luckyNumber and assign a random value between 0 and 100 that should be rounded

const obj2 = {
  age: 26,
  children: ['Shamid', 'Dante'],
  hasChildren: 'yes',
  isMarried: true,
  name: 'Andres',
};

obj2.luckyNumber = Math.floor(Math.random() * 100);

console.log(obj2.luckyNumber);

// Add a key called favoriteMovie with its value

const obj3 = {
  age: 26,
  children: ['Shamid', 'Dante'],
  hasChildren: 'yes',
  isMarried: true,
  name: 'Andres',
};

obj3.favoriteMovie = 'Lord of the Rings';

// Reverse the string of favoriteMovie

obj3.favoriteMovie = obj3.favoriteMovie.split(' ').reverse();

console.log(obj3);

// Sort the values of children key
const obj4 = {
  age: 26,
  children: ['Shamid', 'Dante'],
  hasChildren: 'yes',
  isMarried: true,
  name: 'Andres',
};

obj4.children = obj4.children.sort();

console.log(obj4);

// Validate -> if luckyNumber is multiple of 8 print 'Your lucky number is awesome', if it is not print 'Sorry but your lucky number is awful'

const obj5 = {
  age: 26,
  children: ['Shamid', 'Dante'],
  hasChildren: 'yes',
  isMarried: true,
  name: 'Andres',
};

obj5.luckyNumber = Math.floor(Math.random() * 100);

if (obj5.luckyNumber % 8 === 0) {
  console.log('Your lucky number is awesome');
} else {
  console.log('Sorry but your lucky number is awful');
}
