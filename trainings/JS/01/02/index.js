// //Create a new branch from develop with the base structure

// edgar.zea/javascript/exercise-2
// Inside the JS folder create a folder 02 with an index.js file, do the following:

//Which are the Assignment operators?
// El principal oderador de asignacion es el signo de igual "=" en el que se le indica que valor llevara.
// Describe its function
// despues existen "+=","-=","*=","/=" que indica una operación un ejemplo sería el resultado despues de "+=" sumar el valor anterior con el nuevo el resultado sera la nueva asignación o nuevo valor.

//Which are the Arithmetic operators?
//Los operadores aritméticos son "+,-,*,/,%,**"
//Describe its function
//el signo "+" suma el signo "-" resta el signo "/" divide el signo "%" saca el modular de un número el signo "*" multiplica y el signo "**" hace operación a potencia.

//Which are the Comparison operators?
//Los operadores de comparación son "==" "===" "!=" "!=="
//Describe its function
//el operador "==" valida el tipo de  valor
// el operador "===" si es estrictamente igual, valida tipo de dato y valor
// el operador "!=" si no es igual, el tipo de valor
// el operador "!==" si no estrictamente igual, el tipo de dato y valor

//Which are the Logic operators?
//los operadores logicos son "&&" , "||"
//Describe its function
//operador "&&" siempre regresara true, en caso de encontrar un false se detendra y no seguira con la operación.
//operador "||" en algun caso tiene que ser verdadero, siempre que encuentra un verdadero este seguira realizando su operación hasta el termino

//Write an example about "**" operator
console.log(3 ** 3);

//Print in console the result about "2**5"
console.log(2 ** 5);
//Print in console the result about "5**5"
console.log(5 ** 5);
//Print in console the result about "2**5"
console.log(2 ** 5);
//Print in console the result about "5 % 10"
console.log(5 % 10);
//Print in console the result about "10 % 5"
console.log(10 % 5);
//Print in console the result about "5 % 5"
console.log(5 % 5);
//Print in console the result about "1 % 5"
console.log(1 % 5);
//Print in console the result about "5 % 1"
console.log(5 % 1);
//Print in console the result about "2 % 8"
console.log(2 % 8);
//Print in console the result about "8 % 2"
console.log(8 % 2);

//Print in console if 2 is modular of 5
// if (2 % 5 === 0) {
//   console.log('si es modular');
// } else {
//   console.log('no es modular');
// }

// Print in console if 10 is modular of 5
// if (10 % 5 === 0) {
//   console.log('si es modular');
// } else {
//   console.log('no es modular');
// }
// Print in console if 5 is modular of 10
// if (5 % 10 === 0) {
//   console.log('si es modular');
// } else {
//   console.log('no es modular');
// }
// Print in console if 20 is modular of 5
// if (20 % 5 === 0) {
//   console.log('si es modular');
// } else {
//   console.log('no es modular');
// }
// Print in console if 5 is modular of 20
// if (5 % 20 === 0) {
//   console.log('si es modular');
// } else {
//   console.log('no es modular');
// }

// Print in console the evaluation of something with "===" that returns true
console.log(8 === 8);
// Print in console the evaluation of something with "===" that returns false
console.log(8 === '8');
// Print in console the evaluation of something with "==" that returns true
console.log(2 == 2);
// Print in console the evaluation of something with "==" that returns false
console.log(2 == 'dos');
// Print in console the evaluation of something with "!==" that returns true
console.log(2 !== 1);
// Print in console the evaluation of something with "!=" that returns false
console.log(1 != 1);
// Print in console the evaluation of something using "!" that returns true
console.log(!false);
// Print in console the evaluation of something using "!" that returns false
console.log(!true);
// Print in console the evaluation of something using "!!" that returns true
console.log(!!true);
// Print in console the evaluation of something using "!!" that returns false
console.log(!!false);
// Print in console the evaluation of something using ">" that returns true
console.log(6 > 5);
// Print in console the evaluation of something using ">" that returns false
console.log(5 > 6);
// Print in console the evaluation of something using ">=" that returns true
console.log(5 >= 5);
// Print in console the evaluation of something using ">=" that returns false
console.log(4 >= 5);
// Print in console the evaluation of something using "<" that returns true
console.log(2 < 1);
// Print in console the evaluation of something using "<" that returns false
console.log(1 < 2);
// Print in console the evaluation of something using "<=" that returns true
console.log(1 <= 1);
// Print in console the evaluation of something using "<=" that returns false
console.log(2 <= 1);
// Print in console the evaluation of something using "&&" with two evaluations that returns true
console.log(true && true);
// Print in console the evaluation of something using "&&" with two evaluations that returns false
console.log(true && false);
// Print in console the evaluation of something using "||" with two evaluations that returns true
console.log(true || false);
// Print in console the evaluation of something using "||" with two evaluations that returns false
console.log(false || false);
// Print in console the evaluation of something using "&&" and "||" with two evaluations that returns true
console.log((true && true) || true || false);
// Print in console the evaluation of something using "&&" and "||" with two evaluations that returns false
console.log((false && false) || false || false);
// Print in console the evaluation of something using "&&" and "||" and "!" with two evaluations that returns true
console.log((true && true) || (!false && true));
// Print in console the evaluation of something using "&&" and "||" and "!" with two evaluations that returns false
console.log((!true && false) || (!true && !true));
// Print in console the evaluation of something using "&&" and "||" and "!!" with two evaluations that returns true
console.log((!!true && true) || (true && !!true));
// Print in console the evaluation of something using "&&" and "||" and "!!" with two evaluations that returns false
console.log((!!false && false) || (false && !!false));
// Print in console the evaluation of something using "&&" and "||" and "!" and "!!" with two evaluations that returns true
console.log((!false && true) || (!!true && true));
// Print in console the evaluation of something using "&&" and "||" and "!" and "!!" with two evaluations that returns false
console.log((!true && false) || (!!false && !true));

// Write an example about "+=" operator
let num = 0;

num += 1;
console.log(num);

// Write an example about "-=" operator
let num2 = 2;

num2 -= 1;
console.log(num2);
// Write an example about "/=" operator
let num3 = 10;

num3 /= 5;
console.log(num3);
// Write an example about "*=" operator
let num4 = 3;

num4 *= 1;
console.log(num4);
// Write an example about "++" operator
let num5 = 0;

num5++;
console.log(num5);
// Write an example about "--" operator
let num6 = 5;

num6--;
console.log(num6);

// When the task has been completed you have to make a PR to develop
