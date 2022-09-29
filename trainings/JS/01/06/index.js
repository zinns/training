//Create an empty object

// let obj = {}

//Create an object that stores the next type of values: String, Number, Boolean, Array, Object
// Print in console the object's number value

// let obj = {
//     name: 'Andres',
//     age: 26,
//     isMale: true,
//     arr1: [],
//     object: {}
// }
// console.log(obj.age)

// Create an object called dog
// Add the key name with its value
// Add the key age with its value
// Add the key bark with the value 'woof woof'
// Add the key color with its value
// Delete the color property
// Print the keys (You should use some method)
// Print the values (You should use some method)
// Print the keys with its values (You should use some method)
// Print the next string 'This is Goddard and he is 2 years old' (You should use the object information for the name and the age)

// let obj = {
//     name: 'Mavis',
//     age: 2,
//     bark: 'woof woof',
//     color: 'white'
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// console.log(`This is ${obj.name} and he is ${obj.age} age`)

// let obj1 = delete obj.color
// console.log(obj)

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

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

//  if (obj >= 0){
//     console.log('No hay usuario')
//  } else {
//     console.log(`I'm ${obj.name} and I'm ${obj.age} yars old`)
//  }

// Validate if the children value has Shamid inside

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// if (obj.children.includes('Shamid')){
//     console.log(true)
// } else {
//     console.log(false)
// }

// Validate -> if isMarried print 'Andres is already taken' if not, print 'Andres is available'
// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// if (obj.isMarried === true){
//     console.log('Andres is already taken')
// } else{
//     console.log('Andres is available')
// }

// Add the key pets with a value of an empty array

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// obj.pets = []

// console.log(obj)

// Add to pets key the value of 'Dog' and 'Bunny'

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// obj.pets = []

// obj.pets.push('Dog','Bunny')

// console.log(obj)

// Print in console the amount of pets

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// // console.log(obj.children.length)

// // Create a copy of the last object

// let obj1 = {obj}

// // console.log(obj1)

// // Change the name of the second object without modifying the original object

// obj1.name = 'José'

// console.log(obj1)

// Extract just isMarried and hasChildren you should use destructuring

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// let {isMarried, hasChildren} = obj

// console.log(isMarried,hasChildren)

// Extract the values of children in new variables using destructuring
// (There would be two variables called Shamid and Dante )

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// let {children}

// console.log(childen)

// Modify the name value and change it to upper case

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// let obj1 = obj.name.toUpperCase()

// console.log(obj1)

// Add a key called luckyNumber and assign a random value between 0 and 100 that should be rounded

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// obj.luckyNumber = Math.random(Math.round(100))

// console.log(obj.luckyNumber)

// Add a key called favoriteMovie with its value

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// let obj1 = obj.favoriteMovie = 'Lord of the Rings'

// console.log(obj1.reverse())

// Sort the values of children key

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// let obj1 = obj.children

// console.log(obj1.sort())

// Validate -> if luckyNumber is multiple of 8 print 'Your lucky number is awesome', if it is not print 'Sorry but your lucky number is awful'

// let obj = {
//   name: 'Andres',
//   age: 26,
//   isMarried: true,
//   hasChildren: 'yes',
//   children: ['Shamid', 'Dante'],
// };

// obj.luckyNumber = Math.random(Math.round(100))

// if(obj.luckyNumber % 8){
//     console.log('Your lucky number is awesome')
// }else{
//     console.log('Sorry but your lucky number is awful')
// }
