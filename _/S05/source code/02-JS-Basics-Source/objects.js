// Object literal
var truck = {
  // properties
  make: 'Dodge',
  wheels: 4
};

// Bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels`);

// Dot notation
console.log(`I have a ${truck.make} that has ${truck.wheels} wheels`);

// Object literal
var employee = {
  // properties
  firstName: 'Joe',
  lastName: 'Blow',
  // method
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Property
console.log(`Our IT Director is ${employee.firstName}`);
console.log(`His full name is ${employee.fullName()}`);

// Object constructor function
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullDescription = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

// Create new instances with the new keyword
let myTruck = new Vehicle('Dodge', 'Ram 1500', '2011');
let myWifesCar = new Vehicle('Dodge', 'Charger R/T', '2015');
let myDaughtersCar = new Vehicle('Nissan', 'Rogue', '2016');

console.log(myTruck.year, myTruck.make, myTruck.model);

console.log(myWifesCar.getFullDescription());

// function createVehicle(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year,
//     getFullDescription: function() {
//       return `${year} ${make} ${model}`;
//     }
//   };
// }

// ES6 Enhanced Object Literal Syntax
function createVehicle(make, model, year) {
  return {
    make,
    model,
    year,
    getFullDescription() {
      return `${year} ${make} ${model}`;
    }
  };
}

let myTruck2 = createVehicle('Dodge', 'Ram 1500', '2011');
let myWifesCar2 = createVehicle('Dodge', 'Charger R/T', '2015');
let myDaughtersCar2 = createVehicle('Nissan', 'Rogue', '2016');

console.log(myTruck2.getFullDescription());
console.log(myWifesCar2.getFullDescription());
console.log(myDaughtersCar2.getFullDescription());
