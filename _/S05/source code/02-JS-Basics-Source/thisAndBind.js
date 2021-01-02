// In JavaScript, the thing called 'this' is the object
// that 'owns' the JavaScript code

let hotRod = {};

hotRod = {
  sound: 'vroooom',
  soundOff: function() {
    console.log(this.sound);
  }
};

hotRod.soundOff();

let soundFunction = hotRod.soundOff; // this loses its context
soundFunction();

// We can 'bind' 'this' to the object hotRod.
// This will give soundFunction a 'this' context
let boundSoundFunction = soundFunction.bind(hotRod);
boundSoundFunction();

let person1 = {
  name: 'Joe'
};

let person2 = {
  name: 'Jane'
};

function logName() {
  return this.name;
}

console.log(logName());
console.log(logName.bind(person1)());
console.log(logName.bind(person2)());

let number = {
  x: 24,
  y: 22
};

let count = function() {
  console.log(this.x + this.y); // no 'this' context here
}

count();

let boundCount = count.bind(number);

boundCount();
