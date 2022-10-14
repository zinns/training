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
car.year = 2022;
// Add the key color with its value
car.color = 'Red';
// Add the key gas with the value 'diesel'
car.gas = 'Diesel';
// Add the key doors with the value 4
car.doors = 4;
// Delete the color property
delete car.color;

// Print from 0 to 100 -> Including 0 and 100
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// Print from 100 to 0 -> Including 0 and 100

for (let e = 100; e >= 0; e--) {
  console.log([e]);
}

// Print from 0 to 100 but going from 0 to 2 and so on -> 0 2 4 6 8

for (let d = 0; d <= 100; d += 2) {
  console.log([d]);
}

// Print from 0 to 100
// if the number is multiple of 5 print 'You are easy'
// if the number is multiple of 7 print 'You are kind of hard'
// if the number is multiple of 7 and 5 print 'You are impossible'

for (let i = 0; i <= 100; i++) {
  if ([i] % 7 === 0 && [i] % 5 === 0) {
    console.log('You are impossible');
  } else if ([i] % 7 === 0) {
    console.log('You are kind of hard');
  } else if ([i] % 5 === 0) {
    console.log('You are easy');
  }
}

// Create an object with the next structure
const user = {
  age: 28,
  children: 0,
  favoriteFood: [
    {
      ingredients: ['Masa', 'slasa de tomate', 'jamon', 'queso'],
      isExensive: false,
      name: 'Pizza',
    },
    {
      ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'],
      isExpensive: false,
      name: 'Alitas',
    },
  ],
  favoriteMovies: [
    'Lord of the Rings',
    'Black Hawk Down',
    '13 hours: The Secrets Soldiers of Benghazi',
  ],
  friends: [
    {
      age: 29,
      children: 0,
      favoriteFood: [
        {
          ingredients: ['Tortilla', 'carne', 'verdura'],
          isExensive: false,
          name: 'Tacos',
        },
        {
          ingredients: ['Piezas de pollo', 'papas a la francesa', 'verdura'],
          isExpensive: false,
          name: 'Alitas',
        },
      ],
      favoriteMovies: ['Star wars', 'Pokémon', 'Spiderman'],
      hasChildren: false,
      isMarried: true,
      name: 'Edgar',
    },
  ],

  hasChildren: false,
  isMarried: true,
  name: 'Edgar',
};

// Validate -> if the object is empty print 'There is no user' if not, print 'I'm Andres and I'm 26 years old' using the object values

if (user) {
  console.log('There is not user');
} else {
  console.log(`I'm ${user.name} and I'm ${user.age} years old`);
}

// Validate -> if isMarried print 'Andres is already taken' if not, print 'Andres is available'

if (user.isMarried) {
  console.log('Andres is already taken');
} else {
  console.log('Andres is available');
}

// Add the key pets to all the user objects with a value of an empty array

user.pets = [];
user.friends.pets = [];

// Add to pets some string values

user.pets = ['dog', 'bunny'];
user.friends.pets = ['dog'];

// Print in console the amount of pets
// Create a copy of the global object
// Create a copy of the first object of friends key

console.log(user.pets.length);

// let user3 = Object.assign({}, user);

// const firendsClone = Object.assign({}, user.friends);

// Change the name of the copy global object without modifying the original object

// user3 = userClone;

// Extract just isMarried and hasChildren you should use destructuring

// let { isMarried, hasChildren } = user;

// Extract the values of children in new variables using destructuring (There would be two variables called Shamid and Dante )

// let { children: [Shamid, Dante] } = user;

// Extract the name of each favoriteFood object value

console.log(user.favoriteFood.values());

// Modify the name value and change it to upper case

user.name = user.name.toUpperCase();

// Add a key called luckyNumber and assign a random value between 0 and 100 that should be rounded

// user.luchyNumber = Math.round(Math.random() * 100);

// Sort the values of children key

user.children.sort();

// Validate -> if luckyNumber is multiple of 3 print 'Your lucky number is awesome', if it is not print 'Sorry but your lucky number is awful'

// if (user.luchyNumber % 3 === 0){
//   console.log('Your lucky number is awesome');
// } else {
//   console.log('Sorry but your lucky number is awful');
// }
