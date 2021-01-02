// Loops and Conditionals
// With conditionals we evaluate a condition and take a code path
// depending on the value of that Condition
let a = 9;
let b = 32;

if (a > b) { // false
  console.log('a is greater than b');
} else if (a === b) { // false
  console.log('a is equal to b');
} else {
  console.log('a is less than b');
}

// Anything that returns a boolean value can be the condition
if ((a + b) > (a * b - 248)) { // evaluates to (42 > 40) // true
  console.log('The condition is true');
} else {
  console.log('The condition is false');
}

// Multiple conditions can be 'chained' together
// && = 'AND'
// || = 'OR'
if ((true) && (true)) { // true
  console.log('true');
} else {
  console.log('false');
}

if ((true) && (false)) { // false
  console.log('true');
} else {
  console.log('false');
}

if ((false) || (true)) {
  console.log('true');
} else {
  console.log('false');
}

let isDarkOutside = false; // Boolean value

if (isDarkOutside) {
  console.log('It is dark outside');
} else {
  console.log('It is daylight');
}

// switch statement
let color = 'black';

switch(color) {
  case 'yellow':
    console.log('The color is Yellow');
    break;
  case 'green':
    console.log('The color is Green');
    break;
  case 'red':
    console.log('The color is Red');
    break;
  default:
    console.log('We couldn\'t determine the color');
}

// Loops - With loops, we run some block of code over and over until a given condition
// is met.

// while loop

console.log('While loop');
let counter = 5;
while (counter <= 10) {
  console.log(`The value is ${counter++}`);
}

// Do while loop
console.log('Do while loop');
counter = 5;
do {
  console.log(`The value is ${counter}`);
  counter++;
} while (counter <= 10);

// for loop
console.log('For Loop');
for (let x = 0; x <= 10; x++) {
  console.log(`The value is ${x}`);
}
