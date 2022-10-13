// // Create a new branch from develop with the base structure

// // edgar.zea/javascript/exercise-3
// // Inside the JS folder create a folder 03 with an index.js file, do the following:

// // What are "Truthy" and "Falsy" values?
// // Truthy son aquellos que su valor sea verdadero, falsy es cuando su valor se vuelve en un boleano como un valor en 0 o string vacío.
// // Write one truthy and falsy example
// //truthy: console.log(1 === 1) falsy: console.log(0)
// // Write and example using truthy and falsy values with the "if/else" conditional

// if (1) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }

// if (0) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }
// // For the next exercises use "if/else" condition, if the evaluation is true print true and if it false print false:
// // Print in console if 5 is multiple of 10

// if (5 % 10 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 10 is multiple of 5
// if (10 % 5 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 5
// if (5 % 5 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 1 is multiple of 5
// if (1 % 5 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 1
// if (5 % 1 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 2 is multiple of 8
// if (2 % 8 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 8 is multiple of 2
// if (8 % 2 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 2 is multiple of 5
// if (2 % 5 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 10 is multiple of 5
// if (10 % 5 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 10
// if (5 % 10 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 20 is multiple of 5
// if (20 % 5 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 20
// if (5 % 20 === 0) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// // }
// // Create a variable that stores the value of one of these screen sizes
// // 320px—480px: Mobile devices
// // 481px—768px: iPads, Tablets
// // 769px—1024px: Small screens, laptops
// // 1025px—1200px: Desktops, large screens
// // 1201px and more—Extra large screens, TV
// // Create a condition using "if/else" that prints the value of each screen based on the value of the variable declared before.
// // Example: If the screen variable value is 2000 it should print "Extra large screens, TV", but if I change the value to 400 it should print another thing.
const screenSizes = 2000;

if (screenSizes <= 480) {
  console.log('Pantalla para disposivitos mobiles');
} else if (screenSizes <= 768) {
  console.log('pantalla para dispositivos de tablet');
} else if (screenSizes <= 1024) {
  console.log('pantalla para dispositivos de laptop');
} else if (screenSizes <= 1200) {
  console.log('pantalla para dispositivos de escirotrio');
} else {
  console.log('pantalla para dipositivos muy grandes');
}

// // Repeat the screen exercise using "switch"
const ScreenSizes = 600;

switch (true) {
  case ScreenSizes <= 480:
    console.log('Pantalla para disposivitos mobiles');
    break;
  case ScreenSizes <= 768:
    console.log('dispositivo para tablet');
    break;
  case ScreenSizes <= 1024:
    console.log('dispositivo de escritorio');
    break;
  case ScreenSizes <= 2000:
    console.log('dispositivo muy grandes');
    break;
  default:
    console.log('algo salio mal');
}
// Create a variable that stores numbers

const num = 80;

// Create another variable that stores nothing;
// Use "if/else" conditional to evaluate if the first variable is equal to the result of 100 / 45 and assign the result to the second variable inside the conditional
// The final value of the second variable should be a boolean

let emptyVariable = '';

if (num === 100 / 45) {
  emptyVariable = true;
} else {
  emptyVariable = false;
}

console.log(emptyVariable);

// Create a variable that stores the next string "Andrés is learning JavaScript"
// Create another variable called "isLearning" that should store the result of the comparison of the first variable with "Andrés is playing soccer".
// Use ternary conditional to solve this.
// The final value of the second variable should be a boolean

// const JavaScript = 'Andres is learning JavaScript';

// const isLearning = JavaScript === 'Andrés is playing soccer' ? true : false;

// console.log(isLearning);

// Create a variable that stores the next string "JavaScript"
// Create another variable called "whatIsLearning", if the first variable is equal to "JavaScript" the second variable should store "Andres is learning JavaScript" and if is not the second variable should store "Andres is learning other thing".
// Use ternary conditional to solve this.
// The final value of the second variable should be a string

const lenguage = 'JavaScript';

const whatIsLearning =
  // eslint-disable-next-line multiline-ternary
  lenguage === 'JavaScript' ? 'Andres is learning JavaScript' : 'Andres is learning other thing';

console.log(whatIsLearning);

// Create a variable that stores numbers.
// Use ternary conditional to determine the following cases:
// If the value is greater or equal than 2000 it should print "You are a millionaire"
// If the value is smaller than 2000 and greater or equal than 1000 it should print "You almost are a millionaire"
// If the value is smaller than 1000 and greater than 500 it should print "You have to work"
// If the value is smaller than 500 it should print "You are a homeless"

const number = 499;

number >= 2000
  ? console.log('You are a millionaire')
  : number < 2000 && number >= 1000
  ? console.log('You almost are a millionaire')
  : number < 1000 && number >= 500
  ? console.log('You have work')
  : console.log('You are a homeless');