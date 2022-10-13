/* eslint-disable no-constant-condition */
// What are "Truthy" and "Falsy" values?
// truthy son valores los cuales se comportan como un boleano obteniendo un valor existente, Falsy es cuando el valor no existe como ejemplo un 0 o un string vacío y también se comporta como un boleano.
// Write one truthy and falsy example
// un ejemplo de un Truthy es el siguiente:
const nombre = 'Andres';

if (nombre) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// un ejemplo de un Falsy
const nombre1 = '';

if (nombre1) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}
// Write and example using truthy and falsy values with the "if/else" conditional

if (1) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// // For the next exercises use "if/else" condition, if the evaluation is true print true and if it false print false:
// // Print in console if 5 is multiple of 10

if (5 % 10 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 10 is multiple of 5

if (10 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 5 is multiple of 5

if (5 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 1 is multiple of 5

if (1 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 5 is multiple of 1

if (5 % 1 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 2 is multiple of 8

if (2 % 8 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 8 is multiple of 2

if (8 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 2 is multiple of 5

if (2 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 10 is multiple of 5

if (10 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 5 is multiple of 10

if (5 % 10 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 20 is multiple of 5

if (20 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// // Print in console if 5 is multiple of 20

if (5 % 20 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Create a variable that stores the value of one of these screen sizes
// 320px—480px: Mobile devices
// 481px—768px: iPads, Tablets
// 769px—1024px: Small screens, laptops
// 1025px—1200px: Desktops, large screens
// 1201px and more—Extra large screens, TV

const ScreenSizes = 800;

if (ScreenSizes <= 480) {
  console.log('pantalla para dispositivos mobiles');
} else if (ScreenSizes <= 768) {
  console.log('pantalla para disopsitivos de tableta');
} else if (ScreenSizes <= 1024) {
  console.log('pantalla para dispositivos laptop');
} else if (ScreenSizes <= 1200) {
  console.log('pantalla para dispositivos de escritorio');
} else {
  console.log('pantalla para dispositivos grandes/tv');
}

// Resolve this task using "switch"

switch (true) {
  case ScreenSizes <= 480:
    console.log('pantalla para disopsitivos mobiles');
    break;
  case ScreenSizes <= 768:
    console.log('pantalla para disopsitivos de tableta');
    break;
  case ScreenSizes <= 1024:
    console.log('pantalla para dispositivos de laptop');
    break;
  case ScreenSizes <= 1200:
    console.log('pantalla para dispositivos de escritorio');
    break;
  default:
    console.log('pantalla para dispositivos grandes/tv');
}

// Create a variable that stores numbers
// Create another variable that stores nothing;
// Use "if/else" conditional to evaluate if the first variable is equal to the length of 'Edgar' and assign the result to the second variable inside the conditional
// The final value of the second variable should be a boolean

const numbers = 10;

let empty;

if (numbers === 'Edgar'.length) {
  empty = true;
  console.log(empty);
} else {
  empty = false;
  console.log(empty);
}

// Create a variable that stores the next string "Andrés is learning JavaScript"
// Create another variable called "isLearning" that should store the result of the comparison of the first variable with the length of "Andrés is playing soccer".
// Use ternary conditional to solve this.
// The final value of the second variable should be a boolean

const learning = 'Andres is learning JavaScript';

// eslint-disable-next-line multiline-ternary
const isLearning = learning === 'Andres is playing soccer'.length ? true : false;

console.log(isLearning);

// Create a variable that stores the next string "JavaScript"
// Create another variable called "whatIsLearning", if the first variable is equal to "JavaScript" the second variable should store "Andres is learning JavaScript" and if is not the second variable should store "Andres is learning other thing".
// Use ternary conditional to solve this.
// The final value of the second variable should be a string

// const string = 'JavaScript';

// const whatIsLearning =
//   string === 'JavaScript' ? 'Andres is learning JavaScript' : 'Andres is learning other thing';

// console.log(whatIsLearning);

// Print the length of 'Andres is learning Front End Development'

console.log('Andres is learning Front End Development'.length);

// Print the result of cutting 'The Lord of the Rings' by 'f'

console.log('The Lord Of the Rings'.split('f'));

// Print the result of cutting 'The Lord of the Rings' using index 5 and 9

console.log('The Lord of the Rings'.slice(5, 9));

// Print the result of mixing 'Andres' and 'Soto'

const name = 'Andres';

console.log(name.concat('Soto'));

// Print the result of mixing 'Andres' and 'Soto' using '-'

const nameUser = ['Andres', 'Soto'];

console.log(nameUser.join('-'));

// Print if 'Rings' is inside 'The Lord of the Rings'

console.log('Lord of the Rings'.includes('Rings'));

// Print the result of changing 'Rings' for 'Donuts' from 'The Lord of the Rings'

console.log('The Lord of the Rings'.replace('Rings', 'Donuts'));

// Modify 'The Lord of the Rings' to upper case and print it

console.log('The Lord of the Rings'.toUpperCase());

// Modify 'The Lord of the Rings' to lower case and print it

console.log('The Lord of the Rings'.toLowerCase());

// Modify all 'the' to 'this' from 'The Lord of the Rings' and print it (All 'the' should be changed no matter if it is in Upper or Lower case)

let movie = 'The Lord of the Rings';

movie = movie.toLowerCase();

console.log(movie.replaceAll('the', 'this'));

// Find the last letter of 'The Lord of the Rings' and print it

const str = 'The Lord of the Rings';

console.log(str[str.length - 1]);

// Explain what is Template Literals
// se utilizán para unir variables con strings

// Write an example of Template Literals

const nam = 'Andres';

const lastName = 'Soto';

console.log('Hola soy', `${nam} ${lastName}`, 'y tengo 26 años');

// Find the index of 'g' in 'The Lord of the Rings'

console.log('The Lord of the Rings'.indexOf('g'));

// Remove all the start and end spaces in ' The Lord of the Rings '

console.log(' The Lord of the Rings '.trim());

// Print the letter positioned in index 4 of 'The Lord of the Rings'

console.log('The Lord of the Rings'[4]);
