// // Modify all 'you' to 'I' from 'You step into the Road, and if you don’t keep your feet, there is no knowing where you might be swept off to' and print it (All 'you' should be changed no matter if it is in Upper or Lower case)

let str =
  'You step into the Road, and if you don’t keep your feet, there is no knowing where you might be swept off to';

str = str.toLowerCase().replaceAll('you', 'I');

console.log(str);

// // Find the last letter of 'Harry Potter and the half-blood prince' and print it

const str1 = 'Harry Potter and the half-blood prince';

console.log(str1[str1.length - 1]);

// //Create a variable that stores an empty array

// let arr = [];

// //Create a variable that stores an array with a string, a boolean and a number as values

// let user = ['Andres', true, 26];

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica. Access to the array and print Alejandra

// let names = [
//   'Edgar',
//   'Andres,',
//   'Alejandra',
//   'Harumi',
//   'Alejandro',
//   'Veronica',
// ];

// console.log(names[2]);

// //Create an array from the next string 'Fast and Furious', the array should contain only words.

const array = 'Fast and Furious'.split(' ');

console.log(array);
// //Create an array with the next structure

// const users = [
//   ['Edgar', 28, 'man'],
//   ['Bob', 'Elmo', 'Mia'],
//   ['Alejandra', 22, 'Woman'],
//   ['Gyda', 'Godard'],
//   ['Andres', 26, 'Man'],
//   ['Shamid'],
//   ['Harumi', 26, 'Woman'],
//   ['Dante'],
// ];

// // Create a variable with the next string 'Harry'
// // Create a variable with the next string 'Potter'
// // Print this string 'Harry Potter and the Goblet of fire' using the previous variables on template

// let name = 'Harry';

// let lastName = 'Potter';

// console.log(`${name} ${lastName} y el caliz de fuego`);

// //Create a variable with the next string 'Harry Potter and the prisoner of Azkaban'
// // Reverse the string to this -> "nabakzA fo renosirp eht dna rettoP yrraH"

const name1 = 'Harry Poteer and the prisioner of Azkaban';

const reverse = name1.split('').reverse().join('');

console.log(reverse);

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and sort it

const peoples = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

console.log(peoples.sort());

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and add at the end 'Shamid'

const peoples1 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

// const add = peoples1.push('Shamid');

console.log(peoples1);

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and add at the beginning 'Dante'

const peoples2 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

// const add1 = peoples2.unshift('Dante');

console.log(peoples2);

// // Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and remove the last item

const peoples3 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

// let delet = peoples3.pop();

console.log(peoples3);

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and remove the first item

const peoples4 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

// let delet1 = peoples4.shift();

console.log(peoples4);

// // Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and print only 'Alejandra, Harumi'

const peoples5 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

console.log(peoples5[2], peoples5[3]);

// // Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and replace Alejandro for 'Shamid'

const peoples6 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

// let replace = peoples6.splice(4, 1, 'Shamid');

console.log(peoples6);

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and replace 'Alejandro, Veronica' for 'Dante'

const peoples7 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

// let replace1 = peoples7.splice(4, 2, 'Dante');

console.log(peoples7);

// // //Create an array with 'Harry'
// // Create an array with 'Ron'
// // Create an array with 'Hermione'
// // Mix the last three variables

const n1 = ['Harry'];
const n2 = ['Ron'];
const n3 = ['Hermione'];

console.log(n1.concat(n2, n3));

// // Create an array with these values Edgar, Andres, Alejandra, Harumi and validate if 'Gyda' is in the array

const arr1 = ['Edgar', 'Andres', 'Alejandra', 'Harumi'];

console.log(arr1.includes('Gyda'));

// //Create an array with these values Edgar, Andres, Alejandra, Harumi and validate if the array is empty or not

const arr2 = ['Edgar', 'Andres', 'Alejandra', 'Harumi'];

if (arr2.length > 0) {
  console.log(true);
} else {
  console.log(false);
}

// //Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro and print the first item, the middle item and the last item (prints should be in one line)

const arr3 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro'];

console.log(arr3[0], arr3[Math.floor(arr3.length / 2)], arr[arr.length - 1]);

// // Create an array with these values Edgar, Andres, Alejandra, Harumi, Alejandro, Veronica and add 'Shamid, Dante' between 'Harumi, Alejandro'
// // Expected output -> Edgar, Andres, Alejandra, Harumi, Shamid, Dante, Alejandro, Veronica

const peoples8 = ['Edgar', 'Andres', 'Alejandra', 'Harumi', 'Alejandro', 'Veronica'];

peoples8.splice(4, 0, 'Shamid', 'Dante');

console.log(peoples8);

// Create a variable called score and assign one number between 0 and 10, use 2 decimals
// Evaluate the score against 6
// If the score is greater or equal than six print 'Success'
// If the score is lower than six print 'Fail'
// You have to use some method to round score

const score = Math.random() * 10;

if (Math.round(score) >= 6) {
  console.log('Éxito');
} else {
  console.log('Fallo');
}

// Repeat the evaluation using 4 as magic number and use some method to round up the score

const score1 = Math.random() * 10;

if (Math.round(score1) >= 4) {
  console.log('Éxito');
} else {
  console.log('Fallo');
}

// Repeat the evaluation using 2 as magic number and use some method to round down the score

const score2 = Math.random() * 10;

if (Math.round(score2) >= 6) {
  console.log('Éxito');
} else {
  console.log('Fallo');
}

// Print a random number between 0 and 10 without using decimals

console.log(Math.floor(Math.random() * 10));

// Print a random number between 5 and 10 without using decimals

console.log(Math.ceil(Math.random() * (10 - 5)) + 5);

// Create an array with the next values: 10, 25, 55, 32, 78, 94, 24

const arr = [10, 25, 55, 32, 78, 94, 24];

// Create a random number that does not exceed the length of the array
// Print the array value selected based on the random number

console.log(arr[Math.floor(Math.random() * arr.length)]);

// Repeat the last exercise using strings as array values

const arrStrings = ['Andres', 'Edgar', 'Ale', 'Harumi', 'Shamid', 'Dante', 'McQueen'];

console.log(arrStrings[Math.floor(Math.random() * arrStrings.length)]);

// console.log(Math.floor(Math.random() * arrStrings[e]));
