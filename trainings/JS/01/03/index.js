// // Create a new branch from develop with the base structure

// // edgar.zea/javascript/exercise-3
// // Inside the JS folder create a folder 03 with an index.js file, do the following:

// // What are "Truthy" and "Falsy" values?
// // Truthy son aquellos que su valor sea verdadero, falsy es cuando su valor se vuelve en un boleano como un valor en 0 o string vacío.
// // Write one truthy and falsy example
// //truthy: console.log(1 === 1) falsy: console.log(0)
// // Write and example using truthy and falsy values with the "if/else" conditional
// if (1 === 1) {
//   console.log('truthy');
// }

// if (0) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }
// // For the next exercises use "if/else" condition, if the evaluation is true print true and if it false print false:
// // Print in console if 5 is multiple of 10
// if (5 % 10) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 10 is multiple of 5
// if (10 % 5) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 5
// if (5 % 5) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 1 is multiple of 5
// if (1 % 5) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 1
// if (5 % 1) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 2 is multiple of 8
// if (2 % 8) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 8 is multiple of 2
// if (8 % 2) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 2 is multiple of 5
// if (2 % 5) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 10 is multiple of 5
// if (10 % 5) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 10
// if (5 % 10) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 20 is multiple of 5
// if (20 % 5) {
//   console.log('si es multiplo');
// } else {
//   console.log('no es multiplo');
// }
// // Print in console if 5 is multiple of 20
// if (5 % 20) {
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
// // let ScreenSizes = 2000;
// // if (ScreenSizes >= 320 && ScreenSizes <= 480) {
// //   console.log('Pantalla para disposivitos mobiles');
// // } else if (ScreenSizes >= 481 && ScreenSizes <= 768) {
// //   console.log('pantalla para dispositivos de tablet');
// // } else if (ScreenSizes >= 769 && ScreenSizes <= 1024) {
// //   console.log('pantalla para dispositivos de laptop');
// // } else if (ScreenSizes >= 1025 && ScreenSizes <= 1200) {
// //   console.log('pantalla para dispositivos de escirotrio');
// // } else if (ScreenSizes > 1201) {
// //   console.log('pantalla para dipositivos muy grandes');
// // }
// // Repeat the screen exercise using "switch"
// // let ScreenSizes = 480;
// // switch (ScreenSizes >= 320 && ScreenSizes <= 480) {
// //     case 480:
// //     console.log('Pantalla para disposivitos mobiles');
// //     break;
// // }
// // Create a variable that stores numbers
// // Create another variable that stores nothing;
// // let num = 80;

// // Use "if/else" conditional to evaluate if the first variable is equal to the result of 100 / 45 and assign the result to the second variable inside the conditional
// // The final value of the second variable should be a boolean
// // let result;
// // if (num === 100 / 45) {
// //   num = result;
// //   console.log(result);
// // } else {
// //   console.log('no es igual');
// // }

// // Create a variable that stores the next string "Andrés is learning JavaScript"
// // Create another variable called "isLearning" that should store the result of the comparison of the first variable with "Andrés is playing soccer".
// // Use ternary conditional to solve this.
// // The final value of the second variable should be a boolean

// let JavaScript = 'Andres is learning JavaScript';

// let Soccer = 'Andres is playing soccer';

// JavaScript === Soccer ? console.log('si es igual') : console.log('no es igual');

// // Create a variable that stores the next string "JavaScript"
// // Create another variable called "whatIsLearning", if the first variable is equal to "JavaScript" the second variable should store "Andres is learning JavaScript" and if is not the second variable should store "Andres is learning other thing".
// // Use ternary conditional to solve this.
// let lenguage = 'JavaScript';

// let whatIsLearning;

// lenguage === 'JavaScript'
//   ? console.log((whatIsLearning = 'Andres is learning JavaScript'))
//   : console.log((whatIsLearning = 'Andres is learning other thing'));

// The final value of the second variable should be a string
// Create a variable that stores numbers.
// Use ternary conditional to determine the following cases:
// If the value is greater or equal than 2000 it should print "You are a millionaire"
// If the value is smaller than 2000 and greater or equal than 1000 it should print "You almost are a millionaire"
// If the value is smaller than 1000 and greater than 500 it should print "You have to work"
// If the value is smaller than 500 it should print "You are a homeless"
// When the task has been completed you have to make a PR to develop

// let numero = 1000;

// numero >= 2000
//   ? console.log('eres millonario')
//   : numero < 2000 && numero >= 1000 ? console.log('casi eres millonario') ? numero < 1000 && numero > 500 : console.log("tienes que trabajar");

// numero < 1000 && numero > 500 console.log("tienes que trabajar")
// numero < 500 console.log("eres un vagabundo")
