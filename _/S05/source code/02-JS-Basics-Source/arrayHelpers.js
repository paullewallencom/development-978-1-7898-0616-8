// Array Helper methods

// let array = [32, 49, 54, 58];
//
// console.log('FOR LOOP========');
// for (var x = 0; x < array.length; x++) {
//   console.log(array[x]);
// }
//
// console.log('FOR EACH======');
// array.forEach(function(value) {
//   console.log(value);
// });
//
// console.log('FOR EACH Fat arrow=====');
// array.forEach(value => console.log(value));
//
// console.log('GRADES=========');
// let grades = [98, 87, 82, 74, 89, 87];
//
// let sum = 0;
//
// grades.forEach(grade => sum += grade);
//
// let average = sum / grades.length;
// console.log(`Our average is ${average.toFixed(0)}`);

// Map Helper
// iterate through an array and perform some operation on each element.
// One of the most commonly used helpers.

let array = [1, 2, 3, 4, 5];
let addOne = [];

for (let x = 0; x < array.length; x++) {
  addOne.push(array[x] + 1);
}

console.log(addOne);

// With MAP Helper
// let addOneMap = array.map(function(value) {
//   return value + 1;
// });

let addOneMap = array.map(value => value + 1);

console.log(addOneMap);

let vehicles = [
  { id: 1, make: 'Dodge', model: 'Ram 1500', year: '2011', is4WD: true },
  { id: 2, make: 'Dodge', model: 'Charger R/T', year: '2015', is4WD: false },
  { id: 3, make: 'Nissan', model: 'Rogue', year: '2016', is4WD: false }
];

let truckDriver = {
  vehicleId: 1,
  name: 'Jack'
};

let models = vehicles.map(vehicle => vehicle.model);

console.log(models);

// Filter

// find
// function driverForVehicle(vehicles, driver) {
//   return vehicles.find(function(vehicle) {
//     return vehicle.id === driver.vehicleId;
//   });
// }
function driverForVehicle(vehicles, driver) {
  return vehicles.find(vehicle => vehicle.id === driver.vehicleId);
}

let driver = driverForVehicle(vehicles, truckDriver);
console.log(driver);

// // let filteredVehicles = vehicles.filter(vehicle => vehicle.make === 'Dodge');
// let filteredVehicles = vehicles.filter(function(vehicle) {
//   return vehicle.make === 'Dodge';
// });
//
// console.log(filteredVehicles);
//
// // FIND
// // let vehicle = vehicles.find(function(vehicle) {
// //   return vehicle.make === 'Dodge';
// // });
// let vehicle = vehicles.find(vehicle => vehicle.make === 'Nissan');
//
// console.log(vehicle);

// EVERY and SOME quick look
// with 'every', we can take a look at an array and see if EVERY element meets
// some condition

// let areAll4WD = vehicles.every(function(vehicle) {
//   return vehicle.is4WD === true;
// });

let areAll4WD = vehicles.every(vehicle => vehicle.is4WD === true);

console.log(areAll4WD);

// let areSome4WD = vehicles.some(function(vehicle) {
//   return vehicle.is4WD === true;
// });

let areSome4WD = vehicles.some(vehicle => vehicle.is4WD === true);

console.log(areSome4WD);

// Reduce
let grades = [98, 87, 82, 74, 89, 87];

let sum = 0;

for (let x = 0; x < grades.length; x++) {
  sum += grades[x];
}

console.log(`sum = ${sum}`);
console.log(`Our average is ${(sum / grades.length).toFixed(1)}`);

// let total = grades.reduce(function(sum, grade) {
//   return sum + grade;
// }, 0);

let total = grades.reduce((sum, grade) => {
  return sum + grade;
}, 0);

console.log(`total = ${total}`);
console.log(`Our average is ${(total / grades.length).toFixed(1)}`);
