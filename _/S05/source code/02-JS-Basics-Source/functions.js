// Functions let you group a series of statements together to perform
// some task. Once a function is created, it can be reused over
// and over in your code. If you find yourself repeating statements in your code,
// then a function may be the answer to avoid that repetition.
// DRY - Don't repeat yourself

// Functions in javascript are first class objects...They can have properties
// and methods just like any other object. Where they differ, is in the fact
// that functions can be called.

sayHi();
sayHiWithParameter('Joe');

function sayHi() {
  console.log('Well, hello there');
}

function sayHiWithParameter(name) {
  console.log(`Well hello there ${name}`);
}

// sayHi();
// sayHiWithParameter('Joe');

function addThreeNumbers(a, b, c) {
  console.log(a + b + c);
}

addThreeNumbers(10, 20, 30);

function sayHello(firstName, lastName) {
  return `Well, hello ${firstName} ${lastName}`;
}

let greeting = sayHello('Billy', 'Moore');
console.log(greeting);

// Function expressions - assign anonymous (unnamed) function to a variable

// console.log(sayGreeting());

// let sayGreeting = function() {
//   return 'Well, Hello there';
// }

// console.log(sayGreeting());

// IIFE - Immediately Invoked Function Expression
let sayGreeting2 = (function() {
  return 'Hi, how are you';
}());

console.log(sayGreeting2);

let sayGreeting3 = (function(firstName, lastName) {
  return `Well, hello there ${firstName} ${lastName}`;
}('Billy', 'Moore'));

console.log(sayGreeting3);

// With ES6, we now have a new syntax for functions. They are called 'Arrow functions',
// or 'Fat Arrow functions'. Arrow functions do not bind 'this' =>

let speakNames = firstName => `The names are ${firstName}`;


console.log(speakNames('Jack', 'Jill'));
