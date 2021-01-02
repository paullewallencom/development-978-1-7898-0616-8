// Variables are like boxes or containers for storing
// data. They are named containers and you can use
// the name to retrieve the value later.

// variables begin with the keyword 'var' (unless
// using the new ES6 'let' or 'const' which we will
// cover shortly), followed by the variable name, the
// assignment operator '=' and finally the value.

// JavaScript is a dynamically typed language.
// The type of a variable is inferred from
// the value assigned to it.

// variable names cannot be JavaScript keywords or
// reserved words.
// http://www.w3schools.com/js/js_reserved.asp

// Variable names must start with a letter, a
// dollar sign '$' or an underscore '_'. They
// cannot begin with a number.

// error - Begins with a number
// var 1variable = '1Variable';

// error - reserved word
// var var = 'variable';


// Preferred style is camel case. This makes the
// variable easier to read.

// Not camel case...harder to read
// var firstname = "Jack";


// Camel case...easier to read

// Names should be descriptive

// var fullName = 'Jack Davis'; // String
// var itemsInCart = 32; // Number
// var isCartEmpty = false; // Boolean - true or false
//
// var firstName = 'Jack';
// var lastName = 'Davis';
// //
// // console.log(firstName + ' ' + lastName);
// // console.log(firstName, lastName);
// //
// // console.log(`${firstName} ${lastName}`);
// //
// // console.log(`The IT Directors name is: ${firstName}`);
//
// // var fullName = firstName + ' ' + lastName;
// var fullName = `${firstName} ${lastName}`;
//
// console.log(fullName);

// ES6 has added two more keywords for declaring
// variables - 'const' and 'let'
// let is very similar to var with the exception that
// the variable can not be redeclared after declaration
// var is also scoped to the nearest 'function block' while
// let is scoped to the nearest 'enclosing block' - which
// can be a smaller scope than a function block. Both are
// global if not in a block. In general, good practice to use
// let instead of var unless you need to use var for a specific
// reason.

var dogsName = 'Cody';

var dogsName = 'Harper';

let catsName = 'Pickles';
console.log(catsName);
catsName = 'Wuss';
console.log(catsName);

const name = 'Rick Smith';
let position = 'Purchasing Manager';
let salary = 60000;
let extension = 215;
const birthDate = 'March 14th, 1974';
