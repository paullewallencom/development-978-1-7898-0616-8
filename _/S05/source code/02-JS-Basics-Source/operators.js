// Operators are used to assign values, compare values, perform arithmetic
// operations and more. Operators.

// One Ternary operator
// condition ? expr1 : expr2 // expr1 will be evaluated if condition is true,
// otherwise expr2 will be evaluated.

// Binary operators require two operands
// 1 + 2;
// a * b;

// Unary Operators
// Requires one operand before or after the operator
// a++; // postfix increment
// ++a; // prefix increment

let a = 1;
console.log(a++); // prints '1' and THEN increments by 1
console.log(a);
console.log(++a); // increments and THEN prints the value

// Arithmetic Operators - `+, -, *, /, %` - take numerical values or variables
// and return one numerical value.
let total = 32 + 46 - 13; // 65
console.log(total);
let product = 5 * 5; // 25
console.log(product);

let totalCost = 32.00; // assign value of 32.00 to totalCost

// Equality
console.log(3 == '3'); // true - checks for equal value
// Strict Equality
console.log(3 === '3'); // false - checks for equal value AND type

let firstName = 'Jack';
let lastName = 'Davis';
console.log(firstName + ' ' + lastName);

console.log(25 % 5); // no remainder
console.log(23 % 4); // remainder 3
